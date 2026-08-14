import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API endpoint to book a call and sync directly to Google Calendar
app.post('/api/book-call', async (req, res) => {
  try {
    const {
      fullName,
      email,
      industry,
      company,
      projectType,
      projectNotes,
      selectedDate,
      selectedTime,
      packageDetails,
    } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: 'Full name and email address are required.' });
    }

    // Determine target start date/time in Philippine Time (Asia/Manila, UTC+8)
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1; // 1-indexed
    let day = new Date().getDate();

    if (selectedDate) {
      const dateMatch = selectedDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (dateMatch) {
        year = parseInt(dateMatch[1], 10);
        month = parseInt(dateMatch[2], 10);
        day = parseInt(dateMatch[3], 10);
      } else {
        const parsed = new Date(selectedDate);
        if (!isNaN(parsed.getTime())) {
          year = parsed.getFullYear();
          month = parsed.getMonth() + 1;
          day = parsed.getDate();
        }
      }
    }

    // Parse time (e.g., "9:00 AM PHT", "2:30 PM PHT", "14:00")
    let hours = 14;
    let minutes = 0;
    if (selectedTime) {
      const timeMatch = selectedTime.match(/(\d+):(\d+)\s*(AM|PM)?/i);
      if (timeMatch) {
        hours = parseInt(timeMatch[1], 10);
        minutes = parseInt(timeMatch[2], 10);
        const ampm = timeMatch[3] ? timeMatch[3].toUpperCase() : null;
        if (ampm === 'PM' && hours < 12) hours += 12;
        if (ampm === 'AM' && hours === 12) hours = 0;
      }
    }

    const pad = (num: number) => num.toString().padStart(2, '0');
    
    // Construct ISO string with +08:00 offset for Philippine Time
    const startIsoString = `${year}-${pad(month)}-${pad(day)}T${pad(hours)}:${pad(minutes)}:00+08:00`;
    
    // Calculate 45 minutes duration
    let endHours = hours;
    let endMinutes = minutes + 45;
    let endDay = day;
    let endMonth = month;
    let endYear = year;
    if (endMinutes >= 60) {
      endHours += Math.floor(endMinutes / 60);
      endMinutes = endMinutes % 60;
    }
    if (endHours >= 24) {
      endHours = endHours % 24;
      endDay += 1;
      // Basic month overflow check
      const daysInMonth = new Date(endYear, endMonth, 0).getDate();
      if (endDay > daysInMonth) {
        endDay = 1;
        endMonth += 1;
        if (endMonth > 12) {
          endMonth = 1;
          endYear += 1;
        }
      }
    }

    const endIsoString = `${endYear}-${pad(endMonth)}-${pad(endDay)}T${pad(endHours)}:${pad(endMinutes)}:00+08:00`;

    const descriptionText = [
      `🎯 Sales Funnel Strategy Session with Rance Coon`,
      `👤 Client: ${fullName}`,
      `✉️ Email: ${email}`,
      industry ? `🏭 Industry: ${industry}` : '',
      company ? `🏢 Company / Brand: ${company}` : '',
      `🚀 Project Type: ${projectType || 'Custom Funnel Build'}`,
      packageDetails ? `📦 Selected Package: ${packageDetails}` : '',
      projectNotes ? `📝 Project Goals & Notes:\n${projectNotes}` : '',
      `\nScheduled via Rance Coon Portfolio Booking System.`
    ].filter(Boolean).join('\n\n');

    let calendarResult = { success: false, message: '', eventLink: '' };

    try {
      let authClient: any;
      const clientId = process.env.GOOGLE_CLIENT_ID;
      const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
      const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

      if (clientId && clientSecret && refreshToken) {
        const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
        oauth2Client.setCredentials({ refresh_token: refreshToken });
        authClient = oauth2Client;
      } else {
        authClient = new google.auth.GoogleAuth({
          scopes: ['https://www.googleapis.com/auth/calendar.events'],
        });
      }

      const calendar = google.calendar({ version: 'v3', auth: authClient });

      const calendarEvent = {
        summary: `Sales Funnel Strategy Call: ${fullName} (${company || 'New Client'})`,
        description: descriptionText,
        start: {
          dateTime: startIsoString,
          timeZone: 'Asia/Manila',
        },
        end: {
          dateTime: endIsoString,
          timeZone: 'Asia/Manila',
        },
        attendees: [
          { email: email, displayName: fullName },
          { email: 'rancecoonbusiness@gmail.com', displayName: 'Rance Coon' }
        ],
        conferenceData: {
          createRequest: {
            requestId: `call-${Date.now()}`,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
      };

      let response;
      try {
        response = await calendar.events.insert({
          calendarId: 'rancecoonbusiness@gmail.com',
          requestBody: calendarEvent,
          conferenceDataVersion: 1,
          sendUpdates: 'all',
        });
      } catch (calErr) {
        response = await calendar.events.insert({
          calendarId: 'primary',
          requestBody: calendarEvent,
          conferenceDataVersion: 1,
          sendUpdates: 'all',
        });
      }

      calendarResult = {
        success: true,
        message: 'Scheduled directly into Google Calendar (Asia/Manila)!',
        eventLink: response.data.htmlLink || '',
      };
    } catch (gErr: any) {
      console.warn('Google Calendar API notice:', gErr?.message || gErr);
      calendarResult = {
        success: false,
        message: 'Booking received!',
        eventLink: '',
      };
    }

    // Format output date for user display
    const formattedDateDisplay = `${year}-${pad(month)}-${pad(day)}`;
    const formattedTimeDisplay = `${hours > 12 ? hours - 12 : hours === 0 ? 12 : hours}:${pad(minutes)} ${hours >= 12 ? 'PM' : 'AM'} PHT`;

    // Compute Google Calendar direct Add Event URL
    const startDateUtc = new Date(Date.UTC(year, month - 1, day, hours - 8, minutes, 0));
    const endDateUtc = new Date(startDateUtc.getTime() + 45 * 60 * 1000);
    const formatGCalDate = (d: Date) => d.toISOString().replace(/-|:|\.\d+/g, '');

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(`Sales Funnel Strategy Call: ${fullName} (${company || 'New Client'})`)}` +
      `&dates=${formatGCalDate(startDateUtc)}/${formatGCalDate(endDateUtc)}` +
      `&details=${encodeURIComponent(descriptionText)}` +
      `&add=${encodeURIComponent(email)},rancecoonbusiness@gmail.com` +
      `&ctz=Asia/Manila`;

    return res.json({
      success: true,
      booking: {
        fullName,
        email,
        company,
        projectType,
        selectedDateFormatted: formattedDateDisplay,
        selectedTimeFormatted: formattedTimeDisplay,
        calendarResult,
        googleCalendarUrl,
        appointmentScheduleUrl: 'https://calendar.app.google/xQjuEkT7ynqgW5r97'
      },
    });

  } catch (error: any) {
    console.error('Error handling booking request:', error);
    return res.status(500).json({ error: error.message || 'Failed to complete booking' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

if (process.env.NODE_ENV !== 'test') {
  startServer();
}

export default app;

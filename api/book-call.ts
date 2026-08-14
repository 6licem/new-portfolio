export async function processBooking(body: any) {
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
  } = body || {};

  if (!fullName || !email) {
    return {
      status: 400,
      data: { error: 'Full name and email address are required.' },
    };
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

  let calendarResult = { success: false, message: '', eventLink: '', meetLink: '' };

  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

    if (clientId && clientSecret && refreshToken) {
      // 1. Get Access Token
      const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          refresh_token: refreshToken,
          grant_type: 'refresh_token',
        }),
      });

      if (!tokenResponse.ok) {
        throw new Error(`Failed to refresh access token: ${tokenResponse.status}`);
      }
      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      // 2. Prepare Event Payload
      const calendarEvent = {
        summary: `Sales Funnel Strategy Call: ${fullName} (${company || 'New Client'})`,
        description: descriptionText,
        start: { dateTime: startIsoString, timeZone: 'Asia/Manila' },
        end: { dateTime: endIsoString, timeZone: 'Asia/Manila' },
        attendees: [{ email: email, displayName: fullName, responseStatus: 'needsAction' }],
        guestsCanInviteOthers: false,
        guestsCanModify: false,
        guestsCanSeeOtherGuests: false,
        conferenceData: {
          createRequest: {
            requestId: `call-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
      };

      // 3. Insert Event
      const calendarId = encodeURIComponent('primary');
      const insertUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?conferenceDataVersion=1&sendUpdates=all`;
      
      let insertResponse = await fetch(insertUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(calendarEvent)
      });

      if (!insertResponse.ok) {
        console.warn('Calendar primary insert retry:', await insertResponse.text());
        const fallbackId = encodeURIComponent('rancecoonbusiness@gmail.com');
        const fallbackUrl = `https://www.googleapis.com/calendar/v3/calendars/${fallbackId}/events?conferenceDataVersion=1&sendUpdates=all`;
        insertResponse = await fetch(fallbackUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(calendarEvent)
        });
      }

      if (!insertResponse.ok) {
        throw new Error(`Failed to create calendar event: ${insertResponse.status}`);
      }

      const responseData = await insertResponse.json();

      calendarResult = {
        success: true,
        message: 'Strategy session scheduled directly in Google Calendar with Google Meet invite!',
        eventLink: responseData.htmlLink || '',
        meetLink: responseData.hangoutLink || responseData.conferenceData?.entryPoints?.[0]?.uri || '',
      };
    } else {
      const missing = [];
      if (!clientId) missing.push('GOOGLE_CLIENT_ID');
      if (!clientSecret) missing.push('GOOGLE_CLIENT_SECRET');
      if (!refreshToken) missing.push('GOOGLE_REFRESH_TOKEN');
      calendarResult = {
        success: false,
        message: `Missing environment variables: ${missing.join(', ')}`,
        eventLink: '',
        meetLink: '',
      };
    }
  } catch (gErr: any) {
    console.warn('Google Calendar API error:', gErr?.message || gErr);
    calendarResult = {
      success: false,
      message: `Google Calendar error: ${gErr?.message || 'API request failed'}`,
      eventLink: '',
      meetLink: '',
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

  return {
    status: 200,
    data: {
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
    }
  };
}

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  try {
    const result = await processBooking(body);
    return res.status(result.status).json(result.data);
  } catch (error: any) {
    console.error('Vercel booking function error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}

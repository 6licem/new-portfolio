import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { processBooking } from './api/bookCallHandler';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API endpoint to book a call and sync directly to Google Calendar
app.post('/api/book-call', async (req, res) => {
  try {
    const result = await processBooking(req.body);
    return res.status(result.status).json(result.data);
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

if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  startServer();
}

export default app;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import chatbotRoutes from './routes/chatbot.routes';
import careerRoutes from './routes/career.routes';
import academicRoutes from './routes/academic.routes';
import adminRoutes from './routes/admin.routes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'EduSphere API is running' });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/chatbot', chatbotRoutes);
app.use('/api/v1/career', careerRoutes);
app.use('/api/v1', academicRoutes); // handles /timetable, /exams, /events, etc.
app.use('/api/v1/admin', adminRoutes);

app.use(errorHandler);

export default app;

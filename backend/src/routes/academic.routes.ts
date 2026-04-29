import { Router } from 'express';
import { authenticate } from '../middleware/authenticate';

const router = Router();

// Mock endpoints for the academic modules to provide the structural design
router.get('/timetable', authenticate, (req, res) => res.json([]));
router.get('/exams', authenticate, (req, res) => res.json([]));
router.get('/syllabus', authenticate, (req, res) => res.json([]));
router.get('/notes', authenticate, (req, res) => res.json([]));
router.get('/events', authenticate, (req, res) => res.json([]));
router.get('/scholarships', authenticate, (req, res) => res.json([]));
router.get('/posts', authenticate, (req, res) => res.json([])); // Knowledge Hub

export default router;

import { Router } from 'express';
import { authenticate } from '../middleware/authenticate';
import { adminAuth } from '../middleware/adminAuth';

const router = Router();

// Admin protected endpoints structure
router.get('/analytics', authenticate, adminAuth, (req, res) => res.json({ users: 1240, pending: 5 }));
router.get('/users', authenticate, adminAuth, (req, res) => res.json([]));
router.get('/audit-logs', authenticate, adminAuth, (req, res) => res.json([]));

export default router;

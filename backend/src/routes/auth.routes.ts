import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { authenticate } from '../middleware/authenticate';

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authenticate, authController.getMe);

// Admin login mock
router.post('/admin/login', (req, res) => {
  res.json({ message: 'Admin login endpoint (Needs OTP logic)' });
});

export default router;

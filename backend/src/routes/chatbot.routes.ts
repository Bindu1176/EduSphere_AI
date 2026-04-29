import { Router } from 'express';
import { handleChat } from '../controllers/chatbot.controller';
import { authenticate } from '../middleware/authenticate';

const router = Router();

router.post('/message', handleChat);
// Additional routes like /history, /kb can go here

export default router;

import { Router } from 'express';
import { predictCareer } from '../controllers/career.controller';
import { authenticate } from '../middleware/authenticate';

const router = Router();

router.post('/predict', authenticate, predictCareer);

export default router;

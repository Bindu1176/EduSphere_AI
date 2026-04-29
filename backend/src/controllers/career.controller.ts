import { Request, Response } from 'express';
import { predictCareerPath } from '../services/ai.service';
import prisma from '../config/database';

export const predictCareer = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;
    const { skills, codingLevel, interests, degree, communication } = req.body;

    const aiResult = await predictCareerPath({ skills, codingLevel, interests, degree, communication });

    // Save prediction to database
    if (userId) {
      await prisma.careerReport.create({
        data: {
          userId,
          skills: skills ? skills.join(',') : '',
          codingLevel: codingLevel || 'Beginner',
          interests: interests ? interests.join(',') : '',
          degree: degree || 'Unknown',
          certificates: '',
          communication: communication || 'Basic',
          aiResult: JSON.stringify(aiResult)
        }
      });
    }

    res.json(aiResult);
  } catch (error: any) {
    res.status(500).json({ error: 'Career prediction failed' });
  }
};

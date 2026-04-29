import { Request, Response } from 'express';
import { getChatbotResponse } from '../services/ai.service';

export const handleChat = async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const aiResponse = await getChatbotResponse(message, history);
    
    res.json({ response: aiResponse });
  } catch (error: any) {
    res.status(500).json({ error: 'Chatbot service unavailable at this time' });
  }
};

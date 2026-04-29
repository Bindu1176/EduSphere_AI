import { Request, Response, NextFunction } from 'express';
import prisma from '../config/database';
import bcrypt from 'bcrypt';

export const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { adminUniqueId } = req.body;
  const user = (req as any).user;

  if (!user || user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  }

  if (!adminUniqueId) {
    return res.status(400).json({ error: 'Admin Unique ID is required' });
  }

  try {
    const adminProfile = await prisma.adminProfile.findUnique({
      where: { userId: user.id }
    });

    if (!adminProfile) {
      return res.status(403).json({ error: 'Admin profile not found' });
    }

    const isValid = await bcrypt.compare(adminUniqueId, adminProfile.adminUniqueId);
    if (!isValid) {
      // In a real app, log failed attempts to AuditLogs here
      return res.status(403).json({ error: 'Invalid Admin ID' });
    }
    
    next();
  } catch (error) {
    next(error);
  }
};

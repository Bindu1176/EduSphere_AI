import prisma from '../config/database';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt';

export const registerUser = async (data: any) => {
  const { email, password, name, role, course, semester, branch, graduationYear } = data;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error('User already exists');

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      name,
      role: role.toUpperCase(),
      studentProfile: role === 'STUDENT' ? {
        create: { course, semester: parseInt(semester), branch }
      } : undefined,
      seniorProfile: role === 'SENIOR' ? {
        create: { course, graduationYear: parseInt(graduationYear) }
      } : undefined
    }
  });

  return { message: 'Registration successful', userId: user.id };
};

export const loginUser = async (data: any) => {
  const { email, password, role } = data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid credentials');

  if (user.role !== role.toUpperCase()) throw new Error('Invalid role selected');

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = generateToken({ id: user.id, role: user.role, email: user.email, name: user.name });

  return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
};

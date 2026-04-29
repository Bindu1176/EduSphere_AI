import { defineConfig } from '@prisma/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  earlyAccess: true,
  schema: {
    kind: 'single',
    filePath: 'prisma/schema.prisma'
  },
  studio: {
    port: 5555
  },
  migrations: {
    connectionString: process.env.DATABASE_URL || 'postgresql://user:pass@localhost:5432/edusphere'
  }
});

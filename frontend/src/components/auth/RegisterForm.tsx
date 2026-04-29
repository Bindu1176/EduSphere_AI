'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Mail, Lock, User, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const RegisterForm = () => {
  const router = useRouter();
  const [role, setRole] = useState('STUDENT');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.role = role;

    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Registration failed');
      }

      // Automatically login after register or just redirect to login
      router.push('/login?registered=true');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 rounded-2xl glass-card relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Join EduSphere
        </h2>
        <p className="text-light-muted">Create an account to continue</p>
      </div>

      <div className="flex bg-dark p-1 rounded-lg mb-6 border border-white/5">
        {['STUDENT', 'SENIOR', 'ADMIN'].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
              role === r 
                ? 'bg-primary text-white shadow-lg' 
                : 'text-light-muted hover:text-white'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {error && <div className="mb-4 text-red-400 text-sm text-center">{error}</div>}

      <form className="flex flex-col gap-4" onSubmit={handleRegister}>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light-muted" />
          <input 
            type="text" 
            name="name"
            placeholder="Full Name" 
            required
            className="w-full bg-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light-muted" />
          <input 
            type="email" 
            name="email"
            placeholder="University Email" 
            required
            className="w-full bg-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light-muted" />
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            required
            className="w-full bg-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="relative">
          <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light-muted" />
          <input 
            type="text" 
            name="course"
            placeholder="Course (e.g. B.Tech CSE)" 
            required
            className="w-full bg-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {role === 'STUDENT' ? (
          <>
            <input 
              type="number" 
              name="semester"
              placeholder="Semester" 
              required
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
            />
            <input 
              type="text" 
              name="branch"
              placeholder="Branch" 
              required
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
            />
          </>
        ) : role === 'SENIOR' ? (
          <input 
            type="number" 
            name="graduationYear"
            placeholder="Graduation Year" 
            required
            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
          />
        ) : (
          <input 
            type="text" 
            name="adminUniqueId"
            placeholder="Admin Unique ID (ESADM-XXXX)" 
            required
            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
          />
        )}

        <Button type="submit" className="w-full py-6 mt-2" disabled={isLoading}>
          {isLoading ? 'Creating account...' : `Register as ${role}`}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-light-muted">
        Already have an account?{' '}
        <Link href="/login" className="text-primary hover:underline font-medium">
          Log in
        </Link>
      </div>
    </div>
  );
};

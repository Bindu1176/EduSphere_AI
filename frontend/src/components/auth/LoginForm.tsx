'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Mail, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const LoginForm = () => {
  const router = useRouter();
  const [role, setRole] = useState('STUDENT');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.role = role;

    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const json = await res.json();
      
      if (!res.ok) {
        throw new Error(json.error || 'Login failed');
      }

      // Save token and user info
      localStorage.setItem('edusphere_token', json.token);
      localStorage.setItem('edusphere_user', JSON.stringify(json.user));
      
      if (json.user.role === 'ADMIN') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
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
          Welcome Back
        </h2>
        <p className="text-light-muted">Sign in to your EduSphere account</p>
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

      {role === 'ADMIN' ? (
        <div className="text-center py-4">
          <p className="text-light-muted mb-4">Admin accounts use a secure portal.</p>
          <Button variant="outline" className="w-full" onClick={() => router.push('/admin-login')}>
            Go to Admin Portal →
          </Button>
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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

        <div className="flex items-center justify-between text-sm mt-2 mb-4">
          <label className="flex items-center gap-2 text-light-muted cursor-pointer hover:text-white transition-colors">
            <input type="checkbox" className="rounded border-white/10 bg-dark text-primary focus:ring-primary focus:ring-offset-dark" />
            Remember me
          </label>
          <a href="#" className="text-primary hover:underline">Forgot password?</a>
        </div>

        <Button type="submit" className="w-full py-6" disabled={isLoading}>
          {isLoading ? 'Signing in...' : `Login as ${role}`}
        </Button>
      </form>
      )}

      <div className="mt-6 text-center text-sm text-light-muted">
        Don't have an account?{' '}
        <Link href="/register" className="text-primary hover:underline font-medium">
          Register
        </Link>
      </div>
    </div>
  );
};

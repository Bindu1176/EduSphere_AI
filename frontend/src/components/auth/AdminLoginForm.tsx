'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export const AdminLoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    adminUniqueId: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          role: 'ADMIN'
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Admin verification failed');
      }

      localStorage.setItem('edusphere_token', data.token);
      localStorage.setItem('edusphere_user', JSON.stringify(data.user));
      
      router.push('/admin');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card p-8 w-full max-w-md mx-auto mt-20 relative overflow-hidden border-red-500/30">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 to-red-400" />
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          🛡️ Admin Secure Portal
        </h2>
        <p className="text-red-400 text-sm">Authorized Personnel Only</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-950/30 border border-red-500/50 text-red-400 text-xs rounded text-center">
          {error}
        </div>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-light-muted mb-1">Admin ID</label>
          <input 
            type="text" 
            required
            value={formData.adminUniqueId}
            onChange={(e) => setFormData({...formData, adminUniqueId: e.target.value})}
            className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 text-white"
            placeholder="ESADM-XXXX-XXXX"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-light-muted mb-1">Email Address</label>
          <input 
            type="email" 
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 text-white"
            placeholder="admin@edusphere.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-light-muted mb-1">Password</label>
          <input 
            type="password" 
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 text-white"
            placeholder="••••••••"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full mt-4 bg-red-600 hover:bg-red-700"
        >
          {isLoading ? 'Verifying...' : 'Verify & Login'}
        </Button>
        
        <div className="text-center mt-4 p-3 bg-red-950/30 rounded-lg border border-red-900/50">
          <p className="text-red-400/80 text-xs flex items-center justify-center gap-1">
            <span>⚠️</span> All sessions are monitored
          </p>
        </div>
      </form>
    </div>
  );
};

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdminSidebar } from '@/components/layout/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('edusphere_user') || '{}');
    if (user.role !== 'ADMIN') {
      router.push('/admin-login');
    } else {
      setIsAdmin(true);
    }
  }, [router]);

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-dark flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 flex flex-col relative">
        {/* Simple Admin Header */}
        <header className="h-16 border-b border-red-500/20 bg-dark/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">
           <h1 className="font-bold text-white flex items-center gap-2">
             <span>🛡️</span> Admin Dashboard
           </h1>
           <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-red-400 border border-red-500/30 bg-red-500/10 px-2 py-1 rounded">ID: ESADM-A9B2-C4D1</span>
              <button className="text-sm text-light-muted hover:text-white">Logout</button>
           </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 relative">
          {children}
        </main>
      </div>
    </div>
  );
}

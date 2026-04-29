'use client';

import { Bell, Search, User as UserIcon, LogOut, Settings as SettingsIcon } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export const DashboardHeader = () => {
  const [user, setUser] = useState<any>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('edusphere_user');
    if (storedUser) setUser(JSON.parse(storedUser));

    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: 'New Note Uploaded', message: 'Data Structures notes for Unit 3 are now available.', time: '5m ago', unread: true },
    { id: 2, title: 'Exam Alert', message: 'The Mid-Sem schedule for Semester 4 has been released.', time: '2h ago', unread: true },
    { id: 3, title: 'AI Recommendation', message: 'Based on your coding skills, check out the Google Interview Guide.', time: '1d ago', unread: false },
  ];

  return (
    <header className="h-16 border-b border-white/10 bg-dark/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-50 w-full">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-light-muted" />
          <input 
            type="text" 
            placeholder="Search academic resources..." 
            className="w-full bg-dark-card border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative p-2 rounded-lg transition-colors ${showNotifications ? 'bg-white/10 text-white' : 'text-light-muted hover:text-white'}`}
          >
            <Bell className="w-5 h-5" />
            {notifications.some(n => n.unread) && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-dark" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 glass-card shadow-2xl border-white/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right">
              <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                <h3 className="font-semibold text-white text-sm">Notifications</h3>
                <span className="text-[10px] text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full uppercase">3 New</span>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className={`p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${n.unread ? 'bg-primary/5' : ''}`}>
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-medium text-white">{n.title}</span>
                      <span className="text-[10px] text-light-muted">{n.time}</span>
                    </div>
                    <p className="text-xs text-light-muted line-clamp-2">{n.message}</p>
                  </div>
                ))}
              </div>
              <div className="p-2 text-center border-t border-white/5">
                <button className="text-xs text-primary hover:underline font-medium">View All Notifications</button>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 border-l border-white/10 pl-4">
          <div className="text-right hidden md:block">
            <div className="text-sm font-medium text-white">{user?.name || 'Student'}</div>
            <div className="text-xs text-light-muted capitalize">{user?.role?.toLowerCase() || 'Student'}</div>
          </div>
          
          <button 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-sm uppercase shadow-lg hover:scale-105 transition-transform"
          >
            {user?.name ? user.name.substring(0, 2) : 'U'}
          </button>

          {showProfileMenu && (
            <div className="absolute right-6 top-16 w-56 glass-card shadow-2xl border-white/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right">
              <div className="p-4 border-b border-white/5 bg-white/5">
                <p className="text-sm font-medium text-white">{user?.name}</p>
                <p className="text-xs text-light-muted truncate">{user?.email}</p>
              </div>
              <div className="p-2">
                <Link href="/profile" className="flex items-center gap-3 px-3 py-2 text-sm text-light-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  <UserIcon size={16} /> My Profile
                </Link>
                <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-sm text-light-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  <SettingsIcon size={16} /> Settings
                </Link>
                <button 
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = '/login';
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

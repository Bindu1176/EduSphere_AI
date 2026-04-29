'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Home, Bot, Calendar, FileText, BookOpen, 
  Files, CalendarDays, Users, Compass, 
  Award, Download, User, Settings, LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock hook for now
const useRole = () => ({ role: 'student', canUpload: false });

export const Sidebar = () => {
  const pathname = usePathname();
  const { canUpload } = useRole();

  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: Home },
    { label: 'AI Chatbot', href: '/chatbot', icon: Bot },
    { label: 'Timetable', href: '/timetable', icon: Calendar },
    { label: 'Exams', href: '/exams', icon: FileText },
    { label: 'Syllabus', href: '/syllabus', icon: BookOpen },
    { label: 'Notes', href: '/notes', icon: Files },
    { label: 'Events', href: '/events', icon: CalendarDays },
    { label: 'Knowledge Hub', href: '/knowledge-hub', icon: Users },
    { label: 'Career Predictor', href: '/career-predictor', icon: Compass },
    { label: 'Scholarships', href: '/scholarships', icon: Award },
    { label: 'Downloads', href: '/downloads', icon: Download },
    { label: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <aside className="w-64 bg-dark-card border-r border-white/10 flex flex-col h-screen fixed top-0 left-0">
      <div className="p-6 border-b border-white/10 flex items-center gap-2">
        <Image src="/logo.svg" alt="EduSphere" width={140} height={32} />
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === item.href 
                ? "bg-primary text-white" 
                : "text-light-muted hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 flex flex-col gap-1">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-light-muted hover:bg-white/5 hover:text-white transition-colors w-full text-left">
          <Settings className="w-4 h-4" /> Settings
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors w-full text-left">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </aside>
  );
};

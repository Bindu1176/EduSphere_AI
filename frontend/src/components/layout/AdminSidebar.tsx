'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart, Users, Clock, Calendar, FileText, 
  BookOpen, CalendarDays, Award, Bot, Bell,
  FileKey, Settings, LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const AdminSidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Analytics', href: '/admin', icon: BarChart },
    { label: 'Users', href: '/admin/users', icon: Users },
    { label: 'Pending Approvals', href: '/admin/approvals', icon: Clock },
    { label: 'Timetables', href: '/admin/timetables', icon: Calendar },
    { label: 'Exams', href: '/admin/exams', icon: FileText },
    { label: 'Syllabus', href: '/admin/syllabus', icon: BookOpen },
    { label: 'Events', href: '/admin/events', icon: CalendarDays },
    { label: 'Scholarships', href: '/admin/scholarships', icon: Award },
    { label: 'Chatbot KB', href: '/admin/chatbot-kb', icon: Bot },
    { label: 'Notifications', href: '/admin/notifications', icon: Bell },
    { label: 'Audit Logs', href: '/admin/audit-logs', icon: FileKey },
  ];

  return (
    <aside className="w-64 bg-dark-card border-r border-red-500/20 flex flex-col h-screen fixed top-0 left-0">
      <div className="p-6 border-b border-red-500/20 flex flex-col gap-2 relative">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 to-red-400" />
        <Image src="/logo.svg" alt="EduSphere" width={140} height={32} />
        <span className="text-xs text-red-400 font-bold uppercase tracking-widest mt-2">Admin Portal</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1 custom-scrollbar">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === item.href 
                ? "bg-red-500/20 text-red-400 border border-red-500/30" 
                : "text-light-muted hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-red-500/20 flex flex-col gap-1">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-light-muted hover:bg-white/5 hover:text-white transition-colors w-full text-left">
          <Settings className="w-4 h-4" /> Settings
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors w-full text-left">
          <LogOut className="w-4 h-4" /> Secure Logout
        </button>
      </div>
    </aside>
  );
};

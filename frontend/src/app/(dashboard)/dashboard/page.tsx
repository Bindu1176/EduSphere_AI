'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Calendar, BookOpen, Trophy, FileText, ChevronRight, Bot, Target, Users } from 'lucide-react';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('edusphere_user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const stats = [
    { label: "Today's Classes", value: "3", icon: <Calendar size={18} />, color: "text-primary", link: "/timetable" },
    { label: "Upcoming Exams", value: "2", icon: <FileText size={18} />, color: "text-orange-400", link: "/exams" },
    { label: "Pending Tasks", value: "5", icon: <Trophy size={18} />, color: "text-green-400", link: "/knowledge-hub" },
    { label: "Saved Notes", value: "12", icon: <BookOpen size={18} />, color: "text-blue-400", link: "/notes" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      {/* Welcome Banner */}
      <div className="glass-card p-8 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 border-white/5 relative overflow-hidden group">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, <span className="gradient-text">{user?.name?.split(' ')[0] || 'Student'}</span>! 👋
          </h1>
          <p className="text-light-muted text-lg max-w-2xl">
            You have <span className="text-primary font-bold">3 classes</span> and <span className="text-orange-400 font-bold">2 deadlines</span> today. Your academic progress is looking great!
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Link key={i} href={stat.link}>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl flex flex-col gap-3 hover:border-primary/50 transition-all group">
              <div className="flex justify-between items-center">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>{stat.icon}</div>
                <ChevronRight size={16} className="text-light-muted group-hover:text-primary transition-colors" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-light-muted uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Timetable */}
        <div className="glass-card p-6 lg:col-span-2 border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="text-primary" size={20} /> Today's Timetable
            </h2>
            <Link href="/timetable">
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">View Full Schedule</Button>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { time: "09:00 - 10:30", subject: "Advanced Algorithms", type: "Room 402", active: true },
              { time: "11:00 - 12:30", subject: "Cloud Computing", type: "Lab 2", active: false },
              { time: "01:30 - 03:00", subject: "Neural Networks", type: "Room 105", active: false }
            ].map((cls, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${cls.active ? 'bg-primary/5 border-primary/30' : 'bg-dark border-white/5 opacity-70 hover:opacity-100'}`}>
                <div className={`text-sm font-bold w-32 ${cls.active ? 'text-primary' : 'text-light-muted'}`}>{cls.time}</div>
                <div className={`w-1 h-10 rounded-full ${cls.active ? 'bg-primary shadow-[0_0_10px_rgba(79,70,229,0.5)]' : 'bg-white/10'}`} />
                <div>
                  <div className="font-bold text-white">{cls.subject}</div>
                  <div className="text-xs text-light-muted">{cls.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-6 border-white/5">
          <h2 className="text-xl font-bold text-white mb-6">Quick Links</h2>
          <div className="flex flex-col gap-3">
            {[
              { name: "Exam Portal", icon: <FileText size={18} />, link: "/exams" },
              { name: "Syllabus Guide", icon: <BookOpen size={18} />, link: "/syllabus" },
              { name: "Academic Notes", icon: <FileText size={18} />, link: "/notes" },
              { name: "Event Calendar", icon: <Calendar size={18} />, link: "/events" },
              { name: "Scholarship Info", icon: <Trophy size={18} />, link: "/scholarships" },
            ].map((action, i) => (
              <Link key={i} href={action.link} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group">
                <div className="flex items-center gap-3 text-sm text-light-muted group-hover:text-white">
                  {action.icon} {action.name}
                </div>
                <ChevronRight size={14} className="text-white/20 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 bg-primary/5 border-primary/10 hover:border-primary/30 transition-all flex flex-col gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary"><Bot size={24} /></div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">AI Chatbot</h3>
            <p className="text-sm text-light-muted">Instant help with your studies, scheduling, and queries.</p>
          </div>
          <Link href="/chatbot" className="mt-auto">
            <Button className="w-full bg-primary hover:bg-primary-dark">Open Assistant</Button>
          </Link>
        </div>

        <div className="glass-card p-6 bg-secondary/5 border-secondary/10 hover:border-secondary/30 transition-all flex flex-col gap-4">
          <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary"><Users size={24} /></div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Knowledge Hub</h3>
            <p className="text-sm text-light-muted">Collaborate with seniors and access shared resources.</p>
          </div>
          <Link href="/knowledge-hub" className="mt-auto">
            <Button variant="secondary" className="w-full">Explore Hub</Button>
          </Link>
        </div>

        <div className="glass-card p-6 bg-accent/5 border-accent/10 hover:border-accent/30 transition-all flex flex-col gap-4">
          <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent"><Target size={24} /></div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Career Predictor</h3>
            <p className="text-sm text-light-muted">Identify your best career paths based on your skills.</p>
          </div>
          <Link href="/career" className="mt-auto">
            <Button className="w-full bg-accent hover:bg-accent/80 text-dark font-bold">Start Prediction</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

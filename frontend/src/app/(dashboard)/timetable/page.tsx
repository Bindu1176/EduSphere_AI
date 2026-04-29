'use client';

import { Calendar, Download, Eye, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function TimetablePage() {
  const currentClasses = [
    { time: '09:00 AM', subject: 'Advanced Algorithms', room: 'Room 402', teacher: 'Dr. Smith', type: 'Lecture' },
    { time: '11:00 AM', subject: 'Cloud Computing', room: 'Lab 2', teacher: 'Prof. Jones', type: 'Practical' },
    { time: '01:30 PM', subject: 'Neural Networks', room: 'Room 105', teacher: 'Dr. Miller', type: 'Lecture' },
  ];

  const recentUploads = [
    { title: 'Spring 2024 Final Timetable', date: 'April 28, 2024', size: '1.2 MB', type: 'PDF' },
    { title: 'Revised Lab Schedule - Sem 6', date: 'April 25, 2024', size: '850 KB', type: 'PDF' },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Timetable 📅</h1>
          <p className="text-light-muted">View your daily classes and download official schedules.</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download size={16} /> Download Full PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daily Schedule */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="glass-card p-6 border-white/5">
            <h2 className="text-xl font-bold text-white mb-6">Today's Schedule</h2>
            <div className="flex flex-col gap-4">
              {currentClasses.map((cls, i) => (
                <div key={i} className="flex items-center gap-6 p-5 rounded-2xl bg-dark border border-white/5 hover:border-primary/30 transition-all group">
                  <div className="flex flex-col items-center justify-center bg-primary/10 rounded-xl p-3 min-w-[100px] text-primary">
                    <Clock size={20} className="mb-1" />
                    <span className="font-bold text-sm">{cls.time}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{cls.subject}</h3>
                      <span className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded uppercase tracking-widest text-light-muted">{cls.type}</span>
                    </div>
                    <div className="flex gap-6 text-sm text-light-muted">
                      <div className="flex items-center gap-2"><MapPin size={14} /> {cls.room}</div>
                      <div className="flex items-center gap-2">👤 {cls.teacher}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Official Documents */}
        <div className="flex flex-col gap-6">
          <div className="glass-card p-6 border-white/5 bg-primary/5">
            <h2 className="text-xl font-bold text-white mb-6">Official Documents</h2>
            <p className="text-xs text-light-muted mb-4 uppercase tracking-widest font-bold">Recently Uploaded by Admin</p>
            <div className="flex flex-col gap-4">
              {recentUploads.map((doc, i) => (
                <div key={i} className="p-4 rounded-xl bg-dark border border-white/10 hover:border-primary/30 transition-all flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-red-400">
                      PDF
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white line-clamp-1">{doc.title}</div>
                      <div className="text-[10px] text-light-muted">{doc.date} • {doc.size}</div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="flex-1 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                      <Eye size={12} /> View
                    </button>
                    <button className="flex-1 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                      <Download size={12} /> Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { FileText, Download, Calendar, AlertTriangle, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ExamsPage() {
  const upcomingExams = [
    { date: 'May 15, 2024', time: '10:00 AM', subject: 'Advanced Algorithms', room: 'Exam Hall A', duration: '3 Hours' },
    { date: 'May 18, 2024', time: '10:00 AM', subject: 'Cloud Computing', room: 'Lab 2', duration: '2 Hours' },
    { date: 'May 22, 2024', time: '02:00 PM', subject: 'Neural Networks', room: 'Exam Hall B', duration: '3 Hours' },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Exams & Results 📝</h1>
          <p className="text-light-muted">Track your examination schedule, seat allotments and results.</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2">
          <Download size={16} /> Get Hall Ticket
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="glass-card p-6 border-orange-500/20 bg-orange-500/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Upcoming Mid-Sem Exams</h2>
                <p className="text-xs text-orange-400 font-medium">Starting in 16 Days • Ensure your attendance is above 75%</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {upcomingExams.map((exam, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-dark border border-white/5 hover:border-orange-500/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-3 min-w-[80px]">
                      <span className="text-[10px] text-light-muted uppercase font-bold">May</span>
                      <span className="text-xl font-bold text-white">{exam.date.split(' ')[1].replace(',', '')}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{exam.subject}</h3>
                      <div className="flex flex-wrap gap-4 text-xs text-light-muted mt-1">
                        <span className="flex items-center gap-1"><Clock size={12} /> {exam.time} ({exam.duration})</span>
                        <span className="flex items-center gap-1"><MapPin size={12} /> {exam.room}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-orange-500/30 text-orange-400 hover:bg-orange-500 hover:text-white">Guidelines</Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="glass-card p-6 border-white/5">
            <h2 className="text-xl font-bold text-white mb-6">Quick Resources</h2>
            <div className="flex flex-col gap-4">
              {[
                { title: 'Full Exam Schedule', type: 'PDF', color: 'text-red-400' },
                { title: 'Previous Year Papers', type: 'ZIP', color: 'text-blue-400' },
                { title: 'Seat Allotment (Unit-wise)', type: 'PDF', color: 'text-green-400' },
              ].map((res, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className={`text-xs font-bold ${res.color}`}>{res.type}</div>
                    <div className="text-sm font-medium text-white group-hover:text-primary transition-colors">{res.title}</div>
                  </div>
                  <Download size={14} className="text-light-muted group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 border-white/5 bg-primary/5 text-center">
            <h3 className="font-bold text-white mb-2">Need Exam Help?</h3>
            <p className="text-xs text-light-muted mb-4">Ask our AI Assistant for important topics and revision strategies.</p>
            <Button className="w-full bg-primary" size="sm">Ask EduSphere AI</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

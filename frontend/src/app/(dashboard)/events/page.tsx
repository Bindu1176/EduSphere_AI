'use client';

import { Calendar, MapPin, Users, Ticket, ChevronRight, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function EventsPage() {
  const events = [
    { title: 'TechFest 2024', date: 'May 10', time: '09:00 AM', location: 'Main Auditorium', attendees: '450+', category: 'Technical' },
    { title: 'Annual Cultural Night', date: 'May 12', time: '06:00 PM', location: 'Open Air Theater', attendees: '1200+', category: 'Cultural' },
    { title: 'AI/ML Workshop', date: 'May 14', time: '11:00 AM', location: 'Lab 4', attendees: '60', category: 'Workshop' },
    { title: 'Startup Pitch Deck', date: 'May 20', time: '02:00 PM', location: 'Seminar Hall', attendees: '150', category: 'Entrepreneurship' },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Campus Events 🎭</h1>
          <p className="text-light-muted">Stay updated with the latest workshops, festivals, and seminars.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Calendar size={16} /> My Calendar
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((ev, i) => (
          <div key={i} className="glass-card flex flex-col sm:flex-row overflow-hidden border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-full sm:w-40 bg-gradient-to-br from-primary/30 to-secondary/30 flex flex-col items-center justify-center p-6 text-white shrink-0 relative overflow-hidden">
              <div className="absolute top-0 left-0 p-2 opacity-20"><Calendar size={80} /></div>
              <span className="text-sm font-bold uppercase tracking-widest relative z-10">{ev.date.split(' ')[0]}</span>
              <span className="text-5xl font-black relative z-10">{ev.date.split(' ')[1]}</span>
            </div>
            
            <div className="flex-1 p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold px-2 py-1 bg-white/5 text-primary rounded-lg uppercase tracking-widest">{ev.category}</span>
                <button className="text-light-muted hover:text-white transition-colors"><Share2 size={16} /></button>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors leading-tight">{ev.title}</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-light-muted">
                    <MapPin size={14} className="text-primary" /> {ev.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-light-muted">
                    <Users size={14} className="text-secondary" /> {ev.attendees} Registered
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs font-bold text-white">{ev.time}</div>
                <button className="flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all">
                  Register Now <Ticket size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-12 border-dashed border-2 border-white/10 text-center flex flex-col items-center gap-4">
        <h3 className="text-xl font-bold text-white">Organizing an event?</h3>
        <p className="text-light-muted max-w-lg">Submit your event proposal through the Senior Hub or contact the Admin to get it featured on the campus calendar.</p>
        <Button variant="outline" className="border-white/20 hover:bg-white/5">Submit Proposal</Button>
      </div>
    </div>
  );
}

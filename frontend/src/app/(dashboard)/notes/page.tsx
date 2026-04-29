'use client';

import { FileText, Download, Eye, Search, Filter, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotesPage() {
  const categories = ['All', 'Computer Science', 'Mathematics', 'Physics', 'Management'];
  
  const notes = [
    { title: 'Data Structures - Unit 3 Complete', subject: 'Computer Science', date: 'April 28, 2024', author: 'Dr. Smith', size: '2.4 MB' },
    { title: 'Linear Algebra - Full Semester', subject: 'Mathematics', date: 'April 25, 2024', author: 'Prof. Miller', size: '4.1 MB' },
    { title: 'Operating Systems - Revision Notes', subject: 'Computer Science', date: 'April 22, 2024', author: 'Priya Sharma', size: '1.2 MB' },
    { title: 'Business Ethics - Case Studies', subject: 'Management', date: 'April 20, 2024', author: 'Dr. Rahul', size: '850 KB' },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Academic Notes 📚</h1>
          <p className="text-light-muted">Access and download verified course materials and handwritten notes.</p>
        </div>
        <Button className="flex items-center gap-2">
          <BookOpen size={16} /> My Saved Notes
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-light-muted" size={18} />
          <input 
            type="text" 
            placeholder="Search notes, subjects or authors..." 
            className="w-full bg-dark-card border border-white/5 rounded-2xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary shadow-xl transition-all"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2 border-white/5 bg-white/5">
            <Filter size={16} /> Filter
          </Button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button 
            key={cat}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
              cat === 'All' 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-dark-card border border-white/5 text-light-muted hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {notes.map((note, i) => (
          <div key={i} className="glass-card p-6 flex flex-col gap-5 border-white/5 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <FileText size={24} />
            </div>
            
            <div className="flex-1">
              <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{note.subject}</div>
              <h3 className="font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">{note.title}</h3>
              <div className="text-[10px] text-light-muted font-medium">By {note.author} • {note.date}</div>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
              <div className="flex justify-between text-[10px] text-light-muted mb-1 font-bold">
                <span>FORMAT: PDF</span>
                <span>SIZE: {note.size}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                  <Eye size={12} /> View
                </button>
                <button className="flex-1 py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                  <Download size={12} /> Get
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

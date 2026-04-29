'use client';

import { Book, Download, CheckCircle, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SyllabusPage() {
  const subjects = [
    { name: 'Advanced Algorithms', code: 'CS601', progress: 85, units: ['Complexity', 'Greedy', 'DP', 'Graphs', 'NPC'] },
    { name: 'Cloud Computing', code: 'CS602', progress: 60, units: ['Virtualization', 'SaaS/PaaS', 'AWS', 'Security'] },
    { name: 'Neural Networks', code: 'CS603', progress: 40, units: ['Perceptron', 'Backprop', 'CNN', 'RNN', 'GANs'] },
    { name: 'Database Management', code: 'CS604', progress: 95, units: ['SQL', 'Normalization', 'Transactions', 'NoSQL'] },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Course Syllabus 📖</h1>
          <p className="text-light-muted">Track your progress and access detailed curriculum for all subjects.</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download size={16} /> Get Semester 6 Syllabus
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((sub, i) => (
          <div key={i} className="glass-card p-6 border-white/5 hover:border-primary/30 transition-all flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{sub.code}</span>
                <h3 className="text-xl font-bold text-white">{sub.name}</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{sub.progress}%</div>
                <div className="text-[10px] text-light-muted font-bold uppercase tracking-tighter">Completed</div>
              </div>
            </div>
            
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000" 
                style={{ width: `${sub.progress}%` }}
              />
            </div>

            <div className="mt-2">
              <h4 className="text-xs font-bold text-light-muted uppercase tracking-widest mb-3">Unit Breakdown</h4>
              <div className="flex flex-wrap gap-2">
                {sub.units.map((unit, j) => (
                  <div key={j} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark border border-white/5 text-[10px] font-medium text-white">
                    <CheckCircle size={10} className="text-green-500" /> {unit}
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-4 flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all">
              View Detailed Curriculum <ChevronRight size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 border-primary/20 bg-primary/5 text-center flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary">
          <Search size={32} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Looking for elective syllabus?</h3>
          <p className="text-light-muted max-w-lg mx-auto">Use the search feature in the header or ask the AI Chatbot to find specific elective curricula for other branches.</p>
        </div>
        <Button className="bg-primary">Search Electives</Button>
      </div>
    </div>
  );
}

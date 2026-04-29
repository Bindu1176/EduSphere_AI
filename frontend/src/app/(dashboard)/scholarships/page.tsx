'use client';

import { Trophy, ExternalLink, Calendar, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ScholarshipsPage() {
  const scholarships = [
    { title: 'Academic Merit Excellence', amount: '$5,000', deadline: 'May 30, 2024', eligibility: 'CGPA > 9.0', tag: 'Merit Based' },
    { title: 'Future Leaders AI Grant', amount: '$2,500', deadline: 'June 15, 2024', eligibility: 'B.Tech CS Students', tag: 'Technology' },
    { title: 'Global Diversity Scholarship', amount: '$3,000', deadline: 'July 10, 2024', eligibility: 'International Students', tag: 'Diversity' },
    { title: 'Innovation & Research Stipend', amount: '$1,200', deadline: 'Ongoing', eligibility: 'Research Students', tag: 'Research' },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Scholarships & Grants 🏆</h1>
          <p className="text-light-muted">Explore financial aid opportunities and track your applications.</p>
        </div>
        <Button className="flex items-center gap-2">
          <CheckCircle size={16} /> My Applications
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scholarships.map((s, i) => (
          <div key={i} className="glass-card p-6 border-white/5 hover:border-primary/30 transition-all flex flex-col gap-5 group">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Trophy size={24} />
              </div>
              <span className="text-[10px] font-bold px-3 py-1 bg-white/5 text-light-muted rounded-full uppercase tracking-widest">{s.tag}</span>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-light-muted uppercase font-bold tracking-tighter">Amount</span>
                  <span className="text-lg font-bold text-green-400 flex items-center gap-1"><DollarSign size={16} /> {s.amount}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-light-muted uppercase font-bold tracking-tighter">Deadline</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1"><Calendar size={14} /> {s.deadline}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-dark border border-white/5 flex flex-col gap-2">
              <span className="text-[10px] text-light-muted uppercase font-bold">Eligibility</span>
              <p className="text-xs text-white font-medium">{s.eligibility}</p>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-primary text-xs font-bold py-2">Apply Now</Button>
              <Button variant="outline" className="flex-1 border-white/10 text-xs font-bold py-2 flex items-center justify-center gap-2">
                Details <ExternalLink size={14} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 border-white/5 bg-dark-card flex flex-col md:flex-row items-center gap-8">
        <div className="w-24 h-24 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary shrink-0">
          <DollarSign size={48} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">Need Financial Assistance?</h3>
          <p className="text-light-muted mb-4 max-w-2xl">If you need immediate financial help for tuition or campus expenses, please visit the Student Welfare office or contact our counselors through the AI Chatbot.</p>
          <button className="text-secondary font-bold hover:underline flex items-center gap-2 mx-auto md:mx-0">
            Contact Welfare Office <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

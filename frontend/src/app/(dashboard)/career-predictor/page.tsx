'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function CareerPredictorPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">🎯 Career Path Predictor</h1>
        <p className="text-light-muted">Tell us about yourself, and our AI will guide you to your ideal career.</p>
      </div>

      {step === 1 ? (
        <div className="glass-card p-8 bg-dark-card border-accent/20">
          <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-light-muted mb-2">Your Skills (comma separated)</label>
                <input 
                  type="text" 
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-white"
                  placeholder="React, Python, Data Analysis..."
                  defaultValue="HTML, CSS, JavaScript, React"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-light-muted mb-2">Interests</label>
                <input 
                  type="text" 
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-white"
                  placeholder="UI Design, Machine Learning..."
                  defaultValue="Web Development, Design"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-light-muted mb-2">Coding Level</label>
              <div className="flex gap-4">
                {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="level" defaultChecked={level === 'Intermediate'} className="accent-accent" />
                    <span className="text-white">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-light-muted mb-2">Communication Skills</label>
              <div className="flex gap-4">
                {['Basic', 'Good', 'Excellent'].map(level => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="comm" defaultChecked={level === 'Good'} className="accent-accent" />
                    <span className="text-white">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full mt-4 bg-accent hover:bg-accent-dark text-dark font-bold text-lg">
              Predict My Career Path 🚀
            </Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="glass-card p-6 border-accent text-center bg-accent/10">
            <h2 className="text-2xl font-bold text-accent mb-2">Your Top Match: Full Stack Developer</h2>
            <div className="text-white text-lg">94% Match • ₹8-25 LPA</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><span>📊</span> Skills Gap Analysis</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">React, JavaScript</span>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded ml-auto">Present</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">❌</span>
                  <span className="text-white">Node.js, Databases</span>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded ml-auto text-red-300">Missing</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><span>🗺️</span> 90-Day Roadmap</h3>
              <div className="relative border-l border-white/20 ml-3 pl-6 py-2 flex flex-col gap-6">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-3 h-3 bg-accent rounded-full ring-4 ring-dark-card" />
                  <h4 className="font-bold text-white mb-1">Days 1-30</h4>
                  <p className="text-sm text-light-muted">Master Node.js basics and Express. Build a REST API.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-3 h-3 bg-white/20 rounded-full ring-4 ring-dark-card" />
                  <h4 className="font-bold text-white mb-1">Days 31-60</h4>
                  <p className="text-sm text-light-muted">Learn PostgreSQL/MongoDB and integrate with your API.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-3 h-3 bg-white/20 rounded-full ring-4 ring-dark-card" />
                  <h4 className="font-bold text-white mb-1">Days 61-90</h4>
                  <p className="text-sm text-light-muted">Deploy a full-stack project and prep for interviews.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
             <Button variant="outline" onClick={() => setStep(1)}>Recalculate</Button>
          </div>
        </div>
      )}
    </div>
  );
}

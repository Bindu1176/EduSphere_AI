'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle, XCircle, Eye, AlertCircle, Users, FileText, Share2, Calendar, Shield } from 'lucide-react';

export default function AdminDashboardPage() {
  const [pendingItems, setPendingItems] = useState([
    { id: 1, type: 'Note Upload', title: 'Data Structures Notes Sem 3', author: 'Priya Sharma (Senior)', time: '2 hours ago', icon: '📝' },
    { id: 2, type: 'Profile Verification', title: 'Senior Role Request', author: 'Rahul Verma', time: '4 hours ago', icon: '👤' },
    { id: 3, type: 'Knowledge Hub Post', title: 'Internship Experience at Microsoft', author: 'Sneha Kapur (Senior)', time: '6 hours ago', icon: '💡' },
  ]);

  const handleApprove = (id: number) => {
    alert('Item approved! This will now be visible to students and seniors.');
    setPendingItems(prev => prev.filter(item => item.id !== id));
  };

  const handleReject = (id: number) => {
    const reason = prompt('Reason for rejection:');
    if (reason) {
      alert(`Item rejected. Reason: ${reason}`);
      setPendingItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const stats = [
    { label: 'Total Users', value: '1,240', icon: <Users size={20} />, color: 'text-blue-400' },
    { label: 'Campus Notes', value: '89', icon: <FileText size={20} />, color: 'text-green-400' },
    { label: 'Hub Posts', value: '234', icon: <Share2 size={20} />, color: 'text-purple-400' },
    { label: 'Events', value: '12', icon: <Calendar size={20} />, color: 'text-orange-400' },
    { label: 'Pending', value: pendingItems.length, icon: <AlertCircle size={20} />, color: 'text-red-400', isAlert: true },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className={`glass-card border p-6 flex flex-col items-center justify-center text-center transition-all hover:scale-105 ${stat.isAlert && pendingItems.length > 0 ? 'border-red-500/30 bg-red-500/5' : 'border-white/5'}`}>
            <div className={`p-2 rounded-lg bg-white/5 mb-3 ${stat.color}`}>{stat.icon}</div>
            <div className={`text-3xl font-bold mb-1 ${stat.isAlert && pendingItems.length > 0 ? 'text-red-400' : 'text-white'}`}>{stat.value}</div>
            <div className="text-[10px] text-light-muted uppercase tracking-widest font-bold">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Approvals */}
        <div className="lg:col-span-2 glass-card p-6 border-white/5 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertCircle className="text-red-400" size={24} /> Pending Approvals
            </h2>
            <div className="text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full uppercase tracking-tighter">
              {pendingItems.length} Action Items
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {pendingItems.length > 0 ? (
              pendingItems.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-dark border border-white/5 hover:border-white/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl group-hover:bg-primary/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">{item.type}</div>
                      <div className="font-bold text-white mb-0.5">{item.title}</div>
                      <div className="text-xs text-light-muted">By {item.author} • {item.time}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-light-muted hover:text-white flex items-center gap-2">
                      <Eye size={14} /> Preview
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleApprove(item.id)}
                      className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-4"
                    >
                      <CheckCircle size={14} /> Approve
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleReject(item.id)}
                      className="border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white flex items-center gap-2"
                    >
                      <XCircle size={14} /> Reject
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 flex flex-col items-center justify-center text-center gap-4 border-2 border-dashed border-white/5 rounded-2xl">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                  <CheckCircle size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">All caught up!</h3>
                  <p className="text-sm text-light-muted">There are no pending items awaiting approval.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Audit Log / Admin Activity */}
        <div className="glass-card p-6 border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="text-secondary" size={22} /> Audit Log
            </h2>
          </div>
          <div className="flex flex-col gap-6 relative">
            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/5" />
            
            {[
              { title: 'Admin #A9B2 logged in', sub: 'IP: 192.168.1.1', time: '5m ago', icon: '🛡️', color: 'border-primary' },
              { title: 'Note "DS Unit 2" approved', sub: 'Senior: Priya Sharma', time: '1h ago', icon: '✅', color: 'border-green-500' },
              { title: 'User "Rohan" role updated', sub: 'Promoted to SENIOR', time: '3h ago', icon: '👤', color: 'border-secondary' },
              { title: 'Event "TechFest" updated', sub: 'Added brochure PDF', time: '5h ago', icon: '📅', color: 'border-orange-500' },
            ].map((log, i) => (
              <div key={i} className="relative pl-12">
                <div className={`absolute left-0 top-0 w-10 h-10 rounded-xl bg-dark border-2 ${log.color} flex items-center justify-center text-lg z-10 shadow-lg`}>
                  {log.icon}
                </div>
                <div className="pt-1">
                  <p className="text-sm font-bold text-white mb-0.5">{log.title}</p>
                  <p className="text-[10px] text-light-muted font-medium mb-1">{log.sub}</p>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">{log.time}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-8 text-xs font-bold uppercase tracking-widest hover:bg-white/5 border border-white/5">
            View Full System Logs
          </Button>
        </div>
      </div>
    </div>
  );
}

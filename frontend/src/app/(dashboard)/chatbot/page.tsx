'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm EduSphere AI. Ask me about timetables, exams, syllabus, career paths..." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/v1/chatbot/message', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          message: userMessage,
          history: messages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'AI failed to respond');

      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex bg-dark-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Sidebar History (Hidden on mobile) */}
      <div className="w-64 border-r border-white/10 bg-dark/50 flex flex-col hidden md:flex">
        <div className="p-4 border-b border-white/10">
          <button 
            onClick={() => setMessages([{ role: 'assistant', content: "Hello! I'm EduSphere AI. How can I help today?" }])}
            className="w-full py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"
          >
            + New Chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          <div className="text-xs font-semibold text-light-muted uppercase tracking-wider mb-2">Today</div>
          {['Semester 3 Timetable', 'Upcoming Exams'].map((h, i) => (
            <button key={i} className="text-sm text-left px-3 py-2 rounded text-light-muted hover:bg-white/5 hover:text-white truncate">
              {h}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-dark/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
              <Bot size={20} />
            </div>
            <h2 className="font-semibold text-white">EduSphere AI Assistant</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Online
          </div>
        </div>

        {/* Chat Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'assistant' ? 'bg-primary text-white shadow-lg' : 'bg-secondary text-white'}`}>
                {msg.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${msg.role === 'user' ? 'bg-primary text-white' : 'glass-card text-light-muted border-white/5'}`}>
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-4 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center shrink-0">
                <Loader2 className="animate-spin text-white" size={16} />
              </div>
              <div className="max-w-[80%] rounded-2xl p-4 glass-card text-light-muted/50 border-white/5">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-dark-card">
          <form className="relative max-w-4xl mx-auto" onSubmit={handleSendMessage}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message (e.g., What is my timetable?)" 
              disabled={isLoading}
              className="w-full bg-dark border border-white/10 rounded-xl pl-4 pr-12 py-4 text-white focus:outline-none focus:border-primary shadow-lg transition-all"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-primary rounded-lg text-white hover:bg-primary-dark transition-all disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

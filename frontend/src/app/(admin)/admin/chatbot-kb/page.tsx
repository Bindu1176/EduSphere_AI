'use client';

export default function AdminChatbotKBPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize text-white">Admin Chatbot KB Management</h1>
      <p className="text-light-muted mt-2 text-sm">Manage the AI Chatbot's knowledge base.</p>
      <div className="mt-8 glass-card p-12 border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl">🤖</div>
        <div>
          <h3 className="font-bold text-white">Update Knowledge Base</h3>
          <p className="text-xs text-light-muted">PDF or Text files (Max 10MB)</p>
        </div>
        <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors" onClick={() => alert('Knowledge base updated!')}>Sync Data</button>
      </div>
    </div>
  );
}

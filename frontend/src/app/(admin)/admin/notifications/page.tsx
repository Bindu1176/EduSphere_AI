'use client';

import { useRef, useState } from 'react';

export default function AdminNotificationsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSend = () => {
    alert('Campus-wide notification sent successfully!');
    setSelectedFile(null);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize text-white">Admin Notifications Management</h1>
      <p className="text-light-muted mt-2 text-sm">Send campus-wide notifications to all users.</p>
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} 
        className="hidden" 
      />

      <div className="mt-8 glass-card p-12 border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl">🔔</div>
        <div>
          <h3 className="font-bold text-white">Compose Alert</h3>
          <p className="text-xs text-light-muted">Attach files if needed and notify all students.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors" onClick={handleSend}>Send Notification</button>
          <button className="px-6 py-2 bg-white/5 text-white rounded-lg font-bold hover:bg-white/10 transition-colors" onClick={() => fileInputRef.current?.click()}>
            {selectedFile ? `Attached: ${selectedFile.name}` : 'Attach File'}
          </button>
        </div>
      </div>
    </div>
  );
}

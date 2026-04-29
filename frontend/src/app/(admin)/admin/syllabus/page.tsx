'use client';

import { useRef, useState } from 'react';

export default function AdminSyllabusPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (selectedFile) {
      alert(`Syllabus "${selectedFile.name}" uploaded successfully!`);
      setSelectedFile(null);
    } else {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize text-white">Admin Syllabus Management</h1>
      <p className="text-light-muted mt-2 text-sm">Upload and manage campus syllabus here.</p>
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} 
        className="hidden" 
        accept=".pdf,.png,.jpg,.jpeg"
      />

      <div className="mt-8 glass-card p-12 border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl">📚</div>
        <div>
          <h3 className="font-bold text-white">
            {selectedFile ? 'File Ready' : 'Upload New Syllabus'}
          </h3>
          <p className="text-xs text-light-muted">
            {selectedFile ? selectedFile.name : 'PDF, PNG or JPG (Max 10MB)'}
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors" onClick={handleUpload}>
            {selectedFile ? 'Confirm Upload' : 'Select File'}
          </button>
          {selectedFile && <button className="px-6 py-2 bg-white/5 text-white rounded-lg font-bold hover:bg-white/10 transition-colors" onClick={() => setSelectedFile(null)}>Cancel</button>}
        </div>
      </div>
    </div>
  );
}

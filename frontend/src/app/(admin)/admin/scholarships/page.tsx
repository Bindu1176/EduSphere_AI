'use client';

import { useRef, useState } from 'react';

export default function AdminScholarshipsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (selectedFile) {
      alert(`File "${selectedFile.name}" uploaded successfully! This update is now visible to all students and seniors.`);
      setSelectedFile(null);
    } else {
      fileInputRef.current?.click();
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize text-white">Admin Scholarships Management</h1>
      <p className="text-light-muted mt-2 text-sm">Upload and manage campus scholarships here. Changes will be reflected in student dashboards.</p>
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={onFileChange} 
        className="hidden" 
        accept=".pdf,.png,.jpg,.jpeg"
      />

      <div className="mt-8 glass-card p-12 border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl">📁</div>
        <div>
          <h3 className="font-bold text-white">
            {selectedFile ? 'File Selected' : 'Upload New Scholarship'}
          </h3>
          <p className="text-xs text-light-muted">
            {selectedFile ? selectedFile.name : 'PDF, PNG or JPG (Max 10MB)'}
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors" 
            onClick={handleUpload}
          >
            {selectedFile ? 'Confirm Upload' : 'Select File'}
          </button>
          {selectedFile && (
            <button 
              className="px-6 py-2 bg-white/5 text-white rounded-lg font-bold hover:bg-white/10 transition-colors" 
              onClick={() => setSelectedFile(null)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Recent Uploads</h3>
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between p-4 bg-dark-card border border-white/5 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center">📄</div>
                <div>
                  <div className="text-sm font-bold text-white uppercase">Spring_2024_Scholarships.pdf</div>
                  <div className="text-xs text-light-muted">Uploaded by Admin • 2 days ago</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-xs text-light-muted hover:text-white underline">View</button>
                <button className="text-xs text-red-400 hover:text-red-300 underline">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

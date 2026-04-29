'use client';

export default function AdminApprovalsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize text-white">Admin Approvals Management</h1>
      <p className="text-light-muted mt-2 text-sm">Review and approve requests from seniors and students.</p>
      <div className="mt-8 glass-card p-12 border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl">⏳</div>
        <div>
          <h3 className="font-bold text-white">Pending Requests</h3>
          <p className="text-xs text-light-muted">Review verification and upload requests.</p>
        </div>
        <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors" onClick={() => alert('Approvals processed!')}>Refresh List</button>
      </div>
    </div>
  );
}

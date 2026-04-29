'use client';

export default function AdminAuditLogsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize text-white">Admin Audit Logs Management</h1>
      <p className="text-light-muted mt-2 text-sm">Review all administrative activities on the platform.</p>
      <div className="mt-8 glass-card p-12 border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl">🛡️</div>
        <div>
          <h3 className="font-bold text-white">System Security Logs</h3>
          <p className="text-xs text-light-muted">Monitor logins and data modifications.</p>
        </div>
        <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors" onClick={() => alert('Logs exported!')}>Export CSV</button>
      </div>
    </div>
  );
}

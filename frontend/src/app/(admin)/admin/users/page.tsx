'use client';

export default function AdminUsersPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize text-white">Admin Users Management</h1>
      <p className="text-light-muted mt-2 text-sm">
        Manage and monitor all student and senior accounts on the platform.
      </p>
      
      <div className="mt-8 glass-card p-12 border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl">👥</div>
        <div>
          <h3 className="font-bold text-white">Manage User Access</h3>
          <p className="text-xs text-light-muted">Assign roles, verify seniors, or deactivate accounts.</p>
        </div>
        <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors">
          Invite New User
        </button>
      </div>

      <div className="mt-12">
        <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-widest text-primary">Recent Users</h3>
        <div className="flex flex-col gap-3">
          {[
            { name: 'Rahul Sharma', role: 'STUDENT', email: 'rahul@univ.edu' },
            { name: 'Priya Verma', role: 'SENIOR', email: 'priya@univ.edu' },
            { name: 'Aman Gupta', role: 'STUDENT', email: 'aman@univ.edu' }
          ].map((u, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-dark-card border border-white/5 rounded-xl group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-white font-bold">
                  {u.name.substring(0, 1)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{u.name}</div>
                  <div className="text-xs text-light-muted">{u.email} • <span className="text-primary font-bold uppercase text-[10px]">{u.role}</span></div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-xs text-light-muted hover:text-white underline">Edit</button>
                <button className="text-xs text-red-400 hover:text-red-300 underline">Suspend</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

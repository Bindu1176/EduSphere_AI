import { AdminLoginForm } from '@/components/auth/AdminLoginForm';
import { Navbar } from '@/components/layout/Navbar';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-dark flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <AdminLoginForm />
      </div>
    </div>
  );
}

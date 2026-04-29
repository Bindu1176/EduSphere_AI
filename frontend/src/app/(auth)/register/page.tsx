import { RegisterForm } from '@/components/auth/RegisterForm';
import { Navbar } from '@/components/layout/Navbar';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-dark flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <RegisterForm />
      </div>
    </div>
  );
}

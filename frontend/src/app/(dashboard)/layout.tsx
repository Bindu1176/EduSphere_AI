import { Sidebar } from '@/components/layout/Sidebar';
import { DashboardHeader } from '@/components/layout/DashboardHeader';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-dark flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col relative">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6 relative">
          {/* Dashboard AI Assistant FAB could go here in future */}
          {children}
        </main>
      </div>
    </div>
  );
}

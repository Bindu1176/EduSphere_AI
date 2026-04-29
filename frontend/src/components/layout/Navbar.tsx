import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="EduSphere Logo" width={160} height={40} />
      </div>
      <div className="hidden md:flex gap-8 text-light-muted">
        <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
        <Link href="#ai" className="hover:text-primary transition-colors">AI Resources</Link>
        <Link href="#career" className="hover:text-primary transition-colors">Career</Link>
      </div>
      <div className="flex gap-4 items-center">
        <ThemeToggle />
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href="/register">
          <Button>Get Started</Button>
        </Link>
      </div>
    </nav>
  );
};

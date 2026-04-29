import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-32 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold gradient-text mb-4">EduSphere</h3>
          <p className="text-light-muted max-w-sm">
            Your Complete Academic Universe, Powered by AI.
            Join thousands of students and enhance your learning experience.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Platform</h4>
          <ul className="flex flex-col gap-2 text-light-muted">
            <li><Link href="#features" className="hover:text-primary">Features</Link></li>
            <li><Link href="#ai" className="hover:text-primary">AI Chatbot</Link></li>
            <li><Link href="/login" className="hover:text-primary">Login</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Legal</h4>
          <ul className="flex flex-col gap-2 text-light-muted">
            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-light-muted text-sm">
        &copy; {new Date().getFullYear()} EduSphere. All rights reserved.
      </div>
    </footer>
  );
};

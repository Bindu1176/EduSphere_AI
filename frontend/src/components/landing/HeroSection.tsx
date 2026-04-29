import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center pt-20 pb-32 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center w-fit px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">
            🚀 AI-Powered Academic Platform
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Welcome to <span className="gradient-text">EduSphere</span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-light-muted max-w-xl">
            Your Complete Academic Universe, Powered by AI.
          </h2>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/register">
              <Button size="lg" className="rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)]">
                Get Started →
              </Button>
            </Link>
            <Link href="/chatbot">
              <Button size="lg" variant="outline" className="rounded-full bg-dark/50 backdrop-blur-md hover:bg-dark/80 text-white">
                Try AI Assistant ✨
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full rounded-2xl border border-white/10 bg-dark-card overflow-hidden shadow-2xl"
        >
          {/* Abstract Dashboard Mockup representation */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          <div className="p-6 h-full flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex gap-4 h-full">
              <div className="w-1/3 h-full rounded bg-white/5" />
              <div className="w-2/3 h-full flex flex-col gap-4">
                <div className="h-1/2 rounded bg-white/5 relative overflow-hidden">
                   <div className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-t-xl rounded-bl-xl shadow-lg">
                      Hello! How can I help today? 👋
                   </div>
                </div>
                <div className="h-1/2 rounded bg-white/5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-dark">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-primary blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />
        
        <HeroSection />

        <div className="bg-dark-card/50 border-y border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-light-muted uppercase tracking-wider text-sm">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-light-muted uppercase tracking-wider text-sm">Notes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <div className="text-light-muted uppercase tracking-wider text-sm">User Roles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-light-muted uppercase tracking-wider text-sm">AI Powered</div>
            </div>
          </div>
        </div>

        <FeaturesSection />

        <section className="py-24 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Start Your Academic Journey Today</h2>
          <Button size="lg" className="rounded-full px-12 py-4 text-lg">
            Create Free Account
          </Button>
        </section>

        <Footer />
      </div>
    </main>
  );
}

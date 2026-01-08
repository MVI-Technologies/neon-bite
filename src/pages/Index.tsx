import { useState } from 'react';
import Preloader from '@/components/Preloader';
import MouseGlow from '@/components/MouseGlow';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="relative min-h-screen grain scanlines">
          <MouseGlow />
          
          {/* Navigation - Fixed */}
          <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="container mx-auto flex items-center justify-between">
              <a href="#" className="font-display text-2xl gradient-text-fire">
                CYBER BURGER
              </a>
              <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
                <a href="#menu" className="hover:text-foreground transition-colors">Cardápio</a>
                <a href="#" className="hover:text-foreground transition-colors">Sobre</a>
                <a href="#" className="hover:text-foreground transition-colors">Unidades</a>
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                  Pedir Agora
                </button>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main>
            <HeroSection />
            <MenuSection />
            <ExperienceSection />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;

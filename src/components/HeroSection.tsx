import { motion } from 'framer-motion';
import { ChevronDown, Flame } from 'lucide-react';

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-secondary/15 blur-[150px]"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-border mb-8"
        >
          <Flame className="w-4 h-4 text-primary" />
          <span className="text-sm font-body text-muted-foreground tracking-wider uppercase">
            Street Food do Futuro
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] mb-6"
        >
          <span className="block text-foreground">NÃO É SÓ</span>
          <span className="block gradient-text-fire text-glow">UM LANCHE</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          É uma experiência que{' '}
          <span className="text-foreground font-semibold">muda sua fome.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToMenu}
          className="group relative px-10 py-5 font-display text-xl tracking-wider uppercase overflow-hidden rounded-lg"
        >
          {/* Button Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:scale-110" />
          
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent -translate-x-full"
            animate={{ translateX: ["100%", "-100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          
          {/* Button Content */}
          <span className="relative z-10 flex items-center gap-3 text-primary-foreground">
            Explorar o Cardápio
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/50" />
        </motion.button>

        {/* Floating Burger */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="text-[200px] drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 60px hsl(var(--primary) / 0.5))" }}
          >
            🍔
          </motion.div>
        </motion.div>

        {/* Floating Ingredients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute left-10 top-1/3 hidden lg:block"
        >
          <motion.span
            animate={{ y: [-10, 10, -10], rotate: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl block"
          >
            🧀
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute left-1/4 bottom-1/4 hidden lg:block"
        >
          <motion.span
            animate={{ y: [5, -15, 5], rotate: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="text-5xl block"
          >
            🥓
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute right-1/4 top-1/4 hidden lg:block"
        >
          <motion.span
            animate={{ y: [-15, 5, -15], rotate: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="text-4xl block"
          >
            🍅
          </motion.span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToMenu}
        >
          <span className="text-xs font-body text-muted-foreground tracking-widest uppercase">
            Role para explorar
          </span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

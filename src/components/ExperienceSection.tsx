import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, MapPin, Wifi, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "PEDIDO INSTANTÂNEO",
    description: "QR Code na mesa, pedido direto no app. Zero espera.",
  },
  {
    icon: Clock,
    title: "ENTREGA HYPERSÔNICA",
    description: "Seu lanche pronto em até 12 minutos. Garantido.",
  },
  {
    icon: Wifi,
    title: "WIFI 6 GRÁTIS",
    description: "Conexão ultrarrápida para você compartilhar a experiência.",
  },
  {
    icon: MapPin,
    title: "3 UNIDADES",
    description: "Pinheiros, Moema e Vila Madalena. Sempre perto de você.",
  },
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
      </motion.div>

      {/* Diagonal Lines Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            hsl(var(--foreground)) 40px,
            hsl(var(--foreground)) 41px
          )`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            style={{ opacity }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-body tracking-widest uppercase"
            >
              A Experiência
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95]"
            >
              <span className="text-foreground">MAIS QUE</span>
              <br />
              <span className="gradient-text-fire">COMIDA.</span>
              <br />
              <span className="text-foreground">UM PORTAL</span>
              <br />
              <span className="text-accent">SENSORIAL.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-lg text-muted-foreground max-w-lg"
            >
              Cada detalhe foi pensado para transformar sua refeição em uma jornada. 
              Da iluminação neon ao som ambiente, do aroma irresistível ao primeiro 
              mordida - tudo é projetado para surpreender.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "50K+", label: "Clientes" },
                { value: "4.9", label: "Avaliação" },
                { value: "12min", label: "Tempo Médio" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-3xl md:text-4xl gradient-text-fire">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/40 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-8 rounded-3xl neon-border relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(45deg, hsl(var(--primary) / 0.1), transparent)",
                  "linear-gradient(225deg, hsl(var(--secondary) / 0.1), transparent)",
                  "linear-gradient(45deg, hsl(var(--primary) / 0.1), transparent)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0"
            />

            <div className="relative z-10">
              <p className="font-display text-3xl md:text-4xl text-foreground mb-4">
                PRONTO PARA O FUTURO?
              </p>
              <p className="font-body text-muted-foreground mb-6">
                Faça seu pedido agora e ganhe 10% de desconto
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary font-display text-lg tracking-wider text-primary-foreground shadow-neon"
              >
                PEDIR AGORA →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

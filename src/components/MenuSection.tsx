import { motion } from 'framer-motion';
import { useState } from 'react';
import { Flame, Sparkles, Zap } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  emoji: string;
  tag?: string;
  tagColor?: string;
}

const burgers: MenuItem[] = [
  {
    id: 1,
    name: "CYBER SMASH",
    description: "Double smash, cheddar vulcânico, bacon crocante, molho secreto",
    price: "R$ 38,90",
    emoji: "🍔",
    tag: "MAIS VENDIDO",
    tagColor: "from-primary to-secondary",
  },
  {
    id: 2,
    name: "NEON CLASSIC",
    description: "Blend 180g, queijo americano, picles, cebola caramelizada",
    price: "R$ 34,90",
    emoji: "🍔",
  },
  {
    id: 3,
    name: "INFERNO BBQ",
    description: "Costela desfiada, onion rings, barbecue defumado, jalapeño",
    price: "R$ 42,90",
    emoji: "🔥",
    tag: "APIMENTADO",
    tagColor: "from-orange-500 to-primary",
  },
  {
    id: 4,
    name: "MATRIX VEGGIE",
    description: "Burger plant-based, cogumelos, rúcula, aioli de ervas",
    price: "R$ 36,90",
    emoji: "🌱",
    tag: "VEGANO",
    tagColor: "from-green-500 to-cyan-400",
  },
];

const sides: MenuItem[] = [
  {
    id: 5,
    name: "BATATA REACTOR",
    description: "Fritas crocantes com cheddar e bacon",
    price: "R$ 24,90",
    emoji: "🍟",
  },
  {
    id: 6,
    name: "ONION BOMBS",
    description: "Onion rings empanadas na cerveja",
    price: "R$ 19,90",
    emoji: "🧅",
  },
];

const drinks: MenuItem[] = [
  {
    id: 7,
    name: "NEON SHAKE",
    description: "Milkshake com luz LED, sabores especiais",
    price: "R$ 22,90",
    emoji: "🥤",
    tag: "EXCLUSIVO",
    tagColor: "from-accent to-blue-500",
  },
  {
    id: 8,
    name: "CYBER COLA",
    description: "Refrigerante artesanal com especiarias",
    price: "R$ 12,90",
    emoji: "🧊",
  },
];

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm neon-border overflow-hidden transition-all duration-500 hover:scale-[1.02]">
        {/* Hover Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
        />

        {/* Tag */}
        {item.tag && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${item.tagColor} text-xs font-body font-bold tracking-wider`}>
            {item.tag}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex items-start gap-6">
          {/* Emoji */}
          <motion.div
            animate={{ 
              rotate: isHovered ? [0, -10, 10, 0] : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl flex-shrink-0"
            style={{ 
              filter: isHovered ? "drop-shadow(0 0 20px hsl(var(--primary) / 0.8))" : "none",
            }}
          >
            {item.emoji}
          </motion.div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 group-hover:gradient-text-fire transition-all duration-300">
              {item.name}
            </h3>
            <p className="font-body text-sm md:text-base text-muted-foreground mb-4 line-clamp-2">
              {item.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-display text-xl md:text-2xl text-secondary">
                {item.price}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-body text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Adicionar
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scan Line Effect */}
        <motion.div
          initial={{ top: "-100%" }}
          animate={{ top: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<'burgers' | 'sides' | 'drinks'>('burgers');

  const categories = [
    { id: 'burgers' as const, label: 'Burgers', icon: Flame, items: burgers },
    { id: 'sides' as const, label: 'Porções', icon: Zap, items: sides },
    { id: 'drinks' as const, label: 'Bebidas', icon: Sparkles, items: drinks },
  ];

  const activeItems = categories.find(c => c.id === activeCategory)?.items || [];

  return (
    <section id="menu" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <motion.div
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full neon-border-accent text-accent text-sm font-body tracking-widest uppercase mb-6"
          >
            Cardápio Digital
          </motion.span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-4">
            <span className="text-foreground">ESCOLHA SUA</span>{' '}
            <span className="gradient-text-fire text-glow">EXPERIÊNCIA</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Cada item é uma obra de arte culinária do futuro
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative px-6 py-3 rounded-xl font-display text-lg tracking-wider uppercase
                  transition-all duration-300 flex items-center gap-2
                  ${activeCategory === category.id 
                    ? 'bg-primary text-primary-foreground shadow-glow-primary' 
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl border-2 border-primary"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {activeItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;

import { motion } from 'framer-motion';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/50 to-transparent" />
      
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-4xl gradient-text-fire mb-4">
              CYBER BURGER
            </h3>
            <p className="font-body text-muted-foreground text-sm max-w-xs">
              Street food do futuro. Onde tecnologia encontra sabor em uma experiência única.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-display text-xl text-foreground">NAVEGUE</h4>
            <ul className="space-y-2 font-body text-sm">
              {['Cardápio', 'Sobre Nós', 'Unidades', 'Trabalhe Conosco'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-display text-xl text-foreground">CONECTE-SE</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: MessageCircle, label: 'WhatsApp' },
                { icon: MapPin, label: 'Localização' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            <p className="font-body text-sm text-muted-foreground">
              Horário: 11h - 23h (todos os dias)
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2024 Cyber Burger. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Feito com 🔥 para o futuro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

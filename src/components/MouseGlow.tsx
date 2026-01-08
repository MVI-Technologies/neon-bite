import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-40 w-[500px] h-[500px] rounded-full"
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
      style={{
        background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
      }}
    />
  );
};

export default MouseGlow;

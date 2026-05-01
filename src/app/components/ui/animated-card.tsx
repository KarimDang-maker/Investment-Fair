import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'emerald' | 'blue' | 'orange' | 'amber' | 'premium';
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  variant = 'default',
}: AnimatedCardProps) {
  const variants = {
    default: 'bg-white hover:shadow-xl border border-gray-100',
    emerald: 'bg-gradient-to-br from-emerald-50 to-white hover:shadow-emerald-100 border border-emerald-100',
    blue: 'bg-gradient-to-br from-blue-50 to-white hover:shadow-blue-100 border border-blue-100',
    orange: 'bg-gradient-to-br from-orange-50 to-white hover:shadow-orange-100 border border-orange-100',
    amber: 'bg-gradient-to-br from-amber-50 to-white hover:shadow-amber-100 border border-amber-100',
    premium: 'bg-white hover:shadow-2xl border-2 border-transparent hover:border-emerald-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}

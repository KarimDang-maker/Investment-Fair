import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface IconBadgeProps {
  icon: ReactNode;
  className?: string;
  variant?: 'emerald' | 'blue' | 'orange' | 'amber' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

export function IconBadge({
  icon,
  className = '',
  variant = 'emerald',
  size = 'md',
  animate = true,
}: IconBadgeProps) {
  const variants = {
    emerald: 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-emerald-200',
    blue: 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200',
    orange: 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-200',
    amber: 'bg-gradient-to-br from-amber-500 to-amber-600 shadow-amber-200',
    gradient: 'bg-gradient-to-br from-emerald-500 via-blue-500 to-emerald-600 shadow-emerald-300',
  };

  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24',
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
  };

  const Component = animate ? motion.div : 'div';
  const animationProps = animate
    ? {
        whileHover: { scale: 1.1, rotate: 5 },
        transition: { duration: 0.3 },
      }
    : {};

  return (
    <Component
      className={`${sizes[size]} ${variants[variant]} rounded-2xl flex items-center justify-center shadow-lg ${className}`}
      {...animationProps}
    >
      <div className={`${iconSizes[size]} text-white`}>{icon}</div>
    </Component>
  );
}

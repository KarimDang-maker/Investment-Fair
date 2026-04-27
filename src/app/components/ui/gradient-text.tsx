import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'premium';
}

export function GradientText({
  children,
  className = '',
  variant = 'primary',
}: GradientTextProps) {
  const gradients = {
    primary: 'from-emerald-600 to-emerald-700',
    secondary: 'from-blue-600 to-blue-700',
    premium: 'from-emerald-600 via-blue-600 to-emerald-700',
  };

  return (
    <span className={`bg-gradient-to-r ${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

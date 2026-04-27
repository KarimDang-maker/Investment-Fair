import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gray' | 'gradient' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function SectionContainer({
  children,
  className = '',
  variant = 'default',
  size = 'lg',
}: SectionContainerProps) {
  const backgrounds = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-emerald-50 via-white to-blue-50',
    dark: 'bg-gradient-to-br from-emerald-600 to-blue-600 text-white',
  };

  const maxWidths = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  };

  return (
    <section className={`py-12 md:py-16 lg:py-20 px-4 ${backgrounds[variant]} ${className}`}>
      <div className={`${maxWidths[size]} mx-auto`}>{children}</div>
    </section>
  );
}

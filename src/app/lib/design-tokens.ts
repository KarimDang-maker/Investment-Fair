// Design System - Salon de l'Investisseur
// Premium African Corporate Design

export const colors = {
  // Primary - Emerald (Investment, Growth)
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669', // Primary
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  // Secondary - Blue (Progress, Trust)
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb', // Secondary
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  // Neutral
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  // Accent - Gold (Premium touch)
  gold: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
  },
};

export const gradients = {
  primary: 'from-emerald-600 to-emerald-700',
  secondary: 'from-blue-600 to-blue-700',
  hero: 'from-emerald-600 via-emerald-700 to-blue-600',
  heroAlt: 'from-blue-600 via-emerald-600 to-blue-700',
  subtle: 'from-emerald-50 to-blue-50',
  card: 'from-white to-gray-50',
  premium: 'from-emerald-600 via-blue-600 to-emerald-700',
};

export const typography = {
  fontFamily: {
    display: 'system-ui, -apple-system, "Segoe UI", sans-serif',
    body: 'system-ui, -apple-system, "Segoe UI", sans-serif',
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
};

export const spacing = {
  section: {
    mobile: 'py-12 px-4',
    tablet: 'py-16 px-6',
    desktop: 'py-20 px-8',
  },
  container: {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  },
};

export const breakpoints = {
  mobile: '0px',        // < 768px
  tablet: '768px',      // 768px - 1024px
  laptop: '1024px',     // 1024px - 1440px
  desktop: '1440px',    // 1440px - 1920px
  xl: '1920px',         // > 1920px
};

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  premium: '0 20px 40px -10px rgba(5, 150, 105, 0.2)',
  premiumBlue: '0 20px 40px -10px rgba(37, 99, 235, 0.2)',
};

export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const borderRadius = {
  sm: '0.375rem',   // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',
};

// African-inspired patterns
export const patterns = {
  geometric: `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <pattern id="african-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="25" height="25" fill="none" stroke="currentColor" stroke-width="1" opacity="0.1"/>
        <rect x="25" y="25" width="25" height="25" fill="none" stroke="currentColor" stroke-width="1" opacity="0.1"/>
      </pattern>
      <rect width="100" height="100" fill="url(#african-pattern)"/>
    </svg>
  `,
};

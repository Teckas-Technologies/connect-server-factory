import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.3 }
};

export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

export const scale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.2 }
};

export const listItem = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.2 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.2 }
};

export const hoverGlow = {
  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
  transition: { duration: 0.2 }
};

export const pulse = {
  scale: [1, 1.05, 1],
  transition: { duration: 1, repeat: Infinity }
};

export const float = {
  y: [0, -10, 0],
  transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
};

export const shimmer = {
  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 2s infinite'
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

export const slideInUp = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideInDown = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const rotateIn = {
  initial: { rotate: -180, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const zoomIn = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

export const bounce = {
  y: [0, -10, 0],
  transition: { duration: 0.5, repeat: Infinity }
};

export const shake = {
  x: [0, -10, 10, -10, 10, 0],
  transition: { duration: 0.5 }
};

export const wave = {
  y: [0, -10, 10, -10, 10, 0],
  transition: { duration: 0.5 }
};

export const flip = {
  rotateY: [0, 180],
  transition: { duration: 0.5 }
};

export const morph = {
  scale: [1, 1.1, 1],
  rotate: [0, 5, 0],
  transition: { duration: 0.5 }
};

export const glow = {
  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
  transition: { duration: 0.5 }
};

export const pulseGlow = {
  boxShadow: [
    '0 0 20px rgba(59, 130, 246, 0.5)',
    '0 0 30px rgba(59, 130, 246, 0.7)',
    '0 0 20px rgba(59, 130, 246, 0.5)'
  ],
  transition: { duration: 1, repeat: Infinity }
}; 
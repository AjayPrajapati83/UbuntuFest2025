import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getElementColor = (element: string) => {
  const colors = {
    air: { 
      primary: '#87CEEB', 
      secondary: '#B3E5FC', 
      gradient: 'from-air-400 to-air-600',
      gradientStyle: 'linear-gradient(to right, #7dd3fc, #0ea5e9)'
    },
    water: { 
      primary: '#2196F3', 
      secondary: '#03A9F4', 
      gradient: 'from-water-400 to-water-600',
      gradientStyle: 'linear-gradient(to right, #38bdf8, #0284c7)'
    },
    earth: { 
      primary: '#795548', 
      secondary: '#A0826D', 
      gradient: 'from-earth-500 to-earth-700',
      gradientStyle: 'linear-gradient(to right, #78716c, #44403c)'
    },
    fire: { 
      primary: '#FF5722', 
      secondary: '#FF6F00', 
      gradient: 'from-fire-400 to-fire-600',
      gradientStyle: 'linear-gradient(to right, #fb923c, #ea580c)'
    },
    space: { 
      primary: '#3949AB', 
      secondary: '#7986CB', 
      gradient: 'from-space-600 to-space-800',
      gradientStyle: 'linear-gradient(to right, #4f46e5, #3730a3)'
    },
  };
  return colors[element as keyof typeof colors] || colors.space;
};

export const getElementIcon = (element: string) => {
  const icons = {
    air: '💨',
    water: '💧',
    earth: '🌍',
    fire: '🔥',
    space: '🚀',
  };
  return icons[element as keyof typeof icons] || '⭐';
};

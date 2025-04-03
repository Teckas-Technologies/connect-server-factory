
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate a random ID with a custom prefix
export function generateId(prefix: string = 'id') {
  return `${prefix}_${Math.random().toString(36).substring(2, 9)}`;
}

// Format a date to a readable string
export function formatDate(date: string | Date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// Calculate average rating from an array of reviews
export function calculateAverageRating(reviews: { rating: number }[]) {
  if (!reviews.length) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return parseFloat((sum / reviews.length).toFixed(1));
}

// Check if two arrays have any common elements
export function hasCommonElements(arr1: any[], arr2: any[]) {
  return arr1.some(item => arr2.includes(item));
}

// Simple search function for server filtering
export function searchFilter(item: any, searchTerm: string) {
  if (!searchTerm) return true;
  
  const searchLower = searchTerm.toLowerCase();
  
  // Search in name, description, and tags
  return (
    (item.name && item.name.toLowerCase().includes(searchLower)) ||
    (item.description && item.description.toLowerCase().includes(searchLower)) ||
    (item.tags && item.tags.some((tag: string) => tag.toLowerCase().includes(searchLower)))
  );
}

// Format a number with k/m/b suffix
export function formatNumber(num: number) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'b';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'm';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

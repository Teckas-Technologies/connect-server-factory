import React from 'react';
import { Link } from 'react-router-dom';
import { type Category } from '@/lib/mockData';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, className }) => {
  return (
    <Link 
      to={`/browse?category=${category.id}`}
      className={cn(
        "group block p-6 rounded-xl bg-white border border-border/40 shadow-sm hover:shadow-md transition-smooth hover:-translate-y-1",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="size-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors-smooth">
          <category.icon className="size-6" />
        </div>
        
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors-smooth">
          {category.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {category.description}
        </p>
        
        <div className="text-sm font-medium">
          {category.count} {category.count === 1 ? 'item' : 'items'}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

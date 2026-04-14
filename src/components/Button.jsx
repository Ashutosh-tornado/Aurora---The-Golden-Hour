import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  onClick, 
  type = 'button' 
}) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-sans tracking-wide uppercase text-xs font-semibold";
  
  const variants = {
    primary: "bg-gradient-to-br from-brand-primary-container to-brand-secondary-container text-white rounded-xl px-6 py-3 shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_25px_rgba(249,115,22,0.4)] hover:-translate-y-0.5",
    secondary: "bg-brand-surface text-brand-on-surface rounded-xl px-6 py-3 border border-brand-outline-variant/30 hover:bg-brand-surface-low",
    tertiary: "text-brand-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-brand-primary after:scale-x-100 hover:after:scale-x-0 after:origin-right after:transition-transform hover:after:origin-left"
  };

  return (
    <button 
      type={type}
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

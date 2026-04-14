import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SafeImage({ 
  src, 
  alt, 
  className, 
  aspectRatio = 'aspect-square',
  fallbackSrc = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop', // Elegant mountain fallback
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      <AnimatePresence>
        {!isLoaded && !error && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-surface-low animate-pulse z-10"
          />
        )}
      </AnimatePresence>
      
      <motion.img
        src={error ? fallbackSrc : src}
        alt={alt}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setError(true);
          setIsLoaded(true);
        }}
        className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105`}
        {...props}
      />
    </div>
  );
}

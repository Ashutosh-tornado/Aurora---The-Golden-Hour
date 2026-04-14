import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './Button';

export function Navbar({ onEnquire }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b border-white/5 ${
          isScrolled ? 'glass-header py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-3xl font-serif text-brand-primary tracking-tight">
            AURORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('journeys')} 
              className="text-xs font-sans tracking-[0.2em] uppercase hover:text-brand-primary transition-colors font-semibold"
            >
              Journeys
            </button>
            <button 
              onClick={() => handleNavClick('philosophy')} 
              className="text-xs font-sans tracking-[0.2em] uppercase hover:text-brand-primary transition-colors font-semibold"
            >
              Philosophy
            </button>
            <button 
              onClick={() => handleNavClick('stories')} 
              className="text-xs font-sans tracking-[0.2em] uppercase hover:text-brand-primary transition-colors font-semibold"
            >
              Stories
            </button>
            <Button onClick={onEnquire} variant="primary">Enquire</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-primary transition-colors hover:text-brand-secondary-container p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-brand-surface pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-8 items-center justify-center flex-1">
              <button 
                onClick={() => handleNavClick('journeys')} 
                className="text-3xl font-serif tracking-wide text-brand-on-surface hover:text-brand-primary transition-colors"
              >
                Journeys
              </button>
              <button 
                onClick={() => handleNavClick('philosophy')} 
                className="text-3xl font-serif tracking-wide text-brand-on-surface hover:text-brand-primary transition-colors"
              >
                Philosophy
              </button>
              <button 
                onClick={() => handleNavClick('stories')} 
                className="text-3xl font-serif tracking-wide text-brand-on-surface hover:text-brand-primary transition-colors"
              >
                Stories
              </button>
              <div className="mt-8 w-full max-w-xs">
                <Button onClick={() => { setIsOpen(false); onEnquire(); }} variant="primary" className="w-full">
                  Enquire Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

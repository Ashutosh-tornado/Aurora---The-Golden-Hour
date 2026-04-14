import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { destinations } from '../data/destinations';

export function EnquiryModal({ isOpen, onClose, initialDestination = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: initialDestination,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium submission experience
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ name: '', email: '', destination: initialDestination, message: '' });
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-brand-surface/60 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-brand-surface-lowest w-full max-w-xl rounded-[2.5rem] p-10 md:p-14 shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative pointer-events-auto border ghost-border overflow-hidden"
            >
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 text-neutral-400 hover:text-brand-primary transition-all duration-300 hover:rotate-90 p-2"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-8">
                       <Sparkles className="text-brand-primary" size={40} />
                    </div>
                    <h2 className="text-4xl font-serif text-neutral-900 mb-4 tracking-tighter">Your Narrative Begins.</h2>
                    <p className="text-neutral-500">Our concierge will contact you within 24 hours to begin curation.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="mb-12">
                      <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4 tracking-tighter leading-tight">The Beginning <br/><span className="italic font-light">of Everything.</span></h2>
                      <p className="text-neutral-500 text-lg">
                        Speak with our concierge to start crafting your next world.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-primary/80">
                             Full Name
                          </label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-transparent border-b border-neutral-300 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-primary focus:shadow-[0_1px_0_0_#F97316] transition-all duration-300"
                            placeholder="e.g. Alexander Vance"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-primary/80">
                             Email Address
                          </label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-transparent border-b border-neutral-300 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-primary focus:shadow-[0_1px_0_0_#F97316] transition-all duration-300"
                            placeholder="alexander@example.com"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-primary/80">
                          Intended Portfolio
                        </label>
                        <div className="relative">
                          <select 
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-neutral-300 py-2 text-neutral-900 focus:outline-none focus:border-brand-primary transition-all duration-300 appearance-none text-sm"
                          >
                            <option value="" disabled className="bg-brand-surface">Select a Destination</option>
                            {destinations.map(dest => (
                              <option key={dest.id} value={dest.name} className="bg-brand-surface">{dest.name}</option>
                            ))}
                            <option value="other" className="bg-brand-surface">Other Horizon</option>
                          </select>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 px-2">
                             ↓
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-primary/80">
                           The Dream
                        </label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="2"
                          required
                          placeholder="Tell us about the dream..." 
                          className="bg-transparent border-b border-neutral-300 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-primary focus:shadow-[0_1px_0_0_#F97316] transition-all duration-300 resize-none"
                        ></textarea>
                      </div>

                      <div className="pt-6">
                        <Button 
                          type="submit" 
                          variant="primary" 
                          disabled={isSubmitting}
                          className="w-full py-5 text-sm flex items-center justify-center gap-3 group shadow-xl hover:shadow-brand-primary/20 transition-all duration-500"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              Submit Enquiry
                              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

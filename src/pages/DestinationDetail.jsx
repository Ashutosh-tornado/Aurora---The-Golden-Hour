import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { SafeImage } from '../components/SafeImage';
import { MapPin, Clock, Star, ArrowLeft } from 'lucide-react';

export function DestinationDetail({ onEnquire }) {
  const { slug } = useParams();
  const dest = destinations.find(d => d.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!dest) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-brand-surface px-6">
        <h1 className="text-4xl font-serif text-brand-on-surface mb-6">Narrative Not Found</h1>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-brand-surface min-h-screen">
      {/* Back Button */}
      <Link 
        to="/" 
        className="fixed top-24 left-6 md:left-12 z-40 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white hover:bg-brand-primary transition-all duration-300 group shadow-lg"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
      </Link>

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        <SafeImage 
          src={dest.heroImage} 
          alt={dest.name} 
          aspectRatio="aspect-video"
          className="w-full h-full"
        />
        <div className="absolute inset-x-0 bottom-0 z-20 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-primary-container text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3">
              <MapPin size={16} /> Destination Portfolio
            </p>
            <h1 className="text-white text-5xl md:text-8xl font-serif tracking-tighter leading-none mb-6">
              {dest.name}
            </h1>
            <p className="text-white/80 text-lg md:text-2xl font-light italic max-w-2xl font-serif">
              "{dest.tagline}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          <div className="lg:col-span-12">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-4xl"
             >
                <h2 className="text-xs uppercase tracking-[0.2em] text-brand-primary font-bold mb-8">The Narrative</h2>
                <p className="text-2xl md:text-4xl font-serif text-brand-on-surface leading-tight mb-8 font-light">
                  {dest.description}
                </p>
                <div className="w-24 h-1 bg-brand-primary-container opacity-30" />
             </motion.div>
          </div>
        </div>

        {/* Highlights Gallery */}
        {dest.highlights && dest.highlights.length > 0 && (
          <div className="mb-32">
            <h2 className="text-xs uppercase tracking-[0.2em] text-brand-primary font-bold mb-12">Visual Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {dest.highlights.map((hl, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="overflow-hidden rounded-3xl shadow-xl aspect-[4/5] relative">
                     <SafeImage 
                      src={hl.image} 
                      alt={hl.title}
                      aspectRatio="aspect-[4/5]"
                      className="w-full h-full"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="absolute bottom-8 left-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                       <p className="text-[10px] uppercase tracking-[0.2em] mb-1 opacity-70 font-bold">Experience</p>
                       <h3 className="text-2xl font-serif">{hl.title}</h3>
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Packages */}
        <div id="curations" className="bg-brand-surface-low rounded-[3rem] p-8 md:p-16 border ghost-border overflow-hidden relative shadow-inner">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-primary font-bold mb-4">Itineraries</p>
              <h2 className="text-3xl md:text-6xl font-serif text-brand-on-surface tracking-tighter mb-4 leading-none">Available Curations.</h2>
              <p className="text-brand-on-surface-variant max-w-md mx-auto">Select a tailored itinerary for your stay in {dest.name}.</p>
            </div>
            
            <div className="space-y-8">
              {dest.packages.map((pkg, i) => (
                <motion.div 
                  key={pkg.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-brand-surface-lowest p-8 md:p-12 rounded-3xl shadow-lg border ghost-border group hover:border-brand-primary/30 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8"
                >
                  <div className="max-w-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand-primary font-bold">
                        <Clock size={14} /> {pkg.duration}
                      </span>
                      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand-outline font-bold">
                        <Star size={14} /> Luxury Tier
                      </span>
                    </div>
                    <h3 className="text-3xl font-serif text-brand-on-surface mb-6 group-hover:text-brand-primary transition-colors">{pkg.name}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {pkg.features.map((f, fi) => (
                        <li key={fi} className="text-sm text-brand-on-surface-variant flex items-center gap-2">
                           <div className="w-1 h-1 rounded-full bg-brand-primary/40" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-6 border-t md:border-t-0 md:border-l ghost-border pt-8 md:pt-0 md:pl-12">
                    <div className="text-left md:text-right">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-brand-outline-variant font-bold mb-1">Curation Price</p>
                      <p className="text-3xl font-serif text-brand-on-surface tracking-tight">{pkg.price}</p>
                    </div>
                    <Button onClick={() => onEnquire(pkg.name)} variant="primary" className="w-full md:w-auto px-8">
                      Reserve Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="py-40 text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-brand-on-surface mb-8 tracking-tighter leading-none">Ready for the Narrative?</h2>
            <p className="text-brand-on-surface-variant mb-12 text-lg">
              Every journey begins with a conversation. Let our luxury concierges curate the perfect itinerary for {dest.name}.
            </p>
            <Button onClick={() => onEnquire(dest.name)} variant="primary" className="px-12 py-5 text-sm shadow-xl hover:shadow-2xl">Start Your Journey</Button>
          </motion.div>
        </section>
      </section>
    </main>
  );
}

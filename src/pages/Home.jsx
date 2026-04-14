import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { destinations, signaturePackages, testimonials } from '../data/destinations';
import { Button } from '../components/Button';
import { SafeImage } from '../components/SafeImage';
import { Link, useLocation } from 'react-router-dom';
import { Compass, ShieldCheck, Leaf, Quote } from 'lucide-react';

export function Home({ onEnquire }) {
  const { scrollY } = useScroll();
  const location = useLocation();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="w-full relative overflow-hidden bg-brand-surface">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 z-10" />
          <SafeImage 
            src={destinations[0].heroImage} 
            alt="The Golden Hour" 
            aspectRatio="aspect-video"
            className="w-full h-full"
          />
        </motion.div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-brand-primary-container text-xs md:text-sm uppercase tracking-[0.3em] font-sans mb-8 font-semibold">
              Curated Editorial Travel
            </h2>
            <h1 className="text-brand-surface-lowest text-5xl md:text-8xl lg:text-[110px] font-serif leading-[0.85] tracking-tighter mb-10 text-balance">
              Chasing the <br/>
              <span className="italic font-light opacity-90">Eternal Glow.</span>
            </h1>
          </motion.div>
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Button onClick={() => onEnquire()} className="px-8 py-4 text-sm">Explore the Collection</Button>
            <div className="glass-card px-8 py-5 rounded-2xl border border-white/10 hidden sm:block backdrop-blur-md">
              <p className="text-brand-on-surface text-sm font-sans tracking-wide leading-relaxed">
                There is a moment in every journey.<br/>
                We build itineraries to help you find it.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Scroll</span>
        </motion.div>
      </section>

      {/* 2. JOURNEYS / DESTINATIONS SECTION */}
      <section id="journeys" className="py-40 px-6 md:px-12 max-w-7xl mx-auto overflow-visible">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-8xl font-serif text-brand-on-surface mb-8 tracking-tighter leading-none">Sacred Spaces.</h2>
            <p className="text-brand-on-surface-variant text-lg md:text-xl leading-relaxed font-sans">
              We curate locations that operate off an alternate clock. Places that
              demand stillness and whisper their history. Every destination is a bespoke narrative of light and texture.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[120px] md:text-[180px] font-serif text-brand-outline-variant/10 leading-none italic hidden lg:block select-none"
          >
            01
          </motion.div>
        </div>

        <div className="flex flex-col gap-48 md:gap-64">
          {destinations.slice(0, 3).map((dest, i) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 lg:gap-32`}
            >
              <div className="w-full md:w-[65%] relative group">
                <div className="overflow-hidden rounded-3xl shadow-2xl relative">
                  <SafeImage 
                    src={dest.heroImage} 
                    alt={dest.name} 
                    aspectRatio="aspect-[16/10]"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                {/* Floating Glass Card Info (Desktop) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className={`absolute -bottom-16 ${i % 2 !== 0 ? '-left-12' : '-right-12'} glass-card p-10 rounded-3xl max-w-sm hidden xl:block shadow-[0_30px_60px_rgba(0,0,0,0.12)] border ghost-border backdrop-blur-xl z-20`}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-primary mb-3 font-bold font-sans">
                    {dest.name} • {dest.packages.length} Packages
                  </p>
                  <h3 className="text-3xl font-serif text-brand-on-surface mb-4 leading-tight">{dest.tagline}</h3>
                  <p className="text-brand-on-surface-variant text-sm mb-6 leading-relaxed">
                    {dest.description}
                  </p>
                  <Link 
                    to={`/destination/${dest.slug}`} 
                    className="inline-block text-brand-primary text-xs font-bold tracking-widest uppercase hover:tracking-[0.3em] transition-all duration-300 border-b-2 border-brand-primary/20 hover:border-brand-primary pb-1"
                  >
                    Read Narrative &rarr;
                  </Link>
                </motion.div>
              </div>
              <div className="w-full md:w-[35%] flex flex-col items-start xl:hidden">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-primary mb-3 font-bold">{dest.name}</p>
                <h3 className="text-4xl font-serif text-brand-on-surface mb-4 leading-tight">{dest.tagline}</h3>
                <p className="text-brand-on-surface-variant text-base mb-8 leading-relaxed max-w-md">{dest.description}</p>
                <Button onClick={() => window.location.href=`/destination/${dest.slug}`} variant="tertiary" className="text-xs">
                  See Narrative
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-40 bg-brand-surface-low rounded-[4rem] mx-6 md:mx-12 my-24 overflow-hidden relative border ghost-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <h2 className="text-4xl md:text-6xl font-serif text-brand-on-surface mb-8 tracking-tighter leading-[0.9]">The Aurora <br/><span className="italic">Philosophy.</span></h2>
              <div className="w-16 h-1 bg-brand-primary-container mb-8" />
              <p className="text-brand-on-surface-variant text-lg leading-relaxed">
                We believe travel is not about collecting stamps, but about the quiet resonance of a place meeting a person. Our ethos is built on three pillars of refinement.
              </p>
            </motion.div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-full bg-brand-surface-lowest flex items-center justify-center text-brand-primary shadow-sm border ghost-border">
                  <Compass size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-brand-on-surface">Visual Curation</h3>
                <p className="text-sm text-brand-on-surface-variant leading-relaxed">
                  Every encounter is hand-selected for its aesthetic integrity and atmospheric weight. We look for the "Golden Hour" in every detail.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-full bg-brand-surface-lowest flex items-center justify-center text-brand-primary shadow-sm border ghost-border">
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-brand-on-surface">Silent Luxury</h3>
                <p className="text-sm text-brand-on-surface-variant leading-relaxed">
                  Luxury that doesn't scream. We prioritize understated excellence, private access, and the luxury of unhurried time.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-full bg-brand-surface-lowest flex items-center justify-center text-brand-primary shadow-sm border ghost-border">
                  <Leaf size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-brand-on-surface">Ethical Travel</h3>
                <p className="text-sm text-brand-on-surface-variant leading-relaxed">
                  Sustainable beauty. We partner with local artisans and conservancies to ensure our presence nourishes the heritage we admire.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE JOURNEYS. The "Nested Depth" Tier */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24 relative z-10 px-6">
          <p className="text-[10px] tracking-[0.3em] text-brand-primary uppercase font-bold mb-4">Focus • Look out</p>
          <h2 className="text-5xl md:text-8xl font-serif text-brand-on-surface tracking-tighter">Signature Journeys.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10 items-stretch">
          {signaturePackages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`bg-brand-surface-lowest rounded-[2rem] p-8 flex flex-col ${pkg.isFeatured ? 'shadow-[0_40px_80px_rgba(157,67,0,0.15)] ring-1 ring-brand-primary/10 md:-translate-y-12 scale-[1.03] z-20' : 'shadow-xl ghost-border z-10'}`}
            >
              <div className="w-full mb-8 relative">
                <SafeImage 
                  src={pkg.image} 
                  alt={pkg.name} 
                  aspectRatio="aspect-[4/5]"
                  className="rounded-2xl"
                />
                {pkg.isFeatured && (
                  <div className="absolute top-4 right-4 bg-brand-primary-container text-white text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full font-bold backdrop-blur-md shadow-lg">
                    Collector's Choice
                  </div>
                )}
              </div>
              <h3 className="text-3xl font-serif text-brand-on-surface mb-6 leading-[1.1]">{pkg.name}</h3>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-4 text-brand-on-surface-variant text-sm border-b ghost-border pb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-container" /> {pkg.duration}
                </li>
                <li className="flex items-center gap-4 text-brand-on-surface-variant text-sm border-b ghost-border pb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-container" /> {pkg.lodging}
                </li>
                <li className="flex items-start gap-4 text-brand-on-surface-variant text-sm pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-container mt-1.5 shrink-0" /> <span className="text-balance">{pkg.feature}</span>
                </li>
              </ul>
              
              <div className="flex items-center justify-between pt-8 border-t ghost-border gap-4">
                <div>
                  <p className="text-[9px] text-brand-outline-variant uppercase tracking-[0.2em] mb-1 font-bold">Investment From</p>
                  <p className="text-2xl font-serif text-brand-on-surface tracking-tight">{pkg.price}</p>
                </div>
                <Button 
                  onClick={() => onEnquire(pkg.name)} 
                  variant={pkg.isFeatured ? "primary" : "secondary"} 
                  className={pkg.isFeatured ? "px-6 py-3" : "w-12 h-12 flex items-center justify-center rounded-2xl"}
                >
                  {pkg.isFeatured ? "Enquire" : "→"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. STORIES SECTION (Layered / Shared Stories) */}
      <section id="stories" className="py-48 overflow-hidden bg-brand-background relative">
        <div className="absolute -top-10 -left-10 text-[400px] text-brand-surface-low font-serif leading-none opacity-40 select-none z-0">
          “
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-serif text-brand-on-surface tracking-tighter mb-8 leading-none">Shared Stories.</h2>
            <p className="text-brand-on-surface-variant text-lg">Voices from the outer edges of travel.</p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative min-h-[500px] lg:h-[600px] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-0">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 40, rotate: index === 0 ? -12 : index === 2 ? 12 : 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -4 : index === 2 ? 4 : 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 50,
                boxShadow: "0 40px 100px rgba(0,0,0,0.15)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', damping: 20 }}
              className={`relative w-full max-w-[420px] lg:scale-110 glass-card p-10 md:p-14 rounded-[2.5rem] shadow-2xl border ghost-border cursor-pointer transition-shadow duration-500 bg-white/90 backdrop-blur-2xl
                ${index === 0 ? 'lg:-mr-16 lg:mt-20 z-10' : ''}
                ${index === 1 ? 'z-30 lg:-translate-y-10' : ''}
                ${index === 2 ? 'lg:-ml-16 lg:mt-32 z-10' : ''}
              `}
            >
              <div className="text-brand-primary-container/30 mb-8">
                <Quote size={48} strokeWidth={1} fill="currentColor" fillOpacity={0.05} />
              </div>
              <p className="text-brand-on-surface font-serif text-xl md:text-2xl leading-relaxed mb-10 italic font-light tracking-tight">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-5 pt-8 border-t ghost-border">
                <SafeImage 
                  src={test.image} 
                  alt={test.name} 
                  aspectRatio="aspect-square"
                  className="w-14 h-14 rounded-full border-2 border-brand-primary/10 p-0.5"
                />
                <div>
                  <p className="text-sm font-bold text-brand-on-surface font-sans tracking-tight">{test.name}</p>
                  <p className="text-[10px] text-brand-outline-variant font-sans uppercase tracking-[0.2em] font-bold">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}

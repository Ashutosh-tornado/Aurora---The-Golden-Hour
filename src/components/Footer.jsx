import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Globe, Mail, Share2, ExternalLink } from 'lucide-react';

export function Footer({ onEnquire }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFooterClick = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="bg-brand-surface pt-48 pb-16 border-t ghost-border overflow-hidden relative">
      <div className="absolute top-0 right-0 text-[300px] text-brand-surface-low font-serif leading-none opacity-40 translate-x-1/2 -translate-y-1/2 select-none">
        AR
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-5xl md:text-7xl font-serif text-brand-primary tracking-tighter mb-8 transition-all duration-300">AURORA.</h2>
            <p className="text-brand-on-surface-variant max-w-md text-xl leading-relaxed font-light italic opacity-80">
              "To travel is to discover that everyone is wrong about other countries." We curate the discovery.
            </p>
            <div className="flex gap-6 mt-12">
               <a href="#" className="w-12 h-12 rounded-full border ghost-border flex items-center justify-center text-brand-on-surface-variant hover:bg-brand-primary hover:text-white transition-all duration-500 cursor-pointer">
                 <Globe size={20} />
               </a>
               <a href="#" className="w-12 h-12 rounded-full border ghost-border flex items-center justify-center text-brand-on-surface-variant hover:bg-brand-primary hover:text-white transition-all duration-500 cursor-pointer">
                 <Mail size={20} />
               </a>
               <a href="#" className="w-12 h-12 rounded-full border ghost-border flex items-center justify-center text-brand-on-surface-variant hover:bg-brand-primary hover:text-white transition-all duration-500 cursor-pointer">
                 <Share2 size={20} />
               </a>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-primary mb-10 font-bold">The Narrative</h3>
            <ul className="space-y-6">
              <li>
                <button 
                  onClick={() => handleFooterClick('stories')} 
                  className="text-brand-on-surface hover:text-brand-primary transition-all duration-300 text-sm tracking-wide cursor-pointer hover:opacity-70 text-left"
                >
                  Journal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterClick('philosophy')} 
                  className="text-brand-on-surface hover:text-brand-primary transition-all duration-300 text-sm tracking-wide cursor-pointer hover:opacity-70 text-left"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterClick('journeys')} 
                  className="text-brand-on-surface hover:text-brand-primary transition-all duration-300 text-sm tracking-wide cursor-pointer hover:opacity-70 text-left"
                >
                  The Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={onEnquire} 
                  className="text-brand-on-surface hover:text-brand-primary transition-all duration-300 text-sm tracking-wide flex items-center gap-2 group cursor-pointer hover:opacity-70 text-left"
                >
                  Bespoke Curation <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-primary mb-10 font-bold">Connect</h3>
            <ul className="space-y-6">
              <li><a href="mailto:concierge@auroratravel.com" className="text-brand-on-surface hover:text-brand-primary transition-all duration-300 text-sm tracking-wide border-b ghost-border pb-1 cursor-pointer">concierge@auroratravel.com</a></li>
              <li><span className="text-brand-on-surface text-sm tracking-wide">+1 (800) 555-0199</span></li>
              <li className="pt-4">
                 <p className="text-[10px] uppercase tracking-widest text-brand-outline-variant mb-2">Global Headquarters</p>
                 <p className="text-sm text-brand-on-surface-variant leading-relaxed">
                   122 Golden Hour Ave.<br/>
                   Venice, Italy
                 </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t ghost-border text-[10px] tracking-widest uppercase text-brand-outline-variant font-bold">
          <p className="mb-6 md:mb-0">&copy; {new Date().getFullYear()} Aurora Editorial Travel Experience.</p>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-brand-primary transition-colors cursor-pointer">Privacy Portfolio</Link>
            <Link to="/" className="hover:text-brand-primary transition-colors cursor-pointer">Legal Framework</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

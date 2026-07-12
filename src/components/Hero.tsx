/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

const DESCRIPTORS = [
  "Bringing dreams to life",
  "Designing meaningful experiences",
  "Building products with purpose",
  "Creating interfaces people remember",
  "Turning ideas into products",
  "Designing for people and businesses"
];

export default function Hero({ onScrollToSection }: HeroProps) {
  const [descIdx, setDescIdx] = useState(0);
  const [hoverKey, setHoverKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDescIdx((prev) => (prev + 1) % DESCRIPTORS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNameHover = () => {
    // Incrementing hoverKey forces a clean remount of the name, restarting the wave animation organically
    setHoverKey((prev) => prev + 1);
  };

  return (
    <section 
      id="hero" 
      className="relative flex min-h-[85vh] flex-col items-center justify-between px-6 py-12 md:px-12 md:py-20 lg:py-24 overflow-hidden bg-[#05070A]"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F7DFF]/5 blur-[100px]" />
      
      {/* Fine-grain tech border decorations, fitting Linear/Apple style */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden xl:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden xl:block" />

      {/* Top Header Row of the Hero Container (Metadata & Socials) */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] font-mono tracking-widest text-[#9CA3AF] mb-8">
        <div>
          <span className="text-white/40">Mahr's Tech</span>
          <br />
          <span className="text-[#9CA3AF]/60">© 2026 Built with Precision.</span>
        </div>
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">GitHub</a>
          <a href="https://read.cv" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">Read.cv</a>
        </div>
      </div>

      {/* Main Hero Copy Box */}
      <div className="flex flex-col items-center text-center max-w-5xl w-full my-auto px-4">
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#4F7DFF]/20 bg-[#4F7DFF]/5 px-3 py-1 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#4F7DFF] animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#4F7DFF] uppercase">
            AVAILABLE FOR FREELANCE
          </span>
        </motion.div>

        {/* Display Name with Premium Aurora Wave & Interactive Restart */}
        <div 
          className="relative select-none cursor-pointer active:scale-[0.98] transition-all duration-300 w-full flex justify-center"
          onMouseEnter={handleNameHover}
        >
          <motion.h1 
            key={hoverKey}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,11vw,5rem)] md:text-[clamp(5rem,10vw,8rem)] lg:text-[clamp(7rem,12vw,11rem)] font-extrabold tracking-tighter leading-none animate-aurora-text py-2 whitespace-nowrap"
            style={{ fontFamily: '"SF Pro Display", "Inter", sans-serif' }}
          >
            ZAMAR BAKO
          </motion.h1>
        </div>

        {/* Role Text */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[18px] sm:text-[24px] lg:text-[40px] font-medium text-[#9CA3AF]/95 tracking-tight mt-[6px] leading-tight"
        >
          UX/UI Designer & Frontend Developer
        </motion.p>

        {/* Rotating Descriptor Subtitle (Compact, with fixed height to prevent any layout shifting) */}
        <div className="h-8 overflow-hidden relative flex justify-center items-center w-full mt-[6px] mb-8">
          <AnimatePresence mode="wait">
            <motion.span
              key={descIdx}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-sm sm:text-base lg:text-[23px] font-medium text-[#4F7DFF] tracking-wide font-sans"
            >
              {DESCRIPTORS[descIdx]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Interactive Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          <button
            onClick={() => onScrollToSection('works')}
            className="w-full sm:w-auto sm:min-w-[150px] h-11 px-6 rounded-md bg-[#4F7DFF] text-xs font-mono font-bold tracking-wider text-white transition-all duration-300 hover:bg-[#3B66E0] hover:shadow-[0_0_20px_rgba(79,125,255,0.4)]"
            id="hero-cta-projects"
          >
            View Projects
          </button>
          
          <button
            onClick={() => onScrollToSection('contact')}
            className="w-full sm:w-auto sm:min-w-[150px] h-11 px-6 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono font-bold tracking-wider text-[#F5F7FA] transition-all duration-200"
            id="hero-cta-collaborate"
          >
            Let's collaborate 💬
          </button>
        </motion.div>
      </div>

      {/* Decorative indicator at the bottom */}
      <div className="flex flex-col items-center gap-2 mt-8 animate-bounce text-[#9CA3AF]/40">
        <span className="text-[10px] font-mono tracking-widest">SCROLL TO PHILOSOPHY</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

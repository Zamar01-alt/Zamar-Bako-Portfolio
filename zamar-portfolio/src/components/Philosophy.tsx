/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Eye, Zap, Layers, Activity } from 'lucide-react';
import { ZAMAR_PHOTO_URL } from '../data';

export default function Philosophy() {
  const cards = [
    {
      icon: Eye,
      title: 'Clarity First',
      description: 'Eliminating noise to focus on what matters most to the user.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Speed is a feature. Lightweight, snappy experiences are non-negotiable.',
    },
    {
      icon: Layers,
      title: 'System Thinking',
      description: 'Building components that scale and adapt to future growth.',
    },
    {
      icon: Activity,
      title: 'Purposeful Motion',
      description: 'Using animation to guide, not distract, the user journey.',
    },
  ];

  return (
    <section 
      id="philosophy" 
      className="px-6 py-20 md:px-12 md:py-28 lg:py-32 bg-[#09111F]/50 border-t border-[rgba(255,255,255,0.04)]"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Editorial Text Block and portrait Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-mono font-bold tracking-widest text-[#4F7DFF] uppercase mb-4">
              PHILOSOPHY
            </span>
            <h2 
              className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#F5F7FA] mb-8 font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Design with intent.<br />Built with precision.
            </h2>
            <p className="text-[#9CA3AF] leading-relaxed text-sm md:text-base max-w-xl font-normal space-y-4">
              I believe great digital experiences are built where thoughtful design and robust systems intersect. 
              For me, design is not just how something looks; it's how it behaves, scales, and serves the people using it. 
              My approach combines the precision of modern engineering with the clarity and refinement of purposeful design.
            </p>
          </div>
          
          {/* Portrait Photo with elegant Apple-style glow framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,125,255,0.15)] bg-[#101827]">
              {/* Animated corner lines */}
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-blue-500/50" />
              <div className="absolute top-0 left-0 w-[1px] h-8 bg-blue-500/50" />
              <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-blue-500/50" />
              <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-blue-500/50" />

              <img 
                src={ZAMAR_PHOTO_URL} 
                alt="Zamar Bako portrait" 
                className="w-full h-full object-cover grayscale brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              
              {/* Dark subtle overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 4 Cards bento row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="group relative rounded-xl border border-white/[0.06] bg-[#101827] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4F7DFF]/30 hover:shadow-[0_10px_30px_rgba(79,125,255,0.05)]"
                id={`philosophy-card-${idx}`}
              >
                {/* Micro-glow indicator behind icon */}
                <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-blue-500 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/5 bg-[#09111F] text-[#4F7DFF] transition-all duration-300 group-hover:bg-[#4F7DFF] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                
                <h3 className="text-lg font-sans font-semibold text-[#F5F7FA] mb-3">
                  {card.title}
                </h3>
                
                <p className="text-xs text-[#9CA3AF] leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

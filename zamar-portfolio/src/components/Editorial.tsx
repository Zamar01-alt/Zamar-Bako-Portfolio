/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ZAMAR_PHOTO_URL } from '../data';
import { Sparkles, Camera, Eye, ArrowRight } from 'lucide-react';

export default function Editorial() {
  return (
    <section 
      id="editorial" 
      className="px-6 py-20 md:px-12 md:py-28 bg-[#05070A] border-t border-white/[0.04] relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#EAB308] uppercase block mb-3">
              EDITORIAL & VISUAL EXPRESSION
            </span>
            <h2 
              className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#F5F7FA] font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Wardrobe, Silhouette & Frame.
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md font-normal leading-relaxed">
            Where physical garments, silhouette proportion, and camera stillness coalesce into a singular visual dialogue.
          </p>
        </div>

        {/* Editorial Magazine Spread Container */}
        <div className="rounded-3xl border border-white/10 bg-[#0A0D14] p-6 md:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Magazine Feature Image Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#101827] shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
                
                {/* Clean editorial watermark / index label */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#05070A]/80 border border-white/10 backdrop-blur-md">
                  <span className="text-[9px] font-mono tracking-widest text-white/90 uppercase">
                    EDITORIAL SPREAD • ISSUE 01
                  </span>
                </div>

                <img 
                  src={ZAMAR_PHOTO_URL} 
                  alt="Zamar Bako Editorial Study" 
                  className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 inset-x-4 text-center">
                  <span className="text-xs font-mono tracking-widest text-white/80 uppercase">
                    FIGURE & SILHOUETTE STUDY
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative & Principles */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-[#EAB308] uppercase block">
                  TWO CAPABILITIES IN ONE PRESENCE
                </span>
                <h3 
                  className="text-2xl md:text-4xl font-bold tracking-tight text-white font-display"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Styling with Intent. Composure in Front of the Lens.
                </h3>
                <p className="text-sm md:text-base text-[#9CA3AF] leading-relaxed font-normal">
                  In fashion and creative direction, clothes are not merely worn—they are composed. 
                  My styling focuses on clean drape, intentional layering, balanced silhouettes, and deliberate textural friction. 
                  In front of the camera, stillness and understanding of light do the talking.
                </p>
              </div>

              {/* Three Editorial Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-white font-bold text-sm block mb-1">Wardrobe Direction</span>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    Selecting pieces with architectural weight and proportion to tell a cohesive, grounded story.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-white font-bold text-sm block mb-1">Subject Awareness</span>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    Confidence, posture, and poise that respect the frame and amplify the creative director’s vision.
                  </p>
                </div>
              </div>

              {/* Verified Editorial Batch Notice */}
              <div className="p-4 rounded-xl border border-[#EAB308]/20 bg-[#EAB308]/5 flex items-start gap-3">
                <Camera className="h-4 w-4 text-[#EAB308] shrink-0 mt-0.5" />
                <div className="text-xs text-[#EAB308]/90">
                  <span className="font-bold font-mono">SERIES ARCHIVE IN PROGRESS:</span> Expanded high-fashion and personal editorial photographs will be curated in the upcoming asset release.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

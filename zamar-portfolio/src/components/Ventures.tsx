/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VENTURES } from '../data';
import { Sparkles, HeartHandshake, X, ArrowUpRight, Clock, ShieldAlert } from 'lucide-react';

export default function Ventures() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  return (
    <section 
      id="ventures" 
      className="px-6 py-20 md:px-12 md:py-28 bg-[#09111F]/50 border-t border-b border-white/[0.04] relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#22C55E] uppercase block mb-3">
              WHAT I'M BUILDING
            </span>
            <h2 
              className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#F5F7FA] font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              ZAMAR Ventures.
            </h2>
            <p className="text-sm text-[#9CA3AF] mt-2 max-w-xl font-normal">
              Autonomous projects and independent ventures currently in active incubation under the ZAMAR ecosystem.
            </p>
          </div>

          {/* Patronage / Donate Entry Point */}
          <button
            onClick={() => setDonateModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-[#22C55E]/30 bg-[#22C55E]/5 px-4 py-2.5 text-xs font-mono font-bold tracking-wider text-[#22C55E] hover:bg-[#22C55E]/10 transition-all cursor-pointer shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            id="ventures-donate-button"
          >
            <HeartHandshake className="h-4 w-4" />
            <span>Want to support or donate?</span>
          </button>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VENTURES.map((venture) => (
            <div 
              key={venture.id}
              className="relative rounded-2xl border border-white/10 bg-[#101827] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20"
            >
              {/* Subtle accent glow */}
              <div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[90px] -mr-20 -mt-20 pointer-events-none opacity-15"
                style={{ backgroundColor: venture.accentHex }}
              />

              <div>
                {/* Status Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-mono font-bold tracking-widest uppercase"
                    style={{ 
                      borderColor: `${venture.accentHex}40`, 
                      color: venture.accentHex,
                      backgroundColor: `${venture.accentHex}10` 
                    }}
                  >
                    <Clock className="h-3 w-3 animate-spin" />
                    {venture.status}
                  </span>
                  
                  <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF]/60 uppercase">
                    IN CUBATION
                  </span>
                </div>

                {/* Venture Name & Tagline */}
                <h3 
                  className="text-3xl md:text-4xl font-bold text-white mb-2 font-display"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {venture.name}
                </h3>
                
                <p 
                  className="text-sm font-mono font-medium mb-6"
                  style={{ color: venture.accentHex }}
                >
                  {venture.tagline}
                </p>

                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-8 font-normal">
                  {venture.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-8">
                  <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                    Core Focus:
                  </span>
                  {venture.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: venture.accentHex }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Notice */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9CA3AF]/60">
                <span>Phase 01 Roadmap</span>
                <span className="text-white/40">ZAMAR Venturing</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Support / Donate Dialog Modal */}
      <AnimatePresence>
        {donateModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDonateModalOpen(false)}
              className="absolute inset-0 bg-[#05070A]/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0A0D14] p-8 shadow-2xl z-10"
            >
              <button
                onClick={() => setDonateModalOpen(false)}
                className="absolute top-5 right-5 text-[#9CA3AF] hover:text-white p-1 rounded-lg"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white font-display">Support ZAMAR Ventures</h4>
                  <span className="text-xs font-mono text-[#9CA3AF]">Alpha-Z & Mahr's Place</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#9CA3AF] leading-relaxed my-6">
                <p>
                  Thank you for your interest in fueling independent creative technology and community sports infrastructure.
                </p>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-xs space-y-2">
                  <div className="font-bold text-white">Patronage & Donation Channels:</div>
                  <p>
                    Official automated contribution channels are currently in preparation as we approach milestone announcements for both Alpha-Z and Mahr's Place.
                  </p>
                </div>
                <p className="text-xs">
                  If you are an angel backer, collaborator, or wish to support directly ahead of launch, reach out via direct correspondence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <a
                  href="mailto:zamarbako99@gmail.com?subject=Supporting%20ZAMAR%20Ventures%20(Alpha-Z%20%26%20Mahr's%20Place)"
                  className="flex-1 h-11 rounded-lg bg-[#22C55E] text-xs font-mono font-bold tracking-wider text-black flex items-center justify-center hover:bg-[#16A34A] transition-colors"
                >
                  Direct Venture Inquiry
                </a>
                <button
                  onClick={() => setDonateModalOpen(false)}
                  className="h-11 px-5 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-white hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

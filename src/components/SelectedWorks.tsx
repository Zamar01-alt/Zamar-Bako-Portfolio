/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  ExternalLink
} from 'lucide-react';
import { Project } from '../types';
import { 
  WAAKA_LANDING_01,
  WAAKA_WAITLIST_01,
  SOCCER_QUEENS_01,
  MAHRS_PLACE_01,
  PULSE_MOCKUP_URL,
  WEMATCH_DISCOVERY_URL,
  CHOPBETTA_MENU_URL
} from '../data';

interface SelectedWorksProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
}

export default function SelectedWorks({ projects, onSelectProject }: SelectedWorksProps) {
  // Archive toggle state
  const [showArchive, setShowArchive] = useState(false);

  // SELECTED DESIGN WORK (UI/UX primary contribution)
  const SELECTED_DESIGN_WORK = [
    {
      id: 'pulse',
      title: 'Pulse by NOC',
      category: 'ENTERPRISE NOC DASHBOARD',
      contribution: 'Lead UX/UI Design • Systems Telemetry',
      summary: 'Automated SLA calculations, real-time uptime monitors, and operational clarity under pressure.',
      image: PULSE_MOCKUP_URL,
      aspectClass: 'aspect-[16/10]',
      accentHex: '#F59E0B'
    },
    {
      id: 'wematch',
      title: 'WeMatch',
      category: 'MOBILE DATING & COMMUNITY',
      contribution: 'Lead UX/UI Design • Intent Matching',
      summary: 'Anti-burnout matching flows with active 24-hour reply countdowns and interest-based hubs.',
      image: WEMATCH_DISCOVERY_URL,
      aspectClass: 'aspect-[4/3]',
      accentHex: '#0D9488'
    },
    {
      id: 'chopbetta',
      title: 'Chop Betta',
      category: 'TACTILE FOOD COMMERCE',
      contribution: 'Lead UX/UI Design • Cart Ergonomics',
      summary: 'Sliding cart drawer, contrast-heavy sensory menus, and direct WhatsApp order fulfillment routing.',
      image: CHOPBETTA_MENU_URL,
      aspectClass: 'aspect-[4/3]',
      accentHex: '#EA580C'
    }
  ];

  // BROADER ARCHIVE
  const ARCHIVE_WORKS = [
    {
      title: 'Alpha-Z Lab Interface',
      category: 'CREATIVE WORKFLOWS & SOFTWARE TOOLS',
      role: 'Product Systems & Token Framework',
      description: 'Autonomous creative workflows and experimental component systems developed under the ZAMAR lab umbrella.',
      status: 'LAB EXPLORATION'
    },
    {
      title: 'TDS Hitech Infrastructure Operations',
      category: 'ENTERPRISE IT & SYSTEMS CONTINUITY',
      role: 'IT Operations & Hardware Support',
      description: 'Enterprise workstation troubleshooting, local network diagnostics, switch deployments, and service assurance.',
      status: 'ENTERPRISE SYSTEMS'
    },
    {
      title: 'Soccer Queens Tournament Identity',
      category: 'GRAPHIC DESIGN & CULTURAL MEDIA',
      role: 'Visual Identity & Media Assets',
      description: 'Tournament media packages, matchday schedule layouts, social graphics, and commemorative gala programs.',
      status: 'MEDIA IDENTITY'
    }
  ];

  return (
    <section 
      id="works" 
      className="px-4 py-16 sm:px-8 md:px-12 md:py-24 bg-[#05070A] border-t border-white/[0.04] relative select-none"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* =========================================================================
            1. SECTION INTRODUCTION
            Restrained, direct, focused immediately on the work
            ========================================================================= */}
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#4F7DFF] uppercase block mb-2">
            WORKS
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F7FA] font-display"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Things I’ve actually made.
          </h2>
        </div>

        {/* =========================================================================
            2. THE FOUR FEATURED BUILDS: SINGLE AUTHORITATIVE COVER IMAGE
            Hierarchy:
            Project card -> one strong image -> project information -> Explore Case Study
            The full visual journey unfolds inside the opened case study experience.
            ========================================================================= */}
        <div className="space-y-16 md:space-y-24">
          
          {/* -----------------------------------------------------------------------
              BUILD 01: WAAKA LANDING PAGE
              Single Strong Image: Desktop Browser Cover View (WAAKA_LANDING_01)
              ----------------------------------------------------------------------- */}
          <div 
            onClick={() => onSelectProject('waaka')}
            className="group relative rounded-3xl border border-white/10 bg-[#09111F]/90 p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 hover:border-rose-500/40 text-left cursor-pointer"
          >
            {/* Header Metadata */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full border border-rose-500/40 bg-rose-500/10 text-[9px] font-mono font-bold tracking-widest text-rose-400">
                    FRONTEND IMPLEMENTATION
                  </span>
                  <span className="text-[10px] font-mono text-white/40">YEAR // 2025</span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F7FA] font-display"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Waaka Landing Page
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#9CA3AF] mt-1">
                  City Culture &amp; Urban Exploration Infrastructure
                </p>
              </div>

              <div className="text-[11px] font-mono text-rose-400/80">
                DISCOVERY PORTAL // REACT &amp; TAILWIND
              </div>
            </div>

            {/* Desktop Browser Window Mockup Frame — Single Authoritative Cover Image */}
            <div className="my-8 rounded-2xl border border-white/15 bg-[#05070A] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              {/* Clean Browser Chrome Toolbar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0A0E17] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="px-4 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/60">
                  waaka.com
                </div>
                <div className="text-[10px] font-mono text-rose-400">
                  COVER SCREEN
                </div>
              </div>

              {/* Single Strong Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={WAAKA_LANDING_01}
                  alt="Waaka Landing Page Cover"
                  className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Editorial Contribution & Explore Action */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-8 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 block font-bold">
                  ZAMAR'S ACTUAL CONTRIBUTION:
                </span>
                <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                  Frontend implementation of the landing and waitlist website based on product and design direction. Engineered in React &amp; Tailwind CSS with strict zero layout shift (CLS 0.00), responsive scaling, and modular component hierarchy.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject('waaka');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-rose-500/40 bg-rose-500/10 hover:bg-rose-500/20 text-xs font-mono font-bold text-white transition-all cursor-pointer shadow-lg"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              BUILD 02: WAAKA WAITLIST EXPERIENCE
              Single Strong Image: Funnel Invitation Entry (WAAKA_WAITLIST_01)
              ----------------------------------------------------------------------- */}
          <div 
            onClick={() => onSelectProject('waaka-waitlist')}
            className="group relative rounded-3xl border border-white/10 bg-[#09111F]/90 p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 hover:border-rose-500/40 text-left cursor-pointer"
          >
            {/* Header Metadata */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full border border-rose-500/40 bg-rose-500/10 text-[9px] font-mono font-bold tracking-widest text-rose-400">
                    INTERACTIVE WEB EXPERIENCE
                  </span>
                  <span className="text-[10px] font-mono text-white/40">YEAR // 2025</span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F7FA] font-display"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Waaka Waitlist Experience
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#9CA3AF] mt-1">
                  Tactile Early-Access Funnel, Queue Ticket &amp; Viral Referral Engine
                </p>
              </div>

              <div className="text-[11px] font-mono text-rose-400/80">
                CONVERSION FLOW // LIVE QUEUE ENGINE
              </div>
            </div>

            {/* Single Strong Image Frame */}
            <div className="my-8 rounded-2xl border border-white/15 bg-black overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              <div className="aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={WAAKA_WAITLIST_01}
                  alt="Waaka Waitlist Experience Cover"
                  className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Editorial Contribution & Explore Action */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-8 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 block font-bold">
                  ZAMAR'S ACTUAL CONTRIBUTION:
                </span>
                <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                  Designed and built the interactive waitlist web experience and its interaction/presentation details, featuring live queue position tracking, single-field entry, and social referral acceleration loops.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject('waaka-waitlist');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-rose-500/40 bg-rose-500/10 hover:bg-rose-500/20 text-xs font-mono font-bold text-white transition-all cursor-pointer shadow-lg"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              BUILD 03: SOCCER QUEENS
              Single Strong Image: Platform Home & Match Center (SOCCER_QUEENS_01)
              ----------------------------------------------------------------------- */}
          <div 
            onClick={() => onSelectProject('soccerqueens')}
            className="group relative rounded-3xl border border-white/10 bg-[#09111F]/90 p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 hover:border-emerald-500/40 text-left cursor-pointer"
          >
            {/* Header Metadata */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[9px] font-mono font-bold tracking-widest text-emerald-400">
                    PLATFORM EXPERIENCE
                  </span>
                  <span className="text-[10px] font-mono text-white/40">YEAR // 2024</span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F7FA] font-display"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Soccer Queens
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#9CA3AF] mt-1">
                  The Premier Digital Home for Women's Football in Nigeria
                </p>
              </div>

              <div className="text-[11px] font-mono text-emerald-400">
                PLATFORM ECOSYSTEM // TOURNAMENT PROJECT
              </div>
            </div>

            {/* Single Strong Image Frame */}
            <div className="my-8 rounded-2xl border border-white/15 bg-black overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              <div className="w-full aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={SOCCER_QUEENS_01}
                  alt="Soccer Queens Platform Cover"
                  className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Editorial Contribution & Explore Action */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-8 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                  ZAMAR'S ACTUAL CONTRIBUTION:
                </span>
                <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                  Designed and built the platform experience (active tournament project). Comprehensive editorial coverage, match center, league standings, and athlete directories.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject('soccerqueens');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-mono font-bold text-white transition-all cursor-pointer shadow-lg"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              BUILD 04: MAHR’S PLACE (INVESTOR WEBSITE)
              Single Strong Image: Pitch Hero Presentation (MAHRS_PLACE_01)
              ----------------------------------------------------------------------- */}
          <div 
            onClick={() => onSelectProject('mahrs')}
            className="group relative rounded-3xl border border-white/10 bg-[#09111F]/90 p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 hover:border-green-500/40 text-left cursor-pointer"
          >
            {/* Header Metadata */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full border border-green-500/40 bg-green-500/10 text-[9px] font-mono font-bold tracking-widest text-green-400">
                    INVESTOR WEBSITE BUILD
                  </span>
                  <span className="text-[10px] font-mono text-white/40">YEAR // 2025</span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F7FA] font-display"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Mahr’s Place
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#9CA3AF] mt-1">
                  5-a-Side Football &amp; Recreation Hub Investor Experience
                </p>
              </div>

              <div className="text-[11px] font-mono text-green-400">
                INVESTOR PRESENTATION WEBSITE
              </div>
            </div>

            {/* Single Strong Image Frame */}
            <div className="my-8 rounded-2xl border border-white/15 bg-black overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                <img
                  src={MAHRS_PLACE_01}
                  alt="Mahr's Place Pitch Website Cover"
                  className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Editorial Contribution & Explore Action */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-8 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-green-400 block font-bold">
                  ZAMAR'S ACTUAL CONTRIBUTION:
                </span>
                <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                  Designed and built the digital investor presentation website. Unites high-performance 5-a-side pitch architectural specifications with brand identity and investor pitch narratives.
                </p>
                <p className="text-[11px] text-white/40 italic">
                  * Note: Represents the digital investor presentation website Zamar made, not the physical venue.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject('mahrs');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-green-500/40 bg-green-500/10 hover:bg-green-500/20 text-xs font-mono font-bold text-white transition-all cursor-pointer shadow-lg"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            3. SELECTED DESIGN WORK
            Quieter transition: UI/UX product design work where interfaces are the star
            ========================================================================= */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-white/[0.06]">
          
          {/* Header */}
          <div className="mb-10 text-left">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#9CA3AF]/60 uppercase block mb-1">
              INTERFACE & PRODUCT ARCHITECTURE
            </span>
            <h3 
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Selected Design Work
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 max-w-xl font-normal">
              High-fidelity interface explorations, design systems, and friction-free user flows designed with intentional visual weight.
            </p>
          </div>

          {/* Compact Editorial Design Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SELECTED_DESIGN_WORK.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item.id)}
                className="group relative rounded-2xl border border-white/10 bg-[#09111F]/80 overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between text-left"
              >
                {/* Interface Imagery */}
                <div className={`relative w-full ${item.aspectClass} overflow-hidden bg-black`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09111F] via-transparent to-transparent opacity-85" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/75 border border-white/10 text-[9px] font-mono text-white/80">
                    {item.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span 
                      className="text-[10px] font-mono tracking-wider font-semibold uppercase block mb-1"
                      style={{ color: item.accentHex }}
                    >
                      {item.contribution}
                    </span>
                    <h4 className="text-xl font-bold text-white font-display group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] mt-1.5 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-white/50 group-hover:text-white transition-colors">
                    <span>View Design Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* =========================================================================
            4. BROADER ARCHIVE: "More things I’ve made"
            Subtle expandable treatment revealing additional verified work without fluff
            ========================================================================= */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-white/[0.06] flex flex-col items-center">
          
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-xs font-mono text-[#9CA3AF] hover:text-white transition-all cursor-pointer select-none"
            aria-expanded={showArchive}
          >
            <span>More things I’ve made</span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${showArchive ? 'rotate-180' : ''}`} />
          </button>

          {/* Expanded Archive Drawer */}
          {showArchive && (
            <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 text-left animate-fade-in">
              {ARCHIVE_WORKS.map((arch, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-white/5 bg-[#09111F]/50 flex flex-col justify-between space-y-3"
                >
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#4F7DFF] uppercase block">
                      {arch.status}
                    </span>
                    <h5 className="text-base font-bold text-white font-display mt-1">
                      {arch.title}
                    </h5>
                    <span className="text-[10px] font-mono text-white/50 block mt-0.5">
                      {arch.role}
                    </span>
                    <p className="text-xs text-[#9CA3AF] mt-2 leading-relaxed font-normal">
                      {arch.description}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-white/5 text-[9px] font-mono text-white/30">
                    VERIFIED PORTFOLIO RECORD
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

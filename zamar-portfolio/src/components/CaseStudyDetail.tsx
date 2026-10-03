/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowUpRight,
  Mail, 
  Check, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { Project } from '../types';
import { 
  MAHRS_PLACE_01,
  MAHRS_PLACE_02,
  SOCCER_QUEENS_01,
  SOCCER_QUEENS_02,
  SOCCER_QUEENS_03,
  SOCCER_QUEENS_04,
  WAAKA_LANDING_01,
  WAAKA_LANDING_02,
  WAAKA_LANDING_03,
  WAAKA_WAITLIST_01,
  WAAKA_WAITLIST_02,
  WAAKA_WAITLIST_03,
  PULSE_MOCKUP_URL,
  PULSE_HISTORY_URL,
  PULSE_SLA_URL,
  PULSE_REPORT_URL,
  CHOPBETTA_MOCKUP_URL,
  CHOPBETTA_MENU_URL,
  CHOPBETTA_CHECKOUT_URL,
  CHOPBETTA_FOOD_DETAIL_URL,
  WEMATCH_MOCKUP_URL,
  WEMATCH_DISCOVERY_URL,
  WEMATCH_CHAT_URL,
  WEMATCH_SUCCESS_URL
} from '../data';

interface CaseStudyDetailProps {
  project: Project;
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

interface VisualScreen {
  name: string;
  image: string;
  tagline?: string;
  description: string;
  highlights?: string[];
  isMobileDevice?: boolean;
}

// Verified real visual journey screens per individual project
const PROJECT_SCREENS: Record<string, VisualScreen[]> = {
  waaka: [
    {
      name: "Hero Architecture",
      image: WAAKA_LANDING_01,
      tagline: "Serene Introduction & Search",
      description: "Establishes the Calm Abundance brand identity with spacious typography, search preview, and verified zero layout shift."
    },
    {
      name: "Discovery Tracks",
      image: WAAKA_LANDING_02,
      tagline: "Culture & Event Itineraries",
      description: "Responsive multi-column showcase categorizing curated local spaces, city rhythms, and discovery tracks."
    },
    {
      name: "Community Curation",
      image: WAAKA_LANDING_03,
      tagline: "Local Ecosystem Gateway",
      description: "Spacious editorial blocks spotlighting verified local hosts, secret spots, and exclusive urban events."
    }
  ],
  "waaka-waitlist": [
    {
      name: "Invitation Entry",
      image: WAAKA_WAITLIST_01,
      tagline: "Single-Field Priority Email Capture",
      description: "Low-friction email entry with instant inline validation, zero layout shift, and tactile submission states.",
      highlights: [
        "Minimal single-field email entry reducing cognitive barrier",
        "Instantaneous tactile button state transition upon submission",
        "Clean typography affirming brand tier and privacy assurance"
      ]
    },
    {
      name: "Queue Ticket",
      image: WAAKA_WAITLIST_02,
      tagline: "Live Priority Queue Position & Verified Rank",
      description: "Personalized digital queue ticket card revealing live rank in line and custom viral invite code.",
      highlights: [
        "Dynamic digital queue ticket revealing live rank in line",
        "Unique invite code generator accelerating queue position",
        "Social referral shortcuts directly integrated (WhatsApp, X, Copy)"
      ]
    },
    {
      name: "Referral Loops",
      image: WAAKA_WAITLIST_03,
      tagline: "Viral Link Acceleration & Social Sharing Loops",
      description: "Unique personal invitation link that visibly advances queue position with direct WhatsApp and X sharing triggers.",
      highlights: [
        "Celebratory confirmation state with spring transition physics",
        "Verified membership credentials and access milestone badges",
        "Viral invitation incentives motivating community propagation"
      ]
    }
  ],
  soccerqueens: [
    {
      name: "Platform Overview",
      image: SOCCER_QUEENS_01,
      tagline: "Authoritative Digital Home for African Women's Football",
      description: "Comprehensive editorial coverage, match reporting, player interviews, and platform tournament center."
    },
    {
      name: "Competitions & Tables",
      image: SOCCER_QUEENS_02,
      tagline: "Interactive League Tables & Fixtures",
      description: "Filterable competition standings, fixture tracking, goals scored, and tournament draws."
    },
    {
      name: "Clubs & Rosters",
      image: SOCCER_QUEENS_03,
      tagline: "Player Profiles & Club Directories",
      description: "In-depth squad directories, athlete biographies, international caps, and performance metrics."
    },
    {
      name: "Awards Gala",
      image: SOCCER_QUEENS_04,
      tagline: "Annual Gala & Recognition Portal",
      description: "Prestigious voting and recognition platform honoring outstanding athletic excellence across Nigerian football."
    }
  ],
  mahrs: [
    {
      name: "Pitch Hero",
      image: MAHRS_PLACE_01,
      tagline: "Cinematic Hero Pitch Presentation",
      description: "Dramatic full-bleed introduction establishing the recreation ethos, floodlit pitches, and institutional investor narrative."
    },
    {
      name: "Facility Specs",
      image: MAHRS_PLACE_02,
      tagline: "Architectural & Astroturf Specifications",
      description: "Detailed interactive breakdown of astroturf pitch dimensions, floodlighting, hospitality lounge, and reservation platform."
    }
  ],
  pulse: [
    {
      name: "Dashboard Overview",
      image: PULSE_MOCKUP_URL,
      tagline: "Unified NOC Control Center",
      description: "Aggregates real-time service health, live uptime metrics, and overall incident activity in a single high-performance workspace."
    },
    {
      name: "Incident History",
      image: PULSE_HISTORY_URL,
      tagline: "Uptime Telemetry & History Ledger",
      description: "Real-time uptime monitoring and incident ledger providing operational clarity and fast post-incident root cause audits."
    },
    {
      name: "SLA Thresholds",
      image: PULSE_SLA_URL,
      tagline: "Automated Compliance & Warning Markers",
      description: "Automated tracking of service level agreements, warning markers, and contractual uptime parameters before breach thresholds."
    },
    {
      name: "NOC Analytics",
      image: PULSE_REPORT_URL,
      tagline: "Historical Telemetry & Network Visualization",
      description: "Long-term system stability metrics, incident trend analysis, and automated executive reporting."
    }
  ],
  chopbetta: [
    {
      name: "Homepage",
      image: CHOPBETTA_MOCKUP_URL,
      tagline: "Sensory Dining & Localized Quick-Start",
      description: "Captivates users with vivid brand imagery, popular dish highlights, and localized quick-start ordering choices."
    },
    {
      name: "Menu Discovery",
      image: CHOPBETTA_MENU_URL,
      tagline: "Categorized Menu & Intuitive Filters",
      description: "Browse menu items categorized cleanly with intuitive filters, quick-add toggles, and rich nutritional highlights."
    },
    {
      name: "Sliding Cart",
      image: CHOPBETTA_CHECKOUT_URL,
      tagline: "Sliding Order Drawer & WhatsApp Checkout",
      description: "Integrated shopping drawer that simplifies the checkout flow for pick-up, delivery, or automated WhatsApp order routing."
    },
    {
      name: "Food Detail",
      image: CHOPBETTA_FOOD_DETAIL_URL,
      tagline: "Gourmet Highlights & Customization",
      description: "Sensory detail view highlighting food customization, portion controls, and rich gourmet flavor profiles."
    }
  ],
  wematch: [
    {
      name: "Discovery Profile",
      image: WEMATCH_MOCKUP_URL,
      tagline: "Intent-First Discovery Deck",
      description: "Primary discovery deck displaying one card at a time with a clear focus on shared communication style and intent.",
      isMobileDevice: true
    },
    {
      name: "Discovery Feed",
      image: WEMATCH_DISCOVERY_URL,
      tagline: "Community Hubs & Vibe Discovery",
      description: "Fluid discovery feed matching niche comic, nerd, and hobby circles with authentic interest contexts.",
      isMobileDevice: true
    },
    {
      name: "Intimate Chat",
      image: WEMATCH_CHAT_URL,
      tagline: "24-Hour Reply Window & Icebreakers",
      description: "Elegant, clutter-free message threads with active 24-hour reply countdowns to foster sincere interaction.",
      isMobileDevice: true
    },
    {
      name: "Match Success",
      image: WEMATCH_SUCCESS_URL,
      tagline: "Celebratory Affirmation Screen",
      description: "Meaningful interactive success screen celebrating shared vibes and mutual communication values.",
      isMobileDevice: true
    }
  ]
};

export default function CaseStudyDetail({ project, onBack, onNavigateToProject }: CaseStudyDetailProps) {
  const cs = project.caseStudy;

  // Active screen state
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  // Fallback screens if project has custom journey images
  const defaultScreens: VisualScreen[] = [
    {
      name: project.title,
      image: cs.heroImage,
      description: project.description
    },
    ...(cs.visualJourneyImages || []).map((img, idx) => ({
      name: `View ${idx + 2}`,
      image: img,
      description: project.description
    }))
  ];

  const screens: VisualScreen[] = PROJECT_SCREENS[project.id] || defaultScreens;
  const currentScreen = screens[activeScreenIdx] || screens[0];

  // Reset to first screen when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveScreenIdx(0);
    setSlideDirection(1);
  }, [project.id]);

  // Screen navigation handlers
  const handleNext = () => {
    setSlideDirection(1);
    setActiveScreenIdx((prev) => (prev + 1) % screens.length);
  };

  const handlePrev = () => {
    setSlideDirection(-1);
    setActiveScreenIdx((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const handleSelectScreen = (idx: number) => {
    setSlideDirection(idx >= activeScreenIdx ? 1 : -1);
    setActiveScreenIdx(idx);
  };

  // Mobile horizontal swipe detection
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <article className="min-h-screen bg-[#05070A] text-[#F5F7FA]">
      
      {/* -----------------------------------------------------------------------
          1. TOP NAVIGATION / BREADCRUMB
          ----------------------------------------------------------------------- */}
      <div className="w-full bg-[#09111F]/50 border-b border-white/[0.04] py-3.5 px-6 md:px-12 text-xs font-mono text-[#9CA3AF] sticky top-0 z-30 backdrop-blur-md">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Portfolio
          </button>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-white/40 uppercase">{project.category}</span>
            <span className="text-white/20">•</span>
            <span className="text-white font-medium">{project.title}</span>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------------------------
          2. PROJECT STORY & DETAILS (Spacious, Editorial, Quietly Confident)
          ----------------------------------------------------------------------- */}
      <section className="px-6 pt-16 pb-12 md:px-12 md:pt-24 md:pb-16 relative overflow-hidden text-left">
        <div className="mx-auto max-w-5xl">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span 
              className="inline-flex items-center rounded-full px-3.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase border"
              style={{
                borderColor: `${project.accentHex}40`,
                backgroundColor: `${project.accentHex}10`,
                color: project.accentHex
              }}
            >
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-mono text-white/50">
              YEAR // {project.year}
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-mono text-white/50 uppercase">
              {project.disciplines.join(' • ')}
            </span>
          </div>

          {/* Title */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F7FA] mb-6 font-display"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {project.title}
          </h1>

          {/* Subtitle / Narrative */}
          <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed max-w-3xl mb-10 font-normal">
            {project.subtitle || cs.heroSubtitle}
          </p>

          {/* Zamar's Verified Actual Contribution */}
          <div className="rounded-2xl border border-white/10 bg-[#09111F]/80 p-6 md:p-8 mb-12">
            <span 
              className="text-[10px] font-mono uppercase tracking-widest block font-bold mb-2"
              style={{ color: project.accentHex }}
            >
              ZAMAR'S VERIFIED ROLE &amp; CRAFT:
            </span>
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Verified Project Facets (if defined) */}
          {project.facets && project.facets.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {project.facets.map((facet, fIdx) => (
                <div 
                  key={fIdx}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 flex flex-col justify-between"
                >
                  <div>
                    <span 
                      className="text-[9px] font-mono font-bold tracking-wider uppercase block mb-1"
                      style={{ color: project.accentHex }}
                    >
                      {facet.role}
                    </span>
                    <h4 className="text-sm font-bold text-white font-display mb-1.5">
                      {facet.label}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {facet.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* -----------------------------------------------------------------------
          3. CONTAINED EDITORIAL IMAGE VIEWER (The Target Visual Journey)
          Proportion: Contained visual with generous surrounding dark negative space,
          subtle navigation arrow, and named screen indicator underneath.
          ----------------------------------------------------------------------- */}
      <section className="px-4 py-16 sm:px-8 md:px-12 md:py-24 bg-[#05070A] border-t border-white/[0.04] overflow-hidden">
        <div className="mx-auto max-w-5xl">
          
          {/* Section Introduction */}
          <div className="max-w-2xl mb-10 text-left">
            <span 
              className="text-[10px] font-mono font-bold tracking-widest uppercase block mb-2"
              style={{ color: project.accentHex }}
            >
              VISUAL JOURNEY // SCREEN WALKTHROUGH
            </span>
            <h2 
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FA] mb-2 font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Entering the Work.
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed font-normal">
              {cs.visualJourneyText || 'Interactive editorial walkthrough exploring high-fidelity screens, viewport states, and verified interaction patterns.'}
            </p>
          </div>

          {/* ===================================================================
              CONTAINED EDITORIAL VIEWER ARENA
              Generous dark negative space surrounding the contained visual.
              =================================================================== */}
          <div className="py-6 sm:py-10 md:py-14 flex flex-col items-center justify-center">
            
            {/* Visual Frame Wrapper with subtle navigation arrow controls */}
            <div className="relative flex items-center justify-center w-full">

              {/* Contained Image Frame */}
              <div 
                className={`relative overflow-hidden bg-[#09111F]/90 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] touch-pan-y select-none transition-all duration-300 ${
                  currentScreen.isMobileDevice
                    ? 'w-full max-w-[270px] sm:max-w-[290px] aspect-[9/16] max-h-[500px] rounded-[36px]'
                    : 'w-full max-w-[720px] md:max-w-[780px] lg:max-w-[820px] aspect-[16/10] max-h-[440px] md:max-h-[480px] rounded-2xl sm:rounded-3xl'
                }`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Optional Browser Chrome Bar for Waaka Landing */}
                {project.id === 'waaka' && (
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A0E17] border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <div className="px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/60">
                      waaka.com
                    </div>
                    <div className="text-[9px] font-mono text-rose-400 uppercase font-semibold">
                      VIEWPORT // {activeScreenIdx + 1}
                    </div>
                  </div>
                )}

                {/* Sliding Horizontal Image View */}
                <div className={`relative w-full overflow-hidden bg-black ${project.id === 'waaka' ? 'h-[calc(100%-41px)]' : 'h-full'}`}>
                  <AnimatePresence mode="wait" custom={slideDirection}>
                    <motion.div
                      key={currentScreen.image}
                      custom={slideDirection}
                      variants={{
                        enter: (dir: number) => ({
                          x: dir > 0 ? 35 : -35,
                          opacity: 0
                        }),
                        center: {
                          x: 0,
                          opacity: 1
                        },
                        exit: (dir: number) => ({
                          x: dir > 0 ? -35 : 35,
                          opacity: 0
                        })
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full relative"
                    >
                      <img 
                        src={currentScreen.image} 
                        alt={currentScreen.name}
                        className="w-full h-full object-cover object-top select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Subtle Circular Outlined Navigation Arrow on Desktop (Right) */}
              <button
                onClick={handleNext}
                aria-label="Next screen"
                className="hidden sm:flex absolute -right-3 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-[#09111F]/80 hover:bg-white/10 hover:border-white/50 text-white/80 hover:text-white transition-all duration-200 items-center justify-center cursor-pointer shadow-lg backdrop-blur-md focus:outline-none"
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>

              {/* Subtle Circular Outlined Navigation Arrow on Desktop (Left) */}
              {activeScreenIdx > 0 && (
                <button
                  onClick={handlePrev}
                  aria-label="Previous screen"
                  className="hidden sm:flex absolute -left-3 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-[#09111F]/80 hover:bg-white/10 hover:border-white/50 text-white/80 hover:text-white transition-all duration-200 items-center justify-center cursor-pointer shadow-lg backdrop-blur-md focus:outline-none"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[2]" />
                </button>
              )}

            </div>

            {/* ===================================================================
                DYNAMIC TRAVELLING NAMED SCREEN-POSITION INDICATOR
                The active screen name itself occupies the currently active dot's position:
                Screen 1 active: NAME   •   •   •
                Screen 2 active: •   NAME   •   •
                Screen 3 active: •   •   NAME   •
                Screen 4 active: •   •   •   NAME
                =================================================================== */}
            <motion.div 
              layout
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 select-none min-h-[36px]"
              role="navigation"
              aria-label="Screen position indicator"
            >
              {screens.map((screen, idx) => {
                const isActive = idx === activeScreenIdx;

                return (
                  <motion.div 
                    layout
                    key={idx}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isActive ? (
                        <motion.div
                          key={`name-${idx}`}
                          initial={{ opacity: 0, scale: 0.92, filter: 'blur(2px)' }}
                          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, scale: 0.92, filter: 'blur(2px)' }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="font-mono text-xs sm:text-[13px] font-bold tracking-widest uppercase text-white/95 px-1 sm:px-2 whitespace-nowrap select-none"
                          style={{ letterSpacing: '0.12em' }}
                        >
                          {screen.name}
                        </motion.div>
                      ) : (
                        <motion.button
                          key={`dot-${idx}`}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          onClick={() => handleSelectScreen(idx)}
                          aria-label={`Jump to ${screen.name}`}
                          className="group p-2 flex items-center justify-center cursor-pointer transition-all focus:outline-none"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white/70 transition-all duration-200" />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contextual Editorial Note for Active Screen */}
            <div className="mt-5 max-w-xl text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              {currentScreen.tagline && (
                <span 
                  className="text-[10px] font-mono font-bold tracking-widest uppercase block mb-1"
                  style={{ color: project.accentHex }}
                >
                  {currentScreen.tagline}
                </span>
              )}
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {currentScreen.description}
              </p>

              {/* Optional Highlights for waitlist stages */}
              {currentScreen.highlights && currentScreen.highlights.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/[0.04] space-y-1.5 text-left">
                  {currentScreen.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-[11px] text-[#9CA3AF]">
                      <Check className="h-3 w-3 text-rose-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* -----------------------------------------------------------------------
          4. OUTCOME & NAVIGATION
          ----------------------------------------------------------------------- */}
      <section className="px-6 py-20 md:px-12 md:py-28 bg-[#09111F]/30 border-t border-b border-white/[0.04] text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
        
        <div className="mx-auto max-w-3xl">
          <span 
            className="text-[10px] font-mono font-bold tracking-widest uppercase block mb-3"
            style={{ color: project.accentHex }}
          >
            {cs.outcomeLabel || 'OUTCOME'}
          </span>

          <h2 
            className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-[#F5F7FA] mb-4 font-display"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {cs.outcomeTitle || 'Built with Purpose & Craft.'}
          </h2>

          <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10 font-normal">
            {cs.outcomeText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:zamarbako99@gmail.com"
              className="w-full sm:w-auto h-12 px-8 rounded-full text-xs font-mono font-bold tracking-wider text-white inline-flex items-center justify-center transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: project.accentHex,
                boxShadow: `0 0 25px ${project.accentHex}40`
              }}
            >
              <Mail className="h-4 w-4 mr-2" />
              {cs.outcomeActionLabel || "Let's work together"}
            </a>

            <button 
              onClick={onBack}
              className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono font-bold tracking-wider text-[#F5F7FA] cursor-pointer transition-colors"
            >
              Back to Portfolio
            </button>
          </div>

          {/* Next Project shortcut */}
          {cs.nextProject && (
            <div className="mt-16 pt-8 border-t border-white/5">
              <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF]/40 block mb-2 uppercase">
                NEXT CASE STUDY
              </span>
              <button 
                onClick={() => onNavigateToProject(cs.nextProject!.id)}
                className="text-xl font-sans font-bold text-white hover:text-white/80 transition-colors duration-200 inline-flex items-center gap-1 group font-display cursor-pointer"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                <span>{cs.nextProject.title}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 bg-[#05070A]">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono tracking-widest text-[#9CA3AF]/40">
          <span className="font-bold text-white">ZAMAR</span>
          <span>© 2026 Zamar Bako</span>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">GitHub</a>
          </div>
        </div>
      </footer>

    </article>
  );
}

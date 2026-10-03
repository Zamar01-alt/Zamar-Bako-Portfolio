/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useInView } from 'motion/react';
import { DisciplineId } from '../types';
import { 
  ZAMAR_PHOTO_URL, 
  PULSE_MOCKUP_URL, 
  PULSE_SLA_URL,
  CHOPBETTA_MENU_URL, 
  CHOPBETTA_FOOD_DETAIL_URL,
  WAAKA_MOCKUP_URL, 
  WAAKA_EXPLORE_URL,
  WAAKA_BOOKING_URL,
  WAAKA_SAVED_URL,
  WEMATCH_DISCOVERY_URL,
  WEMATCH_CHAT_URL,
  WAAKA_LANDING_01,
  WAAKA_WAITLIST_01,
  SOCCER_QUEENS_01,
  SOCCER_QUEENS_04,
  MAHRS_PLACE_01,
  MAHRS_PLACE_02
} from '../data';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Sparkles, 
  Layers, 
  Terminal, 
  ExternalLink,
  ShieldCheck,
  Cpu,
  Eye
} from 'lucide-react';

interface DisciplineData {
  id: DisciplineId;
  label: string;
  shortDesc: string;
  tools: string[];
  hasAiSavvy?: boolean;
  aiNote?: string;
  accentHex: string;
}

export default function Disciplines() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<DisciplineId>('frontend');

  // Section-based intersection trigger for replay behavior
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.2, once: false });

  // Single connected travelling wave across pills
  const waveContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.04
      }
    }
  };

  const wavePillVariants = {
    hidden: shouldReduceMotion 
      ? { opacity: 0, y: 0 } 
      : { opacity: 0.1, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion 
        ? { duration: 0.2, ease: 'easeOut' }
        : {
            y: {
              type: 'spring',
              stiffness: 240,
              damping: 14,
              mass: 0.8
            },
            opacity: {
              duration: 0.42,
              ease: 'easeOut'
            }
          }
    }
  };

  // Frontend & UI/UX inward-curved carousel active index (0 to 4)
  const [activeFrontendIdx, setActiveFrontendIdx] = useState(2); // Center card active initially
  const [activeUiuxIdx, setActiveUiuxIdx] = useState(2);

  // Responsive mobile detector
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Stylist active expanded item on hover / tap
  const [hoveredStylingIdx, setHoveredStylingIdx] = useState<number | null>(null);
  // Stylist focused modal for clicked image
  const [focusedStylingItem, setFocusedStylingItem] = useState<{
    id: string;
    title: string;
    image: string;
    details: string[];
  } | null>(null);

  // Discipline metadata configuration
  const DISCIPLINE_CONFIGS: DisciplineData[] = [
    {
      id: 'frontend',
      label: 'Frontend Developer',
      shortDesc: 'Turning interfaces and ideas into working digital experiences with zero layout shift, fluid performance, and resilient architecture.',
      tools: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Next.js'],
      hasAiSavvy: true,
      aiNote: 'AI-assisted workflow',
      accentHex: '#3B82F6'
    },
    {
      id: 'uiux',
      label: 'UI/UX Designer',
      shortDesc: 'Thinking through how things look, feel, and function—minimizing cognitive friction, organizing spatial hierarchy, and crafting intentional user flows.',
      tools: ['Figma Tokens', 'Design Systems', 'User Journey Mapping', 'High-Density Dashboards', 'Prototyping'],
      hasAiSavvy: true,
      aiNote: 'AI-assisted design & research',
      accentHex: '#8B5CF6'
    },
    {
      id: 'graphics',
      label: 'Graphics Designer',
      shortDesc: 'I make ideas visible. Editorial compositions, brand identity systems, tournament collateral, and spatial hierarchy.',
      tools: ['Typography Hierarchy', 'Brand Systems', 'Poster Composition', 'Grid Structure', 'Social & Event Media'],
      hasAiSavvy: false,
      accentHex: '#EC4899'
    },
    {
      id: 'styling',
      label: 'Stylist',
      shortDesc: 'Form, fabric weight, layering, and silhouette curation. Putting things together with intention, quiet confidence, and textural contrast.',
      tools: ['Silhouette & Proportion', 'Monochrome Palettes', 'Textural Contrast', 'Tailoring & Cut', 'Editorial Curation'],
      hasAiSavvy: false,
      accentHex: '#EAB308'
    },
    {
      id: 'it',
      label: 'IT Support & Connectivity',
      shortDesc: 'Ground-level IT infrastructure, network diagnostics, and diagnostic tenacity. When something doesn\'t work, I figure out why.',
      tools: ['Cisco Packet Tracer', 'Network Diagnostics', 'Hardware Troubleshooting', 'LAN/WAN Routing', 'Systems Deployment'],
      hasAiSavvy: true,
      aiNote: 'AI-assisted diagnostics & research',
      accentHex: '#06B6D4'
    },
    {
      id: 'model',
      label: 'Model',
      shortDesc: 'Camera stillness, body geometry, and natural presence. Embodying the artistic vision in front of the lens.',
      tools: ['Camera Poise & Stillness', 'Body Geometry', 'Lighting Awareness', 'Editorial Expression', 'Lookbook Direction'],
      hasAiSavvy: false,
      accentHex: '#F97316'
    }
  ];

  const currentConfig = DISCIPLINE_CONFIGS.find(d => d.id === selectedId) || DISCIPLINE_CONFIGS[0];

  // 1. FRONTEND VERIFIED WORKS (5 authentic builds)
  const FRONTEND_WORKS = [
    {
      id: 'fe-waaka',
      title: 'Waaka Landing Page',
      tag: 'FRONTEND IMPLEMENTATION',
      description: 'Multi-track city discovery web application built with modular component trees and zero layout shift.',
      image: WAAKA_LANDING_01,
      tech: ['React 19', 'Tailwind', 'Motion']
    },
    {
      id: 'fe-soccerqueens',
      title: 'Soccer Queens',
      tag: 'LEAGUE PLATFORM',
      description: 'Complete tournament match center, live fixtures, and player directory architecture.',
      image: SOCCER_QUEENS_01,
      tech: ['TypeScript', 'Component Tree', 'API']
    },
    {
      id: 'fe-pulse',
      title: 'Pulse NOC Console',
      tag: 'ENTERPRISE SAAS',
      description: 'High-density network telemetry frontend with real-time SLA incident monitors.',
      image: PULSE_MOCKUP_URL,
      tech: ['React', 'Data Visuals', 'Tailwind']
    },
    {
      id: 'fe-waitlist',
      title: 'Waaka Waitlist',
      tag: 'CONVERSION FUNNEL',
      description: 'Single-field early access funnel, live queue ticket positioning, and social referral engine.',
      image: WAAKA_WAITLIST_01,
      tech: ['React', 'Framer Motion', 'State Engine']
    },
    {
      id: 'fe-mahrs',
      title: "Mahr's Place Web",
      tag: 'INVESTOR WEBSITE',
      description: 'Pitch presentation website uniting 5-a-side floodlit pitches, lounge hospitality, and deck economics.',
      image: MAHRS_PLACE_01,
      tech: ['React', 'Presentation Architecture', 'Tailwind']
    }
  ];

  // 2. UI/UX VERIFIED WORKS (5 genuine interface projects)
  const UIUX_WORKS = [
    {
      id: 'ux-waaka',
      title: 'Waaka City Discovery',
      tag: 'CALM ABUNDANCE',
      description: 'Replaced urban noise with spacious whitespace and zero-fatigue ticket pathways.',
      image: WAAKA_MOCKUP_URL,
      metric: '3 Expressions'
    },
    {
      id: 'ux-pulse',
      title: 'Pulse SLA Tracking',
      tag: 'SYSTEMS TELEMETRY',
      description: 'Transformed chaotic server alerts into automated, actionable threshold dashboards.',
      image: PULSE_SLA_URL,
      metric: 'Real-Time NOC'
    },
    {
      id: 'ux-wematch',
      title: 'WeMatch Dating Flow',
      tag: 'FRICTION REDUCTION',
      description: 'Intent-first matching UX featuring 24-hour reply limits to combat swipe fatigue.',
      image: WEMATCH_DISCOVERY_URL,
      metric: 'Social Journey'
    },
    {
      id: 'ux-chopbetta',
      title: 'Chop Betta Cart Flow',
      tag: 'COMMERCE UX',
      description: 'Tactile drawer-based meal customizer with real-time calorie and checkout summary.',
      image: CHOPBETTA_MENU_URL,
      metric: 'High Conversion'
    },
    {
      id: 'ux-mahrs',
      title: "Mahr's Place Pitch & Specs",
      tag: 'SPATIAL SPECIFICATIONS',
      description: 'Interactive architectural breakdown of 5-a-side pitch dimensions, lighting, and hospitality amenities.',
      image: MAHRS_PLACE_02,
      metric: '5-a-Side Specs'
    }
  ];

  // 3. GRAPHICS VERIFIED WORKS (5 legitimate graphic design works)
  const GRAPHICS_WORKS = [
    {
      id: 'gr-soccerqueens-gala',
      title: 'Soccer Queens Awards Gala',
      category: 'MEDIA BRANDING & GALA',
      subtitle: 'Commemorative annual awards identity, voting portal collateral, and partner sponsorship displays.',
      image: SOCCER_QUEENS_04
    },
    {
      id: 'gr-tournament-identity',
      title: 'Tournament Matchday Identity',
      category: 'SPORTS MEDIA GRAPHICS',
      subtitle: 'Visual identity, tournament brackets, matchday schedule boards, and athlete cards.',
      image: SOCCER_QUEENS_01
    },
    {
      id: 'gr-posters',
      title: 'Spatial Balance Posters',
      category: 'EDITORIAL COMPOSITION',
      subtitle: 'Exploration of negative space, architectural typography hierarchy, and stark color weight.',
      type: 'typographic',
      headline: 'FORM // SPACE // RHYTHM'
    },
    {
      id: 'gr-identity',
      title: 'ZAMAR Personal Ecosystem',
      category: 'BRAND IDENTITY',
      subtitle: 'Minimalist brand marks, geometric monogram, and cohesive visual design language.',
      type: 'monogram',
      headline: 'ZAMAR • 2026'
    },
    {
      id: 'gr-culinary-art',
      title: 'Chop Betta Brand Palette',
      category: 'CULINARY COMPOSITION',
      subtitle: 'Editorial typography, high-contrast sensory menu identity, and digital brand collateral.',
      image: CHOPBETTA_FOOD_DETAIL_URL
    }
  ];

  // 4. STYLING VERIFIED IMAGES (6 image strip slices)
  const STYLING_ITEMS = [
    {
      id: 'st-1',
      title: 'Monochromatic Silhouette',
      aspect: 'Form & Line',
      image: ZAMAR_PHOTO_URL,
      details: ['Clean tailored cuts', 'Heavy cotton & structured drape', 'Subtle contrast with dark tones']
    },
    {
      id: 'st-2',
      title: 'Layering & Proportion',
      aspect: 'Fabric Weight',
      image: ZAMAR_PHOTO_URL,
      details: ['Architectural jacket shoulders', 'High-collar layering', 'Restrained earth accents']
    },
    {
      id: 'st-3',
      title: 'Tailored Minimalist Cut',
      aspect: 'Quiet Confidence',
      image: ZAMAR_PHOTO_URL,
      details: ['Uncluttered lines', 'Intentional sleeve break', 'Zero unnecessary embellishment']
    },
    {
      id: 'st-4',
      title: 'Textural Interplay',
      aspect: 'Tactile Contrast',
      image: ZAMAR_PHOTO_URL,
      details: ['Matte wool pairing with soft jersey', 'Controlled light reflection', 'Balanced volume']
    },
    {
      id: 'st-5',
      title: 'Modern Poise',
      aspect: 'Silhouette Curation',
      image: ZAMAR_PHOTO_URL,
      details: ['Grounded stance', 'Geometry framed against minimal backdrop', '3D design extension']
    },
    {
      id: 'st-6',
      title: 'Editorial Presence',
      aspect: 'Studio Frame',
      image: ZAMAR_PHOTO_URL,
      details: ['Natural stance', 'Monochrome palette', 'Refined visual posture']
    }
  ];

  // 5. IT SUPPORT & CONNECTIVITY VERIFIED WORKS (5 items, straight technical row)
  const IT_WORKS = [
    {
      id: 'it-tds',
      title: 'Enterprise Workstation Diagnostics',
      category: 'TDS HITECH SYSTEMS',
      points: [
        'Hands-on hardware troubleshooting & component replacement',
        'OS deployment, driver diagnostics, and enterprise system integrity',
        'Root-cause resolution across client infrastructure endpoints'
      ],
      badge: 'ENTERPRISE IT'
    },
    {
      id: 'it-packettracer',
      title: 'Cisco Packet Tracer Simulations',
      category: 'NETWORK TOPOLOGY',
      points: [
        'Configuring multi-layer switch topologies and VLAN routing',
        'Simulating subnet allocation, DHCP pools, and NAT gateways',
        'Packet analysis and end-to-end latency optimization'
      ],
      badge: 'TOPOLOGY'
    },
    {
      id: 'it-lan',
      title: 'Local Network & Infrastructure',
      category: 'CONNECTIVITY',
      points: [
        'Physical cable management, patch panel mapping, and switch ports',
        'Troubleshooting connectivity bottlenecks and IP conflicts',
        'Router configuration and localized wireless continuity'
      ],
      badge: 'CONNECTIVITY'
    },
    {
      id: 'it-sla',
      title: 'Service Assurance & Uptime Monitoring',
      category: 'SYSTEM HEALTH',
      points: [
        'Monitoring continuous 99.98% network continuity',
        'Rapid incident triage and hardware maintenance logging',
        'Diagnosing failing network switches and power redundancy'
      ],
      badge: 'MONITORING'
    },
    {
      id: 'it-cs',
      title: 'Computer Science Foundation',
      category: 'SYSTEMS THINKING',
      points: [
        'Academic grounding in computing architecture and protocols',
        'Bridging the physical network layer with software engineering',
        'Tenacious diagnostic methodology: isolate, diagnose, solve'
      ],
      badge: 'FOUNDATION'
    }
  ];

  // 6. MODEL VERIFIED EDITORIAL ARCHIVE (Pinterest / Magazine grid)
  const MODEL_ITEMS = [
    {
      id: 'md-1',
      title: 'Figure 01: Frame Presence',
      subtitle: 'Poise in front of the lens',
      image: ZAMAR_PHOTO_URL,
      aspectClass: 'aspect-[3/4]',
      colSpan: 'col-span-1 md:col-span-1',
      caption: 'Quiet confidence through body geometry and stillness.'
    },
    {
      id: 'md-2',
      title: 'Figure 02: Lighting & Silhouette',
      subtitle: 'Natural shadow contrast',
      image: ZAMAR_PHOTO_URL,
      aspectClass: 'aspect-[4/5]',
      colSpan: 'col-span-1 md:col-span-1',
      caption: 'Awareness of key lighting and edge definition.'
    },
    {
      id: 'md-3',
      title: 'Figure 03: Editorial Stillness',
      subtitle: 'Embodying the design intent',
      image: ZAMAR_PHOTO_URL,
      aspectClass: 'aspect-[1/1]',
      colSpan: 'col-span-1 md:col-span-1',
      caption: 'Translating concepts into unforced, grounded posture.'
    },
    {
      id: 'md-4',
      title: 'Figure 04: Visual Impact',
      subtitle: 'Campaign lookbook study',
      image: ZAMAR_PHOTO_URL,
      aspectClass: 'aspect-[16/10]',
      colSpan: 'col-span-1 md:col-span-2',
      caption: 'Living the aesthetic — when the creative work is the person.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="disciplines" 
      className="px-4 py-16 sm:px-8 md:px-12 md:py-24 bg-[#05070A] relative overflow-hidden"
    >
      {/* Background soft atmospheric glow matching current discipline */}
      <div 
        className="absolute top-1/3 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] pointer-events-none opacity-15 transition-all duration-700"
        style={{ backgroundColor: currentConfig.accentHex }}
      />

      <div className="mx-auto max-w-6xl">
        
        {/* =========================================================================
            1. ONLY THE SIX DISCIPLINE PILLS
            Physical travelling wave animation when entering viewport:
            Pill 1 rises & settles -> Pill 2 rises & settles -> Pill 3 ... -> Pill 6
            Stops completely once settled. Resets when leaving, replays upon return.
            ========================================================================= */}
        <motion.div 
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          variants={waveContainerVariants}
          className="relative mb-12 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 select-none"
        >
          {DISCIPLINE_CONFIGS.map((disc) => {
            const isActive = disc.id === selectedId;

            return (
              <motion.button
                key={disc.id}
                variants={wavePillVariants}
                onClick={() => setSelectedId(disc.id)}
                aria-selected={isActive}
                className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-mono font-medium tracking-wider transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7DFF] ${
                  isActive
                    ? 'text-white border border-white/60 bg-white/10 font-bold shadow-[0_0_25px_rgba(255,255,255,0.18)] scale-102'
                    : 'text-[#9CA3AF] border border-white/[0.08] bg-white/[0.02] hover:text-white hover:border-white/25 hover:bg-white/[0.05] shadow-[0_0_15px_rgba(255,255,255,0.03)]'
                }`}
                style={{
                  borderColor: isActive ? disc.accentHex : undefined,
                  boxShadow: isActive 
                    ? `0 0 25px ${disc.accentHex}40, inset 0 0 12px ${disc.accentHex}20` 
                    : undefined
                }}
              >
                <span className="flex items-center gap-2">
                  <span 
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      isActive ? 'bg-white' : 'bg-[#9CA3AF]/50'
                    }`}
                    style={{ backgroundColor: isActive ? '#FFFFFF' : undefined }}
                  />
                  <span>{disc.label}</span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* =========================================================================
            2. THE DISCIPLINE WORLD ARENA
            Shared Header: Short Human Description + Comfortable Tools + AI Savvy Note
            ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentConfig.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col space-y-8"
          >
            {/* Context Header: Short Description & Tools */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.06]">
              <div className="max-w-xl">
                <span 
                  className="text-[10px] font-mono font-bold tracking-widest uppercase block mb-1.5"
                  style={{ color: currentConfig.accentHex }}
                >
                  DISCIPLINE // {currentConfig.label}
                </span>
                <p className="text-base sm:text-lg text-[#F5F7FA] font-light leading-snug">
                  {currentConfig.shortDesc}
                </p>
              </div>

              {/* Tools / Comfortable With Pills */}
              <div className="flex flex-col items-start md:items-end space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#9CA3AF]/60">
                  COMFORTABLE WITH:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 md:justify-end max-w-md">
                  {currentConfig.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#9CA3AF] bg-white/[0.03] border border-white/[0.06]"
                    >
                      {tool}
                    </span>
                  ))}

                  {/* Restrained AI Savvy Badge where applicable */}
                  {currentConfig.hasAiSavvy && currentConfig.aiNote && (
                    <span 
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono border"
                      style={{
                        borderColor: `${currentConfig.accentHex}40`,
                        backgroundColor: `${currentConfig.accentHex}10`,
                        color: currentConfig.accentHex
                      }}
                    >
                      <Sparkles className="h-3 w-3" />
                      <span>{currentConfig.aiNote}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* =========================================================================
                3. THE SIX DISTINCT WORK PRESENTATION STYLES
                ========================================================================= */}

            {/* ---------------------------------------------------------------------
                A. FRONTEND DEVELOPER: Inward-Curved Concave Project Cards
                --------------------------------------------------------------------- */}
            {currentConfig.id === 'frontend' && (
              <div className="relative py-6 sm:py-10 select-none">
                {/* Horizontal Navigation Controls */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#9CA3AF]/60 uppercase tracking-widest">
                    CURVED WORK REPOSITORY ({activeFrontendIdx + 1} OF {FRONTEND_WORKS.length})
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveFrontendIdx(prev => (prev === 0 ? FRONTEND_WORKS.length - 1 : prev - 1))}
                      className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-[#9CA3AF] hover:text-white transition-all cursor-pointer"
                      aria-label="Previous frontend project"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setActiveFrontendIdx(prev => (prev === FRONTEND_WORKS.length - 1 ? 0 : prev + 1))}
                      className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-[#9CA3AF] hover:text-white transition-all cursor-pointer"
                      aria-label="Next frontend project"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Concave Inward-Curved Arrangement Arena */}
                <div className="relative h-[380px] sm:h-[440px] w-full flex items-center justify-center overflow-hidden">
                  {FRONTEND_WORKS.map((work, idx) => {
                    // Distance from active center index (-2, -1, 0, 1, 2)
                    let dist = idx - activeFrontendIdx;
                    // Support continuous circular wrap distance
                    if (dist < -2) dist += FRONTEND_WORKS.length;
                    if (dist > 2) dist -= FRONTEND_WORKS.length;

                    const isActive = dist === 0;

                    // Concave inward curve geometry:
                    // Center is smallest (scale: 0.90, recessed in depth)
                    // Mid-flanks are medium (scale: 0.98)
                    // Outer flanks are largest (scale: 1.06, forward)
                    const absDist = Math.abs(dist);
                    const scale = absDist === 0 ? 0.90 : absDist === 1 ? 0.98 : 1.05;
                    const rotateY = dist * -12; // Angles inward towards center
                    const zIndex = absDist === 0 ? 30 : absDist === 1 ? 20 : 10;
                    const opacity = absDist > 2 ? 0 : 1;

                    // Responsive X offset
                    const xMultiplier = isMobile ? 95 : 180;
                    const x = dist * xMultiplier;
                    const y = absDist * -8; // Slight vertical curve

                    return (
                      <motion.div
                        key={work.id}
                        onClick={() => setActiveFrontendIdx(idx)}
                        animate={{
                          x,
                          y,
                          scale,
                          rotateY,
                          zIndex,
                          opacity
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className={`absolute w-[220px] sm:w-[280px] aspect-[4/5] rounded-2xl border bg-[#09111F] overflow-hidden cursor-pointer shadow-2xl transition-colors ${
                          isActive 
                            ? 'border-[#3B82F6] shadow-[0_15px_35px_rgba(59,130,246,0.25)]' 
                            : 'border-white/10 hover:border-white/30'
                        }`}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: 1000
                        }}
                      >
                        <div className="relative w-full h-[58%] overflow-hidden bg-black">
                          <img
                            src={work.image}
                            alt={work.title}
                            className="w-full h-full object-cover object-center select-none"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#09111F] via-transparent to-transparent" />
                          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#05070A]/80 border border-white/10 text-[9px] font-mono text-[#3B82F6]">
                            {work.tag}
                          </div>
                        </div>

                        <div className="p-4 flex flex-col justify-between h-[42%] text-left">
                          <div>
                            <h4 className="text-sm font-bold text-white font-display truncate">
                              {work.title}
                            </h4>
                            <p className="text-[11px] text-[#9CA3AF] line-clamp-2 mt-1 leading-snug">
                              {work.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1 mt-2">
                            {work.tech.map(t => (
                              <span key={t} className="px-1.5 py-0.5 rounded bg-white/[0.04] text-[9px] font-mono text-white/70">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------------
                B. UI/UX DESIGNER: Inward-Curved Concave Product Cards
                --------------------------------------------------------------------- */}
            {currentConfig.id === 'uiux' && (
              <div className="relative py-6 sm:py-10 select-none">
                {/* Horizontal Navigation Controls */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#9CA3AF]/60 uppercase tracking-widest">
                    PRODUCT & INTERFACE WORK ({activeUiuxIdx + 1} OF {UIUX_WORKS.length})
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveUiuxIdx(prev => (prev === 0 ? UIUX_WORKS.length - 1 : prev - 1))}
                      className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-[#9CA3AF] hover:text-white transition-all cursor-pointer"
                      aria-label="Previous UI/UX project"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setActiveUiuxIdx(prev => (prev === UIUX_WORKS.length - 1 ? 0 : prev + 1))}
                      className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-[#9CA3AF] hover:text-white transition-all cursor-pointer"
                      aria-label="Next UI/UX project"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Concave Inward-Curved Arrangement Arena */}
                <div className="relative h-[380px] sm:h-[440px] w-full flex items-center justify-center overflow-hidden">
                  {UIUX_WORKS.map((work, idx) => {
                    let dist = idx - activeUiuxIdx;
                    if (dist < -2) dist += UIUX_WORKS.length;
                    if (dist > 2) dist -= UIUX_WORKS.length;

                    const isActive = dist === 0;
                    const absDist = Math.abs(dist);
                    const scale = absDist === 0 ? 0.90 : absDist === 1 ? 0.98 : 1.05;
                    const rotateY = dist * -12;
                    const zIndex = absDist === 0 ? 30 : absDist === 1 ? 20 : 10;
                    const opacity = absDist > 2 ? 0 : 1;

                    const xMultiplier = isMobile ? 95 : 180;
                    const x = dist * xMultiplier;
                    const y = absDist * -8;

                    return (
                      <motion.div
                        key={work.id}
                        onClick={() => setActiveUiuxIdx(idx)}
                        animate={{
                          x,
                          y,
                          scale,
                          rotateY,
                          zIndex,
                          opacity
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className={`absolute w-[220px] sm:w-[280px] aspect-[4/5] rounded-2xl border bg-[#0A0714] overflow-hidden cursor-pointer shadow-2xl transition-colors ${
                          isActive 
                            ? 'border-[#8B5CF6] shadow-[0_15px_35px_rgba(139,92,246,0.25)]' 
                            : 'border-white/10 hover:border-white/30'
                        }`}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: 1000
                        }}
                      >
                        <div className="relative w-full h-[58%] overflow-hidden bg-black">
                          <img
                            src={work.image}
                            alt={work.title}
                            className="w-full h-full object-cover object-center select-none"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0714] via-transparent to-transparent" />
                          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#05070A]/80 border border-white/10 text-[9px] font-mono text-[#8B5CF6]">
                            {work.metric}
                          </div>
                        </div>

                        <div className="p-4 flex flex-col justify-between h-[42%] text-left">
                          <div>
                            <span className="text-[9px] font-mono tracking-widest text-[#8B5CF6] uppercase block">
                              {work.tag}
                            </span>
                            <h4 className="text-sm font-bold text-white font-display truncate mt-0.5">
                              {work.title}
                            </h4>
                            <p className="text-[11px] text-[#9CA3AF] line-clamp-2 mt-1 leading-snug">
                              {work.description}
                            </p>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[9px] font-mono text-[#9CA3AF]">
                            <span>USER JOURNEY & PROTOTYPE</span>
                            <span className="text-white">TAP FOCUS ↓</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------------
                C. GRAPHICS DESIGNER: Straight Equal-Sized Card Row
                --------------------------------------------------------------------- */}
            {currentConfig.id === 'graphics' && (
              <div className="py-4">
                <div className="flex items-center overflow-x-auto gap-4 sm:gap-5 pb-4 pt-2 no-scrollbar scroll-smooth">
                  {GRAPHICS_WORKS.map((work) => (
                    <div
                      key={work.id}
                      className="group relative w-[240px] sm:w-[280px] shrink-0 rounded-2xl border border-white/10 bg-[#12050B] overflow-hidden shadow-lg transition-all duration-300 hover:border-[#EC4899]/60 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(236,72,153,0.18)]"
                    >
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-black flex items-center justify-center">
                        {work.image ? (
                          <>
                            <img
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#12050B] via-transparent to-transparent opacity-80" />
                          </>
                        ) : work.type === 'monogram' ? (
                          <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#1C0812] to-[#0A0307] text-[#EC4899] border-b border-pink-500/20 select-none">
                            <div className="flex justify-between items-start">
                              <span className="font-mono text-[8px] text-pink-400/70 tracking-widest uppercase">MONOGRAM • 01</span>
                              <div className="h-2 w-2 rounded-full bg-[#EC4899] animate-pulse" />
                            </div>
                            <div className="text-center py-2">
                              <span className="text-4xl font-black font-display tracking-widest text-white drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                                Z
                              </span>
                              <span className="block text-[8px] font-mono tracking-widest text-[#EC4899] mt-1">
                                {work.headline}
                              </span>
                            </div>
                            <div className="text-[7px] font-mono text-white/40 tracking-wider">
                              GEOMETRIC LOGOMARK
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#14060E] text-white border-b border-pink-500/20 select-none">
                            <div className="flex justify-between items-start">
                              <span className="font-mono text-[8px] text-pink-400 tracking-widest uppercase">POSTER SYSTEM</span>
                              <span className="font-mono text-[8px] text-white/40">1:1.414</span>
                            </div>
                            <div className="space-y-1">
                              <div className="text-base font-black font-display tracking-tight text-white leading-none">
                                FORM
                              </div>
                              <div className="text-base font-black font-display tracking-tight text-pink-400 leading-none pl-3">
                                SPACE
                              </div>
                              <div className="text-base font-black font-display tracking-tight text-white/80 leading-none pl-6">
                                RHYTHM
                              </div>
                            </div>
                            <div className="text-[7.5px] font-mono text-[#9CA3AF] tracking-wider truncate">
                              PROPORTIONAL GRID &amp; SCALE
                            </div>
                          </div>
                        )}
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/80 border border-pink-500/30 text-[8px] font-mono text-[#EC4899] z-10">
                          {work.category}
                        </div>
                      </div>

                      <div className="p-4 text-left">
                        <h4 className="text-sm font-bold text-white font-display leading-tight truncate">
                          {work.title}
                        </h4>
                        <p className="text-[11px] text-[#9CA3AF] mt-1.5 leading-relaxed line-clamp-2">
                          {work.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------------
                D. STYLIST: Horizontal Editorial Contact Sheet Image Strip + Expand
                --------------------------------------------------------------------- */}
            {currentConfig.id === 'styling' && (
              <div className="py-4 select-none">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#9CA3AF]/60">
                  <span className="uppercase tracking-widest">EDITORIAL CONTACT SHEET // HOVER OR TAP TO EXPAND</span>
                  <span className="hidden sm:inline">CLICK IMAGE TO VIEW DETAIL SPEC</span>
                </div>

                {/* Tight Editorial Strip with Smooth Expansion */}
                <div className="flex items-center gap-1.5 sm:gap-2.5 w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden p-2 border border-white/10 bg-[#0A0804]">
                  {STYLING_ITEMS.map((item, idx) => {
                    const isHovered = hoveredStylingIdx === idx;

                    return (
                      <motion.div
                        key={item.id}
                        onMouseEnter={() => setHoveredStylingIdx(idx)}
                        onMouseLeave={() => setHoveredStylingIdx(null)}
                        onClick={() => setFocusedStylingItem(item)}
                        layout
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className={`relative h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                          isHovered 
                            ? 'flex-[2.8] border-2 border-[#EAB308] shadow-[0_0_25px_rgba(234,179,8,0.25)]' 
                            : 'flex-1 border border-white/10 hover:border-white/30'
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center grayscale contrast-105 transition-all duration-500 hover:grayscale-0"
                          referrerPolicy="no-referrer"
                        />

                        {/* Dark Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/95 via-transparent to-black/20 pointer-events-none" />

                        {/* Title & Aspect Details visible on expansion */}
                        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left pointer-events-none">
                          <span className="text-[9px] font-mono tracking-widest text-[#EAB308] uppercase block truncate">
                            {item.aspect}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-white font-display truncate">
                            {item.title}
                          </h4>

                          {isHovered && (
                            <motion.div 
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-2 hidden sm:block"
                            >
                              <span className="text-[10px] font-mono text-white/60 block truncate">
                                {item.details[0]}
                              </span>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Lightbox / Focused Styling Item Modal */}
                <AnimatePresence>
                  {focusedStylingItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        className="relative w-full max-w-xl rounded-2xl border border-white/15 bg-[#09111F] p-6 shadow-2xl overflow-hidden"
                      >
                        <button
                          onClick={() => setFocusedStylingItem(null)}
                          className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-[#9CA3AF] hover:text-white transition-all cursor-pointer"
                        >
                          <X className="h-4 w-4" />
                        </button>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                          <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-black">
                            <img
                              src={focusedStylingItem.image}
                              alt={focusedStylingItem.title}
                              className="w-full h-full object-cover grayscale contrast-105"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="text-left space-y-4">
                            <div>
                              <span className="text-[10px] font-mono tracking-widest text-[#EAB308] uppercase block mb-1">
                                STYLING COMPOSITION SPEC
                              </span>
                              <h3 className="text-xl font-bold text-white font-display">
                                {focusedStylingItem.title}
                              </h3>
                            </div>

                            <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                              <span className="text-[10px] font-mono text-[#9CA3AF] uppercase block">
                                ARCHITECTURAL DETAILS:
                              </span>
                              {focusedStylingItem.details.map((detail, dIdx) => (
                                <div key={dIdx} className="flex items-center gap-2 text-xs text-white/80">
                                  <span className="h-1 w-1 rounded-full bg-[#EAB308]" />
                                  <span>{detail}</span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-2">
                              <span className="text-[10px] font-mono text-white/40 block">
                                Part of ZAMAR personal wardrobe and editorial archive.
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* ---------------------------------------------------------------------
                E. IT SUPPORT & CONNECTIVITY: Straight Technical Row
                --------------------------------------------------------------------- */}
            {currentConfig.id === 'it' && (
              <div className="py-4">
                <div className="flex items-center overflow-x-auto gap-4 sm:gap-5 pb-4 pt-2 no-scrollbar scroll-smooth">
                  {IT_WORKS.map((work) => (
                    <div
                      key={work.id}
                      className="group relative w-[260px] sm:w-[300px] shrink-0 rounded-2xl border border-white/10 bg-[#050B14] p-5 shadow-lg transition-all duration-300 hover:border-[#06B6D4]/50 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)] flex flex-col justify-between"
                    >
                      <div>
                        {/* Terminal status bar header */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-[9px] font-mono">
                          <span className="text-[#06B6D4] font-bold flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            {work.badge}
                          </span>
                          <span className="text-white/40">{work.category}</span>
                        </div>

                        <h4 className="text-sm font-bold text-white font-display mb-3 text-left">
                          {work.title}
                        </h4>

                        <div className="space-y-2 text-left">
                          {work.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2 text-[11px] text-[#9CA3AF] leading-snug">
                              <span className="text-[#06B6D4] mt-0.5">&gt;</span>
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[8px] font-mono text-white/40">
                        <span>SYSTEM PROTOCOL</span>
                        <span className="text-emerald-400">STATUS: VERIFIED</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------------
                F. MODEL: Magazine / Pinterest-Style Editorial Grid
                --------------------------------------------------------------------- */}
            {currentConfig.id === 'model' && (
              <div className="py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                  {MODEL_ITEMS.map((item) => (
                    <div
                      key={item.id}
                      className={`group relative rounded-2xl border border-white/10 bg-[#0E0704] overflow-hidden shadow-xl transition-all duration-300 hover:border-[#F97316]/50 ${item.colSpan}`}
                    >
                      <div className={`relative w-full ${item.aspectClass} overflow-hidden bg-black`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover grayscale contrast-105 transition-all duration-700 group-hover:scale-103 group-hover:grayscale-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0704] via-transparent to-transparent opacity-85" />
                        
                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <span className="text-[9px] font-mono tracking-widest text-[#F97316] uppercase block">
                            {item.subtitle}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-white font-display mt-0.5">
                            {item.title}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-[#9CA3AF] mt-1 line-clamp-2">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

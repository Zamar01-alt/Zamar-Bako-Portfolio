/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { 
  ZAMAR_PHOTO_URL, 
  PULSE_MOCKUP_URL, 
  PULSE_SLA_URL,
  CHOPBETTA_MENU_URL, 
  CHOPBETTA_FOOD_DETAIL_URL,
  WAAKA_EXPLORE_URL,
  WEMATCH_DISCOVERY_URL,
  WAAKA_LANDING_01,
  WAAKA_WAITLIST_01,
  SOCCER_QUEENS_01,
  SOCCER_QUEENS_04,
  MAHRS_PLACE_01
} from '../data';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

interface StackCard {
  id: string;
  type: 'image' | 'terminal' | 'graphic' | 'spec';
  title: string;
  image?: string;
}

interface DisciplineStackDef {
  id: string;
  discipline: string;
  accentHex: string;
  angleDeg: number;
  radiusFactorX: number;
  radiusFactorY: number;
  rotationDeg: number;
  phaseOffset: number;
  cards: StackCard[];
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  // Responsive container viewport dimensions
  const [containerSize, setContainerSize] = useState({ width: 1440, height: 850 });

  // Lifecycle States: 'orbit' -> 'gravity' -> 'intro'
  const [heroState, setHeroState] = useState<'orbit' | 'gravity' | 'intro'>(
    shouldReduceMotion ? 'intro' : 'orbit'
  );

  // Shockwave pulse counter on central ZAMAR
  const [corePulse, setCorePulse] = useState(0);

  // Track which stack is currently fanned/opened
  const [activeFannedStack, setActiveFannedStack] = useState<string | null>(null);

  // Pause States: pause when inspecting a stack or when interacting with introduction
  const isOrbitPaused = activeFannedStack !== null;
  const [isIntroHovered, setIsIntroHovered] = useState(false);

  // Countdown timers (in milliseconds) with pause-and-resume capability
  const [orbitTimeMs, setOrbitTimeMs] = useState(5500); // ~5.5s viewing hold
  const [introTimeMs, setIntroTimeMs] = useState(9000); // ~9s calm reading hold

  // Transition helper when intro is preparing to recycle back to orbit
  const [isRecyclingIntro, setIsRecyclingIntro] = useState(false);

  // Track scroll position to restart animation when scrolling back to the top
  const hasScrolledAwayRef = useRef(false);

  // Four Perspective Pills styling definition
  const PERSPECTIVE_PILLS = useMemo(() => [
    {
      phrase: "MAKE IT LOOK GOOD.",
      colorClass: "bg-[#4F7DFF]/10 text-[#C7D7FE] border-[#4F7DFF]/30 hover:border-[#4F7DFF]/60 hover:bg-[#4F7DFF]/15",
      dotColor: "#4F7DFF"
    },
    {
      phrase: "MAKE IT WORK.",
      colorClass: "bg-[#10B981]/10 text-[#A7F3D0] border-[#10B981]/30 hover:border-[#10B981]/60 hover:bg-[#10B981]/15",
      dotColor: "#10B981"
    },
    {
      phrase: "FIGURE IT OUT.",
      colorClass: "bg-[#F59E0B]/10 text-[#FDE68A] border-[#F59E0B]/30 hover:border-[#F59E0B]/60 hover:bg-[#F59E0B]/15",
      dotColor: "#F59E0B"
    },
    {
      phrase: "SOLVE THE PROBLEM.",
      colorClass: "bg-[#F43F5E]/10 text-[#FECDD3] border-[#F43F5E]/30 hover:border-[#F43F5E]/60 hover:bg-[#F43F5E]/15",
      dotColor: "#F43F5E"
    }
  ], []);

  // Six Real Discipline Stacks definition (~5 cards per stack)
  const STACK_DEFS: DisciplineStackDef[] = useMemo(() => [
    {
      id: 'stack-frontend',
      discipline: 'Frontend',
      accentHex: '#3B82F6',
      angleDeg: -120, // Upper-left
      radiusFactorX: 0.78,
      radiusFactorY: 0.94,
      rotationDeg: -5,
      phaseOffset: 0,
      cards: [
        { id: 'fe-1', type: 'image', title: 'Waaka Landing Page', image: WAAKA_LANDING_01 },
        { id: 'fe-2', type: 'image', title: 'Soccer Queens Platform', image: SOCCER_QUEENS_01 },
        { id: 'fe-3', type: 'image', title: 'Pulse NOC Console', image: PULSE_MOCKUP_URL },
        { id: 'fe-4', type: 'image', title: "Mahr's Place Pitch", image: MAHRS_PLACE_01 },
        { id: 'fe-5', type: 'terminal', title: 'React 19 & Tailwind CSS' }
      ]
    },
    {
      id: 'stack-uiux',
      discipline: 'UI/UX',
      accentHex: '#8B5CF6',
      angleDeg: -60, // Upper-right
      radiusFactorX: 0.78,
      radiusFactorY: 0.94,
      rotationDeg: 5,
      phaseOffset: 1.1,
      cards: [
        { id: 'ux-1', type: 'image', title: 'WeMatch Interface', image: WEMATCH_DISCOVERY_URL },
        { id: 'ux-2', type: 'image', title: 'Pulse SLA Tracking', image: PULSE_SLA_URL },
        { id: 'ux-3', type: 'image', title: 'Chop Betta Ordering', image: CHOPBETTA_MENU_URL },
        { id: 'ux-4', type: 'image', title: 'Waaka Waitlist Funnel', image: WAAKA_WAITLIST_01 },
        { id: 'ux-5', type: 'spec', title: 'Figma Design Tokens & Hierarchy' }
      ]
    },
    {
      id: 'stack-graphics',
      discipline: 'Graphics',
      accentHex: '#EC4899',
      angleDeg: 180, // Mid-flank left
      radiusFactorX: 0.92,
      radiusFactorY: 0.16,
      rotationDeg: -7,
      phaseOffset: 2.2,
      cards: [
        { id: 'gr-1', type: 'image', title: 'Soccer Queens Tournament', image: SOCCER_QUEENS_04 },
        { id: 'gr-2', type: 'graphic', title: 'Tournament Graphic Identity' },
        { id: 'gr-3', type: 'spec', title: 'Grid & Typographic Hierarchy' },
        { id: 'gr-4', type: 'graphic', title: 'ZAMAR Geometric Monogram' },
        { id: 'gr-5', type: 'spec', title: 'Spatial Balance & Print Form' }
      ]
    },
    {
      id: 'stack-styling',
      discipline: 'Styling',
      accentHex: '#EAB308',
      angleDeg: 0, // Mid-flank right
      radiusFactorX: 0.92,
      radiusFactorY: 0.16,
      rotationDeg: 6,
      phaseOffset: 3.3,
      cards: [
        { id: 'st-1', type: 'image', title: 'Silhouette & Cut', image: ZAMAR_PHOTO_URL },
        { id: 'st-2', type: 'spec', title: 'Monochrome Texture & Heavy Cotton' },
        { id: 'st-3', type: 'spec', title: 'Tailoring & Garment Layer' },
        { id: 'st-4', type: 'spec', title: 'Architectural Shoulder & Drape' },
        { id: 'st-5', type: 'spec', title: 'Tone, Contrast & Form' }
      ]
    },
    {
      id: 'stack-it',
      discipline: 'IT & Connectivity',
      accentHex: '#06B6D4',
      angleDeg: 125, // Lower-left
      radiusFactorX: 0.74,
      radiusFactorY: 0.86,
      rotationDeg: 4,
      phaseOffset: 4.4,
      cards: [
        { id: 'it-1', type: 'terminal', title: 'Enterprise Network Node' },
        { id: 'it-2', type: 'terminal', title: 'Latency 0.4ms • Uptime 99.98%' },
        { id: 'it-3', type: 'spec', title: 'TDS Hitech Diagnostics' },
        { id: 'it-4', type: 'terminal', title: 'Cisco Packet Tracer Topology' },
        { id: 'it-5', type: 'spec', title: 'Hardware Assurance & Routing' }
      ]
    },
    {
      id: 'stack-model',
      discipline: 'Model',
      accentHex: '#F97316',
      angleDeg: 55, // Lower-right
      radiusFactorX: 0.74,
      radiusFactorY: 0.86,
      rotationDeg: -4,
      phaseOffset: 5.5,
      cards: [
        { id: 'md-1', type: 'image', title: 'Camera Presence', image: ZAMAR_PHOTO_URL },
        { id: 'md-2', type: 'spec', title: 'Body Geometry & Lighting' },
        { id: 'md-3', type: 'spec', title: 'Editorial Stillness' },
        { id: 'md-4', type: 'spec', title: 'Key Shadow & Incident Light' },
        { id: 'md-5', type: 'spec', title: 'Unforced Visual Presence' }
      ]
    }
  ], []);

  // Update container size dynamically using clientWidth/clientHeight
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const clientW = containerRef.current.clientWidth;
        const clientH = containerRef.current.clientHeight;
        setContainerSize({
          width: Math.max(320, clientW || window.innerWidth),
          height: Math.max(480, clientH || window.innerHeight * 0.95)
        });
      } else {
        setContainerSize({
          width: Math.max(320, window.innerWidth),
          height: Math.max(480, window.innerHeight * 0.95)
        });
      }
    };

    updateSize();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(containerRef.current);
    } else {
      window.addEventListener('resize', updateSize);
    }

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  // Calculate dynamic responsive geometry for stacks and ZAMAR wordmark
  const orbitalGeometry = useMemo(() => {
    const { width: W, height: H } = containerSize;
    const isMobile = W < 640;
    const isTablet = W >= 640 && W < 1024;

    // Stack physical dimensions dynamically scaled according to viewport
    let stackW = 196;
    let stackH = 146;
    if (isMobile) {
      stackW = Math.min(110, Math.round(W * 0.27));
      stackH = Math.round(stackW * 0.75);
    } else if (isTablet) {
      stackW = Math.min(150, Math.round(W * 0.20));
      stackH = Math.round(stackW * 0.75);
    } else {
      const scaleByHeight = Math.min(1, H / 900);
      stackW = Math.round(Math.min(200, Math.max(150, W * 0.13 * scaleByHeight)));
      stackH = Math.round(stackW * 0.75);
    }

    // Maximum safe fan expansion allowance
    const maxFanExpandX = isMobile ? 18 : 36;
    const maxFanExpandY = isMobile ? 22 : 40;

    // Boundary edge padding so stacks never clip outside container
    const safeMarginX = isMobile ? 12 : 24;
    const safeMarginY = isMobile ? 14 : 24;

    // Maximum safe horizontal & vertical orbital radii from geometric center
    const maxSafeRx = Math.max(60, (W / 2) - (stackW / 2) - maxFanExpandX - safeMarginX);
    const maxSafeRy = Math.max(50, (H / 2) - (stackH / 2) - maxFanExpandY - safeMarginY);

    const positions = STACK_DEFS.map((def) => {
      const rad = (def.angleDeg * Math.PI) / 180;
      
      let rxMultiplier = def.radiusFactorX;
      let ryMultiplier = def.radiusFactorY;

      if (isMobile) {
        rxMultiplier = Math.min(0.88, def.radiusFactorX * 0.95);
        ryMultiplier = Math.min(0.96, def.radiusFactorY * 1.02);
      }

      const rawX = Math.cos(rad) * maxSafeRx * rxMultiplier;
      const rawY = Math.sin(rad) * maxSafeRy * ryMultiplier;

      const clampedX = Math.max(-maxSafeRx, Math.min(maxSafeRx, rawX));
      const clampedY = Math.max(-maxSafeRy, Math.min(maxSafeRy, rawY));

      return {
        id: def.id,
        x: Math.round(clampedX),
        y: Math.round(clampedY),
        stackW,
        stackH,
        rotationDeg: def.rotationDeg,
        phaseOffset: def.phaseOffset
      };
    });

    return {
      stackW,
      stackH,
      positions
    };
  }, [containerSize, STACK_DEFS]);

  // =========================================================================
  // ORBIT STATE TIMELINE: Pauses on stack hover/tap, resumes when released
  // =========================================================================
  useEffect(() => {
    if (shouldReduceMotion) {
      setHeroState('intro');
      return;
    }

    if (heroState !== 'orbit') return;
    if (isOrbitPaused) return; // USER IS INSPECTING A STACK -> PAUSE TIMELINE

    const interval = setInterval(() => {
      setOrbitTimeMs((prev) => {
        if (prev <= 100) {
          clearInterval(interval);
          // Trigger Gravity Event
          setHeroState('gravity');
          setTimeout(() => {
            setCorePulse((c) => c + 1);
          }, 750);
          setTimeout(() => {
            setHeroState('intro');
            setIntroTimeMs(9000); // Initialize calm 9s intro hold
          }, 1300);
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [heroState, isOrbitPaused, shouldReduceMotion]);

  // =========================================================================
  // INTRO STATE TIMELINE: Calm hold, pauses on hover, then smooth auto-restart
  // =========================================================================
  useEffect(() => {
    if (shouldReduceMotion) return;
    if (heroState !== 'intro') return;
    if (isIntroHovered) return; // USER IS READING / HOVERING INTRO -> PAUSE TIMELINE

    const interval = setInterval(() => {
      setIntroTimeMs((prev) => {
        if (prev <= 100) {
          clearInterval(interval);
          // Begin quiet transition back into the orbital state
          setIsRecyclingIntro(true);
          setTimeout(() => {
            setIsRecyclingIntro(false);
            setHeroState('orbit');
            setOrbitTimeMs(5500); // Reset orbit hold for next cycle
          }, 700);
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [heroState, isIntroHovered, shouldReduceMotion]);

  // Restart animation immediately whenever user scrolls back up to the top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroThreshold = window.innerHeight * 0.65;

      if (scrollY > heroThreshold) {
        hasScrolledAwayRef.current = true;
      }

      if (hasScrolledAwayRef.current && scrollY <= 30) {
        hasScrolledAwayRef.current = false;
        setActiveFannedStack(null);
        setIsRecyclingIntro(false);
        setHeroState('orbit');
        setOrbitTimeMs(5500);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle stack tap on mobile to toggle fan
  const handleStackTap = (stackId: string) => {
    if (heroState !== 'orbit') return;
    setActiveFannedStack((prev) => (prev === stackId ? null : stackId));
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-[92vh] sm:min-h-[95vh] w-full items-center justify-center overflow-hidden bg-[#05070A] select-none"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -z-20 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F7DFF]/5 blur-[130px] pointer-events-none"
      />

      {/* ========================================================
          PHASE 01 & 02: THE SIX STACKS & GRAVITY WHOOSH
          (Noticeably fanned cards + Pausable hero timeline + Symmetrical geometry)
          ======================================================== */}
      {(heroState === 'orbit' || heroState === 'gravity') && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none">
          
          {/* Subtle Elliptical Orbital Path Guide Ring */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[56vh] w-[74vw] max-w-[1080px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.02] pointer-events-none" />

          {/* CENTRAL ZAMAR WORDMARK (True Optical & Gravitational Center) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] z-30 flex flex-col items-center justify-center text-center pointer-events-none">
            <motion.div
              animate={{
                scale: heroState === 'gravity' ? [1, 1.07, 0.98, 1] : 1
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              {/* Gravitational Shockwave Ring */}
              <AnimatePresence>
                {corePulse > 0 && (
                  <motion.div
                    key={`shockwave-${corePulse}`}
                    initial={{ opacity: 0.85, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-full border border-[#4F7DFF]/60 pointer-events-none -z-10 shadow-[0_0_30px_#4F7DFF]"
                  />
                )}
              </AnimatePresence>

              {/* Distinctive Modern Wordmark Typography */}
              <h1
                className="text-[clamp(3.5rem,14.5vw,11.8rem)] font-extrabold tracking-[-0.035em] leading-none text-[#F5F7FA] font-wordmark select-none"
                style={{
                  fontFamily: '"Plus Jakarta Sans", "Sora", sans-serif',
                  letterSpacing: '-0.035em',
                  textRendering: 'optimizeLegibility'
                }}
              >
                ZAMAR
              </h1>
            </motion.div>
          </div>

          {/* THE SIX DISCIPLINE STACKS (Enhanced Fan Separation + Pausable Physics) */}
          {STACK_DEFS.map((stack, stackIdx) => {
            const isGravity = heroState === 'gravity';
            const isFanned = activeFannedStack === stack.id;
            const pos = orbitalGeometry.positions[stackIdx] || { x: 0, y: 0, stackW: 160, stackH: 120, rotationDeg: 0, phaseOffset: 0 };

            // Inward fanning bias so cards fan towards center and away from viewport edges
            const fanBiasX = pos.x > 0 ? -1 : 1;
            const fanBiasY = pos.y > 0 ? -1 : 1;

            const isMobile = containerSize.width < 640;
            const fanScaleFactor = isMobile ? 0.7 : 1.0;

            return (
              <motion.div
                key={stack.id}
                onMouseEnter={() => {
                  if (heroState === 'orbit') setActiveFannedStack(stack.id);
                }}
                onMouseLeave={() => {
                  if (heroState === 'orbit') setActiveFannedStack(null);
                }}
                onClick={() => handleStackTap(stack.id)}
                className="absolute cursor-pointer pointer-events-auto"
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: -pos.stackW / 2,
                  marginTop: -pos.stackH / 2,
                  width: `${pos.stackW}px`,
                  height: `${pos.stackH}px`,
                  zIndex: isFanned ? 40 : 20
                }}
                animate={
                  isGravity
                    ? {
                        // COÖRDINATED WHOOSH TO ZAMAR EXACT OPTICAL CENTER (0, 0)
                        x: 0,
                        y: 0,
                        scale: [1, 1.1, 0.12],
                        opacity: [1, 1, 0],
                        rotate: [pos.rotationDeg, pos.rotationDeg * 2.5, 0],
                        filter: ['blur(0px)', 'blur(2px)', 'blur(8px)'],
                        transition: {
                          duration: 0.85,
                          delay: stackIdx * 0.04,
                          ease: [0.72, 0, 0.28, 1]
                        }
                      }
                    : {
                        // PRECISE CALCULATED ORBITAL POSITION RELATIVE TO CENTER
                        x: pos.x,
                        y: pos.y,
                        scale: isFanned ? 1.05 : 1,
                        opacity: 1,
                        rotate: pos.rotationDeg,
                        filter: 'blur(0px)',
                        transition: {
                          x: { duration: 0.6, ease: 'easeOut' },
                          y: { duration: 0.6, ease: 'easeOut' },
                          scale: { duration: 0.25 }
                        }
                      }
                }
              >
                {/* Micro-sway / Breathing physics: PAUSES when inspecting a stack */}
                <motion.div
                  animate={
                    isGravity || isOrbitPaused
                      ? { y: 0 }
                      : {
                          y: [-4, 4, -4],
                          rotate: [pos.rotationDeg - 0.8, pos.rotationDeg + 0.8, pos.rotationDeg - 0.8]
                        }
                  }
                  transition={{
                    repeat: isOrbitPaused ? 0 : Infinity,
                    duration: 5.2 + pos.phaseOffset * 0.4,
                    ease: 'easeInOut'
                  }}
                  className="relative w-full h-full select-none"
                >
                  <div className="relative w-full h-full rounded-xl overflow-visible">
                    {stack.cards.map((card, cIdx) => {
                      const isTop = cIdx === 0;

                      // Enhanced Fanned Card Physics:
                      // Noticeable, clearly separated cards revealing underlying work (~5 cards)
                      let xOffset = cIdx * 2.5 * fanBiasX;
                      let yOffset = cIdx * -2.5;
                      let rotOffset = (cIdx % 2 === 1 ? 1.5 : -1.5) * (cIdx > 0 ? 1 : 0);
                      let cardScale = 1 - cIdx * 0.02;

                      if (isFanned) {
                        if (cIdx === 0) {
                          // Top card pushes forward
                          xOffset = Math.round(14 * fanBiasX * fanScaleFactor);
                          yOffset = Math.round(10 * fanBiasY * fanScaleFactor);
                          rotOffset = -3.5 * fanBiasX;
                          cardScale = 1.02;
                        } else if (cIdx === 1) {
                          // Card 2 fans outward upper
                          xOffset = Math.round(36 * fanBiasX * fanScaleFactor);
                          yOffset = Math.round(-14 * fanBiasY * fanScaleFactor);
                          rotOffset = 6.5 * fanBiasX;
                          cardScale = 0.99;
                        } else if (cIdx === 2) {
                          // Card 3 fans outward lower
                          xOffset = Math.round(-28 * fanBiasX * fanScaleFactor);
                          yOffset = Math.round(-26 * fanBiasY * fanScaleFactor);
                          rotOffset = -8 * fanBiasX;
                          cardScale = 0.96;
                        } else if (cIdx === 3) {
                          // Card 4 fans further out upper
                          xOffset = Math.round(48 * fanBiasX * fanScaleFactor);
                          yOffset = Math.round(24 * fanBiasY * fanScaleFactor);
                          rotOffset = 9.5 * fanBiasX;
                          cardScale = 0.93;
                        } else if (cIdx === 4) {
                          // Card 5 fans lower flank
                          xOffset = Math.round(-38 * fanBiasX * fanScaleFactor);
                          yOffset = Math.round(10 * fanBiasY * fanScaleFactor);
                          rotOffset = -11 * fanBiasX;
                          cardScale = 0.90;
                        }
                      }

                      return (
                        <motion.div
                          key={card.id}
                          animate={{
                            x: xOffset,
                            y: yOffset,
                            rotate: rotOffset,
                            scale: cardScale,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="absolute inset-0 rounded-xl border border-white/10 bg-[#09111F] overflow-hidden shadow-2xl"
                          style={{
                            zIndex: 10 - cIdx,
                            boxShadow: isTop 
                              ? `0 12px 32px -6px ${stack.accentHex}44` 
                              : '0 8px 24px rgba(0,0,0,0.85)'
                          }}
                        >
                          {/* Top Card Image */}
                          {card.type === 'image' && card.image && (
                            <div className="relative w-full h-full bg-black">
                              <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/90 via-transparent to-transparent opacity-80" />
                              <div className="absolute bottom-1.5 left-2 right-1.5 text-left">
                                <span className="text-[9px] sm:text-[11px] font-bold text-white block leading-tight truncate font-display">
                                  {card.title}
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Terminal Card */}
                          {card.type === 'terminal' && (
                            <div className="w-full h-full p-2 sm:p-2.5 flex flex-col justify-between font-mono text-[7.5px] sm:text-[8.5px] bg-[#050B14] text-[#06B6D4] text-left">
                              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-0.5">
                                <span className="font-bold text-white/90 truncate">{card.title}</span>
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                              </div>
                              <div className="text-white/60 space-y-0.5">
                                <div>&gt; ACTIVE NODE</div>
                                <div className="text-emerald-400">&gt; UPTIME 99.98%</div>
                              </div>
                              <div className="text-[7px] text-[#9CA3AF] border-t border-cyan-500/10 pt-0.5 truncate">
                                Infrastructure
                              </div>
                            </div>
                          )}

                          {/* Graphic Card */}
                          {card.type === 'graphic' && (
                            <div className="w-full h-full p-2 sm:p-2.5 flex flex-col justify-between font-sans bg-[#12050B] text-[#EC4899] text-left border-l-2 border-[#EC4899]">
                              <span className="font-mono text-[6.5px] sm:text-[7px] uppercase tracking-widest text-[#EC4899]/70">IDENTITY</span>
                              <div className="text-[11px] sm:text-xs font-black text-white font-display leading-tight">
                                SOCCER<br />QUEENS
                              </div>
                              <span className="font-mono text-[6.5px] text-[#9CA3AF]">Media 2024</span>
                            </div>
                          )}

                          {/* Spec / Texture Card */}
                          {card.type === 'spec' && (
                            <div className="w-full h-full p-2 sm:p-2.5 flex flex-col justify-between font-mono text-[7.5px] sm:text-[8px] bg-[#0E131F] text-[#9CA3AF] text-left border-t-2 border-white/20">
                              <span className="text-[6.5px] uppercase tracking-widest text-white/40">SPEC</span>
                              <div className="text-[9px] sm:text-[10px] font-bold text-white font-display truncate">{card.title}</div>
                              <span className="text-[7px] text-[#9CA3AF] truncate">Proportion &amp; Cut</span>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

        </div>
      )}

      {/* ========================================================
          PHASE 03: QUIET, EDITORIAL PERSONAL INTRODUCTION
          (Generous whitespace, understated copy, 4 subtle coloured pills,
           pauses while user interacts, auto-recycles cleanly back to orbit)
          ======================================================== */}
      {heroState === 'intro' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isRecyclingIntro
              ? { opacity: 0, y: -15, scale: 0.98 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsIntroHovered(true)}
          onMouseLeave={() => setIsIntroHovered(false)}
          className="mx-auto w-full max-w-6xl z-30 px-6 py-6 md:px-12 md:py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Quiet, Human Thought + Four Subtle Coloured Pills */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-10 lg:pr-6">
              
              {/* Short, Poignant Statement */}
              <div>
                <h2 
                  className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F7FA] font-display tracking-tight leading-[1.15]"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  I like making<br />
                  <span className="font-semibold text-white">things come to life.</span>
                </h2>
              </div>

              {/* The Four Perspective Statements as Subtle Coloured Pills */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {PERSPECTIVE_PILLS.map((pill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -2, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-[13px] font-mono font-medium tracking-wide transition-all cursor-default select-none shadow-sm ${pill.colorClass}`}
                    >
                      <span 
                        className="h-1.5 w-1.5 rounded-full shrink-0" 
                        style={{ backgroundColor: pill.dotColor }}
                      />
                      <span>{pill.phrase}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Downward Transition to Disciplines */}
              <div className="pt-4">
                <button
                  onClick={() => onScrollToSection('disciplines')}
                  className="group inline-flex items-center gap-2.5 text-xs font-mono tracking-wider text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                >
                  <span className="uppercase">One Instinct. Six Expressions.</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-transform duration-300 group-hover:translate-y-0.5 group-hover:border-white/30">
                    <ArrowDown className="h-3 w-3 text-[#9CA3AF] group-hover:text-white" />
                  </div>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: Approved Editorial Portrait with Restrained Framing */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-[340px] sm:max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#101827] shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
                
                {/* Clean tech framing markers */}
                <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#4F7DFF]/70 z-10" />
                <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#4F7DFF]/70 z-10" />
                <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[#4F7DFF]/70 z-10" />
                <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[#4F7DFF]/70 z-10" />

                <img 
                  src={ZAMAR_PHOTO_URL} 
                  alt="Zamar Bako" 
                  className="w-full h-full object-cover object-center grayscale contrast-105 transition-all duration-700 group-hover:scale-102 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />

                {/* Quiet caption watermark */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#05070A] via-[#05070A]/80 to-transparent flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-widest text-white/70 uppercase">
                    ZAMAR BAKO
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-[#4F7DFF] uppercase">
                    FIGURE 01
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      )}

    </section>
  );
}

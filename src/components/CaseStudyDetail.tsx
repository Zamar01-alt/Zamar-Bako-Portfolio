/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Mail, Check, X, Sparkles, Target, Clock, 
  Smartphone, Hash, Flame, ShoppingBag, LayoutDashboard, 
  Sliders, QrCode, Calculator, FileSpreadsheet, ShieldAlert, Users,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { Project } from '../types';

interface CaseStudyDetailProps {
  project: Project;
  onBack: () => void;
  onNavigateToProject: (projectId: string) => void;
}

const GALLERY_INFO: Record<string, Array<{ title: string; desc: string }>> = {
  pulse: [
    { title: "Incident History Ledger", desc: "Uptime monitoring and downtime reporting with real-time operational clarity." },
    { title: "SLA Alert Thresholds", desc: "Tracking of service level agreements and threshold alert parameters." },
    { title: "NOC Analytics & Reports", desc: "Uptime visibility, historical incident awareness, and dashboard visualizations." }
  ],
  chopbetta: [
    { title: "Vibrant Culinary Menu", desc: "Food discovery, browsing, and category filters for customer orders." },
    { title: "Sleek Sliding Cart", desc: "Integrated shopping drawer that simplifies the checkout flow for pick-up or delivery." },
    { title: "Sensory Gourmet Explorer", desc: "Detail page highlighting food customization and seamless WhatsApp ordering fulfillment." }
  ],
  waaka: [
    { title: "Curated Vibe Discovery", desc: "Explore and discover curated city experiences built on the Calm Abundance philosophy." },
    { title: "Seamless Booking Desk", desc: "High-fidelity booking flows and discovery exploration journeys." },
    { title: "Personalized Saved Wallet", desc: "Saved city experiences and interactive urban travel guides with reduced cognitive load." }
  ],
  wematch: [
    { title: "Fluid Discovery Feed", desc: "Intent-based matching and personality-first home feed discovery." },
    { title: "Intimate Chat Flow", desc: "Secure in-app chatting with 24-hour connection rules." },
    { title: "Interactive Match Success", desc: "Meaningful interactive success screen celebrating shared vibes and communities." }
  ]
};

export default function CaseStudyDetail({ project, onBack, onNavigateToProject }: CaseStudyDetailProps) {
  const cs = project.caseStudy;
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveImageIdx(0);
    setIsFeaturesModalOpen(false);
  }, [project]);

  // Handle ESC key to close modal & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFeaturesModalOpen(false);
      }
    };

    if (isFeaturesModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFeaturesModalOpen]);

  // Icon mapping helper
  const renderIcon = (iconName: string, accentHex: string) => {
    const props = { className: 'h-6 w-6', style: { color: accentHex } };
    switch (iconName) {
      case 'Calculator': return <Calculator {...props} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'LayoutDashboard': return <LayoutDashboard {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Sliders': return <Sliders {...props} />;
      case 'QrCode': return <QrCode {...props} />;
      case 'Target': return <Target {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'Hash': return <Hash {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <article className="min-h-screen bg-[#05070A] text-[#F5F7FA]">
      
      {/* Tiny breadcrumb banner */}
      <div className="w-full bg-[#09111F]/30 border-b border-white/[0.04] py-3 px-6 md:px-12 text-xs font-mono text-[#9CA3AF]">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Portfolio
          </button>
          <span className="text-white/30">Case Study: {project.title}</span>
        </div>
      </div>

      {/* Case Study Hero */}
      <section className="px-6 py-16 md:px-12 md:py-24 text-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F7DFF]/5 blur-[120px]" />
        
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 border border-white/10 mb-8 text-[10px] font-mono font-bold tracking-widest text-[#9CA3AF] uppercase">
            CASE STUDY
          </div>

          {/* Title */}
          <h1 
            className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#F5F7FA] mb-6 font-display"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {cs.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto mb-16 font-normal">
            {cs.heroSubtitle}
          </p>

          {/* Big Hero Mockup Panel with deep responsive shadow and glow */}
          <div 
            className="relative rounded-2xl border border-white/10 p-2 overflow-hidden bg-[#101827] shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            style={{ boxShadow: `0 25px 60px -15px ${project.accentHex}1a` }}
          >
            <div className="rounded-lg overflow-hidden border border-white/5 bg-black">
              <img 
                src={cs.heroImage} 
                alt={`${project.title} primary view`} 
                className="w-full h-auto object-cover max-h-[600px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section (Two Columns) */}
      <section className="px-6 py-20 md:px-12 md:py-28 bg-[#09111F]/30 border-t border-b border-white/[0.04]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Problem/Challenge */}
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-red-400 mb-4 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              {cs.challengeLabel}
            </div>

            <h2 
              className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-[#F5F7FA] mb-6 font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              {cs.challengeTitle || 'The Challenge.'}
            </h2>

            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed mb-8 font-normal">
              {cs.challengeText}
            </p>

            {cs.challengePoints && (
              <ul className="space-y-4">
                {cs.challengePoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 mt-0.5">
                      <X className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-[#9CA3AF] font-normal leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column: Solution */}
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 mb-4 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {cs.solutionLabel}
            </div>

            <h2 
              className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-[#F5F7FA] mb-6 font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              {cs.solutionTitle}
            </h2>

            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed mb-8 font-normal">
              {cs.solutionText}
            </p>

            {cs.challengePoints2 && (
              <ul className="space-y-4 mb-8">
                {cs.challengePoints2.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-[#9CA3AF] font-normal leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Metrics Row */}
            {cs.solutionMetrics && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                {cs.solutionMetrics.map((met, idx) => (
                  <div key={idx} className="rounded-xl border border-white/5 bg-[#101827] p-6">
                    <div 
                      className="text-3xl md:text-4xl font-sans font-bold mb-1 tracking-tight"
                      style={{ color: project.accentHex }}
                    >
                      {met.value}
                    </div>
                    <div className="text-[10px] font-mono tracking-wider text-[#9CA3AF] uppercase">
                      {met.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Core Features Grid */}
      <section className="px-6 py-20 md:px-12 md:py-28 bg-[#05070A]">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 
              className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-[#F5F7FA] mb-4 font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              {cs.featuresTitle}
            </h2>
            <p className="text-sm text-[#9CA3AF] font-normal">
              {cs.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cs.features.map((feat, idx) => (
              <div 
                key={feat.id}
                className="group rounded-xl border border-white/[0.06] bg-[#101827] p-8 transition-all duration-300 hover:border-white/10"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/5 bg-[#05070A]">
                  {renderIcon(feat.icon, project.accentHex)}
                </div>
                
                <h3 className="text-xl font-sans font-bold text-[#F5F7FA] mb-3">
                  {feat.title}
                </h3>
                
                <p className="text-xs text-[#9CA3AF] leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technical Foundation Grid */}
      {cs.techFoundation && (
        <section className="px-6 py-20 md:px-12 md:py-28 bg-[#09111F]/30 border-t border-b border-white/[0.04]">
          <div className="mx-auto max-w-7xl">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
              <div>
                <h2 
                  className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-[#F5F7FA] mb-3 font-display"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Technical Foundation.
                </h2>
                <p className="text-sm text-[#9CA3AF] font-normal max-w-xl">
                  A robust, scalable architecture built for real-time performance and data privacy.
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-mono tracking-widest text-[#9CA3AF]">
                iOS & Android
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cs.techFoundation.map((tech) => (
                <div 
                  key={tech.id}
                  className="rounded-xl border border-white/[0.06] bg-[#101827] p-8"
                >
                  <span className="text-[10px] font-mono font-bold tracking-widest text-white/40 block mb-4">
                    {tech.category}
                  </span>
                  <h3 className="text-lg font-sans font-bold text-[#F5F7FA] mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed font-normal">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Visual Journey Walkthrough Showcase */}
      <section className="px-6 py-20 md:px-12 md:py-28 bg-[#05070A] border-t border-white/[0.03]">
        <div className="mx-auto max-w-7xl">
          
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#4F7DFF] uppercase block mb-3">
              WALKTHROUGH
            </span>
            <h2 
              className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-[#F5F7FA] mb-4 font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Visual Journey.
            </h2>
            <p className="text-sm text-[#9CA3AF] font-normal leading-relaxed">
              {cs.visualJourneyText || 'Explore high-fidelity mockups of key screens and responsive interface states.'}
            </p>
          </div>

          {/* Premium Walkthrough Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Interactive Info Controls Panel (4 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2 border-l border-white/5 pl-6 md:pl-8">
              <div className="space-y-8">
                {/* Steps indicator */}
                <div className="flex gap-2">
                  {cs.visualJourneyImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeImageIdx 
                          ? 'w-10' 
                          : 'w-2 bg-white/10 hover:bg-white/20'
                      }`}
                      style={{ 
                        backgroundColor: idx === activeImageIdx ? project.accentHex : undefined 
                      }}
                      title={`Go to step ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Walkthrough content */}
                <div>
                  <span 
                    className="text-xs font-mono font-bold tracking-widest uppercase block mb-2"
                    style={{ color: project.accentHex }}
                  >
                    STEP 0{activeImageIdx + 1} OF 0{cs.visualJourneyImages.length}
                  </span>
                  <h3 className="text-2xl font-sans font-bold text-white mb-4 tracking-tight">
                    {GALLERY_INFO[project.id]?.[activeImageIdx]?.title || "Product Workspace"}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed font-normal mb-8">
                    {GALLERY_INFO[project.id]?.[activeImageIdx]?.desc || "High-fidelity presentation showcasing custom-engineered workflows and responsive layout fidelity."}
                  </p>
                </div>
              </div>

              {/* Steps List Thumbnail Controls */}
              <div className="space-y-4 mt-auto pt-6">
                <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase block">
                  Select Screen State
                </span>
                <div className="flex flex-col gap-2.5">
                  {cs.visualJourneyImages.map((img, idx) => {
                    const info = GALLERY_INFO[project.id]?.[idx];
                    const isSelected = idx === activeImageIdx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                          isSelected 
                            ? 'bg-[#101827] border-white/10' 
                            : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span 
                            className={`text-xs font-mono font-bold ${
                              isSelected ? 'text-white' : 'text-[#9CA3AF]'
                            }`}
                          >
                            0{idx + 1}
                          </span>
                          <span 
                            className={`text-xs font-sans font-medium transition-colors ${
                              isSelected ? 'text-white' : 'text-[#9CA3AF] group-hover:text-white'
                            }`}
                          >
                            {info?.title || `Screen View ${idx + 1}`}
                          </span>
                        </div>
                        <ChevronRight 
                          className={`h-4 w-4 transition-all duration-300 ${
                            isSelected 
                              ? 'opacity-100 translate-x-0' 
                              : 'opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'
                          }`}
                          style={{ color: isSelected ? project.accentHex : undefined }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mockup Frame Canvas (7 Columns) */}
            <div className="lg:col-span-7 flex items-center justify-center bg-[#09111F]/30 rounded-3xl border border-white/[0.04] p-6 min-h-[400px] md:min-h-[500px]">
              <div 
                className={`relative w-full overflow-hidden transition-all duration-500 transform ${
                  project.type === 'mobile' 
                    ? 'aspect-[9/16] max-w-[320px] rounded-[36px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-4 border-[#1E293B]' 
                    : 'aspect-[16/10] rounded-2xl shadow-2xl border border-white/5'
                }`}
              >
                {/* Background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent pointer-events-none" />
                
                <img 
                  src={cs.visualJourneyImages[activeImageIdx]} 
                  alt={GALLERY_INFO[project.id]?.[activeImageIdx]?.title || "Walkthrough image"}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Outcome Banner */}
      <section className="px-6 py-24 md:px-12 md:py-32 bg-[#09111F]/30 border-t border-b border-white/[0.04] text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#4F7DFF]/2 to-transparent" />
        
        <div className="mx-auto max-w-3xl">
          <h2 
            className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#F5F7FA] mb-6 font-display"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {cs.outcomeTitle}
          </h2>

          <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-12 font-normal">
            {cs.outcomeText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:zamarbako99@gmail.com"
              className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#4F7DFF] text-xs font-mono font-bold tracking-wider text-white inline-flex items-center justify-center transition-all duration-300 hover:bg-[#3B66E0] hover:shadow-[0_0_15px_rgba(79,125,255,0.3)]"
            >
              <Mail className="h-4 w-4 mr-2" />
              {cs.outcomeActionLabel}
            </a>

            <button 
              onClick={() => setIsFeaturesModalOpen(true)}
              className="w-full sm:w-auto h-12 px-8 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono font-bold tracking-wider text-[#F5F7FA] inline-flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              Designed Features
            </button>

            <button 
              onClick={onBack}
              className="w-full sm:w-auto h-12 px-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono font-bold tracking-wider text-[#F5F7FA]"
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
                className="text-xl font-sans font-bold text-white hover:text-[#4F7DFF] transition-colors duration-200 inline-flex items-center gap-1 group font-display"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {cs.nextProject.title}
                <ArrowLeft className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Footer block */}
      <footer className="px-6 py-12 md:px-12 bg-[#05070A]">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono tracking-widest text-[#9CA3AF]/40">
          <span>BAKO.GZ</span>
          <span>© 2024 Bako George Zamar. Built with precision.</span>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">GitHub</a>
            <a href="https://read.cv" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">Read.cv</a>
          </div>
        </div>
      </footer>

      {/* Premium Designed Features Modal */}
      <AnimatePresence>
        {isFeaturesModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => setIsFeaturesModalOpen(false)}
              className="absolute inset-0 bg-[#05070A]/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} // smooth easeOutExpo
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#09111F] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.9)] z-10"
              style={{ boxShadow: `0 20px 50px -10px ${project.accentHex}2b` }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFeaturesModalOpen(false)}
                className="absolute top-4 right-4 text-[#9CA3AF] hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title & Slogan/Category */}
              <div className="mb-6 pr-6">
                <span 
                  className="text-[10px] font-mono font-bold tracking-widest uppercase block mb-2 font-mono"
                  style={{ color: project.accentHex }}
                >
                  {project.category}
                </span>
                <h3 
                  className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight font-display"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Designed Features
                </h3>
                <p className="text-xs text-[#9CA3AF] mt-1.5 font-normal">
                  High-fidelity interactions and screens crafted specifically for {project.title}.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {cs.designedFeatures?.map((feat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.1, duration: 0.25 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01]"
                  >
                    <div 
                      className="h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: project.accentHex }}
                    />
                    <span className="text-sm text-[#F5F7FA] font-medium leading-none">
                      {feat}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Close Bottom Action */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setIsFeaturesModalOpen(false)}
                  className="h-10 px-6 rounded-lg text-xs font-mono font-bold tracking-wider bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </article>
  );
}

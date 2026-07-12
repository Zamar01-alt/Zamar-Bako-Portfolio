/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface SelectedWorksProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
}

export default function SelectedWorks({ projects, onSelectProject }: SelectedWorksProps) {
  // Let's create helper dictionaries to look up projects safely
  const pulseProj = projects.find(p => p.id === 'pulse');
  const chopProj = projects.find(p => p.id === 'chopbetta');
  const waakaProj = projects.find(p => p.id === 'waaka');
  const wematchProj = projects.find(p => p.id === 'wematch');

  return (
    <section 
      id="works" 
      className="px-6 py-20 md:px-12 md:py-28 lg:py-32 bg-[#05070A]"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#4F7DFF] uppercase mb-4 block">
              SELECTED WORKS
            </span>
            <h2 
              className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#F5F7FA] font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Digital products and experiments.
            </h2>
          </div>
          
          <button 
            onClick={() => {
              // Smooth scroll to contact as a callback placeholder, or can prompt action
              const target = document.getElementById('contact');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#9CA3AF] transition-colors duration-200 hover:text-[#4F7DFF] cursor-pointer group"
          >
            Explore All Archive 
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bento Grid layout matching the screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Row 1 - Left Column: Pulse by Zamar (SaaS, col-span-7) */}
          {pulseProj && (
            <div 
              onClick={() => onSelectProject(pulseProj.id)}
              className="md:col-span-7 group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#101827] flex flex-col justify-between transition-all duration-300 hover:border-[#F59E0B]/30 hover:shadow-[0_15px_40px_rgba(245,158,11,0.05)]"
              id="work-card-pulse"
            >
              {/* Media Section */}
              <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden bg-black/40">
                <img 
                  src={pulseProj.image} 
                  alt={pulseProj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                {/* Glowing subtle gradient filter overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-transparent to-transparent opacity-90" />
              </div>

              {/* Text Meta Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono tracking-wider text-[#9CA3AF]">
                    {pulseProj.category}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-white/40">
                    {pulseProj.year}
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-bold text-[#F5F7FA] mb-3 group-hover:text-[#F59E0B] transition-colors duration-200">
                  {pulseProj.title}
                </h3>

                <p className="text-sm text-[#9CA3AF] mb-6 leading-relaxed font-normal max-w-xl">
                  {pulseProj.description}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#F5F7FA]">
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 text-[#F59E0B]" />
                </div>
              </div>
            </div>
          )}

          {/* Row 1 - Right Column: Chop Betta (Restaurant, col-span-5) */}
          {chopProj && (
            <div 
              onClick={() => onSelectProject(chopProj.id)}
              className="md:col-span-5 group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#101827] flex flex-col justify-between transition-all duration-300 hover:border-[#EA580C]/30 hover:shadow-[0_15px_40px_rgba(234,88,12,0.05)]"
              id="work-card-chopbetta"
            >
              {/* Media Section */}
              <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden bg-black/40">
                <img 
                  src={chopProj.image} 
                  alt={chopProj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-transparent to-transparent opacity-90" />
              </div>

              {/* Text Meta Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono tracking-wider text-[#9CA3AF]">
                    {chopProj.category}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-white/40">
                    {chopProj.year}
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-bold text-[#F5F7FA] mb-3 group-hover:text-[#EA580C] transition-colors duration-200">
                  {chopProj.title}
                </h3>

                <p className="text-sm text-[#9CA3AF] mb-6 leading-relaxed font-normal">
                  {chopProj.description}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#F5F7FA]">
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 text-[#EA580C]" />
                </div>
              </div>
            </div>
          )}

          {/* Row 2 - Left Column: Waaka (Lifestyle, col-span-5) */}
          {waakaProj && (
            <div 
              onClick={() => onSelectProject(waakaProj.id)}
              className="md:col-span-5 group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#101827] flex flex-col justify-between transition-all duration-300 hover:border-[#E11D48]/30 hover:shadow-[0_15px_40px_rgba(225,29,72,0.05)]"
              id="work-card-waaka"
            >
              {/* Media Section */}
              <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden bg-black/40">
                <img 
                  src={waakaProj.image} 
                  alt={waakaProj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-transparent to-transparent opacity-90" />
              </div>

              {/* Text Meta Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono tracking-wider text-[#9CA3AF]">
                    {waakaProj.category}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-white/40">
                    {waakaProj.year}
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-bold text-[#F5F7FA] mb-3 group-hover:text-[#E11D48] transition-colors duration-200">
                  {waakaProj.title}
                </h3>

                <p className="text-sm text-[#9CA3AF] mb-6 leading-relaxed font-normal">
                  {waakaProj.description}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#F5F7FA]">
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 text-[#E11D48]" />
                </div>
              </div>
            </div>
          )}

          {/* Row 2 - Right Column: WeMatch (Social, col-span-7) */}
          {wematchProj && (
            <div 
              onClick={() => onSelectProject(wematchProj.id)}
              className="md:col-span-7 group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#101827] flex flex-col justify-between transition-all duration-300 hover:border-[#0D9488]/30 hover:shadow-[0_15px_40px_rgba(13,148,136,0.05)]"
              id="work-card-wematch"
            >
              {/* Media Section */}
              <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden bg-black/40">
                <img 
                  src={wematchProj.image} 
                  alt={wematchProj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-transparent to-transparent opacity-90" />
              </div>

              {/* Text Meta Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono tracking-wider text-[#9CA3AF]">
                    {wematchProj.category}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-white/40">
                    {wematchProj.year}
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-bold text-[#F5F7FA] mb-3 group-hover:text-[#0D9488] transition-colors duration-200">
                  {wematchProj.title}
                </h3>

                <p className="text-sm text-[#9CA3AF] mb-6 leading-relaxed font-normal max-w-xl">
                  {wematchProj.description}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#F5F7FA]">
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 text-[#0D9488]" />
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

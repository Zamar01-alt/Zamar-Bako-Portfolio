/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Experience } from '../types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section 
      id="experience" 
      className="px-6 py-20 md:px-12 md:py-28 lg:py-32 bg-[#09111F]/50 border-t border-[rgba(255,255,255,0.04)]"
    >
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#4F7DFF] uppercase mb-4 block">
            CAREER PATH
          </span>
          <h2 
            className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#F5F7FA] font-display"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 pl-8 md:pl-12 ml-4 md:ml-6 space-y-12">
          
          {experiences.map((exp, idx) => {
            const isLatest = idx === 0;
            return (
              <div 
                key={exp.id} 
                className="relative group"
                id={`experience-item-${exp.id}`}
              >
                {/* Glowing Bullet Circle Indicator */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#05070A]">
                  {isLatest ? (
                    /* Active/Latest indicator with custom blue pulse ring */
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F7DFF] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4F7DFF]"></span>
                    </div>
                  ) : (
                    /* Inactive/Historical hollow node */
                    <div className="h-3 w-3 rounded-full border border-white/25 bg-transparent" />
                  )}
                </div>

                {/* Content Block */}
                <div>
                  {/* Year Range (Faded Mono Badge) */}
                  <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#9CA3AF]/60 mb-2">
                    {exp.yearRange}
                  </span>

                  {/* Role Title */}
                  <h3 className="text-xl font-sans font-bold text-[#F5F7FA] group-hover:text-[#4F7DFF] transition-colors duration-200">
                    {exp.role}
                  </h3>

                  {/* Company Name */}
                  <span className="text-xs font-mono tracking-wider text-[#9CA3AF] uppercase block mt-1 mb-4">
                    {exp.company}
                  </span>

                  {/* Responsibilities */}
                  <ul className="space-y-2 max-w-2xl">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-sm text-[#9CA3AF] leading-relaxed font-normal">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

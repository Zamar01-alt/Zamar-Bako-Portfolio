/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section 
      id="skills" 
      className="px-6 py-20 md:px-12 md:py-24 bg-[#05070A] border-t border-white/[0.04]"
    >
      <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
        
        {/* Section Header */}
        <span className="text-xs font-mono font-bold tracking-widest text-[#4F7DFF] uppercase mb-12 block">
          TOOLSTACK & EXPERTISE
        </span>

        {/* Badges Grid / Flex Wrapper */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative rounded-lg border border-white/[0.06] bg-[#101827] px-6 py-3.5 transition-all duration-300 hover:border-[#4F7DFF]/30 hover:bg-[#101827]/80 hover:shadow-[0_4px_20px_rgba(79,125,255,0.06)]"
              id={`skill-badge-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-tr-lg border-t border-r border-[#4F7DFF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <span className="text-xs font-mono font-bold tracking-widest text-[#9CA3AF] transition-colors duration-200 group-hover:text-[#F5F7FA]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

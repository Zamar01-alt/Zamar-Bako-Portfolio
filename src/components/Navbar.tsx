/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ currentView, onNavigate, onScrollToSection }: NavbarProps) {
  const navItems = [
    { label: 'Home', view: 'home', sectionId: 'hero' },
    { label: 'About', view: 'home', sectionId: 'philosophy' },
    { label: 'Projects', view: 'home', sectionId: 'works' },
    { label: 'Skills', view: 'home', sectionId: 'skills' },
    { label: 'Contact', view: 'home', sectionId: 'contact' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (currentView !== 'home') {
      onNavigate('home');
      // Delay scrolling slightly to allow state change and mount
      setTimeout(() => {
        onScrollToSection(item.sectionId);
      }, 100);
    } else {
      onScrollToSection(item.sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.06)] bg-[#05070A]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6 md:px-12">
        {/* Monogram Logo resembling the premium Figma screen */}
        <div 
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex cursor-pointer items-center gap-3"
          id="nav-logo"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-inner transition-all duration-300 group-hover:border-blue-500/30">
            <span className="font-mono text-sm font-bold tracking-widest text-[#F5F7FA]">ZB</span>
            {/* Subtle glow effect behind the logo */}
            <div className="absolute inset-0 -z-10 rounded-lg bg-blue-500/5 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-xs font-mono font-medium tracking-wider text-[#F5F7FA]">ZAMAR BAKO</span>
            <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF]">DESIGN • CODE</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="relative py-2 text-xs font-mono font-medium tracking-wider text-[#9CA3AF] transition-colors duration-200 hover:text-[#F5F7FA]"
              id={`nav-link-${item.label.toLowerCase()}`}
            >
              {item.label}
              {/* Animated active indicator dot or line can go here if needed */}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:zamarbako99@gmail.com"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-[#4F7DFF] px-4 text-xs font-mono font-bold tracking-wider text-white transition-all duration-300 hover:bg-[#3B66E0] hover:shadow-[0_0_15px_rgba(79,125,255,0.35)]"
            id="nav-cta-hire"
          >
            Hire Me
          </a>
          
          {/* Mobile menu trigger, handles fallback scrolling */}
          <div className="flex md:hidden gap-3">
            <button 
              onClick={() => handleNavClick({ label: 'Projects', view: 'home', sectionId: 'works' })}
              className="rounded-md border border-white/5 bg-white/5 px-3 py-1.5 text-[10px] font-mono tracking-wider text-[#F5F7FA]"
            >
              Works
            </button>
            <button 
              onClick={() => handleNavClick({ label: 'Contact', view: 'home', sectionId: 'contact' })}
              className="rounded-md bg-[#4F7DFF] px-3 py-1.5 text-[10px] font-mono tracking-wider text-white"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

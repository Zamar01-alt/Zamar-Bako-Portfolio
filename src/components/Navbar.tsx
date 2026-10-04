/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ currentView, onNavigate, onScrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Zamar', sectionId: 'hero' },
    { label: 'Disciplines', sectionId: 'disciplines' },
    { label: 'Works', sectionId: 'works' },
    { label: 'Editorial', sectionId: 'editorial' },
    { label: 'Ventures', sectionId: 'ventures' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 120);
    } else {
      onScrollToSection(sectionId);
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#05070A]/85 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6 md:px-12">
          
          {/* Brand Monogram */}
          <div 
            onClick={handleLogoClick}
            className="group flex cursor-pointer items-center gap-3 select-none"
            id="nav-logo"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-inner transition-all duration-300 group-hover:border-[#4F7DFF]/50 group-hover:shadow-[0_0_20px_rgba(79,125,255,0.25)]">
              <span className="font-mono text-xs font-bold tracking-widest text-[#F5F7FA]">Z</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-wider text-[#F5F7FA] group-hover:text-white transition-colors">
                ZAMAR
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#9CA3AF]/60 uppercase">
                PERSONAL ECOSYSTEM
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.sectionId)}
                className="text-xs font-mono font-medium tracking-wider text-[#9CA3AF] transition-colors duration-200 hover:text-[#F5F7FA] cursor-pointer"
                id={`nav-link-${item.sectionId}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action / Contact Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex h-8 items-center justify-center rounded-md border border-white/10 bg-white/5 px-3.5 text-[11px] font-mono font-semibold tracking-wider text-white transition-all duration-300 hover:bg-[#4F7DFF] hover:border-[#4F7DFF] hover:shadow-[0_0_15px_rgba(79,125,255,0.35)] cursor-pointer"
              id="nav-cta-contact"
            >
              Get in Touch
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-[#9CA3AF] hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden border-b border-white/10 bg-[#05070A]/95 backdrop-blur-xl px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.sectionId)}
                  className="flex items-center justify-between py-2 text-sm font-mono tracking-wider text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors border-b border-white/[0.04]"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-40" />
                </button>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full h-10 rounded-lg bg-[#4F7DFF] text-xs font-mono font-bold tracking-wider text-white flex items-center justify-center shadow-lg"
                >
                  Connect with Zamar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

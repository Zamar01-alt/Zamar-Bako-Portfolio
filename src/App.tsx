/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Disciplines from './components/Disciplines';
import SelectedWorks from './components/SelectedWorks';
import Editorial from './components/Editorial';
import Ventures from './components/Ventures';
import Contact from './components/Contact';
import CaseStudyDetail from './components/CaseStudyDetail';

import { PROJECTS } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home'); // 'home' or project ID

  // Parse hash routing on mount, hashchange, and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const projectId = hash.replace('#/project/', '');
        const exists = PROJECTS.some(p => p.id === projectId);
        if (exists) {
          setCurrentView(projectId);
          window.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }
      }
      setCurrentView('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    // Initial parse
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Update URL hash and state synchronously when selecting a project
  const handleSelectProject = (projectId: string) => {
    setCurrentView(projectId);
    window.scrollTo({ top: 0, behavior: 'instant' });
    try {
      const targetHash = `#/project/${projectId}`;
      if (window.location.hash !== targetHash) {
        window.history.pushState(null, '', targetHash);
      }
    } catch {
      window.location.hash = `#/project/${projectId}`;
    }
  };

  // Navigate back to home, clear hash, and reset state synchronously
  const handleBackToHome = () => {
    setCurrentView('home');
    try {
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname + window.location.search);
      }
    } catch {
      window.location.hash = '';
    }
    // Return smoothly to the Works overview
    setTimeout(() => {
      const worksSection = document.getElementById('works');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'instant' });
      }
    }, 20);
  };

  // Scroll smoothly to a specific section on the home page
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const selectedProject = PROJECTS.find(p => p.id === currentView);

  return (
    <div className="min-h-screen bg-[#05070A] text-[#F5F7FA] selection:bg-[#4F7DFF]/20 selection:text-white antialiased font-sans">
      
      {/* Background delicate grid pattern overlay */}
      <div className="fixed inset-0 pointer-events-none -z-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Persistent Premium Glass Navbar */}
      <Navbar 
        currentView={currentView}
        onNavigate={(view) => {
          if (view === 'home') {
            handleBackToHome();
          } else {
            handleSelectProject(view);
          }
        }}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Viewport */}
      <main className="relative">
        {selectedProject ? (
          <CaseStudyDetail 
            project={selectedProject}
            onBack={handleBackToHome}
            onNavigateToProject={handleSelectProject}
          />
        ) : (
          <div className="fade-in duration-500 animate-in">
            {/* 01. INTERACTIVE GRAVITATIONAL HERO (ZAMAR + Orbiting Work Fragments + Floating Thoughts) */}
            <Hero onScrollToSection={handleScrollToSection} />

            {/* 02. ONE INSTINCT. SIX EXPRESSIONS. */}
            <Disciplines />

            {/* 03. WHAT I'VE MADE */}
            <SelectedWorks 
              projects={PROJECTS}
              onSelectProject={handleSelectProject}
            />

            {/* 04. EDITORIAL */}
            <Editorial />

            {/* 05. WHAT I'M BUILDING */}
            <Ventures />

            {/* 06. CONTACT */}
            <Contact />
          </div>
        )}
      </main>

    </div>
  );
}

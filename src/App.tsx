/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import SelectedWorks from './components/SelectedWorks';
import ExperienceSection from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CaseStudyDetail from './components/CaseStudyDetail';

import { PROJECTS, EXPERIENCES, SKILLS } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home'); // 'home' or project ID

  // Parse hash routing on mount and hashchange
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
    // Initial parse
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update URL hash when selecting a project
  const handleSelectProject = (projectId: string) => {
    window.location.hash = `#/project/${projectId}`;
  };

  // Navigate back to home and clear hash
  const handleBackToHome = () => {
    window.location.hash = '';
    setCurrentView('home');
  };

  // Scroll smoothly to a specific section on the home page
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const selectedProject = PROJECTS.find(p => p.id === currentView);

  return (
    <div className="min-h-screen bg-[#05070A] text-[#F5F7FA] selection:bg-[#4F7DFF]/20 selection:text-white antialiased font-sans">
      
      {/* Background elegant grid pattern overlay common in Linear / Apple style websites */}
      <div className="fixed inset-0 pointer-events-none -z-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Persistent Premium Glass Navbar */}
      <Navbar 
        currentView={currentView}
        onNavigate={setCurrentView}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main viewport rendering with Framer Motion animations style transition */}
      <main className="relative">
        {selectedProject ? (
          <CaseStudyDetail 
            project={selectedProject}
            onBack={handleBackToHome}
            onNavigateToProject={handleSelectProject}
          />
        ) : (
          <div className="fade-in duration-500 animate-in">
            {/* Hero Section */}
            <Hero onScrollToSection={handleScrollToSection} />

            {/* Philosophy Section */}
            <Philosophy />

            {/* Selected Works Bento Grid */}
            <SelectedWorks 
              projects={PROJECTS}
              onSelectProject={handleSelectProject}
            />

            {/* Experience Section */}
            <ExperienceSection experiences={EXPERIENCES} />

            {/* Skills Toolstack Badges Section */}
            <Skills skills={SKILLS} />

            {/* Contact Callout Card */}
            <Contact />
          </div>
        )}
      </main>

    </div>
  );
}

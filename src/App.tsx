import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';
import { Header } from './components/Header.tsx';
import { ClientProfileSection } from './components/ClientProfileSection.tsx';
import { ComparativesSection } from './components/ComparativesSection.tsx';
import { TransitionLauncherSection } from './components/TransitionLauncherSection.tsx';
import { DialogueSection } from './components/DialogueSection.tsx';

const SECTION_IDS = [
  'client-section',
  'comparatifs-section',
  'takeoff-section',
  'dialogue-section',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('client-section');
  const isNavigatingRef = useRef(false);

  // Smoothly scroll to a section by ID
  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Determine current active section based on scroll position
  const getCurrentSectionIndex = useCallback(() => {
    const scrollPos = window.scrollY + 200;
    for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTION_IDS[i]);
      if (el && el.offsetTop <= scrollPos) {
        return i;
      }
    }
    return 0;
  }, []);

  // Keyboard navigation handler for presentation slides / sections
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input, textarea, or contentEditable
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      // Arrow Down, Arrow Right, PageDown, or Space -> Next Section
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        if (isNavigatingRef.current) return;
        isNavigatingRef.current = true;

        const currentIndex = getCurrentSectionIndex();
        const nextIndex = Math.min(currentIndex + 1, SECTION_IDS.length - 1);
        scrollToSection(SECTION_IDS[nextIndex]);

        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 400);
      }

      // Arrow Up, Arrow Left, PageUp -> Previous Section
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (isNavigatingRef.current) return;
        isNavigatingRef.current = true;

        const currentIndex = getCurrentSectionIndex();
        const prevIndex = Math.max(currentIndex - 1, 0);
        scrollToSection(SECTION_IDS[prevIndex]);

        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 400);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [getCurrentSectionIndex, scrollToSection]);

  const handleLaunchDialogueWith3D = () => {
    const dialogueElement = document.getElementById('dialogue-section');
    if (dialogueElement) {
      dialogueElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('dialogue-section');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#2c3e50] flex flex-col font-sans">
      {/* Scroll Progress Bar at the very top with section tracking */}
      <ScrollProgressBar />

      {/* 1. Header & Logo */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onLaunchTakeoff={() => scrollToSection('takeoff-section')}
      />

      {/* Main Content */}
      <main className="flex-1 pb-16">
        {/* Section 1: Le Client */}
        <ClientProfileSection />

        {/* Section 2: Détails et Comparatifs */}
        <ComparativesSection />

        {/* Section 3: Transition 3D CTA */}
        <TransitionLauncherSection
          onCompleteScrollToDialogue={handleLaunchDialogueWith3D}
        />

        {/* Section 4: Le Dialogue Oral */}
        <DialogueSection />
      </main>

      {/* Floating Presentation Keyboard Control Hint (Subtle bottom-right pill) */}
      <div className="fixed bottom-4 right-4 z-30 pointer-events-none hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 text-[10px] text-slate-400 shadow-2xs">
        <span className="font-mono text-slate-500 font-bold">↑ ↓</span>
        <span>Navigation flèches</span>
      </div>

      {/* Minimalist Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>HORIZON VOYAGES — Projet d'Examen</span>
          <span>Riccardo (Agent) & Manuel (Client)</span>
        </div>
      </footer>
    </div>
  );
}

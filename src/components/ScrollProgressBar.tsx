import React, { useEffect, useState } from 'react';

interface SectionInfo {
  id: string;
  label: string;
}

const SECTIONS: SectionInfo[] = [
  { id: 'client-section', label: '1. Le Client' },
  { id: 'comparatifs-section', label: '2. Comparatifs' },
  { id: 'takeoff-section', label: '3. Décollage 3D' },
  { id: 'dialogue-section', label: '4. Dialogue Oral' },
];

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionLabel, setActiveSectionLabel] = useState('1. Le Client');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = window.scrollY || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = height > 0 ? Math.min(Math.max((winScroll / height) * 100, 0), 100) : 0;
          setScrollProgress(scrolled);

          // Identify which section is currently on screen
          const scrollPos = winScroll + 180;
          for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const el = document.getElementById(SECTIONS[i].id);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSectionLabel(SECTIONS[i].label);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Ultra-thin Minimalist Brand Progress Bar */}
      <div className="w-full h-[3px] bg-slate-200/50">
        <div
          className="h-full bg-gradient-to-r from-[#2b5876] via-[#3a4e76] to-[#4e4376] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Discreet Section Pill Indicator (Appears smoothly on scroll) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex justify-end pt-1.5 pr-2">
        <div className="opacity-90 transition-opacity bg-white/95 backdrop-blur-xs border border-slate-200/80 shadow-2xs px-2.5 py-0.5 rounded-full text-[10px] font-medium text-slate-500 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2b5876]" />
          <span>Section : <strong className="text-[#2b5876] font-semibold">{activeSectionLabel}</strong></span>
          <span className="text-slate-300">|</span>
          <span className="font-mono text-[9px] text-slate-400">{Math.round(scrollProgress)}%</span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onLaunchTakeoff: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onLaunchTakeoff,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2b5876] to-[#4e4376] flex items-center justify-center shrink-0">
              <svg
                className="w-4 h-4 text-white transform -rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
              </svg>
            </div>
            
            <div>
              <span className="font-bold tracking-tight text-base text-[#2b5876] uppercase">
                Horizon Voyages
              </span>
              <p className="text-[11px] text-slate-400">
                Projet d'Examen — Agence de Voyages
              </p>
            </div>
          </div>

          {/* Speakers Indicators */}
          <div className="hidden sm:flex items-center text-xs gap-2">
            <span className="px-2.5 py-1 rounded bg-slate-100 text-[#2b5876] font-medium">
              Agent : <strong>Riccardo</strong>
            </span>
            <span className="text-slate-300">|</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-[#d35400] font-medium">
              Client : <strong>Manuel</strong>
            </span>
          </div>

          {/* Minimal Navigation */}
          <nav className="flex items-center gap-1 sm:gap-2 text-xs">
            <button
              onClick={() => onNavigate('client-section')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeSection === 'client-section' ? 'text-[#2b5876] font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Le Client
            </button>
            <button
              onClick={() => onNavigate('comparatifs-section')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeSection === 'comparatifs-section' ? 'text-[#2b5876] font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Comparatifs
            </button>
            <button
              onClick={() => onNavigate('dialogue-section')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeSection === 'dialogue-section' ? 'text-[#2b5876] font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Dialogue
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};

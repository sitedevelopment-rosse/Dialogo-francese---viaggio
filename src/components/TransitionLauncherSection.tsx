import React, { useState } from 'react';
import { ThreeDTakeoffCanvas } from './ThreeDTakeoffCanvas.tsx';
import { audioManager } from '../utils/audio.ts';

interface TransitionLauncherProps {
  onCompleteScrollToDialogue: () => void;
}

export const TransitionLauncherSection: React.FC<TransitionLauncherProps> = ({
  onCompleteScrollToDialogue,
}) => {
  const [isTransitionActive, setIsTransitionActive] = useState(false);

  const handleLaunchClick = () => {
    audioManager.playTakeoffSfx();
    setIsTransitionActive(true);
  };

  const handleAnimationFinished = () => {
    setIsTransitionActive(false);
    onCompleteScrollToDialogue();
  };

  return (
    <section id="takeoff-section" className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-12 text-center shadow-2xs">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 block mb-2">
          Section 3 — Transition
        </span>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Lancement de la Démonstration Orale
        </h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
          Passez à la mise en situation entre l'agent (Riccardo) et le client (Manuel).
        </p>

        {/* Big Action Button */}
        <button
          onClick={handleLaunchClick}
          disabled={isTransitionActive}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#2b5876] hover:bg-[#23465e] text-white font-semibold text-sm shadow-sm transition-all cursor-pointer active:scale-95"
        >
          <span>🚀 Parti avec l'exposition (Lancer le Dialogue)</span>
        </button>
      </div>

      {/* 3D TRANSITION OVERLAY */}
      {isTransitionActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-xs">
          <ThreeDTakeoffCanvas
            isTriggered={isTransitionActive}
            onAnimationComplete={handleAnimationFinished}
          />

          <div className="relative z-10 flex flex-col items-center text-center p-6 pointer-events-none select-none">
            {/* Glowing Logo */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2b5876] to-[#4e4376] flex items-center justify-center border border-white/40 shadow-lg mb-4">
              <svg
                className="w-8 h-8 text-white transform -rotate-45"
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

            <h2 className="text-2xl font-bold text-white tracking-wider uppercase">
              Horizon Voyages
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Transition vers le dialogue d'examen...
            </p>
          </div>

          <button
            onClick={handleAnimationFinished}
            className="absolute top-4 right-4 z-20 pointer-events-auto text-xs text-slate-300 hover:text-white bg-white/10 px-3 py-1.5 rounded border border-white/20"
          >
            Passer ➔
          </button>
        </div>
      )}
    </section>
  );
};

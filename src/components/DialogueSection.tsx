import React from 'react';
import { DIALOGUE_LINES, FUTUR_SIMPLE_VERBS } from '../data/travelData.ts';

export const DialogueSection: React.FC = () => {
  // Highlights the 8 futur simple verbs cleanly in green
  const renderHighlightedFrench = (text: string) => {
    const regex = new RegExp(`\\b(${FUTUR_SIMPLE_VERBS.join('|')})\\b`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isVerb = FUTUR_SIMPLE_VERBS.some(
        (v) => v.toLowerCase() === part.toLowerCase()
      );

      if (isVerb) {
        return (
          <span
            key={index}
            className="text-[#1e824c] font-bold bg-green-50 px-1 py-0.5 rounded border border-green-200"
            title="Verbe au Futur Simple"
          >
            {part}
          </span>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <section id="dialogue-section" className="py-10 max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-6 pb-3 border-b border-slate-200">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          Section 4
        </span>
        <h2 className="text-xl font-bold text-[#2c3e50] tracking-tight">
          Le Dialogue Oral
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Échange oral entre Riccardo (Agent) et Manuel (Client)
        </p>
      </div>

      {/* Roles Legend Bar */}
      <div className="flex items-center gap-4 mb-6 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2b5876]" />
          <span className="text-slate-600 font-medium">Riccardo (Agent de voyages)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d35400]" />
          <span className="text-slate-600 font-medium">Manuel (Client)</span>
        </div>
      </div>

      {/* Dialogue List */}
      <div className="bg-white rounded-lg border border-slate-200 divide-y divide-slate-100 shadow-2xs">
        {DIALOGUE_LINES.map((line) => {
          const isRiccardo = line.speaker === 'Riccardo';

          return (
            <div key={line.id} className="p-4 sm:p-5">
              {/* Speaker Indicator */}
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    isRiccardo
                      ? 'bg-blue-50 text-[#2b5876] border border-blue-200/60'
                      : 'bg-orange-50 text-[#d35400] border border-orange-200/60'
                  }`}
                >
                  {line.speaker}
                </span>
                <span className="text-[10px] text-slate-300">
                  #{line.id}
                </span>
              </div>

              {/* French Sentence (with green highlighted futur simple verbs) */}
              <p className="text-sm font-medium text-slate-800 leading-relaxed">
                {renderHighlightedFrench(line.frenchText)}
              </p>

              {/* Italian Translation: smaller, less visible grey font */}
              <p className="text-[11px] text-gray-400 font-normal italic mt-1 leading-snug">
                {line.italianTranslation}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

import React from 'react';
import { CLIENT_DATA } from '../data/travelData.ts';

export const ClientProfileSection: React.FC = () => {
  return (
    <section id="client-section" className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="mb-6 pb-3 border-b border-slate-200">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          Section 1
        </span>
        <h2 className="text-xl font-bold text-[#2c3e50] tracking-tight">
          Le Client — Fiche & Expression du Besoin
        </h2>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-2xs">
        {/* Profile Header Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-slate-100 text-[#d35400] font-bold flex items-center justify-center text-sm border border-slate-200">
              M
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-base">{CLIENT_DATA.name}</span>
                <span className="text-[11px] font-medium text-[#d35400] bg-orange-50 px-2 py-0.5 rounded border border-orange-200/60">
                  Client
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {CLIENT_DATA.profession} • {CLIENT_DATA.age} ans
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[11px] text-slate-400 block">Budget maximal</span>
            <span className="text-lg font-bold text-[#2c3e50]">{CLIENT_DATA.maxBudget} €</span>
          </div>
        </div>

        {/* Clean Attributes Table / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-5 border-b border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">Destination</span>
            <span className="font-semibold text-slate-800">{CLIENT_DATA.destination}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Durée</span>
            <span className="font-semibold text-slate-800">{CLIENT_DATA.duration}</span>
            <span className="text-[11px] text-slate-400 block">{CLIENT_DATA.dates}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Motif</span>
            <span className="font-semibold text-slate-800">{CLIENT_DATA.reason}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Rôle oral</span>
            <span className="font-semibold text-[#d35400]">Manuel</span>
          </div>
        </div>

        {/* Client Needs Checklist */}
        <div className="pt-5">
          <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
            Besoins & Critères exprimés :
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            {CLIENT_DATA.needs.map((need, idx) => (
              <li key={idx} className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2b5876]" />
                <span>{need}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

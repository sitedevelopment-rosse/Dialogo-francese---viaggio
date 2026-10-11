import React from 'react';
import { BUDGET_BREAKDOWN, BUDGET_SUMMARY } from '../data/travelData.ts';

export const ComparativesSection: React.FC = () => {
  return (
    <section id="comparatifs-section" className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="mb-6 pb-3 border-b border-slate-200">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          Section 2
        </span>
        <h2 className="text-xl font-bold text-[#2c3e50] tracking-tight">
          Détails et Comparatifs du Voyage
        </h2>
      </div>

      <div className="space-y-6">
        
        {/* Destination & Vol (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Destination */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Destination
            </span>
            <h3 className="font-bold text-slate-800 text-sm mb-3">
              Barcelone vs Madrid
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 border border-slate-100 text-slate-400">
                <span className="font-semibold text-slate-500 block">Option A — Barcelone :</span>
                Rejetée (affluence touristique accrue, tarifs hôteliers plus élevés).
              </div>
              <div className="p-2.5 rounded bg-white border border-[#2b5876]/40 text-slate-700">
                <span className="font-semibold text-[#2b5876] block">Option B — Madrid (Retenue) :</span>
                Capitale culturelle idéale pour un séjour de 4 jours, visite des grands musées (Prado, Palais Royal), budget maîtrisé.
              </div>
            </div>
          </div>

          {/* Vol */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Acheminement Aérien
            </span>
            <h3 className="font-bold text-slate-800 text-sm mb-3">
              Vol Direct vs Escale
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 border border-slate-100 text-slate-400">
                <span className="font-semibold text-slate-500 block">Vol avec escale à Rome (140 €) :</span>
                Écarté en raison de la durée excessive (6h30) et du risque de correspondance.
              </div>
              <div className="p-2.5 rounded bg-white border border-[#2b5876]/40 text-slate-700">
                <span className="font-semibold text-[#2b5876] block">Vol Direct Milan MXP ➔ Madrid (180 € A/R) :</span>
                Sélectionné : départ à 08h30, arrivée à 10h45 (2h15 de vol). Gain de temps optimal.
              </div>
            </div>
          </div>

        </div>

        {/* Hôtel & Chambre + Problème / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Hôtel & Chambre */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Hébergement
            </span>
            <h3 className="font-bold text-slate-800 text-sm mb-3">
              Hôtel Madrid Centre 3★
            </h3>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Tarif unitaire :</span>
                <span className="font-medium text-slate-800">90 € / nuit</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Durée :</span>
                <span className="font-medium text-slate-800">3 nuits = 270 €</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Emplacement :</span>
                <span className="font-medium text-slate-800">Centre historique (Puerta del Sol)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Prestation :</span>
                <span className="font-medium text-slate-800">Chambre + Petit-déjeuner buffet inclus</span>
              </div>
            </div>
          </div>

          {/* Problème et Solution */}
          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Gestion de l'Aléa
            </span>
            <h3 className="font-bold text-slate-800 text-sm mb-3">
              Problème et Solution Commerciale
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200/80">
                <strong className="text-slate-700 block mb-0.5">Problème rencontré :</strong>
                <p className="text-slate-500">
                  Chambre individuelle annulée suite à un surbooking chez le partenaire hôtelier.
                </p>
              </div>
              <div className="p-2.5 rounded bg-white border border-[#2b5876]/40">
                <strong className="text-[#2b5876] block mb-0.5">Solution de l'agence :</strong>
                <p className="text-slate-700">
                  Surclassement gratuit en <strong>chambre double supérieure</strong> sans frais supplémentaires + petit-déjeuner inclus offert.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Budget Final */}
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Synthèse Budgétaire
              </span>
              <h3 className="font-bold text-slate-900 text-base">
                Budget Final : 500 € (Économie de 300 €)
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400">Budget max alloué : </span>
              <span className="text-xs font-semibold text-slate-600">800 €</span>
            </div>
          </div>

          {/* 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
            <div className="p-3 rounded bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block">Vol Direct (MXP - MAD)</span>
              <span className="text-base font-bold text-slate-800">180 €</span>
            </div>
            <div className="p-3 rounded bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block">Hôtel 3★ (3 nuits x 90 €)</span>
              <span className="text-base font-bold text-slate-800">270 €</span>
            </div>
            <div className="p-3 rounded bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block">Pass Musées & Transport</span>
              <span className="text-base font-bold text-slate-800">50 €</span>
            </div>
          </div>

          <div className="p-3 rounded bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-600">
              Total du séjour : <strong>500 €</strong>
            </span>
            <span className="text-[#1e824c] font-semibold">
              ✓ Budget respecté — Économie nette : 300 €
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export interface ClientProfile {
  name: string;
  age: number;
  profession: string;
  destination: string;
  duration: string;
  dates: string;
  maxBudget: number;
  reason: string;
  needs: string[];
}

export const CLIENT_DATA: ClientProfile = {
  name: "Manuel",
  age: 23,
  profession: "Ingénieur",
  destination: "Madrid (Espagne)",
  duration: "4 jours / 3 nuits",
  dates: "Du jeudi au dimanche",
  maxBudget: 800,
  reason: "Vacances & Découverte culturelle (Tourisme)",
  needs: [
    "Vol direct depuis Milan Malpensa (MXP)",
    "Hôtel 3 étoiles situé au centre historique",
    "Chambre individuelle au calme",
    "Formule petit-déjeuner inclus",
  ],
};

export interface ComparisonItem {
  id: string;
  category: string;
  title: string;
  optionA: {
    name: string;
    description: string;
    price?: number;
    pros: string[];
    cons: string[];
    selected: boolean;
  };
  optionB: {
    name: string;
    description: string;
    price?: number;
    pros: string[];
    cons: string[];
    selected: boolean;
  };
  reason: string;
}

export const COMPARISONS: ComparisonItem[] = [
  {
    id: "destination",
    category: "DESTINATION",
    title: "Choix de la destination touristique",
    optionA: {
      name: "Barcelone (Catalogne)",
      description: "Plage, Sagrada Família, vie nocturne.",
      pros: ["Bord de mer", "Architecture moderniste de Gaudí"],
      cons: ["Très forte affluence touristique", "Tarifs hôteliers plus élevés sur ces dates"],
      selected: false,
    },
    optionB: {
      name: "Madrid (Capitale)",
      description: "Capitale royale, Triangle de l'art (Prado, Reina Sofía), ambiance castillane.",
      pros: ["Patrimoine muséal exceptionnel", "Excellente accessibilité piétonne", "Rapport qualité/prix optimal"],
      cons: ["Pas d'accès à la mer"],
      selected: true,
    },
    reason: "Sélection de Madrid pour ses musées mondiaux, son authenticité de capitale et son budget maîtrisé.",
  },
  {
    id: "vol",
    category: "VOL & TRANSPORT",
    title: "Acheminement aérien depuis Milan",
    optionA: {
      name: "Vol avec escale à Rome (FCO)",
      description: "Départ Milan Linate -> Escale Rome -> Madrid.",
      price: 140,
      pros: ["Tarif facial légèrement réduit (-40 €)"],
      cons: ["Durée totale de 6h30", "Risque accru de perte de bagages et retard"],
      selected: false,
    },
    optionB: {
      name: "Vol Direct Milan Malpensa (MXP) ✈️ Madrid (MAD)",
      description: "Vol direct le matin (08h30 -> 10h45), retour le dimanche soir.",
      price: 180,
      pros: ["Durée de vol de 2h15 seulement", "Arrivée matinale à 10h45 pour profiter de la 1ère journée"],
      cons: ["Tarif de 180 € A/R"],
      selected: true,
    },
    reason: "Choix impératif du vol direct pour maximiser le temps sur place et éviter toute fatigue inutile.",
  },
];

export interface ProblemSolution {
  title: string;
  problem: string;
  problemDescription: string;
  solution: string;
  solutionDescription: string;
  commercialGesture: string;
}

export const PROBLEM_SOLUTION_DATA: ProblemSolution = {
  title: "Incident Logistique & Résolution Commerciale",
  problem: "Chambre individuelle annulée",
  problemDescription: "En raison d'un surbooking imprévu chez le partenaire hôtelier, la chambre individuelle standard n'était plus disponible.",
  solution: "Surclassement gracieux en chambre double supérieure",
  solutionDescription: "L'agence prend en charge l'écart tarifaire et négocie l'attribution immédiate d'une chambre double de catégorie supérieure avec vue, sans aucun supplément pour le client.",
  commercialGesture: "Petit-déjeuner buffet continental inclus chaque matin offert par l'agence.",
};

export interface BudgetItem {
  label: string;
  detail: string;
  amount: number;
  category: 'vol' | 'hotel' | 'pass';
  icon: string;
}

export const BUDGET_BREAKDOWN: BudgetItem[] = [
  {
    label: "Vol Direct Aller-Retour (MXP - MAD)",
    detail: "Milan Malpensa -> Madrid Barajas (Bagage cabine + siège sélectionné)",
    amount: 180,
    category: 'vol',
    icon: 'Plane',
  },
  {
    label: "Hôtel Madrid Centre 3* (3 nuits)",
    detail: "3 nuits x 90 € / nuit — Chambre surclassée + petit-déjeuner buffet",
    amount: 270,
    category: 'hotel',
    icon: 'Hotel',
  },
  {
    label: "Pass Madrid Découverte & Musées",
    detail: "Accès coupe-file Musée du Prado + Palais Royal + Carte de transport",
    amount: 50,
    category: 'pass',
    icon: 'Ticket',
  },
];

export const BUDGET_SUMMARY = {
  total: 500,
  maxBudget: 800,
  savings: 300,
  savingsPercentage: 37.5,
};

export interface DialogueLine {
  id: number;
  speaker: 'Riccardo' | 'Manuel';
  role: 'Agent de Voyages' | 'Client';
  frenchText: string;
  italianTranslation: string;
  futurSimpleVerbs: string[];
}

export const DIALOGUE_LINES: DialogueLine[] = [
  {
    id: 1,
    speaker: "Manuel",
    role: "Client",
    frenchText: "Bonjour ! Je cherche un séjour touristique de quatre jours à Madrid pour mes vacances, du jeudi au dimanche. J'ai un budget maximal de 800 euros.",
    italianTranslation: "Buongiorno! Cerco un soggiorno turistico di quattro giorni a Madrid per le mie vacanze, da giovedì a domenica. Ho un budget massimo di 800 euro.",
    futurSimpleVerbs: [],
  },
  {
    id: 2,
    speaker: "Riccardo",
    role: "Agent de Voyages",
    frenchText: "Bonjour Manuel, bienvenue chez Horizon Voyages ! C'est une excellente idée. Vous partirez de Milan Malpensa à 08h30 par un vol direct très confortable.",
    italianTranslation: "Buongiorno Manuel, benvenuto da Horizon Voyages! È un'ottima idea. Partirete da Milano Malpensa alle 08:30 con un volo diretto molto confortevole.",
    futurSimpleVerbs: ["partirez"],
  },
  {
    id: 3,
    speaker: "Manuel",
    role: "Client",
    frenchText: "Très bien, je refuse les escales ! À quelle heure est prévue l'arrivée dans la capitale espagnole ?",
    italianTranslation: "Molto bene, rifiuto gli scali! A che ora è previsto l'arrivo nella capitale spagnola?",
    futurSimpleVerbs: [],
  },
  {
    id: 4,
    speaker: "Riccardo",
    role: "Agent de Voyages",
    frenchText: "Vous arriverez à l'aéroport de Madrid-Barajas à 10h45 seulement, ce qui vous laissera toute la journée pour profiter de la ville.",
    italianTranslation: "Arriverete all'aeroporto di Madrid-Barajas solo alle 10:45, il che vi lascerà l'intera giornata per godervi la città.",
    futurSimpleVerbs: ["arriverez"],
  },
  {
    id: 5,
    speaker: "Manuel",
    role: "Client",
    frenchText: "Parfait ! Et concernant l'hébergement, avez-vous un hôtel bien situé dans le centre historique ?",
    italianTranslation: "Perfetto! E per quanto riguarda l'alloggio, avete un hotel ben posizionato nel centro storico?",
    futurSimpleVerbs: [],
  },
  {
    id: 6,
    speaker: "Riccardo",
    role: "Agent de Voyages",
    frenchText: "Tout à fait ! Vous séjournerez à l'Hôtel Madrid Centre 3 étoiles, situé à cinq minutes à pied de la Puerta del Sol et de la Gran Vía.",
    italianTranslation: "Certamente! Soggiornerete all'Hôtel Madrid Centre 3 stelle, situato a cinque minuti a piedi dalla Puerta del Sol e dalla Gran Vía.",
    futurSimpleVerbs: ["séjournerez"],
  },
  {
    id: 7,
    speaker: "Manuel",
    role: "Client",
    frenchText: "Formidable. Je souhaite une chambre individuelle avec petit-déjeuner. Est-ce disponible ?",
    italianTranslation: "Fantastico. Desidero una camera singola con colazione. È disponibile?",
    futurSimpleVerbs: [],
  },
  {
    id: 8,
    speaker: "Riccardo",
    role: "Agent de Voyages",
    frenchText: "Alors, la dernière chambre individuelle était occupée, mais pas d'inquiétude : nous vous surclassons sans supplément en chambre double supérieure, et vous aurez le buffet du petit-déjeuner inclus chaque matin !",
    italianTranslation: "Allora, l'ultima camera singola era occupata, ma niente paura: vi passiamo gratuitamente a una camera doppia superiore senza supplemento, e avrete la colazione a buffet inclusa ogni mattina!",
    futurSimpleVerbs: ["aurez"],
  },
  {
    id: 9,
    speaker: "Manuel",
    role: "Client",
    frenchText: "C'est une excellente nouvelle, merci pour ce geste commercial ! Quels sont les lieux culturels que je peux découvrir ?",
    italianTranslation: "È un'ottima notizia, grazie per questo gesto commerciale! Quali sono i luoghi culturali che posso scoprire?",
    futurSimpleVerbs: [],
  },
  {
    id: 10,
    speaker: "Riccardo",
    role: "Agent de Voyages",
    frenchText: "Grâce à notre Pass Touristique, vous pourrez visiter le célèbre Musée du Prado ainsi que le Palais Royal sans faire la queue.",
    italianTranslation: "Grazie al nostro Pass Turistico, potrete visitare il famoso Museo del Prado e il Palazzo Reale senza fare la fila.",
    futurSimpleVerbs: ["pourrez"],
  },
  {
    id: 11,
    speaker: "Manuel",
    role: "Client",
    frenchText: "Super ! Comment se passera la remise des documents et des titres de transport à l'hôtel ?",
    italianTranslation: "Super! Come avverrà la consegna dei documenti e dei titoli di trasporto in hotel?",
    futurSimpleVerbs: [],
  },
  {
    id: 12,
    speaker: "Riccardo",
    role: "Agent de Voyages",
    frenchText: "Dès votre arrivée, le personnel d'accueil vous donnera une carte de la ville ainsi que tous vos pass d'accès déjà réservés.",
    italianTranslation: "Al vostro arrivo, il personale della reception vi darà una mappa della città e tutti i vostri pass di accesso già prenotati.",
    futurSimpleVerbs: ["donnera"],
  },
  {
    id: 13,
    speaker: "Manuel",
    role: "Client",
    frenchText: "C'est très pratique. Et au total, quel est le montant final du devis pour l'ensemble du séjour ?",
    italianTranslation: "È molto comodo. E in totale, qual è l'importo finale del preventivo per l'intero soggiorno?",
    futurSimpleVerbs: [],
  },
  {
    id: 14,
    speaker: "Riccardo",
    role: "Agent de Voyages",
    frenchText: "Le pack complet avec le vol direct aller-retour, les trois nuits d'hôtel et le pass culturel vous coûtera exactement 500 euros, soit 300 euros de moins que votre budget limite !",
    italianTranslation: "Il pacchetto completo con il volo diretto andata e ritorno, le tre notti in hotel e il pass culturale vi costerà esattamente 500 euro, ovvero 300 euro in meno rispetto al vostro budget limite!",
    futurSimpleVerbs: ["coûtera"],
  },
  {
    id: 15,
    speaker: "Manuel",
    role: "Client",
    frenchText: "C'est une offre imbattable ! Je valide immédiatement la proposition pour ces dates.",
    italianTranslation: "È un'offerta imbattibile! Confermo immediatamente la proposta per queste date.",
    futurSimpleVerbs: [],
  },
  {
    id: 16,
    speaker: "Riccardo",
    role: "Agent de Voyages",
    frenchText: "Merci pour votre confiance Manuel. Nous réserverons immédiatement votre vol et la chambre supérieure !",
    italianTranslation: "Grazie per la fiducia Manuel. Prenoteremo immediatamente il vostro volo e la camera superiore!",
    futurSimpleVerbs: ["réserverons"],
  },
];

export const FUTUR_SIMPLE_VERBS = [
  "partirez",
  "arriverez",
  "séjournerez",
  "aurez",
  "pourrez",
  "donnera",
  "coûtera",
  "réserverons",
];

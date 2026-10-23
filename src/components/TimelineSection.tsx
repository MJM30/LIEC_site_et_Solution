import React from "react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export default function TimelineSection() {
  const line1Steps: StepItem[] = [
    {
      number: "01",
      icon: "app_registration",
      title: "Inscription au programme",
      description: "Ouverture du dossier étudiant",
      badge: "Dossier initial",
    },
    {
      number: "02",
      icon: "payments",
      title: "Premier paiement & engagement",
      description: "Formalisation de l’engagement",
      badge: "Engagement validé",
    },
    {
      number: "03",
      icon: "school",
      title: "Préparation académique & entretiens",
      description: "Construire un projet solide",
      badge: "Méthodologie",
    },
    {
      number: "04",
      icon: "send",
      title: "Candidatures établissements français",
      description: "Rechercher une admission",
      badge: "Vœux soumis",
    },
    {
      number: "05",
      icon: "verified",
      title: "Confirmation de l’inscription",
      description: "Finaliser formalités établissement",
      badge: "Admission reçue",
    },
  ];

  const line2Steps: StepItem[] = [
    {
      number: "06",
      icon: "folder_shared",
      title: "Création dossier Campus France",
      description: "Préparer et soumettre le dossier",
      badge: "Études en France",
    },
    {
      number: "07",
      icon: "account_balance",
      title: "Financement et AVI",
      description: "Constituer justificatifs financiers",
      badge: "Garantie financière",
    },
    {
      number: "08",
      icon: "apartment",
      title: "Réservation logement étudiant",
      description: "Préparer justificatif d’hébergement",
      badge: "Attestation logement",
    },
    {
      number: "09",
      icon: "forum",
      title: "Entretien Campus France",
      description: "Présenter et défendre son projet",
      badge: "Entretien réussi",
    },
    {
      number: "10",
      icon: "checklist",
      title: "Vérification documents requis",
      description: "Préparer un dossier complet",
      badge: "Contrôle rigoureux",
    },
    {
      number: "11",
      icon: "flight_takeoff",
      title: "Entretien consulaire & Visa",
      description: "Finaliser la demande de visa étudiant",
      badge: "Visa en poche",
    },
  ];

  const renderCard = (step: StepItem) => (
    <div
      key={step.number}
      className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-surface-container-low shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-transparent hover:border-secondary/20"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-display-lg text-2xl lg:text-3xl text-secondary/30 font-black leading-none">
            {step.number}
          </span>
          <div className="h-9 w-9 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface transition-colors duration-200">
            <span className="material-symbols-outlined text-lg">{step.icon}</span>
          </div>
        </div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-secondary mb-1">
          Étape {step.number}
        </div>
        <h3 className="font-headline-sm text-sm sm:text-base font-bold text-primary mb-1.5 leading-snug">
          {step.title}
        </h3>
        <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          {step.description}
        </p>
      </div>

      <div className="mt-3 pt-2.5 border-t border-surface-container-high/60 inline-flex items-center gap-1 font-label-sm text-[11px] text-secondary font-semibold">
        <span className="material-symbols-outlined text-xs">check_circle</span>
        <span>{step.badge}</span>
      </div>
    </div>
  );

  return (
    <section id="etudier-en-france" className="w-full bg-surface py-space-xl lg:py-24">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
              Calendrier &amp; Jalons
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
              Ton parcours vers les études en France
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              11 étapes claires et structurées pour concrétiser ton projet sans improvisation.
            </p>
          </div>
          <div className="mt-space-md md:mt-0 flex items-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined text-secondary">schedule</span>
            <span>Anticipation recommandée : 8 à 10 mois</span>
          </div>
        </div>

        {/* Timeline Layout en 2 lignes */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Ligne 1 : Étapes 01 à 05 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-secondary"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Ligne 1 • Phase Admissions &amp; Candidatures (Étapes 01 à 05)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
              {line1Steps.map(renderCard)}
            </div>
          </div>

          {/* Ligne 2 : Étapes 06 à 11 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-secondary"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Ligne 2 • Phase Campus France, Financement &amp; Visa (Étapes 06 à 11)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
              {line2Steps.map(renderCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

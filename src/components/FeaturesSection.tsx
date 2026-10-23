import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      icon: "explore",
      title: "Orientation personnalisée",
      description:
        "Clarification de tes ambitions académiques et choix de formations alignées avec ton profil et tes débouchés réels.",
      actionText: "Bilan sur-mesure",
      highlight: false,
    },
    {
      icon: "edit_document",
      title: "Accompagnement candidatures",
      description:
        "Méthodologie rigoureuse pour structurer tes dossiers, lettres de motivation authentiques et justificatifs requis.",
      actionText: "Relecture experte",
      highlight: false,
    },
    {
      icon: "auto_stories",
      title: "Préparation académique",
      description:
        "Mise à niveau méthodologique, pré-requis d’expression et immersion avec le programme exclusif LIEC-France PREPA.",
      actionText: "Programme PREPA",
      highlight: true,
    },
    {
      icon: "handshake",
      title: "Conseil & Familles",
      description:
        "Transparence sur les coûts réels de vie, anticipation des démarches d’installation et sérénité durable pour les proches.",
      actionText: "Vision claire & coûts",
      highlight: false,
    },
  ];

  return (
    <section id="nos-services" className="w-full bg-surface-container-low py-space-xl lg:py-24">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        {/* En-tête de section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
            Excellence &amp; Méthode
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
            Pourquoi faire confiance à LIEC ?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
            Une démarche structurée, réaliste et respectueuse des exigences académiques françaises.
          </p>
        </div>

        {/* Grille des 4 cartes sans bordures brutes, jeux d'élévation et surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`group flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative ${
                feat.highlight ? "overflow-hidden" : ""
              }`}
            >
              {feat.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary"></div>
              )}
              <div className="flex flex-col">
                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center text-secondary mb-space-md group-hover:bg-secondary group-hover:text-surface transition-colors duration-300 ${
                    feat.highlight ? "bg-secondary-container/40" : "bg-surface-container"
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {feat.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                  {feat.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {feat.description}
                </p>
              </div>
              <div className="pt-space-md mt-space-sm flex items-center text-secondary font-label-md text-label-md font-bold group-hover:translate-x-1 transition-transform">
                <span>{feat.actionText}</span>
                <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

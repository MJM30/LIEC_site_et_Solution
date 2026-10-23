import React from "react";
import Link from "next/link";

export default function PrepaSection() {
  const modules = [
    {
      icon: "auto_stories",
      title: "Méthodologie Universitaire",
      desc: "Dissertation, commentaire composé, synthèses & esprit critique.",
    },
    {
      icon: "record_voice_over",
      title: "Éloquence & Soutenance",
      desc: "Aisance en prise de parole publique et argumentation académique.",
    },
    {
      icon: "psychology",
      title: "Autonomie & Recherche",
      desc: "Usage des bibliothèques universitaires et organisation du travail personnel.",
    },
  ];

  const highlights = [
    {
      strong: "Méthodologie universitaire française :",
      text: " Maîtrise des standards d’évaluation, de prise de notes rapide et d’analyse documentaire.",
    },
    {
      strong: "Renforcement des compétences écrites & orales :",
      text: " Développer la rigueur rédactionnelle et l’assurance indispensable aux examens oraux.",
    },
    {
      strong: "Suivi individualisé par des mentors :",
      text: " Accompagnement régulier avec des universitaires et anciens diplômés basés à Lyon.",
    },
  ];

  return (
    <section id="liec-france-prepa" className="w-full bg-[#FFF4E7] py-space-xl lg:py-24 text-on-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Visual & Data Metric Box */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-space-lg rounded-3xl bg-surface-container-lowest shadow-xl flex flex-col gap-space-md">
              {/* Header carte prepa */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  <span className="font-label-md text-label-md text-primary font-bold">
                    Cycle Préparatoire LIEC
                  </span>
                </div>
                <span className="px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-primary font-label-sm text-label-sm font-bold">
                  Cohorte 2025
                </span>
              </div>

              {/* Focus Module preview */}
              <div className="flex flex-col gap-space-sm pt-space-xs">
                {modules.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm"
                  >
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      {m.icon}
                    </span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-primary">{m.title}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Encadré déontologique institutionnel */}
              <div className="mt-space-xs p-space-sm rounded-lg bg-surface-container text-primary font-body-sm text-body-sm text-center font-medium">
                Dispense de cours intensifs en présentiel &amp; e-learning guidé
              </div>
            </div>
          </div>

          {/* Descriptive Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs self-start rounded-full bg-primary-container px-space-md py-space-xs text-surface">
              <span className="material-symbols-outlined text-tertiary-fixed text-base">
                workspace_premium
              </span>
              <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-surface">
                Programme d’Excellence
              </span>
            </div>

            <h2 className="font-headline-xl text-headline-xl text-primary font-extrabold leading-tight">
              Prépare aujourd’hui les <span className="text-secondary">opportunités de demain</span>.
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Un programme d'excellence préparatoire conçu pour combler l'écart méthodologique, renforcer l'autonomie académique et maximiser le succès des étudiants africains dans l'enseignement supérieur français.
            </p>

            {/* 3 points clés à puces visuelles */}
            <div className="flex flex-col gap-space-sm pt-space-xs">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-space-sm">
                  <div className="h-6 w-6 rounded-full bg-secondary text-surface flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <strong className="font-label-lg text-label-lg text-primary">
                      {h.strong}
                    </strong>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {h.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-space-md">
              <Link
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-surface font-label-lg text-label-lg font-bold shadow-md hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-200"
                href="/demarrer-mon-projet"
              >
                S’inscrire au programme PREPA
                <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

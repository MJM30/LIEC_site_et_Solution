import React from "react";
import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section id="candidature" className="w-full bg-[#153A70] text-surface py-space-xl lg:py-24 relative overflow-hidden">
      {/* Subtle depth glows */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-tertiary-fixed/20 blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-space-xs rounded-full bg-surface/10 px-space-md py-space-xs text-secondary-fixed mb-space-md">
          <span className="material-symbols-outlined text-lg">calendar_month</span>
          <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">
            Sessions Rentrée 2026-2027
          </span>
        </div>

        <h2 className="font-display-lg text-display-lg text-surface font-extrabold tracking-tight max-w-3xl leading-tight">
          Chaque grand projet commence par une décision.{" "}
          <span className="text-tertiary-fixed">Parlons du tien.</span>
        </h2>

        <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mt-space-md mb-space-lg leading-relaxed">
          Prends rendez-vous dès aujourd’hui pour un premier échange d’orientation sans engagement avec nos spécialistes à Lyon et Kinshasa.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-space-md w-full justify-center">
          <Link
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-xl bg-tertiary-fixed text-primary font-label-lg text-label-lg font-bold shadow-xl hover:bg-tertiary-fixed-dim hover:-translate-y-0.5 transition-all duration-200"
            href="/contact"
          >
            <span
              className="material-symbols-outlined mr-2 text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              support_agent
            </span>
            Parler à un conseiller LIEC
          </Link>
          <Link
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 rounded-xl bg-surface/10 text-surface font-label-lg text-label-lg font-semibold hover:bg-surface/20 transition-all duration-200"
            href="/etudier-en-france"
          >
            Consulter le guide des démarches
          </Link>
        </div>

        {/* Mentions & Disclaimers Footer Card */}
        <div className="mt-space-xl pt-space-md text-surface-variant font-body-sm text-body-sm max-w-xl text-center border-t border-surface/10">
          Dispositif d'orientation indépendant. LIEC applique les normes de transparence financière et d'accompagnement académique conformes à la charte déontologique Campus France.
        </div>
      </div>
    </section>
  );
}

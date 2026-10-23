"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeroSlide {
  src: string;
  alt: string;
  icon: string;
  badgeTitle: string;
  badgeSubtitle: string;
  badgeTag: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuACKGgxEh17JDOy5GhR0WSut2bruJ72cFOpYauKIq4Lw1ge0jiwNJLMFDoUFwDeDh_D4UG-QMruzEfR13S-PEWtVSAkmRCrWHdwQ7VMMbASjVPOYPxpy5t64F_8uzB3aYODCgeWuy-DmkB_CzSvm0pDy3N-P_Cyvf1PAkQ-RQEHNoQg9C3YLSKlVrthaJmiU9rpKIeYi7zDcK58FIloD2KB6jzzSquF2CHIvDR8qR-1M4C0-F3AlbMt",
    alt: "Étudiants marchant avec confiance devant un campus universitaire français",
    icon: "groups",
    badgeTitle: "Accompagnement rigoureux",
    badgeSubtitle: "Méthodologie universitaire",
    badgeTag: "France 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    alt: "Étudiants noirs préparant leurs dossiers académiques en groupe",
    icon: "school",
    badgeTitle: "Programme LIEC-France PREPA",
    badgeSubtitle: "Excellence académique & entretiens",
    badgeTag: "Prépa Intensive",
  },
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80",
    alt: "Étudiante noire travaillant sur son projet d'études",
    icon: "verified",
    badgeTitle: "Orientation sur-mesure",
    badgeSubtitle: "Dossier solide & projet cohérent",
    badgeTag: "100% Structuré",
  },
  {
    src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=1000&q=80",
    alt: "Étudiant africain sur le campus universitaire",
    icon: "flight_takeoff",
    badgeTitle: "Suivi Campus France & Visa",
    badgeSubtitle: "De l'admission jusqu'à l'installation",
    badgeTag: "Lyon & Kinshasa",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section id="accueil" className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-24">
      {/* Ambient subtle background depth shapes */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-tertiary-fixed/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Col Gauche : Typographie & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/* Tagline & Badge de statut */}
            <div className="inline-flex items-center gap-space-sm self-start rounded-full bg-surface-container px-space-md py-space-xs shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                Un projet d’études. Des étapes claires. Un avenir à construire.
              </span>
            </div>

            {/* Titre Principal Affirmé */}
            <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold max-w-2xl leading-tight">
              Ton avenir mérite le <span className="text-secondary">bon accompagnement</span>.
            </h1>

            {/* Sous-titre éditorial */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Construis ton projet d’études en France avec LIEC. De l’orientation au dossier de candidature, nous t’accompagnons pour avancer avec méthode et confiance.
            </p>

            {/* Boutons CTA Dual */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <Link
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-tertiary-fixed text-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-tertiary-fixed-dim hover:-translate-y-0.5 transition-all duration-200"
                href="/demarrer-mon-projet"
              >
                <span
                  className="material-symbols-outlined mr-2 text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  rocket_launch
                </span>
                Démarrer mon projet
              </Link>
              <Link
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-surface-container text-primary font-label-lg text-label-lg font-semibold hover:bg-surface-container-high hover:-translate-y-0.5 transition-all duration-200"
                href="/a-propos"
              >
                <span className="material-symbols-outlined mr-2 text-xl">school</span>
                Découvrir LIEC &amp; PREPA
              </Link>
            </div>

            {/* Micro Réassurance Déontologique */}
            <div className="pt-space-sm flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
              <div className="flex items-center gap-1.5">
                <span
                  className="material-symbols-outlined text-secondary text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span>Cadre officiel Campus France</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-outline-variant"></div>
              <div className="flex items-center gap-1.5">
                <span
                  className="material-symbols-outlined text-secondary text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  policy
                </span>
                <span>Conseil éthique &amp; transparent</span>
              </div>
            </div>
          </div>

          {/* Col Droite : Carrousel d'Images & Badges Flottants */}
          <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
            <div
              className="relative mx-auto max-w-md lg:max-w-none group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Cadre Image Principal avec Carrousel Défilant */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-surface-container-lowest h-[460px]">
                {/* Bandeau d'images qui défile horizontalement */}
                <div
                  className="flex h-full w-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {HERO_SLIDES.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                      <img
                        alt={slide.alt}
                        className="w-full h-full object-cover object-center"
                        src={slide.src}
                      />
                    </div>
                  ))}
                </div>

                {/* Dégradé d'assombrissement en bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Boutons Précédent / Suivant */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Image précédente"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-surface/80 hover:bg-surface text-primary shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                >
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Image suivante"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-surface/80 hover:bg-surface text-primary shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                >
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>

                {/* Points de pagination (Dots) */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {HERO_SLIDES.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Aller à l'image ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "w-6 bg-tertiary-fixed shadow-sm"
                          : "w-2 bg-surface/60 hover:bg-surface"
                      }`}
                    />
                  ))}
                </div>

                {/* Badge contextuel dynamique en bas de l'image */}
                <div className="absolute bottom-4 left-4 right-4 p-space-md rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg flex items-center justify-between z-10 transition-all duration-300">
                  <div className="flex items-center gap-space-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {activeSlide.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-primary leading-tight">
                        {activeSlide.badgeTitle}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {activeSlide.badgeSubtitle}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
                    {activeSlide.badgeTag}
                  </span>
                </div>
              </div>

              {/* Badge Flottant Haut-Droit : Conseillers Lyon & Kinshasa */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-primary-container text-surface p-space-md rounded-xl shadow-xl flex items-center gap-space-sm max-w-[240px] z-20">
                <span
                  className="material-symbols-outlined text-tertiary-fixed text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  public
                </span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase font-bold tracking-wider">
                    Double Présence
                  </span>
                  <span className="font-body-sm text-body-sm text-surface font-semibold leading-tight">
                    Conseillers certifiés à Lyon &amp; Kinshasa
                  </span>
                </div>
              </div>

              {/* Mini Cartouche Brand Logo Corner */}
              <div className="absolute -bottom-4 -left-4 bg-surface-container-lowest p-space-xs rounded-xl shadow-md hidden sm:flex items-center gap-2 z-20">
                <img
                  alt="Logo LIEC Education"
                  className="h-8 w-8 object-contain rounded-md"
                  src="/logo_LIEC.jpeg"
                />
                <div className="flex flex-col pr-space-xs">
                  <span className="font-label-sm text-label-sm font-bold text-primary leading-none">
                    LIEC
                  </span>
                  <span className="text-[10px] text-secondary font-medium uppercase tracking-tight">
                    Consulting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

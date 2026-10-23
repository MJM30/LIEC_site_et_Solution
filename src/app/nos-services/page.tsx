import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import Footer from "@/components/Footer";

export default function NosServicesPage() {
  const detailedServices = [
    {
      badge: "Pôle 01 • Orientation & Dossiers",
      title: "Diagnostic académique, choix des filières & rédaction des dossiers",
      description:
        "Nous analysons tes relevés de notes, ton parcours et tes ambitions pour définir une stratégie d’admission réaliste. Nous t’accompagnons dans la structuration de ton CV académique et la rédaction de lettres de motivation personnalisées pour chaque formation.",
      points: [
        "Sélection ciblée de 7 formations (universités publiques & écoles)",
        "Correction approfondie des lettres de motivation et du projet d'études",
        "Constitution et vérification des pièces justificatives officielles",
      ],
      image: "/pole_01_ai.jpg",
      reverse: false,
    },
    {
      badge: "Pôle 02 • Entretiens & Prépa",
      title: "Simulations d'entretiens Campus France & immersion académique",
      description:
        "L’entretien Campus France est une étape décisive. Nos conseillers te préparent via des simulations en conditions réelles pour défendre ton projet avec clarté, assurance et cohérence.",
      points: [
        "Simulations individuelles d'entretien pédagogique Campus France",
        "Accès au cycle préparatoire LIEC-France PREPA (méthodologie & écrit)",
        "Maîtrise des questions sur le parcours, les débouchés et le financement",
      ],
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
      reverse: true,
    },
    {
      badge: "Pôle 03 • Financement, Logement & Visa",
      title: "Sécurisation de l'AVI, recherche de logement et dossier consulaire",
      description:
        "Une fois l’admission obtenue, nous accompagnons l’étudiant et sa famille dans toutes les formalités pré-consulaires : justificatifs financiers (AVI), attestation d’hébergement et dépôt de la demande de visa.",
      points: [
        "Accompagnement pour l'Attestation de Virement Irrévocable (AVI)",
        "Recherche de logement étudiant (résidences partenaires, CROUS, Visale)",
        "Vérification finale du dossier consulaire France-Visas et suivi d'arrivée",
      ],
      image:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=1000&q=80",
      reverse: false,
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* SECTION 1 : HERO NOS SERVICES */}
          <section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-24">
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl"></div>
            <div className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-tertiary-fixed/30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-7 flex flex-col gap-space-lg">
                  <div className="inline-flex items-center gap-space-sm self-start rounded-full bg-surface-container px-space-md py-space-xs shadow-sm">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Accompagnement Sur-Mesure • 11 Étapes Claires
                    </span>
                  </div>

                  <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold max-w-2xl leading-tight">
                    Des services pensés pour <span className="text-secondary">sécuriser chaque étape</span> de ton projet.
                  </h1>

                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                    De la définition de ton projet d’études jusqu’à la demande de visa et ton installation en France, LIEC met à ta disposition une méthodologie éprouvée.
                  </p>

                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <Link
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-tertiary-fixed text-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-tertiary-fixed-dim hover:-translate-y-0.5 transition-all duration-200"
                      href="/demarrer-mon-projet"
                    >
                      <span
                        className="material-symbols-outlined mr-2 text-xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        edit_calendar
                      </span>
                      Réserver mon diagnostic gratuit
                    </Link>
                    <a
                      className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-surface-container text-primary font-label-lg text-label-lg font-semibold hover:bg-surface-container-high hover:-translate-y-0.5 transition-all duration-200"
                      href="#prestations"
                    >
                      <span className="material-symbols-outlined mr-2 text-xl">view_agenda</span>
                      Découvrir nos pôles
                    </a>
                  </div>
                </div>

                {/* Image Hero à droite */}
                <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-surface-container-lowest h-[440px]">
                      <img
                        alt="Séance de conseil et d'accompagnement étudiant LIEC"
                        className="w-full h-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 p-space-md rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg flex items-center justify-between">
                        <div className="flex items-center gap-space-sm">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                            <span
                              className="material-symbols-outlined"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              support_agent
                            </span>
                          </div>
                          <div>
                            <p className="font-label-lg text-primary">Suivi Individualisé</p>
                            <p className="font-body-sm text-on-surface-variant">
                              Conseiller dédié à ton dossier
                            </p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-secondary-container/40 text-on-secondary-container font-label-sm font-bold">
                          100% Dédié
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 : LES 4 PILIERS DE SERVICES */}
          <FeaturesSection />

          {/* SECTION 3 : ZOOM ILLUSTRÉ SUR NOS PRESTATIONS */}
          <section id="prestations" className="w-full bg-surface py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-16">
              {detailedServices.map((service, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"
                >
                  <div
                    className={`lg:col-span-5 ${
                      service.reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-lg h-[360px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-7 flex flex-col gap-space-md ${
                      service.reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <span className="inline-flex self-start px-3 py-1 rounded-full bg-surface-container text-secondary font-label-sm uppercase font-bold tracking-wider">
                      {service.badge}
                    </span>
                    <h2 className="font-headline-lg text-primary font-bold leading-snug">
                      {service.title}
                    </h2>
                    <p className="font-body-lg text-on-surface-variant leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-col gap-2.5 pt-2">
                      {service.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="material-symbols-outlined text-secondary text-xl mt-0.5">
                            check_circle
                          </span>
                          <span className="font-body-md text-primary font-medium">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2">
                      <Link
                        href="/demarrer-mon-projet"
                        className="inline-flex items-center gap-2 text-secondary font-label-lg font-bold hover:underline"
                      >
                        <span>Démarrer mon projet avec ce pôle</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4 : TÉMOIGNAGES COHORTE */}
          <TestimonialsSection />

          {/* SECTION 5 : FAQ & CTA BANNER */}
          <FaqSection />
          <CtaBannerSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

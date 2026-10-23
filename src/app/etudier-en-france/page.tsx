import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import TimelineSection from "@/components/TimelineSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import Footer from "@/components/Footer";

export default function EtudierEnFrancePage() {
  const institutions = [
    {
      icon: "account_balance",
      title: "Universités Publiques (LMD)",
      subtitle: "Licence • Master • Doctorat",
      description:
        "Des formations académiques d’excellence reconnues mondialement dans les sciences, l’économie, le droit, les lettres et l'informatique.",
      tag: "Diplômes d'État",
    },
    {
      icon: "precision_manufacturing",
      title: "Écoles d’Ingénieurs & Tech",
      subtitle: "Cycle Ingénieur • Bachelor Tech",
      description:
        "Formations de pointe en informatique, développement web, intelligence artificielle, génie civil et télécommunications.",
      tag: "Haute employabilité",
    },
    {
      icon: "trending_up",
      title: "Écoles de Management",
      subtitle: "BBA • Programme Grande École • MSc",
      description:
        "Cursus tournés vers l’entreprise, la finance, le marketing digital, la logistique internationale et la RSE.",
      tag: "Réseau entreprises",
    },
    {
      icon: "workspace_premium",
      title: "IUT, BTS & Bachelors Pro",
      subtitle: "BUT • Licences Professionnelles",
      description:
        "Parcours professionnalisants courts et concrets alliant théorie, stages en entreprise et insertion rapide.",
      tag: "Pratique & Métier",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* SECTION 1 : HERO ÉTUDIER EN FRANCE */}
          <section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-24">
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl"></div>
            <div className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-tertiary-fixed/30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-7 flex flex-col gap-space-lg">
                  <div className="inline-flex items-center gap-space-sm self-start rounded-full bg-surface-container px-space-md py-space-xs shadow-sm">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Guide Complet • Mobilité Académique Internationale
                    </span>
                  </div>

                  <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold max-w-2xl leading-tight">
                    Réussir ses <span className="text-secondary">études en France</span> étape par étape.
                  </h1>

                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                    Choisir la bonne filière, maîtriser le calendrier Campus France, préparer son dossier financier (AVI) et sécuriser son logement : LIEC t’éclaire avec rigueur et transparence.
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
                        rocket_launch
                      </span>
                      Démarrer mon projet
                    </Link>
                    <a
                      className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-surface-container text-primary font-label-lg text-label-lg font-semibold hover:bg-surface-container-high hover:-translate-y-0.5 transition-all duration-200"
                      href="#etudier-en-france"
                    >
                      <span className="material-symbols-outlined mr-2 text-xl">calendar_month</span>
                      Voir les 11 étapes
                    </a>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-surface-container-high max-w-lg">
                    <div>
                      <p className="font-headline-lg text-primary font-extrabold">3 500+</p>
                      <p className="font-body-sm text-on-surface-variant">Établissements supérieurs</p>
                    </div>
                    <div>
                      <p className="font-headline-lg text-secondary font-extrabold">11 étapes</p>
                      <p className="font-body-sm text-on-surface-variant">Parcours encadré LIEC</p>
                    </div>
                    <div>
                      <p className="font-headline-lg text-primary font-extrabold">Lyon &amp; Kin</p>
                      <p className="font-body-sm text-on-surface-variant">Suivi de proximité</p>
                    </div>
                  </div>
                </div>

                {/* Image Hero à droite */}
                <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-surface-container-lowest h-[450px]">
                      <img
                        alt="Étudiants africains sur un campus universitaire en France"
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 p-space-md rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg flex items-center justify-between">
                        <div className="flex items-center gap-space-sm">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                            <span
                              className="material-symbols-outlined"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              school
                            </span>
                          </div>
                          <div>
                            <p className="font-label-lg text-label-lg text-primary">
                              Système LMD Européen
                            </p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              Diplômes reconnus à l’international
                            </p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-tertiary-fixed text-primary font-label-sm font-bold">
                          2026/2027
                        </span>
                      </div>
                    </div>

                    <div className="absolute -top-4 -left-4 bg-primary-container text-surface p-space-md rounded-xl shadow-xl flex items-center gap-space-sm max-w-[230px]">
                      <span
                        className="material-symbols-outlined text-tertiary-fixed text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        verified
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-tertiary-fixed uppercase font-bold">
                          Procédure officielle
                        </span>
                        <span className="font-body-sm text-surface font-semibold leading-tight">
                          Conformité Études en France
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 : COMPRENDRE LES ÉTABLISSEMENTS FRANÇAIS */}
          <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
                  Panorama Académique
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  Quelles formations choisir en France ?
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
                  Nous t’aidons à cibler les établissements adaptés à ton bagage académique et à ton projet professionnel.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {institutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-md group-hover:bg-secondary group-hover:text-surface transition-colors duration-300">
                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                        {item.subtitle}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary mt-1 mb-space-xs">
                        {item.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-space-md mt-space-sm border-t border-surface-container flex items-center justify-between text-secondary font-label-md font-bold">
                      <span>{item.tag}</span>
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3 : LES 11 ÉTAPES DU PARCOURS (TIMELINE) */}
          <TimelineSection />

          {/* SECTION 4 : BUDGET, AVI & LOGEMENT ÉTUDIANT (FOND CRÈME #FFF4E7) */}
          <section className="w-full bg-[#FFF4E7] py-space-xl lg:py-24 text-on-surface">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl bg-surface-container-lowest">
                    <img
                      alt="Étudiante noire préparant son installation et son budget d'études"
                      className="w-full h-[420px] object-cover object-center"
                      src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=900&q=80"
                    />
                    <div className="p-space-lg bg-surface-container-lowest">
                      <div className="flex items-center gap-2 text-secondary font-label-md font-bold mb-1">
                        <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                        <span>Transparence Financière aux Familles</span>
                      </div>
                      <p className="font-body-sm text-on-surface-variant leading-relaxed">
                        Une préparation budgétaire réaliste avec les parents dès le départ pour garantir une année universitaire sereine et éviter les mauvaises surprises.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs self-start rounded-full bg-primary-container px-space-md py-space-xs text-surface">
                    <span className="material-symbols-outlined text-tertiary-fixed text-base">
                      verified_user
                    </span>
                    <span className="font-label-sm uppercase font-bold tracking-wider">
                      Conditions Consulaires &amp; Installation
                    </span>
                  </div>

                  <h2 className="font-headline-xl text-headline-xl text-primary font-extrabold leading-tight">
                    Anticiper le <span className="text-secondary">financement (AVI)</span> et le logement étudiant.
                  </h2>

                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Au-delà de l’admission académique, la réussite de la demande de visa repose sur la solidité des justificatifs financiers et d’hébergement.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm">
                      <div className="flex items-center gap-2 text-primary font-label-lg font-bold mb-2">
                        <span className="material-symbols-outlined text-secondary">savings</span>
                        <span>Garantie Financière &amp; AVI</span>
                      </div>
                      <p className="font-body-sm text-on-surface-variant leading-relaxed">
                        Justification de ressources minimales réglementaires (minimum 615 €/mois exigés par le consulat) via une Attestation de Virement Irrévocable (AVI) ou garant solvable.
                      </p>
                    </div>

                    <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm">
                      <div className="flex items-center gap-2 text-primary font-label-lg font-bold mb-2">
                        <span className="material-symbols-outlined text-secondary">apartment</span>
                        <span>Logement &amp; Caution Visale</span>
                      </div>
                      <p className="font-body-sm text-on-surface-variant leading-relaxed">
                        Recherche anticipée en résidences étudiantes privées ou universitaires, attestation d’hébergement pour le visa et mise en place de la garantie publique Visale.
                      </p>
                    </div>

                    <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm">
                      <div className="flex items-center gap-2 text-primary font-label-lg font-bold mb-2">
                        <span className="material-symbols-outlined text-secondary">health_and_safety</span>
                        <span>Sécurité Sociale &amp; CVEC</span>
                      </div>
                      <p className="font-body-sm text-on-surface-variant leading-relaxed">
                        Acquittement de la CVEC, affiliation gratuite à la sécurité sociale étudiante française et ouverture du compte bancaire dès l’arrivée.
                      </p>
                    </div>

                    <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm">
                      <div className="flex items-center gap-2 text-primary font-label-lg font-bold mb-2">
                        <span className="material-symbols-outlined text-secondary">badge</span>
                        <span>Validation VLS-TS (OFII)</span>
                      </div>
                      <p className="font-body-sm text-on-surface-variant leading-relaxed">
                        Validation en ligne du visa long séjour valant titre de séjour dans les 3 mois suivant l’arrivée en France et demandes d’aides au logement (CAF).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 : DESTINATION ACADÉMIQUE — LYON */}
          <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
                  Destination Académique
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  Lyon — Notre Pôle Universitaire de Référence
                </h2>
                <p className="font-body-lg text-on-surface-variant mt-space-xs">
                  Ville d’implantation du siège LIEC, Lyon offre l’environnement idéal pour réussir ses études supérieures et construire son réseau professionnel en France.
                </p>
              </div>

              <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-surface-container-lowest shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Image rappelant fortement un étudiant / une étudiante */}
                <div className="lg:col-span-6 relative h-[380px] lg:h-[440px] w-full overflow-hidden">
                  <img
                    alt="Étudiant africain avec sac à dos et cahiers sur un campus universitaire à Lyon"
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=1000&q=80"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-primary-container/95 text-tertiary-fixed font-label-sm font-bold backdrop-blur-sm shadow-md">
                    2e pôle universitaire de France
                  </div>
                </div>

                {/* Contenu descriptif sur Lyon */}
                <div className="lg:col-span-6 p-space-lg lg:p-10 flex flex-col justify-between gap-space-md">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-secondary font-label-sm uppercase font-bold tracking-wider mb-2">
                      <span className="material-symbols-outlined text-base">school</span>
                      <span>Siège LIEC — Lyon International</span>
                    </div>
                    <h3 className="font-headline-lg text-primary font-bold mb-3">
                      Lyon, métropole étudiante d’excellence
                    </h3>
                    <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">
                      Avec plus de 175 000 étudiants, de grandes universités (Lyon 1, Lyon 2, Lyon 3) et des écoles d’ingénieurs, d’informatique et de management de premier plan, Lyon conjugue excellence académique, dynamisme économique et maîtrise du coût de la vie.
                    </p>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-2 text-primary font-body-sm font-semibold">
                        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                        <span>Accompagnement d’accueil LIEC directement sur place à Lyon</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-body-sm font-semibold">
                        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                        <span>Fort bassin d’emplois étudiants, stages et alternances</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-body-sm font-semibold">
                        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                        <span>Réseau de transports et résidences universitaires accessibles</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-surface-container flex items-center justify-between">
                    <div className="flex items-center gap-2 text-secondary font-label-sm font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-base">location_on</span>
                      <span>175 000+ étudiants • Présence LIEC sur place</span>
                    </div>
                    <Link
                      href="/demarrer-mon-projet"
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-tertiary-fixed text-primary font-label-sm font-bold hover:bg-tertiary-fixed-dim transition-colors"
                    >
                      <span>Étudier à Lyon</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 : APPEL À L'ACTION FINAL */}
          <CtaBannerSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

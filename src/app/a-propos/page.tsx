"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import PrepaSection from "@/components/PrepaSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import Footer from "@/components/Footer";

export default function AProposPage() {
  const values = [
    {
      icon: "gavel",
      title: "Éthique & Souveraineté Académique",
      description:
        "Aucune promesse mensongère de visa ou d'admission automatique. Nous respectons scrupuleusement les règles de Campus France et des consulats.",
    },
    {
      icon: "visibility",
      title: "Transparence Financière Totale",
      description:
        "Chaque famille dispose dès le premier jour d’une vision claire des frais de procédure, du budget d'installation et du coût réel de la vie en France.",
    },
    {
      icon: "menu_book",
      title: "Rigueur Méthodologique",
      description:
        "Nous ne faisons pas à la place de l’étudiant : nous le formons pour qu'il maîtrise son dossier, son projet d'études et ses entretiens.",
    },
    {
      icon: "diversity_3",
      title: "Accompagnement de Proximité",
      description:
        "Une présence humaine continue de Kinshasa jusqu'à Lyon pour rassurer les parents et éviter l'isolement des étudiants à leur arrivée.",
    },
  ];

  const teamMembers = [
    {
      name: "Direction & Conseil Académique",
      role: "Pôle Orientation & Stratégie — Lyon",
      bio: "Diplômés de l'enseignement supérieur français, nos conseillers de Lyon veillent à l'adéquation entre les profils des candidats et les attentes réelles des universités et grandes écoles.",
      image: "/img_01.jpeg",
      badge: "Siège Lyon • France",
    },
    {
      name: "Coordination & Relations Familles",
      role: "Bureau d'Accompagnement — Kinshasa",
      bio: "Basée à Kinshasa, notre équipe assure le diagnostic initial, le suivi documentaire quotidien, la préparation aux entretiens Campus France et l'information transparente des parents.",
      image: "/img_04.png",
      badge: "Bureau Kinshasa • RDC",
    },
    {
      name: "Mentorat LIEC-France PREPA",
      role: "Pédagogie & Méthodologie Universitaire",
      bio: "Nos formateurs et mentors accompagnent la cohorte PREPA sur l'expression écrite, l'éloquence, la méthodologie de la dissertation et l'autonomie de recherche.",
      image: "/img_03.png",
      badge: "Corps Pédagogique",
    },
  ];

  const liecPartners = [
    {
      name: "Yimmiline",
      category: "Pré-financement",
      icon: "account_balance_wallet",
      description:
        "Partenaire officiel dédié aux solutions de pré-financement et à la sécurisation des garanties financières étudiantes (AVI).",
    },
    {
      name: "France PREPA",
      category: "Prépa",
      icon: "school",
      description:
        "Dispositif d’excellence pour la préparation méthodologique, académique et la réussite des entretiens d’admission.",
    },
    {
      name: "DANOVA Société Civile Immobilière",
      category: "Logement",
      icon: "apartment",
      description:
        "Solutions d’hébergement étudiant et accompagnement pour l’obtention des attestations de logement en France.",
    },
    {
      name: "AéroQualis",
      category: "Voyage & Aviation",
      icon: "flight_takeoff",
      logo: "/logo_aeroqualis.png",
      description:
        "Vente de billets & services de voyage, transport Ville ↔ Aéroport, assistance documentaire & démarches aéronautiques, manuels, procédures & conseil aux compagnies aériennes, location et affrètement d'aéronefs.",
      contacts: [
        { label: "+243 990 207 891", tel: "+243990207891" },
        { label: "+243 896 652 496", tel: "+243896652496" },
      ],
    },
    {
      name: "Royal Services",
      category: "Voyage & Mobilité",
      icon: "travel_explore",
      logo: "/logo_royal_services.png",
      description:
        "Assistance voyage, demande de rendez-vous, réservation de billets et hôtels, classement et suivi de dossiers, orientation pour études à l’étranger.",
      contacts: [
        { label: "+243 821 340 580", tel: "+243821340580" },
      ],
    },
  ];

  const partnerSchools = [
    {
      number: "01",
      name: "ISCOM",
      logo: "/logo_ISCOM.png",
      fields: "Communication, publicité, marketing et événementiel.",
    },
    {
      number: "02",
      name: "MyDigitalSchool",
      logo: "/logo_My_Digital_School.png",
      fields: "Développement web, création numérique, webmarketing et UX/UI design.",
    },
    {
      number: "03",
      name: "École Internationale Tunon",
      logo: "/logo_TUNON.png",
      fields: "Tourisme, hôtellerie, relations publiques et événementiel.",
    },
    {
      number: "04",
      name: "IHECF",
      logo: "/logo_IHECF.png",
      fields: "Comptabilité, expertise comptable, finance et contrôle de gestion.",
    },
    {
      number: "05",
      name: "Ipac Bachelor Factory",
      logo: "/logo_Ipac.png",
      fields: "Commerce, gestion, finance, communication et logistique.",
    },
    {
      number: "06",
      name: "MBway",
      logo: "/MBway.png",
      fields:
        "Management, entrepreneuriat, ressources humaines, finance et commerce international.",
    },
    {
      number: "07",
      name: "ESMES Business School",
      logo: "/logo_ESMES_Business_School.png",
      fields:
        "Management, commerce, stratégie d’entreprise et développement international.",
    },
    {
      number: "08",
      name: "My French Degree",
      logo: "/logo_my_french_degree.png",
      fields:
        "Communication and Advertising (via ISCOM)\nFinance, Accounting, and Auditing (via IHECF)\nDigital Technology, Webmarketing, and Development (via MyDigitalSchool)\nManagement, Commerce, and Human Resources (via Pigier, Ipac Bachelor Factory, and MBway)\nTourism, Luxury, and Event Management (via École Internationale Tunon)",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* SECTION 1 : HERO À PROPOS */}
          <section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-24">
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl"></div>
            <div className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-tertiary-fixed/30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-7 flex flex-col gap-space-lg">
                  <div className="inline-flex items-center gap-space-sm self-start rounded-full bg-surface-container px-space-md py-space-xs shadow-sm">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Lyon International Education Consulting
                    </span>
                  </div>

                  <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold max-w-2xl leading-tight">
                    Un pont académique d’excellence entre <span className="text-secondary">Kinshasa et Lyon</span>.
                  </h1>

                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                    LIEC est né d’une conviction simple : chaque étudiant talentueux mérite un accompagnement structuré, honnête et méthodique pour réussir son intégration dans l’enseignement supérieur français.
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
                      href="#partenaires"
                    >
                      <span className="material-symbols-outlined mr-2 text-xl">handshake</span>
                      Nos partenaires &amp; écoles
                    </a>
                  </div>
                </div>

                {/* Col Droite : Image institutionnelle img_01.jpeg */}
                <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-surface-container-lowest h-[450px]">
                      <img
                        alt="Conseil académique LIEC"
                        className="w-full h-full object-cover object-top"
                        src="/img_01.jpeg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 p-space-md rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg flex items-center justify-between">
                        <div className="flex items-center gap-space-sm">
                          <img
                            src="/logo_LIEC.jpeg"
                            alt="Logo LIEC"
                            className="h-10 w-10 object-contain rounded-lg"
                          />
                          <div>
                            <p className="font-label-lg text-primary">Expertise Franco-Congolaise</p>
                            <p className="font-body-sm text-on-surface-variant">
                              Accompagnement éthique &amp; certifié
                            </p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-secondary-container/40 text-on-secondary-container font-label-sm font-bold">
                          LIEC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 : PARTENAIRES LIEC & ÉCOLES PARTENAIRES */}
          <section id="partenaires" className="w-full bg-surface-container-low py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-16">
              {/* Partie 1 : Partenaires Stratégiques LIEC */}
              <div>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                  <span className="font-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
                    Réseau &amp; Écosystème
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                    Partenaires LIEC
                  </h2>
                  <p className="font-body-lg text-on-surface-variant mt-space-xs">
                    Un réseau de partenaires stratégiques pour sécuriser le pré-financement, la formation préparatoire et le logement étudiant.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                  {liecPartners.map((partner, idx) => (
                    <div
                      key={idx}
                      className="group p-space-lg rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-secondary/20"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          {partner.logo ? (
                            <div className="h-12 w-12 rounded-2xl bg-white border border-surface-container shadow-sm p-1 flex items-center justify-center overflow-hidden">
                              <img
                                src={partner.logo}
                                alt={`Logo ${partner.name}`}
                                className="h-full w-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="h-12 w-12 rounded-2xl bg-primary-container text-tertiary-fixed flex items-center justify-center shadow-sm">
                              <span className="material-symbols-outlined text-2xl">
                                {partner.icon}
                              </span>
                            </div>
                          )}
                          {partner.category && (
                            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm font-bold uppercase tracking-wider">
                              {partner.category}
                            </span>
                          )}
                        </div>
                        <h3 className="font-headline-md text-primary font-extrabold mb-2">
                          {partner.name}{" "}
                          {partner.category && (
                            <span className="text-secondary font-semibold text-base">
                              ({partner.category})
                            </span>
                          )}
                        </h3>
                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                          {partner.description}
                        </p>
                        {partner.contacts && partner.contacts.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-surface-container-high/60">
                            <span className="text-xs font-bold text-primary flex items-center gap-1 mb-1.5">
                              <span className="material-symbols-outlined text-sm text-secondary">
                                contact_phone
                              </span>
                              Contact &amp; réservations :
                            </span>
                            <div className="flex flex-wrap gap-2 text-xs font-semibold">
                              {partner.contacts.map((c, cIdx) => (
                                <a
                                  key={cIdx}
                                  href={`tel:${c.tel}`}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-secondary/10 hover:text-secondary text-primary transition-colors"
                                >
                                  <span className="material-symbols-outlined text-xs">
                                    call
                                  </span>
                                  {c.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-5 pt-3 border-t border-surface-container-high flex items-center gap-1.5 text-xs font-bold text-primary">
                        <span className="material-symbols-outlined text-secondary text-base">
                          verified
                        </span>
                        <span>Partenaire Officiel LIEC</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partie 2 : Écoles Partenaires en France */}
              <div>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                  <span className="font-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
                    Enseignement Supérieur Français
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                    Écoles Partenaires
                  </h2>
                  <p className="font-body-lg text-on-surface-variant mt-space-xs">
                    Des grandes écoles et établissements reconnus en France offrant des cursus d’excellence adaptés aux ambitions de nos étudiants.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
                  {partnerSchools.map((school) => (
                    <div
                      key={school.number}
                      className="group p-6 rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-surface-container-high flex flex-col justify-between"
                    >
                      <div>
                        {/* Zone Logo de l'école */}
                        <div className="h-32 w-full rounded-2xl bg-white p-4 mb-5 flex items-center justify-center border border-surface-container shadow-inner">
                          <img
                            src={school.logo}
                            alt={`Logo ${school.name}`}
                            className="max-h-24 max-w-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-black text-secondary bg-secondary/10 px-2 py-0.5 rounded-md">
                            {school.number}
                          </span>
                          <h3 className="font-headline-sm text-primary font-extrabold leading-snug">
                            {school.name}
                          </h3>
                        </div>

                        {school.fields.includes("\n") ? (
                          <ul className="mt-2 space-y-1.5 text-xs text-on-surface-variant leading-relaxed">
                            {school.fields.split("\n").map((line, lIdx) => (
                              <li key={lIdx} className="flex items-start gap-1.5">
                                <span className="text-secondary font-bold text-sm leading-none mt-0.5">•</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="font-body-sm text-on-surface-variant leading-relaxed mt-2">
                            {school.fields}
                          </p>
                        )}
                      </div>

                      <div className="mt-5 pt-3 border-t border-surface-container flex items-center justify-between text-xs font-bold text-secondary">
                        <span>École partenaire</span>
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                          school
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 : DOUBLE PRÉSENCE LYON & KINSHASA */}
          <section className="w-full bg-surface py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
                  Notre Ancrage Géographique
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  Deux bureaux complémentaires pour une continuité totale
                </h2>
                <p className="font-body-lg text-on-surface-variant mt-space-xs">
                  Contrairement aux agences à distance, LIEC t’accompagne au départ à Kinshasa et t’accueille à l’arrivée en France depuis Lyon.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                {/* Kinshasa Card */}
                <div className="rounded-3xl bg-surface-container-low p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-space-md">
                      <img
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                        alt="Bureau LIEC Kinshasa"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-container text-tertiary-fixed font-label-sm font-bold">
                        Pôle Départ • Afrique Centrale
                      </div>
                    </div>
                    <h3 className="font-headline-md text-primary font-bold mb-2">
                      Bureau de Kinshasa — Préparation &amp; Familles
                    </h3>
                    <p className="font-body-md text-on-surface-variant leading-relaxed mb-3">
                      Point de rencontre privilégié pour les étudiants et leurs parents. Nous y réalisons les bilans d’orientation, la constitution des dossiers académiques, les cours LIEC-France PREPA et les simulations d’entretiens Campus France.
                    </p>
                    <p className="font-body-sm text-primary font-semibold mb-4">
                      📍 Avenue Tropique, n°27/419, 3ème rue, Immeuble MAMAN NYEMBO, Q/ Résidentiel, C/ Limete.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high flex items-center gap-2 text-secondary font-label-md font-bold">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>Rendez-vous physiques &amp; suivi personnalisé des parents</span>
                  </div>
                </div>

                {/* Lyon Card */}
                <div className="rounded-3xl bg-surface-container-low p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-space-md">
                      <img
                        src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=1000&q=80"
                        alt="Siège LIEC Lyon France"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-secondary text-surface font-label-sm font-bold">
                        Pôle Arrivée • France
                      </div>
                    </div>
                    <h3 className="font-headline-md text-primary font-bold mb-2">
                      Siège de Lyon — Veille Universitaire &amp; Installation
                    </h3>
                    <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">
                      Au cœur du 2e pôle universitaire français, notre équipe lyonnaise assure la veille sur les formations, facilite la recherche de logement étudiant et accompagne les démarches administratives dès l’arrivée sur le territoire français.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container-high flex items-center gap-2 text-secondary font-label-md font-bold">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>Ancrage direct dans l’écosystème universitaire français</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4 : LE PROGRAMME LIEC-FRANCE PREPA */}
          <PrepaSection />

          {/* SECTION 5 : NOS 4 PILIERS DÉONTOLOGIQUES */}
          <section className="w-full bg-surface py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
                  Charte de Confiance
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  Nos engagements envers les étudiants et leurs parents
                </h2>
                <p className="font-body-lg text-on-surface-variant mt-space-xs">
                  Parce qu’un projet d’études à l’étranger engage l’avenir d’un jeune et les efforts de toute une famille, nous plaçons l’éthique au sommet de notre action.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {values.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-surface-container-lowest text-secondary flex items-center justify-center mb-space-md shadow-sm">
                        <span className="material-symbols-outlined text-2xl">{val.icon}</span>
                      </div>
                      <h3 className="font-headline-sm text-primary font-bold mb-2">
                        {val.title}
                      </h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-surface-container-high flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      <span>Engagement LIEC</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 6 : CAPITAL HUMAIN */}
          <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
                  Capital Humain
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  Des spécialistes dédiés à chaque étape de ta réussite
                </h2>
                <p className="font-body-lg text-on-surface-variant mt-space-xs">
                  Une équipe pluridisciplinaire réunissant conseillers d’orientation, anciens diplômés en France et formateurs universitaires.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-72 w-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-primary-container/90 text-tertiary-fixed font-label-sm font-bold">
                          {member.badge}
                        </div>
                      </div>
                      <div className="p-space-lg">
                        <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                          {member.role}
                        </p>
                        <h3 className="font-headline-sm text-primary font-bold mb-2">
                          {member.name}
                        </h3>
                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 7 : APPEL À L'ACTION FINAL */}
          <CtaBannerSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

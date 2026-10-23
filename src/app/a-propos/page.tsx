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
      image: "/img_02.jpeg",
      badge: "Bureau Kinshasa • RDC",
    },
    {
      name: "Mentorat LIEC-France PREPA",
      role: "Pédagogie & Méthodologie Universitaire",
      bio: "Nos formateurs et mentors accompagnent la cohorte PREPA sur l'expression écrite, l'éloquence, la méthodologie de la dissertation et l'autonomie de recherche.",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
      badge: "Corps Pédagogique",
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
                      href="#liec-france-prepa"
                    >
                      <span className="material-symbols-outlined mr-2 text-xl">workspace_premium</span>
                      Programme PREPA
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

          {/* SECTION 2 : DOUBLE PRÉSENCE LYON & KINSHASA */}
          <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
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
                <div className="rounded-3xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
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
                    <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">
                      Point de rencontre privilégié pour les étudiants et leurs parents. Nous y réalisons les bilans d’orientation, la constitution des dossiers académiques, les cours LIEC-France PREPA et les simulations d’entretiens Campus France.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-surface-container flex items-center gap-2 text-secondary font-label-md font-bold">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>Rendez-vous physiques &amp; suivi personnalisé des parents</span>
                  </div>
                </div>

                {/* Lyon Card */}
                <div className="rounded-3xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
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
                  <div className="pt-3 border-t border-surface-container flex items-center gap-2 text-secondary font-label-md font-bold">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>Ancrage direct dans l’écosystème universitaire français</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 : LE PROGRAMME LIEC-FRANCE PREPA */}
          <PrepaSection />

          {/* SECTION 4 : NOS 4 PILIERS DÉONTOLOGIQUES */}
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

          {/* SECTION 5 : CAPITAL HUMAIN */}
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

          {/* SECTION 6 : APPEL À L'ACTION FINAL */}
          <CtaBannerSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

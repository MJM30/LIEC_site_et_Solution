"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const faqs: FaqItem[] = [
    {
      question:
        "LIEC garantit-il l’admission dans une université ou l’obtention du visa ?",
      answer:
        "Non, et aucune structure sérieuse ne peut le prétendre. Les décisions d’admission relèvent exclusivement de la souveraineté des commissions pédagogiques des universités, et les décisions de visa relèvent uniquement des consulats généraux de France. Le rôle de LIEC est d’optimiser scrupuleusement la qualité académique, la cohérence et la rigueur de ton dossier pour maximiser tes chances objectives de réussite.",
    },
    {
      question:
        "À quel moment faut-il commencer ses démarches pour la rentrée de septembre ?",
      answer:
        "Nous recommandons d’entamer la réflexion dès les mois d’octobre ou novembre de l’année précédente (soit 8 à 10 mois avant le départ). Les procédures officielles Campus France (Études en France) ouvrent généralement dès l’automne avec des dates limites rigoureuses fixées entre décembre et janvier pour de nombreuses filières.",
    },
    {
      question:
        "Qu’est-ce qui distingue le programme LIEC-France PREPA d’un simple coaching ?",
      answer:
        "PREPA n'est pas une simple relecture administrative de CV. C'est un programme préparatoire d'immersion pédagogique centré sur les compétences réelles requises dans les amphithéâtres et salles de TD en France : rigueur de l'argumentation, techniques de dissertation universitaire, maîtrise des outils de recherche documentaire et simulations orales.",
    },
    {
      question:
        "Comment se déroule le premier entretien avec un conseiller LIEC ?",
      answer:
        "Le premier échange dure environ 30 minutes (en visioconférence ou au bureau de Kinshasa). Il s'agit d'un état des lieux gratuit et sans engagement : analyse de ton relevé de notes, de ton parcours antérieur, de ton projet professionnel envisagé et estimation réaliste de la faisabilité de ta candidature.",
    },
  ];

  // Le premier item est ouvert par défaut comme dans le index.html original
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-surface py-space-xl lg:py-24">
      <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
            Questions Fréquentes
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
            Tout savoir sur l'accompagnement LIEC
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
            Des réponses claires pour lever tous vos doutes avant de démarrer.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="flex flex-col gap-space-md" id="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="rounded-2xl bg-surface-container-low transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                  className="faq-toggle w-full p-space-lg flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-secondary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-content px-space-lg pb-space-lg text-on-surface-variant font-body-md text-body-md leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

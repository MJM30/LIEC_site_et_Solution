"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Limite le nombre de chiffres (digits) saisis à 14 au maximum
function limitDigits(val: string, maxDigits = 14) {
  let count = 0;
  let result = "";
  for (const char of val) {
    if (/\d/.test(char)) {
      if (count < maxDigits) {
        count++;
        result += char;
      }
    } else {
      result += char;
    }
  }
  return result;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    studyLevel: "",
    field: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`[LIEC] Demande de 1er entretien d'orientation - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Bonjour l'équipe LIEC,\n\nJe souhaite solliciter un premier entretien d'orientation :\n\n` +
      `• Nom & Prénom : ${formData.fullName}\n` +
      `• Numéro WhatsApp : ${formData.whatsapp}\n` +
      `• Adresse Email : ${formData.email}\n` +
      `• Niveau d'études visé : ${formData.studyLevel || "Non renseigné"}\n` +
      `• Domaine souhaité : ${formData.field || "Non renseigné"}\n` +
      `• Précisions / Message :\n${formData.message || "Aucune précision particulière."}\n\n` +
      `Merci de me recontacter sous 24h.\n${formData.fullName}`
    );
    const generatedMailto = `mailto:contacts@liecconsulting.com?subject=${subject}&body=${body}`;
    setMailtoUrl(generatedMailto);

    const waText = encodeURIComponent(
      `Bonjour LIEC, je viens d'envoyer une demande de 1er entretien d'orientation.\n` +
      `Nom : ${formData.fullName}\nWhatsApp : ${formData.whatsapp}\nEmail : ${formData.email}\nNiveau : ${formData.studyLevel}\nDomaine : ${formData.field}`
    );
    setWhatsappUrl(`https://wa.me/243803615543?text=${waText}`);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setSubmitted(true);

      // Si pas de SMTP configuré sur le serveur, on déclenche le client email automatiquement
      if (result?.method === "fallback") {
        window.location.href = generatedMailto;
      }
    } catch {
      setSubmitted(true);
      window.location.href = generatedMailto;
    } finally {
      setLoading(false);
    }
  };

  const neuCard =
    "bg-[#eef2fc] rounded-[42px] shadow-[16px_16px_32px_#cad4e8,-16px_-16px_32px_#ffffff] border border-white/60";
  const neuInputWrapper =
    "flex items-center gap-3 px-6 py-4 rounded-full bg-[#eef2fc] shadow-[inset_6px_6px_12px_#cbd5ea,inset_-6px_-6px_12px_#ffffff] focus-within:ring-2 focus-within:ring-secondary/40 transition-all";
  const neuTextareaWrapper =
    "flex items-start gap-3 px-6 py-4 rounded-[28px] bg-[#eef2fc] shadow-[inset_6px_6px_12px_#cbd5ea,inset_-6px_-6px_12px_#ffffff] focus-within:ring-2 focus-within:ring-secondary/40 transition-all";

  const interviewSteps = [
    {
      icon: "description",
      step: "01",
      title: "Analyse de ton profil académique",
      description:
        "Nous passons en revue tes relevés de notes, ton diplôme actuel et ton parcours pour évaluer tes points forts.",
    },
    {
      icon: "explore",
      step: "02",
      title: "Ciblage des formations en France",
      description:
        "Nous identifions ensemble les universités, écoles ou programmes adaptés à ton projet professionnel et à ton budget.",
    },
    {
      icon: "event_available",
      step: "03",
      title: "Feuille de route & calendrier personnalisé",
      description:
        "Tu repars avec un plan d’action clair sur les 11 étapes LIEC pour lancer ton ouverture de dossier sans retard.",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* SECTION 1 : HERO CONTACT & DIAGNOSTIC INITIAL */}
          <section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-20">
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl"></div>
            <div className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-tertiary-fixed/30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-sm self-start rounded-full bg-surface-container px-space-md py-space-xs shadow-sm">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Contact &amp; Diagnostic Initial • Lyon &amp; Kinshasa
                    </span>
                  </div>

                  <h1 className="font-display-lg text-display-lg text-primary tracking-tight font-extrabold max-w-2xl leading-tight">
                    Construisons <span className="text-secondary">ton projet d’études</span> dès aujourd’hui.
                  </h1>

                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                    Que tu sois étudiant ou parent d’élève, nos conseillers de Lyon et de Kinshasa sont à ton écoute pour démarrer ton dossier et répondre à toutes tes questions.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-xl">
                    <div className="p-4 rounded-2xl bg-surface-container-low flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-secondary text-surface flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <div>
                        <p className="font-label-sm text-on-surface-variant uppercase">
                          Téléphone / WhatsApp
                        </p>
                        <a
                          href="tel:+243803615543"
                          className="font-label-lg text-primary font-bold hover:text-secondary transition-colors"
                        >
                          +243 803 615 543
                        </a>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-surface-container-low flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary-container text-tertiary-fixed flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <p className="font-label-sm text-on-surface-variant uppercase">
                          Email Officiel
                        </p>
                        <a
                          href="mailto:contacts@liecconsulting.com"
                          className="font-label-lg text-primary font-bold hover:text-secondary transition-colors break-all"
                        >
                          contacts@liecconsulting.com
                        </a>
                      </div>
                    </div>

                    <div className="sm:col-span-2 p-4 rounded-2xl bg-surface-container-low flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <div>
                        <p className="font-label-sm text-on-surface-variant uppercase font-bold">
                          Adresse à Kinshasa
                        </p>
                        <p className="font-body-sm text-primary font-semibold leading-snug mt-0.5">
                          Avenue Tropique, n°27/419, 3ème rue, Immeuble MAMAN NYEMBO, Q/ Résidentiel, C/ Limete.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Hero Contact */}
                <div className="lg:col-span-5 relative mt-space-md lg:mt-0">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl bg-surface-container-lowest h-[380px]">
                    <img
                      alt="Étudiante noire souriante lors de son accompagnement LIEC"
                      src="/pole_01_ai.jpg"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 p-space-md rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-secondary text-2xl">
                          schedule
                        </span>
                        <div>
                          <p className="font-label-lg text-primary">Réponse sous 24h</p>
                          <p className="font-body-sm text-on-surface-variant">
                            Premier échange sans engagement
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-tertiary-fixed text-primary font-label-sm font-bold">
                        Gratuit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 : FORMULAIRE STYLE NEUMORPHISM & BUREAUX */}
          <section id="formulaire" className="w-full bg-[#eef2fc] py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Carte Formulaire Neumorphism (7 colonnes) */}
                <div className={`lg:col-span-7 ${neuCard} p-7 sm:p-11`}>
                  {/* Médaillon Logo Circulaire Neumorphique */}
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className="h-20 w-20 rounded-full bg-[#eef2fc] p-2 shadow-[8px_8px_16px_#c6d0e6,-8px_-8px_16px_#ffffff] border-4 border-white flex items-center justify-center overflow-hidden mb-4">
                      <img
                        src="/logo_LIEC (1).png"
                        alt="Logo LIEC"
                        className="h-full w-full object-contain rounded-full"
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-1">
                      Étape 01 • Ouverture du dossier
                    </span>
                    <h2 className="font-headline-lg text-primary font-extrabold">
                      Premier entretien d’orientation
                    </h2>
                    <p className="font-body-sm text-on-surface-variant mt-1 max-w-md">
                      Remplis ce formulaire rapide pour être recontacté sous 24h par un conseiller LIEC (Lyon ou Kinshasa).
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-8 rounded-3xl bg-[#eef2fc] shadow-[inset_6px_6px_12px_#cbd5ea,inset_-6px_-6px_12px_#ffffff] text-center flex flex-col items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-secondary/15 text-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl">
                          verified
                        </span>
                      </div>
                      <h3 className="font-headline-md text-primary font-bold">
                        Ta demande d’entretien est enregistrée !
                      </h3>
                      <p className="font-body-md text-on-surface-variant max-w-md leading-relaxed">
                        Destinataire officiel : <a href="mailto:contacts@liecconsulting.com" className="text-primary font-bold underline">contacts@liecconsulting.com</a>.
                        Un conseiller académique LIEC te contactera sous 24h par email ou WhatsApp.
                      </p>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full pt-2">
                        {mailtoUrl && (
                          <a
                            href={mailtoUrl}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-surface font-label-md font-bold shadow-[4px_4px_10px_#b8c4dd,-4px_-4px_10px_#ffffff] hover:opacity-90 transition-all text-xs"
                          >
                            <span className="material-symbols-outlined text-base">mail</span>
                            Ouvrir mon email vers contacts@liecconsulting.com
                          </a>
                        )}
                        {whatsappUrl && (
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-surface font-label-md font-bold shadow-[4px_4px_10px_#b8c4dd,-4px_-4px_10px_#ffffff] hover:bg-primary transition-all text-xs"
                          >
                            <span className="material-symbols-outlined text-base">chat</span>
                            Notifier par WhatsApp (+243 803 615 543)
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: "",
                            whatsapp: "",
                            email: "",
                            studyLevel: "",
                            field: "",
                            message: "",
                          });
                        }}
                        className="mt-2 text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors underline"
                      >
                        Envoyer une nouvelle demande
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className={neuInputWrapper}>
                        <span className="material-symbols-outlined text-secondary text-xl">
                          person
                        </span>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Nom & Prénom complet *"
                          className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                        />
                      </div>

                      <div className={neuInputWrapper}>
                        <span className="material-symbols-outlined text-secondary text-xl">
                          call
                        </span>
                        <input
                          type="tel"
                          required
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              whatsapp: limitDigits(e.target.value, 14),
                            })
                          }
                          maxLength={20}
                          placeholder="Numéro de téléphone / WhatsApp (max 14 chiffres) *"
                          className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                        />
                      </div>

                      <div className={neuInputWrapper}>
                        <span className="material-symbols-outlined text-secondary text-xl">
                          mail
                        </span>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Adresse Email *"
                          className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                        />
                      </div>

                      <div className={neuInputWrapper}>
                        <span className="material-symbols-outlined text-secondary text-xl">
                          school
                        </span>
                        <select
                          required
                          name="studyLevel"
                          value={formData.studyLevel}
                          onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                          className="w-full bg-transparent border-none focus:outline-none text-on-surface font-body-md"
                        >
                          <option value="">Niveau d’études visé en France *</option>
                          <option value="B1">Licence 1 / Bachelor 1</option>
                          <option value="B2-B3">Licence 2 / Licence 3 / Bachelor 3</option>
                          <option value="M1-M2">Master 1 / Master 2 / MSc</option>
                          <option value="Ingenieur">Cycle Ingénieur / Grande École</option>
                        </select>
                      </div>

                      <div className={neuInputWrapper}>
                        <span className="material-symbols-outlined text-secondary text-xl">
                          work
                        </span>
                        <input
                          type="text"
                          required
                          name="field"
                          value={formData.field}
                          onChange={(e) => setFormData({ ...formData, field: e.target.value })}
                          placeholder="Domaine souhaité (ex: Développement Web, Management...) *"
                          className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                        />
                      </div>

                      <div className={neuTextareaWrapper}>
                        <span className="material-symbols-outlined text-secondary text-xl mt-1">
                          chat
                        </span>
                        <textarea
                          rows={3}
                          name="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Précisions sur ton projet ou tes questions..."
                          className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md resize-none"
                        />
                      </div>

                      <div className="pt-2 flex flex-col items-center gap-3">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-4 rounded-full bg-secondary hover:bg-primary text-surface font-label-lg text-base font-bold tracking-wide shadow-[6px_6px_16px_#b8c4dd,-6px_-6px_16px_#ffffff] transition-all duration-200 cursor-pointer disabled:opacity-50"
                        >
                          {loading ? "Envoi en cours..." : "Envoyer ma demande d’entretien"}
                        </button>
                        <p className="text-xs text-on-surface-variant text-center">
                          Tu souhaites directement remplir la fiche d’inscription PREPA ?{" "}
                          <Link
                            href="/demarrer-mon-projet"
                            className="text-primary font-bold hover:underline"
                          >
                            Ouvrir l’Enrollment Form 2027-2028
                          </Link>
                        </p>
                      </div>
                    </form>
                  )}
                </div>

                {/* Colonne Latérale : Nos 2 Bureaux (5 colonnes) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="p-8 rounded-[36px] bg-primary-container text-surface shadow-[12px_12px_24px_#c6d0e6,-8px_-8px_20px_#ffffff]">
                    <div className="flex items-center gap-2 text-tertiary-fixed font-label-md uppercase font-bold mb-2">
                      <span className="material-symbols-outlined">location_city</span>
                      <span>Siège France — Lyon</span>
                    </div>
                    <h3 className="font-headline-sm font-bold mb-2">
                      Pôle Orientation &amp; Accueil Étudiants
                    </h3>
                    <p className="font-body-sm text-surface-variant leading-relaxed mb-4">
                      Suivi des admissions universitaires, partenariats écoles, recherche de logement et accueil des étudiants à leur arrivée à Lyon.
                    </p>
                    <div className="text-xs text-secondary-fixed font-semibold">
                      📍 Lyon, Métropole de Lyon (France)
                    </div>
                  </div>

                  <div className={`${neuCard} p-8`}>
                    <div className="flex items-center gap-2 text-secondary font-label-md uppercase font-bold mb-2">
                      <span className="material-symbols-outlined">public</span>
                      <span>Bureau RDC — Kinshasa</span>
                    </div>
                    <h3 className="font-headline-sm text-primary font-bold mb-2">
                      Pôle Dossiers, PREPA &amp; Familles
                    </h3>
                    <p className="font-body-sm text-on-surface-variant leading-relaxed mb-4">
                      Entretiens d’orientation en présentiel, réunions d’information avec les parents, préparation Campus France et sessions LIEC-France PREPA.
                    </p>
                    <div className="flex flex-col gap-1.5 text-xs text-primary font-semibold">
                      <div>
                        📍 Avenue Tropique, n°27/419, 3ème rue, Immeuble MAMAN NYEMBO, Q/ Résidentiel, C/ Limete.
                      </div>
                      <div>📞 +243 803 615 543</div>
                      <div>✉️ contacts@liecconsulting.com</div>
                    </div>
                  </div>

                  <div className="p-6 rounded-[28px] bg-[#eef2fc] shadow-[inset_5px_5px_10px_#cbd5ea,inset_-5px_-5px_10px_#ffffff] text-primary font-body-sm leading-relaxed">
                    <strong className="block font-bold mb-1">🔒 Confidentialité garantie</strong>
                    Tes informations personnelles et scolaires sont strictement confidentielles et utilisées uniquement pour l’étude de ton dossier académique.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 : COMMENT SE DÉROULE LE PREMIER ENTRETIEN ? (FOND CRÈME #FFF4E7) */}
          <section className="w-full bg-[#FFF4E7] py-space-xl lg:py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-md uppercase tracking-wider text-secondary font-bold mb-space-xs">
                  Méthodologie LIEC
                </span>
                <h2 className="font-headline-xl text-primary font-bold">
                  Que se passe-t-il après l’envoi de ta demande ?
                </h2>
                <p className="font-body-lg text-on-surface-variant mt-space-xs">
                  Un premier diagnostic structuré de 30 minutes pour poser des bases solides.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {interviewSteps.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display-lg text-3xl text-secondary/30 font-black">
                          {item.step}
                        </span>
                        <div className="h-11 w-11 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                        </div>
                      </div>
                      <h3 className="font-headline-sm text-primary font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

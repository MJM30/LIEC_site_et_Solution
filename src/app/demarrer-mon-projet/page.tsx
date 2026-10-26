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

export default function DemarrerMonProjetPage() {
  const [submitted, setSubmitted] = useState(false);
  const [derniereAnneeUniv, setDerniereAnneeUniv] = useState("");
  const [autreUnivText, setAutreUnivText] = useState("");
  const [passeportValide, setPasseportValide] = useState("");
  const [tuteurContact, setTuteurContact] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Classes Neumorphism adaptées à la charte graphique LIEC (#eef2fc / #002452 / #006a61 / #ffdf9e)
  const neuCard =
    "bg-[#eef2fc] rounded-[42px] shadow-[16px_16px_32px_#cad4e8,-16px_-16px_32px_#ffffff] border border-white/60";
  const neuInputWrapper =
    "flex items-center gap-3 px-6 py-4 rounded-full bg-[#eef2fc] shadow-[inset_6px_6px_12px_#cbd5ea,inset_-6px_-6px_12px_#ffffff] focus-within:ring-2 focus-within:ring-secondary/40 transition-all";
  const neuRadioDefault =
    "flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#eef2fc] shadow-[6px_6px_12px_#cbd5ea,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#cbd5ea,inset_-4px_-4px_8px_#ffffff] text-on-surface cursor-pointer transition-all";
  const neuRadioSelected =
    "flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#eef2fc] shadow-[inset_6px_6px_12px_#cbd5ea,inset_-6px_-6px_12px_#ffffff] ring-2 ring-secondary text-primary font-bold cursor-pointer transition-all";

  return (
    <>
      <Header />
      <main className="w-full pt-24 pb-20 bg-[#eef2fc] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-2xl my-8">
          {submitted ? (
            <div className={`${neuCard} p-8 sm:p-12 text-center flex flex-col items-center gap-5`}>
              <div className="h-24 w-24 rounded-full bg-[#eef2fc] shadow-[8px_8px_16px_#cad4e8,-8px_-8px_16px_#ffffff] flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-5xl">verified</span>
              </div>
              <h2 className="font-headline-lg text-primary font-extrabold">
                Inscription enregistrée avec succès !
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-md leading-relaxed">
                Merci d’avoir complété le{" "}
                <strong className="text-primary">
                  LIEC - France Prépa ENROLLMENT FORM (2027-2028)
                </strong>
                . Nos conseillers de Lyon et Kinshasa te contacteront très rapidement.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 w-full">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setDerniereAnneeUniv("");
                    setAutreUnivText("");
                    setPasseportValide("");
                    setTuteurContact("");
                  }}
                  className="px-8 py-4 rounded-full bg-secondary text-surface font-label-lg font-bold shadow-[6px_6px_14px_#b8c4dd,-6px_-6px_14px_#ffffff] hover:bg-primary transition-all"
                >
                  Nouvelle réponse
                </button>
                <Link
                  href="/"
                  className="px-8 py-4 rounded-full bg-[#eef2fc] text-primary font-label-lg font-bold shadow-[6px_6px_12px_#cbd5ea,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#cbd5ea,inset_-4px_-4px_8px_#ffffff] transition-all"
                >
                  Retour à l’accueil
                </Link>
              </div>
            </div>
          ) : (
            <div className={`${neuCard} p-7 sm:p-12`}>
              {/* Logo Circulaire Neumorphique en haut */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="h-24 w-24 rounded-full bg-[#eef2fc] p-2 shadow-[8px_8px_16px_#c6d0e6,-8px_-8px_16px_#ffffff] border-4 border-white flex items-center justify-center overflow-hidden mb-5">
                  <img
                    src="/logo_LIEC (1).png"
                    alt="Logo LIEC"
                    className="h-full w-full object-contain rounded-full"
                  />
                </div>

                <h1 className="font-headline-lg sm:text-3xl text-primary font-extrabold tracking-tight">
                  LIEC - France Prépa
                </h1>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-secondary mt-1">
                  ENROLLMENT FORM • 2027-2028
                </p>
                <p className="text-xs text-on-surface-variant mt-2">
                  Étude en France •{" "}
                  <span className="text-error font-semibold">* Indicates required question</span>
                </p>
              </div>

              {/* Formulaire Neumorphique */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* 1. Nom complet */}
                <div className="flex flex-col gap-2">
                  <label className="pl-4 text-xs font-bold uppercase tracking-wider text-primary">
                    1. Nom complet <span className="text-error">*</span>
                  </label>
                  <div className={neuInputWrapper}>
                    <span className="material-symbols-outlined text-secondary text-xl">
                      person
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Nom complet *"
                      className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                    />
                  </div>
                </div>

                {/* 2. Prénom */}
                <div className="flex flex-col gap-2">
                  <label className="pl-4 text-xs font-bold uppercase tracking-wider text-primary">
                    2. Prénom <span className="text-error">*</span>
                  </label>
                  <div className={neuInputWrapper}>
                    <span className="material-symbols-outlined text-secondary text-xl">
                      badge
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Prénom *"
                      className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                    />
                  </div>
                </div>

                {/* 3. Année du bac */}
                <div className="flex flex-col gap-2">
                  <label className="pl-4 text-xs font-bold uppercase tracking-wider text-primary">
                    3. Année du bac <span className="text-error">*</span>
                  </label>
                  <div className={neuInputWrapper}>
                    <span className="material-symbols-outlined text-secondary text-xl">
                      calendar_month
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Année d'obtention du bac (ex: 2025) *"
                      className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                    />
                  </div>
                </div>

                {/* 4. Dernière année à l'université */}
                <div className="flex flex-col gap-3 pt-1">
                  <div className="pl-4">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary block">
                      4. Dernière année à l&apos;université <span className="text-error">*</span>
                    </label>
                    <span className="text-[11px] text-on-surface-variant">
                      Mark only one oval (Une seule réponse possible)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Pré-universitaire, Oui",
                      "Post-universitaire, Oui",
                      "Pré-universitaire, Non",
                      "Post-universitaire, Non",
                    ].map((option) => {
                      const active = derniereAnneeUniv === option;
                      return (
                        <label
                          key={option}
                          className={active ? neuRadioSelected : neuRadioDefault}
                        >
                          <input
                            type="radio"
                            name="derniereAnneeUniv"
                            value={option}
                            required
                            checked={active}
                            onChange={(e) => setDerniereAnneeUniv(e.target.value)}
                            className="h-4 w-4 accent-secondary"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      );
                    })}
                  </div>

                  {/* Option Other */}
                  <div className={ neuInputWrapper }>
                    <label className="flex items-center gap-2 cursor-pointer shrink-0 text-primary font-semibold text-sm">
                      <input
                        type="radio"
                        name="derniereAnneeUniv"
                        value="Other"
                        required
                        checked={derniereAnneeUniv === "Other"}
                        onChange={(e) => setDerniereAnneeUniv(e.target.value)}
                        className="h-4 w-4 accent-secondary"
                      />
                      <span>Other :</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Précisez si autre..."
                      value={autreUnivText}
                      onFocus={() => setDerniereAnneeUniv("Other")}
                      onChange={(e) => {
                        setDerniereAnneeUniv("Other");
                        setAutreUnivText(e.target.value);
                      }}
                      required={derniereAnneeUniv === "Other"}
                      className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 text-sm"
                    />
                  </div>
                </div>

                {/* 5. Activité actuelle */}
                <div className="flex flex-col gap-2">
                  <label className="pl-4 text-xs font-bold uppercase tracking-wider text-primary">
                    5. Activité actuelle <span className="text-error">*</span>
                  </label>
                  <div className={neuInputWrapper}>
                    <span className="material-symbols-outlined text-secondary text-xl">
                      work
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Activité actuelle (Étudiant, salarié...) *"
                      className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                    />
                  </div>
                </div>

                {/* 6. Titre de voyage ou passeport */}
                <div className="flex flex-col gap-3 pt-1">
                  <div className="pl-4">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary block">
                      6. Titre de voyage ou passeport ayant une durée de 3 ans minimum ?{" "}
                      <span className="text-error">*</span>
                    </label>
                    <span className="text-[11px] text-on-surface-variant">
                      Mark only one oval (Une seule réponse possible)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {["Oui", "Non"].map((option) => {
                      const active = passeportValide === option;
                      return (
                        <label
                          key={option}
                          className={active ? neuRadioSelected : neuRadioDefault}
                        >
                          <input
                            type="radio"
                            name="passeportValide"
                            value={option}
                            required
                            checked={active}
                            onChange={(e) => setPasseportValide(e.target.value)}
                            className="h-4 w-4 accent-secondary"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* 7. Contacts du tuteur ou parent */}
                <div className="flex flex-col gap-2">
                  <label className="pl-4 text-xs font-bold uppercase tracking-wider text-primary flex items-center justify-between">
                    <span>7. Contacts du tuteur ou parent</span>
                    <span className="text-[11px] font-normal text-on-surface-variant">
                      (max 14 chiffres)
                    </span>
                  </label>
                  <div className={neuInputWrapper}>
                    <span className="material-symbols-outlined text-secondary text-xl">
                      family_restroom
                    </span>
                    <input
                      type="text"
                      name="tuteurContact"
                      value={tuteurContact}
                      onChange={(e) => setTuteurContact(limitDigits(e.target.value, 14))}
                      maxLength={20}
                      placeholder="Numéro de téléphone du parent ou tuteur (max 14 chiffres)"
                      className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                    />
                  </div>
                </div>

                {/* 8. Contacts de l'étudiant (email et numéro) */}
                <div className="flex flex-col gap-2">
                  <label className="pl-4 text-xs font-bold uppercase tracking-wider text-primary">
                    8. Contacts de l&apos;étudiant (email et numéro){" "}
                    <span className="text-error">*</span>
                  </label>
                  <div className={neuInputWrapper}>
                    <span className="material-symbols-outlined text-secondary text-xl">
                      contact_phone
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Email et numéro WhatsApp *"
                      className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                    />
                  </div>
                </div>

                {/* 9. Nationalité */}
                <div className="flex flex-col gap-2">
                  <label className="pl-4 text-xs font-bold uppercase tracking-wider text-primary">
                    9. Nationalité <span className="text-error">*</span>
                  </label>
                  <div className={neuInputWrapper}>
                    <span className="material-symbols-outlined text-secondary text-xl">
                      public
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Votre nationalité *"
                      className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/60 font-body-md"
                    />
                  </div>
                </div>

                {/* Bouton Principal Style Neumorphism */}
                <div className="pt-4 flex flex-col items-center gap-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-secondary hover:bg-primary text-surface font-label-lg text-base font-bold tracking-wide shadow-[6px_6px_16px_#b8c4dd,-6px_-6px_16px_#ffffff] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)] transition-all duration-200 cursor-pointer"
                  >
                    Valider mon inscription
                  </button>

                  <p className="text-xs text-on-surface-variant text-center">
                    Besoin d’un renseignement d’abord ?{" "}
                    <Link href="/contact" className="text-primary font-bold hover:underline">
                      Contacter un conseiller
                    </Link>{" "}
                    ou{" "}
                    <Link href="/" className="text-secondary font-bold hover:underline">
                      Retour à l’accueil
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

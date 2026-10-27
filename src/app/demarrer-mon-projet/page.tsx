"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DemarrerMonProjetPage() {
  // 1. Informations du Candidat
  const [nomComplet, setNomComplet] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("+243 ");
  const [paysRecrutement, setPaysRecrutement] = useState("🇨🇩 RDC (Kinshasa / Lubumbashi / Goma)");
  const [villeOrigine, setVilleOrigine] = useState("Kinshasa");
  const [destination] = useState("Lyon (Exclusivement)");

  // 2. Informations du Parent & Famille
  const [nomParent, setNomParent] = useState("");
  const [telephoneParent, setTelephoneParent] = useState("+243 ");

  // 3. Parcours Académique & Activité
  const [anneeDiplome, setAnneeDiplome] = useState("2024");
  const [activiteActuelle, setActiviteActuelle] = useState("Étudiant / Stagiaire");
  const [derniereAnneeUniv, setDerniereAnneeUniv] = useState("2024");

  // 4. École Partenaire & Budget
  const [ecolePartenaire, setEcolePartenaire] = useState(
    "2. MyDigitalSchool Lyon (Web dev, digital & UX/UI)"
  );
  const [budgetAnnuel, setBudgetAnnuel] = useState("8 500 € – 10 000 € / an");

  // Submission States
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [candidateRef, setCandidateRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const payload = {
      full_name: nomComplet.trim(),
      email: email.trim(),
      phone: telephone.trim(),
      country: paysRecrutement,
      ville_origine: villeOrigine.trim(),
      destination,
      parent_name: nomParent.trim(),
      parent_phone: telephoneParent.trim(),
      annee_diplome: anneeDiplome.trim(),
      activite_actuelle: activiteActuelle.trim(),
      derniere_annee_univ: derniereAnneeUniv.trim(),
      program: ecolePartenaire,
      budget_annuel: budgetAnnuel,
      source: "LIEC - France Prépa ENROLLMENT FORM • 2027-2028",
    };

    try {
      // 1. Try forwarding via internal API
      let res = await fetch("/api/prepa-enrollment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 2. Direct fallback to LIEC-ONE dashboard API (port 3001) if internal gateway returns an error
      if (!res.ok) {
        try {
          const directRes = await fetch("http://localhost:3001/api/candidats", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (directRes.ok) {
            res = directRes;
          }
        } catch {}
      }

      const data = await res.json();

      if (res.ok && (data.ok || data.success)) {
        setCandidateRef(data.ref || "#CAN-2025-NEW");
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setErrorMsg(
          data.error ||
            "Une erreur est survenue lors de l'enregistrement de votre candidature. Veuillez réessayer."
        );
      }
    } catch (err: any) {
      // In case of network interruption, attempt direct client POST to dashboard
      try {
        const directRes = await fetch("http://localhost:3001/api/candidats", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const directData = await directRes.json();
        if (directRes.ok && directData.ok) {
          setCandidateRef(directData.ref || "#CAN-2025-NEW");
          setSubmitted(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      } catch {}

      setErrorMsg(
        "Impossible de joindre le serveur. Assurez-vous que le dashboard LIEC-ONE est accessible."
      );
    } finally {
      setLoading(false);
    }
  };

  // Neumorphism styling tokens
  const neuCard =
    "bg-[#eef2fc] rounded-[36px] shadow-[16px_16px_32px_#cad4e8,-16px_-16px_32px_#ffffff] border border-white/70";
  const neuSectionBox =
    "p-6 rounded-3xl bg-[#eef2fc] shadow-[8px_8px_18px_#cbd5ea,-8px_-8px_18px_#ffffff] border border-white/50 space-y-4";
  const neuInputWrapper =
    "flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#eef2fc] shadow-[inset_5px_5px_10px_#cbd5ea,inset_-5px_-5px_10px_#ffffff] focus-within:ring-2 focus-within:ring-secondary/40 transition-all";
  const neuRadioDefault =
    "flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#eef2fc] shadow-[4px_4px_10px_#cbd5ea,-4px_-4px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#cbd5ea,inset_-3px_-3px_6px_#ffffff] text-on-surface cursor-pointer transition-all";
  const neuRadioSelected =
    "flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#eef2fc] shadow-[inset_4px_4px_8px_#cbd5ea,inset_-4px_-4px_8px_#ffffff] ring-2 ring-secondary text-primary font-bold cursor-pointer transition-all";

  const partnerSchools = [
    {
      id: "mds",
      title: "2. MyDigitalSchool Lyon (Web dev, digital & UX/UI)",
      desc: "Bachelor Web & UX/UI Design • MBA Direction Artistique & Webmarketing",
    },
    {
      id: "iscom",
      title: "1. ISCOM Lyon (Communication, marketing & événementiel)",
      desc: "Programme Grande École • Stratégie de marque & Relations Publiques",
    },
    {
      id: "ihecf",
      title: "3. IHECF Lyon (Comptabilité, finance & audit)",
      desc: "DCG / Bachelor Finance • DSCG / MBA Contrôle de gestion & Audit",
    },
    {
      id: "ipac",
      title: "4. Ipac Bachelor Factory Lyon (Commerce, management & RH)",
      desc: "Bachelor Business & Négociation • Logistique & Ressources Humaines",
    },
    {
      id: "mbway",
      title: "5. MBway Lyon (Management & business school)",
      desc: "MBA Management & Commerce International • Entrepreneuriat",
    },
    {
      id: "tunon",
      title: "6. École Internationale Tunon Lyon (Tourisme & hospitalité)",
      desc: "Bachelor Hôtellerie & Luxe • Événementiel & Relations Publiques",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-28 pb-20 bg-[#eef2fc] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl my-6">
          {submitted ? (
            <div className={`${neuCard} p-8 sm:p-12 text-center flex flex-col items-center gap-5 animate-fadeIn`}>
              <div className="h-24 w-24 rounded-full bg-[#eef2fc] shadow-[8px_8px_16px_#cad4e8,-8px_-8px_16px_#ffffff] flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-5xl">verified</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d8f6ea] text-[#0c685a] font-extrabold text-xs tracking-wider uppercase">
                <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                Connecté en direct au Dashboard LIEC-ONE
              </div>

              <h2 className="font-headline-lg text-primary font-extrabold text-2xl sm:text-3xl">
                Candidature enregistrée avec succès !
              </h2>

              {candidateRef && (
                <div className="px-5 py-2.5 rounded-2xl bg-white shadow-sm border border-slate-200 inline-flex items-center gap-3">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                    Numéro de dossier Candidat :
                  </span>
                  <span className="font-mono text-base font-extrabold text-[#0c685a]">
                    {candidateRef}
                  </span>
                </div>
              )}

              <p className="font-body-md text-on-surface-variant max-w-lg leading-relaxed text-sm sm:text-base">
                Félicitations <strong className="text-primary">{nomComplet}</strong> ! Tes informations pour le programme{" "}
                <strong className="text-primary">LIEC - France Prépa (2027-2028)</strong> ont été transmises instantanément dans le dashboard officiel de nos conseillers pédagogiques à Lyon et Kinshasa.
              </p>

              <div className="rounded-2xl bg-[#f0faf7] border border-[#ccece2] p-4 text-left w-full max-w-md text-xs space-y-1.5 text-slate-700">
                <div>• <strong>Candidat :</strong> {nomComplet} ({email})</div>
                <div>• <strong>Téléphone / WhatsApp :</strong> {telephone}</div>
                <div>• <strong>Origine & Recrutement :</strong> {villeOrigine} ({paysRecrutement})</div>
                <div>• <strong>École Partenaire :</strong> {ecolePartenaire}</div>
                <div>• <strong>Budget garanti :</strong> {budgetAnnuel}</div>
                <div>• <strong>Parent référent :</strong> {nomParent || "Non renseigné"} ({telephoneParent})</div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 w-full">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setNomComplet("");
                    setEmail("");
                    setTelephone("+243 ");
                    setNomParent("");
                    setTelephoneParent("+243 ");
                    setCandidateRef(null);
                  }}
                  className="px-8 py-3.5 rounded-full bg-secondary text-surface font-label-lg font-bold shadow-[6px_6px_14px_#b8c4dd,-6px_-6px_14px_#ffffff] hover:bg-primary transition-all cursor-pointer"
                >
                  Renseigner un autre candidat
                </button>
                <Link
                  href="/"
                  className="px-8 py-3.5 rounded-full bg-[#eef2fc] text-primary font-label-lg font-bold shadow-[6px_6px_12px_#cbd5ea,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#cbd5ea,inset_-4px_-4px_8px_#ffffff] transition-all"
                >
                  Retour au site web
                </Link>
              </div>
            </div>
          ) : (
            <div className={`${neuCard} p-6 sm:p-10`}>
              {/* Logo Circulaire Neumorphique & En-tête */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="h-20 w-20 rounded-full bg-[#eef2fc] p-2 shadow-[8px_8px_16px_#c6d0e6,-8px_-8px_16px_#ffffff] border-4 border-white flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src="/logo_LIEC (1).png"
                    alt="Logo LIEC"
                    className="h-full w-full object-contain rounded-full"
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d8f6ea] text-[#0c685a] font-extrabold text-[11px] tracking-wider uppercase mb-2">
                  <span className="h-2 w-2 rounded-full bg-[#0c685a] animate-pulse" />
                  Synchronisation Dashboard Temps Réel
                </div>

                <h1 className="font-headline-lg text-2xl sm:text-3xl text-primary font-extrabold tracking-tight">
                  LIEC - France Prépa
                </h1>
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-secondary mt-1">
                  ENROLLMENT FORM • 2027-2028
                </p>
                <p className="text-xs text-on-surface-variant mt-2 max-w-md">
                  Étude en France • Remplis ce formulaire officiel pour que ton dossier apparaisse directement comme candidat sur le Dashboard des conseillers.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-6 rounded-2xl bg-red-50 border border-red-200 p-4 text-xs font-bold text-red-800 flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-600">error</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Formulaire Officiel Organisé en 4 Sections */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* ============================================================ */}
                {/* 1. INFORMATIONS DU CANDIDAT */}
                {/* ============================================================ */}
                <div className={neuSectionBox}>
                  <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2.5">
                    <span className="h-6 w-6 rounded-full bg-[#002452] text-white flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-primary">
                      Informations du Candidat
                    </h2>
                  </div>

                  {/* Nom complet du candidat */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-primary pl-1 flex items-center justify-between">
                      <span>Nom complet du candidat <span className="text-error">*</span></span>
                      <span className="text-[10.5px] text-slate-400 font-normal">Ex: Cédric Ilunga</span>
                    </label>
                    <div className={neuInputWrapper}>
                      <span className="material-symbols-outlined text-secondary text-xl">
                        person
                      </span>
                      <input
                        type="text"
                        required
                        value={nomComplet}
                        onChange={(e) => setNomComplet(e.target.value)}
                        placeholder="Ex: Cédric Ilunga"
                        className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/50 font-medium text-sm"
                      />
                    </div>
                  </div>

                  {/* Adresse e-mail */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-primary pl-1 flex items-center justify-between">
                      <span>Adresse e-mail <span className="text-error">*</span></span>
                      <span className="text-[10.5px] text-slate-400 font-normal">cedric.ilunga@gmail.com</span>
                    </label>
                    <div className={neuInputWrapper}>
                      <span className="material-symbols-outlined text-secondary text-xl">
                        mail
                      </span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="cedric.ilunga@gmail.com"
                        className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/50 font-medium text-sm"
                      />
                    </div>
                  </div>

                  {/* Téléphone / WhatsApp */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-primary pl-1 flex items-center justify-between">
                      <span>Téléphone / WhatsApp <span className="text-error">*</span></span>
                      <span className="text-[10.5px] text-slate-400 font-normal">3/14 chiffres max (+243...)</span>
                    </label>
                    <div className={neuInputWrapper}>
                      <span className="material-symbols-outlined text-secondary text-xl">
                        phone
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={18}
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        placeholder="+243 81 552 1904"
                        className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/50 font-medium text-sm"
                      />
                    </div>
                  </div>

                  {/* Pays de recrutement & Ville d'origine */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primary pl-1">
                        Pays de recrutement <span className="text-error">*</span>
                      </label>
                      <div className={neuInputWrapper}>
                        <span className="material-symbols-outlined text-secondary text-xl">
                          public
                        </span>
                        <select
                          value={paysRecrutement}
                          onChange={(e) => setPaysRecrutement(e.target.value)}
                          className="w-full bg-transparent border-none focus:outline-none text-on-surface font-medium text-xs cursor-pointer"
                        >
                          <option value="🇨🇩 RDC (Kinshasa / Lubumbashi / Goma)">
                            🇨🇩 RDC (Kinshasa / Lubumbashi / Goma)
                          </option>
                          <option value="🇨🇬 Congo-Brazzaville (Brazzaville / Pointe-Noire)">
                            🇨🇬 Congo-Brazzaville (Brazzaville / Pointe-Noire)
                          </option>
                          <option value="🇨🇲 Cameroun (Douala / Yaoundé)">
                            🇨🇲 Cameroun (Douala / Yaoundé)
                          </option>
                          <option value="🌍 Autre pays d'Afrique centrale">
                            🌍 Autre pays d&apos;Afrique centrale
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primary pl-1">
                        Ville d&apos;origine
                      </label>
                      <div className={neuInputWrapper}>
                        <span className="material-symbols-outlined text-secondary text-xl">
                          location_city
                        </span>
                        <input
                          type="text"
                          value={villeOrigine}
                          onChange={(e) => setVilleOrigine(e.target.value)}
                          placeholder="Kinshasa"
                          className="w-full bg-transparent border-none focus:outline-none text-on-surface font-medium text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Destination d'études */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <label className="text-xs font-bold text-primary pl-1">
                      Destination d&apos;études
                    </label>
                    <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/70 border border-slate-200 text-xs font-bold text-[#002452]">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        flight_takeoff
                      </span>
                      <span>Lyon (Exclusivement)</span>
                      <span className="ml-auto text-[10.5px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Campus France Lyon
                      </span>
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* 2. INFORMATIONS DU PARENT & FAMILLE */}
                {/* ============================================================ */}
                <div className={neuSectionBox}>
                  <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2.5">
                    <span className="h-6 w-6 rounded-full bg-[#006a61] text-white flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-primary">
                      Informations du Parent &amp; Famille
                    </h2>
                  </div>

                  {/* Nom complet du parent */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-primary pl-1 flex items-center justify-between">
                      <span>Nom complet du parent</span>
                      <span className="text-[10.5px] text-slate-400 font-normal">Ex: Jean-Pierre Kabangele</span>
                    </label>
                    <div className={neuInputWrapper}>
                      <span className="material-symbols-outlined text-secondary text-xl">
                        family_restroom
                      </span>
                      <input
                        type="text"
                        value={nomParent}
                        onChange={(e) => setNomParent(e.target.value)}
                        placeholder="Ex: Jean-Pierre Kabangele"
                        className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/50 font-medium text-sm"
                      />
                    </div>
                  </div>

                  {/* Téléphone du parent */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-primary pl-1 flex items-center justify-between">
                      <span>Téléphone du parent</span>
                      <span className="text-[10.5px] text-slate-400 font-normal">0/14 chiffres max (+243 81 900 1234)</span>
                    </label>
                    <div className={neuInputWrapper}>
                      <span className="material-symbols-outlined text-secondary text-xl">
                        call
                      </span>
                      <input
                        type="tel"
                        maxLength={18}
                        value={telephoneParent}
                        onChange={(e) => setTelephoneParent(e.target.value)}
                        placeholder="+243 81 900 1234"
                        className="w-full bg-transparent border-none focus:outline-none text-on-surface placeholder:text-on-surface-variant/50 font-medium text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* 3. PARCOURS ACADÉMIQUE & ACTIVITÉ */}
                {/* ============================================================ */}
                <div className={neuSectionBox}>
                  <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2.5">
                    <span className="h-6 w-6 rounded-full bg-[#153a70] text-white flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-primary">
                      Parcours Académique &amp; Activité
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Année d’obtention diplôme */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primary pl-1 flex items-center justify-between">
                        <span>Année d’obtention diplôme</span>
                        <span className="text-[10.5px] text-slate-400 font-normal">2024</span>
                      </label>
                      <div className={neuInputWrapper}>
                        <span className="material-symbols-outlined text-secondary text-xl">
                          school
                        </span>
                        <input
                          type="text"
                          value={anneeDiplome}
                          onChange={(e) => setAnneeDiplome(e.target.value)}
                          placeholder="2024"
                          className="w-full bg-transparent border-none focus:outline-none text-on-surface font-medium text-sm"
                        />
                      </div>
                    </div>

                    {/* Dernière année univ. */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primary pl-1 flex items-center justify-between">
                        <span>Dernière année univ.</span>
                        <span className="text-[10.5px] text-slate-400 font-normal">max 4 chiffres (2024)</span>
                      </label>
                      <div className={neuInputWrapper}>
                        <span className="material-symbols-outlined text-secondary text-xl">
                          history_edu
                        </span>
                        <input
                          type="text"
                          maxLength={4}
                          value={derniereAnneeUniv}
                          onChange={(e) => setDerniereAnneeUniv(e.target.value)}
                          placeholder="2024"
                          className="w-full bg-transparent border-none focus:outline-none text-on-surface font-medium text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Activité actuelle */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-primary pl-1 flex items-center justify-between">
                      <span>Activité actuelle</span>
                      <span className="text-[10.5px] text-slate-400 font-normal">0/25 max (Ex: Étudiant / Stagiaire)</span>
                    </label>
                    <div className={neuInputWrapper}>
                      <span className="material-symbols-outlined text-secondary text-xl">
                        badge
                      </span>
                      <input
                        type="text"
                        maxLength={25}
                        value={activiteActuelle}
                        onChange={(e) => setActiviteActuelle(e.target.value)}
                        placeholder="Ex: Étudiant / Stagiaire"
                        className="w-full bg-transparent border-none focus:outline-none text-on-surface font-medium text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* 4. ÉCOLE PARTENAIRE & BUDGET */}
                {/* ============================================================ */}
                <div className={neuSectionBox}>
                  <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2.5">
                    <span className="h-6 w-6 rounded-full bg-[#ff9900] text-white flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-primary">
                      École Partenaire &amp; Budget
                    </h2>
                  </div>

                  {/* École Partenaire à Lyon */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-primary pl-1">
                      École Partenaire à Lyon <span className="text-error">*</span>
                    </label>
                    <div className="space-y-2">
                      {partnerSchools.map((school) => {
                        const active = ecolePartenaire === school.title;
                        return (
                          <label
                            key={school.id}
                            className={active ? neuRadioSelected : neuRadioDefault}
                          >
                            <input
                              type="radio"
                              name="ecolePartenaire"
                              value={school.title}
                              checked={active}
                              onChange={(e) => setEcolePartenaire(e.target.value)}
                              className="h-4 w-4 accent-secondary shrink-0"
                            />
                            <div className="flex flex-col">
                              <span className="text-xs font-extrabold text-[#002452]">
                                {school.title}
                              </span>
                              <span className="text-[11px] text-slate-500">
                                {school.desc}
                              </span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget annuel garanti */}
                  <div className="flex flex-col gap-1.5 pt-2">
                    <label className="text-xs font-bold text-primary pl-1">
                      Budget annuel garanti <span className="text-error">*</span>
                    </label>
                    <div className={neuInputWrapper}>
                      <span className="material-symbols-outlined text-secondary text-xl">
                        euro
                      </span>
                      <select
                        value={budgetAnnuel}
                        onChange={(e) => setBudgetAnnuel(e.target.value)}
                        className="w-full bg-transparent border-none focus:outline-none text-on-surface font-medium text-xs sm:text-sm cursor-pointer"
                      >
                        <option value="8 500 € – 10 000 € / an">
                          8 500 € – 10 000 € / an (Standard Recommandé Lyon)
                        </option>
                        <option value="10 000 € – 13 000 € / an">
                          10 000 € – 13 000 € / an (Pack Confort &amp; Famille)
                        </option>
                        <option value="6 000 € – 8 500 € / an">
                          6 000 € – 8 500 € / an (Avec Préfinancement AVI YIMMILINE)
                        </option>
                        <option value="Supérieur à 13 000 € / an">
                          Supérieur à 13 000 € / an
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Bouton de soumission */}
                <div className="pt-2 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-secondary hover:bg-primary text-surface font-label-lg text-base font-bold tracking-wide shadow-[6px_6px_16px_#b8c4dd,-6px_-6px_16px_#ffffff] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {loading ? (
                      <>
                        <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Transmission en temps réel au Dashboard...</span>
                      </>
                    ) : (
                      <>
                        <span>Valider mon inscription • Envoi au Dashboard</span>
                        <span className="material-symbols-outlined text-xl">send</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-on-surface-variant text-center">
                    Toutes les informations soumises sont synchronisées immédiatement avec le Dashboard officiel LIEC-ONE.
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

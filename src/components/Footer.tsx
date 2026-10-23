import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-surface pt-space-xl pb-space-lg shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
          {/* Col 1 : Logo & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Logo LIEC Education"
                className="h-10 w-auto object-contain rounded-md bg-white p-1"
                src="/logo_LIEC.jpeg"
              />
              <span className="font-headline-sm text-headline-sm text-surface font-extrabold tracking-tight">
                LIEC
              </span>
            </div>
            <p className="font-body-md text-body-md text-secondary-fixed">
              Ton avenir mérite le bon accompagnement.
            </p>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-variant">
              <p className="text-surface font-medium">
                Bureaux : Lyon (France) &amp; Kinshasa (Afrique Centrale)
              </p>
              <p>
                Email officiel :{" "}
                <a
                  className="text-secondary-fixed hover:underline"
                  href="mailto:contact@liec-education.com"
                >
                  contacts@liecconsulting.com
                </a>
              </p>
              <p>
                Assistance WhatsApp pro :{" "} <br />
                <span className="text-secondary-fixed">+243 803 615 543</span><br />
                <span className="text-secondary-fixed">+33 7 69 86 09 13</span>
              </p>
            </div>
          </div>

          {/* Col 2 : Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg text-tertiary-fixed uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm">
              <li className="py-0.5">
                <Link className="text-surface-variant hover:text-surface transition-colors" href="#accueil">
                  Accueil
                </Link>
              </li>
              <li className="py-0.5">
                <Link
                  className="text-surface-variant hover:text-surface transition-colors"
                  href="#etudier-en-france"
                >
                  Étudier en France
                </Link>
              </li>
              <li className="py-0.5">
                <Link
                  className="text-surface-variant hover:text-surface transition-colors"
                  href="#liec-france-prepa"
                >
                  LIEC-France PREPA
                </Link>
              </li>
              <li className="py-0.5">
                <Link className="text-surface-variant hover:text-surface transition-colors" href="#nos-services">
                  Nos services
                </Link>
              </li>
              <li className="py-0.5">
                <Link
                  className="text-surface-variant hover:text-surface transition-colors"
                  href="#temoignages-ressources"
                >
                  FAQ &amp; Ressources
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 : Démarches & Programmes */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg text-tertiary-fixed uppercase tracking-wider">
              Démarches &amp; Programmes
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-variant">
              <li className="py-0.5">Orientation académique &amp; choix de filières</li>
              <li className="py-0.5">Préparation &amp; relecture des dossiers</li>
              <li className="py-0.5">Programme préparatoire PREPA</li>
              <li className="py-0.5">Conseil personnalisé aux familles</li>
              <li className="py-0.5">Accompagnement installation &amp; visa</li>
            </ul>
          </div>

          {/* Col 4 : Transparence & Éthique */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg text-secondary-fixed uppercase tracking-wider">
              Transparence &amp; Éthique
            </h3>
            <div className="p-space-md rounded-xl bg-primary/40 font-body-sm text-body-sm text-surface-variant leading-relaxed">
              <p>
                LIEC accompagne les étudiants dans la préparation rigoureuse de leur dossier.
                Les décisions d’admission et de visa relèvent exclusivement des établissements
                d’enseignement supérieur et des consulats de France.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-surface-variant">
          <p>© 2026 LIEC — Lyon International Education Consulting. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-space-md">
            <Link className="hover:text-surface transition-colors" href="#mentions-legales">
              Mentions légales
            </Link>
            <Link
              className="hover:text-surface transition-colors"
              href="#politique-confidentialite"
            >
              Politique de confidentialité (RGPD)
            </Link>
            <Link className="text-secondary-fixed hover:underline" href="#espace-admin">
              Accès Conseillers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

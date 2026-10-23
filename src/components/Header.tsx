"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(21,58,112,0.06)]">
      {/* Top Banner */}
      <div className="bg-primary-container text-surface px-margin-mobile lg:px-margin py-space-xs text-center font-label-sm text-label-sm tracking-wide">
        <span className="inline-flex items-center gap-space-xs">
          <span className="text-tertiary-fixed font-bold">
            🎓 Inscriptions ouvertes :
          </span>
          Programme LIEC-France PREPA | Accompagnement rentrée universitaire 2026-2027
        </span>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        {/* Brand / Logo */}
        <div className="flex items-center gap-space-lg">
          <Link className="flex items-center" href="/">
            <img
              alt="Logo LIEC Education"
              className="h-14 md:h-16 w-auto object-contain rounded-lg shadow-sm"
              src="/logo_LIEC.jpeg"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-space-md">
          <Link
            aria-current="page"
            className="transition-colors text-primary font-bold bg-surface-container-high px-space-md py-space-xs rounded-lg"
            href="#accueil"
          >
            Accueil
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
            href="#etudier-en-france"
          >
            Étudier en France
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
            href="#liec-france-prepa"
          >
            À propos
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
            href="#nos-services"
          >
            Nos services
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
            href="#temoignages-ressources"
          >
            Témoignages &amp; ressources
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-sm">
          <Link
            className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-tertiary-fixed text-primary font-label-lg text-label-lg font-bold shadow-[0_2px_8px_rgba(21,58,112,0.12)] hover:bg-tertiary-fixed-dim hover:text-primary transition-all"
            href="#candidature"
          >
            Démarrer mon projet
          </Link>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            className="xl:hidden p-2 text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface border-t border-surface-container-high px-margin-mobile py-4 shadow-lg flex flex-col gap-3">
          <Link
            className="text-primary font-bold bg-surface-container-high px-4 py-2 rounded-lg"
            href="#accueil"
            onClick={() => setMobileMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface px-4 py-2 font-medium"
            href="#etudier-en-france"
            onClick={() => setMobileMenuOpen(false)}
          >
            Étudier en France
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface px-4 py-2 font-medium"
            href="#liec-france-prepa"
            onClick={() => setMobileMenuOpen(false)}
          >
            À propos
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface px-4 py-2 font-medium"
            href="#nos-services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nos services
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface px-4 py-2 font-medium"
            href="#temoignages-ressources"
            onClick={() => setMobileMenuOpen(false)}
          >
            Témoignages &amp; ressources
          </Link>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Étudier en France", href: "/etudier-en-france" },
    { label: "À propos", href: "/a-propos" },
    { label: "Nos services", href: "/nos-services" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

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
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "transition-colors text-primary font-bold bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-lg text-label-lg"
                    : "text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg px-space-sm py-space-xs"
                }
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-sm">
          <Link
            className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-tertiary-fixed text-primary font-label-lg text-label-lg font-bold shadow-[0_2px_8px_rgba(21,58,112,0.12)] hover:bg-tertiary-fixed-dim hover:text-primary transition-all"
            href="/demarrer-mon-projet"
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
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                className={
                  active
                    ? "text-primary font-bold bg-surface-container-high px-4 py-2 rounded-lg"
                    : "text-on-surface-variant hover:text-on-surface px-4 py-2 font-medium"
                }
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

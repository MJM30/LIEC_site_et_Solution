# LIEC Academic Nexus — Next.js & React

Ce projet est la refonte complète et modulaire de la page `index.html` en une application moderne basée sur **React**, **Next.js 15 (App Router)**, **TypeScript** et **Tailwind CSS**.

---

## 🚀 Démarrage rapide

### 1. Lancer le serveur de développement
```bash
npm run dev
```
Rendez-vous ensuite sur [http://localhost:3000](http://localhost:3000).

### 2. Compiler pour la production
```bash
npm run build
```

### 3. Lancer en production
```bash
npm run start
```

---

## 📁 Structure du projet

- **`src/app/`**
  - [`layout.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/app/layout.tsx) : Structure racine HTML, police Google Fonts *Plus Jakarta Sans* et Google Material Symbols.
  - [`page.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/app/page.tsx) : Page principale assemblant les composants modulaires.
  - [`globals.css`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/app/globals.css) : Configuration Tailwind et styles globaux.

- **`src/components/`**
  - [`Header.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/components/Header.tsx) : Barre de navigation responsive avec menu mobile interactif (`useState`), logo et bannières.
  - [`HeroSection.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/components/HeroSection.tsx) : Hero section avec badges animés, CTA et composition visuelle.
  - [`FeaturesSection.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/components/FeaturesSection.tsx) : 4 cartes interactives (Pourquoi choisir LIEC).
  - [`TimelineSection.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/components/TimelineSection.tsx) : Chronologie du parcours vers les études en France (4 jalons).
  - [`PrepaSection.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/components/PrepaSection.tsx) : Section du cycle préparatoire LIEC-France PREPA.
  - [`TestimonialsSection.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/components/TestimonialsSection.tsx) : Témoignages et retours d'expérience.
  - [`FaqSection.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/components/FaqSection.tsx) : Accordéon interactif React avec gestion d'état (`useState`).
  - [`CtaBannerSection.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/components/CtaBannerSection.tsx) : Bannière finale d'appel à l'action.
  - [`Footer.tsx`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/src/components/Footer.tsx) : Pied de page complet et mentions déontologiques.

- **Configurations**
  - [`tailwind.config.ts`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/tailwind.config.ts) : Tokens complets du design system (couleurs, typographies, espacements conformes à `DESIGN.md`).
  - [`next.config.mjs`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/next.config.mjs) : Configuration Next.js (optimisation des domaines d'images).
  - [`tsconfig.json`](file:///c:/Users/USER/OneDrive/Documents/site_site_web/tsconfig.json) : Configuration TypeScript stricte.

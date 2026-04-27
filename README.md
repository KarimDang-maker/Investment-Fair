# 🎯 Salon de l'Investisseur - Site Web Officiel

Site web premium pour l'événement "Salon de l'Investisseur" - Yaoundé, Cameroun (10 Avril 2026)

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

---

## 📋 Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Structure du projet](#-structure-du-projet)
- [Documentation](#-documentation)
- [Déploiement](#-déploiement)

---

## 🎯 Vue d'ensemble

Site web institutionnel et événementiel premium pour connecter les entrepreneurs africains aux investisseurs.

**Public cible** :
- 🚀 Porteurs de projets (1000 attendus)
- 💼 Investisseurs (500 attendus)
- 🤝 Partenaires et sponsors

**Objectifs** :
- ✅ Maximum d'inscriptions (objectif: 2000)
- ✅ Expérience utilisateur premium
- ✅ Conversion optimisée
- ✅ Mobile-first design

---

## ✨ Fonctionnalités

### 🌍 Core Features

#### 1. **Système multilingue (i18n)**
- 🇫🇷 Français (défaut)
- 🇬🇧 English
- Switch dynamique sans rechargement
- 50+ clés de traduction
- Extensible à d'autres langues

#### 2. **Pages principales**
- 🏠 **Homepage** - Landing page premium avec animations
- 👥 **Porteurs de projets** - Parcours dédié entrepreneurs
- 💼 **Investisseurs** - Section investisseurs
- 📅 **Programme** - Agenda détaillé de la journée
- 📝 **Inscription** - Formulaire multi-étapes (4 étapes)
- 🎫 **Ticket digital** - QR code + téléchargement PNG

#### 3. **Section Vidéo immersive** 🎥
- Vidéo YouTube ou locale
- Poster personnalisable
- Bouton play animé
- Responsive (aspect-ratio)
- Animations au scroll

#### 4. **Section Partenaires** 🤝
- Logos défilants (infinite scroll)
- Grayscale → couleur au hover
- Pause automatique au hover
- Responsive avec fade effects

#### 5. **Formulaire d'inscription intelligent**
- **Étape 1** : Choix profil (Porteur / Investisseur)
- **Étape 2** : Informations personnelles
- **Étape 3** : Détails complémentaires
- **Étape 4** : Confirmation
- Validation en temps réel
- Progress indicator animé

#### 6. **Génération ticket digital**
- ID unique (format: SIP + timestamp)
- QR code généré dynamiquement
- Téléchargement en PNG (html2canvas)
- Partage social (WhatsApp, LinkedIn)
- Stockage local (LocalStorage)

### 🎨 Design Premium

- ✅ Design system complet (Emerald + Blue)
- ✅ 60+ composants UI réutilisables
- ✅ Animations scroll (Motion/Framer)
- ✅ Micro-interactions partout
- ✅ Gradients premium
- ✅ Shadows sophistiquées
- ✅ Typographie hiérarchisée

### 📱 Responsive Design

Testé sur :
- 📱 Mobile (320px - 768px)
- 📲 Tablet (768px - 1024px)
- 💻 Laptop (1024px - 1440px)
- 🖥️ Desktop (1440px+)

### ⚡ Performance

- ✅ Code splitting automatique
- ✅ Lazy loading images
- ✅ GPU-accelerated animations
- ✅ Optimized bundle size
- ✅ 60fps smooth scrolling

---

## 🛠 Technologies

### Frontend
- **React** 18.3.1 - UI library
- **TypeScript** - Type safety
- **React Router** 7.14 - Routing (SPA)
- **Tailwind CSS** 4.1 - Styling
- **Motion** (Framer Motion) - Animations
- **Vite** 6.3 - Build tool

### Libraries
- **lucide-react** - Icons
- **qrcode.react** - QR code generation
- **html2canvas** - Ticket download
- **React Hook Form** - Form management
- **date-fns** - Date formatting

### UI Components
- **Radix UI** - Accessible primitives
- **shadcn/ui** - Component library
- **Custom components** - AnimatedCard, IconBadge, etc.

---

## 🚀 Installation

### Prérequis

```bash
Node.js >= 18.0.0
pnpm >= 8.0.0 (recommandé)
```

### Installation

```bash
# Cloner le repo
git clone https://github.com/votre-org/salon-investisseur.git

# Naviguer dans le dossier
cd salon-investisseur

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build pour production

```bash
# Créer le build optimisé
pnpm run build

# Prévisualiser le build
pnpm run preview
```

---

## 📁 Structure du projet

```
/workspaces/default/code/
├── public/                    # Assets statiques
│   ├── images/
│   │   └── partners/         # Logos partenaires
│   └── videos/               # Vidéos locales
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── HomePage.tsx           ✅ Landing page
│   │   │   ├── Navbar.tsx             ✅ Navigation responsive
│   │   │   ├── Footer.tsx             ✅ Footer
│   │   │   ├── VideoSection.tsx       🆕 Section vidéo
│   │   │   ├── PartnersSection.tsx    🆕 Partenaires
│   │   │   ├── LanguageSwitcher.tsx   🆕 Switch FR/EN
│   │   │   ├── PorteursPage.tsx       ✅ Page porteurs
│   │   │   ├── InvestisseursPage.tsx  ✅ Page investisseurs
│   │   │   ├── ProgrammePage.tsx      ✅ Programme
│   │   │   ├── InscriptionPage.tsx    ✅ Formulaire 4 étapes
│   │   │   ├── TicketPage.tsx         ✅ Ticket digital
│   │   │   ├── NotFoundPage.tsx       ✅ Page 404
│   │   │   └── ui/                    # Composants UI
│   │   │       ├── animated-card.tsx
│   │   │       ├── gradient-text.tsx
│   │   │       ├── icon-badge.tsx
│   │   │       ├── stats-counter.tsx
│   │   │       ├── section-container.tsx
│   │   │       └── [40+ composants]
│   │   │
│   │   ├── contexts/
│   │   │   └── LanguageContext.tsx    🆕 i18n system
│   │   │
│   │   ├── lib/
│   │   │   └── design-tokens.ts       # Design system tokens
│   │   │
│   │   └── App.tsx                    # App principale
│   │
│   └── styles/
│       ├── index.css
│       ├── theme.css                  # Thème Tailwind
│       ├── fonts.css
│       └── tailwind.css
│
├── DESIGN_SYSTEM.md                   📚 Design system doc
├── NOUVELLES_FONCTIONNALITES.md       🆕 Guide nouvelles features
├── README.md                          📖 Ce fichier
└── package.json
```

---

## 📚 Documentation

### Fichiers de documentation

1. **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)**
   - Charte graphique complète
   - Composants UI
   - Responsive guidelines
   - Animations & micro-interactions
   - Best practices

2. **[NOUVELLES_FONCTIONNALITES.md](./NOUVELLES_FONCTIONNALITES.md)** 🆕
   - Système de traduction FR/EN
   - Section vidéo
   - Section partenaires
   - Guide d'intégration
   - Troubleshooting

### Guides rapides

#### Ajouter une traduction

```tsx
// 1. Éditer src/app/contexts/LanguageContext.tsx
const translations = {
  'mon.texte': {
    fr: 'Mon texte en français',
    en: 'My text in English'
  }
};

// 2. Utiliser dans un composant
import { useLanguage } from '../contexts/LanguageContext';

function MonComposant() {
  const { t } = useLanguage();
  return <h1>{t('mon.texte')}</h1>;
}
```

#### Changer la vidéo

```tsx
// Dans src/app/components/VideoSection.tsx
<iframe
  src="https://www.youtube.com/embed/VOTRE_VIDEO_ID?autoplay=1"
  // Remplacer VOTRE_VIDEO_ID
/>
```

#### Ajouter des partenaires

```tsx
// Dans src/app/components/PartnersSection.tsx
const partners = [
  { 
    name: 'Votre Partenaire', 
    logo: '/images/partners/logo.png' 
  },
  // Ajouter autant que nécessaire
];
```

---

## 🎨 Charte Graphique

### Couleurs

```css
/* Primaire - Emerald (Investissement, Croissance) */
--emerald-600: #059669

/* Secondaire - Blue (Progrès, Confiance) */
--blue-600: #2563eb

/* Gradients signature */
bg-gradient-to-r from-emerald-600 to-blue-600
```

### Typographie

```
Font Family: system-ui, -apple-system, "Segoe UI"
Échelle: xs (12px) → 7xl (72px)
Poids: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
```

### Composants clés

- `<AnimatedCard>` - Cartes avec animations
- `<IconBadge>` - Badges d'icônes gradient
- `<GradientText>` - Texte avec gradient
- `<StatsCounter>` - Compteurs animés
- `<SectionContainer>` - Containers responsive

---

## 🚢 Déploiement

### Plateformes recommandées

#### Vercel (Recommandé)

```bash
# 1. Installer Vercel CLI
pnpm add -g vercel

# 2. Déployer
vercel

# 3. Production
vercel --prod
```

#### Netlify

```bash
# 1. Build
pnpm run build

# 2. Déployer le dossier dist/
netlify deploy --prod --dir=dist
```

#### Variables d'environnement

Aucune variable requise pour le moment. Le site fonctionne entièrement en frontend.

---

## 🧪 Tests

### Tests manuels recommandés

```bash
# Checklist avant déploiement

✅ Navbar responsive (mobile + desktop)
✅ Switch de langue FR ↔ EN
✅ Formulaire inscription (4 étapes)
✅ Génération ticket + QR code
✅ Téléchargement ticket PNG
✅ Vidéo playback (YouTube)
✅ Défilement partenaires
✅ Animations scroll
✅ Mobile 375px, Tablet 768px, Desktop 1440px
✅ Performance Lighthouse (>90)
```

### Tests de performance

```bash
# Google Lighthouse
# Chrome DevTools > Lighthouse > Generate report

Objectifs:
- Performance: >90
- Accessibility: >95
- Best Practices: >95
- SEO: >90
```

---

## 🤝 Contribution

Pour contribuer au projet :

1. Fork le repo
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Guidelines

- Suivre le design system existant
- Ajouter traductions FR + EN
- Tester responsive (mobile, tablet, desktop)
- Documenter les nouvelles features
- Respecter la structure des composants

---

## 📝 Changelog

### Version 2.0.0 (2026-04-25)

#### 🆕 Nouveautés
- Système de traduction FR/EN complet
- Section vidéo immersive avec animations
- Section partenaires avec défilement automatique
- LanguageSwitcher dans Navbar
- 50+ traductions ajoutées

#### ✨ Améliorations
- HomePage avec traductions dynamiques
- Navbar avec switch de langue responsive
- Animations optimisées (GPU-accelerated)
- Documentation complète ajoutée

#### 🐛 Corrections
- Fix erreur `oklch` colors (html2canvas)
- Fix imports react-router-dom
- Optimisation bundle size

### Version 1.0.0 (2026-04-20)

#### Première version
- Pages principales (Home, Porteurs, Investisseurs, Programme)
- Formulaire inscription multi-étapes
- Génération ticket digital avec QR code
- Design system premium
- Responsive design complet

---

## 📄 License

Ce projet est privé et propriétaire.  
© 2026 Salon de l'Investisseur - Tous droits réservés.

---

## 📞 Support & Contact

**Email**: contact@salon-investisseur.cm  
**Téléphone**: +237 6XX XX XX XX  
**Localisation**: Yaoundé, Cameroun  

**Événement**: 10 Avril 2026  
**Inscription**: Gratuite  
**Participants attendus**: 1500 (1000 porteurs + 500 investisseurs)

---

## 🙏 Remerciements

- Design inspiration: Material Design, Apple HIG
- Icons: Lucide React
- Animations: Motion (Framer Motion)
- UI Components: Radix UI, shadcn/ui
- Styling: Tailwind CSS

---

**Développé avec ❤️ pour l'écosystème entrepreneurial africain**

🚀 **Transformons l'ambition en réalité !**

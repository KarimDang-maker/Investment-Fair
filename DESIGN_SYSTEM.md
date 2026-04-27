# 🎨 Design System - Salon de l'Investisseur

## Vue d'ensemble

Design system premium et institutionnel pour le Salon de l'Investisseur, combinant modernité, professionnalisme et identité africaine.

---

## 🎨 Charte Graphique Complète

### Palette de Couleurs

#### Couleurs Principales
```css
/* Emerald - Investissement, Croissance, Afrique */
--emerald-50: #ecfdf5
--emerald-600: #059669 (Primaire)
--emerald-700: #047857
--emerald-800: #065f46

/* Blue - Progrès, Confiance, Innovation */
--blue-50: #eff6ff
--blue-600: #2563eb (Secondaire)
--blue-700: #1d4ed8
--blue-800: #1e40af
```

#### Couleurs Système
```css
/* Neutral */
--gray-50 à gray-900: Textes, backgrounds
--white: #ffffff (Fond principal)

/* Accents */
--yellow-300: #fde047 (Highlights, badges)
--gold-600: #ca8a04 (Premium touches)
```

### Gradients Premium

```css
/* Hero Sections */
bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-600

/* Cards Premium */
bg-gradient-to-br from-emerald-50 to-white

/* Buttons CTA */
bg-gradient-to-r from-emerald-600 to-blue-600

/* Text Highlights */
bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-700
```

---

## 📝 Typographie

### Famille de police
```
Font Family: system-ui, -apple-system, "Segoe UI", sans-serif
```

### Échelle Typographique

```css
/* Display Titles (Hero) */
text-7xl (72px) - font-extrabold - line-height: 1.1
text-6xl (60px) - font-extrabold - line-height: 1.1
text-5xl (48px) - font-extrabold - line-height: 1.2

/* Section Titles */
text-4xl (36px) - font-extrabold - line-height: 1.25
text-3xl (30px) - font-bold - line-height: 1.3

/* Card Titles */
text-2xl (24px) - font-bold - line-height: 1.35
text-xl (20px) - font-semibold - line-height: 1.4

/* Body Text */
text-lg (18px) - font-normal - line-height: 1.75
text-base (16px) - font-normal - line-height: 1.5
text-sm (14px) - font-medium - line-height: 1.5
```

### Hiérarchie Visuelle
- **Titres principaux**: font-extrabold + GradientText
- **Sous-titres**: font-bold + text-gray-900
- **Corps de texte**: font-normal + text-gray-600
- **Accents**: font-semibold + couleurs primaires

---

## 📐 Spacing & Layout

### Container Widths
```css
max-w-2xl: 672px  (Formulaires, contenu étroit)
max-w-4xl: 896px  (Sections standard)
max-w-6xl: 1152px (Grilles, galeries)
max-w-7xl: 1280px (Full width sections)
```

### Section Padding
```css
Mobile: py-12 px-4
Tablet: py-16 px-6
Desktop: py-20 px-8
```

### Gap Systems
```css
gap-4: 16px (Elements rapprochés)
gap-6: 24px (Cards en mobile)
gap-8: 32px (Cards en tablet)
gap-10: 40px (Cards en desktop)
```

---

## 🎭 Composants UI Premium

### 1. **AnimatedCard**
Carte avec animations au scroll et hover

**Variantes**:
- `default`: Fond blanc, ombre subtile
- `emerald`: Dégradé emerald, bordure emerald
- `blue`: Dégradé blue, bordure blue  
- `premium`: Fond blanc, hover border gradient

**Animations**:
- Fade in + Slide up au scroll
- Hover: translateY(-8px) + shadow-xl
- Transition: 300ms ease

**Usage**:
```tsx
<AnimatedCard variant="premium" delay={0.2}>
  {content}
</AnimatedCard>
```

---

### 2. **IconBadge**
Badge d'icône avec gradient et animation

**Variantes**:
- `emerald`: Gradient vert
- `blue`: Gradient bleu
- `gradient`: Multi-couleur emerald-blue

**Tailles**: sm (48px) | md (64px) | lg (80px) | xl (96px)

**Animations**:
- Hover: scale(1.1) + rotate(5deg)
- Shadow: Large colored shadow

**Usage**:
```tsx
<IconBadge 
  icon={<TrendingUp />} 
  variant="emerald" 
  size="lg" 
/>
```

---

### 3. **GradientText**
Texte avec gradient animé

**Variantes**:
```tsx
primary: emerald-600 → emerald-700
secondary: blue-600 → blue-700
premium: emerald-600 → blue-600 → emerald-700
```

**Usage**:
```tsx
<h1>
  Transformez votre <GradientText variant="premium">avenir</GradientText>
</h1>
```

---

### 4. **StatsCounter**
Compteur animé avec effet easing

**Fonctionnalités**:
- Animation au scroll (viewport trigger)
- Easing: easeOutQuart
- Format: Séparateurs de milliers FR
- Prefix/Suffix support

**Usage**:
```tsx
<StatsCounter 
  end={1000} 
  suffix="+" 
  duration={2}
/>
```

---

### 5. **SectionContainer**
Container responsive avec variants

**Variantes**:
```css
default: bg-white
gray: bg-gray-50
gradient: from-emerald-50 via-white to-blue-50
dark: from-emerald-600 to-blue-600
```

**Tailles**: sm | md | lg | xl

---

## 📱 Responsive Design

### Breakpoints
```css
mobile: 0px - 768px
tablet: 768px - 1024px
laptop: 1024px - 1440px
desktop: 1440px - 1920px
xl: 1920px+
```

### Grid Systems

**Mobile (< 768px)**
```css
grid-cols-1
gap-4 à gap-6
text-3xl à text-4xl (titres)
```

**Tablet (768px - 1024px)**
```css
grid-cols-2
gap-6 à gap-8
text-4xl à text-5xl
```

**Desktop (1024px+)**
```css
grid-cols-3 ou grid-cols-4
gap-8 à gap-10
text-5xl à text-7xl
```

### Navigation Responsive

**Mobile**:
- Menu hamburger
- AnimatePresence pour smooth transitions
- Full-width drawer
- Stack vertical

**Desktop**:
- Horizontal menu
- Motion layoutId pour indicator animé
- Hover effects sophistiqués

---

## ✨ Micro-interactions

### 1. **Buttons**
```css
Hover: scale-105 + shadow-2xl
Active: scale-95
Icon rotation: rotate-12
Arrow translation: translateX(1)
Duration: 300ms
```

### 2. **Cards**
```css
Scroll: fade-in + translateY(-20px)
Hover: translateY(-8px) + shadow-xl
Border: transparent → colored on hover
Duration: 300ms cubic-bezier
```

### 3. **Icons**
```css
Hover: rotate(5deg) + scale(1.1)
Active: rotate(-5deg)
Pulse animation sur badges
```

### 4. **Navbar**
```css
Scroll > 20px: 
  - backdrop-blur-lg
  - shadow-lg
  - bg-white/95

Logo hover: rotate(360deg) + scale(1.1)
Link active: layoutId animation
```

### 5. **Hero Elements**
```css
Background shapes:
  - rotate + animate-pulse
  - blur-3xl
  - opacity-10
  
Stagger animations:
  - Badge: 0s
  - Title: 0.2s
  - Subtitle: 0.4s
  - CTA: 0.6s
```

---

## 🎬 Animations Timeline

### Page Load
```
0ms: Navbar slides down
200ms: Hero badge fades in
400ms: Hero title fades in
600ms: Hero subtitle fades in
800ms: Hero CTA buttons
1000ms: Background elements
```

### Scroll Interactions
```
Viewport trigger: -50px margin
Each card: 100ms stagger
Stats counters: 2s duration
Fade + Slide: 500ms duration
```

---

## 🎯 Design Patterns

### 1. **Hero Sections**
```tsx
Structure:
- Gradient background (emerald → blue)
- Animated geometric shapes (opacity 10%)
- Badge avec icône + texte
- H1 extrabold (text-6xl à text-7xl)
- Subtitle light (text-2xl à text-3xl)
- 2 CTA buttons (primaire + secondaire)
- Info pills en bas
- Wave SVG separator
```

### 2. **Stats Sections**
```tsx
Structure:
- 3 colonnes responsive
- AnimatedCard premium
- IconBadge XL en haut
- StatsCounter avec gradient
- Divider coloré en bas
- Hover: border colored
```

### 3. **Benefits Grid**
```tsx
Structure:
- Section title centré + gradient
- Grid 3 colonnes
- IconBadge XL
- Title bold (hover: colored)
- Description
- "En savoir plus" link avec arrow
```

### 4. **CTA Sections**
```tsx
Structure:
- Dark gradient background
- Animated blur backgrounds
- Badge "Places limitées"
- Large title avec underline
- Subtitle light
- 2 CTA buttons
- Checklist features
```

---

## 🎨 Shadows Premium

```css
/* Card hover */
shadow-xl: 0 20px 25px rgba(0,0,0,0.1)

/* Premium emerald */
0 20px 40px rgba(5, 150, 105, 0.2)

/* Premium blue */
0 20px 40px rgba(37, 99, 235, 0.2)

/* CTA buttons */
shadow-2xl: 0 25px 50px rgba(0,0,0,0.25)
```

---

## 🔄 Border Radius

```css
/* Buttons, inputs */
rounded-lg: 12px

/* Cards */
rounded-xl: 16px
rounded-2xl: 24px

/* Badges */
rounded-full: 9999px
```

---

## ✅ Checklist de Cohérence

Avant de créer un nouveau composant, vérifier:

- [ ] Utilise les tokens du design system
- [ ] Responsive sur 4 breakpoints
- [ ] Animations au scroll (motion)
- [ ] Hover states définis
- [ ] Gradients cohérents avec la palette
- [ ] Spacing cohérent (multiples de 4px)
- [ ] Typographie selon la hiérarchie
- [ ] Accessibility (ARIA, contraste)
- [ ] Performance (lazy load, optimize)

---

## 📊 Performance Guidelines

### Images
- WebP format préféré
- Lazy loading par défaut
- Placeholder blur

### Animations
- GPU-accelerated (transform, opacity)
- Éviter: width, height, top, left
- 60fps target
- reduce-motion support

### Code Splitting
- Route-based splitting
- Dynamic imports pour heavy components

---

## 🌍 Identité Africaine

### Patterns Géométriques
```tsx
Motifs inspirés de l'art africain:
- Carrés imbriqués
- Losanges
- Cercles concentriques
- Opacity: 10% (subtil, premium)
```

### Couleurs Symboliques
- **Vert**: Croissance, nature, opportunité
- **Bleu**: Progrès, innovation, confiance
- **Or/Jaune**: Richesse, valeur, excellence

### Typographie
- Clean, moderne, lisible
- Évite le folklore
- Corporate + accessible

---

## 🚀 Utilisation

### Créer une nouvelle page

```tsx
import { SectionContainer } from './ui/section-container';
import { AnimatedCard } from './ui/animated-card';
import { GradientText } from './ui/gradient-text';
import { IconBadge } from './ui/icon-badge';

export default function NewPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-blue-600">
        {/* Hero content */}
      </section>

      {/* Content Section */}
      <SectionContainer variant="gradient">
        <h2>
          Votre <GradientText variant="premium">titre</GradientText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard variant="premium" delay={0}>
            <IconBadge icon={<Icon />} variant="emerald" />
            {/* Card content */}
          </AnimatedCard>
        </div>
      </SectionContainer>
    </>
  );
}
```

---

## 📚 Documentation des Fichiers

### Design Tokens
`/src/app/lib/design-tokens.ts`
- Couleurs, gradients, typography
- Spacing, shadows, animations
- Patterns africains

### Composants UI
```
/src/app/components/ui/
├── section-container.tsx
├── animated-card.tsx
├── gradient-text.tsx
├── icon-badge.tsx
└── stats-counter.tsx
```

### Pages
```
/src/app/components/
├── HomePage.tsx (Landing premium)
├── PorteursPage.tsx (Porteurs de projets)
├── InvestisseursPage.tsx (Investisseurs)
├── ProgrammePage.tsx (Programme)
├── InscriptionPage.tsx (Formulaire multi-étapes)
└── TicketPage.tsx (Ticket digital)
```

---

## 🎓 Best Practices

### 1. Toujours utiliser les composants UI
❌ Mauvais:
```tsx
<div className="bg-emerald-600 p-8 rounded-xl">
```

✅ Bon:
```tsx
<AnimatedCard variant="emerald">
```

### 2. Animations scroll avec viewport
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
```

### 3. Gradients cohérents
```tsx
// Utiliser les gradients définis
className="bg-gradient-to-r from-emerald-600 to-blue-600"
// ou
<GradientText variant="premium">
```

### 4. Spacing uniforme
```tsx
// Sections
py-12 md:py-16 lg:py-20

// Gaps
gap-4 md:gap-6 lg:gap-8
```

---

## 🔮 Évolutions Futures

### Phase 2
- [ ] Dark mode support
- [ ] Animation librairie (Lottie)
- [ ] 3D elements (Three.js)
- [ ] Advanced interactions

### Phase 3
- [ ] Design tokens export (Figma)
- [ ] Component library documentation (Storybook)
- [ ] A/B testing variants
- [ ] Analytics integration

---

**Version**: 1.0.0  
**Dernière mise à jour**: Avril 2026  
**Auteur**: Design System - Salon de l'Investisseur

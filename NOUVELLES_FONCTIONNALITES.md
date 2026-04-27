# 🎉 Nouvelles Fonctionnalités - Salon de l'Investisseur

## Vue d'ensemble

Trois nouvelles fonctionnalités majeures ont été ajoutées au site :
1. **Système de traduction FR/EN** (internationalization)
2. **Section vidéo immersive**
3. **Section partenaires avec défilement automatique**

---

## 🌍 1. SYSTÈME DE TRADUCTION (FR / EN)

### Architecture

Le système utilise React Context pour gérer les traductions de manière globale.

**Fichiers créés** :
- `/src/app/contexts/LanguageContext.tsx` - Context provider et traductions
- `/src/app/components/LanguageSwitcher.tsx` - Composant switcher

### Utilisation dans un composant

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MonComposant() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
}
```

### Ajouter de nouvelles traductions

Éditer `/src/app/contexts/LanguageContext.tsx` :

```tsx
const translations: Translations = {
  // Ajouter votre clé
  'ma.cle': { 
    fr: 'Texte en français', 
    en: 'Text in English' 
  },
  
  // Exemple avec HTML
  'ma.cle.html': {
    fr: 'Texte avec <strong>gras</strong>',
    en: 'Text with <strong>bold</strong>'
  },
};
```

### Switcher de langue

**Desktop** : Switcher automatique dans la navbar (top-right)
**Mobile** : Switcher dans le menu hamburger

**Personnalisation des couleurs** :
```tsx
// Dans LanguageSwitcher.tsx
className="bg-gradient-to-r from-emerald-600 to-blue-600"
// Changer vers vos couleurs
```

### Langues supportées actuellement

- 🇫🇷 **Français** (par défaut)
- 🇬🇧 **English**

**Ajouter une nouvelle langue** :

1. Modifier le type `Language` :
```tsx
type Language = 'fr' | 'en' | 'es'; // Ajouter 'es' par exemple
```

2. Ajouter les traductions pour chaque clé :
```tsx
'hero.title': { 
  fr: 'Salon de l\'Investisseur', 
  en: 'Investment Fair',
  es: 'Feria de Inversión' // Nouveau
},
```

3. Ajouter le bouton dans `LanguageSwitcher.tsx`

---

## 🎥 2. SECTION VIDÉO IMMERSIVE

### Fichier créé
`/src/app/components/VideoSection.tsx`

### Caractéristiques

✅ **Design premium** avec overlay gradient  
✅ **Bouton Play** animé (scale + rotation)  
✅ **Poster personnalisable** (image avant lecture)  
✅ **Support YouTube** et vidéos locales  
✅ **Responsive** (aspect-ratio automatique)  
✅ **Animations** au scroll (Motion)  

### Personnalisation de la vidéo

#### Option 1 : Vidéo YouTube

```tsx
// Dans VideoSection.tsx (ligne ~90)
<iframe
  src="https://www.youtube.com/embed/VOTRE_VIDEO_ID?autoplay=1"
  // Remplacer VOTRE_VIDEO_ID
/>
```

**Obtenir l'ID YouTube** :
- URL : `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID : `dQw4w9WgXcQ`

#### Option 2 : Vidéo locale (MP4)

```tsx
{isPlaying ? (
  <video 
    className="w-full h-full" 
    controls 
    autoPlay
    poster="/images/video-poster.jpg"
  >
    <source src="/videos/mon-event.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la vidéo.
  </video>
) : (
  // Poster...
)}
```

### Personnaliser le poster (image preview)

```tsx
// Dans VideoSection.tsx
<div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-blue-600/90">
  
  {/* Option 1: Garder le gradient avec déco */}
  <div className="absolute inset-0 opacity-20">
    {/* Formes décoratives */}
  </div>

  {/* Option 2: Ajouter votre image */}
  <img 
    src="/images/event-poster.jpg" 
    className="absolute inset-0 w-full h-full object-cover"
    alt="Event preview"
  />
  <div className="absolute inset-0 bg-emerald-600/60"></div>
</div>
```

### Textes et traductions

Les textes sont traduits automatiquement via `useLanguage()` :

```tsx
{t('video.title')}       // "Découvrez l'événement"
{t('video.subtitle')}    // "Plongez au cœur..."
{t('video.cta')}         // "S'inscrire maintenant"
```

### Animations disponibles

**Bouton Play** :
```tsx
// Hover: scale 110%
hover:scale-110

// Changement de couleur
group-hover/btn:text-blue-600
```

**Container** :
```tsx
// Slide + fade au scroll
initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
```

---

## 🤝 3. SECTION PARTENAIRES

### Fichier créé
`/src/app/components/PartnersSection.tsx`

### Caractéristiques

✅ **Défilement horizontal infini** (loop CSS)  
✅ **Pause au hover** automatique  
✅ **Logos en grayscale** → couleur au hover  
✅ **Gradients latéraux** (fade effect)  
✅ **Responsive** complet  

### Ajouter vos logos partenaires

**Étape 1** : Préparer vos logos

Formats recommandés :
- **Format** : PNG avec fond transparent
- **Taille** : 200x80px ou ratio 2.5:1
- **Poids** : < 50KB (optimisé)
- **Nommage** : `partner-nom.png`

**Étape 2** : Placer les logos

```bash
# Créer le dossier
mkdir -p public/images/partners

# Copier vos logos
public/images/partners/
  ├── partner-1.png
  ├── partner-2.png
  └── partner-3.png
```

**Étape 3** : Mettre à jour le code

```tsx
// Dans PartnersSection.tsx
const partners = [
  { 
    name: 'Banque Centrale', 
    logo: '/images/partners/banque-centrale.png' 
  },
  { 
    name: 'MTN Cameroun', 
    logo: '/images/partners/mtn.png' 
  },
  { 
    name: 'Orange', 
    logo: '/images/partners/orange.png' 
  },
  // Ajouter autant que nécessaire
];
```

### Logos de placeholder (temporaire)

Actuellement, le site utilise des placeholders :
```tsx
logo: 'https://via.placeholder.com/200x80/059669/ffffff?text=Partner+1'
```

**À remplacer** par vos vrais logos une fois disponibles.

### Personnalisation du défilement

**Vitesse** :
```css
/* Dans PartnersSection.tsx <style> */
animation: scroll 30s linear infinite;
       /* ↑ Modifier la durée (30s = lent, 15s = rapide) */
```

**Direction inversée** :
```css
@keyframes scroll {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
```

**Nombre de logos visibles** :
```tsx
// Modifier la largeur
className="flex-shrink-0 w-48 h-24"
                      /* ↑ w-32 = plus petit, w-64 = plus grand */
```

### Effets visuels

**Grayscale → Couleur** :
```tsx
className="filter grayscale group-hover:grayscale-0"
```

**Opacité** :
```tsx
className="opacity-60 group-hover:opacity-100"
```

**Shadow au hover** :
```tsx
className="shadow-sm hover:shadow-xl"
```

---

## 📐 RESPONSIVE DESIGN

### Breakpoints utilisés

```css
/* Mobile */
< 768px : 1 colonne, full width

/* Tablet */
768px - 1024px : 2-3 colonnes

/* Desktop */
> 1024px : 3-4 colonnes, layouts optimisés
```

### Tests recommandés

1. **Mobile** (320px, 375px, 414px)
2. **Tablet** (768px, 1024px)
3. **Desktop** (1280px, 1440px, 1920px)

**Outils** :
- Chrome DevTools (F12)
- Firefox Responsive Design Mode
- Safari Inspector

---

## ⚡ OPTIMISATIONS PERFORMANCE

### Vidéos

**YouTube** :
```tsx
// Lazy load avec facade
loading="lazy"
// Autoplay seulement au clic
?autoplay=1
```

**Vidéos locales** :
```bash
# Compresser avec FFmpeg
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M output.mp4
```

### Images partenaires

**Optimisation** :
```bash
# Avec ImageOptim, TinyPNG, ou Squoosh
# Objectif : < 50KB par logo
```

**Lazy loading** :
```tsx
<img 
  src={partner.logo} 
  loading="lazy"  // Ajout recommandé
  alt={partner.name}
/>
```

### Animations

Les animations utilisent `motion/react` (Framer Motion) :
- ✅ GPU-accelerated (transform, opacity)
- ✅ 60fps smooth
- ✅ Intersection Observer (viewport)

---

## 🎨 PERSONNALISATION AVANCÉE

### Couleurs des sections

**VideoSection** :
```tsx
// Gradient hero
className="bg-gradient-to-br from-emerald-600 to-blue-600"

// Bouton play
className="bg-white" // Blanc
className="text-emerald-600" // Icône verte
```

**PartnersSection** :
```tsx
// Background
<SectionContainer variant="gray"> 
// Options: "default" | "gray" | "gradient" | "dark"
```

### Animations personnalisées

**Durée** :
```tsx
transition={{ duration: 0.6 }} // 600ms
// Modifier selon préférence : 0.3 (rapide), 1.0 (lent)
```

**Delay** :
```tsx
transition={{ delay: 0.2 }} // 200ms après
// Créer effets de cascade
```

**Easing** :
```tsx
transition={{ 
  type: 'spring',      // Ressort naturel
  stiffness: 200,      // Rigidité
  damping: 20          // Amortissement
}}
```

---

## 📝 CHECKLIST D'INTÉGRATION

### Traduction
- [ ] Vérifier toutes les clés de traduction
- [ ] Tester le switch FR ↔ EN
- [ ] Ajouter traductions manquantes
- [ ] Tester sur mobile

### Vidéo
- [ ] Remplacer l'ID YouTube
- [ ] Ou uploader vidéo locale
- [ ] Tester lecture sur mobile
- [ ] Vérifier poster image
- [ ] Tester autoplay policy

### Partenaires
- [ ] Préparer logos (PNG, optimisés)
- [ ] Uploader dans `/public/images/partners/`
- [ ] Mettre à jour le tableau `partners`
- [ ] Vérifier défilement fluide
- [ ] Tester pause au hover

### Performance
- [ ] Compresser images (< 50KB)
- [ ] Compresser vidéo (si locale)
- [ ] Tester temps de chargement
- [ ] Vérifier animations 60fps
- [ ] Test Lighthouse (Chrome)

### Responsive
- [ ] Mobile 375px
- [ ] Tablet 768px
- [ ] Desktop 1440px
- [ ] Orientation paysage
- [ ] Touch interactions

---

## 🚀 DÉPLOIEMENT

Après modifications :

```bash
# 1. Vérifier que tout compile
pnpm run build

# 2. Tester en local
# (Le serveur dev est déjà lancé)

# 3. Commit
git add .
git commit -m "feat: add video, partners sections and i18n"

# 4. Push
git push origin main
```

---

## 🆘 DÉPANNAGE

### Le switcher de langue ne fonctionne pas

**Vérifier** :
1. `LanguageProvider` wrap bien `<Router>` dans `App.tsx`
2. Import correct : `import { useLanguage } from '../contexts/LanguageContext'`
3. Clé de traduction existe dans `translations`

### La vidéo ne se charge pas

**YouTube** :
- Vérifier l'ID de la vidéo
- Vérifier que la vidéo est publique
- Tester l'URL directement

**Locale** :
- Fichier dans `/public/videos/`
- Format MP4, H.264
- Poids raisonnable (< 50MB)

### Les logos ne défilent pas

**Vérifier** :
1. Le `<style>` est bien dans le composant
2. La classe `.animate-scroll` est appliquée
3. Les logos sont doublés (`[...partners, ...partners]`)
4. Largeur suffisante pour scroller

### Traductions manquantes

```tsx
// Le hook affiche un warning dans la console
console.warn(`Translation missing for key: ${key}`);

// Ajouter la clé dans LanguageContext.tsx
```

---

## 📞 SUPPORT

Pour toute question ou personnalisation avancée :

1. **Documentation React** : https://react.dev
2. **Motion (Framer)** : https://motion.dev
3. **Tailwind CSS** : https://tailwindcss.com

---

## ✨ PROCHAINES AMÉLIORATIONS

Suggestions pour aller plus loin :

- [ ] Ajouter plus de langues (ES, PT, AR)
- [ ] Analytics sur switch de langue
- [ ] Galerie photos événement
- [ ] Section témoignages
- [ ] FAQ interactive
- [ ] Countdown timer avant événement
- [ ] Newsletter signup
- [ ] Integration CMS (Contentful, Strapi)

---

**Version** : 2.0.0  
**Date** : Avril 2026  
**Auteur** : Équipe Salon de l'Investisseur

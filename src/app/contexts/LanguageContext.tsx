import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

// Clé localStorage pour la langue
const LANGUAGE_STORAGE_KEY = 'salon_investisseur_language';

const translations: Translations = {
  // Navbar
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.porteurs': { fr: 'Porteurs', en: 'Project Owners' },
  'nav.entrepreneurs': { fr: 'Entrepreneurs', en: 'Entrepreneurs' },
  'nav.investisseurs': { fr: 'Investisseurs', en: 'Investors' },
  'nav.programme': { fr: 'Programme', en: 'Schedule' },
  'nav.register': { fr: 'S\'inscrire', en: 'Register' },

  // Hero
  'hero.title': { fr: 'Salon de l\'Investisseur', en: 'Investment Fair' },
  'hero.subtitle': {
    fr: 'L\'événement qui connecte l\'ambition africaine au capital',
    en: 'The event connecting African ambition to capital'
  },
  'hero.cta.porteur': { fr: 'Je suis porteur de projet', en: 'I\'m a project owner' },
  'hero.cta.entrepreneur': { fr: 'Je suis entrepreneur / TPE / PME', en: 'I\'m an entrepreneur / SME' },
  'hero.cta.investisseur': { fr: 'Je suis investisseur', en: 'I\'m an investor' },
  'hero.date': { fr: 'Avril 2026', en: 'April, 2026' },
  'hero.location': { fr: 'Yaoundé, Cameroun', en: 'Yaoundé, Cameroon' },
  'hero.free': { fr: 'Inscription gratuite', en: 'Free registration' },

  // Hero Porteurs
  'hero.porteurs.title': { fr: 'Porteurs de Projets', en: 'Project Owners' },
  'hero.porteurs.subtitle': {
    fr: 'Donnez vie à vos ambitions entrepreneuriales et transformez votre vision en réalité',
    en: 'Bring your entrepreneurial ambitions to life and turn your vision into reality'
  },
  'hero.porteurs.badge': { fr: 'Pour les entrepreneurs ambitieux', en: 'For ambitious entrepreneurs' },

  // Hero Entrepreneurs
  'hero.entrepreneurs.title': { fr: 'Entrepreneurs & PME/TPE', en: 'Entrepreneurs & SMEs' },
  'hero.entrepreneurs.subtitle': {
    fr: 'Développez votre entreprise et connectez-vous avec les bons partenaires',
    en: 'Grow your business and connect with the right partners'
  },
  'hero.entrepreneurs.badge': { fr: 'Pour les entreprises en croissance', en: 'For growing businesses' },

  // Hero Investisseurs
  'hero.investisseurs.title': { fr: 'Investisseurs', en: 'Investors' },
  'hero.investisseurs.subtitle': {
    fr: 'Découvrez les pépites de demain et investissez dans l\'innovation africaine',
    en: 'Discover tomorrow\'s gems and invest in African innovation'
  },
  'hero.investisseurs.badge': { fr: 'Opportunités à fort ROI', en: 'High ROI opportunities' },

  // Stats
  'stats.porteurs': { fr: 'Porteurs de projets attendus', en: 'Expected project owners' },
  'stats.investisseurs': { fr: 'Investisseurs actifs', en: 'Active investors' },
  'stats.journee': { fr: 'Journée d\'opportunités', en: 'Day of opportunities' },

  // Benefits
  'benefits.title': { fr: 'Pourquoi participer ?', en: 'Why participate?' },
  'benefits.subtitle': {
    fr: 'Découvrez les avantages exclusifs qui transformeront votre parcours entrepreneurial',
    en: 'Discover the exclusive benefits that will transform your entrepreneurial journey'
  },
  'benefits.pitch.title': { fr: 'Pitchez votre projet', en: 'Pitch your project' },
  'benefits.pitch.desc': {
    fr: 'Présentez votre vision devant des investisseurs qualifiés et obtenez un feedback immédiat qui accélère votre croissance',
    en: 'Present your vision to qualified investors and get immediate feedback that accelerates your growth'
  },
  'benefits.networking.title': { fr: 'Networking qualifié', en: 'Qualified networking' },
  'benefits.networking.desc': {
    fr: 'Rencontrez les acteurs clés de l\'écosystème entrepreneurial africain et construisez des partenariats stratégiques',
    en: 'Meet key players in the African entrepreneurial ecosystem and build strategic partnerships'
  },
  'benefits.funding.title': { fr: 'Opportunités de financement', en: 'Funding opportunities' },
  'benefits.funding.desc': {
    fr: 'Accédez à des financements adaptés à votre stade de développement et propulsez votre projet vers le succès',
    en: 'Access funding tailored to your development stage and propel your project to success'
  },
  'benefits.learnMore': { fr: 'En savoir plus', en: 'Learn more' },

  // Porteurs Page - Additional content
  'porteurs.why.title': { fr: 'Pourquoi participer ?', en: 'Why participate?' },
  'porteurs.why.subtitle': {
    fr: 'Découvrez les opportunités qui transformeront votre projet',
    en: 'Discover the opportunities that will transform your project'
  },
  'porteurs.access.title': { fr: 'Accès au financement', en: 'Access to funding' },
  'porteurs.access.desc': {
    fr: 'Rencontrez 500 investisseurs actifs à la recherche de projets innovants et prometteurs à financer',
    en: 'Meet 500 active investors looking for innovative and promising projects to fund'
  },
  'porteurs.networking.title': { fr: 'Networking ciblé', en: 'Targeted networking' },
  'porteurs.networking.desc': {
    fr: 'Échangez avec d\'autres entrepreneurs visionnaires et construisez un réseau professionnel solide',
    en: 'Connect with other visionary entrepreneurs and build a strong professional network'
  },
  'porteurs.visibility.title': { fr: 'Visibilité maximale', en: 'Maximum visibility' },
  'porteurs.visibility.desc': {
    fr: 'Pitchez votre projet devant un public qualifié et médiatisez votre initiative auprès des décideurs',
    en: 'Pitch your project to a qualified audience and promote your initiative to decision-makers'
  },
  'porteurs.mentoring.title': { fr: 'Mentorat et conseil', en: 'Mentoring and advice' },
  'porteurs.mentoring.desc': {
    fr: 'Bénéficiez de l\'expertise d\'investisseurs chevronnés pour affiner et optimiser votre stratégie',
    en: 'Benefit from the expertise of experienced investors to refine and optimize your strategy'
  },
  'porteurs.benefits.title': { fr: 'Ce que vous obtiendrez', en: 'What you will get' },
  'porteurs.benefits.subtitle': {
    fr: 'Des opportunités concrètes pour accélérer votre croissance',
    en: 'Concrete opportunities to accelerate your growth'
  },
  'porteurs.benefits.pitch': {
    fr: 'Sessions de pitch de 5 minutes devant des investisseurs',
    en: '5-minute pitch sessions in front of investors'
  },
  'porteurs.benefits.workshops': {
    fr: 'Accès à des ateliers sur la levée de fonds',
    en: 'Access to fundraising workshops'
  },
  'porteurs.benefits.partnerships': {
    fr: 'Opportunités de partenariats stratégiques',
    en: 'Strategic partnership opportunities'
  },
  'porteurs.benefits.feedback': {
    fr: 'Feedback personnalisé sur votre business plan',
    en: 'Personalized feedback on your business plan'
  },
  'porteurs.benefits.angels': {
    fr: 'Connexions directes avec des business angels',
    en: 'Direct connections with business angels'
  },
  'porteurs.benefits.media': {
    fr: 'Exposition médiatique pour votre projet',
    en: 'Media exposure for your project'
  },
  'porteurs.cta.title': {
    fr: 'Prêt à transformer votre projet en réalité ?',
    en: 'Ready to turn your project into reality?'
  },
  'porteurs.cta.subtitle': {
    fr: 'L\'inscription est gratuite et ne prend que 2 minutes',
    en: 'Registration is free and takes only 2 minutes'
  },
  'porteurs.cta.button': { fr: 'Je m\'inscris maintenant', en: 'I register now' },
  'porteurs.cta.features': {
    fr: '✓ 100% gratuit · ✓ Confirmation instantanée · ✓ Ticket digital',
    en: '✓ 100% free · ✓ Instant confirmation · ✓ Digital ticket'
  },

  // Entrepreneurs Page - Additional content
  'entrepreneurs.why.title': { fr: 'Pourquoi participer ?', en: 'Why participate?' },
  'entrepreneurs.why.subtitle': {
    fr: 'Accélérez la croissance de votre entreprise',
    en: 'Accelerate your business growth'
  },
  'entrepreneurs.growth.title': { fr: 'Croissance accélérée', en: 'Accelerated growth' },
  'entrepreneurs.growth.desc': {
    fr: 'Rencontrez des investisseurs et partenaires stratégiques pour financer votre expansion',
    en: 'Meet investors and strategic partners to fund your expansion'
  },
  'entrepreneurs.ecosystem.title': { fr: 'Écosystème entrepreneurial', en: 'Entrepreneurial ecosystem' },
  'entrepreneurs.ecosystem.desc': {
    fr: 'Connectez-vous avec d\'autres entrepreneurs et partez des expériences réussies',
    en: 'Connect with other entrepreneurs and learn from successful experiences'
  },
  'entrepreneurs.solutions.title': { fr: 'Solutions adaptées', en: 'Tailored solutions' },
  'entrepreneurs.solutions.desc': {
    fr: 'Trouvez les services et expertises dont vous avez besoin pour votre PME/TPE',
    en: 'Find the services and expertise you need for your SME'
  },
  'entrepreneurs.visibility.title': { fr: 'Visibilité accrue', en: 'Increased visibility' },
  'entrepreneurs.visibility.desc': {
    fr: 'Faites connaître votre entreprise à une audience qualifiée d\'acteurs économiques',
    en: 'Showcase your company to a qualified audience of economic players'
  },
  'entrepreneurs.benefits.title': { fr: 'Ce que vous obtiendrez', en: 'What you will get' },
  'entrepreneurs.benefits.subtitle': {
    fr: 'Des outils et connexions pour propulser votre activité',
    en: 'Tools and connections to boost your business'
  },
  'entrepreneurs.benefits.pitch': {
    fr: 'Présentation de votre entreprise devant des investisseurs potentiels',
    en: 'Present your company to potential investors'
  },
  'entrepreneurs.benefits.investors': {
    fr: 'Accès direct à des sources de financement et d\'investissement',
    en: 'Direct access to funding and investment sources'
  },
  'entrepreneurs.benefits.networking': {
    fr: 'Rencontres B2B et partenariats commerciaux',
    en: 'B2B meetings and business partnerships'
  },
  'entrepreneurs.benefits.expertise': {
    fr: 'Conseils d\'experts et coaching entreprise',
    en: 'Expert advice and business coaching'
  },
  'entrepreneurs.benefits.services': {
    fr: 'Accès à des services spécialisés pour les PME/TPE',
    en: 'Access to specialized services for SMEs'
  },
  'entrepreneurs.benefits.visibility': {
    fr: 'Exposition auprès des décideurs économiques',
    en: 'Exposure to economic decision-makers'
  },
  'entrepreneurs.cta.title': {
    fr: 'Prêt à développer votre entreprise ?',
    en: 'Ready to grow your business?'
  },
  'entrepreneurs.cta.subtitle': {
    fr: 'Inscrivez-vous gratuitement et accélez votre croissance',
    en: 'Register for free and accelerate your growth'
  },
  'entrepreneurs.cta.button': { fr: 'Je m\'inscris maintenant', en: 'I register now' },
  'entrepreneurs.cta.features': {
    fr: '✓ 100% gratuit · ✓ Confirmation instantanée · ✓ Email simple',
    en: '✓ 100% free · ✓ Instant confirmation · ✓ Simple email'
  },

  // Investisseurs Page - Additional content
  'investisseurs.why.title': { fr: 'Pourquoi participer ?', en: 'Why participate?' },
  'investisseurs.dealflow.title': { fr: 'Deal flow de qualité', en: 'Quality deal flow' },
  'investisseurs.dealflow.desc': {
    fr: 'Accédez à 1000 projets entrepreneuriaux présélectionnés et diversifiés',
    en: 'Access 1000 pre-selected and diversified entrepreneurial projects'
  },
  'investisseurs.roi.title': { fr: 'Opportunités à fort ROI', en: 'High ROI opportunities' },
  'investisseurs.roi.desc': {
    fr: 'Investissez dans l\'innovation africaine avec un potentiel de croissance exceptionnel',
    en: 'Invest in African innovation with exceptional growth potential'
  },
  'investisseurs.sectors.title': { fr: 'Secteurs diversifiés', en: 'Diversified sectors' },
  'investisseurs.sectors.desc': {
    fr: 'Tech, agribusiness, santé, éducation, énergie et bien d\'autres secteurs porteurs',
    en: 'Tech, agribusiness, health, education, energy and many other promising sectors'
  },
  'investisseurs.networking.title': { fr: 'Networking stratégique', en: 'Strategic networking' },
  'investisseurs.networking.desc': {
    fr: 'Rencontrez d\'autres investisseurs et partagez vos expériences d\'investissement',
    en: 'Meet other investors and share your investment experiences'
  },
  'investisseurs.projects.title': { fr: 'Typologie des projets présents', en: 'Types of projects present' },
  'investisseurs.projects.tech': { fr: 'Startups Tech', en: 'Tech Startups' },
  'investisseurs.projects.tech.desc': { fr: 'IA, Fintech, E-commerce, SaaS', en: 'AI, Fintech, E-commerce, SaaS' },
  'investisseurs.projects.agri': { fr: 'Agribusiness', en: 'Agribusiness' },
  'investisseurs.projects.agri.desc': {
    fr: 'Agriculture moderne, Agro-transformation',
    en: 'Modern agriculture, Agro-processing'
  },
  'investisseurs.projects.health': { fr: 'Santé & Biotech', en: 'Health & Biotech' },
  'investisseurs.projects.health.desc': {
    fr: 'Healthtech, Dispositifs médicaux',
    en: 'Healthtech, Medical devices'
  },
  'investisseurs.projects.education': { fr: 'Éducation', en: 'Education' },
  'investisseurs.projects.education.desc': {
    fr: 'EdTech, Formation professionnelle',
    en: 'EdTech, Professional training'
  },
  'investisseurs.projects.energy': { fr: 'Énergie renouvelable', en: 'Renewable energy' },
  'investisseurs.projects.energy.desc': {
    fr: 'Solaire, Biomasse, Solutions vertes',
    en: 'Solar, Biomass, Green solutions'
  },
  'investisseurs.projects.b2b': { fr: 'Services B2B', en: 'B2B Services' },
  'investisseurs.projects.b2b.desc': {
    fr: 'Consulting, Logistique, Services pro',
    en: 'Consulting, Logistics, Professional services'
  },
  'investisseurs.benefits.title': { fr: 'Ce que vous obtiendrez', en: 'What you will get' },
  'investisseurs.benefits.pitch': {
    fr: 'Accès à des sessions de pitch structurées',
    en: 'Access to structured pitch sessions'
  },
  'investisseurs.benefits.files': {
    fr: 'Dossiers de présentation détaillés des projets',
    en: 'Detailed project presentation files'
  },
  'investisseurs.benefits.meetings': {
    fr: 'Espaces de rencontre privés avec les porteurs',
    en: 'Private meeting spaces with project owners'
  },
  'investisseurs.benefits.analysis': {
    fr: 'Analyses sectorielles et tendances du marché',
    en: 'Sector analysis and market trends'
  },
  'investisseurs.benefits.coinvest': {
    fr: 'Opportunités de co-investissement',
    en: 'Co-investment opportunities'
  },
  'investisseurs.benefits.followup': {
    fr: 'Suivi post-événement pour concrétiser les deals',
    en: 'Post-event follow-up to close deals'
  },
  'investisseurs.cta.title': {
    fr: 'Rejoignez-nous le 10 Avril 2026',
    en: 'Join us on April 10, 2026'
  },
  'investisseurs.cta.subtitle': {
    fr: 'Participation gratuite - Places limitées',
    en: 'Free participation - Limited seats'
  },
  'investisseurs.cta.button': {
    fr: 'Je confirme ma participation',
    en: 'I confirm my participation'
  },

  // Programme Page
  'programme.hero.title': { fr: 'Programme de la journée', en: 'Event Schedule' },
  'programme.hero.date': { fr: '10 Avril 2026', en: 'April 10, 2026' },
  'programme.hero.location': { fr: 'Yaoundé, Cameroun', en: 'Yaoundé, Cameroon' },
  'programme.schedule.welcome': { fr: 'Accueil et enregistrement', en: 'Welcome and registration' },
  'programme.schedule.welcome.desc': {
    fr: 'Check-in des participants, remise des badges',
    en: 'Participant check-in, badge distribution'
  },
  'programme.schedule.opening': { fr: 'Cérémonie d\'ouverture', en: 'Opening ceremony' },
  'programme.schedule.opening.desc': {
    fr: 'Discours d\'ouverture et présentation de la journée',
    en: 'Opening speech and presentation of the day'
  },
  'programme.schedule.pitch.morning': { fr: 'Sessions de pitch - Matinée', en: 'Pitch Sessions - Morning' },
  'programme.schedule.pitch.morning.desc': {
    fr: 'Présentations des projets par secteur (Tech, Agribusiness)',
    en: 'Project presentations by sector (Tech, Agribusiness)'
  },
  'programme.schedule.lunch': { fr: 'Déjeuner networking', en: 'Networking lunch' },
  'programme.schedule.lunch.desc': {
    fr: 'Pause déjeuner et opportunités de networking',
    en: 'Lunch break and networking opportunities'
  },
  'programme.schedule.pitch.afternoon': {
    fr: 'Sessions de pitch - Après-midi',
    en: 'Pitch Sessions - Afternoon'
  },
  'programme.schedule.pitch.afternoon.desc': {
    fr: 'Suite des présentations (Santé, Éducation, Énergie)',
    en: 'Continuation of presentations (Health, Education, Energy)'
  },
  'programme.schedule.b2b': { fr: 'Rencontres B2B', en: 'B2B Meetings' },
  'programme.schedule.b2b.desc': {
    fr: 'Rendez-vous individuels porteurs-investisseurs',
    en: 'Individual meetings between project owners and investors'
  },
  'programme.schedule.closing': { fr: 'Clôture et cocktail', en: 'Closing and cocktail' },
  'programme.schedule.closing.desc': {
    fr: 'Bilan de la journée et networking final',
    en: 'Day review and final networking'
  },
  'programme.info.title': { fr: 'Informations pratiques', en: 'Practical information' },
  'programme.info.venue': { fr: 'Lieu', en: 'Venue' },
  'programme.info.venue.name': {
    fr: 'Centre de conférences international',
    en: 'International conference center'
  },
  'programme.info.venue.location': { fr: 'Yaoundé, Cameroun', en: 'Yaoundé, Cameroon' },
  'programme.info.hours': { fr: 'Horaires', en: 'Hours' },
  'programme.info.hours.start': { fr: 'Accueil dès 08:00', en: 'Reception from 08:00' },
  'programme.info.hours.end': { fr: 'Fin de l\'événement à 18:00', en: 'Event ends at 18:00' },
  'programme.info.catering': { fr: 'Restauration', en: 'Catering' },
  'programme.info.catering.desc': {
    fr: 'Déjeuner et pauses café offerts à tous les participants',
    en: 'Lunch and coffee breaks provided for all participants'
  },
  'programme.info.dress': { fr: 'Dress code', en: 'Dress code' },
  'programme.info.dress.desc': {
    fr: 'Tenue professionnelle recommandée (business casual)',
    en: 'Professional attire recommended (business casual)'
  },
  'programme.cta.title': { fr: 'Prêt à participer ?', en: 'Ready to participate?' },
  'programme.cta.subtitle': {
    fr: 'Réservez votre place dès maintenant - Inscription gratuite',
    en: 'Reserve your spot now - Free registration'
  },
  'programme.cta.button': { fr: 'S\'inscrire maintenant', en: 'Register now' },

  // Inscription Page
  'inscription.header.title': { fr: 'Inscription au Salon', en: 'Event Registration' },
  'inscription.header.subtitle': {
    fr: 'Complétez votre inscription en 4 étapes simples',
    en: 'Complete your registration in 4 simple steps'
  },
  'inscription.steps.profile': { fr: 'Profil', en: 'Profile' },
  'inscription.steps.info': { fr: 'Informations', en: 'Information' },
  'inscription.steps.details': { fr: 'Détails', en: 'Details' },
  'inscription.steps.confirmation': { fr: 'Confirmation', en: 'Confirmation' },
  'inscription.step1.title': { fr: 'Choisissez votre profil', en: 'Choose your profile' },
  'inscription.step1.porteur.title': { fr: 'Porteur de projet', en: 'Project owner' },
  'inscription.step1.porteur.desc': {
    fr: 'Je souhaite présenter mon projet et trouver des investisseurs',
    en: 'I want to present my project and find investors'
  },
  'inscription.step1.entrepreneur.title': { fr: 'Entrepreneur / TPE / PME', en: 'Entrepreneur / SME' },
  'inscription.step1.entrepreneur.desc': {
    fr: 'Je développe mon entreprise et cherche des opportunités de croissance',
    en: 'I\'m developing my business and looking for growth opportunities'
  },
  'inscription.step1.investisseur.title': { fr: 'Investisseur', en: 'Investor' },
  'inscription.step1.investisseur.desc': {
    fr: 'Je recherche des opportunités d\'investissement',
    en: 'I\'m looking for investment opportunities'
  },
  'inscription.step2.title': { fr: 'Informations personnelles', en: 'Personal information' },
  'inscription.step2.firstName': { fr: 'Prénom *', en: 'First name *' },
  'inscription.step2.firstName.placeholder': { fr: 'Votre prénom', en: 'Your first name' },
  'inscription.step2.lastName': { fr: 'Nom *', en: 'Last name *' },
  'inscription.step2.lastName.placeholder': { fr: 'Votre nom', en: 'Your last name' },
  'inscription.step2.email': { fr: 'Email *', en: 'Email *' },
  'inscription.step2.email.placeholder': { fr: 'votre.email@exemple.com', en: 'your.email@example.com' },
  'inscription.step2.phone': { fr: 'Téléphone *', en: 'Phone *' },
  'inscription.step2.phone.placeholder': { fr: '+237 6XX XX XX XX', en: '+237 6XX XX XX XX' },
  'inscription.step3.title': { fr: 'Informations complémentaires', en: 'Additional information' },
  'inscription.step3.city': { fr: 'Ville *', en: 'City *' },
  'inscription.step3.city.placeholder': { fr: 'Yaoundé', en: 'Yaoundé' },
  'inscription.step3.country': { fr: 'Pays *', en: 'Country *' },
  'inscription.step3.country.placeholder': { fr: 'Cameroun', en: 'Cameroon' },
  'inscription.step3.projectName': { fr: 'Nom du projet', en: 'Project name' },
  'inscription.step3.projectName.placeholder': { fr: 'Mon projet innovant', en: 'My innovative project' },
  'inscription.step3.sector': { fr: 'Secteur d\'activité', en: 'Business sector' },
  'inscription.step3.sector.select': { fr: 'Sélectionner', en: 'Select' },
  'inscription.step3.sector.tech': { fr: 'Tech / Digital', en: 'Tech / Digital' },
  'inscription.step3.sector.agri': { fr: 'Agribusiness', en: 'Agribusiness' },
  'inscription.step3.sector.health': { fr: 'Santé', en: 'Health' },
  'inscription.step3.sector.education': { fr: 'Éducation', en: 'Education' },
  'inscription.step3.sector.energy': { fr: 'Énergie', en: 'Energy' },
  'inscription.step3.sector.other': { fr: 'Autre', en: 'Other' },
  'inscription.step3.stage': { fr: 'Stade de développement', en: 'Development stage' },
  'inscription.step3.stage.idea': { fr: 'Idée', en: 'Idea' },
  'inscription.step3.stage.prototype': { fr: 'Prototype', en: 'Prototype' },
  'inscription.step3.stage.mvp': { fr: 'MVP / Produit lancé', en: 'MVP / Product launched' },
  'inscription.step3.stage.growth': { fr: 'En croissance', en: 'Growing' },
  'inscription.step3.organization': { fr: 'Organisation', en: 'Organization' },
  'inscription.step3.organization.placeholder': {
    fr: 'Nom de votre organisation',
    en: 'Your organization name'
  },
  'inscription.step3.investmentRange': { fr: 'Ticket d\'investissement', en: 'Investment ticket' },
  'inscription.step3.interestSectors': { fr: 'Secteurs d\'intérêt', en: 'Sectors of interest' },
  'inscription.step3.interestSectors.placeholder': {
    fr: 'Tech, Agribusiness, Santé...',
    en: 'Tech, Agribusiness, Health...'
  },
  'inscription.step4.title': { fr: 'Confirmez votre inscription', en: 'Confirm your registration' },
  'inscription.step4.profile': { fr: 'Profil', en: 'Profile' },
  'inscription.step4.profile.porteur': { fr: 'Porteur de projet', en: 'Project owner' },
  'inscription.step4.profile.entrepreneur': { fr: 'Entrepreneur / TPE / PME', en: 'Entrepreneur / SME' },
  'inscription.step4.profile.investisseur': { fr: 'Investisseur', en: 'Investor' },
  'inscription.step4.fullName': { fr: 'Nom complet', en: 'Full name' },
  'inscription.step4.email': { fr: 'Email', en: 'Email' },
  'inscription.step4.phone': { fr: 'Téléphone', en: 'Phone' },
  'inscription.step4.location': { fr: 'Localisation', en: 'Location' },
  'inscription.step4.project': { fr: 'Projet', en: 'Project' },
  'inscription.step4.sector': { fr: 'Secteur', en: 'Sector' },
  'inscription.step4.organization': { fr: 'Organisation', en: 'Organization' },
  'inscription.button.back': { fr: 'Retour', en: 'Back' },
  'inscription.button.next': { fr: 'Suivant', en: 'Next' },
  'inscription.button.submitting': { fr: 'Inscription en cours...', en: 'Registering...' },
  'inscription.button.confirm': {
    fr: 'Confirmer et générer mon ticket',
    en: 'Confirm and generate my ticket'
  },

  // Video Section
  'video.title': { fr: 'Découvrez l\'événement', en: 'Discover the event' },
  'video.subtitle': {
    fr: 'Plongez au cœur de l\'écosystème entrepreneurial africain',
    en: 'Dive into the heart of the African entrepreneurial ecosystem'
  },
  'video.cta': { fr: 'S\'inscrire maintenant', en: 'Register now' },

  // Partners
  'partners.title': { fr: 'Ils nous font confiance', en: 'They trust us' },
  'partners.subtitle': {
    fr: 'Nos partenaires institutionnels et privés',
    en: 'Our institutional and private partners'
  },

  // CTA
  'cta.title': { fr: 'Prêt à transformer votre avenir ?', en: 'Ready to transform your future?' },
  'cta.subtitle': {
    fr: 'Inscrivez-vous gratuitement et rejoignez l\'élite entrepreneuriale africaine',
    en: 'Register for free and join the African entrepreneurial elite'
  },
  'cta.limited': { fr: 'Places limitées', en: 'Limited seats' },
  'cta.learnMore': { fr: 'En savoir plus', en: 'Learn more' },
  'cta.registerNow': { fr: 'S\'inscrire maintenant', en: 'Register now' },
  'cta.free': { fr: '100% gratuit', en: '100% free' },
  'cta.instant': { fr: 'Confirmation immédiate', en: 'Instant confirmation' },
  'cta.ticket': { fr: 'Ticket digital instantané', en: 'Instant digital ticket' },

  // Footer
  'footer.about': {
    fr: 'L\'événement qui connecte l\'ambition africaine au capital',
    en: 'The event connecting African ambition to capital'
  },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
  'footer.event': { fr: 'Événement', en: 'Event' },
  'footer.date': { fr: 'Date: Avril 2026', en: 'Date: April, 2026' },
  'footer.location': { fr: 'Lieu: Yaoundé, Cameroun', en: 'Location: Yaoundé, Cameroon' },
  'footer.free': { fr: 'Inscription: Gratuite', en: 'Registration: Free' },
  'footer.rights': { fr: 'Tous droits réservés', en: 'All rights reserved' },

  // Ticket Page
  'ticket.notFound': { fr: 'Ticket non trouvé', en: 'Ticket not found' },
  'ticket.backToRegistration': { fr: 'Retour à l\'inscription', en: 'Back to registration' },
  'ticket.confirmed.title': { fr: 'Inscription confirmée !', en: 'Registration confirmed!' },
  'ticket.confirmed.subtitle': {
    fr: 'Votre ticket a été généré avec succès',
    en: 'Your ticket has been successfully generated'
  },
  'ticket.event.name': { fr: 'Salon de l\'Investisseur', en: 'Investment Fair' },
  'ticket.event.year': { fr: 'Yaoundé 2026', en: 'Yaoundé 2026' },
  'ticket.id': { fr: 'Ticket ID', en: 'Ticket ID' },
  'ticket.date': { fr: '10 Avril 2026', en: 'April 10, 2026' },
  'ticket.location': { fr: 'Yaoundé', en: 'Yaoundé' },
  'ticket.participantType': { fr: 'Type de participant', en: 'Participant type' },
  'ticket.porteur': { fr: '🚀 Porteur de projet', en: '🚀 Project owner' },
  'ticket.investisseur': { fr: '💼 Investisseur', en: '💼 Investor' },
  'ticket.fullName': { fr: 'Nom complet', en: 'Full name' },
  'ticket.email': { fr: 'Email', en: 'Email' },
  'ticket.phone': { fr: 'Téléphone', en: 'Phone' },
  'ticket.location.label': { fr: 'Localisation', en: 'Location' },
  'ticket.project': { fr: 'Projet', en: 'Project' },
  'ticket.organization': { fr: 'Organisation', en: 'Organization' },
  'ticket.qr.instruction': {
    fr: 'Présentez ce QR code à l\'entrée',
    en: 'Present this QR code at the entrance'
  },
  'ticket.practicalInfo': { fr: 'Informations pratiques', en: 'Practical information' },
  'ticket.info.date': { fr: '📅 Date', en: '📅 Date' },
  'ticket.info.date.full': { fr: 'Jeudi 10 Avril 2026', en: 'Thursday, April 10, 2026' },
  'ticket.info.hours': { fr: '🕐 Horaires', en: '🕐 Hours' },
  'ticket.info.hours.time': { fr: '08h00 - 18h00', en: '08:00 AM - 06:00 PM' },
  'ticket.info.venue': { fr: '📍 Lieu', en: '📍 Venue' },
  'ticket.info.venue.name': {
    fr: 'Centre de Conférences, Yaoundé',
    en: 'Conference Center, Yaoundé'
  },
  'ticket.info.dressCode': { fr: '👔 Dress code', en: '👔 Dress code' },
  'ticket.info.dressCode.style': { fr: 'Business casual', en: 'Business casual' },
  'ticket.download': { fr: 'Télécharger le ticket', en: 'Download ticket' },
  'ticket.share': { fr: 'Partager', en: 'Share' },
  'ticket.share.text': {
    fr: 'Je serai au Salon de l\'Investisseur le 10 Avril 2026 à Yaoundé ! 🚀',
    en: 'I\'ll be at the Investment Fair on April 10, 2026 in Yaoundé! 🚀'
  },
  'ticket.share.title': { fr: 'Salon de l\'Investisseur', en: 'Investment Fair' },
  'ticket.share.copied': {
    fr: 'Lien copié dans le presse-papier !',
    en: 'Link copied to clipboard!'
  },
  'ticket.nextSteps.title': { fr: '📧 Prochaines étapes', en: '📧 Next steps' },
  'ticket.nextSteps.email': {
    fr: 'Un email de confirmation a été envoyé à',
    en: 'A confirmation email has been sent to'
  },
  'ticket.nextSteps.download': {
    fr: 'Téléchargez votre ticket et conservez-le sur votre téléphone',
    en: 'Download your ticket and keep it on your phone'
  },
  'ticket.nextSteps.present': {
    fr: 'Présentez le QR code à l\'accueil le jour de l\'événement',
    en: 'Present the QR code at the reception on event day'
  },
  'ticket.backHome': { fr: 'Retour à l\'accueil', en: 'Back to home' },

  // HomePage Quick Links
  'quicklinks.porteurs': { fr: 'Porteurs de projets', en: 'Project owners' },
  'quicklinks.investisseurs': { fr: 'Investisseurs', en: 'Investors' },
  'quicklinks.programme': { fr: 'Programme', en: 'Schedule' },
  'quicklinks.inscription': { fr: 'Inscription', en: 'Registration' },

  // Modal Learn More
  'modal.pitch.title': { fr: 'Pitchez votre projet', en: 'Pitch your project' },
  'modal.pitch.content': {
    fr: 'Présentez votre vision devant des investisseurs qualifiés et obtenez un feedback immédiat qui accélère votre croissance. Vous disposerez de 5 minutes pour convaincre et séduire des business angels, fonds d\'investissement et investisseurs privés.',
    en: 'Present your vision to qualified investors and get immediate feedback that accelerates your growth. You\'ll have 5 minutes to convince business angels, investment funds and private investors.'
  },
  'modal.pitch.features.title': { fr: 'Ce que vous obtiendrez :', en: 'What you\'ll get:' },
  'modal.pitch.feature1': {
    fr: 'Session de pitch de 5 minutes chronométrée',
    en: '5-minute timed pitch session'
  },
  'modal.pitch.feature2': {
    fr: 'Feedback direct des investisseurs',
    en: 'Direct feedback from investors'
  },
  'modal.pitch.feature3': {
    fr: 'Opportunités de rendez-vous individuels',
    en: 'One-on-one meeting opportunities'
  },
  'modal.pitch.feature4': {
    fr: 'Accès à la base d\'investisseurs participants',
    en: 'Access to participating investors database'
  },
  'modal.networking.title': { fr: 'Networking qualifié', en: 'Qualified networking' },
  'modal.networking.content': {
    fr: 'Rencontrez les acteurs clés de l\'écosystème entrepreneurial africain et construisez des partenariats stratégiques. Des espaces dédiés au networking vous permettront d\'échanger avec 1500+ participants triés sur le volet.',
    en: 'Meet key players in the African entrepreneurial ecosystem and build strategic partnerships. Dedicated networking spaces will allow you to connect with 1500+ carefully selected participants.'
  },
  'modal.networking.features.title': { fr: 'Opportunités de connexion :', en: 'Connection opportunities:' },
  'modal.networking.feature1': {
    fr: 'Déjeuner networking avec tables thématiques',
    en: 'Networking lunch with themed tables'
  },
  'modal.networking.feature2': {
    fr: 'Pause café interactive avec speed networking',
    en: 'Interactive coffee break with speed networking'
  },
  'modal.networking.feature3': {
    fr: 'Salons privés pour rencontres B2B',
    en: 'Private lounges for B2B meetings'
  },
  'modal.networking.feature4': {
    fr: 'Application mobile pour matchmaking',
    en: 'Mobile app for matchmaking'
  },
  'modal.funding.title': { fr: 'Opportunités de financement', en: 'Funding opportunities' },
  'modal.funding.content': {
    fr: 'Accédez à des financements adaptés à votre stade de développement et propulsez votre projet vers le succès. Que vous soyez en phase d\'amorçage, de développement ou de croissance, vous trouverez les investisseurs adaptés à vos besoins.',
    en: 'Access funding tailored to your development stage and propel your project to success. Whether you\'re in seed, development or growth phase, you\'ll find investors suited to your needs.'
  },
  'modal.funding.features.title': {
    fr: 'Types de financement disponibles :',
    en: 'Available funding types:'
  },
  'modal.funding.feature1': {
    fr: 'Love money et business angels (10k - 100k €)',
    en: 'Love money and business angels (10k - 100k €)'
  },
  'modal.funding.feature2': {
    fr: 'Fonds de capital-risque (100k - 2M €)',
    en: 'Venture capital funds (100k - 2M €)'
  },
  'modal.funding.feature3': {
    fr: 'Prêts bancaires et garanties',
    en: 'Bank loans and guarantees'
  },
  'modal.funding.feature4': {
    fr: 'Subventions et programmes d\'accélération',
    en: 'Grants and acceleration programs'
  },
  'modal.cta': { fr: 'S\'inscrire maintenant', en: 'Register now' },
  'modal.close': { fr: 'Fermer', en: 'Close' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Fonction pour récupérer la langue depuis localStorage
const getStoredLanguage = (): Language => {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === 'fr' || stored === 'en') {
      return stored;
    }
  } catch (error) {
    console.warn('Error reading language from localStorage:', error);
  }

  // Détection automatique de la langue du navigateur
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('en')) {
    return 'en';
  }

  // Fallback par défaut: français
  return 'fr';
};

// Fonction pour sauvegarder la langue dans localStorage
const saveLanguage = (lang: Language): void => {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    console.warn('Error saving language to localStorage:', error);
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialiser avec la langue stockée ou fallback
  const [language, setLanguageState] = useState<Language>(getStoredLanguage);

  // Sauvegarder la langue à chaque changement
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguage(lang);

    // Mettre à jour l'attribut lang du HTML pour l'accessibilité
    document.documentElement.lang = lang;
  };

  // Charger la langue au montage du composant
  useEffect(() => {
    const storedLang = getStoredLanguage();
    setLanguageState(storedLang);
    document.documentElement.lang = storedLang;
  }, []);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

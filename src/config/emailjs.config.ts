/**
 * EmailJS Configuration
 * 
 * Pour configurer EmailJS:
 * 1. Créez un compte sur https://www.emailjs.com
 * 2. Créez un Service (ex: Gmail, Outlook, etc.)
 * 3. Créez des Templates pour:
 *    - Admin notification (template pour informer l'admin)
 *    - User confirmation (template pour confirmer à l'utilisateur)
 * 4. Remplacez les valeurs ci-dessous avec vos identifiants
 */

export const EMAILJS_CONFIG = {
  // Votre clé publique EmailJS (trouvée dans Account > API Keys)
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // Votre Service ID (ex: service_xxxxxxxxx)
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  
  // Template ID pour l'email envoyé à l'admin
  ADMIN_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID || 'YOUR_ADMIN_TEMPLATE_ID',
  
  // Template ID pour l'email de confirmation envoyé à l'utilisateur
  USER_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID || 'YOUR_USER_TEMPLATE_ID',
  
  // Email admin où reçevoir les inscriptions
  ADMIN_EMAIL: 'sanangdarel17@gmail.com',
};

/**
 * Variables de template recommandées:
 * 
 * Template Admin:
 * - {{to_email}} : Email du destinataire (admin)
 * - {{to_name}} : Nom du destinataire
 * - {{from_name}} : Nom de l'utilisateur
 * - {{from_email}} : Email de l'utilisateur
 * - {{subject}} : Sujet
 * - {{project_name}} : Nom du projet
 * - {{project_sector}} : Secteur d'activité
 * - {{user_name}} : Nom complet de l'utilisateur
 * - {{user_email}} : Email de l'utilisateur
 * - {{user_phone}} : Téléphone de l'utilisateur
 * - {{user_city}} : Ville
 * - {{user_country}} : Pays
 * - {{registration_date}} : Date d'inscription
 * 
 * Template User:
 * - {{to_email}} : Email de l'utilisateur
 * - {{to_name}} : Prénom de l'utilisateur
 * - {{from_name}} : Nom du service (Investment Fair)
 * - {{from_email}} : Email de service
 * - {{subject}} : Sujet
 * - {{project_name}} : Nom du projet
 * - {{project_sector}} : Secteur d'activité
 * - {{user_name}} : Prénom de l'utilisateur
 */

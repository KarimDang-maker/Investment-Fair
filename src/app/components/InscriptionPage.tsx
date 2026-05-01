import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, User, Mail, Phone, MapPin, Briefcase, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useLanguage } from '../contexts/LanguageContext';

type ProfileType = 'porteur' | 'investisseur' | 'entrepreneur' | '';

interface FormData {
  profileType: ProfileType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  projectName?: string;
  sector?: string;
  stage?: string;
  organization?: string;
  investmentRange?: string;
  interestSectors?: string;
}

export default function InscriptionPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const typeFromUrl = searchParams.get('type') as ProfileType;

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState<FormData>({
    profileType: typeFromUrl || '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: 'Cameroun',
    projectName: '',
    sector: '',
    stage: '',
    organization: '',
    investmentRange: '',
    interestSectors: ''
  });

  useEffect(() => {
    if (typeFromUrl && (typeFromUrl === 'porteur' || typeFromUrl === 'investisseur' || typeFromUrl === 'entrepreneur')) {
      setFormData(prev => ({ ...prev, profileType: typeFromUrl }));
      setCurrentStep(2);
    }
  }, [typeFromUrl]);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // envoi du mail par mailto
  const sendEngineerEmails = async (formData: FormData) => {
  const adminEmail = 'contact@gieaorg.com';

  const subject = 'Nouvelle inscription - Investment Fair';

  const body = `Bonjour,

Une nouvelle inscription a été effectuée :

--- INFORMATIONS UTILISATEUR ---
Nom: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone}
Ville: ${formData.city}, ${formData.country}

Projet: ${formData.projectName}
Secteur: ${formData.sector}

Date: ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}

--- MESSAGE AUTOMATIQUE ---
Merci pour votre inscription au salon de l'investisseur.
Nous avons bien reçu vos informations et nous vous recontacterons bientôt.

Cordialement,
L'équipe du salon de l'investisseur
`;

  try {
    window.open(
      `mailto:${adminEmail}?cc=${formData.email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );

    return true;
  } catch (error) {
    console.error('Error opening email client:', error);
    return false;
  }
};

 const handleSubmit = async () => {
  if (
    formData.profileType === 'entrepreneur' ||
    formData.profileType === 'porteur' ||
    formData.profileType === 'investisseur'
  ) {
    setIsSubmitting(true);

    try {
      const emailsSent = await sendEngineerEmails(formData);

      if (emailsSent) {
        setSubmitMessage('success');
        setTimeout(() => navigate('/'), 2000);
      } else {
        setSubmitMessage('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('error');
    } finally {
      setIsSubmitting(false);
    }
  }
};

  const canProceedStep2 = formData.firstName && formData.lastName && formData.email && formData.phone;
  const canProceedStep3 = () => {
    if (!formData.city || !formData.country) return false;
    
    if (formData.profileType === 'entrepreneur') {
      return !!(formData.projectName && formData.sector);
    }
    
    if (formData.profileType === 'porteur') {
      return !!(formData.projectName && formData.sector);
    }
    
    return true;
  };

  const steps = [
    { number: 1, labelKey: 'inscription.steps.profile' },
    { number: 2, labelKey: 'inscription.steps.info' },
    { number: 3, labelKey: 'inscription.steps.details' },
    { number: 4, labelKey: 'inscription.steps.confirmation' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('inscription.header.title')}
          </h1>
          <p className="text-gray-600">
            {t('inscription.header.subtitle')}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                      currentStep >= step.number
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className="text-xs mt-2 font-medium text-gray-600 hidden sm:block">
                    {t(step.labelKey)}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-colors ${
                      currentStep > step.number ? 'bg-emerald-600' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Step 1: Profile Selection */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('inscription.step1.title')}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                  onClick={() => {
                    updateFormData('profileType', 'porteur');
                    setCurrentStep(2);
                  }}
                  className={`p-8 border-2 rounded-xl transition-all hover:shadow-lg ${
                    formData.profileType === 'porteur'
                      ? 'border-emerald-600 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('inscription.step1.porteur.title')}</h3>
                  <p className="text-gray-600 text-sm">
                    {t('inscription.step1.porteur.desc')}
                  </p>
                </button>

                <button
                  onClick={() => {
                    updateFormData('profileType', 'entrepreneur');
                    setCurrentStep(2);
                  }}
                  className={`p-8 border-2 rounded-xl transition-all hover:shadow-lg ${
                    formData.profileType === 'entrepreneur'
                      ? 'border-yellow-600 bg-yellow-50'
                      : 'border-gray-200 hover:border-yellow-300'
                  }`}
                >
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('inscription.step1.entrepreneur.title')}</h3>
                  <p className="text-gray-600 text-sm">
                    {t('inscription.step1.entrepreneur.desc')}
                  </p>
                </button>

                <button
                  onClick={() => {
                    updateFormData('profileType', 'investisseur');
                    setCurrentStep(2);
                  }}
                  className={`p-8 border-2 rounded-xl transition-all hover:shadow-lg ${
                    formData.profileType === 'investisseur'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('inscription.step1.investisseur.title')}</h3>
                  <p className="text-gray-600 text-sm">
                    {t('inscription.step1.investisseur.desc')}
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('inscription.step2.title')}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">{t('inscription.step2.firstName')}</Label>
                  <Input
                    id="firstName"
                    placeholder={t('inscription.step2.firstName.placeholder')}
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="lastName">{t('inscription.step2.lastName')}</Label>
                  <Input
                    id="lastName"
                    placeholder={t('inscription.step2.lastName.placeholder')}
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t('inscription.step2.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('inscription.step2.email.placeholder')}
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t('inscription.step2.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t('inscription.step2.phone.placeholder')}
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t('inscription.button.back')}
                </Button>
                <Button
                  onClick={() => setCurrentStep(3)}
                  disabled={!canProceedStep2}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600"
                >
                  {t('inscription.button.next')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Location & Additional Info */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('inscription.step3.title')}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="city">{t('inscription.step3.city')}</Label>
                  <Input
                    id="city"
                    placeholder={t('inscription.step3.city.placeholder')}
                    value={formData.city}
                    onChange={(e) => updateFormData('city', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="country">{t('inscription.step3.country')}</Label>
                  <Input
                    id="country"
                    placeholder={t('inscription.step3.country.placeholder')}
                    value={formData.country}
                    onChange={(e) => updateFormData('country', e.target.value)}
                  />
                </div>

                {formData.profileType === 'porteur' && (
                  <>
                    <div>
                      <Label htmlFor="projectName">{t('inscription.step3.projectName')}</Label>
                      <Input
                        id="projectName"
                        placeholder={t('inscription.step3.projectName.placeholder')}
                        value={formData.projectName}
                        onChange={(e) => updateFormData('projectName', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="sector">{t('inscription.step3.sector')}</Label>
                      <select
                        id="sector"
                        value={formData.sector}
                        onChange={(e) => updateFormData('sector', e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">{t('inscription.step3.sector.select')}</option>
                        <option value="tech">{t('inscription.step3.sector.tech')}</option>
                        <option value="agribusiness">{t('inscription.step3.sector.agri')}</option>
                        <option value="sante">{t('inscription.step3.sector.health')}</option>
                        <option value="education">{t('inscription.step3.sector.education')}</option>
                        <option value="energie">{t('inscription.step3.sector.energy')}</option>
                        <option value="autre">{t('inscription.step3.sector.other')}</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="stage">{t('inscription.step3.stage')}</Label>
                      <select
                        id="stage"
                        value={formData.stage}
                        onChange={(e) => updateFormData('stage', e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">{t('inscription.step3.sector.select')}</option>
                        <option value="idee">{t('inscription.step3.stage.idea')}</option>
                        <option value="prototype">{t('inscription.step3.stage.prototype')}</option>
                        <option value="mvp">{t('inscription.step3.stage.mvp')}</option>
                        <option value="croissance">{t('inscription.step3.stage.growth')}</option>
                      </select>
                    </div>
                  </>
                )}

                {formData.profileType === 'entrepreneur' && (
                  <>
                    <div className="md:col-span-2">
                      <Label htmlFor="projectName">{t('inscription.step3.projectName')}</Label>
                      <Input
                        id="projectName"
                        placeholder={t('inscription.step3.projectName.placeholder')}
                        value={formData.projectName}
                        onChange={(e) => updateFormData('projectName', e.target.value)}
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="sector">{t('inscription.step3.sector')}</Label>
                      <select
                        id="sector"
                        value={formData.sector}
                        onChange={(e) => updateFormData('sector', e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                      >
                        <option value="">{t('inscription.step3.sector.select')}</option>
                        <option value="tech">{t('inscription.step3.sector.tech')}</option>
                        <option value="agribusiness">{t('inscription.step3.sector.agri')}</option>
                        <option value="sante">{t('inscription.step3.sector.health')}</option>
                        <option value="education">{t('inscription.step3.sector.education')}</option>
                        <option value="energie">{t('inscription.step3.sector.energy')}</option>
                        <option value="autre">{t('inscription.step3.sector.other')}</option>
                      </select>
                    </div>
                  </>
                )}

                {formData.profileType === 'investisseur' && (
                  <>
                    <div>
                      <Label htmlFor="organization">{t('inscription.step3.organization')}</Label>
                      <Input
                        id="organization"
                        placeholder={t('inscription.step3.organization.placeholder')}
                        value={formData.organization}
                        onChange={(e) => updateFormData('organization', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="investmentRange">{t('inscription.step3.investmentRange')}</Label>
                      <select
                        id="investmentRange"
                        value={formData.investmentRange}
                        onChange={(e) => updateFormData('investmentRange', e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">{t('inscription.step3.sector.select')}</option>
                        <option value="0-50k">0 - 50 000 Fcfa</option>
                        <option value="50-200k">50 000 - 200 000 Fcfa</option>
                        <option value="200k-1M">200 000 - 1M Fcfa</option>
                        <option value="1M+">Plus de 1M Fcfa</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="interestSectors">{t('inscription.step3.interestSectors')}</Label>
                      <Input
                        id="interestSectors"
                        placeholder={t('inscription.step3.interestSectors.placeholder')}
                        value={formData.interestSectors}
                        onChange={(e) => updateFormData('interestSectors', e.target.value)}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(2)}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t('inscription.button.back')}
                </Button>
                <Button
                  onClick={() => setCurrentStep(4)}
                  disabled={!canProceedStep3()}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600"
                >
                  {t('inscription.button.next')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t('inscription.step4.title')}</h2>
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg flex items-start gap-3 ${
                  submitMessage === 'success' 
                    ? 'bg-emerald-50 border border-emerald-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  {submitMessage === 'success' ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-emerald-900">Inscription reçue!</p>
                        <p className="text-sm text-emerald-800">Vos clients email se sont ouverts. Envoyez les deux emails pour confirmer votre inscription. Nous traiterons vos données rapidement.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-900">Erreur</p>
                        <p className="text-sm text-red-800">Veuillez réessayer ou nous contacter directement à contact@gieaorg.com.</p>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{t('inscription.step4.profile')}</p>
                  <p className="font-medium text-gray-900">
                    {formData.profileType === 'porteur'
                      ? t('inscription.step4.profile.porteur')
                      : formData.profileType === 'entrepreneur'
                      ? t('inscription.step4.profile.entrepreneur')
                      : t('inscription.step4.profile.investisseur')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t('inscription.step4.fullName')}</p>
                    <p className="font-medium text-gray-900">{formData.firstName} {formData.lastName}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t('inscription.step4.email')}</p>
                    <p className="font-medium text-gray-900">{formData.email}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t('inscription.step4.phone')}</p>
                    <p className="font-medium text-gray-900">{formData.phone}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t('inscription.step4.location')}</p>
                    <p className="font-medium text-gray-900">{formData.city}, {formData.country}</p>
                  </div>
                </div>

                {(formData.profileType === 'porteur' || formData.profileType === 'entrepreneur') && formData.projectName && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t('inscription.step4.project')}</p>
                    <p className="font-medium text-gray-900">{formData.projectName}</p>
                    {formData.sector && (
                      <p className="text-sm text-gray-600 mt-1">{t('inscription.step4.sector')}: {formData.sector}</p>
                    )}
                  </div>
                )}

                {formData.profileType === 'investisseur' && formData.organization && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t('inscription.step4.organization')}</p>
                    <p className="font-medium text-gray-900">{formData.organization}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(3)}
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t('inscription.button.back')}
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      {t('inscription.button.submitting')}
                    </>
                  ) : (
                    <>
                      {t('inscription.button.confirm')}
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

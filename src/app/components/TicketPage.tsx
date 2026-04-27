import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { CheckCircle, Calendar, MapPin, User, Mail, Phone, Download, Share2, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

interface TicketData {
  ticketId: string;
  profileType: 'porteur' | 'investisseur';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  timestamp: string;
  projectName?: string;
  organization?: string;
}

export default function TicketPage() {
  const { t } = useLanguage();
  const { ticketId } = useParams();
  const [ticketData, setTicketData] = useState<TicketData | null>(null);

  useEffect(() => {
    if (ticketId) {
      const data = localStorage.getItem(`ticket_${ticketId}`);
      if (data) {
        setTicketData(JSON.parse(data));
      }
    }
  }, [ticketId]);

  const handleDownload = () => {
    const ticketElement = document.getElementById('ticket-container');
    if (!ticketElement) return;

    // Create a canvas to capture the ticket
    import('html2canvas').then(({ default: html2canvas }) => {
      html2canvas(ticketElement, {
        scale: 2,
        backgroundColor: '#ffffff'
      }).then((canvas) => {
        const link = document.createElement('a');
        link.download = `ticket-salon-investisseur-${ticketId}.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    });
  };

  const handleShare = () => {
    const shareText = t('ticket.share.text');
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: t('ticket.share.title'),
        text: shareText,
        url: shareUrl
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert(t('ticket.share.copied'));
    }
  };

  if (!ticketData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">{t('ticket.notFound')}</p>
          <Link to="/inscription">
            <Button className="bg-gradient-to-r from-emerald-600 to-blue-600">
              {t('ticket.backToRegistration')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const isPor = ticketData.profileType === 'porteur';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-4">
            <CheckCircle className="h-10 w-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            {t('ticket.confirmed.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('ticket.confirmed.subtitle')}
          </p>
        </div>

        {/* Ticket Card */}
        <div id="ticket-container" className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Header */}
          <div className={`p-8 text-white ${isPor ? 'bg-gradient-to-r from-emerald-600 to-emerald-700' : 'bg-gradient-to-r from-blue-600 to-blue-700'}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold text-xl">SI</span>
                </div>
                <div>
                  <h2 className="font-bold text-xl">{t('ticket.event.name')}</h2>
                  <p className="text-sm text-white/80">{t('ticket.event.year')}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/80">{t('ticket.id')}</p>
                <p className="font-mono font-bold">#{ticketData.ticketId.slice(-8)}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{t('ticket.date')}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{t('ticket.location')}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Participant Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{t('ticket.participantType')}</p>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-full">
                    <p className="font-bold text-gray-900">
                      {isPor ? t('ticket.porteur') : t('ticket.investisseur')}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {t('ticket.fullName')}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {ticketData.firstName} {ticketData.lastName}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {t('ticket.email')}
                  </p>
                  <p className="text-gray-900">{ticketData.email}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {t('ticket.phone')}
                  </p>
                  <p className="text-gray-900">{ticketData.phone}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {t('ticket.location.label')}
                  </p>
                  <p className="text-gray-900">{ticketData.city}, {ticketData.country}</p>
                </div>

                {ticketData.projectName && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t('ticket.project')}</p>
                    <p className="font-medium text-gray-900">{ticketData.projectName}</p>
                  </div>
                )}

                {ticketData.organization && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{t('ticket.organization')}</p>
                    <p className="font-medium text-gray-900">{ticketData.organization}</p>
                  </div>
                )}
              </div>

              {/* Right: QR Code */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white p-6 rounded-xl border-4 border-gray-100">
                  <QRCodeSVG
                    value={`TICKET:${ticketData.ticketId}|${ticketData.firstName} ${ticketData.lastName}|${ticketData.profileType}`}
                    size={220}
                    level="H"
                    includeMargin={true}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  {t('ticket.qr.instruction')}
                </p>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">{t('ticket.practicalInfo')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600 mb-1">{t('ticket.info.date')}</p>
                <p className="font-medium text-gray-900">{t('ticket.info.date.full')}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">{t('ticket.info.hours')}</p>
                <p className="font-medium text-gray-900">{t('ticket.info.hours.time')}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">{t('ticket.info.venue')}</p>
                <p className="font-medium text-gray-900">{t('ticket.info.venue.name')}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">{t('ticket.info.dressCode')}</p>
                <p className="font-medium text-gray-900">{t('ticket.info.dressCode.style')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            onClick={handleDownload}
            className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            {t('ticket.download')}
          </Button>

          <Button
            onClick={handleShare}
            variant="outline"
            className="flex-1"
            size="lg"
          >
            <Share2 className="mr-2 h-5 w-5" />
            {t('ticket.share')}
          </Button>
        </div>

        {/* Additional Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-3">{t('ticket.nextSteps.title')}</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{t('ticket.nextSteps.email')} <strong>{ticketData.email}</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{t('ticket.nextSteps.download')}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{t('ticket.nextSteps.present')}</span>
            </li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t('ticket.backHome')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

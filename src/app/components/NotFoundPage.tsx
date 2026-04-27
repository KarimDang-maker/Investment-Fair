import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page non trouvée
        </h2>

        <p className="text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>

          <Link to="/inscription">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              S'inscrire
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

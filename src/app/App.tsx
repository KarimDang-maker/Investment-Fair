import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PorteursPage from './components/PorteursPage';
import InvestisseursPage from './components/InvestisseursPage';
import ProgrammePage from './components/ProgrammePage';
import InscriptionPage from './components/InscriptionPage';
import TicketPage from './components/TicketPage';
import NotFoundPage from './components/NotFoundPage';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/porteurs" element={<PorteursPage />} />
              <Route path="/investisseurs" element={<InvestisseursPage />} />
              <Route path="/programme" element={<ProgrammePage />} />
              <Route path="/inscription" element={<InscriptionPage />} />
              <Route path="/ticket/:ticketId" element={<TicketPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
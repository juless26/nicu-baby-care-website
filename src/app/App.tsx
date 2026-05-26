import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ImpactStoriesPage } from './pages/ImpactStoriesPage';
import { DonatePage } from './pages/DonatePage';
import { InternshipsPage } from './pages/InternshipsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/impact-stories" element={<ImpactStoriesPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partner" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
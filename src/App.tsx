import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import UrgencySystem from "./components/UrgencySystem";
import AvailabilityDashboard from "./components/AvailabilityDashboard";
import Projects from "./components/Projects";
import VideoGallery from "./components/VideoGallery";
import FinanceCalculator from "./components/FinanceCalculator";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PWAInstall from "./components/PWAInstall";
import MobileEnhancements from "./components/MobileEnhancements";
import PropertyPage from "./components/PropertyPage";
import NotFound from "./pages/NotFound";

// Componente para la página principal
const HomePage = () => (
  <>
    <Header />
    <UrgencySystem />
    <main className="flex-1 gpu-accelerated">
      <Hero />
      <AvailabilityDashboard />
      <Projects />
      <VideoGallery />
      <FinanceCalculator />
      <TestimonialsCarousel />
      <Contact />
    </main>
    <Footer />
    <PWAInstall />
    <MobileEnhancements />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background smooth-scroll flex flex-col">
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<HomePage />} />
          
          {/* Páginas individuales de propiedades */}
          <Route path="/propiedad/:slug" element={<PropertyPage />} />
          
          {/* Ruta de fallback - página 404 personalizada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
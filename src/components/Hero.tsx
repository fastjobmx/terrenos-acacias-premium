import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-landscape.jpg";

const Hero = () => {
  const whatsappNumber = "+573227597180";
  const whatsappMessage = "Hola! Quiero información sobre los lotes premium disponibles";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const scrollToProjects = () => {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Lotes Premium en Acacías" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Urgent Banner */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="bg-destructive/90 backdrop-blur text-destructive-foreground px-4 py-2 rounded-lg text-center">
          <p className="text-sm font-semibold">
            🚨 <span className="animate-pulse">ÚLTIMOS LOTES DISPONIBLES</span> • Precios aumentan pronto • 
            <span className="text-luxury"> 15 personas consultando ahora</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="bg-luxury/20 backdrop-blur border border-luxury/30 rounded-full px-6 py-2">
              <span className="text-luxury font-semibold text-sm">✨ LOTES PREMIUM EN ACACÍAS</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-luxury bg-clip-text text-transparent">
              INVIERTE EN TU FUTURO
            </span>
            <br />
            <span className="text-luxury text-3xl md:text-5xl lg:text-6xl">
              ¡Últimos Lotes Disponibles!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            🏆 4 proyectos exclusivos con financiación directa • 0% interés • 
            Escritura individual • Cerca de Acacías, Meta
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-luxury">10M+</div>
              <div className="text-sm text-white/80">Desde</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-luxury">0%</div>
              <div className="text-sm text-white/80">Interés</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-luxury">24</div>
              <div className="text-sm text-white/80">Meses Max</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-luxury">100%</div>
              <div className="text-sm text-white/80">Legal</div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 text-success mr-2" />
              Escritura Individual
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-success mr-2" />
              Cerca de Acacías
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-success mr-2" />
              Financiación Directa
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={handleWhatsApp}
              className="shadow-gold"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar Disponibilidad AHORA
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={scrollToProjects}
              className="border-white/30 text-white hover:bg-white/10"
            >
              Ver Todos los Proyectos
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-sm text-white/70">
            <p>🔒 Pablo Niño - Asesor Certificado • 📱 +57 322 759 7180 • ⭐ Más de 100 familias satisfechas</p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="whatsapp" 
          size="lg"
          onClick={handleWhatsApp}
          className="rounded-full shadow-gold animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
          WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default Hero;
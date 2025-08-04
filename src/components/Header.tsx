import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "+573227597180";
  const whatsappMessage = "Hola! Me interesa información sobre los lotes premium en Acacías. ¿Podrían darme detalles?";

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${whatsappNumber}`, '_self');
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top bar con información de contacto */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Acacías, Meta - Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Lun - Sáb: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">📞 +57 322 759 7180</span>
              <span>|</span>
              <span className="font-medium">📞 +57 313 257 4573</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border/50' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section mejorado */}
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="relative">
                <img 
                  src="/image.png" 
                  alt="A.N Bienes Raíces Logo" 
                  className="w-12 h-12 rounded-xl object-contain flex-shrink-0 shadow-soft"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-display font-bold text-primary truncate">
                  A.N BIENES RAÍCES
                </h1>
                <p className="text-sm text-muted-foreground hidden sm:block">
                  Lotes Premium en Acacías, Meta
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => scrollToSection('projects')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Proyectos
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => scrollToSection('why-us')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                ¿Por qué nosotros?
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => scrollToSection('how-to-buy')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Cómo comprar
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contacto
              </Button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleCall}
                className="text-sm group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Llamar
              </Button>
              
              <Button 
                className="btn-whatsapp text-sm group"
                size="sm"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-border/50 animate-fade-in-up">
              <div className="flex flex-col space-y-4 pt-6">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => scrollToSection('projects')}
                  className="justify-start text-left"
                >
                  🏠 Ver Proyectos
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => scrollToSection('why-us')}
                  className="justify-start text-left"
                >
                  ⭐ ¿Por qué nosotros?
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => scrollToSection('how-to-buy')}
                  className="justify-start text-left"
                >
                  📋 Cómo comprar
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="justify-start text-left"
                >
                  📞 Contacto
                </Button>
                
                <div className="flex flex-col space-y-3 pt-4 border-t border-border/30">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleCall}
                    className="justify-start"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </Button>
                  
                  <Button 
                    className="btn-whatsapp justify-start"
                    size="sm"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Floating WhatsApp Button - Mobile Only */}
      <div className="md:hidden">
        <button
          onClick={handleWhatsApp}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-luxury hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce-gentle flex items-center justify-center group"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
          
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xs font-bold text-white">!</span>
          </div>
        </button>

        {/* Quick Action Tooltip */}
        <div className="fixed bottom-20 right-6 z-40 bg-black/90 text-white text-sm px-4 py-2 rounded-lg opacity-0 pointer-events-none transition-opacity duration-300 animate-fade-in-up shadow-elegant">
          💬 ¡Pregúntanos sin compromiso!
        </div>
      </div>
    </>
  );
};

export default Header;
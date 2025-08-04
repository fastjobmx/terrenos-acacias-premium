import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator, MapPin, Phone } from 'lucide-react';

const StickyNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg md:hidden">
      <div className="grid grid-cols-4 gap-1 p-2">
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
          <MessageCircle className="w-4 h-4 mb-1" />
          <span className="text-xs">WhatsApp</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
          <Phone className="w-4 h-4 mb-1" />
          <span className="text-xs">Llamar</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
          <Calculator className="w-4 h-4 mb-1" />
          <span className="text-xs">Calcular</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
          <MapPin className="w-4 h-4 mb-1" />
          <span className="text-xs">Ubicación</span>
        </Button>
      </div>
    </div>
  );
};
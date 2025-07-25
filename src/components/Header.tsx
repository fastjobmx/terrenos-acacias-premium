import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const whatsappNumber = "+573227597180";
  const whatsappMessage = "Hola! Me interesa información sobre los lotes premium en Acacías";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${whatsappNumber}`, '_self');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/image.png" 
              alt="Lotes Premium Acacías Logo" 
              className="w-10 h-10 rounded-lg object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Lotes Premium</h1>
              <p className="text-sm text-muted-foreground">Acacías, Meta</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={handleWhatsApp}
              className="hidden sm:flex"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleCall}
              className="hidden sm:flex"
            >
              <Phone className="w-4 h-4" />
              Llamar
            </Button>

            {/* Mobile WhatsApp only */}
            <Button 
              variant="whatsapp" 
              size="icon"
              onClick={handleWhatsApp}
              className="sm:hidden"
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
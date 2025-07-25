import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calculator, Clock, FileText, MessageCircle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  distance: string;
  lotSize: string;
  priceFrom: string;
  downPayment: string;
  financing: string;
  features: string[];
  badge?: string;
  image: string;
  reserveAmount?: string;
  reserveDays?: string;
}

const ProjectCard = ({ 
  title, 
  location, 
  distance, 
  lotSize, 
  priceFrom, 
  downPayment, 
  financing, 
  features, 
  badge,
  image,
  reserveAmount,
  reserveDays
}: ProjectCardProps) => {
  
  const whatsappNumber = "+573227597180";
  const whatsappMessage = `Hola Pablo! Me interesa el proyecto ${title}. Quiero más información sobre disponibilidad y precios.`;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const calculateMonthlyPayment = () => {
    const price = parseInt(priceFrom.replace('M', '000000'));
    const down = parseInt(downPayment.replace('%', ''));
    const months = parseInt(financing.split(' ')[0]);
    const remaining = price * (100 - down) / 100;
    const monthlyPayment = (remaining / months / 1000).toFixed(0);
    return `$${monthlyPayment}K`;
  };

  return (
    <Card className="overflow-hidden hover:shadow-luxury transition-all duration-300 transform hover:scale-105">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-20"></div>
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-luxury text-luxury-foreground font-semibold">
              {badge}
            </Badge>
          </div>
        )}

        {/* Price Tag */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur rounded-lg px-3 py-1">
          <div className="text-sm font-bold text-primary">Desde {priceFrom}</div>
        </div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-primary flex items-start justify-between">
          <span>{title}</span>
        </CardTitle>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            {location} • {distance}
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-primary">Dimensiones:</span>
            <span className="ml-2">{lotSize}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Financing Details */}
        <div className="bg-accent/50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Inicial:</span>
            <span className="font-bold text-primary">{downPayment}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Cuotas:</span>
            <span className="font-bold text-success">{calculateMonthlyPayment()} x {financing}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Interés:</span>
            <span className="font-bold text-success">0%</span>
          </div>
        </div>

        {/* Reserve Info */}
        {reserveAmount && reserveDays && (
          <div className="bg-luxury/10 border border-luxury/20 rounded-lg p-3">
            <div className="text-center">
              <p className="text-sm text-luxury font-semibold">
                💎 Aparta con {reserveAmount} por {reserveDays}
              </p>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-primary flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Incluye:
          </h4>
          <div className="grid grid-cols-1 gap-1">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 bg-success rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
            {features.length > 4 && (
              <div className="text-xs text-muted-foreground mt-1">
                +{features.length - 4} características más
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          variant="whatsapp" 
          className="w-full"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Consultar este Proyecto
        </Button>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" onClick={handleWhatsApp}>
            <Calculator className="w-4 h-4 mr-1" />
            Simular
          </Button>
          <Button variant="outline" size="sm" onClick={handleWhatsApp}>
            <Clock className="w-4 h-4 mr-1" />
            Visitar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
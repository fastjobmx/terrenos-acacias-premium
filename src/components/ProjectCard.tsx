import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Star, 
  Eye, 
  Heart, 
  Share2,
  ExternalLink,
  Info,
  Facebook,
  Twitter,
  Copy,
  Check,
  Play,
  Sparkles,
  Shield,
  Clock,
  DollarSign,
  Home,
  Zap
} from "lucide-react";
import { Property } from "@/data/properties";

// Usar la interfaz Property del archivo de datos
interface ProjectCardProps extends Property {}

const ProjectCard = (property: ProjectCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [viewCount, setViewCount] = useState(Math.floor(Math.random() * 50) + 20);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price: string) => {
    return price.replace('M', ' Millones').replace('K', ' Mil');
  };

  // Calcular disponibilidad simulada basada en el proyecto
  const getAvailabilityData = () => {
    const baseAvailable = property.id === "1" ? 45 : property.id === "2" ? 28 : property.id === "3" ? 52 : 38;
    const totalLots = property.id === "1" ? 60 : property.id === "2" ? 40 : property.id === "3" ? 70 : 50;
    return { available: baseAvailable, total: totalLots };
  };

  const { available: availableLots, total: totalLots } = getAvailabilityData();
  const availabilityPercentage = (availableLots / totalLots) * 100;
  const isLowStock = availabilityPercentage < 30;

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hola! Me interesa el proyecto ${property.title} en ${property.location}. ¿Podrían darme más información?`;
    window.open(`https://wa.me/+573227597180?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleViewProperty = () => {
    // Usar el slug predefinido de los datos
    navigate(`/propiedad/${property.slug}`);
  };

  const handleShare = async (platform: string) => {
    const url = `${window.location.origin}/propiedad/${property.slug}`;
    const text = `¡Mira este increíble proyecto! ${property.title} en ${property.location} desde $${formatPrice(property.priceFrom)}`;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Error copying to clipboard:', err);
        }
        break;
    }
    setShowShareMenu(false);
  };

  const handleScheduleVisit = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hola! Me gustaría agendar una visita al proyecto ${property.title} en ${property.location}. ¿Cuándo sería posible?`;
    window.open(`https://wa.me/+573227597180?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Obtener imagen principal
  const mainImage = property.image || (property.gallery && property.gallery[0]) || '/placeholder.svg';

  return (
    <Card 
      className="group relative overflow-hidden card-premium hover-lift cursor-pointer border-0 shadow-elegant"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewProperty}
    >
      {/* Image/Video Container */}
      <div className="relative h-80 overflow-hidden">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
        )}
        
        {property.video && isHovered ? (
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onLoadedData={() => setImageLoaded(true)}
          >
            <source src={property.video} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={mainImage} 
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onLoad={() => setImageLoaded(true)}
          />
        )}
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isLowStock && (
            <Badge className="bg-red-500/90 text-white animate-pulse shadow-lg backdrop-blur-sm">
              <Zap className="w-3 h-3 mr-1" />
              ¡Últimos {availableLots} lotes!
            </Badge>
          )}
          {property.badge && (
            <Badge className={`shadow-lg backdrop-blur-sm ${
              property.badge === 'MÁS POPULAR' ? 'bg-emerald-500/90 text-white' :
              property.badge === 'PREMIUM' ? 'bg-luxury/90 text-luxury-foreground' :
              property.badge === 'SIN INTERÉS' ? 'bg-blue-500/90 text-white' :
              'bg-gray-500/90 text-white'
            }`}>
              <Sparkles className="w-3 h-3 mr-1" />
              {property.badge}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <Button
            size="sm"
            variant="ghost"
            className="glass rounded-full p-3 hover:bg-white/30 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart className={`w-4 h-4 transition-all duration-300 ${isFavorite ? 'fill-red-500 text-red-500 scale-110' : 'text-white'}`} />
          </Button>

          {/* Share Button */}
          <div className="relative">
            <Button
              size="sm"
              variant="ghost"
              className="glass rounded-full p-3 hover:bg-white/30 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setShowShareMenu(!showShareMenu);
              }}
            >
              <Share2 className="w-4 h-4 text-white" />
            </Button>

            {/* Share Menu */}
            {showShareMenu && (
              <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-luxury border border-white/20 p-2 z-50 min-w-[180px] animate-scale-in">
                <div className="flex flex-col gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="justify-start text-blue-600 hover:bg-blue-50 rounded-lg"
                    onClick={() => handleShare('facebook')}
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="justify-start text-blue-400 hover:bg-blue-50 rounded-lg"
                    onClick={() => handleShare('twitter')}
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="justify-start text-green-600 hover:bg-green-50 rounded-lg"
                    onClick={() => handleShare('whatsapp')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="justify-start text-gray-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => handleShare('copy')}
                  >
                    {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {copied ? 'Copiado!' : 'Copiar enlace'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video play indicator */}
        {property.video && !isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
          </div>
        )}

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white text-shadow-lg mb-1">
                {property.title}
              </h3>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{property.location}</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-white text-shadow-lg">
                ${formatPrice(property.priceFrom)}
              </div>
              <div className="text-sm text-white/80">Desde</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6 space-y-6">
        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <Home className="w-5 h-5 text-blue-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-blue-900">{availableLots}</div>
            <div className="text-xs text-blue-700">Disponibles</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <DollarSign className="w-5 h-5 text-green-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-900">0%</div>
            <div className="text-xs text-green-700">Interés</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <Shield className="w-5 h-5 text-purple-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-purple-900">100%</div>
            <div className="text-xs text-purple-700">Legal</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed line-clamp-2">
          {property.description}
        </p>

        {/* Key features */}
        <div className="flex flex-wrap gap-2">
          {property.highlights.slice(0, 3).map((highlight, index) => (
            <span 
              key={index}
              className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium"
            >
              <Star className="w-3 h-3" />
              {highlight}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Disponibilidad</span>
            <span className="font-semibold">{Math.round(availabilityPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-1000 ${
                isLowStock ? 'bg-gradient-to-r from-red-500 to-orange-500' : 
                'bg-gradient-to-r from-green-500 to-emerald-500'
              }`}
              style={{ width: `${availabilityPercentage}%` }}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          <Button 
            className="flex-1 btn-premium rounded-xl font-semibold"
            onClick={handleViewProperty}
          >
            <Eye className="w-4 h-4 mr-2" />
            Ver Detalles
          </Button>
          
          <Button 
            variant="outline"
            className="btn-whatsapp border-green-200 text-green-700 hover:bg-green-50 rounded-xl font-semibold"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Consultar
          </Button>
        </div>

        {/* Schedule visit */}
        <Button 
          variant="ghost"
          className="w-full text-primary hover:bg-primary/10 rounded-xl font-semibold"
          onClick={handleScheduleVisit}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Agendar Visita
        </Button>

        {/* View counter */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2 border-t">
          <Eye className="w-3 h-3" />
          <span>{viewCount} personas vieron este proyecto hoy</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
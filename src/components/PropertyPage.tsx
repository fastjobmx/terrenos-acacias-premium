import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Share2, MapPin, Calendar, DollarSign, Home, Phone, MessageCircle, Heart, Star, CheckCircle, ExternalLink } from 'lucide-react';
import { getPropertyBySlug } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import LazyVideoPlayer from './LazyVideoPlayer';

const PropertyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = slug ? getPropertyBySlug(slug) : null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (property) {
      // Actualizar el título de la página para SEO
      document.title = `${property.title} - Lotes en Acacías | AN Bienes Raíces`;
      
      // Actualizar meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          `${property.title} en ${property.location}. ${property.description.substring(0, 150)}...`
        );
      }
    }
  }, [property]);

  if (!property) {
    return <Navigate to="/" replace />;
  }

  const shareProperty = async () => {
    const shareData = {
      title: property.title,
      text: `Mira este increíble lote: ${property.title} en ${property.location}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('¡Enlace copiado al portapapeles!');
  };

  const whatsappMessage = `Hola! Me interesa el proyecto ${property.title} en ${property.location}. ¿Podrían darme más información?`;
  const whatsappUrl = `https://wa.me/+573227597180?text=${encodeURIComponent(whatsappMessage)}`;

  const formatPrice = (price: string) => {
    return price.replace('M', ' Millones').replace('K', ' Mil');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Volver a proyectos</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? "text-red-500 border-red-200" : ""}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={shareProperty}
              >
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">Compartir</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        {/* Main Image/Video */}
        <div className="aspect-video bg-muted relative overflow-hidden">
          {property.video ? (
            <LazyVideoPlayer 
              src={property.video} 
              poster={property.poster || property.image} 
              title={property.title}
            />
          ) : (
            <img 
              src={property.image || '/placeholder-property.jpg'} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
          )}
          
          {/* Badge */}
          <div className="absolute top-4 left-4">
            <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
              property.badge === 'MÁS POPULAR' ? 'bg-success text-success-foreground' :
              property.badge === 'PREMIUM' ? 'bg-luxury text-luxury-foreground' :
              property.badge === 'SIN INTERÉS' ? 'bg-primary text-primary-foreground' :
              'bg-secondary text-secondary-foreground'
            }`}>
              {property.badge}
            </div>
          </div>
        </div>

        {/* Property Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="h-4 w-4" />
            <span>{property.location} • {property.distance}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {property.description}
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features & Amenities */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Características y Amenidades</h2>
              
              {property.amenities.map((category, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Nearby Places */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Lugares Cercanos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                    <div className={`p-2 rounded-full ${
                      place.type === 'ciudad' ? 'bg-blue-100 text-blue-600' :
                      place.type === 'salud' ? 'bg-red-100 text-red-600' :
                      place.type === 'educacion' ? 'bg-green-100 text-green-600' :
                      place.type === 'comercio' ? 'bg-purple-100 text-purple-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{place.name}</div>
                      <div className="text-sm text-muted-foreground">{place.distance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Legal Documents */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Documentación Legal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.legalDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-green-800">{doc}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & Financing Card */}
            <div className="bg-white border rounded-xl p-6 shadow-lg sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  Desde ${formatPrice(property.priceFrom)}
                </div>
                <div className="text-sm text-muted-foreground">
                  Lotes de {property.lotSize}
                </div>
              </div>

              {/* Financing Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-muted-foreground">Cuota inicial</span>
                  <span className="font-semibold">${formatPrice(property.financingDetails.initialPayment)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-muted-foreground">Cuota mensual</span>
                  <span className="font-semibold">${formatPrice(property.financingDetails.monthlyPayment)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-muted-foreground">Plazo</span>
                  <span className="font-semibold">{property.financingDetails.totalMonths} meses</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">Tasa de interés</span>
                  <span className="font-semibold text-success">{property.financingDetails.interestRate}</span>
                </div>
              </div>

              {/* Reserve Info */}
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">Reserva</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div>Monto: {property.reserveAmount}</div>
                  <div>Tiempo: {property.reserveDays}</div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-success hover:bg-success/90 text-success-foreground">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Consultar por WhatsApp
                  </Button>
                </a>
                
                <a
                  href="tel:+573227597180"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar Ahora
                  </Button>
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  Asesor especializado
                </div>
                <div className="font-semibold">Pablo Niño</div>
                <div className="text-sm text-muted-foreground">
                  +57 322 759 7180
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Acciones Rápidas</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={shareProperty}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartir propiedad
                </Button>
                
                <Link to="/#calculadora" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Calcular financiación
                  </Button>
                </Link>
                
                <Link to="/#proyectos" className="w-full">
                  <Button variant="outline" className="w-full justify-start">
                    <Home className="h-4 w-4 mr-2" />
                    Ver otros proyectos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      project: "La Floresta",
      rating: 5,
      text: "Excelente inversión! Pablo nos asesoró perfectamente y ahora tenemos nuestro lote soñado. La financiación 0% interés fue clave para nosotros.",
      image: "/testimonial-1.jpg",
      videoTestimonial: "/testimonial-1.mp4",
      purchaseDate: "Diciembre 2023",
      lotNumber: "Lote 23"
    },
    {
      id: 2,
      name: "Carlos Martínez",
      project: "Bosques de Alkalí",
      rating: 5,
      text: "La mejor decisión que hemos tomado. El proyecto superó nuestras expectativas y el proceso fue muy transparente.",
      image: "/testimonial-2.jpg",
      videoTestimonial: "/testimonial-2.mp4",
      purchaseDate: "Noviembre 2023",
      lotNumber: "Lote 15"
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      project: "Sábana Real",
      rating: 5,
      text: "Increíble atención al cliente. Nos explicaron todo detalladamente y cumplieron con todos los tiempos prometidos.",
      image: "/testimonial-3.jpg",
      videoTestimonial: "/testimonial-3.mp4",
      purchaseDate: "Octubre 2023",
      lotNumber: "Lote 8"
    },
    {
      id: 4,
      name: "Luis Herrera",
      project: "Reservas del Edén",
      rating: 5,
      text: "El proyecto urbano que estábamos buscando. Todas las comodidades cerca y una excelente proyección de valorización.",
      image: "/testimonial-4.jpg",
      videoTestimonial: "/testimonial-4.mp4",
      purchaseDate: "Enero 2024",
      lotNumber: "Lote 12"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-white/20 backdrop-blur rounded-full px-6 py-2">
              <span className="font-semibold text-sm">⭐ TESTIMONIOS REALES</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Más de 100 familias ya invirtieron con nosotros y están construyendo su futuro
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Testimonial Content */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-luxury mr-3" />
                      <div className="flex">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-luxury fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-lg mb-6 leading-relaxed">
                      "{currentTestimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                        <div className="text-luxury text-sm">{currentTestimonial.project}</div>
                        <div className="text-white/70 text-xs">
                          {currentTestimonial.lotNumber} • {currentTestimonial.purchaseDate}
                        </div>
                      </div>
                      
                      <Button
                        variant="luxury"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Ver Video
                      </Button>
                    </div>
                  </div>

                  {/* Customer Photo */}
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-white/10">
                      <img 
                        src={currentTestimonial.image} 
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEwMCAyMDBDMTAwIDE3Mi4zODYgMTIyLjM4NiAxNTAgMTUwIDE1MFMyMDAgMTcyLjM4NiAyMDAgMjAwVjI1MEgxMDBWMjAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
                        }}
                      />
                    </div>
                    
                    {/* Verified Badge */}
                    <div className="absolute -top-2 -right-2 bg-success text-success-foreground rounded-full p-2">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-luxury scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="text-center mt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-white/70 hover:text-white"
            >
              {isAutoPlaying ? 'Pausar' : 'Reproducir'} Automático
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
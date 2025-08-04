import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Play, Star } from 'lucide-react';

const VideoTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      project: "La Floresta",
      thumbnail: "/testimonial-1.jpg",
      videoUrl: "/testimonial-1.mp4",
      rating: 5,
      text: "Excelente inversión, Pablo nos asesoró perfectamente"
    },
    // Más testimonios...
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Lo Que Dicen Nuestros Clientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={testimonial.thumbnail} 
                  alt={testimonial.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button variant="ghost" size="lg" className="text-white">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{testimonial.project}</p>
                <p className="text-sm">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
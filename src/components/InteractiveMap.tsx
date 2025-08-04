import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock } from 'lucide-react';

const InteractiveMap = () => {
  const [selectedProject, setSelectedProject] = useState('la-floresta');
  
  const projects = {
    'la-floresta': {
      name: 'La Floresta',
      coordinates: '4.0000, -73.0000',
      distance: '15 min de Acacías',
      nearbyPlaces: ['Centro Comercial', 'Hospital', 'Colegios']
    }
    // Más proyectos...
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Ubicaciones Estratégicas
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {Object.entries(projects).map(([key, project]) => (
              <Card 
                key={key}
                className={`cursor-pointer transition-all ${
                  selectedProject === key ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedProject(key)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{project.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {project.distance}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Navigation className="w-4 h-4 mr-2" />
                      Ver Ruta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-muted rounded-lg p-4 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Mapa interactivo aquí</p>
              <p className="text-sm text-muted-foreground mt-2">
                Integración con Google Maps próximamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
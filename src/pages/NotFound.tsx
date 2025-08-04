import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, MapPin } from "lucide-react";
import { properties } from "@/data/properties";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header Navigation */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Volver al inicio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-muted-foreground/20">404</div>
            <div className="text-2xl font-semibold text-muted-foreground mt-4">
              Página no encontrada
            </div>
          </div>

          {/* Error Details */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            <div className="bg-muted/50 rounded-lg p-4 text-sm">
              <div className="font-medium mb-2">URL intentada:</div>
              <code className="text-primary">{location.pathname}</code>
            </div>
          </div>

          {/* Available Properties */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">
              ¿Buscabas alguna de nuestras propiedades?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {properties.slice(0, 4).map((property) => (
                <Link
                  key={property.slug}
                  to={`/propiedad/${property.slug}`}
                  className="block p-4 border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{property.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {property.location}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto">
                <Home className="h-4 w-4 mr-2" />
                Ir al inicio
              </Button>
            </Link>
            
            <Link to="/#proyectos">
              <Button variant="outline" className="w-full sm:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Ver todos los proyectos
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-2">
              ¿Necesitas ayuda? Contacta a nuestro asesor
            </p>
            <div className="font-medium">Pablo Niño</div>
            <div className="text-sm text-muted-foreground">
              +57 322 759 7180
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

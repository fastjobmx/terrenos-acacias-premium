import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Facebook, MapPin, Clock, Star } from "lucide-react";

const Contact = () => {
  const whatsappNumber1 = "+573227597180";
  const whatsappNumber2 = "+573132574573";
  const facebookUrl = "https://www.facebook.com/profile.php?id=100087360983830";

  const handleWhatsApp1 = () => {
    const message = "Hola Pablo! Quiero información completa sobre los lotes premium en Acacías.";
    window.open(`https://wa.me/${whatsappNumber1}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleWhatsApp2 = () => {
    const message = "Hola! Me interesa conocer más sobre los proyectos de lotes disponibles.";
    window.open(`https://wa.me/${whatsappNumber2}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleFacebook = () => {
    window.open(facebookUrl, '_blank');
  };

  const handleCall1 = () => {
    window.open(`tel:${whatsappNumber1}`, '_self');
  };

  return (
    <section className="py-16 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-white/20 backdrop-blur rounded-full px-6 py-2">
              <span className="font-semibold text-sm">📞 CONTACTO DIRECTO</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habla Directamente con Pablo Niño
          </h2>
          
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Asesor especializado en lotes premium • Más de 100 familias satisfechas • 
            Respuesta inmediata por WhatsApp
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-luxury mr-2" />
              Asesor Certificado
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-luxury mr-2" />
              Respuesta Inmediata
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-luxury mr-2" />
              Especialista en Acacías
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp 1 */}
          <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-success-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">WhatsApp Principal</h3>
              <p className="text-2xl font-bold text-luxury mb-2">+57 322 759 7180</p>
              <p className="text-sm opacity-80 mb-6">
                Consultas generales • Información de proyectos • Asesoría personalizada
              </p>
              
              <div className="space-y-3">
                <Button 
                  variant="whatsapp" 
                  size="lg"
                  onClick={handleWhatsApp1}
                  className="w-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={handleCall1}
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar Ahora
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp 2 */}
          <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-success-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">WhatsApp Alternativo</h3>
              <p className="text-2xl font-bold text-luxury mb-2">+57 313 257 4573</p>
              <p className="text-sm opacity-80 mb-6">
                Línea de apoyo • Disponible 24/7 • Respuesta garantizada
              </p>
              
              <div className="space-y-3">
                <Button 
                  variant="whatsapp" 
                  size="lg"
                  onClick={handleWhatsApp2}
                  className="w-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={handleFacebook}
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Ver Facebook
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Proceso Simple y Seguro
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-luxury-foreground font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Contacta</h4>
              <p className="text-sm opacity-80">Escríbenos por WhatsApp</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-luxury-foreground font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Asesoria</h4>
              <p className="text-sm opacity-80">Te ayudamos a elegir</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-luxury-foreground font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Visita</h4>
              <p className="text-sm opacity-80">Conoce el proyecto</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-luxury-foreground font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Compra</h4>
              <p className="text-sm opacity-80">Financiación 0% interés</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              ¡No Dejes Pasar Esta Oportunidad!
            </h3>
            <p className="mb-6 opacity-90">
              Los lotes se están agotando rápidamente. Contáctanos HOY y asegura el tuyo.
            </p>
            <Button 
              variant="luxury" 
              size="xl"
              onClick={handleWhatsApp1}
              className="animate-pulse"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              ¡Quiero Mi Lote AHORA!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
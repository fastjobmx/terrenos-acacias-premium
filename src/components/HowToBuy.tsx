import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Search, 
  HandHeart, 
  FileText, 
  CreditCard, 
  Key,
  CheckCircle,
  Clock
} from "lucide-react";

const HowToBuy = () => {
  const handleWhatsApp = () => {
    const message = "Hola Pablo! Estoy listo para comenzar el proceso de compra. ¿Me ayudas con el paso 1?";
    window.open(`https://wa.me/+573227597180?text=${encodeURIComponent(message)}`, '_blank');
  };

  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "Contáctanos por WhatsApp",
      description: "Escríbenos para conocer disponibilidad, precios actuales y resolver todas tus dudas. Te atendemos inmediatamente.",
      duration: "5 minutos",
      action: "Contactar ahora",
      details: [
        "Consulta disponibilidad en tiempo real",
        "Recibe precios actualizados", 
        "Programa tu visita gratuita",
        "Resuelve todas tus dudas"
      ]
    },
    {
      number: 2,
      icon: Search,
      title: "Visita y Elige Tu Lote",
      description: "Te llevamos gratuitamente a conocer los proyectos. Caminas el terreno, ves las amenidades y eliges el lote perfecto.",
      duration: "1-2 horas",
      action: "Programar visita",
      details: [
        "Transporte gratuito al proyecto",
        "Tour completo con nuestro asesor",
        "Ve amenidades y ubicación exacta",
        "Elige el lote que más te guste"
      ]
    },
    {
      number: 3,
      icon: HandHeart,
      title: "Aparta Tu Lote",
      description: "Con $500K a $1M apartas tu lote favorito por 15-30 días. Esto te garantiza el precio y disponibilidad mientras organizas.",
      duration: "Inmediato",
      action: "Apartar lote",
      details: [
        "Desde $500K según el proyecto",
        "Te garantiza precio por 30 días",
        "El lote queda reservado para ti",
        "Tiempo para organizar documentos"
      ]
    },
    {
      number: 4,
      icon: FileText,
      title: "Firma de Documentos",
      description: "Firmamos la promesa de compra y venta con todas las condiciones claras. Documentos autenticados ante notaría para tu seguridad.",
      duration: "30 minutos",
      action: "Firmar promesa",
      details: [
        "Promesa de compra y venta legal",
        "Firmas autenticadas en notaría",
        "Condiciones 100% claras",
        "Plan de pagos personalizado"
      ]
    },
    {
      number: 5,
      icon: CreditCard,
      title: "Pago de Inicial y Cuotas",
      description: "Pagas tu inicial acordada y comenzamos el plan de cuotas sin interés. Pagos fáciles y cómodos durante el tiempo acordado.",
      duration: "18-60 meses",
      action: "Iniciar pagos",
      details: [
        "Inicial desde 20% del valor",
        "Cuotas fijas sin interés",
        "Múltiples formas de pago",
        "Flexibilidad en fechas"
      ]
    },
    {
      number: 6,
      icon: Key,
      title: "Recibe Tu Escritura",
      description: "Al completar todos los pagos, gestionamos tu escritura pública individual. ¡Tu lote es 100% tuyo para construir tu futuro!",
      duration: "30 días",
      action: "Recibir escritura",
      details: [
        "Escritura pública individual",
        "Registrada en oficina de instrumentos",
        "100% legal y transferible",
        "¡Listo para construir!"
      ]
    }
  ];

  const benefits = [
    "✅ Proceso 100% transparente",
    "✅ Sin trámites bancarios complicados", 
    "✅ Asesoría personalizada en cada paso",
    "✅ Documentos legales garantizados"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-gradient-luxury text-luxury-foreground rounded-full px-6 py-2">
              <span className="font-semibold text-sm">📋 PROCESO SIMPLE</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Cómo Comprar Tu Lote en 6 Pasos
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Proceso súper fácil y transparente. Te acompañamos en cada paso 
            hasta que tengas tu escritura en las manos.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-success/10 text-success text-sm px-3 py-2 rounded-full">
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-20 bg-gradient-to-b from-primary to-luxury hidden md:block"></div>
              )}
              
              <Card className="mb-8 overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-300 transform hover:scale-102">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Step Number & Icon */}
                    <div className="bg-gradient-primary text-primary-foreground p-6 md:w-48 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold mb-1">Paso {step.number}</div>
                      <div className="text-sm opacity-90">{step.duration}</div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div className="flex-1 mb-4 md:mb-0 md:pr-6">
                          <h3 className="text-xl font-bold text-primary mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {step.description}
                          </p>
                          
                          {/* Details */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Button */}
                        <div className="flex-shrink-0">
                          <Button 
                            variant={index === 0 ? "cta" : "outline"}
                            onClick={handleWhatsApp}
                            className="w-full md:w-auto"
                          >
                            {index === 0 && <MessageCircle className="w-4 h-4 mr-2" />}
                            {step.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="bg-muted/50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-primary mb-6">
            ⏱️ Tiempo Total del Proceso
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-elegant">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">1 Día</div>
              <div className="text-sm text-muted-foreground">Desde contacto hasta apartado</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-elegant">
              <FileText className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">1 Semana</div>
              <div className="text-sm text-muted-foreground">Firma de documentos legales</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-elegant">
              <Key className="w-8 h-8 text-luxury mx-auto mb-2" />
              <div className="text-2xl font-bold text-luxury">18-60 Meses</div>
              <div className="text-sm text-muted-foreground">Hasta recibir tu escritura</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo Para Comenzar?
            </h3>
            <p className="mb-6 opacity-90 text-lg">
              El proceso es súper fácil y te acompañamos en cada paso. 
              ¡Comienza HOY y en menos de una semana podrías tener tu lote!
            </p>
            <Button 
              variant="luxury" 
              size="xl"
              onClick={handleWhatsApp}
              className="animate-pulse"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              ¡COMENZAR PROCESO AHORA!
            </Button>
            
            <div className="mt-4 text-sm opacity-80">
              📱 Te respondemos en menos de 5 minutos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
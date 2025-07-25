import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleWhatsApp = () => {
    const message = "Hola Pablo! Tengo algunas preguntas sobre los lotes. ¿Podrías ayudarme?";
    window.open(`https://wa.me/+573227597180?text=${encodeURIComponent(message)}`, '_blank');
  };

  const faqs: FAQItem[] = [
    {
      question: "¿Los documentos están 100% en regla y son seguros?",
      answer: "Sí, absolutamente. Todos nuestros proyectos cuentan con documentación completa: promesa de compra y venta autenticada ante notaría, subdivisión aprobada y escrituras públicas individuales al finalizar el pago. Trabajamos solo con proyectos legales y transparentes."
    },
    {
      question: "¿Realmente no hay intereses en la financiación?",
      answer: "Correcto, 0% de interés garantizado. Solo pagas el valor del lote dividido en cuotas. Por ejemplo, si compras un lote de $14M con inicial del 20%, pagas $2.8M de inicial y $466K mensuales por 24 meses. Sin recargos ni intereses adicionales."
    },
    {
      question: "¿Puedo visitar los lotes antes de comprar?",
      answer: "¡Por supuesto! Te llevamos personalmente a conocer cualquier proyecto. Coordina tu visita por WhatsApp y te acompañamos para que veas la ubicación, amenidades y elijas el lote que más te guste. La visita es completamente gratis."
    },
    {
      question: "¿Qué pasa si no puedo pagar una cuota?",
      answer: "Entendemos que pueden surgir imprevistos. Manejamos planes flexibles y opciones de reprogramación. Lo importante es comunicarse con nosotros para encontrar la mejor solución. Siempre buscamos que nuestros clientes cumplan exitosamente su sueño."
    },
    {
      question: "¿Los lotes tienen servicios públicos disponibles?",
      answer: "Varía por proyecto: La Floresta y Sábana Real tienen luz y agua sobre las vías. Bosques de Alkalí ya cuenta con agua, luz y vías. Reservas del Edén tendrá vías pavimentadas, gas natural y alcantarillado. Te damos toda la información específica de cada proyecto."
    },
    {
      question: "¿Puedo construir inmediatamente después de comprar?",
      answer: "En proyectos como La Floresta y Sábana Real sí, tienen diseño de construcción libre. En Bosques de Alkalí y Reservas del Edén debes instalar pozo séptico certificado. Te asesoramos en todo el proceso constructivo."
    },
    {
      question: "¿Qué incluye exactamente cada proyecto?",
      answer: "Cada proyecto tiene amenidades específicas: portería, vías embalastradas/pavimentadas, parques, zonas BBQ, canchas múltiples, zonas verdes. Te mostramos el master plan completo de cada desarrollo para que veas exactamente qué obtienes."
    },
    {
      question: "¿Cómo funciona el proceso de separado?",
      answer: "Muy simple: eliges tu lote, lo apartas con $500K-$1M (según proyecto) por 15-30 días máximo, coordinamos la firma de documentos y inicias el plan de pagos. El apartado te garantiza el lote y el precio por el tiempo acordado."
    },
    {
      question: "¿Los precios pueden aumentar mientras estoy pagando?",
      answer: "NO. Una vez firmes tu promesa de compra y venta, el precio queda fijo durante todo el período de pago. No hay reajustes ni aumentos. El único momento en que pueden subir los precios es antes de apartar el lote."
    },
    {
      question: "¿Qué tan cerca están de Acacías exactamente?",
      answer: "La Floresta: 18 minutos (8km), Sábana Real: 15 minutos (7km), Bosques de Alkalí: 5 minutos (800m del centro), Reservas del Edén: en la zona urbana de Acacías. Todos con acceso por vías principales en buen estado."
    },
    {
      question: "¿Puedo vender o ceder mi lote antes de terminar de pagarlo?",
      answer: "Sí, es posible hacer cesión de derechos. Debe hacerse mediante documento legal y con nuestro acompañamiento para garantizar que todo esté en orden. Es una excelente opción de inversión a corto plazo."
    },
    {
      question: "¿Hay restricciones en el tipo de construcción?",
      answer: "En La Floresta y Sábana Real tienes construcción completamente libre. En Bosques de Alkalí y Reservas del Edén hay algunas normas básicas de convivencia y construcción para mantener la armonía del conjunto. Te damos el reglamento completo."
    },
    {
      question: "¿Qué garantías tengo de que se cumplan las obras prometidas?",
      answer: "Trabajamos solo con constructores reconocidos y proyectos con licencias aprobadas. Puedes ver el avance de obras en tiempo real y tenemos seguros que garantizan la culminación de cada proyecto según lo prometido."
    },
    {
      question: "¿Aceptan permuta por vehículo o inmueble?",
      answer: "¡Sí! Evaluamos permutas por vehículos, motos, otros inmuebles o combinaciones. Hacemos avalúo profesional y ajustamos la operación. Es una excelente forma de convertir un activo en una inversión rentable."
    },
    {
      question: "¿Por qué debería elegirlos a ustedes y no a la competencia?",
      answer: "Llevamos más de 100 familias satisfechas, 0% interés real, documentos 100% legales, financiación directa sin trámites bancarios, asesoría personalizada las 24 horas, y te acompañamos desde la compra hasta que construyas tu casa. Somos los únicos que ofrecemos esta experiencia completa."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-gradient-luxury text-luxury-foreground rounded-full px-6 py-2">
              <span className="font-semibold text-sm">❓ PREGUNTAS FRECUENTES</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Todas Las Respuestas Que Necesitas
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respuestas honestas y completas a las 15 preguntas que más nos hacen nuestros clientes.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-primary pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes Otra Pregunta?
            </h3>
            <p className="mb-6 opacity-90">
              Pablo Niño está disponible para resolver cualquier duda específica sobre tu inversión.
            </p>
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Preguntar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
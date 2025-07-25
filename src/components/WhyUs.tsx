import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Calculator, 
  FileText, 
  Users, 
  MapPin, 
  Clock, 
  Star,
  CheckCircle,
  MessageCircle,
  Award
} from "lucide-react";

const WhyUs = () => {
  const handleWhatsApp = () => {
    const message = "Hola Pablo! Me convencieron tus diferenciadores. Quiero conocer más sobre los lotes.";
    window.open(`https://wa.me/+573227597180?text=${encodeURIComponent(message)}`, '_blank');
  };

  const differentiators = [
    {
      icon: Shield,
      title: "100% Legal y Seguro",
      description: "Únicos con documentos completamente en regla. Promesas notariadas, subdivisiones aprobadas y escrituras públicas individuales garantizadas.",
      highlight: "Escrituras Garantizadas"
    },
    {
      icon: Calculator,
      title: "0% Interés Real",
      description: "No como otros que esconden costos. Aquí pagas exactamente el valor del lote dividido en cuotas. Sin letra pequeña ni sorpresas.",
      highlight: "Sin Costos Ocultos"
    },
    {
      icon: Clock,
      title: "Financiación Directa",
      description: "Sin bancos, sin trámites complicados, sin fiadores. Apruebas el mismo día y empiezas a pagar inmediatamente. Proceso 100% ágil.",
      highlight: "Aprobación Inmediata"
    },
    {
      icon: Users,
      title: "Más de 100 Familias Satisfechas",
      description: "No somos nuevos en esto. Llevamos años ayudando familias a cumplir su sueño. Testimonios reales de clientes que ya construyeron.",
      highlight: "Experiencia Comprobada"
    },
    {
      icon: MapPin,
      title: "Ubicaciones Estratégicas",
      description: "Todos nuestros proyectos están cerca de Acacías, con vías de acceso, servicios disponibles y potencial de valorización garantizado.",
      highlight: "Acceso Garantizado"
    },
    {
      icon: FileText,
      title: "Transparencia Total",
      description: "Te mostramos TODO: planos, cronogramas, costos, reglamentos. Nada de sorpresas. Sabes exactamente qué estás comprando.",
      highlight: "Sin Sorpresas"
    }
  ];

  const stats = [
    { number: "100+", label: "Familias Satisfechas", icon: Users },
    { number: "4", label: "Proyectos Activos", icon: MapPin },
    { number: "0%", label: "Tasa de Interés", icon: Calculator },
    { number: "100%", label: "Documentos Legales", icon: Shield },
    { number: "24/7", label: "Asesoría Disponible", icon: Clock },
    { number: "5★", label: "Calificación Promedio", icon: Star }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-gradient-luxury text-luxury-foreground rounded-full px-6 py-2">
              <span className="font-semibold text-sm">🏆 LÍDERES EN ACACÍAS</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por Qué Somos Los #1 en Acacías Meta
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No es casualidad que más familias elijan nuestros lotes. 
            Estos son los diferenciadores que nos hacen únicos en el mercado.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-4 bg-white shadow-elegant hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {differentiators.map((item, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-all duration-300 transform hover:scale-105 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-xs font-semibold">
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                      {item.highlight}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <Award className="w-12 h-12 text-luxury mx-auto mb-4" />
            
            <h3 className="text-2xl font-bold mb-4">
              "El Mejor Negocio Que He Hecho En Mi Vida"
            </h3>
            
            <p className="text-lg mb-6 opacity-90 italic">
              "Compré mi lote hace 2 años con Pablo. Proceso súper fácil, sin complicaciones, 
              y ya tengo mi casa construida. Mis vecinos pagaron el doble en otros proyectos 
              con menos beneficios. Recomendado 100%."
            </p>
            
            <div className="flex items-center justify-center space-x-2">
              <div className="flex text-luxury">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-semibold">- María Rodríguez, La Floresta</span>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl p-8 shadow-luxury mb-12">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Nosotros vs. La Competencia
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-4 px-4 font-bold text-primary">Características</th>
                  <th className="text-center py-4 px-4 font-bold text-success">Nosotros</th>
                  <th className="text-center py-4 px-4 font-bold text-muted-foreground">Otros</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Documentos legales completos</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="text-center py-3 px-4 text-destructive">❌</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">0% de interés real</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="text-center py-3 px-4 text-destructive">❌</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Financiación directa sin bancos</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="text-center py-3 px-4 text-destructive">❌</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Asesoría 24/7 personalizada</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="text-center py-3 px-4 text-destructive">❌</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">Escrituras públicas garantizadas</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="text-center py-3 px-4 text-destructive">❌</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Experiencia comprobada +100 familias</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="text-center py-3 px-4 text-destructive">❌</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-luxury">
            <h3 className="text-2xl font-bold text-primary mb-4">
              ¿Entiendes Por Qué Somos Los #1?
            </h3>
            <p className="text-muted-foreground mb-6">
              No es solo marketing. Son resultados reales, familias satisfechas y el compromiso 
              de hacer las cosas bien desde el primer día.
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={handleWhatsApp}
              className="animate-pulse"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quiero Ser Cliente VIP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
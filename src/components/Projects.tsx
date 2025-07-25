import ProjectCard from "./ProjectCard";
import lotsImage from "@/assets/lots-aerial.jpg";
import amenitiesImage from "@/assets/amenities.jpg";

const Projects = () => {
  const projects = [
    {
      title: "🌳 La Floresta",
      location: "Vereda Montelibano",
      distance: "18 min de Acacías (8 km)",
      lotSize: "7x14 metros",
      priceFrom: "10M",
      downPayment: "20%",
      financing: "18 meses",
      features: [
        "Hermosa portería bidireccional",
        "Vías embalastradas",
        "Luz y agua sobre las vías",
        "Parques infantiles",
        "Canchas múltiples",
        "Zona BBQ y Kiosco",
        "Parqueo para visitantes",
        "Diseño de construcción libre",
        "Promesa de compra y venta",
        "Escritura pública al final"
      ],
      badge: "MÁS POPULAR",
      image: lotsImage,
      reserveAmount: "Consulta",
      reserveDays: "20 días"
    },
    {
      title: "🌲 Bosques de Alkalí",
      location: "A 800m zona urbana",
      distance: "Acacías centro",
      lotSize: "7x15 y 10x15 metros",
      priceFrom: "30M",
      downPayment: "40%",
      financing: "14 meses",
      features: [
        "Agua y luz disponibles",
        "Vías embalastradas",
        "Parques y zona BBQ",
        "Salón comunal en desarrollo",
        "Pozo séptico industrial certificado",
        "Promesa de compra y venta",
        "Escritura pública individual",
        "Financiación directa"
      ],
      badge: "PREMIUM",
      image: amenitiesImage,
      reserveAmount: "$1M",
      reserveDays: "1 mes"
    },
    {
      title: "🏞️ Sábana Real",
      location: "Vereda Montelibano",
      distance: "7 km del parque principal",
      lotSize: "7x14 metros", 
      priceFrom: "14M",
      downPayment: "20%",
      financing: "24 meses",
      features: [
        "Documentos por subdivisión",
        "Hermosa portería",
        "Vías embalastradas",
        "Parques y canchas múltiples",
        "Zona BBQ y Kiosco",
        "Zonas verdes",
        "Diseño construcción libre",
        "Pozo séptico industrial",
        "Sin intereses"
      ],
      badge: "SIN INTERÉS",
      image: lotsImage,
      reserveAmount: "$500K",
      reserveDays: "20 días"
    },
    {
      title: "🏔️ Reservas del Edén",
      location: "Parte alta de Acacías",
      distance: "Zona urbana Acacías",
      lotSize: "6x12 metros",
      priceFrom: "51M",
      downPayment: "5M inicial",
      financing: "5 años",
      features: [
        "Proyecto urbano premium",
        "Vías pavimentadas",
        "Gas Natural",
        "Alcantarillado",
        "Agua de acueducto",
        "Construcción libre",
        "Escrituras públicas individuales",
        "0% tasa de interés",
        "Cuotas mensuales fijas"
      ],
      badge: "URBANO",
      image: amenitiesImage,
      reserveAmount: "Consulta",
      reserveDays: "Disponible"
    }
  ];

  return (
    <section id="proyectos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-gradient-luxury text-luxury-foreground rounded-full px-6 py-2">
              <span className="font-semibold text-sm">🏆 PROYECTOS DISPONIBLES</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            4 Proyectos Exclusivos en Acacías
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Invierte en el futuro de tu familia con nuestros lotes premium. 
            Financiación directa, 0% interés y documentos en regla.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-elegant">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Proyectos</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-elegant">
              <div className="text-2xl font-bold text-success">0%</div>
              <div className="text-sm text-muted-foreground">Interés</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-elegant">
              <div className="text-2xl font-bold text-luxury">100%</div>
              <div className="text-sm text-muted-foreground">Legal</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-elegant">
              <div className="text-2xl font-bold text-primary">60</div>
              <div className="text-sm text-muted-foreground">Meses Máx</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿No sabes cuál elegir?
            </h3>
            <p className="mb-6 opacity-90">
              Nuestro asesor Pablo Niño te ayudará a encontrar el lote perfecto 
              según tu presupuesto y necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/+573227597180?text=${encodeURIComponent("Hola Pablo! Necesito asesoría para elegir el mejor lote para mi familia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-success-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                📱 WhatsApp: +57 322 759 7180
              </a>
              <a 
                href={`https://wa.me/+573132574573?text=${encodeURIComponent("Hola! Quiero información sobre los lotes en Acacías.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                📱 WhatsApp: +57 313 257 4573
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import ProjectCard from "./ProjectCard";
import { properties } from "@/data/properties";
import { Sparkles, TrendingUp, Shield, Clock, Award } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-luxury/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="glass-premium bg-gradient-luxury text-luxury-foreground rounded-full px-8 py-3 shadow-luxury">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold text-sm">🏆 PROYECTOS EXCLUSIVOS</span>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 text-shadow">
            5 Proyectos <span className="text-gradient-luxury">Premium</span> en Acacías
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Invierte en el futuro de tu familia con nuestros lotes premium. 
            <span className="text-primary font-semibold"> Financiación directa</span>, 
            <span className="text-luxury font-semibold"> 0% interés</span> y 
            <span className="text-success font-semibold"> documentos en regla</span>.
          </p>

          {/* Key Stats mejoradas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="glass-premium p-6 rounded-2xl shadow-elegant hover-lift group">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-muted-foreground font-medium">Proyectos Exclusivos</div>
            </div>
            
            <div className="glass-premium p-6 rounded-2xl shadow-elegant hover-lift group">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-success/20 rounded-xl group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
              </div>
              <div className="text-3xl font-bold text-success mb-1">0%</div>
              <div className="text-sm text-muted-foreground font-medium">Interés Garantizado</div>
            </div>
            
            <div className="glass-premium p-6 rounded-2xl shadow-elegant hover-lift group">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-luxury/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-luxury" />
                </div>
              </div>
              <div className="text-3xl font-bold text-luxury mb-1">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Legal y Seguro</div>
            </div>
            
            <div className="glass-premium p-6 rounded-2xl shadow-elegant hover-lift group">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">60</div>
              <div className="text-sm text-muted-foreground font-medium">Meses Máximo</div>
            </div>
          </div>
        </div>

        {/* Projects Grid mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {properties.map((property, index) => (
            <div 
              key={property.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard {...property} />
            </div>
          ))}
        </div>

        {/* Bottom CTA mejorado */}
        <div className="text-center">
          <div className="glass-premium bg-gradient-primary text-primary-foreground rounded-3xl p-10 max-w-4xl mx-auto shadow-luxury relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-luxury" />
                <h3 className="text-3xl md:text-4xl font-display font-bold">
                  ¿No sabes cuál elegir?
                </h3>
                <Sparkles className="w-6 h-6 text-luxury" />
              </div>
              
              <p className="text-xl mb-8 opacity-95 leading-relaxed max-w-2xl mx-auto">
                Nuestro asesor <span className="font-bold text-luxury">Pablo Niño</span> te ayudará a encontrar el lote perfecto 
                según tu presupuesto y necesidades. ¡Asesoría gratuita y personalizada!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={`https://wa.me/+573227597180?text=${encodeURIComponent("Hola Pablo! Necesito asesoría personalizada para elegir el mejor lote para mi familia. ¿Cuándo podemos hablar?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-success hover:bg-success/90 text-success-foreground px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover-lift shadow-lg group"
                >
                  <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">WhatsApp Principal</div>
                    <div className="text-lg">+57 322 759 7180</div>
                  </div>
                </a>
                
                <a 
                  href={`https://wa.me/+573132574573?text=${encodeURIComponent("Hola! Quiero información detallada sobre los lotes premium en Acacías.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover-lift shadow-lg group"
                >
                  <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">WhatsApp Alternativo</div>
                    <div className="text-lg">+57 313 257 4573</div>
                  </div>
                </a>
              </div>

              {/* Testimonial rápido */}
              <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-sm opacity-90 italic">
                  "Pablo nos ayudó a encontrar el lote perfecto. Su asesoría fue clave para tomar la mejor decisión."
                </p>
                <p className="text-xs opacity-75 mt-2">- María González, Cliente satisfecha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
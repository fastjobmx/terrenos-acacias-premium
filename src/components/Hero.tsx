import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, MapPin, Clock, Shield, Star, Phone, MessageCircle, TrendingUp, Users, Award, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Estadísticas dinámicas mejoradas
  const stats = [
    { 
      icon: <Users className="h-5 w-5" />, 
      number: "2,847", 
      label: "Familias felices",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      icon: <MapPin className="h-5 w-5" />, 
      number: "847", 
      label: "Lotes vendidos",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    { 
      icon: <Award className="h-5 w-5" />, 
      number: "15+", 
      label: "Años de experiencia",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    { 
      icon: <TrendingUp className="h-5 w-5" />, 
      number: "98%", 
      label: "Satisfacción del cliente",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  // Beneficios principales mejorados
  const keyBenefits = [
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "100% Legales",
      description: "Escrituras públicas y títulos registrados",
      highlight: "Garantía total"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Sin Intereses",
      description: "Financiación directa hasta 60 meses",
      highlight: "0% interés"
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      title: "Ubicación Premium",
      description: "A solo 45 min de Bogotá por autopista",
      highlight: "Conectividad perfecta"
    }
  ];

  // Características destacadas
  const features = [
    "Financiación directa sin bancos",
    "Documentos 100% en regla",
    "Asesoría personalizada 24/7",
    "Más de 100 familias satisfechas"
  ];

  // Animación de estadísticas
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stats.length]);

  // Mouse tracking para efectos parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // URLs de contacto optimizadas
  const whatsappUrl = "https://wa.me/+573227597180?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20lotes%20premium%20en%20Acacías.%20¿Podrían%20darme%20información%20detallada?";
  const phoneUrl = "tel:+573227597180";

  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mejorado con parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            filter: 'brightness(0.6)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.1)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-luxury/30" />
      </div>

      {/* Elementos flotantes mejorados con parallax */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-luxury/30 rounded-full blur-xl animate-float"
          style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-32 h-32 bg-primary/30 rounded-full blur-xl animate-float" 
          style={{ 
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`
          }} 
        />
        <div 
          className="absolute bottom-40 left-20 w-24 h-24 bg-success/30 rounded-full blur-xl animate-float" 
          style={{ 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`
          }} 
        />
        <div 
          className="absolute bottom-20 right-10 w-16 h-16 bg-luxury/40 rounded-full blur-xl animate-float" 
          style={{ 
            animationDelay: '0.5s',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }} 
        />
        
        {/* Partículas flotantes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-luxury rounded-full animate-bounce-gentle opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-bounce-gentle opacity-40" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-success rounded-full animate-bounce-gentle opacity-50" style={{ animationDelay: '3s' }} />
      </div>

      {/* Banner de urgencia mejorado */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className="glass-premium px-8 py-4 rounded-full border border-luxury/40 animate-pulse-glow">
          <div className="flex items-center gap-3 text-sm font-semibold text-white">
            <div className="w-3 h-3 bg-luxury rounded-full animate-pulse" />
            <Sparkles className="w-4 h-4 text-luxury" />
            <span>🔥 Últimas 5 unidades disponibles - Oferta limitada</span>
            <Sparkles className="w-4 h-4 text-luxury" />
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Contenido izquierdo */}
            <div className={`space-y-10 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              
              {/* Título principal mejorado */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 glass-premium px-4 py-2 rounded-full text-sm font-medium text-white">
                  <Award className="w-4 h-4 text-luxury" />
                  <span>Líderes en lotes premium</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                  <span className="text-white text-shadow-lg">Tu </span>
                  <span className="text-gradient-luxury">Lote Ideal</span>
                  <br />
                  <span className="text-white text-shadow-lg">en </span>
                  <span className="text-gradient-primary">Acacías</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/95 font-medium leading-relaxed text-shadow">
                  Invierte en tu futuro con lotes 100% legales, 
                  <span className="text-luxury font-bold"> sin intereses</span> y 
                  <span className="text-primary font-bold"> ubicación premium</span>
                </p>

                {/* Características destacadas */}
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-white/90"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estadísticas dinámicas mejoradas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`glass-premium p-6 rounded-2xl text-center transition-all duration-500 hover-lift ${
                      currentStat === index ? 'scale-105 ring-2 ring-luxury/50 animate-glow' : ''
                    }`}
                  >
                    <div className={`flex justify-center mb-3 p-2 rounded-lg ${stat.bgColor} ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white text-shadow">{stat.number}</div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Botones de acción mejorados */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-premium text-lg px-10 py-6 group relative overflow-hidden"
                  onClick={scrollToProjects}
                >
                  <span className="relative z-10">Ver Proyectos</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    size="lg" 
                    className="btn-whatsapp px-8 py-6 group"
                    asChild
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      WhatsApp
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="glass-premium border-white/40 text-white hover:bg-white/20 px-8 py-6 group"
                    asChild
                  >
                    <a href={phoneUrl}>
                      <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Llamar
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contenido derecho - Beneficios clave */}
            <div className={`space-y-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              {keyBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="glass-premium p-8 rounded-3xl hover-lift group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-4 bg-white/20 rounded-2xl group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-white text-xl">{benefit.title}</h3>
                        <span className="text-xs bg-luxury/20 text-luxury px-2 py-1 rounded-full font-medium">
                          {benefit.highlight}
                        </span>
                      </div>
                      <p className="text-white/90 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Call to action adicional */}
              <div className="glass-premium p-6 rounded-2xl text-center">
                <div className="text-white/90 text-sm mb-2">
                  ⭐ Calificación promedio de nuestros clientes
                </div>
                <div className="flex justify-center items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white font-bold ml-2">4.9/5</span>
                </div>
                <div className="text-white/80 text-xs">
                  Basado en más de 500 reseñas verificadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce-gentle">
        <div className="glass-premium p-3 rounded-full">
          <ArrowRight className="w-5 h-5 text-white rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
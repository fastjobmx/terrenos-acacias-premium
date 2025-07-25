import { MessageCircle, Phone, Facebook, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-luxury rounded-lg flex items-center justify-center">
                <span className="text-luxury-foreground font-bold text-lg">L</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Lotes Premium</h3>
                <p className="text-sm opacity-80">Acacías, Meta</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Tu inversión más segura en lotes premium con financiación directa 
              y 0% interés. Más de 100 familias ya confiaron en nosotros.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>+57 322 759 7180</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+57 313 257 4573</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Acacías, Meta, Colombia</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestros Proyectos</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>🌳 La Floresta - Desde $10M</li>
              <li>🌲 Bosques de Alkalí - Desde $30M</li>
              <li>🏞️ Sábana Real - Desde $14M</li>
              <li>🏔️ Reservas del Edén - Desde $51M</li>
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-lg font-semibold mb-4">¿Por Qué Elegirnos?</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>✅ 0% de interés en todos los proyectos</li>
              <li>✅ Financiación directa hasta 5 años</li>
              <li>✅ Escrituras públicas individuales</li>
              <li>✅ Documentos 100% en regla</li>
              <li>✅ Asesoría personalizada</li>
              <li>✅ Más de 100 familias satisfechas</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-80 mb-4 md:mb-0">
              © {currentYear} Lotes Premium Acacías. Todos los derechos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/+573227597180"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-success hover:bg-success/80 p-2 rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100087360983830"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="text-xs opacity-60 text-center mt-4">
            <p>
              Pablo Niño - Asesor Inmobiliario Certificado. Los precios y condiciones están sujetos a cambios sin previo aviso. 
              Consulta condiciones específicas para cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
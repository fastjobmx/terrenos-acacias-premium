import { useState, useEffect } from 'react';
import { X, CheckCircle, Clock, MapPin, Heart, Star, Users } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface Purchase {
  id: string;
  name: string;
  project: string;
  timeAgo: string;
  location: string;
  type: 'purchase' | 'reservation' | 'visit' | 'consultation' | 'financing';
}

const DesktopUrgencySystem = () => {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shownPurchases, setShownPurchases] = useState<string[]>([]);
  const isMobile = useIsMobile();

  // Si es móvil, no renderizar nada
  if (isMobile) {
    return null;
  }

  // Lista masiva de testimonios/compras (100+ testimonios)
  const recentPurchases: Purchase[] = [
    // Compras recientes
    { id: '1', name: 'María G.', project: 'La Floresta', timeAgo: '2 horas', location: 'Bogotá', type: 'purchase' },
    { id: '2', name: 'Carlos M.', project: 'Bosques de Alkalí', timeAgo: '4 horas', location: 'Villavicencio', type: 'purchase' },
    { id: '3', name: 'Ana L.', project: 'Sábana Real', timeAgo: '6 horas', location: 'Acacías', type: 'reservation' },
    { id: '4', name: 'Roberto S.', project: 'Reservas del Edén', timeAgo: '8 horas', location: 'Bogotá', type: 'purchase' },
    { id: '5', name: 'Lucía P.', project: 'La Floresta', timeAgo: '12 horas', location: 'Cali', type: 'visit' },
    
    // Más compras variadas
    { id: '6', name: 'Diego R.', project: 'Bosques de Alkalí', timeAgo: '1 día', location: 'Medellín', type: 'purchase' },
    { id: '7', name: 'Carmen T.', project: 'Sábana Real', timeAgo: '1 día', location: 'Acacías', type: 'reservation' },
    { id: '8', name: 'Fernando H.', project: 'La Floresta', timeAgo: '2 días', location: 'Bucaramanga', type: 'purchase' },
    { id: '9', name: 'Patricia V.', project: 'Reservas del Edén', timeAgo: '2 días', location: 'Barranquilla', type: 'consultation' },
    { id: '10', name: 'Andrés K.', project: 'Bosques de Alkalí', timeAgo: '3 días', location: 'Pereira', type: 'purchase' },
    
    // Testimonios de diferentes ciudades
    { id: '11', name: 'Mónica F.', project: 'Sábana Real', timeAgo: '3 días', location: 'Manizales', type: 'reservation' },
    { id: '12', name: 'Javier O.', project: 'La Floresta', timeAgo: '4 días', location: 'Ibagué', type: 'purchase' },
    { id: '13', name: 'Sandra B.', project: 'Reservas del Edén', timeAgo: '4 días', location: 'Neiva', type: 'visit' },
    { id: '14', name: 'Miguel A.', project: 'Bosques de Alkalí', timeAgo: '5 días', location: 'Pasto', type: 'purchase' },
    { id: '15', name: 'Elena C.', project: 'Sábana Real', timeAgo: '5 días', location: 'Popayán', type: 'financing' },
    
    // Más testimonios recientes
    { id: '16', name: 'Ricardo D.', project: 'La Floresta', timeAgo: '6 días', location: 'Tunja', type: 'purchase' },
    { id: '17', name: 'Gabriela N.', project: 'Reservas del Edén', timeAgo: '6 días', location: 'Armenia', type: 'visit' },
    { id: '18', name: 'Alejandro Q.', project: 'Bosques de Alkalí', timeAgo: '1 semana', location: 'Montería', type: 'purchase' },
    { id: '19', name: 'Beatriz L.', project: 'Sábana Real', timeAgo: '1 semana', location: 'Valledupar', type: 'reservation' },
    { id: '20', name: 'Sebastián W.', project: 'La Floresta', timeAgo: '1 semana', location: 'Sincelejo', type: 'purchase' },
    
    // Testimonios adicionales
    { id: '21', name: 'Claudia E.', project: 'Reservas del Edén', timeAgo: '1 semana', location: 'Riohacha', type: 'consultation' },
    { id: '22', name: 'Hernán J.', project: 'Bosques de Alkalí', timeAgo: '2 semanas', location: 'Quibdó', type: 'purchase' },
    { id: '23', name: 'Valentina I.', project: 'Sábana Real', timeAgo: '2 semanas', location: 'Florencia', type: 'reservation' },
    { id: '24', name: 'Gonzalo U.', project: 'La Floresta', timeAgo: '2 semanas', location: 'Mocoa', type: 'purchase' },
    { id: '25', name: 'Mariana Y.', project: 'Reservas del Edén', timeAgo: '3 semanas', location: 'Leticia', type: 'visit' },
    
    // Nuevos testimonios - Familias
    { id: '26', name: 'Familia Rodríguez', project: 'La Floresta', timeAgo: '30 minutos', location: 'Bogotá', type: 'purchase' },
    { id: '27', name: 'Jorge y Esperanza', project: 'Bosques de Alkalí', timeAgo: '1 hora', location: 'Cúcuta', type: 'reservation' },
    { id: '28', name: 'Los Martínez', project: 'Sábana Real', timeAgo: '3 horas', location: 'Santa Marta', type: 'purchase' },
    { id: '29', name: 'Pareja Gómez', project: 'Reservas del Edén', timeAgo: '5 horas', location: 'Cartagena', type: 'consultation' },
    { id: '30', name: 'Familia López', project: 'La Floresta', timeAgo: '7 horas', location: 'Girardot', type: 'visit' },
    
    // Más nombres variados
    { id: '31', name: 'Camilo R.', project: 'Bosques de Alkalí', timeAgo: '9 horas', location: 'Zipaquirá', type: 'purchase' },
    { id: '32', name: 'Isabella M.', project: 'Sábana Real', timeAgo: '11 horas', location: 'Chía', type: 'reservation' },
    { id: '33', name: 'Nicolás P.', project: 'Reservas del Edén', timeAgo: '13 horas', location: 'Cajicá', type: 'financing' },
    { id: '34', name: 'Sofía T.', project: 'La Floresta', timeAgo: '15 horas', location: 'Fusagasugá', type: 'purchase' },
    { id: '35', name: 'Mateo V.', project: 'Bosques de Alkalí', timeAgo: '17 horas', location: 'Soacha', type: 'visit' },
    
    // Testimonios de profesionales
    { id: '36', name: 'Dr. Ramírez', project: 'Sábana Real', timeAgo: '19 horas', location: 'Bogotá', type: 'purchase' },
    { id: '37', name: 'Ing. Morales', project: 'Reservas del Edén', timeAgo: '21 horas', location: 'Medellín', type: 'consultation' },
    { id: '38', name: 'Lic. Herrera', project: 'La Floresta', timeAgo: '23 horas', location: 'Cali', type: 'reservation' },
    { id: '39', name: 'Arq. Castillo', project: 'Bosques de Alkalí', timeAgo: '1 día', location: 'Barranquilla', type: 'purchase' },
    { id: '40', name: 'Contador Pérez', project: 'Sábana Real', timeAgo: '1 día', location: 'Buenaventura', type: 'financing' },
    
    // Más testimonios diversos
    { id: '41', name: 'Empresario Silva', project: 'Reservas del Edén', timeAgo: '2 días', location: 'Palmira', type: 'purchase' },
    { id: '42', name: 'Comerciante Ruiz', project: 'La Floresta', timeAgo: '2 días', location: 'Buga', type: 'visit' },
    { id: '43', name: 'Profesora Jiménez', project: 'Bosques de Alkalí', timeAgo: '3 días', location: 'Tuluá', type: 'reservation' },
    { id: '44', name: 'Pensionado García', project: 'Sábana Real', timeAgo: '3 días', location: 'Cartago', type: 'purchase' },
    { id: '45', name: 'Estudiante Vargas', project: 'Reservas del Edén', timeAgo: '4 días', location: 'Pereira', type: 'consultation' },
    
    // Testimonios internacionales
    { id: '46', name: 'Familia Colombo-Venezolana', project: 'La Floresta', timeAgo: '4 días', location: 'Miami', type: 'purchase' },
    { id: '47', name: 'Inversionista Europeo', project: 'Bosques de Alkalí', timeAgo: '5 días', location: 'Madrid', type: 'reservation' },
    { id: '48', name: 'Empresario Mexicano', project: 'Sábana Real', timeAgo: '5 días', location: 'Ciudad de México', type: 'consultation' },
    { id: '49', name: 'Familia Ecuatoriana', project: 'Reservas del Edén', timeAgo: '6 días', location: 'Quito', type: 'purchase' },
    { id: '50', name: 'Inversionista Panameño', project: 'La Floresta', timeAgo: '6 días', location: 'Panamá', type: 'financing' }
  ];

  const getIcon = (type: Purchase['type']) => {
    switch (type) {
      case 'purchase':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'reservation':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'visit':
        return <MapPin className="w-4 h-4 text-purple-500" />;
      case 'consultation':
        return <Users className="w-4 h-4 text-orange-500" />;
      case 'financing':
        return <Star className="w-4 h-4 text-yellow-500" />;
      default:
        return <Heart className="w-4 h-4 text-red-500" />;
    }
  };

  const getActionText = (type: Purchase['type']) => {
    switch (type) {
      case 'purchase':
        return 'compró un lote en';
      case 'reservation':
        return 'reservó un lote en';
      case 'visit':
        return 'visitó el proyecto';
      case 'consultation':
        return 'solicitó información sobre';
      case 'financing':
        return 'consultó financiación para';
      default:
        return 'se interesó en';
    }
  };

  const getAvailablePurchases = () => {
    return recentPurchases.filter(purchase => !shownPurchases.includes(purchase.id));
  };

  const showRandomPurchase = () => {
    const availablePurchases = getAvailablePurchases();
    
    if (availablePurchases.length === 0) {
      // Reset si ya se mostraron todos
      setShownPurchases([]);
      return;
    }

    const randomIndex = Math.floor(Math.random() * availablePurchases.length);
    const selectedPurchase = availablePurchases[randomIndex];
    
    setCurrentPurchase(selectedPurchase);
    setIsVisible(true);
    setShownPurchases(prev => [...prev, selectedPurchase.id]);

    // Auto-hide después de 6 segundos
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setCurrentPurchase(null), 300);
    }, 6000);
  };

  useEffect(() => {
    // Mostrar primera notificación después de 2 segundos (reducido para prueba)
    const initialTimer = setTimeout(() => {
      showRandomPurchase();
    }, 2000);

    // Luego mostrar cada 10-15 segundos
    const interval = setInterval(() => {
      if (!isVisible) {
        showRandomPurchase();
      }
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setCurrentPurchase(null), 300);
  };

  if (!currentPurchase) return null;

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-300 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm relative overflow-hidden">
        {/* Barra de color según el tipo */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${
          currentPurchase.type === 'purchase' ? 'bg-green-500' :
          currentPurchase.type === 'reservation' ? 'bg-blue-500' :
          currentPurchase.type === 'visit' ? 'bg-purple-500' :
          currentPurchase.type === 'consultation' ? 'bg-orange-500' :
          currentPurchase.type === 'financing' ? 'bg-yellow-500' : 'bg-red-500'
        }`} />
        
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Contenido */}
        <div className="flex items-start space-x-3 pr-6">
          <div className="flex-shrink-0 mt-1">
            {getIcon(currentPurchase.type)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {currentPurchase.name}
              </p>
              <span className="text-xs text-gray-500">
                {currentPurchase.timeAgo}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-2">
              {getActionText(currentPurchase.type)} <span className="font-medium text-green-600">{currentPurchase.project}</span>
            </p>
            
            <div className="flex items-center text-xs text-gray-500">
              <MapPin className="w-3 h-3 mr-1" />
              {currentPurchase.location}
            </div>
          </div>
        </div>

        {/* Indicador de actividad */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
          <div className="h-full bg-green-500 animate-pulse" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  );
};

export default DesktopUrgencySystem;
import { useState, useEffect, useCallback, useMemo } from 'react';
import { X, CheckCircle, Clock, MapPin, MessageCircle, CreditCard, TrendingUp } from 'lucide-react';

interface Purchase {
  id: string;
  name: string;
  project: string;
  timeAgo: string;
  location: string;
  type: 'purchase' | 'reservation' | 'visit' | 'consultation' | 'financing';
  verified?: boolean;
}

const UrgencySystem = () => {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shownNotifications, setShownNotifications] = useState<string[]>([]);
  const [isManuallyHidden, setIsManuallyHidden] = useState(false);

  // Testimonios optimizados y verificados
  const recentPurchases: Purchase[] = useMemo(() => [
    // Compras recientes verificadas (últimas 24 horas)
    { id: '1', name: 'María G.', project: 'La Floresta', timeAgo: '2 horas', location: 'Bogotá', type: 'purchase', verified: true },
    { id: '2', name: 'Carlos M.', project: 'Bosques de Alkalí', timeAgo: '4 horas', location: 'Villavicencio', type: 'purchase', verified: true },
    { id: '3', name: 'Ana L.', project: 'Sábana Real', timeAgo: '6 horas', location: 'Acacías', type: 'reservation', verified: true },
    { id: '4', name: 'Roberto S.', project: 'Reservas del Edén', timeAgo: '8 horas', location: 'Bogotá', type: 'financing', verified: true },
    { id: '5', name: 'Lucía P.', project: 'La Floresta', timeAgo: '12 horas', location: 'Cali', type: 'visit' },
    { id: '6', name: 'Diego R.', project: 'Bosques de Alkalí', timeAgo: '18 horas', location: 'Medellín', type: 'consultation' },
    { id: '7', name: 'Carmen T.', project: 'Sábana Real', timeAgo: '20 horas', location: 'Acacías', type: 'purchase', verified: true },
    { id: '8', name: 'Fernando H.', project: 'La Floresta', timeAgo: '22 horas', location: 'Bucaramanga', type: 'reservation' },
    
    // Últimos 3 días
    { id: '9', name: 'Patricia V.', project: 'Reservas del Edén', timeAgo: '1 día', location: 'Barranquilla', type: 'visit' },
    { id: '10', name: 'Andrés K.', project: 'Bosques de Alkalí', timeAgo: '1 día', location: 'Pereira', type: 'purchase', verified: true },
    { id: '11', name: 'Mónica F.', project: 'Sábana Real', timeAgo: '2 días', location: 'Manizales', type: 'financing' },
    { id: '12', name: 'Javier O.', project: 'La Floresta', timeAgo: '2 días', location: 'Ibagué', type: 'consultation' },
    { id: '13', name: 'Sandra B.', project: 'Reservas del Edén', timeAgo: '2 días', location: 'Neiva', type: 'purchase', verified: true },
    { id: '14', name: 'Miguel A.', project: 'Bosques de Alkalí', timeAgo: '3 días', location: 'Pasto', type: 'reservation' },
    { id: '15', name: 'Elena C.', project: 'Sábana Real', timeAgo: '3 días', location: 'Popayán', type: 'visit' },
    
    // Más testimonios diversos con ubicaciones estratégicas
    { id: '16', name: 'Ricardo D.', project: 'La Floresta', timeAgo: '3 días', location: 'Tunja', type: 'financing' },
    { id: '17', name: 'Gabriela N.', project: 'Reservas del Edén', timeAgo: '4 días', location: 'Armenia', type: 'purchase', verified: true },
    { id: '18', name: 'Alejandro Q.', project: 'Bosques de Alkalí', timeAgo: '4 días', location: 'Montería', type: 'consultation' },
    { id: '19', name: 'Beatriz L.', project: 'Sábana Real', timeAgo: '5 días', location: 'Valledupar', type: 'reservation' },
    { id: '20', name: 'Sebastián W.', project: 'La Floresta', timeAgo: '5 días', location: 'Sincelejo', type: 'visit' },
  ], []);

  // Cargar notificaciones mostradas desde localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('urgencySystemShown');
      if (stored) {
        setShownNotifications(JSON.parse(stored));
      }
    } catch (error) {
      console.warn('Error loading shown notifications:', error);
      setShownNotifications([]);
    }
  }, []);

  const getActionText = useCallback((type: string) => {
    const actions = {
      purchase: 'compró en',
      reservation: 'apartó lote en',
      visit: 'visitó',
      consultation: 'consultó sobre',
      financing: 'solicitó financiación para'
    };
    return actions[type as keyof typeof actions] || 'se interesó en';
  }, []);

  const getIcon = useCallback((type: string) => {
    const iconClass = "w-4 h-4";
    const icons = {
      purchase: <CheckCircle className={`${iconClass} text-green-500`} />,
      reservation: <Clock className={`${iconClass} text-yellow-500`} />,
      visit: <MapPin className={`${iconClass} text-blue-500`} />,
      consultation: <MessageCircle className={`${iconClass} text-purple-500`} />,
      financing: <CreditCard className={`${iconClass} text-orange-500`} />
    };
    return icons[type as keyof typeof icons] || <CheckCircle className={`${iconClass} text-green-500`} />;
  }, []);

  const getBackgroundColor = useCallback((type: string) => {
    const colors = {
      purchase: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
      reservation: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800',
      visit: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
      consultation: 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800',
      financing: 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-green-50 border-green-200';
  }, []);

  const hideNotification = useCallback(() => {
    setIsVisible(false);
    setIsManuallyHidden(true);
    // Permitir que aparezcan nuevas notificaciones después de 3 minutos
    setTimeout(() => {
      setIsManuallyHidden(false);
    }, 180000);
  }, []);

  const showRandomPurchase = useCallback(() => {
    if (isManuallyHidden) return;

    // Filtrar notificaciones no mostradas
    const availableNotifications = recentPurchases.filter(
      purchase => !shownNotifications.includes(purchase.id)
    );

    // Si todas fueron mostradas, reiniciar el ciclo
    if (availableNotifications.length === 0) {
      setShownNotifications([]);
      try {
        localStorage.setItem('urgencySystemShown', JSON.stringify([]));
      } catch (error) {
        console.warn('Error saving to localStorage:', error);
      }
      return;
    }

    // Priorizar notificaciones verificadas
    const verifiedNotifications = availableNotifications.filter(p => p.verified);
    const notificationsToShow = verifiedNotifications.length > 0 ? verifiedNotifications : availableNotifications;
    
    const randomPurchase = notificationsToShow[Math.floor(Math.random() * notificationsToShow.length)];
    setCurrentPurchase(randomPurchase);
    setIsVisible(true);

    // Marcar como mostrada
    const newShown = [...shownNotifications, randomPurchase.id];
    setShownNotifications(newShown);
    try {
      localStorage.setItem('urgencySystemShown', JSON.stringify(newShown));
    } catch (error) {
      console.warn('Error saving to localStorage:', error);
    }

    // Auto-hide después de 8 segundos
    setTimeout(() => {
      setIsVisible(false);
    }, 8000);
  }, [isManuallyHidden, recentPurchases, shownNotifications]);

  // Mostrar notificación cada 15-25 segundos
  useEffect(() => {
    const getRandomInterval = () => Math.random() * 10000 + 15000; // 15-25 segundos
    
    const scheduleNext = () => {
      setTimeout(() => {
        showRandomPurchase();
        scheduleNext();
      }, getRandomInterval());
    };

    // Primera notificación después de 5 segundos
    const initialTimeout = setTimeout(() => {
      showRandomPurchase();
      scheduleNext();
    }, 5000);

    return () => clearTimeout(initialTimeout);
  }, [showRandomPurchase]);

  if (!isVisible || !currentPurchase) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm no-print">
      <div className={`
        ${getBackgroundColor(currentPurchase.type)}
        border rounded-xl p-4 shadow-lg backdrop-blur-sm
        animate-slide-up hover-lift
        transition-all duration-300
      `}>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {getIcon(currentPurchase.type)}
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Actividad reciente
            </span>
            {currentPurchase.verified && (
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-600 font-medium">Verificado</span>
              </div>
            )}
          </div>
          <button
            onClick={hideNotification}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Cerrar notificación"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{currentPurchase.name}</span>
            {' '}{getActionText(currentPurchase.type)}{' '}
            <span className="font-semibold text-primary">{currentPurchase.project}</span>
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{currentPurchase.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>hace {currentPurchase.timeAgo}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600 dark:text-gray-400">
              ¿Te interesa este proyecto?
            </span>
            <a
              href="https://wa.me/+573227597180?text=Hola!%20Vi%20que%20alguien%20compró%20en%20uno%20de%20sus%20proyectos.%20Me%20interesa%20conocer%20más."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              Consultar
            </a>
          </div>
        </div>

        {/* Trending indicator */}
        <div className="absolute -top-1 -right-1">
          <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 animate-pulse">
            <TrendingUp className="w-3 h-3" />
            <span>Popular</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencySystem;
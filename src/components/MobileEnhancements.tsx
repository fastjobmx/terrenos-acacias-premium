import { useEffect, useState } from 'react';
import { ArrowUp, WifiOff } from 'lucide-react';

const MobileEnhancements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    // Scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    // Network status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleInstallApp = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') {
        setInstallPrompt(null);
      }
    }
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 w-10 h-10 bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center md:hidden"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Network Status Indicator */}
      <div className={`fixed top-4 left-4 z-50 transition-all duration-300 ${!isOnline ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="bg-destructive text-destructive-foreground px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm">
          <WifiOff className="w-4 h-4" />
          Sin conexión
        </div>
      </div>

      {/* PWA Install Prompt */}
      {installPrompt && (
        <div className="fixed bottom-24 left-4 right-4 z-40 bg-primary text-primary-foreground p-4 rounded-lg shadow-xl animate-slide-up md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-sm">¡Instala la App!</h3>
              <p className="text-xs opacity-90">Acceso rápido desde tu pantalla de inicio</p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => setInstallPrompt(null)}
                className="text-xs px-3 py-1 bg-white/20 rounded hover:bg-white/30 transition-colors"
              >
                Ahora no
              </button>
              <button
                onClick={handleInstallApp}
                className="text-xs px-3 py-1 bg-white text-primary rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                Instalar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileEnhancements;
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detectar iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Detectar si ya está instalado como PWA
    const standalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsStandalone(standalone);

    // Listener para el evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Mostrar banner después de 3 segundos si no está instalado
      setTimeout(() => {
        if (!standalone) {
          setShowInstallBanner(true);
        }
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Limpiar listener
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    // No mostrar de nuevo en esta sesión
    sessionStorage.setItem('pwa-banner-dismissed', 'true');
  };

  // No mostrar si ya está instalado o si fue dismisseado
  if (isStandalone || sessionStorage.getItem('pwa-banner-dismissed')) {
    return null;
  }

  // Banner para iOS
  if (isIOS && showInstallBanner) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 bg-gradient-to-r from-primary to-primary/90 text-white rounded-2xl p-4 shadow-2xl animate-slide-up">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div className="bg-white/20 rounded-full p-2">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm">📱 Instalar A.N Bienes Raíces</h3>
              <p className="text-xs opacity-90 mt-1">
                Agrega esta app a tu pantalla de inicio para acceso rápido
              </p>
              <p className="text-xs opacity-75 mt-1">
                Toca <span className="font-semibold">📤</span> y luego "Agregar a pantalla de inicio"
              </p>
            </div>
          </div>
          <Button
            onClick={handleDismiss}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  // Banner para Android/Desktop
  if (deferredPrompt && showInstallBanner) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 bg-gradient-to-r from-primary to-primary/90 text-white rounded-2xl p-4 shadow-2xl animate-slide-up">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div className="bg-white/20 rounded-full p-2">
              <Download className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm">📱 Instalar A.N Bienes Raíces</h3>
              <p className="text-xs opacity-90 mt-1">
                Accede más rápido a nuestros lotes premium
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleInstallClick}
              size="sm"
              className="bg-white text-primary hover:bg-white/90 text-xs px-3 py-1"
            >
              Instalar
            </Button>
            <Button
              onClick={handleDismiss}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default PWAInstall;
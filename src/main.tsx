import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Función para remover el loading spinner
const removeLoadingSpinner = () => {
  const spinner = document.querySelector('.loading-spinner');
  if (spinner) {
    spinner.remove();
  }
};

// Función para registrar Service Worker (temporalmente deshabilitada)
const registerSW = async () => {
  // Temporalmente deshabilitado para evitar problemas de caché
  console.log('🔧 Service Worker temporalmente deshabilitado para debugging');
  
  /* 
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      
      console.log('✅ Service Worker registrado exitosamente:', registration);
      
      // Manejar actualizaciones
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Nueva versión disponible
              console.log('🔄 Nueva versión de la app disponible');
              if (confirm('Nueva versión disponible. ¿Actualizar ahora?')) {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
              }
            }
          });
        }
      });
      
    } catch (error) {
      console.log('❌ Error al registrar Service Worker:', error);
    }
  } else {
    console.log('❌ Service Worker no soportado en este navegador');
  }
  */
};

// Función para limpiar caché del Service Worker existente
const clearServiceWorkerCache = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
        console.log('🧹 Service Worker desregistrado:', registration);
      }
    } catch (error) {
      console.log('❌ Error al limpiar Service Worker:', error);
    }
  }
};

// Limpiar caché y renderizar la aplicación
const initApp = async () => {
  try {
    // Limpiar Service Workers existentes
    await clearServiceWorkerCache();
    
    // Renderizar la aplicación
    const root = createRoot(document.getElementById("root")!);
    root.render(<App />);
    
    // Remover loading spinner después de un breve delay
    setTimeout(removeLoadingSpinner, 500);
    
    console.log('✅ Aplicación inicializada correctamente');
  } catch (error) {
    console.error('❌ Error al inicializar la aplicación:', error);
    removeLoadingSpinner();
  }
};

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Registrar SW cuando la página cargue completamente (deshabilitado temporalmente)
window.addEventListener('load', () => {
  registerSW();
});

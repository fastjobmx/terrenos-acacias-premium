const CACHE_NAME = 'an-bienes-raices-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cache abierto');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Service Worker: Error al abrir cache', error);
      })
  );
});

// Activar Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Eliminando cache antiguo', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar peticiones
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Devolver desde cache si existe
        if (response) {
          return response;
        }
        
        // Si no está en cache, hacer petición a la red
        return fetch(event.request)
          .then((response) => {
            // Verificar si la respuesta es válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar la respuesta
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Si falla la red, mostrar página offline básica
            return new Response(
              `<!DOCTYPE html>
              <html>
                <head>
                  <title>Sin conexión - A.N Bienes Raíces</title>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <style>
                    body { 
                      font-family: Arial, sans-serif; 
                      text-align: center; 
                      padding: 50px;
                      background: linear-gradient(135deg, #1a4d3a, #2d5a3d);
                      color: white;
                      margin: 0;
                    }
                    .container {
                      max-width: 400px;
                      margin: 0 auto;
                      background: rgba(255,255,255,0.1);
                      padding: 30px;
                      border-radius: 15px;
                    }
                    h1 { color: #f1c40f; }
                    .emoji { font-size: 4em; margin: 20px 0; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="emoji">📱</div>
                    <h1>Sin conexión</h1>
                    <p>No hay conexión a internet. La app funcionará cuando vuelvas a estar conectado.</p>
                    <p><strong>A.N Bienes Raíces</strong><br>Lotes Premium en Acacías</p>
                  </div>
                </body>
              </html>`,
              {
                headers: {
                  'Content-Type': 'text/html'
                }
              }
            );
          });
      })
  );
});

// Manejar mensajes del cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
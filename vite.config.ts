import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from 'vite-plugin-pwa';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: true
    },
    // Configuración para SPA - redirige todas las rutas a index.html
    historyApiFallback: true
  },
  
  plugins: [
    react({
      tsDecorators: true,
    }),
    
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 5000000,
        // Configuración para SPA en PWA
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/, /^\/_/, /^\/sw\.js$/],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          }
        ]
      },
      manifest: {
        name: 'AN Bienes Raíces - Lotes en Acacías',
        short_name: 'AN Bienes Raíces',
        description: 'Encuentra tu lote ideal en Acacías. Financiación sin intereses y ubicación premium.',
        theme_color: '#8fbc8f',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  build: {
    target: 'es2015',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: mode === 'development',
    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        },
        
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const extType = info[info.length - 1];
          
          if (/\.(css)$/.test(assetInfo.name || '')) {
            return `assets/css/[name]-[hash].${extType}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash].${extType}`;
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `assets/fonts/[name]-[hash].${extType}`;
          }
          
          return `assets/[name]-[hash].${extType}`;
        }
      }
    },
    
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
      legalComments: 'none'
    }
  },
  
  css: {
    devSourcemap: mode === 'development',
  },
  
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react'
    ]
  },
  
  preview: {
    port: 4173,
    host: true,
    // Configuración para preview también
    historyApiFallback: true
  }
}));

import { useState } from 'react';
import { Play, X, Download, Share2, Heart, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [liked, setLiked] = useState<string[]>([]);

  const videos = [
    {
      id: 'la-floresta',
      title: 'La Floresta - Vista Aérea',
      thumbnail: '/la-floresta-thumb.jpg',
      video: '/la-floresta.mp4',
      duration: '2:30',
      views: 1247,
      description: 'Recorrido completo por nuestro proyecto más popular'
    },
    {
      id: 'bosques-alkali',
      title: 'Bosques de Alkalí - Tour Virtual',
      thumbnail: '/bosques-alkali-thumb.jpg',
      video: '/bosques-alkali.mp4',
      duration: '3:15',
      views: 892,
      description: 'Conoce las amenidades y ubicación privilegiada'
    },
    {
      id: 'reservas-eden',
      title: 'Reservas del Edén - Proyecto Urbano',
      thumbnail: '/reservas-eden-thumb.jpg',
      video: '/reservas-eden.mp4',
      duration: '2:45',
      views: 1156,
      description: 'El único proyecto urbano con todas las comodidades'
    }
  ];

  const handleLike = (videoId: string) => {
    setLiked(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  const handleShare = async (video: any) => {
    if (navigator.share) {
      await navigator.share({
        title: video.title,
        text: video.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Mostrar toast de copiado
    }
  };

  return (
    <>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              🎥 Galería de Videos Exclusivos
            </h2>
            <p className="text-lg text-muted-foreground">
              Conoce cada proyecto desde la comodidad de tu casa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="group relative bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-300">
                <div className="relative aspect-video bg-muted">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTAwTDIyNSAxMjVMMTc1IDE1MFYxMDBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3MjgwIiBmb250LXNpemU9IjE0Ij5WaWRlbyBObyBEaXNwb25pYmxlPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      onClick={() => setSelectedVideo(video)}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 border-2 border-white"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </Button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>

                  {/* Views Badge */}
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {video.views.toLocaleString()}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{video.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLike(video.id)}
                        className={liked.includes(video.id) ? 'text-red-500' : ''}
                      >
                        <Heart className={`w-4 h-4 ${liked.includes(video.id) ? 'fill-current' : ''}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(video)}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button
                      onClick={() => setSelectedVideo(video)}
                      variant="outline"
                      size="sm"
                    >
                      Ver Video
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <Button
              onClick={() => setSelectedVideo(null)}
              variant="ghost"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
            
            <div className="bg-black rounded-lg overflow-hidden">
              <video
                src={selectedVideo.video}
                controls
                autoPlay
                className="w-full aspect-video"
                onError={(e) => {
                  console.log('Video no disponible:', selectedVideo.video);
                }}
              >
                Tu navegador no soporta videos HTML5.
              </video>
              
              <div className="p-4 bg-card">
                <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedVideo.description}</p>
                
                <div className="flex items-center gap-4">
                  <Button
                    variant="whatsapp"
                    onClick={() => {
                      const message = `Hola! Me interesa el proyecto ${selectedVideo.title}. ¿Podrías darme más información?`;
                      window.open(`https://wa.me/+573227597180?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Consultar Este Proyecto
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => handleShare(selectedVideo)}
                  >
                    <Share2 className="w-4 h-4" />
                    Compartir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGallery;
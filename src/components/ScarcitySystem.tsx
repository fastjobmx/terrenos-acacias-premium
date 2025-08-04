import { useState, useEffect } from 'react';
import { AlertTriangle, Users, Clock } from 'lucide-react';

const ScarcitySystem = () => {
  const [lotsRemaining, setLotsRemaining] = useState(23);
  const [viewersCount, setViewersCount] = useState(15);
  
  useEffect(() => {
    // Simular cambios en tiempo real
    const interval = setInterval(() => {
      setViewersCount(prev => Math.max(8, prev + Math.floor(Math.random() * 6) - 3));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 right-4 z-40 bg-destructive text-destructive-foreground p-4 rounded-lg shadow-2xl max-w-xs">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="w-5 h-5 animate-pulse" />
        <span className="font-bold text-sm">¡ÚLTIMOS LOTES!</span>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <span>Solo quedan {lotsRemaining} lotes</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Users className="w-3 h-3" />
          <span>{viewersCount} personas viendo ahora</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3" />
          <span>Precios suben en 48h</span>
        </div>
      </div>
    </div>
  );
};
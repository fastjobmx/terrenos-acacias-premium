import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Shield, Clock } from 'lucide-react';

const QuickReservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: '',
    reservationAmount: 500000
  });

  const handleReservation = () => {
    const message = `🏆 RESERVA INMEDIATA
    
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Proyecto: ${formData.project}
Monto reserva: $${formData.reservationAmount.toLocaleString()}

¡Quiero reservar mi lote AHORA!`;

    window.open(`https://wa.me/+573227597180?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 max-w-sm">
      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-2xl">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="w-5 h-5" />
            <span className="font-bold">Reserva en 2 Minutos</span>
          </div>
          
          <div className="space-y-3">
            <Input
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            
            <Input
              placeholder="Tu WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            
            <select 
              className="w-full p-2 rounded bg-white/20 border border-white/30 text-white"
              value={formData.project}
              onChange={(e) => setFormData({...formData, project: e.target.value})}
            >
              <option value="">Selecciona proyecto</option>
              <option value="La Floresta">La Floresta</option>
              <option value="Bosques Alkalí">Bosques Alkalí</option>
              <option value="Sábana Real">Sábana Real</option>
              <option value="Reservas Edén">Reservas Edén</option>
            </select>
            
            <Button 
              onClick={handleReservation}
              className="w-full bg-white text-green-600 hover:bg-white/90"
              disabled={!formData.name || !formData.phone || !formData.project}
            >
              <Shield className="w-4 h-4 mr-2" />
              Reservar con $500.000
            </Button>
          </div>
          
          <div className="flex items-center gap-1 mt-2 text-xs opacity-90">
            <Clock className="w-3 h-3" />
            <span>Reserva válida por 48 horas</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
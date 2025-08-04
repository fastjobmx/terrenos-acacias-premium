import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';

const AvailabilityDashboard = () => {
  const [projects] = useState([
    { 
      name: "La Floresta", 
      total: 45, 
      sold: 38, 
      reserved: 4,
      trend: "high",
      priceIncrease: "15%",
      nextIncreaseDate: "2024-02-01"
    },
    { 
      name: "Bosques de Alkalí", 
      total: 32, 
      sold: 28, 
      reserved: 2,
      trend: "critical",
      priceIncrease: "20%",
      nextIncreaseDate: "2024-01-25"
    },
    { 
      name: "Sábana Real", 
      total: 38, 
      sold: 31, 
      reserved: 3,
      trend: "medium",
      priceIncrease: "12%",
      nextIncreaseDate: "2024-02-10"
    },
    { 
      name: "Reservas del Edén", 
      total: 28, 
      sold: 22, 
      reserved: 3,
      trend: "high",
      priceIncrease: "18%",
      nextIncreaseDate: "2024-01-30"
    }
  ]);

  const getAvailabilityPercentage = (project: any) => {
    return ((project.total - project.sold - project.reserved) / project.total) * 100;
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'critical': return 'text-destructive';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      default: return 'text-success';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'critical': return <AlertCircle className="w-4 h-4" />;
      case 'high': return <TrendingDown className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-8 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-2">
            📊 Disponibilidad en Tiempo Real
          </h3>
          <p className="text-muted-foreground">
            Actualizado cada 5 minutos • Los lotes se agotan rápidamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => {
            const available = project.total - project.sold - project.reserved;
            const availabilityPercentage = getAvailabilityPercentage(project);
            
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-sm">{project.name}</h4>
                    <div className={`flex items-center gap-1 ${getTrendColor(project.trend)}`}>
                      {getTrendIcon(project.trend)}
                      <span className="text-xs font-medium">
                        {project.trend === 'critical' ? 'CRÍTICO' : 
                         project.trend === 'high' ? 'ALTO' : 
                         project.trend === 'medium' ? 'MEDIO' : 'NORMAL'}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span>Disponibles: <span className="font-bold text-success">{available}</span></span>
                      <span>Total: {project.total}</span>
                    </div>
                    <Progress value={100 - availabilityPercentage} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Vendidos: {project.sold}</span>
                      <span>Reservados: {project.reserved}</span>
                    </div>
                  </div>

                  <div className="bg-destructive/10 rounded-lg p-2 text-center">
                    <div className="text-xs text-destructive font-semibold">
                      Precio sube {project.priceIncrease}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(project.nextIncreaseDate).toLocaleDateString('es-CO')}
                    </div>
                  </div>

                  {availabilityPercentage < 20 && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full animate-pulse">
                        ¡ÚLTIMOS!
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AvailabilityDashboard;
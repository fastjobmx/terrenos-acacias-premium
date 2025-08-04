import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, MessageCircle } from 'lucide-react';

const FinanceCalculator = () => {
  const [selectedProject, setSelectedProject] = useState('la-floresta');
  const [loanAmount, setLoanAmount] = useState([10000000]);
  const [downPayment, setDownPayment] = useState([20]);
  const [loanTerm, setLoanTerm] = useState([18]);

  const projects = {
    'la-floresta': { name: 'La Floresta', minPrice: 10000000, maxPrice: 15000000, maxTerm: 18 },
    'bosques-alkali': { name: 'Bosques de Alkalí', minPrice: 30000000, maxPrice: 45000000, maxTerm: 14 },
    'sabana-real': { name: 'Sábana Real', minPrice: 14000000, maxPrice: 20000000, maxTerm: 24 },
    'reservas-eden': { name: 'Reservas del Edén', minPrice: 51000000, maxPrice: 80000000, maxTerm: 60 }
  };

  const currentProject = projects[selectedProject as keyof typeof projects];
  
  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0] * (1 - downPayment[0] / 100);
    const monthlyPayment = principal / loanTerm[0];
    return monthlyPayment;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  useEffect(() => {
    setLoanAmount([currentProject.minPrice]);
  }, [selectedProject]);

  const monthlyPayment = calculateMonthlyPayment();
  const totalDownPayment = loanAmount[0] * (downPayment[0] / 100);
  const totalFinanced = loanAmount[0] - totalDownPayment;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-gradient-luxury text-luxury-foreground rounded-full px-6 py-2">
              <span className="font-semibold text-sm">💰 CALCULADORA DE FINANCIACIÓN</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Calcula Tu Cuota Mensual
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cuánto pagarías mensualmente con nuestro sistema de financiación directa 0% interés
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Configurar Financiación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Project Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Proyecto</label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(projects).map(([key, project]) => (
                      <Button
                        key={key}
                        variant={selectedProject === key ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedProject(key)}
                        className="text-xs"
                      >
                        {project.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Loan Amount */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Valor del Lote: {formatCurrency(loanAmount[0])}
                  </label>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={currentProject.maxPrice}
                    min={currentProject.minPrice}
                    step={1000000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{formatCurrency(currentProject.minPrice)}</span>
                    <span>{formatCurrency(currentProject.maxPrice)}</span>
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Cuota Inicial: {downPayment[0]}% ({formatCurrency(totalDownPayment)})
                  </label>
                  <Slider
                    value={downPayment}
                    onValueChange={setDownPayment}
                    max={50}
                    min={5}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Plazo: {loanTerm[0]} meses
                  </label>
                  <Slider
                    value={loanTerm}
                    onValueChange={setLoanTerm}
                    max={currentProject.maxTerm}
                    min={6}
                    step={6}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>6 meses</span>
                    <span>{currentProject.maxTerm} meses</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Resumen de Financiación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6 text-center">
                  <div className="text-sm opacity-90 mb-2">Cuota Mensual</div>
                  <div className="text-3xl font-bold">{formatCurrency(monthlyPayment)}</div>
                  <div className="text-sm opacity-90 mt-2">0% Interés • Sin comisiones</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Valor del Lote</span>
                    <span className="font-bold">{formatCurrency(loanAmount[0])}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Cuota Inicial ({downPayment[0]}%)</span>
                    <span className="font-bold text-success">{formatCurrency(totalDownPayment)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Monto Financiado</span>
                    <span className="font-bold">{formatCurrency(totalFinanced)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Plazo</span>
                    <span className="font-bold">{loanTerm[0]} meses</span>
                  </div>
                </div>

                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <div className="text-success font-semibold text-sm mb-2">
                    ✅ Ventajas de Financiar con Nosotros:
                  </div>
                  <ul className="text-xs space-y-1 text-success">
                    <li>• 0% tasa de interés</li>
                    <li>• Sin comisiones ocultas</li>
                    <li>• Cuotas fijas mensuales</li>
                    <li>• Escritura individual</li>
                  </ul>
                </div>

                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="w-full"
                  onClick={() => {
                    const message = `Hola! Calculé mi financiación para ${currentProject.name}:
- Valor: ${formatCurrency(loanAmount[0])}
- Cuota inicial: ${formatCurrency(totalDownPayment)}
- Cuota mensual: ${formatCurrency(monthlyPayment)}
- Plazo: ${loanTerm[0]} meses

¿Podrías confirmar esta información y agendar una cita?`;
                    window.open(`https://wa.me/+573227597180?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Confirmar Esta Financiación
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceCalculator;
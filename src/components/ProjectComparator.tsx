import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, X } from 'lucide-react';

const ProjectComparator = () => {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  
  const features = [
    'Financiación 0% interés',
    'Escritura individual',
    'Cerca de Acacías',
    'Servicios públicos',
    'Vías pavimentadas',
    'Seguridad 24/7'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Compara Nuestros Proyectos
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left">Características</th>
                <th className="p-4 text-center">La Floresta</th>
                <th className="p-4 text-center">Bosques Alkalí</th>
                <th className="p-4 text-center">Sábana Real</th>
                <th className="p-4 text-center">Reservas Edén</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4 font-medium">{feature}</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
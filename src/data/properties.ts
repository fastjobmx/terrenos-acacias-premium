export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  distance: string;
  lotSize: string;
  priceFrom: string;
  downPayment: string;
  financing: string;
  features: string[];
  badge: string;
  video?: string;
  image?: string;
  poster?: string; // Thumbnail específico para video
  reserveAmount: string;
  reserveDays: string;
  description: string;
  highlights: string[];
  gallery: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  amenities: {
    category: string;
    items: string[];
  }[];
  financingDetails: {
    initialPayment: string;
    monthlyPayment: string;
    totalMonths: number;
    interestRate: string;
  };
  legalDocuments: string[];
  nearbyPlaces: {
    name: string;
    distance: string;
    type: string;
  }[];
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "la-floresta",
    title: "🌳 La Floresta",
    location: "Vereda Montelibano",
    distance: "18 min de Acacías (8 km)",
    lotSize: "7x14 metros",
    priceFrom: "10M",
    downPayment: "20%",
    financing: "18 meses",
    description: "La Floresta es nuestro proyecto más popular, ubicado en la hermosa Vereda Montelibano. Con una excelente ubicación a solo 18 minutos de Acacías, ofrece la tranquilidad del campo con la comodidad de estar cerca de la ciudad.",
    highlights: [
      "Proyecto más popular con alta demanda",
      "Excelente conectividad con Acacías",
      "Ambiente natural y tranquilo",
      "Financiación flexible sin intereses"
    ],
    features: [
      "Hermosa portería bidireccional",
      "Vías embalastradas",
      "Luz y agua sobre las vías",
      "Parques infantiles",
      "Canchas múltiples",
      "Zona BBQ y Kiosco",
      "Parqueo para visitantes",
      "Diseño de construcción libre",
      "Promesa de compra y venta",
      "Escritura pública al final"
    ],
    amenities: [
      {
        category: "Recreación",
        items: ["Parques infantiles", "Canchas múltiples", "Zona BBQ", "Kiosco"]
      },
      {
        category: "Servicios",
        items: ["Luz eléctrica", "Agua potable", "Vías embalastradas"]
      },
      {
        category: "Seguridad",
        items: ["Portería bidireccional", "Parqueo visitantes"]
      }
    ],
    badge: "MÁS POPULAR",
    video: "/la-floresta.mp4",
    poster: "/la-floresta-poster.jpg", // Thumbnail específico del video
    gallery: ["/la-floresta-1.jpg", "/la-floresta-2.jpg", "/la-floresta-3.jpg"],
    reserveAmount: "Consulta",
    reserveDays: "20 días",
    financingDetails: {
      initialPayment: "2M",
      monthlyPayment: "444K",
      totalMonths: 18,
      interestRate: "0%"
    },
    legalDocuments: [
      "Promesa de compra y venta",
      "Escritura pública al finalizar",
      "Documentos de subdivisión",
      "Certificado de libertad y tradición"
    ],
    nearbyPlaces: [
      { name: "Centro de Acacías", distance: "8 km", type: "ciudad" },
      { name: "Hospital Regional", distance: "10 km", type: "salud" },
      { name: "Colegio San José", distance: "5 km", type: "educacion" },
      { name: "Supermercado Éxito", distance: "8 km", type: "comercio" }
    ]
  },
  {
    id: "2",
    slug: "bosques-de-alkali",
    title: "🌲 Bosques de Alkalí",
    location: "A 800m zona urbana",
    distance: "Acacías centro",
    lotSize: "7x15 y 10x15 metros",
    priceFrom: "30M",
    downPayment: "40%",
    financing: "14 meses",
    description: "Bosques de Alkalí es nuestro proyecto premium, ubicado a solo 800 metros de la zona urbana de Acacías. Perfecto para quienes buscan la comodidad de estar cerca de todos los servicios de la ciudad.",
    highlights: [
      "Ubicación premium cerca del centro",
      "Lotes de mayor tamaño disponibles",
      "Servicios urbanos disponibles",
      "Proyecto en desarrollo con amenidades"
    ],
    features: [
      "Agua y luz disponibles",
      "Vías embalastradas",
      "Parques y zona BBQ",
      "Salón comunal en desarrollo",
      "Pozo séptico industrial certificado",
      "Promesa de compra y venta",
      "Escritura pública individual",
      "Financiación directa"
    ],
    amenities: [
      {
        category: "Servicios Urbanos",
        items: ["Agua potable", "Energía eléctrica", "Pozo séptico industrial"]
      },
      {
        category: "Recreación",
        items: ["Parques", "Zona BBQ", "Salón comunal (en desarrollo)"]
      },
      {
        category: "Infraestructura",
        items: ["Vías embalastradas", "Certificaciones industriales"]
      }
    ],
    badge: "PREMIUM",
    video: "/bosques-alkali.mp4",
    poster: "/bosques-alkali-poster.jpg", // Thumbnail específico del video
    gallery: ["/bosques-alkali-1.jpg", "/bosques-alkali-2.jpg", "/bosques-alkali-3.jpg"],
    reserveAmount: "$1M",
    reserveDays: "1 mes",
    financingDetails: {
      initialPayment: "12M",
      monthlyPayment: "1.28M",
      totalMonths: 14,
      interestRate: "0%"
    },
    legalDocuments: [
      "Escritura pública individual",
      "Promesa de compra y venta",
      "Certificado pozo séptico industrial",
      "Documentos de subdivisión"
    ],
    nearbyPlaces: [
      { name: "Centro Acacías", distance: "800m", type: "ciudad" },
      { name: "Alcaldía Municipal", distance: "1 km", type: "gobierno" },
      { name: "Banco Agrario", distance: "1.2 km", type: "financiero" },
      { name: "Plaza de Mercado", distance: "1.5 km", type: "comercio" }
    ]
  },
  {
    id: "3",
    slug: "sabana-real",
    title: "🏞️ Sábana Real",
    location: "Vereda Montelibano",
    distance: "7 km del parque principal",
    lotSize: "7x14 metros",
    priceFrom: "14M",
    downPayment: "20%",
    financing: "24 meses",
    description: "Sábana Real ofrece la mejor opción de financiación sin intereses por 24 meses. Ubicado en la tranquila Vereda Montelibano, es perfecto para familias que buscan un hogar en un ambiente natural.",
    highlights: [
      "Financiación sin intereses por 24 meses",
      "Excelente relación precio-valor",
      "Ambiente familiar y seguro",
      "Documentación por subdivisión"
    ],
    features: [
      "Documentos por subdivisión",
      "Hermosa portería",
      "Vías embalastradas",
      "Parques y canchas múltiples",
      "Zona BBQ y Kiosco",
      "Zonas verdes",
      "Diseño construcción libre",
      "Pozo séptico industrial",
      "Sin intereses"
    ],
    amenities: [
      {
        category: "Recreación Familiar",
        items: ["Parques infantiles", "Canchas múltiples", "Zona BBQ", "Kiosco", "Zonas verdes"]
      },
      {
        category: "Servicios",
        items: ["Pozo séptico industrial", "Vías embalastradas"]
      },
      {
        category: "Acceso",
        items: ["Portería principal", "Diseño libre de construcción"]
      }
    ],
    badge: "SIN INTERÉS",
    image: "/sabana-real.jpg",
    gallery: ["/sabana-real-1.jpg", "/sabana-real-2.jpg", "/sabana-real-3.jpg"],
    reserveAmount: "$500K",
    reserveDays: "20 días",
    financingDetails: {
      initialPayment: "2.8M",
      monthlyPayment: "466K",
      totalMonths: 24,
      interestRate: "0%"
    },
    legalDocuments: [
      "Documentos por subdivisión",
      "Promesa de compra y venta",
      "Certificado pozo séptico",
      "Planos aprobados"
    ],
    nearbyPlaces: [
      { name: "Parque Principal Acacías", distance: "7 km", type: "recreacion" },
      { name: "Estación de Policía", distance: "8 km", type: "seguridad" },
      { name: "Centro de Salud", distance: "9 km", type: "salud" },
      { name: "Institución Educativa", distance: "6 km", type: "educacion" }
    ]
  },
  {
    id: "4",
    slug: "reservas-del-eden",
    title: "🏔️ Reservas del Edén",
    location: "Parte alta de Acacías",
    distance: "Zona urbana Acacías",
    lotSize: "6x12 metros",
    priceFrom: "51M",
    downPayment: "5M inicial",
    financing: "5 años",
    description: "Reservas del Edén es nuestro proyecto urbano premium en la parte alta de Acacías. Con todos los servicios públicos y la mejor infraestructura urbana, es la opción ideal para construcción inmediata.",
    highlights: [
      "Proyecto urbano con todos los servicios",
      "Ubicación privilegiada en zona alta",
      "Infraestructura completa",
      "Financiación a largo plazo"
    ],
    features: [
      "Proyecto urbano premium",
      "Vías pavimentadas",
      "Gas Natural",
      "Alcantarillado",
      "Agua de acueducto",
      "Construcción libre",
      "Escrituras públicas individuales",
      "0% tasa de interés",
      "Cuotas mensuales fijas"
    ],
    amenities: [
      {
        category: "Servicios Públicos",
        items: ["Gas natural", "Alcantarillado", "Agua de acueducto", "Energía eléctrica"]
      },
      {
        category: "Infraestructura Urbana",
        items: ["Vías pavimentadas", "Alumbrado público", "Andenes"]
      },
      {
        category: "Ubicación",
        items: ["Zona urbana", "Parte alta de Acacías", "Fácil acceso"]
      }
    ],
    badge: "URBANO",
    video: "/reservas-eden.mp4",
    poster: "/reservas-eden-poster.jpg", // Thumbnail específico del video
    gallery: ["/reservas-eden-1.jpg", "/reservas-eden-2.jpg", "/reservas-eden-3.jpg"],
    reserveAmount: "Consulta",
    reserveDays: "Disponible",
    financingDetails: {
      initialPayment: "5M",
      monthlyPayment: "766K",
      totalMonths: 60,
      interestRate: "0%"
    },
    legalDocuments: [
      "Escrituras públicas individuales",
      "Licencia de construcción",
      "Planos urbanos aprobados",
      "Certificados de servicios públicos"
    ],
    nearbyPlaces: [
      { name: "Centro Comercial", distance: "2 km", type: "comercio" },
      { name: "Universidad", distance: "3 km", type: "educacion" },
      { name: "Hospital", distance: "1.5 km", type: "salud" },
      { name: "Parque Central", distance: "2.5 km", type: "recreacion" }
    ]
  },
  {
    id: "5",
    slug: "versalles",
    title: "🏡 Versalles",
    location: "Ubicación privilegiada",
    distance: "Acacías",
    lotSize: "8x20 metros (160 m²)",
    priceFrom: "21M",
    downPayment: "20%",
    financing: "24 meses",
    description: "Versalles es tu inversión ideal con lotes de 8x20 metros en una ubicación privilegiada. Un entorno natural, seguro y listo para construir tu sueño con excelente financiación flexible.",
    highlights: [
      "Lotes amplios de 160 m² (8x20m)",
      "Inversión ideal desde $21 millones",
      "Entorno natural y seguro",
      "Financiación flexible a 24 meses"
    ],
    features: [
      "Portería y control de acceso",
      "Vías embalastradas",
      "Zona BBQ, kiosco y balneario natural",
      "Hermosa reserva natural",
      "Parques y canchas infantiles",
      "Redes eléctricas en la primera etapa",
      "Documentación al día",
      "Construcción libre",
      "Financiación sin intereses"
    ],
    amenities: [
      {
        category: "Recreación y Naturaleza",
        items: ["Zona BBQ", "Kiosco", "Balneario natural", "Reserva natural", "Parques infantiles", "Canchas infantiles"]
      },
      {
        category: "Servicios e Infraestructura",
        items: ["Redes eléctricas", "Vías embalastradas", "Documentación al día"]
      },
      {
        category: "Seguridad y Acceso",
        items: ["Portería", "Control de acceso", "Entorno seguro"]
      }
    ],
    badge: "INVERSIÓN IDEAL",
    video: "/versalles.mp4",
    poster: "/versalles-poster.jpg", // Thumbnail específico del video
    gallery: ["/versalles-1.jpg", "/versalles-2.jpg", "/versalles-3.jpg"],
    reserveAmount: "$1M",
    reserveDays: "30 días",
    financingDetails: {
      initialPayment: "4.2M",
      monthlyPayment: "700K",
      totalMonths: 24,
      interestRate: "0%"
    },
    legalDocuments: [
      "Documentación al día",
      "Promesa de compra y venta",
      "Escritura pública al finalizar",
      "Certificados de subdivisión"
    ],
    nearbyPlaces: [
      { name: "Centro de Acacías", distance: "Consultar", type: "ciudad" },
      { name: "Reserva Natural", distance: "0 km", type: "naturaleza" },
      { name: "Balneario Natural", distance: "0 km", type: "recreacion" },
      { name: "Zona Comercial", distance: "Consultar", type: "comercio" }
    ]
  }
];

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find(property => property.slug === slug);
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};
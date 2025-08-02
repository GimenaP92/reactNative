export const mockCategories = {
  vuelos: [
    // 🟢 Subcategoría: nacional
    {
      id: 1,
      title: "Vuelo Lima - Cusco",
      subcategory: "nacional",
      description: "Despegá hacia la aventura andina.",
      image1: "https://example.com/vuelo1.jpg",
      price: 120,
      quantity: 10,
    },
    {
      id: 2,
      title: "Vuelo Buenos Aires - Salta",
      subcategory: "nacional",
      description: "Descubrí el norte argentino desde el aire.",
      image1: "https://example.com/vuelo2.jpg",
      price: 110,
      quantity: 10,
    },
    {
      id: 3,
      title: "Vuelo Santiago - Arequipa",
      subcategory: "nacional",
      description: "Explorá la ciudad blanca del Perú.",
      image1: "https://example.com/vuelo3.jpg",
      price: 130,
      quantity: 10,
    },

    // 🌍 Subcategoría: latam
    {
      id: 4,
      title: "Vuelo Buenos Aires - Lima",
      subcategory: "latam",
      description: "Conectando culturas sudamericanas.",
      image1: "https://example.com/vuelo4.jpg",
      price: 150,
      quantity: 15,
    },
    {
      id: 5,
      title: "Vuelo Bogotá - Buenos Aires",
      subcategory: "latam",
      description: "Descubrí el sur desde Colombia.",
      image1: "https://example.com/vuelo5.jpg",
      price: 170,
      quantity: 10,
    },
    {
      id: 6,
      title: "Vuelo Quito - Santiago",
      subcategory: "latam",
      description: "Explorá los Andes de punta a punta.",
      image1: "https://example.com/vuelo6.jpg",
      price: 160,
      quantity: 12,
    },

    // 🌎 Subcategoría: europa
    {
      id: 7,
      title: "Vuelo Buenos Aires - Madrid",
      subcategory: "europa",
      description: "Europa te espera con historia y cultura.",
      image1: "https://example.com/vuelo7.jpg",
      price: 900,
      quantity: 8,
    },
    {
      id: 8,
      title: "Vuelo Lima - París",
      subcategory: "europa",
      description: "Descubrí la ciudad del amor.",
      image1: "https://example.com/vuelo8.jpg",
      price: 950,
      quantity: 6,
    },
    {
      id: 9,
      title: "Vuelo Santiago - Roma",
      subcategory: "europa",
      description: "Historia viva en cada rincón.",
      image1: "https://example.com/vuelo9.jpg",
      price: 920,
      quantity: 7,
    }
  ],

  alojamientos: [
    // 🟢 nacional
    {
      id: 10,
      title: "Hotel en Cusco",
      subcategory: "nacional",
      description: "Comodidad en el corazón del imperio inca.",
      image1: "https://example.com/hotel1.jpg",
      price: 90,
      quantity: 12,
    },
    {
      id: 11,
      title: "Cabaña en Bariloche",
      subcategory: "nacional",
      description: "Paisaje nevado y aire puro.",
      image1: "https://example.com/hotel2.jpg",
      price: 130,
      quantity: 10,
    },
    {
      id: 12,
      title: "Hostal en Aguas Calientes",
      subcategory: "nacional",
      description: "Ideal para mochileros rumbo a Machu Picchu.",
      image1: "https://example.com/hotel3.jpg",
      price: 70,
      quantity: 12,
    },

    // 🌍 latam
    {
      id: 13,
      title: "Hotel en Cartagena",
      subcategory: "latam",
      description: "Colores y playas en el Caribe colombiano.",
      image1: "https://example.com/hotel4.jpg",
      price: 110,
      quantity: 10,
    },
    {
      id: 14,
      title: "Hostel en Rio de Janeiro",
      subcategory: "latam",
      description: "Hospedate cerca del Pan de Azúcar.",
      image1: "https://example.com/hotel5.jpg",
      price: 95,
      quantity: 8,
    },
    {
      id: 15,
      title: "Hotel boutique en Valparaíso",
      subcategory: "latam",
      description: "Cultura, arte y mar.",
      image1: "https://example.com/hotel6.jpg",
      price: 105,
      quantity: 9,
    },

    // 🌎 europa
    {
      id: 16,
      title: "Apartamento en París",
      subcategory: "europa",
      description: "Vista a la Torre Eiffel.",
      image1: "https://example.com/hotel7.jpg",
      price: 180,
      quantity: 6,
    },
    {
      id: 17,
      title: "Hotel en Barcelona",
      subcategory: "europa",
      description: "Cerca de la Sagrada Familia.",
      image1: "https://example.com/hotel8.jpg",
      price: 175,
      quantity: 7,
    },
    {
      id: 18,
      title: "Hostal en Lisboa",
      subcategory: "europa",
      description: "Economía y cultura portuguesa.",
      image1: "https://example.com/hotel9.jpg",
      price: 150,
      quantity: 8,
    }
  ],

  paquetes: [
    // 🟢 nacional
    {
      id: 19,
      title: "Paquete Machu Picchu Full",
      subcategory: "nacional",
      description: "Incluye vuelo, hotel y tour guiado.",
      image1: "https://example.com/paquete1.jpg",
      price: 450,
      quantity: 14,
    },
    {
      id: 20,
      title: "Cusco + Valle Sagrado",
      subcategory: "nacional",
      description: "Una semana de historia y paisajes únicos.",
      image1: "https://example.com/paquete2.jpg",
      price: 400,
      quantity: 16,
    },
    {
      id: 21,
      title: "Aventura Inca 5 días",
      subcategory: "nacional",
      description: "Trekking, cultura y gastronomía.",
      image1: "https://example.com/paquete3.jpg",
      price: 350,
      quantity: 18,
    },

    // 🌍 latam
    {
      id: 22,
      title: "Brasil y Cataratas del Iguazú",
      subcategory: "latam",
      description: "Naturaleza y diversión.",
      image1: "https://example.com/paquete4.jpg",
      price: 600,
      quantity: 10,
    },
    {
      id: 23,
      title: "Colombia Caribeño",
      subcategory: "latam",
      description: "Cartagena + Santa Marta.",
      image1: "https://example.com/paquete5.jpg",
      price: 620,
      quantity: 10,
    },
    {
      id: 24,
      title: "Chile Sur y Lagos",
      subcategory: "latam",
      description: "Explorá Puerto Varas, Osorno y Frutillar.",
      image1: "https://example.com/paquete6.jpg",
      price: 580,
      quantity: 10,
    },

    // 🌎 europa
    {
      id: 25,
      title: "Europa Clásica 10 días",
      subcategory: "europa",
      description: "Madrid, París y Roma.",
      image1: "https://example.com/paquete7.jpg",
      price: 1300,
      quantity: 6,
    },
    {
      id: 26,
      title: "Ruta Escandinava",
      subcategory: "europa",
      description: "Estocolmo, Oslo y Copenhague.",
      image1: "https://example.com/paquete8.jpg",
      price: 1400,
      quantity: 6,
    },
    {
      id: 27,
      title: "España de Norte a Sur",
      subcategory: "europa",
      description: "Barcelona, Sevilla y Granada.",
      image1: "https://example.com/paquete9.jpg",
      price: 1250,
      quantity: 8,
    }
  ]
};

// PLACEHOLDER: sustituir por los menús y precios reales del cliente antes de publicar

export interface Dish {
  name: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  dishes: Dish[];
}

export interface Menu {
  id: string;
  name: string;
  tagline: string;
  eventType: string;
  price: string; // "Desde XX €/persona" o "Presupuesto personalizado"
  image: string;
  imageAlt: string;
  featured?: boolean;
  sections: MenuSection[];
}

export const menus: Menu[] = [
  {
    id: 'clasico',
    name: 'Menú Clásico',
    tagline: 'Tradición y calidad en cada plato',
    eventType: 'Bodas · Celebraciones',
    price: 'Desde XX €/persona', // PLACEHOLDER
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Presentación elegante de plato clásico de alta cocina',
    featured: true,
    sections: [
      {
        title: 'Aperitivos',
        dishes: [
          { name: 'Selección de ibéricos y quesos artesanos' },
          { name: 'Croquetas de jamón ibérico' },
          { name: 'Tostas de foie con mermelada de higos' },
          { name: 'Montaditos de salmón ahumado' },
        ],
      },
      {
        title: 'Primer plato',
        dishes: [
          { name: 'Ensalada templada de gambas con vinagreta de cítricos' },
          { name: 'Crema de espárragos blancos con hueva de trucha' },
        ],
      },
      {
        title: 'Segundo plato',
        dishes: [
          { name: 'Solomillo de ternera con salsa de trufa y patata confitada' },
          { name: 'Lubina al horno con verduras de temporada' },
        ],
      },
      {
        title: 'Postres',
        dishes: [
          { name: 'Tarta nupcial (o pastel de celebración) por encargo' },
          { name: 'Selección de petit fours y dulces artesanos' },
        ],
      },
      {
        title: 'Bebidas',
        dishes: [
          { name: 'Vinos seleccionados (blanco, tinto y cava)' },
          { name: 'Agua, refrescos y café' },
        ],
      },
    ],
  },
  {
    id: 'gourmet',
    name: 'Menú Gourmet',
    tagline: 'Alta cocina para momentos excepcionales',
    eventType: 'Bodas · Eventos Exclusivos',
    price: 'Desde XX €/persona', // PLACEHOLDER
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Presentación gourmet con emplatado de alta cocina creativa',
    featured: true,
    sections: [
      {
        title: 'Aperitivos',
        dishes: [
          { name: 'Degustación de jamón ibérico de bellota cortado al momento' },
          { name: 'Ostras frescas con mignonette' },
          { name: 'Tartar de atún rojo con aguacate y ponzu' },
          { name: 'Crujiente de queso manchego con membrillo' },
          { name: 'Pintxos de langostino con alioli de azafrán' },
        ],
      },
      {
        title: 'Entrante',
        dishes: [
          { name: 'Vieiras a la plancha con puré de coliflor y trufa negra' },
          { name: 'Tartar de wagyu con yema curada y mostaza antigua' },
        ],
      },
      {
        title: 'Principal',
        dishes: [
          { name: 'Lomo de buey madurado 45 días con jus de carne y grosellas' },
          { name: 'Rodaballo salvaje al vapor con emulsión de percebes' },
        ],
      },
      {
        title: 'Pre-postre y postre',
        dishes: [
          { name: 'Sorbete de yuzu con espuma de albahaca' },
          { name: 'Torrija caramelizada con helado de vainilla bourbon' },
        ],
      },
      {
        title: 'Maridaje',
        dishes: [
          { name: 'Selección de vinos DO Ribera, Rioja y Priorat' },
          { name: 'Cava Brut Nature y champagne para el brindis' },
        ],
      },
    ],
  },
  {
    id: 'coctel',
    name: 'Menú Cóctel',
    tagline: 'Pases creativos y estaciones gastronómicas',
    eventType: 'Eventos Corporativos · Recepciones',
    price: 'Desde XX €/persona', // PLACEHOLDER
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Servicio de cóctel con pases elegantes y barras temáticas',
    sections: [
      {
        title: 'Fríos',
        dishes: [
          { name: 'Mini-brochetas caprese con pesto de rúcula' },
          { name: 'Tartaletas de salmón con crema de eneldo' },
          { name: 'Blinis de caviar y crème fraîche' },
          { name: 'Cucharillas de gazpacho cordobés' },
        ],
      },
      {
        title: 'Calientes',
        dishes: [
          { name: 'Croquetas de bacalao al pil-pil' },
          { name: 'Mini-hamburguesas de wagyu con queso brie' },
          { name: 'Hojaldre de champiñón y foie' },
          { name: 'Rabas de calamar con alioli negro' },
        ],
      },
      {
        title: 'Estación de quesos',
        dishes: [
          { name: 'Tabla de quesos artesanos nacionales con frutos secos y mermeladas' },
        ],
      },
      {
        title: 'Dulces',
        dishes: [
          { name: 'Macarons, bombones y petit fours artesanos' },
          { name: 'Mini-tartas y mousse en vasito' },
        ],
      },
      {
        title: 'Bebidas',
        dishes: [
          { name: 'Barra libre de vinos, cava, cócteles sin alcohol y refrescos' },
        ],
      },
    ],
  },
  {
    id: 'comunion',
    name: 'Menú Comunión',
    tagline: 'Celebración familiar con sabor a recuerdo',
    eventType: 'Comuniones · Bautizos',
    price: 'Desde XX €/persona', // PLACEHOLDER
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Mesa dulce y catering para comunión con repostería artesanal',
    sections: [
      {
        title: 'Aperitivos',
        dishes: [
          { name: 'Selección de ibéricos y quesos' },
          { name: 'Croquetas variadas (jamón y queso)' },
          { name: 'Empanadas y empanadillas caseras' },
        ],
      },
      {
        title: 'Primer plato',
        dishes: [
          { name: 'Ensalada mixta con atún y huevo duro' },
          { name: 'Menestra de verduras salteadas' },
        ],
      },
      {
        title: 'Segundo plato',
        dishes: [
          { name: 'Pollo asado al limón con patatas panaderas' },
          { name: 'Merluza al horno con pimiento y tomate' },
        ],
      },
      {
        title: 'Mesa dulce',
        dishes: [
          { name: 'Tarta de celebración personalizada' },
          { name: 'Chuches, nubes y golosinas para los más pequeños' },
          { name: 'Bollería artesana variada' },
        ],
      },
      {
        title: 'Bebidas',
        dishes: [
          { name: 'Vino, cava, refrescos, agua y zumos' },
        ],
      },
    ],
  },
];

// Datos de muestra para la sección de la Home (adelanto)
export const featuredMenus = menus.filter((m) => m.featured);

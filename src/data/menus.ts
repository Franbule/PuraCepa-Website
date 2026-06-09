export interface Dish {
  name: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  dishes: Dish[];
  note?: string;
}

export interface Menu {
  id: string;
  name: string;
  tagline: string;
  eventType: string;
  price: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  sections: MenuSection[];
}

export const menus: Menu[] = [
  {
    id: 'punto-gourmet',
    name: 'Menú Punto Gourmet',
    tagline: 'Estaciones gastronómicas para eventos sociales y corporativos',
    eventType: 'Cócteles · Eventos Corporativos · Celebraciones',
    price: 'Consultar presupuesto',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Estaciones gastronómicas de cóctel con selección de productos premium',
    featured: true,
    sections: [
      {
        title: 'Estaciones gastronómicas',
        note: 'Mínimo 50 comensales',
        dishes: [
          { name: 'Punto Tortilla' },
          { name: 'Punto El Soldado' },
          { name: 'Punto de Quesos Variados' },
          { name: 'Punto de Ibéricos del Valle de los Pedroches' },
          { name: 'Punto de Ahumados y Salazones' },
          { name: 'Punto de Carnes Asadas' },
          { name: 'Punto de Pescados' },
        ],
      },
    ],
  },
  {
    id: 'con-protocolo',
    name: 'Menú con Protocolo',
    tagline: 'Menú sentado para celebraciones formales y eventos de empresa',
    eventType: 'Bodas · Eventos Institucionales · Empresa',
    price: 'Consultar presupuesto',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Mesa con protocolo y servicio de alta cocina para evento formal',
    featured: true,
    sections: [
      {
        title: 'Primer plato (a elegir)',
        dishes: [
          { name: 'Salmón marinado con aceite de oliva virgen extra' },
          { name: 'Ensalada variada de temporada' },
          { name: 'Bacalao confitado con aceite de oliva y pil-pil' },
          { name: 'Lasaña de pesto manchego' },
          { name: 'Rodaballo con pimientos asados' },
          { name: 'Canelones de setas con bechamel y queso' },
          { name: 'Risotto de boletus y gambas' },
          { name: 'Terrina rellena de carne' },
          { name: 'Tartar de salmón' },
          { name: 'Tartar de atún' },
          { name: 'Steak tartar' },
        ],
      },
      {
        title: 'Segundo plato (a elegir)',
        dishes: [
          { name: 'Carrillera de cerdo deshuesada rellena de foie y arándanos' },
          { name: 'Cochinillo crujiente asado con finas capas de hojaldre' },
          { name: 'Carrillada confitada' },
          { name: 'Secreto ibérico confitado a baja temperatura' },
          { name: 'Presa ibérica con guarnición de patatas panaderas' },
        ],
      },
      {
        title: 'Postres (a elegir)',
        dishes: [
          { name: 'Leche frita' },
          { name: 'Tarta de leche de coco' },
          { name: 'Volcán de chocolate' },
          { name: 'Coulant de chocolate' },
          { name: 'Tarta de zanahoria' },
          { name: 'Tarta de queso manchego' },
        ],
      },
      {
        title: 'Opciones adicionales',
        dishes: [
          { name: 'Quesos seleccionados' },
          { name: 'Ahumados' },
          { name: 'Especialidades rebozadas' },
          { name: 'Eventos personalizados bajo demanda' },
        ],
      },
    ],
  },
  {
    id: 'pura-cepa',
    name: 'Menú Pura Cepa',
    tagline: 'Nuestra selección más representativa — la experiencia definitiva',
    eventType: 'Bodas · Celebraciones · Eventos Especiales',
    price: 'Consultar presupuesto',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Selección de platos premium del Menú Pura Cepa con productos de máxima calidad',
    sections: [
      {
        title: 'Propuesta gastronómica',
        dishes: [
          { name: 'Surtido de quesos con denominación de origen de leche cruda' },
          { name: 'Surtido de ibéricos del Valle de los Pedroches' },
          { name: 'Selección de ahumados gourmet' },
          { name: 'Salmorejo cordobés con virutas de jamón ibérico' },
          { name: 'Medallón de mango con reducción de Pedro Ximénez y frutos secos' },
          { name: 'Tartar de salmón servido en cuchara' },
          { name: 'Surtido de mini croquetas artesanas' },
          { name: 'Muslitos de codorniz en escabeche' },
          { name: 'Presa ibérica de bellota a la brasa' },
        ],
      },
      {
        title: 'Bebidas',
        dishes: [
          { name: 'Selección de bebidas incluida según evento' },
        ],
      },
      {
        title: 'Postres',
        dishes: [
          { name: 'Surtido de pastelillos de bocado' },
        ],
      },
    ],
  },
];

export const featuredMenus = menus.filter((m) => m.featured);

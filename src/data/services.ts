export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export const services: Service[] = [
  {
    id: 'bodas',
    title: 'Catering para Bodas',
    description:
      'Convertimos el día más especial de tu vida en una experiencia gastronómica inolvidable. Menús personalizados, presentación impecable y servicio de primer nivel para que todo sea perfecto.',
    image:
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Elegante mesa de boda con flores y vajilla de lujo',
    href: '/catering-bodas-cordoba',
  },
  {
    id: 'corporativo',
    title: 'Eventos Corporativos',
    description:
      'Servicios de catering para reuniones, presentaciones, team buildings y eventos de representación. Profesionalidad, puntualidad y calidad garantizadas para cada ocasión.',
    image:
      'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Evento corporativo con buffet y servicio profesional de catering',
    href: '/catering-eventos-corporativos-cordoba',
  },
  {
    id: 'comuniones',
    title: 'Comuniones',
    description:
      'Celebra la primera comunión con una comida memorable para toda la familia. Menús pensados para todas las edades, con presentaciones que sorprenden y un servicio cercano.',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Mesa elegante decorada para celebración de comunión',
    href: '/comuniones-cordoba',
  },
  {
    id: 'bautizos',
    title: 'Bautizos',
    description:
      'El bautizo de tu bebé merece una celebración especial. Creamos ambientes íntimos y elegantes con gastronomía de calidad para compartir este momento único en familia.',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Repostería artesanal y mesa decorada para bautizo',
    href: '/contacto',
  },
  {
    id: 'privadas',
    title: 'Celebraciones Privadas',
    description:
      'Cumpleaños, aniversarios, fiestas familiares... Adaptamos nuestro servicio a cualquier tipo de celebración con la misma exigencia y dedicación que ponemos en cada evento.',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Celebración privada elegante con servicio de catering personalizado',
    href: '/contacto',
  },
  {
    id: 'cocktails',
    title: 'Cócteles y Aperitivos',
    description:
      'Inauguraciones, vernissages, recepciones... Diseñamos experiencias de cóctel con pases creativos, barras temáticas y estaciones gastronómicas que impresionan a tus invitados.',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80&fit=crop&auto=format',
    imageAlt: 'Elegante servicio de cócteles y aperitivos premium',
    href: '/contacto',
  },
];

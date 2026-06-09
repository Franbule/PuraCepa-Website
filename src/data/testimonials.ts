// PLACEHOLDER: sustituir por reseñas reales antes de publicar
// No publicar estas reseñas como si fueran reales — son ejemplos ilustrativos

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  event: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'María y Carlos G.',
    role: 'Novios',
    text: 'PuraCepa convirtió nuestra boda en algo verdaderamente mágico. La comida fue excepcional, el servicio impecable y la atención personalizada superó todas nuestras expectativas. Nuestros invitados siguen hablando de ello.',
    rating: 5,
    event: 'Boda · Córdoba',
  },
  {
    name: 'Lucía M.',
    role: 'Responsable de RRHH',
    text: 'Contratamos a PuraCepa para nuestra gala anual de empresa y el resultado fue sobresaliente. Profesionalidad absoluta, puntualidad y una gastronomía de nivel que dejó a todos nuestros directivos muy satisfechos.',
    rating: 5,
    event: 'Evento Corporativo · 200 personas',
  },
  {
    name: 'Ana R.',
    role: 'Madre de la festejada',
    text: 'La comunión de mi hija fue un sueño. El menú estaba delicioso, la presentación era preciosa y el equipo de PuraCepa estuvo pendiente de todo. Totalmente recomendables para cualquier celebración familiar.',
    rating: 5,
    event: 'Comunión · Córdoba',
  },
];

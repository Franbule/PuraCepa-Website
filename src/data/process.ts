export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Contacto inicial',
    description:
      'Cuéntanos tu idea: tipo de evento, fecha aproximada y número de invitados. Te respondemos en menos de 24 horas para comenzar a diseñar tu experiencia.',
  },
  {
    number: '02',
    title: 'Asesoramiento personalizado',
    description:
      'Nos reunimos contigo (presencial o por videollamada) para conocer tus gustos, necesidades, presupuesto y la visión que tienes para el evento.',
  },
  {
    number: '03',
    title: 'Propuesta a medida',
    description:
      'Elaboramos una propuesta gastronómica y de servicio 100% personalizada, con menú detallado y presupuesto transparente sin sorpresas.',
  },
  {
    number: '04',
    title: 'Organización y coordinación',
    description:
      'Nuestro equipo se encarga de toda la logística: montaje, personal de servicio, materiales y coordinación con el espacio para que tú solo disfrutes.',
  },
  {
    number: '05',
    title: 'Tu celebración, impecable',
    description:
      'El gran día, nuestro equipo trabaja en silencio para que todo fluya a la perfección. Tú y tus invitados solo tenéis que disfrutar.',
  },
];

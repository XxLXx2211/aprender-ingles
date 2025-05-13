// Categorías y dificultades para el juego

// Categorías de adjetivos
export const adjectiveCategories = [
  {
    id: 'short',
    name: 'Adjetivos Comparativos Cortos',
    description: 'Adjetivos de una o dos sílabas que generalmente añaden -er para el comparativo y -est para el superlativo.',
    rules: [
      'Para la mayoría de adjetivos cortos, añade -er para el comparativo y -est para el superlativo.',
      'Si el adjetivo termina en una sola consonante precedida de una sola vocal, duplica la consonante final antes de añadir -er o -est.',
      'Si el adjetivo termina en e, solo añade -r para el comparativo y -st para el superlativo.',
      'Si el adjetivo termina en y precedida de una consonante, cambia la y por i y añade -er o -est.'
    ]
  },
  {
    id: 'long',
    name: 'Adjetivos Comparativos Largos',
    description: 'Adjetivos de tres o más sílabas que usan "more" para el comparativo y "most" para el superlativo.',
    rules: [
      'Para adjetivos de tres o más sílabas, usa "more" antes del adjetivo para el comparativo.',
      'Para adjetivos de tres o más sílabas, usa "most" antes del adjetivo para el superlativo.'
    ]
  },
  {
    id: 'irregular',
    name: 'Adjetivos Comparativos Irregulares',
    description: 'Adjetivos que no siguen las reglas normales para formar comparativos y superlativos.',
    rules: [
      'Estos adjetivos tienen formas especiales para el comparativo y superlativo que deben memorizarse.'
    ]
  }
];

// Categorías de expresiones
export const expressionCategories = [
  {
    id: 'idioms',
    name: 'Expresiones Idiomáticas',
    description: 'Frases que tienen un significado figurativo diferente de su significado literal.'
  },
  {
    id: 'phrasal',
    name: 'Verbos Frasales',
    description: 'Combinaciones de verbos y preposiciones o adverbios que crean un nuevo significado.'
  },
  {
    id: 'collocations',
    name: 'Colocaciones',
    description: 'Combinaciones de palabras que suelen aparecer juntas y suenan naturales para los hablantes nativos.'
  },
  {
    id: 'everyday',
    name: 'Expresiones Cotidianas',
    description: 'Frases comunes utilizadas en situaciones diarias.'
  }
];

// Dificultad de las oraciones (independiente de los adjetivos)
export const sentenceDifficulty = {
  EASY: 1,    // Oraciones simples y directas
  MEDIUM: 2,  // Oraciones con estructura más compleja
  HARD: 3     // Oraciones con vocabulario avanzado o estructura compleja
};

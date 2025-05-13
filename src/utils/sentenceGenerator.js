// Generador de oraciones dinámicas para adjetivos y expresiones
// Permite crear infinitas combinaciones de oraciones para practicar

import { largeAdjectivesData } from '../data/adjectivesLargeData';
import { largeExpressionsData } from '../data/expressionsLargeData';
import { sentenceDifficulty } from '../data/categories';
import {
  comparativeTemplates,
  superlativeTemplates,
  subjects,
  categories,
  places
} from './sentenceTemplates';



// Función para generar una oración comparativa aleatoria
export const generateComparativeSentence = (difficulty = null) => {
  // Filtrar plantillas por dificultad si se especifica
  let availableTemplates = comparativeTemplates;
  if (difficulty) {
    availableTemplates = comparativeTemplates.filter(t => t.difficulty === difficulty);
  }

  // Seleccionar una plantilla aleatoria
  const templateIndex = Math.floor(Math.random() * availableTemplates.length);
  const template = availableTemplates[templateIndex];

  // Determinar si necesitamos sujetos singulares o plurales
  const usePlural = template.template.includes("are") || template.template.includes("subjects");

  // Seleccionar sujetos aleatorios
  const subjectPool = usePlural ? subjects.plural : subjects.singular;
  let subject1, subject2;

  do {
    subject1 = subjectPool[Math.floor(Math.random() * subjectPool.length)];
    subject2 = subjectPool[Math.floor(Math.random() * subjectPool.length)];
  } while (subject1 === subject2); // Asegurarse de que los sujetos sean diferentes

  // Construir la oración
  let sentence = template.template
    .replace("{subject1}", subject1)
    .replace("{subject2}", subject2);

  // Seleccionar un adjetivo aleatorio (excluyendo irregulares para mayor claridad)
  const adjectives = largeAdjectivesData.filter(adj => adj.category !== 'irregular');
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  return {
    text: sentence,
    adjective: adjective.word,
    form: "comparative",
    // La respuesta correcta debe incluir "than" que el usuario debe escribir
    answer: adjective.comparative + " than",
    translation: `Forma comparativa de "${adjective.word}" (${adjective.translation}): "${adjective.comparative} than"`,
    difficulty: template.difficulty
  };
};

// Función para generar una oración superlativa aleatoria
export const generateSuperlativeSentence = (difficulty = null) => {
  // Filtrar plantillas por dificultad si se especifica
  let availableTemplates = superlativeTemplates;
  if (difficulty) {
    availableTemplates = superlativeTemplates.filter(t => t.difficulty === difficulty);
  }

  // Seleccionar una plantilla aleatoria
  const templateIndex = Math.floor(Math.random() * availableTemplates.length);
  const template = availableTemplates[templateIndex];

  // Seleccionar categoría y lugar aleatorios
  const category = categories[Math.floor(Math.random() * categories.length)];
  const place = places[Math.floor(Math.random() * places.length)];

  // Seleccionar un sujeto aleatorio si es necesario
  const subject1 = subjects.singular[Math.floor(Math.random() * subjects.singular.length)];

  // Construir la oración
  let sentence = template.template
    .replace("{subject1}", subject1)
    .replace("{category}", category)
    .replace("{place}", place);

  // Seleccionar un adjetivo aleatorio (excluyendo irregulares para mayor claridad)
  const adjectives = largeAdjectivesData.filter(adj => adj.category !== 'irregular');
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  return {
    text: sentence,
    adjective: adjective.word,
    form: "superlative",
    // La respuesta correcta debe incluir "the" que el usuario debe escribir
    answer: "the " + adjective.superlative,
    translation: `Forma superlativa de "${adjective.word}" (${adjective.translation}): "the ${adjective.superlative}"`,
    difficulty: template.difficulty
  };
};

// Función para obtener una expresión aleatoria
export const getRandomExpression = (difficulty = null) => {
  // Obtener todas las expresiones
  const allExpressions = [...largeExpressionsData];

  // Seleccionar una expresión aleatoria
  const randomIndex = Math.floor(Math.random() * allExpressions.length);
  const expression = allExpressions[randomIndex];

  // Asignar una dificultad aleatoria si no se especifica
  const expressionWithDifficulty = {
    ...expression,
    difficulty: difficulty || Math.floor(Math.random() * 3) + 1
  };

  return expressionWithDifficulty;
};

// Función para obtener un adjetivo aleatorio
export const getRandomAdjective = () => {
  const randomIndex = Math.floor(Math.random() * largeAdjectivesData.length);
  return largeAdjectivesData[randomIndex];
};

// Función principal para generar una oración aleatoria según el modo y dificultad
export const generateRandomSentence = (mode, difficulty = null) => {
  if (mode === 'expressions') {
    return getRandomExpression(difficulty);
  } else if (mode === 'comparative') {
    return generateComparativeSentence(difficulty);
  } else {
    // Alternar entre comparativo y superlativo
    const isComparative = Math.random() > 0.5;
    return isComparative
      ? generateComparativeSentence(difficulty)
      : generateSuperlativeSentence(difficulty);
  }
};

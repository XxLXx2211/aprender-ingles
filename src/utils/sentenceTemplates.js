// Plantillas de oraciones para el juego
// Estas plantillas se usan para generar oraciones dinámicamente

import { sentenceDifficulty } from '../data/categories';

// Plantillas de oraciones para adjetivos comparativos
// Nota: Se ha eliminado "than" para que el usuario deba escribirlo
export const comparativeTemplates = [
  {
    template: "{subject1} is _____ {subject2}.",
    difficulty: sentenceDifficulty.EASY
  },
  {
    template: "{subject1} are _____ {subject2}.",
    difficulty: sentenceDifficulty.EASY
  },
  {
    template: "Is {subject1} _____ {subject2}?",
    difficulty: sentenceDifficulty.EASY
  },
  {
    template: "{subject1} seems _____ {subject2}.",
    difficulty: sentenceDifficulty.MEDIUM
  },
  {
    template: "I think {subject1} is _____ {subject2}.",
    difficulty: sentenceDifficulty.MEDIUM
  },
  {
    template: "Would you say {subject1} is _____ {subject2}?",
    difficulty: sentenceDifficulty.MEDIUM
  },
  {
    template: "{subject1} has always been _____ {subject2}.",
    difficulty: sentenceDifficulty.MEDIUM
  },
  {
    template: "Most people agree that {subject1} is _____ {subject2}.",
    difficulty: sentenceDifficulty.HARD
  },
  {
    template: "It's widely accepted that {subject1} is _____ {subject2}.",
    difficulty: sentenceDifficulty.HARD
  },
  {
    template: "Experts consider {subject1} to be _____ {subject2}.",
    difficulty: sentenceDifficulty.HARD
  }
];

// Plantillas de oraciones para adjetivos superlativos
// Nota: Se ha eliminado "the" para que el usuario deba escribirlo
export const superlativeTemplates = [
  {
    template: "{subject1} is _____ {category} in {place}.",
    difficulty: sentenceDifficulty.EASY
  },
  {
    template: "This is _____ {category} I've ever seen.",
    difficulty: sentenceDifficulty.EASY
  },
  {
    template: "Who is _____ {category} in your family?",
    difficulty: sentenceDifficulty.EASY
  },
  {
    template: "That was _____ {category} I've experienced.",
    difficulty: sentenceDifficulty.MEDIUM
  },
  {
    template: "She has _____ {category} among all her friends.",
    difficulty: sentenceDifficulty.MEDIUM
  },
  {
    template: "What's _____ {category} you can imagine?",
    difficulty: sentenceDifficulty.MEDIUM
  },
  {
    template: "They claim to have _____ {category} in the industry.",
    difficulty: sentenceDifficulty.HARD
  },
  {
    template: "The survey revealed it to be _____ {category} of all time.",
    difficulty: sentenceDifficulty.HARD
  },
  {
    template: "Critics consider this _____ {category} of the decade.",
    difficulty: sentenceDifficulty.HARD
  }
];

// Sujetos para comparaciones
export const subjects = {
  singular: [
    "a cat", "a dog", "a car", "a house", "a book", "a movie", "a song", "a city",
    "a mountain", "a river", "a lake", "an ocean", "a computer", "a phone",
    "a teacher", "a student", "a doctor", "an engineer", "a chef", "an artist",
    "summer", "winter", "spring", "autumn", "Monday", "Friday", "January", "December",
    "coffee", "tea", "water", "juice", "pizza", "pasta", "chocolate", "vanilla",
    "running", "swimming", "reading", "writing", "cooking", "dancing", "singing", "painting"
  ],
  plural: [
    "cats", "dogs", "cars", "houses", "books", "movies", "songs", "cities",
    "mountains", "rivers", "lakes", "oceans", "computers", "phones",
    "teachers", "students", "doctors", "engineers", "chefs", "artists",
    "summers", "winters", "springs", "autumns", "Mondays", "Fridays",
    "adults", "children", "parents", "teenagers", "babies", "seniors",
    "apples", "oranges", "bananas", "grapes", "strawberries", "blueberries",
    "sports", "hobbies", "activities", "exercises", "languages", "subjects"
  ]
};

// Categorías para superlativos
export const categories = [
  "person", "animal", "thing", "place", "experience", "moment", "option", "choice",
  "book", "movie", "song", "game", "sport", "activity", "food", "drink",
  "city", "country", "building", "view", "idea", "concept", "solution", "approach"
];

// Lugares para superlativos
export const places = [
  "the world", "the country", "the city", "the town", "the neighborhood", "the school", "the university", "the company",
  "the team", "the group", "the family", "the class", "this generation", "this century", "this decade", "this year",
  "the competition", "the contest", "the tournament", "the league", "the division", "the category", "the field", "the industry"
];

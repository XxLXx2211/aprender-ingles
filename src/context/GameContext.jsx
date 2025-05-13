import { createContext, useState, useEffect, useContext } from 'react';
import { largeAdjectivesData } from '../data/adjectivesLargeData';
import { largeExpressionsData } from '../data/expressionsLargeData';
import { commonExpressionsData } from '../data/commonExpressionsData';
import { generateComparativeSentence, generateSuperlativeSentence, getRandomExpression } from '../utils/sentenceGenerator';

// Crear el contexto
const GameContext = createContext();

// Proveedor del contexto
const GameProvider = ({ children }) => {
  // Estado para el nivel de dificultad
  const [difficulty, setDifficulty] = useState(1);

  // Estado para el modo de juego (normal, expressions, timed)
  const [gameMode, setGameMode] = useState('normal');

  // Estado para las estadísticas del jugador
  const [stats, setStats] = useState(() => {
    const savedStats = localStorage.getItem('gameStats');
    return savedStats ? JSON.parse(savedStats) : {
      correctAnswers: 0,
      incorrectAnswers: 0,
      totalPlayed: 0,
      streak: 0,
      bestStreak: 0,
      lastPlayed: null
    };
  });

  // Estado para la oración actual
  const [currentSentence, setCurrentSentence] = useState(null);

  // Estado para la respuesta del usuario
  const [userAnswer, setUserAnswer] = useState('');

  // Estado para el resultado de la respuesta
  const [result, setResult] = useState(null); // 'correct', 'incorrect', null

  // Estado para el tiempo restante (para el modo cronometrado)
  const [timeRemaining, setTimeRemaining] = useState(30);

  // Estado para controlar si el juego está activo
  const [isPlaying, setIsPlaying] = useState(false);

  // Estado para el contador de respuestas correctas consecutivas
  const [currentStreak, setCurrentStreak] = useState(0);

  // Guardar estadísticas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('gameStats', JSON.stringify(stats));
  }, [stats]);

  // Obtener una oración o expresión aleatoria según el nivel y modo
  const getRandomSentence = () => {
    if (gameMode === 'expressions') {
      // Modo expresiones - combinar ambas bases de datos
      const allExpressions = [...largeExpressionsData, ...commonExpressionsData];
      const randomIndex = Math.floor(Math.random() * allExpressions.length);
      return allExpressions[randomIndex];
    } else if (gameMode === 'timed') {
      // Modo contrarreloj - alternar entre comparativo y superlativo
      const isComparative = Math.random() > 0.5;
      return isComparative
        ? generateComparativeSentence(difficulty)
        : generateSuperlativeSentence(difficulty);
    } else {
      // Modo normal (adjetivos) - alternar entre comparativo y superlativo
      const isComparative = Math.random() > 0.5;
      return isComparative
        ? generateComparativeSentence(difficulty)
        : generateSuperlativeSentence(difficulty);
    }
  };

  // Iniciar el juego
  const startGame = () => {
    setCurrentSentence(getRandomSentence());
    setUserAnswer('');
    setResult(null);
    setIsPlaying(true);

    if (gameMode === 'timed') {
      setTimeRemaining(30);
    }
  };

  // Verificar la respuesta del usuario
  const checkAnswer = () => {
    if (!currentSentence) return;

    let correctAnswer;

    // Determinar la respuesta correcta según el tipo de contenido
    if (currentSentence.hasOwnProperty('answer')) {
      // Es una expresión o una oración con respuesta predefinida
      correctAnswer = currentSentence.answer;
    } else {
      // Es una oración con adjetivo (caso antiguo, por compatibilidad)
      const adj = largeAdjectivesData.find(a => a.word === currentSentence.adjective);

      // Verificar si el adjetivo existe
      if (!adj) {
        console.error(`Adjetivo no encontrado: ${currentSentence.adjective}`);
        correctAnswer = "";
      } else {
        // Obtener la forma correcta (comparativo o superlativo)
        if (currentSentence.form === 'comparative') {
          correctAnswer = adj.comparative + " than";
        } else {
          correctAnswer = "the " + adj.superlative;
        }
      }
    }

    // Normalizar la respuesta del usuario y la respuesta correcta
    const normalizedUserAnswer = userAnswer.toLowerCase().trim();
    const normalizedCorrectAnswer = correctAnswer.toLowerCase().trim();

    // Verificar si la respuesta es exactamente correcta
    let isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;

    // Actualizar estadísticas
    setStats(prev => ({
      ...prev,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      incorrectAnswers: !isCorrect ? prev.incorrectAnswers + 1 : prev.incorrectAnswers,
      totalPlayed: prev.totalPlayed + 1,
      lastPlayed: new Date().toISOString()
    }));

    // Actualizar racha
    if (isCorrect) {
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);

      // Actualizar mejor racha si es necesario
      if (newStreak > stats.bestStreak) {
        setStats(prev => ({
          ...prev,
          bestStreak: newStreak
        }));
      }
    } else {
      setCurrentStreak(0);
    }

    setResult(isCorrect ? 'correct' : 'incorrect');

    // Preparar siguiente pregunta después de un breve retraso
    setTimeout(() => {
      setCurrentSentence(getRandomSentence());
      setUserAnswer('');
      setResult(null);
    }, 2000);
  };

  // Finalizar el juego
  const endGame = () => {
    setIsPlaying(false);
    setCurrentSentence(null);
    setUserAnswer('');
    setResult(null);
    setCurrentStreak(0);
  };

  // Valores que se proporcionarán a través del contexto
  const contextValue = {
    difficulty,
    setDifficulty,
    gameMode,
    setGameMode,
    stats,
    currentSentence,
    userAnswer,
    setUserAnswer,
    result,
    timeRemaining,
    isPlaying,
    currentStreak,
    startGame,
    checkAnswer,
    endGame
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
export const useGameContext = () => useContext(GameContext);

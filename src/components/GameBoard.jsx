import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  LinearProgress,
  Chip
} from '@mui/material';
import { useGameContext } from '../context/GameContext';
import { largeAdjectivesData } from '../data/adjectivesLargeData';
import AudioPlayer from './AudioPlayer';

const GameBoard = () => {
  const {
    currentSentence,
    userAnswer,
    setUserAnswer,
    result,
    checkAnswer,
    gameMode,
    timeRemaining,
    setTimeRemaining,
    isPlaying,
    currentStreak,
    difficulty
  } = useGameContext();

  const [timer, setTimer] = useState(null);
  const inputRef = useRef(null);

  // Efecto para manejar el temporizador en modo contrarreloj
  useEffect(() => {
    if (gameMode === 'timed' && isPlaying) {
      const countdown = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      setTimer(countdown);

      return () => clearInterval(countdown);
    } else if (timer) {
      clearInterval(timer);
    }
  }, [gameMode, isPlaying, setTimeRemaining]);

  // Efecto para enfocar el campo de entrada cuando cambia la oración
  useEffect(() => {
    if (currentSentence && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentSentence]);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
  };

  // Si no hay oración actual o no está jugando, mostrar mensaje
  if (!currentSentence || !isPlaying) {
    return (
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6">
          Selecciona un modo de juego y haz clic en "Comenzar Juego" para empezar.
        </Typography>
      </Paper>
    );
  }

  // Determinar si estamos trabajando con una expresión o un adjetivo
  const isExpression = gameMode === 'expressions';

  // Obtener el adjetivo correcto para mostrar pista (solo para modo adjetivos)
  const currentAdjective = !isExpression && currentSentence.adjective ?
    largeAdjectivesData.find(adj => adj.word === currentSentence.adjective) : null;

  // Preparar la oración con espacio para completar
  const sentenceParts = currentSentence.text.split('_____');

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      {gameMode === 'timed' && (
        <Box sx={{ mb: 2 }}>
          <LinearProgress variant="determinate" value={(timeRemaining / 30) * 100} color={timeRemaining < 10 ? "error" : "primary"} />
          <Typography variant="body2" align="right" sx={{ mt: 0.5 }}>
            Tiempo: {timeRemaining} segundos
          </Typography>
        </Box>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Chip label={`Nivel: ${difficulty}`} color="primary" variant="outlined" />
        <Chip label={`Racha: ${currentStreak}`} color="success" />
      </Box>

      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
          {sentenceParts[0]}
          <Box component="span" sx={{ mx: 1, borderBottom: '2px dashed', display: 'inline-block', minWidth: '80px' }}>
            {result && (
              <Typography variant="body1" color={result === 'correct' ? 'success.main' : 'error.main'}>
                {result === 'correct' ? userAnswer : (currentSentence.answer || (currentSentence.form === 'comparative'
                    ? currentAdjective.comparative + " than"
                    : "the " + currentAdjective.superlative))}
              </Typography>
            )}
          </Box>
          {sentenceParts[1]}
        </Typography>
        <AudioPlayer word={currentSentence.text.replace('_____', '...')} type="sentence" />
      </Box>

      <Box sx={{ mb: 3, textAlign: 'center' }}>
        {isExpression ? (
          // Instrucciones para expresiones
          <Box>
            <Typography variant="body2" color="text.secondary">
              Completa la expresión con la palabra correcta:
            </Typography>
            <Box sx={{ mt: 1, mb: 2 }}>
              <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                Categoría: {currentSentence.category === 'idioms' ? 'Expresión Idiomática' :
                           currentSentence.category === 'phrasal' ? 'Verbo Frasal' :
                           currentSentence.category === 'collocations' ? 'Colocación' : 'Expresión Cotidiana'}
              </Typography>
            </Box>
          </Box>
        ) : (
          // Instrucciones para adjetivos
          <Box>
            <Typography variant="body2" color="text.secondary">
              Completa la oración con la forma {currentSentence.form === 'comparative' ? 'comparativa' : 'superlativa'} del adjetivo:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                {currentAdjective?.word || "Cargando..."}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                ({currentAdjective?.translation || "..."})
              </Typography>
              <Box sx={{ mt: 1 }}>
                {currentAdjective && <AudioPlayer word={currentAdjective.word} />}
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            fullWidth
            label="Tu respuesta"
            variant="outlined"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={!!result}
            inputRef={inputRef}
            autoComplete="off"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!userAnswer || !!result}
            fullWidth
          >
            Comprobar
          </Button>
        </Box>
      </form>

      {result && (
        <Alert
          severity={result === 'correct' ? 'success' : 'error'}
          sx={{ mt: 2 }}
        >
          {result === 'correct'
            ? '¡Correcto! Muy bien hecho.'
            : `Incorrecto. La respuesta correcta es: ${isExpression
                ? currentSentence.answer
                : currentSentence.answer || (currentSentence.form === 'comparative'
                    ? currentAdjective.comparative + " than"
                    : "the " + currentAdjective.superlative)}`
          }
        </Alert>
      )}

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        {isExpression && (
          <Typography variant="body2" color="text.secondary">
            Traducción: {currentSentence.translation}
          </Typography>
        )}

        {isExpression && result && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Explicación:</strong> {currentSentence.explanation}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default GameBoard;

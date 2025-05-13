import { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Stack
} from '@mui/material';
import { useGameContext } from '../context/GameContext';

const GameControls = () => {
  const {
    difficulty,
    setDifficulty,
    gameMode,
    setGameMode,
    startGame,
    endGame,
    isPlaying
  } = useGameContext();

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleModeChange = (event) => {
    setGameMode(event.target.value);
  };

  const handleStartGame = () => {
    startGame();
  };

  const handleEndGame = () => {
    endGame();
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Stack spacing={3} direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="center">
        <FormControl sx={{ minWidth: 200 }} disabled={isPlaying}>
          <InputLabel id="difficulty-select-label">Nivel de Dificultad</InputLabel>
          <Select
            labelId="difficulty-select-label"
            id="difficulty-select"
            value={difficulty}
            label="Nivel de Dificultad"
            onChange={handleDifficultyChange}
          >
            <MenuItem value={1}>Nivel 1 - Principiante</MenuItem>
            <MenuItem value={2}>Nivel 2 - Intermedio</MenuItem>
            <MenuItem value={3}>Nivel 3 - Avanzado</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }} disabled={isPlaying}>
          <InputLabel id="mode-select-label">Modo de Juego</InputLabel>
          <Select
            labelId="mode-select-label"
            id="mode-select"
            value={gameMode}
            label="Modo de Juego"
            onChange={handleModeChange}
          >
            <MenuItem value="normal">Adjetivos</MenuItem>
            <MenuItem value="expressions">Expresiones</MenuItem>
            <MenuItem value="timed">Contrarreloj</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color={isPlaying ? "error" : "primary"}
          onClick={isPlaying ? handleEndGame : handleStartGame}
          sx={{ minWidth: 120 }}
        >
          {isPlaying ? "Terminar Juego" : "Comenzar Juego"}
        </Button>
      </Stack>

      {!isPlaying && (
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Selecciona un nivel de dificultad y un modo de juego, luego haz clic en "Comenzar Juego".
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default GameControls;

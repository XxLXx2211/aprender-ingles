import { useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import useSound from 'use-sound';

// Componente para reproducir audio
const AudioPlayer = ({ word, type = 'word' }) => {
  // En una aplicación real, aquí cargaríamos los archivos de audio reales
  // Para este ejemplo, usaremos la API de Text-to-Speech del navegador
  
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Función para reproducir audio usando la API de Text-to-Speech
  const playAudio = () => {
    if ('speechSynthesis' in window) {
      setIsPlaying(true);
      
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      
      // Ajustar la velocidad según el tipo
      if (type === 'sentence') {
        utterance.rate = 0.8; // Más lento para oraciones
      } else {
        utterance.rate = 1.0; // Normal para palabras
      }
      
      utterance.onend = () => {
        setIsPlaying(false);
      };
      
      window.speechSynthesis.speak(utterance);
    }
  };
  
  // Detener la síntesis de voz cuando el componente se desmonte
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);
  
  return (
    <Tooltip title="Escuchar pronunciación">
      <IconButton 
        onClick={playAudio} 
        disabled={isPlaying}
        color="primary"
        aria-label="escuchar pronunciación"
      >
        <VolumeUpIcon />
      </IconButton>
    </Tooltip>
  );
};

export default AudioPlayer;

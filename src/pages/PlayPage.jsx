import { Container, Box, Typography } from '@mui/material';
import GameControls from '../components/GameControls';
import GameBoard from '../components/GameBoard';

const PlayPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Juego de Adjetivos Comparativos y Superlativos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Completa las oraciones con la forma correcta de los adjetivos
        </Typography>
      </Box>
      
      <GameControls />
      <GameBoard />
    </Container>
  );
};

export default PlayPage;

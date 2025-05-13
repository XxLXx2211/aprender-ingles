import { Container, Box, Typography } from '@mui/material';
import StatsDisplay from '../components/StatsDisplay';

const StatsPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Estadísticas de Juego
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Revisa tu progreso y rendimiento
        </Typography>
      </Box>
      
      <StatsDisplay />
    </Container>
  );
};

export default StatsPage;

import { 
  Box, 
  Paper, 
  Typography, 
  Grid, 
  Divider,
  Card,
  CardContent,
  LinearProgress
} from '@mui/material';
import { useGameContext } from '../context/GameContext';

const StatsDisplay = () => {
  const { stats } = useGameContext();
  
  // Calcular porcentaje de aciertos
  const correctPercentage = stats.totalPlayed > 0 
    ? Math.round((stats.correctAnswers / stats.totalPlayed) * 100) 
    : 0;
  
  // Formatear la fecha de la última partida
  const formatLastPlayed = () => {
    if (!stats.lastPlayed) return 'Nunca';
    
    const date = new Date(stats.lastPlayed);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom align="center">
        Tus Estadísticas
      </Typography>
      
      <Divider sx={{ my: 2 }} />
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resumen
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Respuestas correctas
                </Typography>
                <Typography variant="h4" color="success.main">
                  {stats.correctAnswers}
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Respuestas incorrectas
                </Typography>
                <Typography variant="h4" color="error.main">
                  {stats.incorrectAnswers}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total de preguntas respondidas
                </Typography>
                <Typography variant="h4">
                  {stats.totalPlayed}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Rendimiento
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Porcentaje de aciertos
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={correctPercentage} 
                      color={correctPercentage > 70 ? "success" : correctPercentage > 40 ? "warning" : "error"}
                      sx={{ height: 10, borderRadius: 5 }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {correctPercentage}%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Mejor racha
                </Typography>
                <Typography variant="h4" color="primary.main">
                  {stats.bestStreak}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Última vez jugado
                </Typography>
                <Typography variant="body1">
                  {formatLastPlayed()}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StatsDisplay;

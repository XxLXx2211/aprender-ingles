import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          ¡Aprende Adjetivos en Inglés!
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Mejora tu inglés aprendiendo adjetivos comparativos y superlativos de forma divertida
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/play')}
          sx={{ mt: 2 }}
        >
          ¡Comenzar a Jugar!
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Adjetivos Comparativos
              </Typography>
              <Typography variant="body1" paragraph>
                Aprende a comparar objetos, personas y situaciones usando adjetivos comparativos.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ejemplos: taller, bigger, more beautiful
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/rules')}>
                Ver Reglas
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Expresiones Comunes
              </Typography>
              <Typography variant="body1" paragraph>
                Aprende expresiones idiomáticas, verbos frasales y colocaciones comunes en inglés.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ejemplos: It's raining cats and dogs, look after, make a decision
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/play')}>
                Practicar
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Modos de Juego
              </Typography>
              <Typography variant="body1" paragraph>
                Practica con diferentes modos: adjetivos, expresiones y contrarreloj.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sigue tus estadísticas y mejora tu racha de respuestas correctas.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/play')}>
                Jugar Ahora
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Paper elevation={0} sx={{ mt: 6, p: 4, bgcolor: 'background.paper' }}>
        <Typography variant="h5" gutterBottom>
          ¿Por qué aprender adjetivos y expresiones en inglés?
        </Typography>
        <Typography variant="body1" paragraph>
          Los adjetivos comparativos y superlativos son fundamentales para expresar diferencias y destacar cualidades en inglés.
          Las expresiones idiomáticas y verbos frasales son esenciales para sonar natural y entender el inglés cotidiano.
        </Typography>
        <Typography variant="body1">
          Este juego te ayudará a practicar tanto adjetivos (cortos, largos e irregulares) como expresiones comunes,
          con audio de pronunciación, explicaciones claras y seguimiento de tu progreso.
        </Typography>
      </Paper>
    </Container>
  );
};

export default HomePage;

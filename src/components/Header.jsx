import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGameContext } from '../context/GameContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { endGame, isPlaying } = useGameContext();

  const handleNavigation = (path) => {
    if (isPlaying) {
      endGame();
    }
    navigate(path);
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Juego de Adjetivos en Inglés
        </Typography>
        <Box>
          <Button 
            color="inherit" 
            onClick={() => handleNavigation('/')}
            sx={{ fontWeight: location.pathname === '/' ? 'bold' : 'normal' }}
          >
            Inicio
          </Button>
          <Button 
            color="inherit" 
            onClick={() => handleNavigation('/play')}
            sx={{ fontWeight: location.pathname === '/play' ? 'bold' : 'normal' }}
          >
            Jugar
          </Button>
          <Button 
            color="inherit" 
            onClick={() => handleNavigation('/stats')}
            sx={{ fontWeight: location.pathname === '/stats' ? 'bold' : 'normal' }}
          >
            Estadísticas
          </Button>
          <Button 
            color="inherit" 
            onClick={() => handleNavigation('/rules')}
            sx={{ fontWeight: location.pathname === '/rules' ? 'bold' : 'normal' }}
          >
            Reglas
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

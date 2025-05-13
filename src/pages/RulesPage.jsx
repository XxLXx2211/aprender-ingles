import {
  Container,
  Box,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { adjectiveCategories, expressionCategories } from '../data/categories';
import { useState } from 'react';

const RulesPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reglas y Ejemplos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Aprende adjetivos y expresiones comunes en inglés
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Adjetivos" />
          <Tab label="Expresiones" />
        </Tabs>
      </Box>

      {tabValue === 0 && (
        <>
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Introducción
            </Typography>
            <Typography variant="body1" paragraph>
              En inglés, los adjetivos tienen tres formas: la forma base (positive), la forma comparativa (comparative) y la forma superlativa (superlative).
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Forma base:</strong> Se usa para describir una cualidad (ejemplo: tall, big, beautiful).
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Forma comparativa:</strong> Se usa para comparar dos cosas (ejemplo: taller, bigger, more beautiful).
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Forma superlativa:</strong> Se usa para expresar el grado máximo de una cualidad (ejemplo: tallest, biggest, most beautiful).
            </Typography>
          </Paper>

          {adjectiveCategories.map((category) => (
        <Accordion key={category.id} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${category.id}-content`}
            id={`panel-${category.id}-header`}
          >
            <Typography variant="h6">{category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              {category.description}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Reglas:
            </Typography>
            <List>
              {category.rules.map((rule, index) => (
                <ListItem key={index}>
                  <ListItemText primary={rule} />
                </ListItem>
              ))}
            </List>

            {category.id === 'short' && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Ejemplos:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Regular:</Typography>
                    <Typography variant="body1">tall → taller → tallest</Typography>
                    <Typography variant="body1">small → smaller → smallest</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Duplicación de consonante:</Typography>
                    <Typography variant="body1">big → bigger → biggest</Typography>
                    <Typography variant="body1">hot → hotter → hottest</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Terminados en e:</Typography>
                    <Typography variant="body1">nice → nicer → nicest</Typography>
                    <Typography variant="body1">large → larger → largest</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Terminados en y:</Typography>
                    <Typography variant="body1">happy → happier → happiest</Typography>
                    <Typography variant="body1">easy → easier → easiest</Typography>
                  </Box>
                </Box>
              </Box>
            )}

            {category.id === 'long' && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Ejemplos:
                </Typography>
                <Typography variant="body1">beautiful → more beautiful → most beautiful</Typography>
                <Typography variant="body1">interesting → more interesting → most interesting</Typography>
                <Typography variant="body1">expensive → more expensive → most expensive</Typography>
              </Box>
            )}

            {category.id === 'irregular' && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Ejemplos:
                </Typography>
                <Typography variant="body1">good → better → best</Typography>
                <Typography variant="body1">bad → worse → worst</Typography>
                <Typography variant="body1">far → farther/further → farthest/furthest</Typography>
                <Typography variant="body1">little → less → least</Typography>
                <Typography variant="body1">many/much → more → most</Typography>
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      ))}

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Uso en Oraciones
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle1" gutterBottom>
          Comparativos:
        </Typography>
        <Typography variant="body1" paragraph>
          Estructura: Subject + verb + comparative adjective + than + object
        </Typography>
        <Typography variant="body1" paragraph>
          Ejemplos:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="She is taller than her brother."
              secondary="Ella es más alta que su hermano."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="This book is more interesting than that one."
              secondary="Este libro es más interesante que ese."
            />
          </ListItem>
        </List>

        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
          Superlativos:
        </Typography>
        <Typography variant="body1" paragraph>
          Estructura: Subject + verb + the + superlative adjective + noun/phrase
        </Typography>
        <Typography variant="body1" paragraph>
          Ejemplos:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="He is the tallest student in the class."
              secondary="Él es el estudiante más alto de la clase."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="This is the most beautiful painting I have ever seen."
              secondary="Esta es la pintura más hermosa que he visto jamás."
            />
          </ListItem>
        </List>
      </Paper>
        </>
      )}

      {tabValue === 1 && (
        <>
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Expresiones Comunes en Inglés
            </Typography>
            <Typography variant="body1" paragraph>
              Las expresiones comunes son fundamentales para hablar inglés de forma natural y fluida. Incluyen expresiones idiomáticas, verbos frasales, colocaciones y frases cotidianas.
            </Typography>
          </Paper>

          {expressionCategories.map((category) => (
            <Accordion key={category.id} sx={{ mb: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-expr-${category.id}-content`}
                id={`panel-expr-${category.id}-header`}
              >
                <Typography variant="h6">{category.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" paragraph>
                  {category.description}
                </Typography>

                {category.id === 'idioms' && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ejemplos:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="It's raining cats and dogs"
                          secondary="Está lloviendo a cántaros (literalmente: está lloviendo gatos y perros)"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="To let the cat out of the bag"
                          secondary="Revelar un secreto (literalmente: dejar salir al gato de la bolsa)"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="A piece of cake"
                          secondary="Algo muy fácil de hacer (literalmente: un trozo de pastel)"
                        />
                      </ListItem>
                    </List>
                  </Box>
                )}

                {category.id === 'phrasal' && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ejemplos:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Look after"
                          secondary="Cuidar de alguien o algo"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Give up"
                          secondary="Rendirse o dejar de hacer algo"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Figure out"
                          secondary="Resolver o entender algo"
                        />
                      </ListItem>
                    </List>
                  </Box>
                )}

                {category.id === 'collocations' && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ejemplos:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Make a decision"
                          secondary="Tomar una decisión"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Pay attention"
                          secondary="Prestar atención"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Take a look"
                          secondary="Echar un vistazo"
                        />
                      </ListItem>
                    </List>
                  </Box>
                )}

                {category.id === 'everyday' && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ejemplos:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Nice to meet you"
                          secondary="Encantado de conocerte"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="How's it going?"
                          secondary="¿Cómo va todo?"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Take care"
                          secondary="Cuídate"
                        />
                      </ListItem>
                    </List>
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </>
      )}
    </Container>
  );
};

export default RulesPage;

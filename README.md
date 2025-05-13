# Juego de Adjetivos en Inglés

Una aplicación web interactiva para aprender adjetivos comparativos y superlativos en inglés de forma divertida y efectiva.

## Características

- **Diferentes modos de juego**: Normal, Comparaciones y Contrarreloj
- **Niveles de dificultad**: Principiante, Intermedio y Avanzado
- **Pronunciación de audio**: Escucha la pronunciación correcta de cada adjetivo y oración
- **Seguimiento de estadísticas**: Monitorea tu progreso y mejora con el tiempo
- **Interfaz en español**: Instrucciones y navegación en español, contenido de aprendizaje en inglés
- **Diseño responsivo**: Funciona en dispositivos móviles y de escritorio

## Tipos de Adjetivos Incluidos

1. **Adjetivos comparativos cortos**: tall → taller, big → bigger, etc.
2. **Adjetivos comparativos largos**: beautiful → more beautiful, etc.
3. **Adjetivos irregulares**: good → better → best, etc.
4. **Reglas especiales**: Duplicación de consonantes, cambio de 'y' por 'i', etc.

## Tecnologías Utilizadas

- React con Vite
- Material UI para la interfaz de usuario
- React Router para la navegación
- Context API para el estado global
- Web Speech API para la pronunciación

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/juego-para-aprender-ingles.git
   cd juego-para-aprender-ingles
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`

## Estructura del Proyecto

```
src/
├── assets/         # Recursos estáticos (imágenes, audio)
├── components/     # Componentes reutilizables
├── context/        # Contexto global de la aplicación
├── data/           # Datos de adjetivos y oraciones
├── pages/          # Páginas principales
└── utils/          # Funciones de utilidad
```

## Cómo Jugar

1. Selecciona un nivel de dificultad y un modo de juego
2. Haz clic en "Comenzar Juego"
3. Completa la oración con la forma correcta del adjetivo
4. Recibe retroalimentación inmediata sobre tu respuesta
5. Sigue jugando para mejorar tus habilidades

## Personalización

Puedes personalizar el juego añadiendo más adjetivos y oraciones en los archivos:
- `src/data/adjectives.js`
- `src/data/sentences.js`

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerencias o mejoras.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
# aprender-ingles

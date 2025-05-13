# Juego para Aprender Inglés

Una aplicación web interactiva para aprender adjetivos comparativos y superlativos en inglés de forma divertida y efectiva.

## Demo en vivo

Puedes probar la aplicación en: [https://aprender-ingles-vercel.app](https://aprender-ingles-vercel.app)

## Características

- **Diferentes modos de juego**: Adjetivos, Expresiones y Contrarreloj
- **Niveles de dificultad**: Principiante, Intermedio y Avanzado
- **Pronunciación de audio**: Escucha la pronunciación correcta de cada adjetivo y oración
- **Seguimiento de estadísticas**: Monitorea tu progreso y mejora con el tiempo
- **Interfaz en español**: Instrucciones y navegación en español, contenido de aprendizaje en inglés
- **Diseño responsivo**: Funciona en dispositivos móviles y de escritorio
- **Base de datos extensa**: Más de 2000 adjetivos y expresiones comunes

## Tipos de Ejercicios Incluidos

1. **Adjetivos comparativos**: tall → taller than, big → bigger than, etc.
2. **Adjetivos superlativos**: tall → the tallest, big → the biggest, etc.
3. **Expresiones comunes**: Frases y expresiones idiomáticas de uso cotidiano
4. **Modo contrarreloj**: Practica contra el tiempo para mejorar tu velocidad

## Tecnologías Utilizadas

- React 18 con Vite
- Material UI para la interfaz de usuario
- React Router para la navegación
- Context API para el estado global
- Web Speech API para la pronunciación

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/XxLXx2211/aprender-ingles.git
   cd aprender-ingles
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
├── data/           # Datos de adjetivos y expresiones
├── pages/          # Páginas principales
└── utils/          # Funciones de utilidad y generadores de oraciones
```

## Cómo Jugar

1. Selecciona un nivel de dificultad y un modo de juego
2. Haz clic en "Comenzar Juego"
3. Completa la oración con la forma correcta del adjetivo o la expresión
4. Recibe retroalimentación inmediata sobre tu respuesta
5. Sigue jugando para mejorar tus habilidades

## Despliegue

Este proyecto está configurado para ser desplegado fácilmente en Vercel:

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Vite
3. No se requiere configuración adicional

## Personalización

Puedes personalizar el juego añadiendo más adjetivos y expresiones en los archivos:
- `src/data/adjectivesLargeData.js`
- `src/data/expressionsLargeData.js`
- `src/data/commonExpressionsData.js`

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerencias o mejoras.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

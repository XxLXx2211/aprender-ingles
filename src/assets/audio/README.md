# Archivos de Audio para el Juego de Adjetivos en Inglés

Este directorio debe contener los archivos de audio para la pronunciación de los adjetivos y oraciones en el juego.

## Estructura de Archivos

Para cada adjetivo, se recomienda tener los siguientes archivos:

1. `[adjetivo].mp3` - Pronunciación del adjetivo en su forma base
2. `[adjetivo]_comparative.mp3` - Pronunciación del adjetivo en forma comparativa
3. `[adjetivo]_superlative.mp3` - Pronunciación del adjetivo en forma superlativa

Por ejemplo:
- `tall.mp3`
- `tall_comparative.mp3` (taller)
- `tall_superlative.mp3` (tallest)

## Cómo Agregar Archivos de Audio

Puedes generar los archivos de audio utilizando servicios de text-to-speech como:

1. Google Text-to-Speech
2. Amazon Polly
3. Microsoft Azure Speech Service

O grabar los archivos con un hablante nativo de inglés para una mejor calidad.

## Nota Importante

En la versión actual del juego, se utiliza la API de Text-to-Speech del navegador para la pronunciación, por lo que estos archivos no son necesarios. Sin embargo, para una experiencia de usuario óptima, se recomienda agregar archivos de audio reales en el futuro.

Para implementar los archivos de audio, modifica el componente `AudioPlayer.jsx` para que utilice estos archivos en lugar de la API del navegador.

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Herramientas de pintura, dibujo y retoque fotográfico',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar el conocimiento y comprensión sobre las herramientas y funciones básicas de Adobe Photoshop, con énfasis en las herramientas de edición de imágenes, dibujo, texto, selección y transformaciones.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué herramienta en Photoshop se utiliza para suavizar los bordes de una imagen?',
          imagen: require('@/assets/actividad/1.svg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Herramienta Enfocar.', esCorrecta: false },
            { id: 'b', texto: 'Herramienta Dedo.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Herramienta Desenfocar.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Herramienta Subexponer.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes opciones permite aumentar el contraste entre los bordes de una imagen?',
          imagen: require('@/assets/actividad/2.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Herramienta Desenfocar.', esCorrecta: false },
            { id: 'b', texto: 'Herramienta Enfocar.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Herramienta Esponja.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Herramienta Mano.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Perfecto! Has seleccionado la respuesta correcta.',
          mensaje_incorrecto: 'Esa no es la respuesta correcta. ¡Ánimo!',
        },
        {
          id: 3,
          texto:
            '¿Qué herramienta de Photoshop simula el efecto de mezclar pintura fresca?',
          imagen: require('@/assets/actividad/3.svg'),
          opciones: [
            { id: 'a', texto: 'Herramienta Dedo.', esCorrecta: true },
            { id: 'b', texto: 'Herramienta Sobreexponer.', esCorrecta: false },
            { id: 'c', texto: 'Herramienta Enfocar.', esCorrecta: false },
            { id: 'd', texto: 'Herramienta Pluma.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Esa es la respuesta correcta.',
          mensaje_incorrecto: 'Respuesta incorrecta. ¡Inténtalo de nuevo!',
        },
        {
          id: 4,
          texto:
            'Para aclarar áreas específicas de una imagen, ¿cuál herramienta se debe utilizar?',
          imagen: require('@/assets/actividad/4.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Herramienta Dedo.', esCorrecta: false },
            { id: 'b', texto: 'Herramienta Esponja.', esCorrecta: false },
            { id: 'c', texto: 'Herramienta Sobreexponer.', esCorrecta: true },
            { id: 'd', texto: 'Herramienta Subexponer.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta se utiliza para oscurecer áreas específicas de una imagen?',
          imagen: require('@/assets/actividad/1.svg'),
          opciones: [
            { id: 'a', texto: 'Herramienta Subexponer.', esCorrecta: true },
            { id: 'b', texto: 'Herramienta Dedo.', esCorrecta: false },
            { id: 'c', texto: 'Herramienta Enfocar.', esCorrecta: false },
            { id: 'd', texto: 'Herramienta Mano.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
        {
          id: 6,
          texto: '¿Qué herramienta permite saturar o desaturar una imagen?',
          imagen: require('@/assets/actividad/2.svg'),
          opciones: [
            { id: 'a', texto: 'Herramienta Dedo.', esCorrecta: false },
            { id: 'b', texto: 'Herramienta Esponja.', esCorrecta: true },
            { id: 'c', texto: 'Herramienta Sobreexponer.', esCorrecta: false },
            { id: 'd', texto: 'Herramienta Subexponer.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
        {
          id: 7,
          texto:
            '¿Cuál herramienta de pluma dibuja trazados al igual que un lápiz?',
          imagen: require('@/assets/actividad/3.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Herramienta Añadir punto de ancla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Herramienta Eliminar punto de ancla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Herramienta Pluma de forma libre.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Herramienta Convertir punto de ancla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta selecciona todas las líneas y puntos de ancla de un trazado al hacer clic en el centro de este?',
          imagen: require('@/assets/actividad/4.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Herramienta Selección directa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Herramienta Selección de trazado.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Herramienta Pluma.', esCorrecta: false },
            { id: 'd', texto: 'Herramienta Mano.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
        {
          id: 9,
          texto:
            '¿Qué herramienta permite desplazarse por la ventana de trabajo para ver áreas ocultas de la imagen?',
          imagen: require('@/assets/actividad/1.svg'),
          opciones: [
            { id: 'a', texto: 'Herramienta Mano.', esCorrecta: true },
            { id: 'b', texto: 'Herramienta Zoom.', esCorrecta: false },
            { id: 'c', texto: 'Herramienta Rotar vista.', esCorrecta: false },
            { id: 'd', texto: 'Herramienta Esponja.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
        {
          id: 10,
          texto:
            '¿Cuál comando de transformación permite distorsionar un elemento arrastrando los manejadores de esquina?',
          imagen: require('@/assets/actividad/2.svg'),
          opciones: [
            { id: 'a', texto: 'Escalados.', esCorrecta: false },
            { id: 'b', texto: 'Rotar.', esCorrecta: false },
            { id: 'c', texto: 'Distorsionar.', esCorrecta: true },
            { id: 'd', texto: 'Sesgar.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
      ],
      mensaje_final_aprobado:
        '¡Has completado el cuestionario exitosamente! Felicidades.',
      mensaje_final_reprobado:
        'No has alcanzado la puntuación mínima para aprobar. Te animamos a intentarlo de nuevo.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

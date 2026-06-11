<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Aplicación de conceptos en sanidad y bienestar bovino.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Fortalecer la comprensión de los conceptos fundamentales del manejo sanitario en bovinos mediante la identificación, análisis y aplicación de conocimientos relacionados con evaluación clínica, tratamiento, monitoreo y cumplimiento de la normativa vigente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿A qué tipo de animales pertenecen los bovinos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Animales carnívoros domésticos de granja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Animales rumiantes domésticos de producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Animales silvestres adaptados a cautiverio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Animales omnívoros utilizados en laboratorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 2,
          texto: '¿Cuál es la función principal del rumen?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Absorber nutrientes simples del alimento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar digestión enzimática completa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejecutar fermentación microbiana inicial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Almacenar agua para uso metabólico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 3,
          texto: '¿Qué sistema de producción combina carne y leche?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción intensiva de engorde continuo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema exclusivo de producción lechera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema de producción extensiva natural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema de doble propósito productivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 4,
          texto: '¿Qué caracteriza a un bovino gregario?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vive de manera aislada y territorial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se alimenta solo durante la noche.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prefiere vivir e interactuar en grupo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Presenta comportamiento agresivo constante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 5,
          texto: '¿Qué ocurre al invadir la zona de fuga?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El animal permanece inmóvil sin reacción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El animal se desplaza para alejarse.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El animal se acuesta inmediatamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El animal inicia proceso de alimentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 6,
          texto: '¿Qué factor ambiental puede generar estrés?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acceso constante a agua limpia disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasturas de alta calidad nutricional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Temperatura elevada y ruido excesivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Manejo tranquilo con personal capacitado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 7,
          texto: '¿Cuál es una conducta normal en bovinos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aislamiento constante del grupo social.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminución del consumo alimenticio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vocalización excesiva sin estímulo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rumiación constante durante el reposo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 8,
          texto: '¿Qué indica un comportamiento anormal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consumo regular de agua y alimento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interacción social estable en el grupo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Movilidad normal sin dificultad evidente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aislamiento del grupo de manera persistente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 9,
          texto: '¿Cuál es el primer paso en la evaluación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicación inmediata de tratamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inspección inicial del animal a distancia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registro detallado del diagnóstico clínico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Separación del animal del grupo general.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 10,
          texto: '¿Qué signo vital indica posible fiebre?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Temperatura inferior a treinta grados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Frecuencia respiratoria estable normal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Temperatura superior al rango normal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Movimientos ruminales constantes activos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 11,
          texto: '¿Qué indica mucosas pálidas en bovinos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estado normal de salud fisiológica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Buena oxigenación del organismo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Adecuado equilibrio hídrico corporal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Posible anemia o problema circulatorio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 12,
          texto: '¿Qué lesión afecta la movilidad del animal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inflamación leve sin dolor evidente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Herida superficial sin complicaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cojera con dificultad para desplazarse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Lesión dérmica sin afectación locomotora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 13,
          texto: '¿Cuál es un signo clínico de enfermedad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento en la actividad diaria normal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consumo adecuado de alimento diario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Interacción social estable en el grupo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución del apetito en el animal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 14,
          texto: '¿Cuándo se debe aplicar tratamiento?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando no existen cambios conductuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando hay signos clínicos anormales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuando el animal mantiene producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando el comportamiento es estable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 15,
          texto: '¿Qué categoría requiere atención inmediata?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Animal sano sin signos clínicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Animal sospechoso con signos leves.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Animal en estado crítico severo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Animal en monitoreo sin cambios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 16,
          texto: '¿Qué incluye la evaluación clínica?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la observación externa del animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente medición de temperatura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro de producción diaria exclusiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Integración de signos vitales y conducta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 17,
          texto: '¿Cuál es un objetivo de primeros auxilios?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la producción de leche inmediata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estabilizar el estado general del animal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir completamente el tratamiento final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el registro de información clínica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 18,
          texto: '¿Qué vía se usa para vacunas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vía oral mediante el sistema digestivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vía intramuscular en tejido profundo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vía subcutánea debajo de la piel.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Vía tópica sobre la superficie externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 19,
          texto: '¿Qué indica una evolución favorable?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Persistencia de fiebre elevada continua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aislamiento constante del grupo social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aparición de nuevos signos clínicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recuperación del apetito y actividad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 20,
          texto: '¿Cuál es el objetivo de la trazabilidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la cantidad de animales en producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el uso de registros sanitarios básicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar historial sanitario de cada animal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar el monitoreo en sistemas productivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

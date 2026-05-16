<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Evaluación del estado del animal
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 La evaluación del bovino es clave para detectar problemas de salud a tiempo, tomar decisiones adecuadas y prevenir enfermedades, mediante la observación continua y el análisis de signos vitales y clínicos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img35.png", alt="").m-auto
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Inspección inicial del animal
    p.mb-5 La inspección inicial es la observación del animal a distancia, sin causarle estrés, para identificar de forma rápida signos visibles de enfermedad o anormalidad. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-5(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img36.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p El operario debe enfocarse en los siguientes elementos visibles:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Postura corporal]: posición normal, encorvada o en decúbito. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Nivel de actividad]: alerta, activo o decaído. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Condición corporal]: estado nutricional general. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aspecto del pelaje]: brillo, limpieza o presencia de suciedad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Secreciones visibles]: nasales, oculares o saliva excesiva. 
    p.mb-5 En la siguiente tabla se diferencia rápidamente un animal sano de uno con posible alteración:
    .row.justify-content-center.mb-0
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Parámetros clave en la inspección inicial del bovino
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Parámetro
                th.ajuste-border-tabla.texto-left Condición normal
                th.ajuste-border-tabla.texto-left Signo de alerta
                th.texto-left Interpretación
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Postura]
                td.ajuste-border-tabla.texto-left Erguida, estable
                td.ajuste-border-tabla.texto-left Encorvada, caída o dificultad para mantenerse
                td.texto-left Puede indicar dolor, debilidad o enfermedad
              tr
                td.ajuste-border-tabla.texto-left #[b Actividad]
                td.ajuste-border-tabla.texto-left Activo, alerta
                td.ajuste-border-tabla.texto-left Letárgico, inmóvil o poco reactivo
                td.texto-left Posible enfermedad o estrés
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Pelaje]
                td.ajuste-border-tabla.texto-left Brillante, limpio
                td.ajuste-border-tabla.texto-left Opaco, erizado, sucio o sin brillo
                td.texto-left Indica mala salud o deficiencias nutricionales
              tr
                td.ajuste-border-tabla.texto-left #[b Secreciones]
                td.ajuste-border-tabla.texto-left Ausentes
                td.ajuste-border-tabla.texto-left Presencia nasal, ocular o anormal
                td.texto-left Posible infección o enfermedad
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Condición corporal]
                td.ajuste-border-tabla.texto-left Condición corporal
                td.ajuste-border-tabla.texto-left Delgadez, debilidad o pérdida de masa
                td.texto-left Problemas alimenticios o enfermedades
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Observación del comportamiento
    p.mb-5 La observación del comportamiento es una herramienta clave para detectar cambios tempranos asociados a enfermedad, dolor o estrés. En este punto se presentarán los indicadores conductuales y la evaluación del comportamiento bovino.
    .row.justify-content-center.mb-0
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img37.jpg', alt="" ).m-auto
            h4.text-center Indicadores conductuales para evaluar
            .box___card_sinbordes_p
              p Se debe observar cómo el animal se comporta dentro del grupo y frente a estímulos externos:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Interacción social]: integración o aislamiento del grupo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Consumo de alimento y agua]: normal, reducido o ausente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Respuesta al manejo humano]: tranquila, nerviosa o agresiva. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Movilidad]: desplazamiento normal o presencia de cojera. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Estado de alerta]: atento o apático. 
      .col-xl-6.col-md-9(data-aos="fade-left")
        .caja-3.ajuste-caja-3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img38.jpg', alt="" ).m-auto
            h4.text-center Evaluación del comportamiento en bovinos
            .box___card_sinbordes_p
              p La identificación de posibles problemas sanitarios, a partir del comportamiento, está dada por:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Socialización]: en condiciones normales, el bovino permanece en grupo; una posible alteración se evidencia cuando el animal se aísla.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alimentación]: el consumo normal de alimento indica buen estado; una disminución o ausencia puede reflejar problemas sanitarios.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Movimiento]: el desplazamiento fluido es adecuado; la presencia de cojera o rigidez indica una posible alteración.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Reacción humana]: un comportamiento tranquilo es normal; la respuesta nerviosa o agresiva puede ser señal de estrés o enfermedad.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Estado general]: un animal alerta refleja buena condición; la apatía o depresión sugiere un problema de salud.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Signos vitales y externos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La evaluación de signos vitales proporciona información objetiva sobre el estado fisiológico del animal y permite confirmar sospechas generadas en la inspección inicial.
        p.mb-0 Dada su importancia, se invita a reproducir el siguiente video sobre signos vitales y externos en bovinos, donde se explican parámetros fisiológicos y evaluación clínica para detectar tempranamente alteraciones en la salud animal.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img39.png", alt="").m-auto
    figure(data-aos="zoom-in")
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Evaluación de signos vitales y externos en bovinos.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Identificación de lesiones
    p.mb-5 La detección de lesiones es esencial para prevenir infecciones, dolor y disminución de la productividad. Estas pueden originarse por manejo inadecuado, infraestructura deficiente o enfermedades. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-5(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img40.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p Los tipos de lesiones para identificar durante la revisión física son:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Heridas abiertas o cortaduras. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Inflamaciones o abscesos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cojeras o problemas locomotores. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Lesiones dérmicas (parásitos, infecciones). 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Alteraciones en pezuñas. 
    p.mb-5 La siguiente tabla permite al operario identificar lesiones, comprender su origen y actuar de manera oportuna, reduciendo riesgos sanitarios y mejorando el bienestar animal.
    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span Clasificación de lesiones en bovinos y su impacto sanitario
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Tipo de lesión
                th.ajuste-border-tabla.texto-left Descripción
                th.ajuste-border-tabla.texto-left Impacto en el animal
                th.ajuste-border-tabla.texto-left Posibles causas
                th.texto-left Acción recomendada
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Heridas]
                td.ajuste-border-tabla.texto-left Cortes, laceraciones o perforaciones
                td.ajuste-border-tabla.texto-left Riesgo de infección y pérdida de tejido
                td.ajuste-border-tabla.texto-left Golpes, objetos cortantes, peleas
                td.texto-left Limpieza, desinfección y control sanitario
              tr
                td.ajuste-border-tabla.texto-left #[b Inflamaciones]
                td.ajuste-border-tabla.texto-left Aumento de volumen en tejidos
                td.ajuste-border-tabla.texto-left Dolor, incomodidad y limitación funcional
                td.ajuste-border-tabla.texto-left Infecciones, golpes, procesos internos
                td.texto-left Evaluación y tratamiento antiinflamatorio
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Cojera]
                td.ajuste-border-tabla.texto-left Dificultad o alteración al caminar
                td.ajuste-border-tabla.texto-left Disminución productiva y movilidad limitada
                td.ajuste-border-tabla.texto-left Lesiones, problemas podales, infecciones
                td.texto-left Revisión de extremidades y manejo correctivo
              tr
                td.ajuste-border-tabla.texto-left #[b Lesiones dérmicas]
                td.ajuste-border-tabla.texto-left Alteraciones en la piel (costras, alopecia)
                td.ajuste-border-tabla.texto-left Irritación, incomodidad y riesgo sanitario
                td.ajuste-border-tabla.texto-left Parásitos, infecciones, mala higiene
                td.texto-left Tratamiento tópico y control de parásitos
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Problemas podales]
                td.ajuste-border-tabla.texto-left Daños en pezuñas (grietas, infecciones)
                td.ajuste-border-tabla.texto-left Dolor y dificultad para desplazarse
                td.ajuste-border-tabla.texto-left Humedad, mala higiene, desgaste
                td.texto-left Limpieza, recorte y tratamiento específico
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Identificación de enfermedades
    p.mb-5 La identificación de enfermedades en bovinos se realiza mediante la integración de la inspección inicial, el comportamiento, los signos vitales y la presencia de lesiones, lo que permite tomar decisiones oportunas sobre tratamiento, aislamiento o reporte sanitario. Entre los principales signos de alerta se encuentran fiebre, pérdida de apetito, debilidad, alteraciones digestivas, secreciones anormales y disminución en la producción.
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img41.png' ).m-auto
            h4.mb-3.estilo-text Fiebre
            p.mb-5.text-center Está asociada a infecciones bacterianas o virales; indica respuesta del organismo ante procesos infecciosos.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img42.png' ).m-auto
            h4.mb-3.estilo-text Diarrea
            p.mb-5.text-center Está relacionada con trastornos digestivos o parasitarios; puede causar deshidratación y pérdida de nutrientes.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img43.png' ).m-auto
            h4.mb-3.estilo-text Tos
            p.mb-5.text-center Está vinculada a enfermedades respiratorias; sugiere irritación o infección del sistema respiratorio.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img44.png' ).m-auto
            h4.mb-3.estilo-text Cojera
            p.mb-5.text-center Está asociada a problemas locomotores o lesiones; indica dolor, infecciones o daño en las extremidades.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img45.png' ).m-auto
            h4.mb-3.estilo-text Secreciones
            p.mb-5.text-center Están relacionadas con procesos infecciosos oculares o nasales; indican inflamación o infección activa.
        p.mb-5 Esta herramienta permite al operario realizar una evaluación preliminar rápida, facilitando la toma de decisiones sobre aislamiento, monitoreo o necesidad de tratamiento.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

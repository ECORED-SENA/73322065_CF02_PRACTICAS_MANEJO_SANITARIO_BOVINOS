<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Gestión, seguimiento y control
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 La gestión, seguimiento y control en el manejo sanitario bovino abarcan la organización, registro y evaluación de los procesos para asegurar su correcta ejecución, trazabilidad y cumplimiento normativo. En las Buenas Prácticas Ganaderas, son clave para garantizar la sanidad, la inocuidad y el bienestar animal, facilitando decisiones basadas en información confiable.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img77.png", alt="").m-auto
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Manejo de información y trazabilidad
    p El manejo de la información y la trazabilidad permiten llevar un control detallado del historial sanitario de cada animal, facilitando el seguimiento desde su identificación hasta los tratamientos y eventos sanitarios registrados a lo largo de su vida productiva.
    p.mb-5 En el siguiente pódcast se analizará la importancia de la trazabilidad en el manejo sanitario bovino, destacando sus elementos y beneficios para el control, seguimiento, bioseguridad y toma de decisiones en producción.
    .row.align-items-center.m-0.mb-0
      .col-xl
        .row.align-items-center.justify-content-center.caja-9(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img78.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Manejo de información y trazabilidad"
              :audio="require('@/assets/curso/podcast/podcast.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img79.png" ).m-auto
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Registro de información
    p.mb-5 El registro de información constituye la base del manejo sanitario, ya que permite documentar de manera organizada todas las actividades realizadas en el hato. Las características de un registro, los registros requeridos en buenas prácticas ganaderas y los tipos de registros sanitarios, son estos:
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img80.jpg', alt="" ).m-auto
            h4.text-center Características de un registro adecuado
            .ajuste-p-card
              p Los registros deben ser:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Claros y de fácil interpretación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Completos y actualizados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Organizados cronológicamente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Verificables. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Disponibles para seguimiento o auditoría. 
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img81.jpg', alt="" ).m-auto
            h4.text-center Registros requeridos en Buenas Prácticas Ganaderas
            .ajuste-p-card
              p En el contexto sanitario, se deben mantener al menos los siguientes registros:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Tratamientos aplicados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Enfermedades diagnosticadas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Programas de vacunación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mortalidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Actividades de manejo sanitario. 
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img82.jpg', alt="" ).m-auto
            h4.text-center Tipos de registros sanitarios en bovinos
            .ajuste-p-card
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tratamientos]: medicamento, dosis y fecha; registro diario.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Enfermedades]: diagnóstico y signos, según el evento.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Vacunación]: tipo, lote y fecha; registro programado.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Mortalidad]: causa y fecha; registro eventual.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Manejo sanitario]: actividades realizadas; registro diario.
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Reporte de novedades
    p.mb-5 El reporte de novedades consiste en la comunicación oportuna de eventos sanitarios relevantes, permitiendo una respuesta rápida y efectiva frente a situaciones que puedan afectar la salud del hato. Los eventos que deben ser reportados y su importancia son:
    .row.justify-content-center.mb-0
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-10.h-100.p-5
          h4 Eventos que deben ser reportados
          p El operario debe informar oportunamente:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Aparición de signos de enfermedad.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Brotes sanitarios.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Mortalidad inusual. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Reacciones adversas a tratamientos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Fallas en los procedimientos sanitarios.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .caja-11.h-100.p-5
          h4 Importancia del reporte oportuno
          p.mb-0 Facilita la intervención temprana, permite controlar la propagación de enfermedades, garantiza el cumplimiento normativo y mejora la toma de decisiones en el manejo sanitario.
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Resolución de contingencias
    p.mb-5 La resolución de contingencias implica la aplicación de acciones correctivas ante situaciones que afectan la sanidad animal o el funcionamiento del sistema productivo. En esta sección se abordarán las principales contingencias en sistemas bovinos y las acciones para el manejo de contingencias.
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img83.jpg', alt="" ).m-auto
            h4.text-center Principales contingencias en sistemas bovinos
            .ajuste-p-card
              p Se pueden presentar:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Enfermedades o brotes sanitarios.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fallas en bioseguridad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Problemas de alimentación o agua. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Eventos ambientales adversos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Errores en la aplicación de tratamientos. 
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img84.jpg', alt="" ).m-auto
            h4.text-center Acciones para el manejo de contingencias
            .ajuste-p-card
              p Ante estas situaciones, se deben aplicar medidas como:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aislamiento de animales afectados.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Activación de protocolos sanitarios.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Notificación a responsables.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Implementación de medidas correctivas.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Seguimiento continuo.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img85.jpg', alt="" ).m-auto
            h4.text-center Protocolo de respuesta sanitaria en situaciones críticas
            .ajuste-p-card
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Enfermedad]: se realiza el aislamiento del animal para controlar el foco y evitar contagios.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Brote]: se activa el protocolo sanitario para contener la propagación en el hato.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Mortalidad]: se efectúa el registro y la evaluación para identificar causas y prevenir nuevos casos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Falla sanitaria]: se aplican correcciones inmediatas para mejorar los procesos y evitar reincidencias.
    Separador
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.5 Control de procesos sanitarios
    p.mb-5 El control de procesos sanitarios consiste en verificar que todas las actividades se ejecuten conforme a los protocolos establecidos, las BPG y la normativa vigente. Los aspectos para verificar en el control sanitario y el cumplimiento de la normatividad son:
    .row.justify-content-center.mb-0
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-10.h-100.p-5
          h4 Aspectos para verificar en el control sanitario 
          p Se debe supervisar:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Correcta aplicación de tratamientos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cumplimiento de protocolos de bioseguridad.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Actualización de registros.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Disposición adecuada de residuos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Aplicación de criterios de bienestar animal.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .caja-11.h-100.p-5
          h4 Cumplimiento de normativa vigente
          p El control sanitario debe alinearse con:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Buenas Prácticas Ganaderas (BPG).
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Normativa del ICA.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Regulación sobre medicamentos veterinarios.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Normas de bioseguridad y manejo de residuos.

</template>

<script>
export default {
  name: 'Tema7',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Atención y manejo sanitario
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 El registro del diagnóstico inicial es fundamental para la trazabilidad y el control sanitario del hato, ya que permite documentar decisiones y dar seguimiento a la evolución del animal. Debe incluir información clara y oportuna como identificación, fecha, signos clínicos, diagnóstico presuntivo, tratamiento y responsable del registro.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img55.png", alt="").m-auto
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Primeros auxilios
    p.mb-5 Los primeros auxilios corresponden a la atención inmediata y provisional que se brinda al bovino ante una condición que compromete su salud, antes de instaurar un tratamiento definitivo o remitir a atención especializada. A continuación, se conocerán los propósitos principales y procedimientos básicos.
    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img56.jpg', alt="" ).m-auto
            h4.text-center Propósitos principales
            .box___card_sinbordes_p
              p Los primeros auxilios buscan:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Estabilizar las condiciones generales del animal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Controlar situaciones de emergencia de forma oportuna. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Disminuir el dolor y el malestar. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Prevenir complicaciones o agravamiento del cuadro clínico.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Facilitar la recuperación o la intervención posterior.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .caja-3.ajuste-caja-3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img57.jpg', alt="" ).m-auto
            h4.text-center Procedimientos básicos de primeros auxilios
            .box___card_sinbordes_p
              p Las acciones deben realizarse de forma rápida, segura y con criterios técnicos, evitando causar mayor daño al animal.
              p #[b Intervenciones iniciales más comunes]
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Control de hemorragias]: aplicar presión o vendajes para detener el sangrado.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Limpieza y desinfección]: eliminar suciedad y usar antisépticos para prevenir infecciones.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Inmovilización]: restringir el movimiento ante fracturas o lesiones.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aislamiento sanitario]: separar al animal para evitar contagios.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Rehidratación básica]: suministrar agua o soluciones orales.
    p Estas acciones permiten al operario actuar de manera inmediata ante emergencias, reduciendo el impacto de las lesiones y mejorando las condiciones del animal mientras recibe atención más especializada.
    p.mb-5 Para facilitar la comprensión del tema, a continuación, se presenta orientaciones de intervención inmediata en situaciones de emergencia.
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img58.png' ).m-auto
            h4.mb-3.estilo-text Herida abierta
            p.mb-5.text-center Limpieza y desinfección para prevenir infecciones y favorecer la cicatrización.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img59.png' ).m-auto
            h4.mb-3.estilo-text Hemorragia
            p.mb-5.text-center Presión directa o vendaje para detener el sangrado y evitar pérdida de sangre.   
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img60.png' ).m-auto
            h4.mb-3.estilo-text Cojera
            p.mb-5.text-center Reposo e inmovilización para evitar el agravamiento de la lesión.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img61.png' ).m-auto
            h4.mb-3.estilo-text Deshidratación
            p.mb-5.text-center Suministro de líquidos para restablecer el equilibrio hídrico.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img62.png' ).m-auto
            h4.mb-3.estilo-text Sospecha infecciosa
            p.mb-5.text-center Aislamiento del animal para controlar la propagación de la enfermedad.
        p.mb-0 Esto permite al operario actuar de forma rápida y técnica ante emergencias, priorizando acciones básicas que contribuyen a la recuperación del bovino y al control sanitario del hato.
        Separador
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Medición de signos vitales
        p.mb-5 La medición de signos vitales es esencial para evaluar el estado del animal y monitorear su evolución, permitiendo detectar oportunamente posibles complicaciones. Paso seguido, se expondrá la importancia, parámetros y recomendaciones.
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img63.jpg', alt="" ).m-auto
            h4.text-center Importancia en el manejo sanitario
            .ajuste-p-card
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Confirma el estado clínico del animal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Permite monitorear la respuesta al tratamiento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Facilita la toma de decisiones. 
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img64.jpg', alt="" ).m-auto
            h4.text-center Parámetros para evaluar y frecuencia
            .ajuste-p-card
              p Los signos deben medirse de forma periódica, especialmente en animales en tratamiento:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Temperatura corporal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Frecuencia cardíaca. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Frecuencia respiratoria. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Movimientos ruminales. 
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img65.jpg', alt="" ).m-auto
            h4.text-center Recomendaciones técnicas para la medición
            .ajuste-p-card
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Utilizar instrumentos limpios y desinfectados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar generar estrés durante la medición. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registrar los valores obtenidos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Comparar con valores de referencia. 
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Aplicación de tratamientos básicos
    p.mb-5 La aplicación de tratamientos básicos implica la administración controlada de medicamentos y procedimientos terapéuticos según el diagnóstico. Posteriormente, se abordarán los tipos de intervenciones, criterios técnicos y vías de administración.
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-7.h-100
          h4.mb-0.text-center Tipos de intervenciones sanitarias básicas
          .caja-8.p-4
            p Las más comunes en campo incluyen:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Administración de medicamentos (inyectables u orales).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aplicación de tratamientos tópicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de parásitos internos y externos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Suplementación nutricional.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manejo y curación de heridas.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-7.h-100
          h4.mb-0.text-center Criterios técnicos para la aplicación de tratamientos
          .caja-8.p-4
            p Para garantizar la efectividad y seguridad, se debe:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Calcular la dosis según el peso del animal.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Seleccionar la vía de administración adecuada. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar material estéril o desinfectado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Respetar tiempos de retiro (leche y carne). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registrar el tratamiento aplicado.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-7.h-100
          h4.mb-0.text-center Vías de administración de medicamentos en bovinos y su uso
          .caja-8.p-4
            p A continuación, se resumen las principales vías utilizadas en manejo sanitario:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Intramuscular]: aplicación en el músculo; uso frecuente en antibióticos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Subcutánea]: aplicación bajo la piel; común en vacunas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Oral]: administración por vía digestiva; utilizada en suplementos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tópica]: aplicación externa; indicada para el tratamiento de heridas.
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Aplicación de criterios de bienestar animal
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 El bienestar animal es esencial en las prácticas sanitarias, promoviendo un manejo respetuoso que minimice el dolor y el estrés. Garantizar buenas condiciones, manejo tranquilo, alimentación adecuada y supervisión constante favorece la recuperación y permite detectar oportunamente cualquier alteración.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img66.png", alt="").m-auto
    Separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.5 Cambios comportamentales post tratamiento
    p.mb-5 El seguimiento del comportamiento posterior al tratamiento permite evaluar la efectividad de la intervención sanitaria y determinar si el animal se encuentra en proceso de recuperación o presenta complicaciones. Para esto, las indicaciones de evolución favorable y de alerta o falla son:
    .row.justify-content-center.mb-0
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img67.jpg', alt="" ).m-auto
            h4.text-center Indicadores de evolución favorable
            .box___card_sinbordes_p
              p Después del tratamiento, el animal debería presentar:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Incremento en la actividad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Recuperación del apetito. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Integración al grupo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Disminución de signos clínicos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Comportamiento normal. 
      .col-xl-6.col-md-9(data-aos="fade-left")
        .caja-3.ajuste-caja-3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img68.jpg', alt="" ).m-auto
            h4.text-center Indicadores de alerta o falla en el tratamiento
            .box___card_sinbordes_p
              p Se deben identificar oportunamente signos que indiquen problemas:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Persistencia o aumento de la fiebre. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Falta de apetito. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aislamiento continuo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aparición de nuevos síntomas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Deterioro del estado general. 

</template>

<script>
export default {
  name: 'Tema5',
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

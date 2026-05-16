<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Determinación de tratamiento en bovinos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 La determinación del tratamiento es una etapa clave del manejo sanitario, ya que permite decidir cuándo intervenir y qué animales requieren atención prioritaria. Basada en una evaluación integral y realizada de forma oportuna y sistemática, contribuye a prevenir enfermedades, reducir pérdidas productivas y garantizar el bienestar animal.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img46.png", alt="").m-auto
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Criterios para determinar cuándo un bovino requiere tratamiento
    p La decisión de intervenir un bovino debe basarse en la identificación de signos clínicos, cambios de comportamiento y alteraciones fisiológicas, diferenciando entre condiciones normales y patológicas. Se justifica el tratamiento cuando hay alteraciones en signos vitales, disminución del consumo, decaimiento, lesiones, baja producción o presencia de secreciones anormales.
    p.mb-5 Seguidamente, se presenta información como guía práctica para la toma de decisiones en campo:
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img47.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Temperatura").ajuste-cajaAcordion
            p.mb-3 En condiciones normales se encuentra entre 38.0 y 39.3 °C; se requiere intervención cuando es mayor a 39.5 °C o menor a 38.0 °C.
          .row(titulo="Comportamiento").ajuste-cajaAcordion
            p.mb-3 Un animal activo y alerta es normal; la apatía o el aislamiento indican necesidad de intervención.
          .row(titulo="Consumo").ajuste-cajaAcordion
            p.mb-3 El consumo normal de alimento y agua es adecuado; su disminución o ausencia es un criterio de intervención.
          .row(titulo="Movilidad").ajuste-cajaAcordion
            p.mb-3 La movilidad sin alteraciones es esperada; la presencia de cojera o dificultad al desplazarse requiere atención.
          .row(titulo="Secreciones").ajuste-cajaAcordion
            p.mb-3 Normalmente están ausentes; su presencia o características anormales indican la necesidad de intervención.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Selección de animales para tratamiento
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Tras identificar bovinos con alteraciones, se seleccionan para un manejo seguro y organizado, mediante identificación, separación, clasificación por gravedad y evaluación, reduciendo el estrés y el riesgo de contagio.
        p.mb-0 La siguiente clasificación permite organizar la atención sanitaria según el estado del animal, facilitando la toma de decisiones oportunas y el uso eficiente de los recursos disponibles en campo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img48.png", alt="").m-auto
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-6.h-100
          h4.mb-0.text-center Sano
          p.mb-0.text-center Sin signos clínicos y con comportamiento normal; se recomienda monitoreo rutinario y control preventivo.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-6.h-100
          h4.mb-0.text-center Sospechoso
          p.mb-0.text-center Presenta signos leves o cambios conductuales; requiere observación continua y reevaluación clínica.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-6.h-100
          h4.mb-0.text-center Enfermo
          p.mb-0.text-center Evidencia signos clínicos claros y alteración del estado general; se debe aplicar tratamiento oportuno y seguimiento.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-6.h-100
          h4.mb-0.text-center Crítico
          p.mb-0.text-center Presenta compromiso severo y riesgo de vida; necesita atención inmediata o remisión especializada.
    p.mb-0 Esta herramienta permite al operario priorizar la intervención sanitaria, reducir riesgos y garantizar una atención adecuada según la condición de cada bovino.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Evaluación del estado clínico
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 La evaluación clínica es una valoración integral que permite confirmar el estado del bovino y definir el tratamiento adecuado, combinando signos vitales, condición corporal, hidratación, presencia de lesiones o secreciones, comportamiento y antecedentes recientes, para una toma de decisiones precisa. Los parámetros para la evaluación clínica integral del bovino.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img49.png", alt="").m-auto
    p.mb-5 En la siguiente tabla facilita se presenta información que facilita la interpretación de los hallazgos clínicos:
    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 6.
          span Parámetros para la evaluación clínica integral del bovino
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Parámetro
                th.ajuste-border-tabla.texto-left Evaluación
                th.texto-left Interpretación sanitaria
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Temperatura
                td.ajuste-border-tabla.texto-left Normal / elevada
                td.texto-left Posible infección
              tr
                td.ajuste-border-tabla.texto-left Hidratación
                td.ajuste-border-tabla.texto-left Adecuada / deficiente
                td.texto-left Estado general del animal
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Movilidad
                td.ajuste-border-tabla.texto-left Normal / alterada
                td.texto-left Dolor o lesión
              tr
                td.ajuste-border-tabla.texto-left Comportamiento
                td.ajuste-border-tabla.texto-left Normal / anormal
                td.texto-left Estrés o enfermedad
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Producción
                td.ajuste-border-tabla.texto-left Estable / disminuida
                td.texto-left Afectación productiva
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Priorización de atención
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 La priorización de atención permite organizar la intervención sanitaria ante múltiples animales afectados, optimizando recursos y tiempo. Se deben atender primero aquellos con dolor intenso, dificultad respiratoria, incapacidad para movilizarse, fiebre alta persistente o lesiones graves.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img50.png", alt="").m-auto
    p.mb-5 Acto seguido, se conocerá la clasificación que permite establecer el orden de atención según la gravedad del estado del animal, facilitando decisiones rápidas y oportunas.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img51.jpg', alt="" ).m-auto
            h4.text-center Alta
            .ajuste-p-card
              p.mb-0 Corresponde a animales en estado crítico; se requiere atención inmediata y posible remisión.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img52.jpg', alt="" ).m-auto
            h4.text-center Media
            .ajuste-p-card
              p.mb-0 Aplica a animales enfermos; se debe implementar tratamiento y seguimiento programado.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img53.jpg', alt="" ).m-auto
            h4.text-center Baja
            .ajuste-p-card
              p.mb-0 Incluye animales sospechosos o con signos leves; se recomienda observación continua y reevaluación.
    p.mb-0 Esta herramienta permite al operario actuar con criterio técnico, priorizando los casos más urgentes y garantizando una intervención adecuada según la condición del bovino.
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Registro de diagnóstico inicial
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 El registro del diagnóstico inicial es fundamental para la trazabilidad y el control sanitario del hato, ya que permite documentar decisiones y dar seguimiento a la evolución del animal. Debe incluir información clara y oportuna como identificación, fecha, signos clínicos, diagnóstico presuntivo, tratamiento y responsable del registro.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img54.png", alt="").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El manejo sanitario en bovinos constituye un componente esencial en los sistemas de producción pecuaria, debido a su influencia directa en la salud, el bienestar animal y la productividad. La aplicación adecuada de prácticas sanitarias permite prevenir enfermedades, detectar oportunamente alteraciones y garantizar condiciones óptimas para el desarrollo de los animales.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este recurso educativo tiene como propósito fortalecer las competencias del aprendiz en la identificación, evaluación, tratamiento y monitoreo de bovinos que requieren atención sanitaria. A lo largo del contenido se abordan temas como la evaluación del estado del animal, la determinación de tratamientos, el seguimiento clínico, la gestión de la información y el cumplimiento de la normativa vigente.
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .caja-1(data-aos="fade-right")
          p Asimismo, se destaca la importancia de las Buenas Prácticas Ganaderas, la bioseguridad y la trazabilidad como herramientas fundamentales para asegurar un manejo responsable y sostenible. De igual manera, se promueve el bienestar animal y la adecuada disposición de residuos.
          p.mb-0 Este componente formativo proporciona bases teóricas y prácticas para una intervención sanitaria eficiente en campo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img2.svg", alt="").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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

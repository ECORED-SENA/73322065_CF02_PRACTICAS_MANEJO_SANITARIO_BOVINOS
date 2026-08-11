<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Generalidades de la especie bovina
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 Los bovinos (ganado vacuno) son animales domésticos pertenecientes a la especie #[i Bos taurus] y #[i Bos indicus], fundamentales en los sistemas agropecuarios por su capacidad de producir carne, leche y subproductos. Su manejo adecuado requiere comprender sus características biológicas, productivas y económicas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img1.png", alt="").m-auto
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Características fisiológicas básicas
    p.mb-5 Los bovinos son animales #[b rumiantes], lo que significa que poseen un sistema digestivo especializado que les permite aprovechar alimentos fibrosos como los pastos. Se caracterizan fisiológicamente por:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-6(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/img2.png", alt="").m-auto
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-2.h-100
          .p-4
            h4.text-center Sistema digestivo
            p Está compuesto por cuatro compartimentos:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Rumen]: fermentación microbiana.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Retículo]: selección de partículas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Omaso]: absorción de agua.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Abomaso]: digestión enzimática.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-2.h-100
          .p-4
            h4.text-center Signos fisiológicos normales
            p El rango normal de adulto por cada parámetro es el siguiente:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Temperatura corporal]: 38.0 – 39.3 °C.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Frecuencia cardíaca]: 60 – 80 lat/min.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Frecuencia respiratoria]: 10 – 30 resp/min.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Movimientos ruminales]: 1 – 2 por minuto.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-2.h-100
          .p-4
            h4.text-center Otras características
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Homeotermos (regulan su temperatura).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Buena adaptación a diferentes climas (especialmente #[i Bos indicus]).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Alta capacidad de conversión de forraje.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Tipos de producción bovina
    p.mb-5 Los sistemas de producción se clasifican según su finalidad y manejo, en:
    .row.justify-content-center.mb-0
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img3.jpg', alt="" ).m-auto
            h4.text-center Principales tipos
            .box___card_sinbordes_p
              p Los tipos de producción son:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Carne]: bovinos destinados al sacrificio para la obtención de productos cárnicos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Leche]: producción continua de leche para el consumo y comercialización.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Doble propósito]: sistema que combina la producción de leche y carne en un mismo hato.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Cría]: producción de terneros para garantizar la reproducción y continuidad del sistema productivo.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ceba (engorde)]: proceso de aumento de peso de los animales para su comercialización en el mercado.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .caja-3.ajuste-caja-3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img4.jpg', alt="" ).m-auto
            h4.text-center Sistemas de manejo
            .box___card_sinbordes_p
              p Por sistemas de manejo se clasifica en:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Extensivo]: uso de grandes áreas de pastoreo.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Intensivo]: alta tecnificación y control.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Semi-intensivo]: combinación de ambos. 
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Clasificación de los bovinos
    p.mb-5 Los bovinos se pueden clasificar según diferentes criterios: 
    p.mb-5 
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
      .row(titulo="Por edad y etapa productiva").ajuste-cajaAcordion
        .col-xl-7.mb-4.mb-lg-0
          ul.fa-ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Ternero]: corresponde al bovino desde su nacimiento hasta el momento del destete, etapa clave para su desarrollo inicial.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Novillo]: se refiere al macho joven que aún no ha alcanzado la madurez reproductiva.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Toro]: es el macho adulto destinado a la reproducción dentro del sistema productivo.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Novilla]: corresponde a la hembra joven que aún no ha tenido su primera cría.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Vaca]: es la hembra adulta que ha alcanzado la madurez reproductiva y puede producir leche o crías.
        .col-xl-5.mb-3
          figure
            img(src='@/assets/curso/temas/img5.png', alt='' style="width: 350px").m-auto
      .row(titulo="Por raza").ajuste-cajaAcordion
        .col-xl-7.mb-4.mb-lg-0
          ul.fa-ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b #[i Bos taurus]]: razas europeas (ej. <i>Holstein</i>, <i>Angus</i>). 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b #[i Bos indicus]]: razas cebuinas (ej. <i>Brahman</i>). 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Cruces]: combinaciones adaptadas. 
        .col-xl-5.mb-3
          figure
            img(src='@/assets/curso/temas/img6.png', alt='' style="width: 350px").m-auto
      .row(titulo="Por función").ajuste-cajaAcordion
        .col-xl-7.mb-4.mb-lg-0
          ul.fa-ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Lecheros. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cárnicos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Doble propósito. 
        .col-xl-5.mb-3
          figure
            img(src='@/assets/curso/temas/img7.png', alt='' style="width: 350px").m-auto
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Ciclo productivo
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1-1(data-aos="fade-right")
          p.mb-0 El ciclo productivo bovino comprende varias etapas que marcan el desarrollo del animal, desde el nacimiento, seguido de la cría y el levante, hasta el engorde y la producción, donde se destina a la obtención de carne, leche o reproducción. En cuanto al ciclo reproductivo, la pubertad ocurre entre los 8 y 12 meses, la gestación dura aproximadamente 283 días y el intervalo entre partos es de 12 a 14 meses.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img8.png", alt="").m-auto
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Importancia económica y productiva
    p.mb-5 La ganadería bovina es una de las actividades más relevantes del sector agropecuario por:
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img9.jpg', alt="" ).m-auto
            h4.text-center Aportes principales
            .ajuste-p-card
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Producción de alimentos (carne y leche).
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Generación de empleo rural.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Producción de subproductos (cuero, estiércol). 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aporte a la seguridad alimentaria.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img10.jpg', alt="" ).m-auto
            h4.text-center Impacto económico
            .ajuste-p-card
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Generación de ingresos]: fundamental en zonas rurales.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Exportaciones]: carne y derivados.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Industria asociada]: sector lácteo y cárnico.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Sostenibilidad]: uso responsable de recursos.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img11.jpg', alt="" ).m-auto
            h4.text-center Consideraciones actuales
            .ajuste-p-card
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Producción sostenible.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Bienestar animal.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Adaptación al cambio climático.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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

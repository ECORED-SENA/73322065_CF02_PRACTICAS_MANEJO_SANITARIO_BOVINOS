<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Etología bovina (comportamiento animal)
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-1.ajuste-caja-1(data-aos="fade-right")
          p.mb-0 La etología bovina estudia el comportamiento de los bovinos en relación con su entorno, otros animales y el ser humano. Su comprensión permite optimizar el manejo, reducir el estrés y mejorar el bienestar animal, lo cual se traduce en mayor productividad y eficiencia en los sistemas ganaderos. 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img12.png", alt="").m-auto
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Comportamiento bovino
    p.mb-5 El bovino es un animal rumiante y gregario que vive en grupo y es sensible al entorno y al manejo humano, lo que influye en su comportamiento.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comportamiento social
                p.mb-0 Los bovinos establecen jerarquías dentro del hato (dominancia y subordinación). Respetar estas estructuras evita conflictos y reduce el estrés.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img14.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Zona de fuga
                p.mb-0 Es el espacio personal del animal. Cuando una persona invade esta zona, el bovino se desplaza para mantener distancia, lo cual es clave para su manejo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img15.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Punto de balance
                p Ubicado generalmente a la altura del hombro. Permite dirigir el movimiento del animal: 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Detrás del punto → el animal avanza. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Delante del punto → el animal retrocede. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Instinto gregario
                p.mb-0 Los bovinos prefieren permanecer en grupo. El aislamiento genera estrés, ansiedad y cambios en el comportamiento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Respuesta al estrés
                p.mb-0 El manejo brusco (gritos, golpes o uso de herramientas inadecuadas) provoca alteraciones fisiológicas y disminución de la productividad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img18.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 En la siguiente tabla presentan los comportamientos naturales del bovino y su relevancia dentro de los sistemas productivos:
    .row.justify-content-center.mb-0
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Comportamientos básicos del bovino y su importancia en el manejo
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Comportamiento
                th.ajuste-border-tabla.texto-left Descripción
                th.texto-left Importancia en manejo
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Pastoreo
                td.ajuste-border-tabla.texto-left Consumo de forraje
                td.texto-left Base de la alimentación
              tr
                td.ajuste-border-tabla.texto-left Rumia
                td.ajuste-border-tabla.texto-left Regurgitación y masticación
                td.texto-left Favorece la digestión
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Descanso
                td.ajuste-border-tabla.texto-left Periodos de reposo
                td.texto-left Recuperación del animal
              tr
                td.ajuste-border-tabla.texto-left Socialización
                td.ajuste-border-tabla.texto-left Interacción dentro del grupo
                td.texto-left Mantiene estabilidad social
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Desplazamiento
                td.ajuste-border-tabla.texto-left Movimiento en busca de recursos
                td.texto-left Adaptación al entorno
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Factores que afectan el comportamiento
    p.mb-5 El comportamiento de los bovinos puede verse alterado por múltiples factores internos y externos que influyen directamente en su bienestar, salud y productividad. La identificación de estos factores permite prevenir problemas y mejorar las condiciones de manejo; los cuales son:
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img20.png' ).m-auto
            h4.mb-3.estilo-text Ambientales
            p.mb-5.text-center Temperatura, humedad, ruido e infraestructura inadecuada pueden generar estrés.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img21.png' ).m-auto
            h4.mb-3.estilo-text Nutricionales
            p.mb-5.text-center La falta de alimento o agua provoca cambios como agresividad o debilidad.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img22.png' ).m-auto
            h4.mb-3.estilo-text Sanitarios
            p.mb-5.text-center Enfermedades, dolor o lesiones afectan el comportamiento normal. 
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img23.png' ).m-auto
            h4.mb-3.estilo-text Manejo humano
            p.mb-5.text-center Prácticas inadecuadas generan miedo y resistencia.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img24.png' ).m-auto
            h4.mb-3.estilo-text Transporte
            p.mb-5.text-center Condiciones deficientes producen estrés y riesgo de lesiones.
        p.mb-5 La siguiente tabla resume los factores que influyen en el comportamiento y sus principales consecuencias.
        .row.justify-content-center.mb-0
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Factores que afectan el comportamiento bovino y sus efectos
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Tipo de factor
                    th.ajuste-border-tabla.texto-left Ejemplos
                    th.texto-left Efecto en el animal
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Ambientales
                    td.ajuste-border-tabla.texto-left Calor, ruido
                    td.texto-left Estrés térmico
                  tr
                    td.ajuste-border-tabla.texto-left Nutricionales
                    td.ajuste-border-tabla.texto-left Falta de alimento
                    td.texto-left Agresividad
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Sanitarios
                    td.ajuste-border-tabla.texto-left Enfermedad
                    td.texto-left Aislamiento
                  tr
                    td.ajuste-border-tabla.texto-left Manejo humano
                    td.ajuste-border-tabla.texto-left Maltrato
                    td.texto-left Miedo
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Transporte
                    td.ajuste-border-tabla.texto-left Hacinamiento
                    td.texto-left Lesiones
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Interacción con el entorno
    p.mb-5 El entorno en el que se desarrolla el bovino influye directamente en su comportamiento, salud y productividad. Un ambiente adecuado favorece el bienestar animal y reduce la aparición de enfermedades. Los elementos del entorno que influyen en el comportamiento son:
    .fondo___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img25.png' ).m-auto
            h4.mb-3.estilo-text Infraestructura
            p.mb-5.text-center Corrales, mangas y bebederos deben ser seguros y funcionales.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img26.png' ).m-auto
            h4.mb-3.estilo-text Disponibilidad de agua
            p.mb-5.text-center Debe ser constante, limpia y accesible.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img27.png' ).m-auto
            h4.mb-3.estilo-text Calidad de pasturas
            p.mb-5.text-center Determina el comportamiento alimenticio y el estado nutricional.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img28.png' ).m-auto
            h4.mb-3.estilo-text Condiciones climáticas
            p.mb-5.text-center La sombra y la ventilación reducen el estrés térmico.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img29.png' ).m-auto
            h4.mb-3.estilo-text Bioseguridad
            p.mb-5.text-center Control de ingreso de personas, animales y vehículos para prevenir enfermedades. 
        p.mb-0 El entorno influye directamente en el comportamiento bovino: agua limpia, buena infraestructura, pasturas de calidad, clima adecuado y bioseguridad favorecen el bienestar, reducen el estrés y mejoran la productividad.
        Separador
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Conductas normales y anormales
    p.mb-5 La observación del comportamiento permite diferenciar entre estados normales y posibles problemas sanitarios o de manejo. Detectar cambios oportunamente es clave para la intervención temprana. A continuación, se conocerán cuáles son normales y anormales:
    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img30.jpg', alt="" ).m-auto
            h4.text-center Conductas normales en bovinos
            .box___card_sinbordes_p
              p Las siguientes conductas indican un estado adecuado de salud y bienestar:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Pastoreo activo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Rumiación constante. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Interacción social estable. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Movilidad normal.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Consumo regular de agua.
      .col-xl-6.col-md-9(data-aos="fade-left")
        .caja-3.ajuste-caja-3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img31.jpg', alt="" ).m-auto
            h4.text-center Conductas anormales en bovinos
            .box___card_sinbordes_p
              p Las siguientes conductas pueden indicar enfermedad, estrés o problemas de manejo:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aislamiento del grupo.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Agresividad inusual.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Inmovilidad o decaimiento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Vocalización excesiva.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Disminución del consumo de alimento.
    p.mb-5 La siguiente tabla permite relacionar comportamientos anormales con posibles causas.
    .row.justify-content-center.mb-0
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Conductas anormales y posibles causas en bovinos
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Conducta
                th.texto-left Posible causa y explicación
            tbody
              tr
                td.ajuste-border-tabla.texto-left #[b Aislamiento]
                td.texto-left Puede indicar enfermedad, dolor o debilidad; el animal se separa del grupo
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Agresividad]
                td.texto-left Asociada a estrés, miedo o incomodidad por manejo inadecuado o condiciones ambientales
              tr
                td.ajuste-border-tabla.texto-left #[b Inmovilidad]
                td.texto-left Puede reflejar dolor, lesión o dificultad para desplazarse
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Vocalización]
                td.texto-left Expresa ansiedad, estrés, hambre o separación
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Respuestas al manejo humano
    p.mb-5 El manejo humano es uno de los factores más determinantes en el comportamiento bovino. Un manejo adecuado mejora la docilidad del animal y reduce el estrés, mientras que un manejo inadecuado genera respuestas negativas. En esta sección se conocerán los tipos de manejo, principios y normatividad.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tipos de manejo y su efecto en el comportamiento
                p.mb-0 Los tipos de manejo influyen directamente en el comportamiento de los bovinos. Un manejo adecuado, caracterizado por ser tranquilo y sin el uso de violencia, favorece animales dóciles, fáciles de manejar y con menor nivel de estrés. Por el contrario, un manejo inadecuado, que incluye gritos, golpes o prácticas bruscas, genera estrés, miedo y respuestas agresivas, afectando negativamente el bienestar animal y la productividad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Principios para un manejo adecuado
                p Para garantizar el bienestar animal, se deben aplicar las siguientes prácticas:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Realizar movimientos suaves y controlados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Evitar ruidos fuertes. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Respetar la zona de fuga. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mantener a los animales en grupo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Utilizar herramientas adecuadas. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Marco normativo aplicable
                p El manejo de bovinos en Colombia está regulado por normas que buscan proteger el bienestar animal:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ley 1774 de 2016: protección animal. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Regulaciones del ICA. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Buenas Prácticas Ganaderas (BPG). 
                p.mb-0 Estas normas establecen que el manejo debe evitar el dolor, el miedo y el sufrimiento innecesario, permitiendo que el animal exprese su comportamiento natural.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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

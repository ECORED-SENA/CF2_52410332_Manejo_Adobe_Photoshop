<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Transformaciones en Photoshop

    .row.justify-content-center.mb-4               
      .col-lg-9.my-3
        p(data-aos="fade-down") Las transformaciones son un conjunto de comandos que amplían, reducen, giran, sesgan o deforman un elemento en Photoshop, pero estas no se limitan a los objetos, sino que también son susceptibles de transformar trazados, vectores, máscaras vectoriales y capas.

        p(data-aos="fade-down") Los comandos del menú transformar son: 

      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/83.png', alt='') 
    .row.justify-content-center.mb-4               
      .col-lg-3.my-3
        .bg23.p-2.brad.h-100                  
          .row.align-items-center       
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/84.png', alt='')  
            .col
              p(data-aos="fade-down").mb-0 Escala  

      .col-lg-3.my-3
        .bg23.p-2.brad.h-100                  
          .row.align-items-center       
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/85.png', alt='')  
            .col
              p(data-aos="fade-down").mb-0 Rotar

      .col-lg-3.my-3
        .bg23.p-2.brad.h-100                  
          .row.align-items-center       
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/86.png', alt='')  
            .col
              p(data-aos="fade-down").mb-0 Sesgar

      .col-lg-3.my-3
        .bg23.p-2.brad.h-100                  
          .row.align-items-center       
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/87.png', alt='')  
            .col
              p(data-aos="fade-down").mb-0 Distorsionar

      .col-lg-3.my-3
        .bg23.p-2.brad.h-100                  
          .row.align-items-center       
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/88.png', alt='')  
            .col
              p(data-aos="fade-down").mb-0 Perspectiva

      .col-lg-3.my-3
        .bg23.p-2.brad.h-100                  
          .row.align-items-center       
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/89.png', alt='')  
            .col
              p(data-aos="fade-down").mb-0 Deformar 

      .col-lg-3.my-3
        .bg23.p-2.brad.h-100                  
          .row.align-items-center       
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/90.png', alt='')  
            .col
              p(data-aos="fade-down").mb-0 Voltear
              
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Realización de transformaciones

    .row.justify-content-center.align-items-center.bg24.mb-5(data-aos="fade-right")
      .col-lg-8
          p(data-aos="fade-down") Este apartado se centra en la realización de transformaciones con selecciones o vectores en la capa activa.

          p(data-aos="fade-down").mb-0 Al seleccionar cualquiera de los comandos de transformación, se muestra en pantalla un rectángulo delimitador con un centro de referencia, este se puede desplazar, incluso fuera del marco del objeto que se desea transformar; dicho punto sirve para demarcar el lugar desde el cual se va a realizar la modificación.
      .col-lg-4.p-0.mb-md-4.mb-lg-0
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/91.png', alt='')                            

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10           
        .bg3.p-4 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/92.png', alt='Imagen que presenta Demarcación.')   

    .row.justify-content-center(data-aos="fade-right")
      .col-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/93.png', alt='')        
      .col
        p(data-aos="fade-down") En la barra de opciones, dé clic en uno de los puntos del cuadrado localizador para que el punto de referencia de la herramienta de transformación, se reubique en el sitio donde se cliquee.  

    .row.justify-content-center.mb-5           
      .col-lg-10           
        .bg3.p-4 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/94.png', alt='Imagen que presenta la barra de opciones.')  

    .row.justify-content-center           
      .col-lg-9.my-3 
        p(data-aos="fade-down") La barra de opciones es la misma para todas las transformaciones, exceptuando Deformar, puesto que esta le permite realizar diferentes modificaciones, seleccionando un solo comando, lo cual es importante cuando se trabaja con imágenes de mapa de bits, porque si se hacen una a una las transformaciones, será menos nítida la imagen.

        .row.justify-content-start.mb-4          
          .col-auto        
            .row.justify-content-center(data-aos="fade-right")
              .col.p-0
                .bg4.h-100.p-2.j
                  h5(data-aos="fade-down").mb-0 Distorsionar

        p(data-aos="fade-down") Arrastre uno de los manejadores de esquina para distorsionar el cuadro delimitador.
        .row.justify-content-start.mb-4          
          .col-auto        
            .row.justify-content-center(data-aos="fade-right")
              .col.p-0
                .bg4.h-100.p-2.j
                  h5(data-aos="fade-down").mb-0 Escalados

        p(data-aos="fade-down") Para escalar una selección, basta con hacer clic sobre cualquiera de los manejadores del cuadro delimitador; pero si lo que se quiere es escalar la imagen proporcionalmente, se debe mantener oprimida la tecla #[b Mayús] y arrastrar uno de los manejadores de esquina.  

        .row.justify-content-center.align-items-center.bg1(data-aos="fade-right")
          .col-auto.p-0 
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/95.png', alt='')        
          .col.my-3
            p(data-aos="fade-down").mb-0 Al momento de copiar un elemento durante su transformación, presione la tecla #[b Alt] y para aplicar las transformaciones, es necesario que pulse la tecla #[b Intro] o #[b Retorno], pero si esto no sucede, oprima Esc.                                         
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/96.png', alt='')        

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

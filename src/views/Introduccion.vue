<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center.align-items-center         
              .col-lg-9.my-3          
                p(data-aos="fade-down") En este componente formativo, conocerá a fondo el espacio de trabajo de Adobe Photoshop, donde se describen los modos de color y los diversos menús contextuales, logrando de esta manera adaptar el entorno de la aplicación a sus necesidades y gustos, para mejorar el desempeño de los diversos procesos que desarrolle.   

                .row.justify-content-center.align-items-center.bg1.mb-4(data-aos="fade-right")
                  .col-auto.p-0 
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')        
                  .col.my-3
                    p(data-aos="fade-down").mb-0 Se realizará un recorrido por las herramientas de dibujo, texto, retoque y desplazamiento, a través de la interfaz de Photoshop.

                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')                           
              .col-lg-3.my-3.d-none.d-lg-block
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')         
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

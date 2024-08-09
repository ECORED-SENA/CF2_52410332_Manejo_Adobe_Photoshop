export default {
  global: {
    componenteFormativo:
      'Herramientas de pintura, dibujo y retoque fotográfico',
    descripcionCurso:
      'El presente componente formativo, proporciona una guía completa sobre las herramientas de Adobe Photoshop, enfocándose en la edición de imágenes, dibujo, texto y navegación. Describe en detalle herramientas específicas como desenfocar, enfocar, dedo, sobreexponer, subexponer y esponja. También aborda las transformaciones en Photoshop, incluyendo distorsionar y escalado. Además, incluye ejemplos de uso y referencias visuales, para facilitar la comprensión y aplicación de cada herramienta en el diseño gráfico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Herramientas de edición de imágenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Galería de herramientas de retoque',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas de dibujo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Herramientas de pluma',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas de texto',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Herramientas de selección',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Herramientas de forma',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Herramientas de navegación',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Transformaciones en Photoshop',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Realización de transformaciones',
            hash: 't_2_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Herramientas de pluma',
      referencia:
        'Saber Programas Imagen. (2023). <i>Dibujar con PLUMA en Photoshop – Herramienta Pluma</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xJ49XigGOxc&t=20s',
    },
    {
      tema: 'Herramientas de forma',
      referencia:
        'Saber Programas Imagen. (2023). <i>Cómo HACER FIGURAS en Photoshop</i> (video). YouTube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=30CsBTY5lvk',
    },
  ],
  glosario: [
    {
      termino: 'Dedo',
      significado:
        'simula el efecto de mezclar pintura fresca, arrastrando el color y combinándolo con tonos cercanos.',
    },
    {
      termino: 'Desenfocar',
      significado:
        'herramienta que suaviza los bordes de una imagen, reduciendo el detalle de los píxeles adyacentes.',
    },
    {
      termino: 'Enfocar',
      significado:
        'herramienta que aumenta el contraste entre los bordes de una imagen, mejorando la definición de sus orillas.',
    },
    {
      termino: 'Esponja',
      significado:
        'herramienta que satura o desatura los colores de una imagen, ajustando su intensidad de forma gradual.',
    },
    {
      termino: 'Pluma',
      significado:
        'herramienta que permite dibujar trazados vectoriales, tanto rectos como curvos, con alta precisión.',
    },
    {
      termino: 'Rotar vista',
      significado:
        'herramienta que permite girar el área de trabajo de la imagen, similar a una mesa de dibujo.',
    },
    {
      termino: 'Selección de trazado',
      significado:
        'herramienta que selecciona todas las líneas y puntos de ancla de un trazado vectorial.',
    },
    {
      termino: 'Sobreexponer',
      significado:
        'herramienta que aclara zonas específicas de una imagen, similar a la técnica de revelar con más luz.',
    },
    {
      termino: 'Subexponer',
      significado:
        'herramienta que oscurece áreas claras de una imagen, como en la técnica de revelar con menos luz.',
    },
    {
      termino: 'Transformar',
      significado:
        'conjunto de comandos que permite modificar elementos en Photoshop, incluyendo escalado, rotación, distorsión y deformación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adobe. (2022). <i>Dibujo con las herramientas de pluma</i>. ',
      link: 'https://helpx.adobe.com/co/photoshop/using/drawing-pen-tools.html',
    },
    {
      referencia: 'Moreno Alonso, J. (s.f.). <i>Manual Photoshop básico</i>',
      link: 'https://www.professionalscat.net/manuals/pdf/Photoshop_Basic.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sergio Alfredo Morales Domínguez',
          cargo: 'Experto Temático',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

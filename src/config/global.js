export default {
  global: {
    Name: 'Prácticas de manejo sanitario en bovinos',
    Description:
      'Este componente formativo desarrolla competencias en evaluación, identificación, tratamiento y monitoreo del estado sanitario de bovinos. Integra Buenas Prácticas Ganaderas, bioseguridad, bienestar animal y gestión de registros. El aprendiz reconoce signos clínicos, actúa ante emergencias, aplica tratamientos básicos y realiza seguimiento, garantizando un manejo responsable, seguro y conforme a la normativa vigente en sistemas de producción bovina.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Generalidades de la especie bovina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características fisiológicas básicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de producción bovina',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación de los bovinos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Ciclo productivo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Importancia económica y productiva',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Etología bovina (comportamiento animal)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Comportamiento bovino',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Factores que afectan el comportamiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Interacción con el entorno',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Conductas normales y anormales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Respuestas al manejo humano',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación del estado del animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Inspección inicial del animal',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Observación del comportamiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Signos vitales y externos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Identificación de lesiones',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Identificación de enfermedades',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Determinación de tratamiento en bovinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Criterios para determinar cuándo un bovino requiere tratamiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Selección de animales para tratamiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Evaluación del estado clínico',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Priorización de atención',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Registro de diagnóstico inicial',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Atención y manejo sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Primeros auxilios',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Medición de signos vitales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Aplicación de tratamientos básicos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Aplicación de criterios de bienestar animal',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Cambios comportamentales post tratamiento',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Monitoreo del animal tratado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Monitoreo del estado del animal tratado',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Seguimiento de la evolución clínica',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Registro de cambios comportamentales',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Identificación de recaídas',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Ajuste del tratamiento',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Gestión, seguimiento y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Manejo de información y trazabilidad',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Registro de información',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Reporte de novedades',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Resolución de contingencias',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Control de procesos sanitarios',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Normativa, bioseguridad y disposición de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Normativa sanitaria',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Plan de contingencia',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Protocolos de bioseguridad',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Disposición de residuos',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Cumplimiento de requisitos legales',
            hash: 't_8_5',
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
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'Condiciones que garantizan salud, confort y ausencia de sufrimiento innecesario en los bovinos.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas destinadas a prevenir la entrada y propagación de enfermedades en el sistema productivo.',
    },
    {
      termino: 'Bovino',
      significado:
        'Animal doméstico rumiante utilizado para la producción de carne, leche o doble propósito.',
    },
    {
      termino: 'Comportamiento',
      significado:
        'Respuestas del animal frente a estímulos internos y externos que influyen en su bienestar.',
    },
    {
      termino: 'Contingencia',
      significado:
        'Evento sanitario inesperado que requiere acciones inmediatas para su control y manejo.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Identificación de una enfermedad a partir de la observación de signos clínicos y evaluación del animal.',
    },
    {
      termino: 'Enfermedad',
      significado:
        'Alteración del estado normal de salud que afecta el funcionamiento del organismo del bovino.',
    },
    {
      termino: 'Evaluación clínica',
      significado:
        'Proceso de revisión del estado del animal mediante observación, signos vitales y análisis de su condición general.',
    },
    {
      termino: 'Manejo sanitario',
      significado:
        'Conjunto de prácticas orientadas a prevenir, controlar y tratar enfermedades en bovinos.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Seguimiento continuo del estado de salud del animal para evaluar su evolución y respuesta al tratamiento.',
    },
    {
      termino: 'Normativa sanitaria',
      significado:
        'Conjunto de reglas y disposiciones legales que regulan la sanidad y el manejo de los animales.',
    },
    {
      termino: 'Primeros auxilios',
      significado:
        'Atención inmediata brindada al animal para estabilizar su condición antes de un tratamiento definitivo.',
    },
    {
      termino: 'Signos vitales',
      significado:
        'Indicadores fisiológicos como temperatura, frecuencia cardíaca y respiración que reflejan el estado del animal.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Registro detallado del historial sanitario y productivo de cada animal a lo largo del tiempo.',
    },
    {
      termino: 'Tratamiento',
      significado:
        'Aplicación de medidas o medicamentos destinados a controlar o curar enfermedades en bovinos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Federación Colombiana de Ganaderos (FEDEGÁN). (2022). Buenas prácticas ganaderas.',
      link: 'https://www.fedegan.org.co/programas/buenas-practicas-ganaderas',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2023). Inocuidad en la producción pecuaria primaria y bienestar animal.',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2024a). Resolución 00008940 de 2024: guía sanitaria de movilización interna.',
      link:
        'https://normograma.invima.gov.co/compilacion/docs/resolucion_ica_8940_2024.htm',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2024b). Resolución 00017938 de 2024: requisitos sanitarios para bovinos destinados a exportación.',
      link:
        'https://www.ica.gov.co/getattachment/0eda1719-04d5-4780-a2fe-2a2a400693c6/2024R00017938.aspx',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (OMSA). (2022). Código sanitario para los animales terrestres.',
      link:
        'https://www.woah.org/es/que-hacemos/normas/codigos-y-manuales/codigo-terrestre/',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (OMSA). (2025). Lista de agentes antimicrobianos de importancia veterinaria para bovinos.',
      link:
        'https://www.woah.org/es/documento/technical-reference-document-listing-antimicrobial-agents-veterinary-importance-bovine-animals/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },

    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderon Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Ricardo Ortiz Puentes',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}

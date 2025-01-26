interface Work {
  name: string;
  position: {
    en: string;
    es: string;
  };
  url: string;
  startDate: string;
  endDate: string;
  summary: {
    en: string;
    es: string;
  };
  highlights: {
    en: string[];
    es: string[];
  };
}

export default [
  {
    name: "Happy Foto",
    position: {
      en: "Full Stack Developer with WordPress",
      es: "Desarrollador Full Stack con WordPress",
    },
    url: "https://happyfoto.cl",
    startDate: "2024-08-01",
    endDate: "",
    summary: {
      en: "Happy Foto is a photo booking service located in Las Condes with delivery to Santiago and more regions of Chile.",
      es: "Happy Foto es un servicio de enmarcado de fotografías ubicado en Las Condes con envío a domicilio a Santiago y a más regiones de Chile.",
    },
    highlights: {
      en: [
        "Currently developing new features of the website built in WordPress.",
        "I improved user experience by optimizing image loading."
      ],
      es: [
        "Actualmente desarrollo nuevas funcionalidades del sitio web hecho en WordPress.",
        "Logré mejorar la experiencia de usuario en la carga de imágenes."
      ],
    }
  },
  {
    name: "Lecaros Group",
    position: {
      en: "Senior Software Developer with .NET",
      es: "Asesor informático y Desarrollador .NET",
    },
    url: "https://www.lecarosgroup.com",
    startDate: "2023-02-01",
    endDate: "2024-06-30",
    summary: {
      en: "",
      es: "",
    },
    highlights: {
      en: [
        "Continued developing, maintaining, and deploying various web projects of Lecaros Group.",
        "I implemented a platform for brokers and agents in **Portal Inversionista**, and registered more than 40 brokers and more than 5 agents.",
        "I implemented a web scraping to get available properties from various real estate agencies."
      ],
      es: [
        "Continué desarrollando, manteniendo y desplegando varios proyectos web de Lecaros Group.",
        "Desarrollé e implementé una plataforma para brokers y embajadores en **Portal Inversionista**, y se han registrado **más de 40 brokers y más de 5 embajadores**.",
        "Desarrollé e implementé un webscraping que obtiene propiedades disponibles de varias inmobiliarias."
      ],
    }
  },
  {
    name: "Gestión Tecnológica Empresarial SpA (G5)",
    position: {
      en: "Full Stack Developer with .NET",
      es: "Desarrollador Fullstack .NET",
    },
    url: "",
    startDate: "2020-02-05",
    endDate: "2022-10-01",
    summary: {
      en: "",
      es: "",
    },
    highlights: {
      en: [
        "One of the most requested clients of **G5** was **Lecaros Group**.",
        "I developed, maintained, and deployed various web projects related to the intranet of **LecarosGroup** and their two websites: **[Portal Inversionista](https://www.portalinversionista.com)** and **[Portal Arriendo](https://www.portalarriendo.com)**",
        "Improved the efficiency of SQL queries by reducing response time.",
        "I implemented a training manual for **Portal Inversionista**.",
        "Implemented **UPago** in the payments module of **Portal Arriendo**, and registered more than 6,000 payments.",
      ],
      es: [
        "Uno de los clientes más demandados de **G5** fue **Lecaros Group**.",
        "Desarrollé, mantuve y desplegué varios proyectos relacionados con la intranet de **LecarosGroup** y sus dos sitios web: **[Portal Inversionista](https://www.portalinversionista.com)** y **[Portal Arriendo](https://www.portalarriendo.com)**",
        "Mejoré la eficiencia de las consultas SQL reduciendo el tiempo de respuesta.",
        "Desarrollé e implementé una ficha de asesoramiento en **Portal Inversionista**.",
        "Implementé **UPago** en el módulo de pagos de **Portal Arriendo**, y se han registrado **más de 6.000 pagos**."
      ],
    }
  }
] as Work[];

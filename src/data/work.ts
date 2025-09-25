interface Work {
  name: string;
  position: {
    en: string;
    es: string;
  };
  url: string;
  startDate: string;
  endDate: string;
  summary?: {
    en: string;
    es: string;
  };
  highlights: {
    en: string[];
    es: string[];
  };
  skills: string[];
  themeColor?: string;
}

export default [
  {
    name: "Profugas.cl",
    position: {
      en: "Full Stack Developer with Laravel",
      es: "Desarrollador Full Stack con Laravel",
    },
    startDate: "2025-07-01",
    endDate: "",
    highlights: {
      en: [
        "Currently developing a SaaS for the management of inspections and thermal reports.",
      ],
      es: [
        "Actualmente desarrollo un SaaS para la gestión de inspecciones e informes termográficos.",
      ],
    },
    skills: ["Laravel", "PHP", "MySQL", "React", "TypeScript", "Tailwind CSS"],
    themeColor: "#88d4ff",
  },
  {
    name: "Farmacia Latinoamericana",
    position: {
      en: "Full Stack Developer with Laravel",
      es: "Desarrollador Full Stack con Laravel",
    },
    startDate: "2025-02-14",
    endDate: "",
    highlights: {
      en: [
        "Currently developing a SaaS for the management of the pharmacy.",
        "I implemented a system to import/export product prices list in Excel for different suppliers."
      ],
      es: [
        "Actualmente desarrollo un SaaS para la gestión de la farmacia.",
        "Implementé un sistema para importar/exportar lista de precios de productos en Excel para distintos proveedores."
      ],
    },
    skills: ["Laravel", "PHP", "MySQL", "React", "TypeScript", "Tailwind CSS"],
    themeColor: "#a6ff47",
  },
  {
    name: "Happy Foto",
    position: {
      en: "WordPress Administrator and PHP/Vue.js Developer",
      es: "Administrador de WordPress y Desarrollador de PHP y Vue.js",
    },
    url: "https://happyfoto.cl",
    startDate: "2024-08-01",
    endDate: "2025-05-01",
    highlights: {
      en: [
        "Developed new features of the website built in WordPress.",
        "I improved user experience by optimizing image loading."
      ],
      es: [
        "Desarrollé nuevas funcionalidades del sitio web hecho en WordPress.",
        "Logré mejorar la experiencia de usuario en la carga de imágenes."
      ],
    },
    skills: ["Vue", "TypeScript", "Tailwind CSS", "WordPress", "PHP"],
    themeColor: "#00eac7",
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
    },
    skills: [".NET", "Vue", "Angular", "jQuery", "Bootstrap", "Microsoft SQL Server", "Azure", "Python"],
    themeColor: "#ff9611",
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
    },
    skills: [".NET", "Vue", "Angular", "jQuery", "Bootstrap", "Microsoft SQL Server", "Azure"],
    themeColor: "#00a39e",
  }
] as Work[];

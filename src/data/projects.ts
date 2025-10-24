import aforshow from "@/assets/projects/aforshow.jpg";
import jsconfEs from "@/assets/projects/jsconf-es.jpg";
import portalinversionista from "@/assets/projects/portalinversionista.jpg";

interface Project {
  name: string;
  image: ImageMetadata;
  startDate: string;
  endDate: string;
  description: {
    en: string;
    es: string;
  };
  keyAccomplishments: {
    en: string[];
    es: string[];
  };
  technologies: string[];
  madeAt?: string;
  url: string;
  urlCode?: string;
  urlContributions?: string;
  hidden?: boolean;
}

export default [
  {
    name: "Aforshow (@afor_digital)",
    image: aforshow,
    startDate: "2025-09-18",
    endDate: "2025-09-23",
    description: {
      en: "A programming event made for developers by developers to give them the opportunity to give a talk.",
      es: "Un evento de programación creado por desarrolladores para desarrolladores con el fin de darles la oportunidad de dar una charla.",
    },
    keyAccomplishments: {
      en: [
        "Collaboration in GitHub",
        "Improvements in performance and time zone representation",
      ],
      es: [
        "Colaboración en GitHub",
        "Mejoras de rendimiento y representación del horario"
      ],
    },
    technologies: ["Astro", "Tailwind CSS"],
    url: "https://afor.show/",
    urlCode: "https://github.com/Afordin/aforshow-2025",
    urlContributions: "https://github.com/Afordin/aforshow-2025/commits/main/?author=vladiantio",
  },
  {
    name: "JSConf España (@midudev)",
    image: jsconfEs,
    startDate: "2024-12-29",
    endDate: "2024-12-30",
    description: {
      en: "International JavaScript Conference held on March 1, 2025 at La Nave, Madrid, Spain.",
      es: "Conferencia internacional de JavaScript que se celebró el 1 de Marzo de 2025 en La Nave, Madrid, España.",
    },
    keyAccomplishments: {
      en: [
        "Collaboration in GitHub",
        "Improvements in navigation and readability",
      ],
      es: [
        "Colaboración en GitHub",
        "Mejoras de navegación y legibilidad",
      ],
    },
    technologies: ["Astro", "Tailwind CSS"],
    url: "https://jsconf.es/",
    urlCode: "https://github.com/midudev/jsconf.es",
    urlContributions: "https://github.com/midudev/jsconf.es/commits/main/?author=vladiantio",
  },
  {
    name: "Portal Inversionista",
    image: portalinversionista,
    startDate: "2020-06-01",
    endDate: "2024-06-30",
    description: {
      en: "Property booking platform for investments in Chile. +1.000 registered customers.",
      es: "Plataforma para reservar propiedades de inversión en Chile. +1.000 clientes registrados.",
    },
    keyAccomplishments: {
      en: [
        "Redesigned landing page",
        "SEO Optimization",
        "Mobile adaptation",
      ],
      es: [
        "Landing page rediseñada",
        "Optimización del SEO",
        "Adaptación para móviles",
      ],
    },
    technologies: ["Angular", "Bootstrap", ".NET"],
    madeAt: "Lecaros Group",
    url: "https://portalinversionista.com/",
  }
] as Project[];

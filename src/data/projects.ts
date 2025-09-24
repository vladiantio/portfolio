import aforshow from '@/assets/projects/aforshow.jpg';
import jsconfEs from '@/assets/projects/jsconf-es.jpg';
import happyfoto from '@/assets/projects/happyfoto.jpg';
import portalinversionista from '@/assets/projects/portalinversionista.jpg';

interface Project {
  name: string;
  image: ImageMetadata;
  startDate: string;
  endDate: string;
  description: {
    en: string;
    es: string;
  };
  technologies: string[];
  madeAt?: string;
  url: string;
  urlCode?: string;
  urlContributions?: string;
  hidden?: boolean;
  themeColor?: string;
}

export default [
  {
    name: "Aforshow 2025 (@afor_digital)",
    image: aforshow,
    startDate: "2025-09-23",
    endDate: "2025-09-23",
    description: {
      en: "A programming event made for developers by developers to give them the opportunity to give a talk.",
      es: "Un evento de programación creado por desarrolladores para desarrolladores con el fin de darles la oportunidad de dar una charla.",
    },
    technologies: ['Astro', 'Tailwind CSS'],
    url: "https://afor.show/",
    urlCode: "https://github.com/Afordin/aforshow-2025",
    urlContributions: "https://github.com/Afordin/aforshow-2025/commits/main/?author=vladiantio",
    themeColor: "#fff",
  },
  {
    name: "JSConf España 2025 (@midudev)",
    image: jsconfEs,
    startDate: "2024-12-29",
    endDate: "2024-12-30",
    description: {
      en: "International JavaScript Conference to be held on March 1, 2025 at La Nave, Madrid, Spain.",
      es: "Conferencia internacional de JavaScript que se celebrará el 1 de Marzo de 2025 en La Nave, Madrid, España.",
    },
    technologies: ['Astro', 'Tailwind CSS'],
    url: "https://jsconf.es/",
    urlCode: "https://github.com/midudev/jsconf.es",
    urlContributions: "https://github.com/midudev/jsconf.es/commits/main/?author=vladiantio",
    themeColor: "#f7df1d",
  },
  {
    name: "Happy Foto",
    image: happyfoto,
    startDate: "2024-08-14",
    endDate: "",
    description: {
      en: "Photo booking service located in Las Condes with delivery to Santiago and more regions of Chile.",
      es: "Servicio de enmarcado de fotografías ubicado en Las Condes con envío a domicilio a Santiago y a más regiones de Chile.",
    },
    technologies: ['Vue', 'WordPress'],
    url: "https://happyfoto.cl/",
    themeColor: "#00eac7",
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
    technologies: ['Angular', 'Bootstrap', '.NET'],
    madeAt: "Lecaros Group",
    url: "https://portalinversionista.com/",
    themeColor: "#03a7e2",
  }
] as Project[];

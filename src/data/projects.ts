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
}

export default [
  {
    name: "JSConf España 2025",
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
  }
] as Project[];

interface Project {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  url: string;
}

export default [
  {
    name: "Cosmética Bella",
    startDate: "2024-12-15",
    endDate: "",
    description: "",
    highlights: [],
    url: "https://cosmeticabella.cl/"
  },
  {
    name: "JSConf España 2025",
    startDate: "2020-06-01",
    endDate: "2024-06-30",
    description: "",
    highlights: [],
    url: "https://jsconf.es/"
  },
  {
    name: "Portal Inversionista",
    startDate: "2020-06-01",
    endDate: "2024-06-30",
    description: "",
    highlights: [],
    url: "https://portalinversionista.com/"
  }
] as Project[];

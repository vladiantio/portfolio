interface Skill {
  name: {
    en: string;
    es: string;
  };
  keywords: string[];
};

export default [
  {
    name: {
      en: "Programming",
      es: "Programación",
    },
    keywords: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "C#",
      "Python",
      "PHP",
      "SQL"
    ]
  },
  {
    name: {
      en: "Frameworks and Libraries",
      es: "Frameworks y Librerías",
    },
    keywords: [
      ".NET",
      "Angular",
      "Vue",
      "Bootstrap",
      "jQuery",
      "TailwindCSS",
      "React"
    ]
  },
  {
    name: {
      en: "Tools and Platforms",
      es: "Herramientas y Plataformas",
    },
    keywords: [
      "Git",
      "Linux",
      "Visual Studio Code",
      "Visual Studio",
      "Microsoft SQL Server",
      "MySQL",
      "Azure",
      "Azure DevOps",
      "GitHub",
      "Trello",
      "Postman",
      "WordPress"
    ]
  }
] as Skill[];

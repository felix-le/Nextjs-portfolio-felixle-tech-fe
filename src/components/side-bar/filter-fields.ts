import {FilterSection} from "./interface";

const filterFields: FilterSection[] = [
  {
    id: "frontend",
    name: "Front End",
    options: [
      {value: "JavaScript", label: "JavaScript"},
      {value: "TailwindCSS", label: "TailwindCSS"},
      {value: "Styled-components", label: "Styled-components"},
      {value: "TypeScript", label: "TypeScript"},
      {value: "NextJS", label: "NextJS"},
      {value: "React", label: "React"},
      {value: "Redux", label: "Redux"},
      {value: "useContext", label: "useContext"},
      {value: "APIs", label: "APIs"},
    ],
  },
  {
    id: "backend",
    name: "Back End",
    options: [
      {value: "ExpressJS", label: "ExpressJS"},
      {value: "Strapi", label: "Strapi"},
      {value: "Docker", label: "Docker"},
    ],
  },
  {
    id: "database",
    name: "Database",
    options: [
      {value: "Postgres", label: "Postgres"},
      {value: "GraphQL", label: "GraphQL"},
      {value: "Sqlite", label: "Sqlite"},
      {value: "MySQL", label: "MySQL"},
    ],
  },
  {
    id: "server",
    name: "Server",
    options: [
      {value: "Ubuntu", label: "Ubuntu"},
      {value: "ExpressJS", label: "ExpressJS"},
    ],
  },
  {
    id: "others",
    name: "Others",
    options: [
      {value: "PHP", label: "PHP"},
      {value: "React Native", label: "ReactNative"},
    ],
  },
];
export {filterFields};

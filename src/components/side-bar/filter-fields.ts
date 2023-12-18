import {FilterSection} from "./interface";

const filterFields: FilterSection[] = [
  {
    id: "frontend",
    name: "Front End",
    options: [
      {
        value: "JavaScript",
        label:
          "JavaScript, React, NextJS, TypeScript, RESTful API, Redux, Gatsby",
      },
      {value: "Shopify", label: "Shopify"},
      {value: "TailwindCSS", label: "TailwindCSS"},
    ],
  },
  {
    id: "backend",
    name: "Back End",
    options: [
      {value: "ExpressJS", label: "ExpressJS"},
      {value: "Strapi", label: "Strapi"},
    ],
  },
  {
    id: "database",
    name: "Database",
    options: [
      {value: "Postgres", label: "Postgres"},
      {value: "MySQL", label: "MySQL"},
    ],
  },
  {
    id: "server",
    name: "Server",
    options: [{value: "Ubuntu", label: "Ubuntu"}],
  },
  {
    id: "others",
    name: "Others",
    options: [
      {value: "WordPress", label: "WordPress"},
      {value: "React Native", label: "ReactNative"},
    ],
  },
];
export {filterFields};

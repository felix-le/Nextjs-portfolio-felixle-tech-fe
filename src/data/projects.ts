import {IProject} from "@modules/projects/types";
const projects: IProject[] = [];

for (let i = 1; i <= 6; i++) {
  const newProject = {
    id: i + 1,
    thumbnail: "",
    title: `Project ${i + 1}`,
    subTitle: `Sub title ${i + 1}`,
    description: `This is project number ${i + 1}`,
    clients: [`client ${i + 1}`, `client ${i + 2}`], // Fix the property name here
    organization: `organization ${i + 1}`,
    startDate: "2022-01",
    endDate: "2022-12",
    status: null,
    role: `role ${i + 1}`,
    teamSize: i + 1,
    technologies: {
      frontend: [`frontend ${i + 1}`, `frontend ${i + 2}`],
      backend: [`backend ${i + 1}`, `backend ${i + 2}`],
      database: [`database ${i + 1}`, `database ${i + 2}`],
      other: [`other ${i + 1}`, `other ${i + 2}`],
    },
    finalUrl: `https://www.project${i + 1}.com`,
    githubUrl: `https://www.github.com/project${i + 1}`,
    numberImage: 1,
  };

  projects.push(newProject);
}

export default projects;

import {IProjectPreview} from "inteface/product-type";

function sortProjects(projects: IProjectPreview[]): IProjectPreview[] {
  const highlightedProjects = projects.filter((project) => project.isHighlight);
  const otherProjects = projects.filter((project) => !project.isHighlight);

  highlightedProjects.sort((a, b) => {
    // If both have order_number defined, compare them
    if (a.order_number && b.order_number) {
      return a.order_number - b.order_number;
    }

    // If one has order_number defined and the other doesn't, prioritize the one with order_number
    if (a.order_number && !b.order_number) {
      return -1;
    } else if (a.order_number === null && b.order_number !== null) {
      return 1;
    }

    // If none have order_number defined, maintain their original order
    return 0;
  });

  // Combine the sorted highlighted projects with the other projects
  const sortedProjects: IProjectPreview[] =
    highlightedProjects.concat(otherProjects);

  return sortedProjects;
}

export {sortProjects};

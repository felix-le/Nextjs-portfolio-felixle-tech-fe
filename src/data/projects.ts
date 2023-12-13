const projects = [];

for (let i = 1; i <= 10; i++) {
  const newProject = {
    id: i + 1, // Incrementing the ID
    thumbnail: `thumbnail_${i}.jpg`, // Assuming you have image files named thumbnail_1.jpg, thumbnail_2.jpg, etc.
    title: `Project ${i + 1}`, // Changing the title
    subTitle: `Sub title ${i + 1}`, // Changing the subtitle
    description: `This is project number ${i + 1}`, // Changing the description
    clents: [`client ${i + 1}`, `client ${i + 2}`], // Modifying clients
    organization: `organization ${i + 1}`, // Changing the organization
    startDate: "2022-01-01", // Changing the start date
    endDate: "2022-12-31", // Changing the end date
    status:
      i % 3 === 0
        ? "live"
        : i % 2 === 0
        ? "pending"
        : i % 5 === 0
        ? "working"
        : "chatGPT write more", // Changing the status
    role: `role ${i + 1}`, // Changing the role
    teamSize: i + 1, // Modifying the team size
    technologies: {
      frontend: [`frontend ${i + 1}`, `frontend ${i + 2}`],
      backend: [`backend ${i + 1}`, `backend ${i + 2}`],
      database: [`database ${i + 1}`, `database ${i + 2}`],
      other: [`other ${i + 1}`, `other ${i + 2}`],
    },
    finalUrl: `https://www.project${i + 1}.com`, // Changing the final URL
    githubUrl: `https://www.github.com/project${i + 1}`, // Changing the GitHub URL
    numberImage: i + 1, // Modifying the number of images
  };

  projects.push(newProject);
}

export default projects;

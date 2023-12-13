import React from "react";
import ProjectPreview from "@modules/projects/components/project-preview";
import projects from "@data/projects";
const Projects = () => {
  return (
    <>
      <div className=" h-full transition-all duration-75 ease-out pr-4 pb-8 pl-8 overflow-auto bo shadow-md lg:shadow-xl flex flex-col bg-opacity-8 bg-blue-700 p-8 rounded-md">
        <div className="h-[calc(100% - 50px)]">
          {/* map projects and use ProjectPreview */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 h-full">
            {projects.map((project: any) => (
              <li key={project.id} className="bg-white">
                <ProjectPreview
                  thumbnail={project.thumbnail}
                  title={project.title}
                  subTitle={project.subTitle}
                  endDate={project.endDate}
                  status={project.status}
                  technologies={project.technologies}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;

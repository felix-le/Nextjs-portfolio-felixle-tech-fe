import React from "react";
import SearchFn from "@modules/searchFn";
// import Card from "@components/card";
import projects from "@data/projects";
import ProjectPreview from "@modules/projects/components/project-preview";

const index = () => {
  return (
    <>
      <div className="lg:hidden">
        <SearchFn />
      </div>
      <div className=" h-[calc(100% - 50px)]">
        {/* map projects and use ProjectPreview */}
        <ul className="grid grid-cols-2  gap-x-4 gap-y-8 h-full">
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
    </>
  );
};

export default index;

"use client";
import React, {useEffect, useState} from "react";
import SearchFn from "@modules/searchFn";
import ProjectPreview from "@modules/projects/components/project-preview";
import api, {apiAll} from "@services/api";
const index = () => {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const projects = await api("projects-plural", "populate=*").then(
      (res) => res.data,
    );
    const newProjects = projects.map((project: any) => ({
      id: project.id,
      ...project?.attributes,
    }));

    return newProjects;
  };
  useEffect(() => {
    fetchProjects().then((res) => setProjects(res));
  }, []);
  const displayProjects = projects.map((project: any) => {
    const newObj = {
      ...project,
      thumbnail: project.thumbnail.data.attributes,
      media: project.media.data,
    };
    return newObj;
  });

  console.log(displayProjects);

  return (
    <>
      {/* <div className="lg:hidden">
        <SearchFn />
      </div> */}
      <div className=" h-[calc(100% - 50px)]">
        {/* map projects and use ProjectPreview */}
        <ul className="grid grid-cols-4  gap-x-4 gap-y-8 h-full">
          {displayProjects.map((project: any) => (
            <li
              key={project.id}
              className="bg-white flex justify-center items-center"
            >
              <ProjectPreview
                thumbnail={project.thumbnail}
                title={project.title}
                // subTitle={project.subtitle}
                endDate={project.endDate}
                status={project.status}
                technologies={project.tech}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default index;

// export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
//   res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=10, stale-while-revalidate=59",
//   );
//   const projectsData = await api("projects-plural");
//   console.log(projectsData);
//   return {
//     props: {
//       projectsData: projectsData,
//     },
//   };
// };

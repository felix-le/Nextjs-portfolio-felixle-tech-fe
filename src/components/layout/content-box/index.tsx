"use client";
import React, {useEffect, useState} from "react";
// import SearchFn from "@modules/searchFn";
import ProjectPreview from "@modules/projects/components/project-preview";
import api from "@services/api";
import {sortProjects} from "@modules/projects/components/project-preview/project-sort";
import usePaginationParams from "@lib/hooks/use-pagination-params";
import Pagination from "@modules/common/pagination";

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
  const displayProjects = sortProjects(
    projects.map((project: any) => {
      const newObj = {
        ...project,
        thumbnail: project.thumbnail.data.attributes,
        media: project.media.data,
      };
      return newObj;
    }),
  );

  let currentPath = "";
  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }

  const {currentPage, rowsPerPage, handleChangePage} = usePaginationParams(
    displayProjects?.length,
    currentPath,
  );

  return (
    <>
      <div className=" h-[calc(100% - 50px)]">
        <ul className="grid lg:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8 h-full">
          {displayProjects
            .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
            .map((project: any) => {
              const isHighlighted = project.isHighlight;
              return (
                <li
                  key={project.id}
                  className={`bg-white flex justify-center items-center hover:opacity-70 hover:shadow-2xl transition-all duration-75 ease-out ${
                    isHighlighted ? "border-2 border-primary" : ""
                  }`}
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
              );
            })}
        </ul>
      </div>
      <Pagination
        totalItems={displayProjects?.length}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        customClass="absolute bottom-1 left-0 right-0 bg-[#F0F0F3] px-8 z-10"
      />
    </>
  );
};

export default index;

"use client";
import React, {useEffect, useState, useContext, use} from "react";
// import SearchFn from "@modules/searchFn";
import ProjectPreview from "@modules/projects/components/project-preview";
import {sortProjects} from "@modules/projects/components/project-sort/project-sort";
// import usePaginationParams from "@lib/hooks/use-pagination-params";
// import Pagination from "@modules/common/pagination";
import {ProductContext} from "@lib/context/product-context";
import {filterProjects} from "@modules/projects/components/project-sort/";
import {FilterContext} from "@lib/context/filer-context";

const index = () => {
  const {projectData} = useContext(ProductContext);
  const {flattenedArray} = useContext(FilterContext);
  const displayProjects = filterProjects(projectData, flattenedArray);

  let currentPath = "";
  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }

  // const {currentPage, rowsPerPage, handleChangePage} = usePaginationParams(
  //   displayProjects?.length,
  //   currentPath,
  // );

  return (
    <>
      <div className=" h-[calc(100% - 50px)]">
        <ul className="grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-8 h-full">
          {sortProjects(displayProjects)
            // .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
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
      {/* <Pagination
        totalItems={displayProjects?.length}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        customClass="absolute bottom-1 left-0 right-0 bg-[#F0F0F3] px-8 z-10"
      /> */}
    </>
  );
};

export default index;

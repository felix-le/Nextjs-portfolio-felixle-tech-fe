"use client";
import React, {useEffect, useState, createContext} from "react";
import {IProjectPreview} from "inteface/product-type";
import api from "@services/api";

export const ProductContext = createContext({} as any);

export const ProductProvider = React.memo(({children}: any) => {
  const [projectData, setProjectData] = useState([]);
  const fetchProjects = async () => {
    const projects = await api("projects-plural", "populate=*").then(
      (res) => res.data,
    );
    const newProjects = projects
      .map((project: any) => ({
        id: project.id,
        ...project?.attributes,
      }))
      .map((project: any) => {
        const newObj = {
          ...project,
          thumbnail: project.thumbnail.data.attributes,
          media: project.media.data,
        };
        return newObj;
      });
    setProjectData(newProjects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  const projectValue = {
    projectData,
  };

  return (
    <ProductContext.Provider value={projectValue}>
      {children}
    </ProductContext.Provider>
  );
});

"use client";
import React from "react";
import {IProjectPreview} from "inteface/product-type";
import Thumbnail from "../thumbnail";
import defaultThumbnail from "@images/default-thumbnail.png";
import dynamic from "next/dynamic";
import Status from "@modules/projects/components/project-preview/status";
import ProjectInfo from "@modules/projects/components/project-preview/project-info";
import ProjectDetail from "@modules/projects/components/project-detail";
const ProjectModal = dynamic(
  () => import("@modules/projects/components/project-modal"),
  {
    ssr: false,
  },
);

const ProjectPreview = ({
  thumbnail,
  title,
  status,
  technologies,
  projectId,
}: IProjectPreview) => {
  const displayThumbnail = thumbnail || defaultThumbnail;
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button className="cursor-pointer h-full" onClick={openModal}>
        <div className="font-normal block p-[25px]  cursor-pointer  relative h-full">
          <div className="group">
            <div className="flex flex-col justify-between">
              <div className="w-[280px] h-[333] flex flex-col justify-center items-center">
                <Thumbnail thumbnail={displayThumbnail} size="full" />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-bold text-blue uppercase w-full text-center font-display min-h-[36px] tracking-widest  ">
                  {title}
                </h3>
                <div className="mt-3 text-sm w-full font-thin hover:text-secondary flex flex-col justify-between">
                  <Status status={status || null} />
                  <ProjectInfo
                    frontend={technologies?.frontend}
                    backend={technologies?.backend}
                    database={technologies?.database}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>

      <ProjectModal
        show={isModalOpen}
        handleShow={closeModal}
        className=""
        // modalTitle="Your Modal Title"
      >
        <ProjectDetail projectId={projectId} />
      </ProjectModal>
    </>
  );
};

export default ProjectPreview;

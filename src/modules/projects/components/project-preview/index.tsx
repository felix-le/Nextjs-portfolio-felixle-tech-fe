"use client";
import React from "react";
import {IProjectPreview} from "@modules/projects/types";
import Thumbnail from "../thumbnail";
import defaultThumbnail from "@images/default-thumbnail.png";
import dynamic from "next/dynamic";

const ProjectModal = dynamic(
  () => import("@modules/projects/components/project-modal"),
  {
    ssr: false,
  },
);

const ProjectPreview = ({
  thumbnail,
  title,
  subTitle,
  endDate,
  status,
  technologies,
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
      <button className="cursor-pointer" onClick={openModal}>
        <div className="font-normal block p-[25px]  cursor-pointer  relative h-full">
          <div className="group">
            <div className="flex flex-col">
              <div className="w-full">
                <Thumbnail thumbnail={displayThumbnail} size="full" />
              </div>
              <div className="mt-4">
                <h3 className="text-sm uppercase w-full text-center font-display font-normal tracking-widest text-secondary">
                  {title}
                </h3>
                <div className="mt-3 text-sm w-full font-thin text-center hover:text-black flex items-center justify-center flex-col">
                  <p>{subTitle}</p>
                  <p>{endDate}</p>
                  <p>{status}</p>
                  <p>{technologies?.frontend}</p>
                  <p>{technologies?.backend}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>

      <ProjectModal
        show={isModalOpen}
        handleShow={closeModal}
        className="your-custom-class"
        modalTitle="Your Modal Title"
      >
        <h1>hello</h1>
      </ProjectModal>
    </>
  );
};

export default ProjectPreview;

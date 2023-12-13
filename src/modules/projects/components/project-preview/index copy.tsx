"use client";
import React, {useState} from "react";
import {IProjectPreview} from "@modules/projects/types";
import Thumbnail from "../thumbnail";
import defaultThumbnail from "@images/default-thumbnail.png";
import Modal from "@modules/common/modal";
import ProjectTemplate from "@modules/projects/templates";
import {useToggleState} from "@lib/hooks/use-toggle-state";

const ProjectPreview = ({
  thumbnail,
  title,
  subTitle,
  endDate,
  status,
  technologies,
}: IProjectPreview) => {
  const displayThumbnail = thumbnail || defaultThumbnail;
  const {state, close, open} = useToggleState();

  return (
    <>
      <button className="cursor-pointer" onClick={open}>
        <div className="font-normal block p-[25px] cursor-pointer  relative h-full">
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
      {/* <Modal isOpen={state} close={close} size="large">
        <ProjectTemplate />
      </Modal> */}
    </>
  );
};

export default ProjectPreview;

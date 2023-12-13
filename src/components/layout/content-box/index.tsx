import React from "react";
import Projects from "@modules/projects";

const index = () => {
  return (
    <>
      <Projects />
      <div className=" absolute bottom-0 flex justify-end items-center max-h-[80px] h-full w-full">
        pagination
      </div>
    </>
  );
};

export default index;

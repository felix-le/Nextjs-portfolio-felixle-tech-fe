import React from "react";

interface IProjectInfoProps {
  title: string;
  subtitle?: string;
  role: string;
  description?: string;
  tech?: any;
  clients?: string;
  organization?: string;
  githubUrl?: string;
  productionUrl?: string;
}

const ProjectInfo = ({
  title,
  role,
  subtitle,
  description,
  tech,
  clients,
  organization,
  githubUrl,
  productionUrl,
}: IProjectInfoProps) => {
  return (
    <div className="">
      <h2 className="text-primary text-2xl font-bold text-center mb-4">
        {title}
      </h2>
      <p className="font-bold text-center">{role}</p>
    </div>
  );
};

export default ProjectInfo;

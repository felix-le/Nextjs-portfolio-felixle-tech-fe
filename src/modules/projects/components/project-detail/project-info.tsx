import React from "react";

interface IProjectInfoProps {
  title: string;
  subtitle: string;
  role: string;
  description: string;
  tech: any;
  clients: string;
  organization: string;
  githubUrl: string;
  productionUrl: string;
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
    <div>
      <h2 className="text-primary text-3xl font-bold">{title}</h2>
      {/* <h3 className="text-primary text-xl font-bold">{subtitle}</h3> */}
      {/* <p className="text-primary text-sm font-bold">{role}</p> */}
      {/* description */}
      {/* <p className="text-primary text-sm font-bold">{description}</p> */}
      {/* tech */}
      {/* <p className="text-primary text-sm font-bold">{tech}</p> */}
      {/* clients */}
      {/* <p className="text-primary text-sm font-bold">{clients}</p> */}
      {/* organization */}
      {/* <p className="text-primary text-sm font-bold">{organization}</p> */}
      {/* githubUrl */}
      {/* <p className="text-primary text-sm font-bold">{githubUrl}</p> */}
      {/* productionUrl */}
      {/* <p className="text-primary text-sm font-bold">{productionUrl}</p> */}
    </div>
  );
};

export default ProjectInfo;

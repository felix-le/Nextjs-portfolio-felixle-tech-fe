"use client";
import React, {useContext} from "react";
import {ProductContext} from "@lib/context/product-context";
import HeroBanner from "./hero-banner";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface IProjectDetailProps {
  projectId: number | string;
}

const Index: React.FC<IProjectDetailProps> = ({projectId = 1}) => {
  const {projectData} = useContext(ProductContext);
  const project = projectData.find(
    (project: {id: string | number}) => project.id === projectId,
  );

  const {
    media,
    title,
    clients,
    description,
    githubUrl,
    organization,
    productionUrl,
    role,
    subtitle,
    tech,
  } = project;
  const mediaModify = media?.map(
    (item: {[x: string]: any; attributes: any}) => {
      // Destructure the attributes property
      const {attributes, ...rest} = item;

      // Merge attributes with the rest of the properties
      return {...attributes, ...rest};
    },
  );

  return (
    <>
      <div className="product__detail_wrapper">
        <HeroBanner images={mediaModify} />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-base font-bold">{subtitle}</p>
        <p className=" text-sm font-bold">{role}</p>
        <BlocksRenderer content={description} />
        {/* <p className=" text-sm font-bold">{tech}</p> */}
        <p className=" text-sm font-bold">{clients}</p>
        <p className=" text-sm font-bold">{organization}</p>
        <p className=" text-sm font-bold">{githubUrl}</p>
        <p className=" text-sm font-bold">{productionUrl}</p>
      </div>
    </>
  );
};

export default Index;

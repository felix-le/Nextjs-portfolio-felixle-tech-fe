"use client";
import React, {useContext} from "react";
import {ProductContext} from "@lib/context/product-context";
import HeroBanner from "./hero-banner";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Tech from "./tech";
import ProjectInfo from "./project-info";
import LinkClients from "./link-clients";
import BuyMeBtn from "@modules/common/btns/buy-me";
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
      <div className="container">
        <HeroBanner images={mediaModify} />
        <div className="product__detail_wrapper p-16">
          <ProjectInfo title={title} role={role} />

          <BuyMeBtn />
          <Tech
            frontend={tech.frontend}
            backend={tech.backend}
            others={tech.others}
            database={tech.database}
          />
          <LinkClients
            productionUrl={productionUrl}
            clients={clients}
            organization={organization}
            githubUrl={githubUrl}
          />
          {subtitle && (
            <>
              <h3 className="text-primary text-xl my-6 font-bold">
                What I did:
              </h3>
              <p>{subtitle}</p>
            </>
          )}
          {description && (
            <div className="product_detail_block_render leading-8">
              <h3 className="text-primary text-xl my-6">More details</h3>
              <BlocksRenderer content={description} />
            </div>
          )}
        </div>
        <div className="text-center">
          <BuyMeBtn />
        </div>
      </div>
    </>
  );
};

export default Index;

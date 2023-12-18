import React from "react";

interface ILinkClientsProps {
  clients?: string;
  organization?: string;
  githubUrl?: string;
  productionUrl?: string;
}

const LinkClients = ({
  productionUrl,
  clients,
  organization,
  githubUrl,
}: ILinkClientsProps) => {
  return (
    <div className="">
      <h3 className="text-primary text-xl font-bold mb-4">
        Client Information
      </h3>
      <ul className="list-disc flex flex-wrap">
        {productionUrl && (
          <li className="w-[45%]">
            <p className="leading-8 ">
              <strong>Production Link: </strong>{" "}
              <a className="text-blue" href={productionUrl} target="_blank">
                {productionUrl}
              </a>
            </p>
          </li>
        )}
        {githubUrl && (
          <li className="w-[45%]">
            <p className="leading-8">
              <strong>Github Link: </strong> {githubUrl}
            </p>
          </li>
        )}
        {clients && (
          <li className="w-[45%]">
            <p className="leading-8">
              <strong>Clients: </strong> {clients}
            </p>
          </li>
        )}
        {organization && (
          <li className="w-[45%]">
            <p className="leading-8">
              <strong>Organization: </strong> {organization}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default LinkClients;

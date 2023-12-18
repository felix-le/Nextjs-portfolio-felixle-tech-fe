import React from "react";

interface ITechProps {
  frontend?: string;
  backend?: string;
  others?: string;
  database?: string;
}

const Tech = ({frontend, backend, others, database}: ITechProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-primary text-xl font-bold mb-4">Tech</h3>
      <ul className="list-disc flex flex-wrap">
        {frontend && (
          <li className="w-[40%]">
            <p className="leading-8">
              <strong>Front-End: </strong> {frontend}
            </p>
          </li>
        )}
        {backend && (
          <li className="w-[40%]">
            <p className="leading-8">
              <strong>Back-End: </strong> {backend}
            </p>
          </li>
        )}
        {others && (
          <li className="w-[40%]">
            <p className="leading-8">
              <strong>Others: </strong> {others}
            </p>
          </li>
        )}
        {database && (
          <li className="w-[40%]">
            <p className="leading-8">
              <strong>Database: </strong> {database}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Tech;

// components/Status.tsx
import React from "react";

export type IInfo = {
  frontend?: string | null;
  backend?: string | null;
  database?: string | null;
};

const Status: React.FC<IInfo> = ({frontend, backend, database}) => {
  return (
    <ul className="flex flex-col list-disc mt-3">
      {frontend && (
        <li className="text-left text-sm mb-2">
          <span className="font-bold">Front-end: </span> {frontend}
        </li>
      )}
      <li className="text-left text-sm mb-2">
        <span className="font-bold">Back-end: </span>
        {backend}
      </li>
      <li className="text-left text-sm mb-2">
        <span className="font-bold">Database: </span>
        {database}
      </li>
    </ul>
  );
};

export default Status;

// components/Status.tsx
import React from "react";

export type StatusProps = {
  status: "Active" | "Pending" | "On Going" | null;
};

const Status: React.FC<StatusProps> = ({status}) => {
  let colorClass = "";

  switch (status) {
    case "Active":
      colorClass = "text-primary";
      break;
    case "Pending":
      colorClass = "text-gray-500";
      break;
    case "On Going":
      colorClass = "text-red";
      break;
    default:
      break;
  }

  return (
    <span className={`px-2 py-1 rounded ${colorClass} font-bold `}>
      {status}
    </span>
  );
};

export default Status;

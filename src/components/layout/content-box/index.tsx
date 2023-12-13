import React from "react";
import SearchFn from "@modules/searchFn";
import Card from "@components/card";
const index = () => {
  return (
    <>
      <div className="lg:hidden">
        <SearchFn />
      </div>
      <div className="">
        <h1>display projects here</h1>
        <Card />
      </div>
    </>
  );
};

export default index;

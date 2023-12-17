"use client";
import React, {useContext} from "react";
import SideBar from "@components/side-bar";
import Content from "@components/layout/content-box";
import {FilterContext} from "@lib/context/filer-context";
import {PlusIcon} from "@heroicons/react/24/outline";
export default function Home() {
  const {setMobileFiltersOpen} = useContext(FilterContext);
  return (
    <>
      <div className="container h-full">
        <div className="flex mt-12 h-full">
          <div className="mr-10 lg:max-w-[10%] w-full hidden lg:block">
            <SideBar />
          </div>
          <div className="lg:max-w-[90%] w-full h-full">
            <h2 className="text-primary lg:mb-4 text-lg font-bold">Projects</h2>
            <button
              type="button"
              className="inline-flex items-center mb-4 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="text-sm font-medium text-gray-700 text-secondary">
                Filter
              </span>
              <PlusIcon
                className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </button>
            <div className=" w-full bg-[#13214A13] h-full relative py-8">
              <div className=" h-full transition-all  duration-75 ease-out px-8 py-0  overflow-auto flex flex-col bg-opacity-8 bg-blue-700 rounded-md">
                <Content />
              </div>
              {/* <div className="h-[80px] relative bottom-0">&nbsp;</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

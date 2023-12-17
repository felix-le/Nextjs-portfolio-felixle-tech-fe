"use client";
import React, {useState, createContext} from "react";

export const FilterContext = createContext({} as any);
interface Technologies {
  backend?: string[];
  frontend?: string[];
  database?: string[];
  others?: string[];
}

function flattenArrays(obj: Technologies): string[] {
  return Object.values(obj).flat();
}

export const FilterProvider = React.memo(({children}: any) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filterOpts, setFilterOpts] = useState<any>({});

  const handleCheckboxChange = (sectionId: string, optionValue: string) => {
    const newSelectedOptions = {...filterOpts};
    if (newSelectedOptions[sectionId]) {
      if (newSelectedOptions[sectionId].includes(optionValue)) {
        newSelectedOptions[sectionId] = newSelectedOptions[sectionId].filter(
          (value: string) => value !== optionValue,
        );
      } else {
        newSelectedOptions[sectionId].push(optionValue);
      }
    } else {
      newSelectedOptions[sectionId] = [optionValue];
    }
    setFilterOpts(newSelectedOptions);
  };
  const flattenedArray: string[] = flattenArrays(filterOpts).map((filterTag) =>
    filterTag.trim().toLowerCase(),
  );

  const filterValue = {
    mobileFiltersOpen,
    setMobileFiltersOpen,
    filterOpts,
    flattenedArray,
    handleCheckboxChange,
  };

  return (
    <FilterContext.Provider value={filterValue}>
      {children}
    </FilterContext.Provider>
  );
});

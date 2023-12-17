import {IProjectPreview} from "@inteface/product-type";

function filterProjects(
  sourceArray: IProjectPreview[],
  filterArray?: string[],
): IProjectPreview[] {
  const normalizedFilterArray = filterArray
    ? filterArray.map((filterTag) => filterTag.trim().toLowerCase())
    : undefined;

  const filteredProjects = sourceArray
    .map((item) => {
      if (!normalizedFilterArray?.length) return item;
      if (!item.tags) {
        return;
      }

      const tags = item.tags
        .toLowerCase()
        .split(", ")
        .map((tag) => tag.toLowerCase());

      const isMatch = normalizedFilterArray?.every((filter) =>
        tags.includes(filter),
      );

      if (isMatch) {
        return item;
      }
    })
    .filter((item) => item !== undefined);

  return filteredProjects as IProjectPreview[];
}

export {filterProjects};

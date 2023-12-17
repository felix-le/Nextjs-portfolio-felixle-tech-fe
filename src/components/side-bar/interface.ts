interface FilterOption {
  value: string;
  label: string;
}

interface FilterSection {
  id: string;
  name: string;
  options: FilterOption[];
}

export type {FilterOption, FilterSection};

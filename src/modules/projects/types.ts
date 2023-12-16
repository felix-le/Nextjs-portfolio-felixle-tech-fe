export interface IProjectPreview {
  thumbnail?: string | null;
  title: string;
  subTitle?: string;
  endDate?: Date | string;
  status: "Active" | "Pending" | "On Going" | null;
  technologies: {
    frontend: string | null;
    backend: string | null;
    database: string | null;
    other?: string | null;
  } | null;
  isHighlight?: boolean;
  order_number?: number;
}

export interface IProject extends IProjectPreview {
  id: number;
  description: string;
  clients: Array<string>;
  organization: string;
  startDate?: Date | string;
  role: string;
  teamSize: number;
  finalUrl: string;
  githubUrl: string;
  numberImage: number | null;
}

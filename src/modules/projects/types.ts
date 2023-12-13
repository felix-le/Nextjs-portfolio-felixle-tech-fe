export interface IProjectPreview {
  thumbnail?: string | null;
  title: string;
  subTitle: string;
  endDate: string;
  status: "live" | "pending" | "working" | null;
  technologies: {
    frontend: Array<string> | null;
    backend: Array<string> | null;
    database: Array<string> | null;
    other?: Array<string> | null;
  } | null;
}

export interface IProject extends IProjectPreview {
  id: number;
  description: string;
  clients: Array<string>;
  organization: string;
  startDate: string;
  role: string;
  teamSize: number;
  finalUrl: string;
  githubUrl: string;
  numberImage: number | null;
}

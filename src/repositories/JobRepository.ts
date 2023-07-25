
export interface JobProps {
  title: string;
  companyId: number;
  jobQuantity: number;
  stacks: string;
}

export interface JobRepository {
  create: (data: JobProps) => Promise<JobProps | {}>;
  getAll: () => Promise<JobProps[] | {}>
}
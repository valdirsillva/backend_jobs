import { PrismaJobRepository } from "../repositories/prisma/PrismaJobRepository";

export interface JobProps {
  title: string;
  stacks: string;
  companyId: number;
  jobQuantity: number;
}

export class JobModel {
  private props: JobProps;
  private repositoryJobs: PrismaJobRepository;

  constructor(props: JobProps) {
    this.repositoryJobs = new PrismaJobRepository()

    this.props = { ...props }
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public set stacks(stacks: string) {
    this.props.stacks = stacks;
  } 

  public set companyId(companyId: number) {
    this.props.companyId = companyId;
  }

  public set jobQuantity(jobQuantity: number) {
    this.props.jobQuantity = jobQuantity;
  }

  public get title() {
    return this.props.title;
  }

  public get stacks() {
    return this.props.stacks;
  } 

  public get companyId() {
    return this.props.companyId;
  }

  public get jobQuantity() {
    return this.props.jobQuantity;
  }

  public save(data: JobProps) {
    return this.repositoryJobs.create(data)
  }
  public getJobs() {
    return this.repositoryJobs.getAll()
  }
}
import { JobViewModel } from "../viewmodel/JobViewModel";

export class JobView {
  private jobViewModel: JobViewModel;

  constructor(jobViewModel: JobViewModel) {
      this.jobViewModel = jobViewModel;
  }

  public async get(request: any, reply: any) {
      const companies = await this.jobViewModel.get()
      reply.code(200).send(companies)
  }

  public async create(request: any, reply: any) {
      const body = request.body
      const data = await this.jobViewModel.create(body)
      reply.code(201).send(data)
  }
}
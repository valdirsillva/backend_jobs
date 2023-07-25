import { prisma } from "../../views/lib/prisma";
import { JobProps, JobRepository } from "../JobRepository";

export class PrismaJobRepository implements JobRepository {
  async create(data: JobProps): Promise<JobProps | {} > {    
    const job = await prisma.job.create({
      data: {
        title:  data.title,
        company: {
          connect: {
            id: data.companyId
          },
        },
        
        jobQuantity: data.jobQuantity,
        stacks: data.stacks,
      },

    })
    return job
  }

  async getAll() {
    const jobs = await prisma.job.findMany()
    return { jobs: jobs }
  }
}
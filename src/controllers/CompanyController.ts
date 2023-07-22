import { Company } from "../repositories/CompanyRepository";
import { PrismaCompanyRepository } from "../repositories/prisma/PrismaCompanyRepository";

export class CompanyController {
  private repositoryCompany: PrismaCompanyRepository;

  constructor(repositoryCompany: PrismaCompanyRepository) {
    this.repositoryCompany = repositoryCompany;
  }

  public async get() {
    try {
      const allCompenies = await this.repositoryCompany.getAll()
      return allCompenies
    } catch (error) {
      console.log(error)
    }
  }

  public async create(data: Company) {
    try {
      await this.repositoryCompany.checkCnpj(data)

      const newCompany = await this.repositoryCompany.create({ ...data })
      return newCompany
    } catch (error) {
      console.log(error)
      return error
    }
  }
}



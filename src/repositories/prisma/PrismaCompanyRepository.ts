import { prisma } from "../../lib/prisma";
import { Company, CompanyRepository } from "../CompanyRepository";

export class PrismaCompanyRepository implements CompanyRepository {
  async checkCnpj(data: Company) {
    const result = await prisma.company.findUnique({
      where: {
        cnpj: data.cnpj
      },
      select: {
        cnpj: true
      },
    })

    if (result?.cnpj != null) {
      throw new Error("O CNPJ informado já está vinculado a uma outra empresa")
    }
  }

  async getAll(): Promise<Company[] | {}> {
    const companies = await prisma.company.findMany()
    return { companies: companies }
  }

  async create(data: Company): Promise<Company | {}> {
    const result = await prisma.company.create({
      data: {
        name: data.name,
        cnpj: data.cnpj,
        quantityEmployee: data.quantityEmployee,
        email: data.email,
        cep: data.cep,
        phone: data.phone,
        city: data.city,
        road: data.road,
        state: data.state,
      },
    });
    return result;
  }
}

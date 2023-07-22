import { describe, it, expect } from '@jest/globals'
import { CompanyView } from '../views/CompanyView'
import { CompanyController } from './CompanyController'
import { PrismaCompanyRepository } from '../repositories/prisma/PrismaCompanyRepository'
import Fastify from 'fastify';

describe('Register company', () => {


  /**
   * Deve ser capaz de cadastrar uma nova empresa
   */
  it('should be able to create new company', async () => {
    const app = Fastify({
      logger: false
    })


    const repository = new PrismaCompanyRepository()
    const controller = new CompanyController(repository)

    const company = {
      "name": "GRUPO TECH TED",
      "quantityEmployee": "20",
      "email": "grupotected@com.br",
      "cep": "08022450",
      "phone": "21 97467-9010",
      "city": "Sao Paulo",
      "road": "Rua Doze de julho",
      "state": "SP",
      "cnpj": "0018166018"
    }

    const newCompany = await controller.create(company)

    expect(company).not.toBeNull()
  })

  // it('Object has contain todo params', async () => {
  //   //  console.log(company)
  //   // expect(company).not.toBeNull()
  // })
})
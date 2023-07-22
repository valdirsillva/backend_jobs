import { FastifyInstance } from 'fastify';
import { CompanyController } from "../controllers/CompanyController";
import { CompanyView } from '../views/CompanyView';
import { PrismaCompanyRepository } from '../repositories/prisma/PrismaCompanyRepository';

export async function routes(app: FastifyInstance) {
  const repository = new PrismaCompanyRepository()
  const controller = new CompanyController(repository)
  const view = new CompanyView(controller)

  app.get('/companies', view.get.bind(view))
  app.post('/create', view.create.bind(view))
}

import { FastifyInstance } from 'fastify';
import { CompanyViewModel } from "../../viewmodel/CompanyViewModel";
import { CompanyView } from '../CompanyView';
import { CompanyModel } from '../../models/Company';

export async function routes(app: FastifyInstance) {
  const instanceCompany = {
    name: '',
    cnpj: '',
    quantityEmployee: '',
    email: '',
    cep: '',
    phone: '',
    city: '',
    road: '',
    state: ''    
  }

  const repository = new CompanyModel(instanceCompany)
  const controller = new CompanyViewModel(repository)
  const view = new CompanyView(controller)

  app.get('/companies', view.get.bind(view))
  app.post('/create', view.create.bind(view))
}

import { FastifyInstance } from 'fastify';
import { JobModel } from '../../models/Job';
import { CompanyModel } from '../../models/Company';
import { JobViewModel } from '../../viewmodel/JobViewModel';
import { CompanyView } from '../CompanyView';
import { JobView } from '../../views/JobView'
import { CompanyViewModel } from "../../viewmodel/CompanyViewModel";

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

  const instanceJob = {
    title: '',
    companyId: 0,
    jobQuantity: 0,
    stacks: '',
  }
  const companyModel = new CompanyModel(instanceCompany) 
  const controllerCompany = new CompanyViewModel(companyModel)
  const viewCompany = new CompanyView(controllerCompany)

  const jobModel = new JobModel(instanceJob)
  const controllerJob = new JobViewModel(jobModel)
  const viewJob = new JobView(controllerJob)

  app.get('/companies', viewCompany.get.bind(viewCompany))
  app.post('/companies/create', viewCompany.create.bind(viewCompany))

  app.post('/job/create', viewJob.create.bind(viewJob))
}

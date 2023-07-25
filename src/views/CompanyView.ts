import { CompanyViewModel } from "../viewmodel/CompanyViewModel";

export class CompanyView {
    private companyViewModel: CompanyViewModel;

    constructor(companyViewModel: CompanyViewModel) {
        this.companyViewModel = companyViewModel;
    }

    public async get(request: any, reply: any) {
        const companies = await this.companyViewModel.get()
        reply.code(200).send(companies)
    }

    public async create(request: any, reply: any) {
        const body = request.body
        const data = await this.companyViewModel.create(body)
        reply.code(201).send(data)
    }
}
import { CompanyController } from "../controllers/CompanyController";

export class CompanyView {
    private companyView: CompanyController;

    constructor(companyView: CompanyController) {
        this.companyView = companyView;
    }

    public async get(request: any, reply: any) {
        const companies = await this.companyView.get()
        reply.code(200).send(companies)
    }

    public async create(request: any, reply: any) {
        const body = request.body
        const data = await this.companyView.create(body)
        reply.code(201).send(data)
    }
}
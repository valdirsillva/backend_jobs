
export interface Company {
  name: string;
  cnpj: string;
  quantityEmployee: string;
  email: string;
  cep: string;
  phone: string;
  city: string;
  road: string;
  state: string
}

export interface CompanyRepository {
  create: (data: Company) => Promise<Company | {}>;
  getAll: () => Promise<Company[] | {}>
}
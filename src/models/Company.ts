import { PrismaCompanyRepository } from "../repositories/prisma/PrismaCompanyRepository";

export interface CompanyProps {
  name: string;
  quantityEmployee: string;
  email: string;
  cep: string;
  phone: string;
  city: string;
  road: string;
  state: string;
  cnpj: string;
}

export class CompanyModel {
  
  private repositoryCompany: PrismaCompanyRepository;

  constructor(props: CompanyProps) {
    this.repositoryCompany = new PrismaCompanyRepository()
  }

  public set name(name: string) {
    this.name = name
  }

  public set quantityEmployee(quantityEmployee: string) {
    this.quantityEmployee = quantityEmployee;
  }

  public set email(email: string) {
    this.email = email;
  }

  public set cep(cep: string){
    this.cep = cep;
  }

  public set phone(phone: string){
    this.phone = phone;
  }

  public set city(city: string){
    this.city = city;
  }

  public set state(state: string){
    this.state = state;
  }

  public set road(road: string){
    this.road = road;
  }

  public set cnpj(cnpj: string){
    this.cnpj = cnpj;
  }

  public get name(): string {
    return this.name;
  }

  public get quantityEmployee(): string | number {
    return this.quantityEmployee;
  }

  public get email() {
    return this.email;
  } 

  public get cep(){
   return this.cep;
  }

  public get phone(){
    return this.phone;
  }

  public get city(){
    return this.city;
  }

  public get state(){
    return this.state;
  }

  public get road(){
    return this.road;
  }

  public get cnpj(){
    return this.cnpj;
  }

  public save(data: CompanyProps) {
    return this.repositoryCompany.create(data);
  }

  public getCompanies() {
    return this.repositoryCompany.getAll();
  }
}
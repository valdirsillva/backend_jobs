import { UserViewModel } from "../viewmodel/UserViewModel";

export class UserView {
    private userViewModel: UserViewModel;

    constructor(userViewModel: UserViewModel) {
        this.userViewModel = userViewModel;
    }

    public async get(request: any, reply: any) {
        try {
            const companies = await this.userViewModel.get();
            reply.code(200).send(companies);
        } catch (err) {
            console.error(err);
            reply.code(400).send({ message: "Ops! Não foi possível listar usuários!" });
        }
    }

    public async create(request: any, reply: any) {
        try {
            const body = request.body;
            const data = await this.userViewModel.create(body);
            reply.code(201).send(data);
        } catch (err) {
            console.error(err);
            reply.code(400).send({ message: "Ops! Falha ao cadastrar usuário!" });
        }
    }
}
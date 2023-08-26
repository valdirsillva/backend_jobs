import { FastifyReply, FastifyRequest } from "fastify";
import { AuthViewModel } from "../viewmodel/AuthViewModel";

interface Auth {
    email: string;
    password: string;
}

export class AuthView {
    private viewModelAuth: AuthViewModel;

    constructor(viewModelAuth: AuthViewModel) {
        this.viewModelAuth = viewModelAuth;
    }

    public async login(request: FastifyRequest, reply: FastifyReply) {
        try {
            const user = request.body as Auth

            if (user === null) {
                reply.code(404).send({ message: 'Login ou senha inválido!' })
            }

            const response = await this.viewModelAuth.login(user)
            return response;
        } catch (err) {
            console.error(err)
            reply.code(400).send({
                message: "Login ou senha inválido!"
            });
        }
    }
}
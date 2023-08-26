import fastify from "fastify";
import bcrypt from "bcryptjs"
import { FastifyReply, FastifyRequest } from "fastify";
import { AuthViewModel } from "../viewmodel/AuthViewModel";
import app from "../app";

interface Auth {
    email: string;
    password: string;
}

interface AuthResponse {
    id: number;
    name: string;
    email: string;
    password: string;
    password_reset?: string;
}

export class AuthView {
    private viewModelAuth: AuthViewModel;

    constructor(viewModelAuth: AuthViewModel) {
        this.viewModelAuth = viewModelAuth;
    }

    public async login(request: FastifyRequest, reply: FastifyReply) {
        try {
            const user = request.body as Auth

            if (user.email === '' || user.password === '') {
                reply.code(404).send({ message: 'Login ou senha devem ser preenchidos!' })
            }

            const data = await this.viewModelAuth.login(user)
            const response = data as AuthResponse

            const hasUser = await this.validateUser(response, user, reply)

            if (hasUser) {
                const token = this.generateTokenJwt(response, user);
                return { auth: true, token: token };
            }

        } catch (err) {
            console.error(err)
            reply.code(500).send({
                message: 'Erro interno do servidor'
            });
        }
    }

    private async validateUser(response: AuthResponse, user: Auth, reply: FastifyReply) {
        const { password } = response;

        const hasPassword = await bcrypt.compare(user.password, password)

        if (hasPassword == false) {
            reply.code(401).send({ message: 'Credenciais inválidas!' })
            return false
        }

        return true
    }

    private generateTokenJwt(response: AuthResponse, user: Auth) {
        const { id, name, email } = response;

        const jwtPayload = { id, name, email }
        const jwtOptions = { expiresIn: 86360 }
        const codeSecret: string = "meucodigosecreto";

        // Gerar um token JWT
        const token = app.jwt.sign({
            jwtPayload, codeSecret, jwtOptions
        })

        return token;
    }
}
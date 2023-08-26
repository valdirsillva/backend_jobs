import fastifyJwt from '@fastify/jwt'
import { FastifyReply, FastifyRequest } from 'fastify'

const authMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {

    try {
        const authoriationHeader = request.headers.authorization;

        console.log(authoriationHeader)

    } catch (err) {
        reply.code(404).send({ error: 'Token inválido' });
    }
}

export { authMiddleware }


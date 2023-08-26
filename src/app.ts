import * as dotenv from 'dotenv'
import cors from '@fastify/cors'
import Fastify from "fastify";
import { auth } from './views/routes/auth.route';
import { company } from './views/routes/company.route';
import { userRouter } from './views/routes/user.route';
import { authMiddleware } from './middleware/auth.middleware';

import fastifyJwt from '@fastify/jwt';

dotenv.config()

const app = Fastify({
  logger: false
})

app.register(fastifyJwt, {
  secret: 'meutokensecreto'
})

app.decorate('authenticate', authMiddleware);

app.register(cors)

// Register routes
app.register(auth)
app.register(company)
app.register(userRouter)

app.listen({ port: 8888 }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  console.log(`Running in port: ${address}`)
})

export default app;
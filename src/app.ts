// import * as dotenv from 'dotenv'
import Fastify from "fastify";
import { routes } from './views/routes/company.route';
import cors from '@fastify/cors'

// dotenv.config()
const app = Fastify({
  logger: false
})

app.register(cors)
// Register routes
app.register(routes)

app.listen({ port: 8888 }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  console.log(`Running in port: ${address}`)
})

export default app;
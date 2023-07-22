// import * as dotenv from 'dotenv'
import Fastify from "fastify";
import { routes } from './routes/company.route';

// dotenv.config()

const app = Fastify({
  logger: false
})

// Register routes
app.register(routes)

app.listen({ port: 8888 }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }

  console.log(`Running in port: ${address}`)
})


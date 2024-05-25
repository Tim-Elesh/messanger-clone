import { config } from "dotenv"
config()

import fastify from 'fastify'

const app = fastify()
console.log('Hello world!')

app.listen({ port: parseInt(process.env.PORT!) })
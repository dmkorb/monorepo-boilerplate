import Fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import fastifyEnv from '@fastify/env'
import { envOptions, logger } from '#src/config'
import routes from '#src/routes'

const server = Fastify({
  logger,
}).withTypeProvider<TypeBoxTypeProvider>();

async function buildServer() {
  // Register env config
  await server.register(fastifyEnv, envOptions)

  // Register routes
  await server.register(routes)

  return server;
}

export default buildServer

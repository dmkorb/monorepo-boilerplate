import { FastifyInstance } from 'fastify'

async function authRoutes(fastify: FastifyInstance) {
  fastify.post('/login', async (request, reply) => {
    return { hello: 'world' }
  })

  fastify.post('/sign-up', async (request, reply) => {
    return { hello: 'world' }
  })

  fastify.get('/me', async (request, reply) => {
    return { hello: 'world' }
  })
}

export default authRoutes;

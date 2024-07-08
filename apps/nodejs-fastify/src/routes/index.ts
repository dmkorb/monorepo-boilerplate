import { FastifyInstance } from 'fastify'
import authRoutes from './auth/index.js';

async function routes (fastify: FastifyInstance) {
  // const collection = fastify.mongo.db.collection('test_collection')

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  fastify.get('/health', async (request, reply) => {
    return { status: 'ok', uptime: process.uptime(), env: fastify.config.NODE_ENV }
  })

  fastify.register(authRoutes, { prefix: '/auth' })
}

export default routes;

import Fastify from 'fastify';
import fetch from 'node-fetch';
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: true,
});

// Enable CORS
fastify.register(cors, {
  origin: true
});

const GO_SERVICE_URL = process.env.GO_SERVICE_URL || 'http://localhost:8080';

fastify.get('/api/message', async (request, reply) => {
  const goServiceResponse = await fetch(`${GO_SERVICE_URL}/api/data`);
  const goData = await goServiceResponse.json();
  
  return {
    message: 'Hello from Node.js backend!',
    goServiceMessage: goData.message,
  };
});

const start = async () => {
  try {
    const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
    await fastify.listen({ port, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

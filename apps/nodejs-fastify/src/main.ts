import buildServer from './server.js';
import { logger } from '#src/config';
import exitHook from 'exit-hook';

async function startServer() {
  try {
    const server = await buildServer();
    await server.listen({ port: server.config.PORT });
    logger.info(`Server listening on ${server.config.PORT}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

startServer();

exitHook((signal) => {
  logger.info({ signal }, 'Shutting down gracefully');
});

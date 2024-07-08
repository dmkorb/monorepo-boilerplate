import pino from 'pino';
import { Env } from './environment.js';

export const logger = pino.default({
  ...((Env.NODE_ENV === 'development' || Env.NODE_ENV === 'test') && {
    transport: {
      target: 'pino-pretty',
    },
  }),
  base: null,
  redact: ['*.headers.authorization'],
  level: Env.LOG_LEVEL,
});

export const createLogger = (name: string, bindings?: pino.pino.Bindings) => {
  return logger.child(
    {
      name,
      ...bindings,
    },
    {
      msgPrefix: `[${name}] `,
    }
  );
};

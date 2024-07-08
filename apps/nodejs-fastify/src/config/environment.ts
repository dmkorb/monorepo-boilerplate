import { Static, Type } from '@sinclair/typebox';
import envSchema from 'env-schema';
import { FastifyEnvOptions } from '@fastify/env';

const schema = Type.Object({
  NODE_ENV: Type.String({ default: 'development' }),
  PORT: Type.Number({ default: 3000 }),
  LOG_LEVEL: Type.String({ default: 'debug' }),
});

export const envOptions: FastifyEnvOptions = {
  confKey: 'config',
  schema: schema,
  data: process.env,
  dotenv: true,
};

export const Env = envSchema<Static<typeof schema>>({
  schema,
});

declare module 'fastify' {
  interface FastifyInstance {
    config: typeof schema;
  }
}

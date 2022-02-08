import * as Joi from '@hapi/joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().port().default(3000),
  ENVIRONMENT: Joi.string()
    .valid('dev', 'prod', 'local')
    .default('dev')
    .required(),

  DB_HOST: Joi.string().default('localhost'),
  DB_PORT: Joi.number().port().default(27017),
  DB_NAME: Joi.string().required(),
  DB_USERNAME: Joi.string(),
  DB_PASSWORD: Joi.string(),

  DB_REPLICA_SET: Joi.string(),
  DB_AUTH_SOURCE: Joi.string(),
  DB_SSL: Joi.string().default('false'),
});

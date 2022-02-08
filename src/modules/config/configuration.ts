import * as Joi from '@hapi/joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().port().default(3000),
  ENVIRONMENT: Joi.string()
    .valid('dev', 'prod', 'local')
    .default('dev')
    .required(),

  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().port().default(26017).required(),
  DB_NAME: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
});

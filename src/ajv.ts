import Ajv, { } from 'ajv';
import { emailCredentialSchema, ssnCredentialSchema } from './schemas';

const schemas = [
  ssnCredentialSchema,
  emailCredentialSchema
];

/**
 * Passing all schemas to Ajv constructor, which internally calls addScehma, instead of adding them on demand
 * Options ref: https://ajv.js.org/options.html#ajv-options
 *
 * Note: Although addSchema does not compile schemas, explicit compilation is not required - the schema will be compiled when it is used first time.
 * ref: https://ajv.js.org/api.html#ajv-addschema-schema-object-object-key-string-ajv
*/
export const ajv = new Ajv({ allErrors: true, schemas });

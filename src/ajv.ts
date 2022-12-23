import Ajv, { } from 'ajv';
import logger from './logger';
import { addressCredentialSchema, birthDateCredentialSchema, countryResidenceCredentialSchema, emailCredentialSchema, facialImageCredentialSchema, facialMatchConfidenceCredentialSchema, facialMatchCredentialSchema, firstNameCredentialSchema, fullNameCredentialSchema, genderCredential, governmentIdDocumentBackImageCredentialSchema, governmentIdDocumentImageCredentialSchema, governmentIdTypeCredentialSchema, lastNameCredentialSchema, livelinessConfidenceCredentialSchema, livelinessCredentialSchema, phoneCredentialSchema, ssnCredentialSchema } from './schemas';

const schemas = [
  ssnCredentialSchema,
  emailCredentialSchema,
  countryResidenceCredentialSchema,
  facialImageCredentialSchema,
  livelinessCredentialSchema,
  addressCredentialSchema,
  lastNameCredentialSchema,
  firstNameCredentialSchema,
  birthDateCredentialSchema,
  phoneCredentialSchema,
  fullNameCredentialSchema,
  genderCredential,
  governmentIdDocumentImageCredentialSchema,
  livelinessConfidenceCredentialSchema,
  facialMatchCredentialSchema,
  facialMatchConfidenceCredentialSchema,
  governmentIdTypeCredentialSchema,
  governmentIdDocumentBackImageCredentialSchema
];

/**
 * Passing all schemas to Ajv constructor, which internally calls addScehma, instead of adding them on demand
 * Options ref: https://ajv.js.org/options.html#ajv-options
 *
 * Note: Although addSchema does not compile schemas, explicit compilation is not required - the schema will be compiled when it is used first time.
 * ref: https://ajv.js.org/api.html#ajv-addschema-schema-object-object-key-string-ajv
*/
export const ajv = new Ajv({
  allErrors: true,
  coerceTypes: true, // ref: https://ajv.js.org/guide/modifying-data.html#coercing-data-types
  logger,
  schemas
});

import Ajv, { } from 'ajv';
import logger from './logger';
import addFormats from 'ajv-formats';
import { addressCredentialSchema, birthDateCredentialSchema, countryResidenceCredentialSchema, emailCredentialSchema, facialImageCredentialSchema, facialMatchConfidenceCredentialSchema, facialMatchCredentialSchema, firstNameCredentialSchema, fullNameCredentialSchema, genderCredentialSchema, governmentIdDocumentBackImageCredentialSchema, governmentIdDocumentImageCredentialSchema, governmentIdTypeCredentialSchema, lastNameCredentialSchema, livelinessConfidenceCredentialSchema, livelinessCredentialSchema, phoneCredentialSchema, ssnCredentialSchema } from './schemas';

// schemas to add to ajv instance options
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
  genderCredentialSchema,
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

// Adding formats to ajv
addFormats(ajv);

/*******************************************************************
 * Add custom formats to ajv below                                 *
 * ref: https://ajv.js.org/guide/formats.html#user-defined-formats *
 *******************************************************************/
ajv.addFormat('ssn', {
  type: 'string',
  validate: (ssn: string) => {
    const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
    return ssnRegex.test(ssn);
  }
});

ajv.addFormat('email', {
  type: 'string',
  validate: (email: string) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }
});

ajv.addFormat('phone', {
  type: 'string',
  validate: (phone: string) => {
    const phoneRegex = /^\+(?:[0-9]●?){6,14}[0-9]$/;
    return phoneRegex.test(phone);
  }
});

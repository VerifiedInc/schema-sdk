import { getSchema, jsonSchemasMap } from './schemas';
import { EmailCredentialSchemaType } from './types';
// import types from './types';
import { UnumSchemaObject, validate } from './validate';

export {
  // types
  UnumSchemaObject,

  // functions
  validate,
  getSchema,

  // credential schemas map
  jsonSchemasMap,

  // credential types
  EmailCredentialSchemaType
};

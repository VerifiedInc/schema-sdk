import { emailCredentialSchema, ssnCredentialSchema } from './schemas';
import { EmailCredentialSchemaType, SsnCredentialSchemaType } from './types';
// import types from './types';
import { UnumSchemaObject, validate } from './validate';

export {
  // types
  UnumSchemaObject,

  // functions
  validate,

  // credential schemas
  emailCredentialSchema,
  ssnCredentialSchema,

  // credential types
  EmailCredentialSchemaType,
  SsnCredentialSchemaType
};

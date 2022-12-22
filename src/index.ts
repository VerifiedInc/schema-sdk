import { emailCredentialSchema } from './schemas';
import { EmailCredentialSchemaType } from './types';
// import types from './types';
import { UnumSchemaObject, validateSchema } from './validate';

export {
  // types
  UnumSchemaObject,
  // validator factory
  validateSchema,

  // credential schemas
  emailCredentialSchema,

  // credential types
  EmailCredentialSchemaType
};

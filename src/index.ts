import { emailCredentialSchema } from './schemas';
import { EmailCredentialSchemaType } from './types';
// import types from './types';
import { UnumSchemaObject, validateSchema } from './validate';
import { validatorFactory } from './validatorFactory';

export {
  // types
  UnumSchemaObject,
  // validator factory
  validatorFactory,
  validateSchema,

  // credential schemas
  emailCredentialSchema,

  // credential types
  EmailCredentialSchemaType
};

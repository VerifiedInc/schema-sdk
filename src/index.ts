import { emailCredentialSchema, ssnCredentialSchema } from './schemas';
import { EmailCredentialSchemaType, SsnCredentialSchemaType } from './types';
// import types from './types';
import { validate } from './validate';

export {

  // functions
  validate,

  // credential schemas
  emailCredentialSchema,
  ssnCredentialSchema,

  // credential types
  EmailCredentialSchemaType,
  SsnCredentialSchemaType
};

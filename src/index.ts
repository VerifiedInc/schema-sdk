import { AddressCredentialSchemaType, BirthDateCredentialSchemaType, CountryResidenceCredentialSchemaType, EmailCredentialSchemaType, FacialImageCredentialSchemaType, FacialMatchConfidenceCredentialSchemaType, FacialMatchCredentialSchemaType, FirstNameCredentialSchemaType, FullNameCredentialSchemaType, GenderCredentialSchemaType, GovernmentIdDocumentBackImageCredentialSchemaType, GovernmentIdDocumentImageCredentialSchemaType, GovernmentIdTypeCredentialSchemaType, LastNameCredentialSchemaType, LivelinessConfidenceCredentialSchemaType, LivelinessCredentialSchemaType, PhoneCredentialSchemaType, SsnCredentialSchemaType } from './types';
import { validate } from './validate';
import context from './context/unum.id.json';
import { UnumJsonLDSchema } from './jsonLDSchemas';
import { schemas, UnumSchema } from './schemas';
import { UnumJsonSchema } from './jsonSchemas';

export {
  // types
  UnumJsonSchema,
  UnumJsonLDSchema,
  UnumSchema,

  // functions
  validate,

  // json-ld context file
  context,

  // credential schemas map
  schemas,

  // credential types
  EmailCredentialSchemaType,
  SsnCredentialSchemaType,
  CountryResidenceCredentialSchemaType,
  FacialImageCredentialSchemaType,
  LivelinessCredentialSchemaType,
  AddressCredentialSchemaType,
  LastNameCredentialSchemaType,
  FirstNameCredentialSchemaType,
  BirthDateCredentialSchemaType,
  PhoneCredentialSchemaType,
  FullNameCredentialSchemaType,
  GenderCredentialSchemaType,
  GovernmentIdDocumentImageCredentialSchemaType,
  LivelinessConfidenceCredentialSchemaType,
  FacialMatchCredentialSchemaType,
  FacialMatchConfidenceCredentialSchemaType,
  GovernmentIdTypeCredentialSchemaType,
  GovernmentIdDocumentBackImageCredentialSchemaType

};

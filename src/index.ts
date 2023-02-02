import { AddressCredentialSchemaType, BirthDateCredentialSchemaType, CountryResidenceCredentialSchemaType, DobCredentialSchemaType, EmailCredentialSchemaType, FacialImageCredentialSchemaType, FacialMatchConfidenceCredentialSchemaType, FacialMatchCredentialSchemaType, FirstNameCredentialSchemaType, FullNameCredentialSchemaType, GenderCredentialSchemaType, GovernmentIdDocumentBackImageCredentialSchemaType, GovernmentIdDocumentImageCredentialSchemaType, GovernmentIdTypeCredentialSchemaType, IdentityCredentialSchemaType, LastNameCredentialSchemaType, LivelinessConfidenceCredentialSchemaType, LivelinessCredentialSchemaType, PhoneCredentialSchemaType, SsnCredentialSchemaType } from './types';
import { validate } from './validate';
import context from './context/unum.id.json';
import { UnumJsonLDSchema } from './jsonLDSchemas';
import { schemas, UnumSchema } from './schemas';
import { UnumJsonSchema } from './jsonSchemas';
import { emailFormat, phoneFormat, ssnFormat, unixMsExpirationDateFormat } from './formats';

export {
  // types
  UnumJsonSchema,
  UnumJsonLDSchema,
  UnumSchema,

  // functions
  validate,

  // formats
  emailFormat,
  ssnFormat,
  phoneFormat,
  unixMsExpirationDateFormat,

  // json-ld context file
  context,

  // credential schemas map
  schemas,

  // credential types
  EmailCredentialSchemaType,
  IdentityCredentialSchemaType,
  SsnCredentialSchemaType,
  CountryResidenceCredentialSchemaType,
  FacialImageCredentialSchemaType,
  LivelinessCredentialSchemaType,
  AddressCredentialSchemaType,
  LastNameCredentialSchemaType,
  FirstNameCredentialSchemaType,
  BirthDateCredentialSchemaType,
  DobCredentialSchemaType,
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

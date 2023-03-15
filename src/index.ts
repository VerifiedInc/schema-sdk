import {
  AddressCredentialSchemaType,
  BirthDateCredentialSchemaType,
  CountryResidenceCredentialSchemaType,
  DobCredentialSchemaType,
  EmailCredentialSchemaType,
  FacialImageCredentialSchemaType,
  FacialMatchConfidenceCredentialSchemaType,
  FacialMatchCredentialSchemaType,
  FirstNameCredentialSchemaType,
  FullNameCredentialSchemaType,
  GenderCredentialSchemaType,
  GovernmentIdDocumentBackImageCredentialSchemaType,
  GovernmentIdDocumentImageCredentialSchemaType,
  GovernmentIdExpirationDateCredentialSchemaType,
  GovernmentIdIssuanceDateCredentialSchemaType,
  GovernmentIdNumberCredentialSchemaType,
  GovernmentIdStateCredentialSchemaType,
  GovernmentIdTypeCredentialSchemaType,
  IdentityCredentialSchemaType,
  LastNameCredentialSchemaType,
  LivelinessConfidenceCredentialSchemaType,
  LivelinessCredentialSchemaType,
  NationalityCredentialSchemaType,
  PhoneCredentialSchemaType,
  SexCredentialSchemaType,
  SsnCredentialSchemaType
} from './types';
import { validate } from './validate';
import context from './context/unum.id.json';
import { UnumJsonLDSchema } from './jsonLDSchemas';
import { schemas, UnumSchema } from './schemas';
import { UnumJsonSchema } from './jsonSchemas';
import { emailFormat, phoneFormat, ssnFormat, unixMsExpirationDateFormat, digitsFormat } from './formats';

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
  digitsFormat,

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
  SexCredentialSchemaType,
  PhoneCredentialSchemaType,
  FullNameCredentialSchemaType,
  GenderCredentialSchemaType,
  GovernmentIdDocumentImageCredentialSchemaType,
  LivelinessConfidenceCredentialSchemaType,
  FacialMatchCredentialSchemaType,
  FacialMatchConfidenceCredentialSchemaType,
  GovernmentIdTypeCredentialSchemaType,
  GovernmentIdDocumentBackImageCredentialSchemaType,
  NationalityCredentialSchemaType,
  GovernmentIdStateCredentialSchemaType,
  GovernmentIdNumberCredentialSchemaType,
  GovernmentIdExpirationDateCredentialSchemaType,
  GovernmentIdIssuanceDateCredentialSchemaType
};

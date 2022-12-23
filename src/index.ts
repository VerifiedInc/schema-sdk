import { addressCredentialSchema, birthDateCredentialSchema, countryResidenceCredentialSchema, emailCredentialSchema, facialImageCredentialSchema, facialMatchConfidenceCredentialSchema, facialMatchCredentialSchema, firstNameCredentialSchema, fullNameCredentialSchema, genderCredentialSchema, governmentIdDocumentBackImageCredentialSchema, governmentIdDocumentImageCredentialSchema, governmentIdTypeCredentialSchema, lastNameCredentialSchema, livelinessConfidenceCredentialSchema, livelinessCredentialSchema, phoneCredentialSchema, ssnCredentialSchema } from './schemas';
import { AddressCredentialSchemaType, BirthDateCredentialSchemaType, CountryResidenceCredentialSchemaType, EmailCredentialSchemaType, FacialImageCredentialSchemaType, FacialMatchConfidenceCredentialSchemaType, FacialMatchCredentialSchemaType, FirstNameCredentialSchemaType, FullNameCredentialSchemaType, GenderCredentialSchemaType, GovernmentIdDocumentBackImageCredentialSchemaType, GovernmentIdDocumentImageCredentialSchemaType, GovernmentIdTypeCredentialSchemaType, LastNameCredentialSchemaType, LivelinessConfidenceCredentialSchemaType, LivelinessCredentialSchemaType, PhoneCredentialSchemaType, SsnCredentialSchemaType } from './types';
// import types from './types';
import { UnumSchemaObject, validate } from './validate';

export {
  // types
  UnumSchemaObject,

  // functions
  validate,

  // credential schemas
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
  governmentIdDocumentBackImageCredentialSchema,

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

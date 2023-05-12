import {
  AddressCredentialSchemaType,
  BirthDateCredentialSchemaType,
  CountryResidenceCredentialSchemaType,
  DobCredentialSchemaType,
  EmailCredentialSchemaType,
  EmployerCredentialSchemaType,
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
  IncomeCredentialSchemaType,
  IncomeCurrencyCredentialSchemaType,
  LastNameCredentialSchemaType,
  LivelinessConfidenceCredentialSchemaType,
  LivelinessCredentialSchemaType,
  NationalityCredentialSchemaType,
  PhoneCredentialSchemaType,
  SexCredentialSchemaType,
  SsnCredentialSchemaType,
  TitleCredentialSchemaType
} from './types';
import { validate } from './validate';
import context from './context/unum.id.json';
import { UnumJsonLDSchema } from './jsonLDSchemas';
import { schemas, UnumSchema } from './schemas';
import { UnumJsonSchema } from './jsonSchemas';
import {
  emailFormat,
  phoneFormat,
  ssnFormat,
  unixMsExpirationDateFormat,
  digitsFormat,
  optionalEmailFormat,
  optionalPhoneFormat,
  otpFormat,
  dataUriBase64ImageFormat
} from './formats';

export {
  // types
  UnumJsonSchema,
  UnumJsonLDSchema,
  UnumSchema,

  // functions
  validate,

  // formats
  emailFormat,
  optionalEmailFormat,
  ssnFormat,
  phoneFormat,
  optionalPhoneFormat,
  unixMsExpirationDateFormat,
  digitsFormat,
  otpFormat,
  dataUriBase64ImageFormat,

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
  GovernmentIdIssuanceDateCredentialSchemaType,
  EmployerCredentialSchemaType,
  TitleCredentialSchemaType,
  IncomeCredentialSchemaType,
  IncomeCurrencyCredentialSchemaType
};

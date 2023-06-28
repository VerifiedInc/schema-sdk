import {
  AddressCredentialSchemaType,
  BirthDateCredentialSchemaType,
  CountryResidenceCredentialSchemaType,
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
  AnnualIncomeCredentialSchemaType,
  IncomeCurrencyCredentialSchemaType,
  LastNameCredentialSchemaType,
  LivelinessConfidenceCredentialSchemaType,
  LivelinessCredentialSchemaType,
  NationalityCredentialSchemaType,
  PhoneCredentialSchemaType,
  SexCredentialSchemaType,
  SsnCredentialSchemaType,
  TitleCredentialSchemaType,
  AnnualIncomeRangeCredentialSchemaType,
  EmploymentStartDateCredentialSchemaType
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
  digitsFormat,
  optionalEmailFormat,
  optionalPhoneFormat,
  otpFormat,
  dataUriBase64ImageFormat,
  genderFormat,
  iso3166Alpha2CountryCodeFormat,
  iso3166CodeFormat,
  documentTypeFormat,
  confidenceLevelFormat,
  booleanFormat
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
  digitsFormat,
  otpFormat,
  dataUriBase64ImageFormat,
  genderFormat,
  iso3166Alpha2CountryCodeFormat,
  iso3166CodeFormat,
  documentTypeFormat,
  confidenceLevelFormat,
  booleanFormat,

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
  AnnualIncomeCredentialSchemaType,
  IncomeCurrencyCredentialSchemaType,
  AnnualIncomeRangeCredentialSchemaType,
  EmploymentStartDateCredentialSchemaType
};

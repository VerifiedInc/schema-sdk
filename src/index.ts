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
  LivenessCredentialSchemaType,
  NationalityCredentialSchemaType,
  PhoneCredentialSchemaType,
  SexCredentialSchemaType,
  SsnCredentialSchemaType,
  TitleCredentialSchemaType,
  AnnualIncomeRangeCredentialSchemaType,
  EmploymentStartDateCredentialSchemaType,
  LivenessConfidenceCredentialSchemaType
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
  booleanFormat,
  iso4217Format,
  iso4217AmountFormat,
  iso4217AmountRangeFormat,
  addressFormat
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
  iso4217Format,
  iso4217AmountFormat,
  iso4217AmountRangeFormat,
  addressFormat,
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
  LivenessCredentialSchemaType,
  AddressCredentialSchemaType,
  LastNameCredentialSchemaType,
  FirstNameCredentialSchemaType,
  BirthDateCredentialSchemaType,
  SexCredentialSchemaType,
  PhoneCredentialSchemaType,
  FullNameCredentialSchemaType,
  GenderCredentialSchemaType,
  GovernmentIdDocumentImageCredentialSchemaType,
  LivenessConfidenceCredentialSchemaType,
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

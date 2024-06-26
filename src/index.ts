import { validate } from './validate';
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
  addressFormat,
  lineTypeFormat
} from './formats';
import { ajv } from './ajv';
import {
  AddressCredentialJsonSchema,
  AmountCredentialJsonSchema,
  AnnualIncomeCredentialJsonSchemaType,
  AnnualIncomeRangeCredentialJsonSchema,
  BirthDateCredentialJsonSchema,
  CityCredentialJsonSchema,
  CountryCredentialJsonSchema,
  CountryResidenceCredentialJsonSchema,
  CurrencyCredentialJsonSchema,
  DocumentBackImageCredentialJsonSchema,
  DocumentImageCredentialJsonSchema,
  DocumentNumberCredentialJsonSchema,
  DocumentTypeCredentialJsonSchema,
  EmailCredentialJsonSchema,
  EmployerCredentialJsonSchemaType,
  EmploymentStartDateCredentialJsonSchema,
  ExpirationDateCredentialJsonSchema,
  FacialImageCredentialJsonSchema,
  FirstNameCredentialJsonSchema,
  FullNameCredentialJsonSchema,
  GenderCredentialJsonSchema,
  GovernmentIdCredentialJsonSchema,
  GovernmentIdDocumentBackImageCredentialJsonSchema,
  GovernmentIdDocumentImageCredentialJsonSchema,
  GovernmentIdExpirationDateCredentialJsonSchema,
  GovernmentIdIssuanceDateCredentialJsonSchema,
  GovernmentIdNumberCredentialJsonSchema,
  GovernmentIdStateCredentialJsonSchema,
  GovernmentIdTypeCredentialJsonSchema,
  IdentityCredentialJsonSchema,
  IncomeCurrencyCredentialJsonSchema,
  IncomeRangeCredentialJsonSchema,
  IssuanceDateCredentialJsonSchema,
  LastNameCredentialJsonSchema,
  Line1CredentialJsonSchema,
  Line2CredentialJsonSchema,
  LivenessCredentialJsonSchema,
  MatchCredentialJsonSchema,
  MiddleNameCredentialJsonSchema,
  NationalityCredentialJsonSchema,
  PhoneCredentialJsonSchema,
  SexCredentialJsonSchema,
  SsnCredentialJsonSchema,
  StateCredentialJsonSchema,
  TitleCredentialJsonSchema,
  ZipCodeCredentialJsonSchema,
  EmployerNameCredentialJsonSchema,
  LineTypeCredentialJsonSchema,
  PhoneInfoCredentialJsonSchema
} from './types';
import { jsonSchemas } from './jsonSchemas';

export {
  // ajv instance
  ajv,

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
  lineTypeFormat,

  // credential schemas map
  jsonSchemas,

  /*********
   * Types *
   *********/
  // Address
  CityCredentialJsonSchema,
  CountryCredentialJsonSchema,
  Line1CredentialJsonSchema,
  Line2CredentialJsonSchema,
  StateCredentialJsonSchema,
  ZipCodeCredentialJsonSchema,

  // Atomic
  AmountCredentialJsonSchema,
  CurrencyCredentialJsonSchema,
  IdentityCredentialJsonSchema,
  LivenessCredentialJsonSchema,
  MatchCredentialJsonSchema,
  LineTypeCredentialJsonSchema,

  // Composite
  AddressCredentialJsonSchema,
  AnnualIncomeCredentialJsonSchemaType,
  EmployerCredentialJsonSchemaType,
  FullNameCredentialJsonSchema,
  GovernmentIdCredentialJsonSchema,
  PhoneInfoCredentialJsonSchema,

  // Employer
  EmploymentStartDateCredentialJsonSchema,
  IncomeRangeCredentialJsonSchema,
  TitleCredentialJsonSchema,
  EmployerNameCredentialJsonSchema,

  // Government ID
  DocumentBackImageCredentialJsonSchema,
  DocumentImageCredentialJsonSchema,
  DocumentNumberCredentialJsonSchema,
  DocumentTypeCredentialJsonSchema,
  ExpirationDateCredentialJsonSchema,
  IssuanceDateCredentialJsonSchema,

  // Individual
  BirthDateCredentialJsonSchema,
  CountryResidenceCredentialJsonSchema,
  EmailCredentialJsonSchema,
  FacialImageCredentialJsonSchema,
  FirstNameCredentialJsonSchema,
  MiddleNameCredentialJsonSchema,
  LastNameCredentialJsonSchema,
  GenderCredentialJsonSchema,
  NationalityCredentialJsonSchema,
  PhoneCredentialJsonSchema,
  SexCredentialJsonSchema,
  SsnCredentialJsonSchema,

  // Backwards Compatible (Deprecated)
  GovernmentIdDocumentImageCredentialJsonSchema,
  GovernmentIdDocumentBackImageCredentialJsonSchema,
  GovernmentIdTypeCredentialJsonSchema,
  GovernmentIdStateCredentialJsonSchema,
  GovernmentIdNumberCredentialJsonSchema,
  GovernmentIdIssuanceDateCredentialJsonSchema,
  GovernmentIdExpirationDateCredentialJsonSchema,
  IncomeCurrencyCredentialJsonSchema,
  AnnualIncomeRangeCredentialJsonSchema
};

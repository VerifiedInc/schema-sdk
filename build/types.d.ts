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
} from './jsonSchemas';

export {
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

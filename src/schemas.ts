import {
  addressCredentialJsonLDSchema,
  birthDateCredentialJsonLDSchema,
  countryResidenceCredentialJsonLDSchema,
  emailCredentialJsonLDSchema,
  facialImageCredentialJsonLDSchema,
  facialMatchCredentialJsonLDSchema,
  firstNameCredentialJsonLDSchema,
  fullNameCredentialJsonLDSchema,
  genderCredentialJsonLDSchema,
  governmentIdDocumentImageCredentialJsonLDSchema,
  governmentIdExpirationDateCredentialJsonLDSchema,
  governmentIdIssuanceDateCredentialJsonLDSchema,
  governmentIdNumberCredentialJsonLDSchema,
  governmentIdStateCredentialJsonLDSchema,
  governmentIdTypeCredentialJsonLDSchema,
  identityCredentialJsonLDSchema,
  lastNameCredentialJsonLDSchema,
  livenessCredentialJsonLDSchema,
  nationalityCredentialJsonLDSchema,
  phoneCredentialJsonLDSchema,
  sexCredentialJsonLDSchema,
  ssnCredentialJsonLDSchema,
  UnumJsonLDSchema,
  employerJsonLDSchema,
  annualIncomeJsonLDSchema,
  incomeCurrencyJsonLDSchema,
  annualIncomeRangeJsonLDSchema,
  titleJsonLDSchema,
  employmentStartDateJsonLDSchema,
  governmentIdDocumentBackImageCredentialJsonLDSchema
} from './jsonLDSchemas';
import {
  addressCredentialJsonSchema,
  birthDateCredentialJsonSchema,
  countryResidenceCredentialJsonSchema,
  emailCredentialJsonSchema,
  facialImageCredentialJsonSchema,
  facialMatchCredentialJsonSchema,
  firstNameCredentialJsonSchema,
  fullNameCredentialJsonSchema,
  genderCredentialJsonSchema,
  governmentIdDocumentImageCredentialJsonSchema,
  governmentIdExpirationDateCredentialJsonSchema,
  governmentIdIssuanceDateCredentialJsonSchema,
  governmentIdNumberCredentialJsonSchema,
  governmentIdStateCredentialJsonSchema,
  governmentIdTypeCredentialJsonSchema,
  identityCredentialJsonSchema,
  lastNameCredentialJsonSchema,
  livenessCredentialJsonSchema,
  nationalityCredentialJsonSchema,
  phoneCredentialJsonSchema,
  sexCredentialJsonSchema,
  ssnCredentialJsonSchema,
  UnumJsonSchema,
  employerCredentialJsonSchema,
  annualIncomeCredentialJsonSchema,
  incomeCurrencyCredentialJsonSchema,
  annualIncomeRangeCredentialJsonSchema,
  titleCredentialJsonSchema,
  employmentStartDateCredentialJsonSchema,
  governmentIdDocumentBackImageCredentialJsonSchema
} from './jsonSchemas';

export interface UnumSchema {
  json: UnumJsonSchema;
  jsonLD: UnumJsonLDSchema;
}

export const schemas: Record<string, UnumSchema> = {
  EmailCredential: {
    json: emailCredentialJsonSchema,
    jsonLD: emailCredentialJsonLDSchema
  },
  IdentityCredential: {
    json: identityCredentialJsonSchema,
    jsonLD: identityCredentialJsonLDSchema
  },
  SsnCredential: {
    json: ssnCredentialJsonSchema,
    jsonLD: ssnCredentialJsonLDSchema
  },
  CountryResidenceCredential: {
    json: countryResidenceCredentialJsonSchema,
    jsonLD: countryResidenceCredentialJsonLDSchema
  },
  FacialImageCredential: {
    json: facialImageCredentialJsonSchema,
    jsonLD: facialImageCredentialJsonLDSchema
  },
  LivenessCredential: {
    json: livenessCredentialJsonSchema,
    jsonLD: livenessCredentialJsonLDSchema
  },
  AddressCredential: {
    json: addressCredentialJsonSchema,
    jsonLD: addressCredentialJsonLDSchema
  },
  LastNameCredential: {
    json: lastNameCredentialJsonSchema,
    jsonLD: lastNameCredentialJsonLDSchema
  },
  FirstNameCredential: {
    json: firstNameCredentialJsonSchema,
    jsonLD: firstNameCredentialJsonLDSchema
  },
  BirthDateCredential: {
    json: birthDateCredentialJsonSchema,
    jsonLD: birthDateCredentialJsonLDSchema
  },
  PhoneCredential: {
    json: phoneCredentialJsonSchema,
    jsonLD: phoneCredentialJsonLDSchema
  },
  FullNameCredential: {
    json: fullNameCredentialJsonSchema,
    jsonLD: fullNameCredentialJsonLDSchema
  },
  GenderCredential: {
    json: genderCredentialJsonSchema,
    jsonLD: genderCredentialJsonLDSchema
  },
  GovernmentIdDocumentImageCredential: {
    json: governmentIdDocumentImageCredentialJsonSchema,
    jsonLD: governmentIdDocumentImageCredentialJsonLDSchema
  },
  FacialMatchCredential: {
    json: facialMatchCredentialJsonSchema,
    jsonLD: facialMatchCredentialJsonLDSchema
  },
  GovernmentIdTypeCredential: {
    json: governmentIdTypeCredentialJsonSchema,
    jsonLD: governmentIdTypeCredentialJsonLDSchema
  },
  GovernmentIdDocumentBackImageCredential: {
    json: governmentIdDocumentBackImageCredentialJsonSchema,
    jsonLD: governmentIdDocumentBackImageCredentialJsonLDSchema
  },
  SexCredential: {
    json: sexCredentialJsonSchema,
    jsonLD: sexCredentialJsonLDSchema
  },
  NationalityCredential: {
    json: nationalityCredentialJsonSchema,
    jsonLD: nationalityCredentialJsonLDSchema
  },
  GovernmentIdStateCredential: {
    json: governmentIdStateCredentialJsonSchema,
    jsonLD: governmentIdStateCredentialJsonLDSchema
  },
  GovernmentIdNumberCredential: {
    json: governmentIdNumberCredentialJsonSchema,
    jsonLD: governmentIdNumberCredentialJsonLDSchema
  },
  GovernmentIdIssuanceDateCredential: {
    json: governmentIdIssuanceDateCredentialJsonSchema,
    jsonLD: governmentIdIssuanceDateCredentialJsonLDSchema
  },
  GovernmentIdExpirationDateCredential: {
    json: governmentIdExpirationDateCredentialJsonSchema,
    jsonLD: governmentIdExpirationDateCredentialJsonLDSchema
  },
  EmployerCredential: {
    json: employerCredentialJsonSchema,
    jsonLD: employerJsonLDSchema
  },
  TitleCredential: {
    json: titleCredentialJsonSchema,
    jsonLD: titleJsonLDSchema
  },
  AnnualIncomeCredential: {
    json: annualIncomeCredentialJsonSchema,
    jsonLD: annualIncomeJsonLDSchema
  },
  IncomeCurrencyCredential: {
    json: incomeCurrencyCredentialJsonSchema,
    jsonLD: incomeCurrencyJsonLDSchema
  },
  AnnualIncomeRangeCredential: {
    json: annualIncomeRangeCredentialJsonSchema,
    jsonLD: annualIncomeRangeJsonLDSchema
  },
  EmploymentStartDateCredential: {
    json: employmentStartDateCredentialJsonSchema,
    jsonLD: employmentStartDateJsonLDSchema
  }
};

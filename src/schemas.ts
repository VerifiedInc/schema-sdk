import {
  addressCredentialJsonLDSchema,
  birthDateCredentialJsonLDSchema,
  countryResidenceCredentialJsonLDSchema,
  dobCredentialJsonLDSchema,
  emailCredentialJsonLDSchema,
  facialImageCredentialJsonLDSchema,
  facialMatchConfidenceCredentialJsonLDSchema,
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
  livelinessConfidenceCredentialJsonLDSchema,
  livelinessCredentialJsonLDSchema,
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
  employmentStartDateJsonLDSchema
} from './jsonLDSchemas';
import {
  addressCredentialJsonSchema,
  birthDateCredentialJsonSchema,
  countryResidenceCredentialJsonSchema,
  dobCredentialJsonSchema,
  emailCredentialJsonSchema,
  facialImageCredentialJsonSchema,
  facialMatchConfidenceCredentialJsonSchema,
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
  livelinessConfidenceCredentialJsonSchema,
  livelinessCredentialJsonSchema,
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
  employmentStartDateCredentialJsonSchema
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
  LivelinessCredential: {
    json: livelinessCredentialJsonSchema,
    jsonLD: livelinessCredentialJsonLDSchema
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
  DobCredential: {
    // TODO: remove this in favor of BirthDateCredential, however the old Hyperverge creds issued dobCredentials so keeping for backwards compatibility
    json: dobCredentialJsonSchema,
    jsonLD: dobCredentialJsonLDSchema
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
  LivelinessConfidenceCredential: {
    json: livelinessConfidenceCredentialJsonSchema,
    jsonLD: livelinessConfidenceCredentialJsonLDSchema
  },
  FacialMatchCredential: {
    json: facialMatchCredentialJsonSchema,
    jsonLD: facialMatchCredentialJsonLDSchema
  },
  FacialMatchConfidenceCredential: {
    json: facialMatchConfidenceCredentialJsonSchema,
    jsonLD: facialMatchConfidenceCredentialJsonLDSchema
  },
  GovernmentIdTypeCredential: {
    json: governmentIdTypeCredentialJsonSchema,
    jsonLD: governmentIdTypeCredentialJsonLDSchema
  },
  GovernmentIdDocumentBackImageCredential: {
    json: governmentIdDocumentImageCredentialJsonSchema,
    jsonLD: governmentIdDocumentImageCredentialJsonLDSchema
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
    jsonLD: annualIncomeRangeJsonLDSchema
  }
};

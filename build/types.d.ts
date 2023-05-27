import { Static } from '@sinclair/typebox';
import {
  addressCredentialJsonSchema,
  identityCredentialJsonSchema,
  birthDateCredentialJsonSchema,
  countryResidenceCredentialJsonSchema,
  emailCredentialJsonSchema,
  facialImageCredentialJsonSchema,
  facialMatchConfidenceCredentialJsonSchema,
  facialMatchCredentialJsonSchema,
  firstNameCredentialJsonSchema,
  fullNameCredentialJsonSchema,
  genderCredentialJsonSchema,
  governmentIdDocumentBackImageCredentialJsonSchema,
  governmentIdDocumentImageCredentialJsonSchema,
  governmentIdTypeCredentialJsonSchema,
  lastNameCredentialJsonSchema,
  livelinessConfidenceCredentialJsonSchema,
  livelinessCredentialJsonSchema,
  phoneCredentialJsonSchema,
  ssnCredentialJsonSchema,
  nationalityCredentialJsonSchema,
  governmentIdStateCredentialJsonSchema,
  governmentIdNumberCredentialJsonSchema,
  governmentIdExpirationDateCredentialJsonSchema,
  governmentIdIssuanceDateCredentialJsonSchema,
  employerCredentialJsonSchema,
  titleCredentialJsonSchema,
  annualIncomeCredentialJsonSchema,
  incomeCurrencyCredentialJsonSchema,
  annualIncomeRangeCredentialJsonSchema
} from './jsonSchemas';

export type SsnCredentialSchemaType = Static<typeof ssnCredentialJsonSchema>;
export type EmailCredentialSchemaType = Static<typeof emailCredentialJsonSchema>;
export type IdentityCredentialSchemaType = Static<typeof identityCredentialJsonSchema>;
export type CountryResidenceCredentialSchemaType = Static<typeof countryResidenceCredentialJsonSchema>;
export type FacialImageCredentialSchemaType = Static<typeof facialImageCredentialJsonSchema>;
export type LivelinessCredentialSchemaType = Static<typeof livelinessCredentialJsonSchema>;
export type AddressCredentialSchemaType = Static<typeof addressCredentialJsonSchema>;
export type LastNameCredentialSchemaType = Static<typeof lastNameCredentialJsonSchema>;
export type FirstNameCredentialSchemaType = Static<typeof firstNameCredentialJsonSchema>;
export type BirthDateCredentialSchemaType = Static<typeof birthDateCredentialJsonSchema>;
export type DobCredentialSchemaType = Static<typeof dobCredentialJsonSchema>;
export type PhoneCredentialSchemaType = Static<typeof phoneCredentialJsonSchema>;
export type FullNameCredentialSchemaType = Static<typeof fullNameCredentialJsonSchema>;
export type GenderCredentialSchemaType = Static<typeof genderCredentialJsonSchema>;
export type GovernmentIdDocumentImageCredentialSchemaType = Static<
  typeof governmentIdDocumentImageCredentialJsonSchema
>;
export type LivelinessConfidenceCredentialSchemaType = Static<typeof livelinessConfidenceCredentialJsonSchema>;
export type FacialMatchCredentialSchemaType = Static<typeof facialMatchCredentialJsonSchema>;
export type FacialMatchConfidenceCredentialSchemaType = Static<typeof facialMatchConfidenceCredentialJsonSchema>;
export type GovernmentIdTypeCredentialSchemaType = Static<typeof governmentIdTypeCredentialJsonSchema>;
export type SexCredentialSchemaType = Static<typeof sexCredentialJsonSchema>;
export type GovernmentIdDocumentBackImageCredentialSchemaType = Static<
  typeof governmentIdDocumentBackImageCredentialJsonSchema
>;
export type NationalityCredentialSchemaType = Static<typeof nationalityCredentialJsonSchema>;
export type GovernmentIdStateCredentialSchemaType = Static<typeof governmentIdStateCredentialJsonSchema>;
export type GovernmentIdNumberCredentialSchemaType = Static<typeof governmentIdNumberCredentialJsonSchema>;
export type GovernmentIdExpirationDateCredentialSchemaType = Static<
  typeof governmentIdExpirationDateCredentialJsonSchema
>;
export type GovernmentIdIssuanceDateCredentialSchemaType = Static<
  typeof governmentIdIssuanceDateCredentialJsonSchema
>;
export type EmployerCredentialSchemaType = Static<typeof employerCredentialJsonSchema>;
export type TitleCredentialSchemaType = Static<typeof titleCredentialJsonSchema>;
export type AnnualIncomeCredentialSchemaType = Static<typeof annualIncomeCredentialJsonSchema>;
export type IncomeCurrencyCredentialSchemaType = Static<typeof incomeCurrencyCredentialJsonSchema>;
export type AnnualIncomeRangeCredentialSchemaType = Static<typeof annualIncomeRangeCredentialJsonSchema>;

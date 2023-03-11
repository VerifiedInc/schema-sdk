import { Static } from '@sinclair/typebox';
import {
  addressCredentialSchema,
  birthDateCredentialSchema,
  countryResidenceCredentialSchema,
  emailCredentialSchema,
  facialImageCredentialSchema,
  facialMatchConfidenceCredentialSchema,
  facialMatchCredentialSchema,
  firstNameCredentialSchema,
  fullNameCredentialSchema,
  genderCredentialSchema,
  governmentIdDocumentBackImageCredentialSchema,
  governmentIdDocumentImageCredentialSchema,
  governmentIdTypeCredentialSchema,
  lastNameCredentialSchema,
  livelinessConfidenceCredentialSchema,
  livelinessCredentialSchema,
  phoneCredentialSchema,
  ssnCredentialSchema,
  nationalityCredentialSchema,
  governmentIdStateCredentialSchema,
  governmentIdNumberCredentialSchema,
  governmentIdExpirationDateCredentialSchema,
  governmentIdIssuanceDateCredentialSchema
} from './jsonSchemas';

export type SsnCredentialSchemaType = Static<typeof ssnCredentialSchema>;
export type EmailCredentialSchemaType = Static<typeof emailCredentialSchema>;
export type IdentityCredentialSchemaType = Static<typeof identityCredentialSchema>;
export type CountryResidenceCredentialSchemaType = Static<typeof countryResidenceCredentialSchema>;
export type FacialImageCredentialSchemaType = Static<typeof facialImageCredentialSchema>;
export type LivelinessCredentialSchemaType = Static<typeof livelinessCredentialSchema>;
export type AddressCredentialSchemaType = Static<typeof addressCredentialSchema>;
export type LastNameCredentialSchemaType = Static<typeof lastNameCredentialSchema>;
export type FirstNameCredentialSchemaType = Static<typeof firstNameCredentialSchema>;
export type BirthDateCredentialSchemaType = Static<typeof birthDateCredentialSchema>;
export type DobCredentialSchemaType = Static<typeof dobCredentialSchema>;
export type PhoneCredentialSchemaType = Static<typeof phoneCredentialSchema>;
export type FullNameCredentialSchemaType = Static<typeof fullNameCredentialSchema>;
export type GenderCredentialSchemaType = Static<typeof genderCredentialSchema>;
export type GovernmentIdDocumentImageCredentialSchemaType = Static<
  typeof governmentIdDocumentImageCredentialSchema
>;
export type LivelinessConfidenceCredentialSchemaType = Static<typeof livelinessConfidenceCredentialSchema>;
export type FacialMatchCredentialSchemaType = Static<typeof facialMatchCredentialSchema>;
export type FacialMatchConfidenceCredentialSchemaType = Static<typeof facialMatchConfidenceCredentialSchema>;
export type GovernmentIdTypeCredentialSchemaType = Static<typeof governmentIdTypeCredentialSchema>;
export type GovernmentIdDocumentBackImageCredentialSchemaType = Static<
  typeof governmentIdDocumentBackImageCredentialSchema
>;
export type NationalityCredentialSchemaType = Static<typeof nationalityCredentialSchema>;
export type GovernmentIdStateCredentialSchemaType = Static<typeof governmentIdStateCredentialSchema>;
export type GovernmentIdNumberCredentialSchemaType = Static<typeof governmentIdNumberCredentialSchema>;
export type GovernmentIdExpirationDateCredentialSchemaType = Static<
  typeof governmentIdExpirationDateCredentialSchema
>;
export type GovernmentIdIssuanceDateCredentialSchemaType = Static<
  typeof governmentIdIssuanceDateCredentialSchema
>;

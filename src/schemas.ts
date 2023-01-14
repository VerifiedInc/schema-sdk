import { addressCredentialJsonLDSchema, birthDateCredentialJsonLDSchema, countryResidenceCredentialJsonLDSchema, dobCredentialJsonLDSchema, emailCredentialJsonLDSchema, facialImageCredentialJsonLDSchema, facialMatchConfidenceCredentialJsonLDSchema, facialMatchCredentialJsonLDSchema, firstNameCredentialJsonLDSchema, fullNameCredentialJsonLDSchema, genderCredentialJsonLDSchema, governmentIdDocumentImageCredentialJsonLDSchema, governmentIdTypeCredentialJsonLDSchema, identityCredentialJsonLDSchema, lastNameCredentialJsonLDSchema, livelinessConfidenceCredentialJsonLDSchema, livelinessCredentialJsonLDSchema, phoneCredentialJsonLDSchema, ssnCredentialJsonLDSchema, UnumJsonLDSchema } from './jsonLDSchemas';
import { addressCredentialJsonSchema, birthDateCredentialJsonSchema, countryResidenceCredentialJsonSchema, dobCredentialJsonSchema, emailCredentialJsonSchema, facialImageCredentialJsonSchema, facialMatchConfidenceCredentialJsonSchema, facialMatchCredentialJsonSchema, firstNameCredentialJsonSchema, fullNameCredentialJsonSchema, genderCredentialJsonSchema, governmentIdDocumentImageCredentialJsonSchema, governmentIdTypeCredentialJsonSchema, identityCredentialJsonSchema, lastNameCredentialJsonSchema, livelinessConfidenceCredentialJsonSchema, livelinessCredentialJsonSchema, phoneCredentialJsonSchema, UnumJsonSchema } from './jsonSchemas';

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
    json: emailCredentialJsonSchema,
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
  DobCredential: { // TODO: remove this in favor of BirthDateCredential, however the old Hyperverge creds issued dobCredentials so keeping for backwards compatibility
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
  }
};

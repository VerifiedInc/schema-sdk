import { TObject, TProperties, Type } from '@sinclair/typebox';

/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
export interface UnumJsonSchema extends TObject<TProperties> {
  $id: string; // UnumID schema definitions will always have a valid $id property
}

export const emailCredentialJsonSchema = Type.Object({
  email: Type.String({
    format: 'email'
  })
},
{ $id: 'EmailCredential', additionalProperties: false }) as UnumJsonSchema;

export const ssnCredentialJsonSchema = Type.Object({
  ssn: Type.String({
    format: 'ssn'
  })
},
{ $id: 'SsnCredential', additionalProperties: false }) as UnumJsonSchema;

export const countryResidenceCredentialJsonSchema = Type.Object({
  country: Type.String()
},
{ $id: 'CountryResidenceCredential', additionalProperties: false }) as UnumJsonSchema;

export const facialImageCredentialJsonSchema = Type.Object({
  image: Type.String({
    contentEncoding: 'base64'
  })
},
{ $id: 'FacialImageCredential', additionalProperties: false }) as UnumJsonSchema;

export const livelinessCredentialJsonSchema = Type.Object({
  liveness: Type.String()
},
{ $id: 'LivelinessCredential', additionalProperties: false }) as UnumJsonSchema;

export const addressCredentialJsonSchema = Type.Object({
  address: Type.String()
},
{ $id: 'AddressCredential', additionalProperties: false }) as UnumJsonSchema;

export const lastNameCredentialJsonSchema = Type.Object({
  lastName: Type.String()
},
{ $id: 'LastNameCredential', additionalProperties: false }) as UnumJsonSchema;

export const firstNameCredentialJsonSchema = Type.Object({
  firstName: Type.String()
},
{ $id: 'FirstNameCredential', additionalProperties: false }) as UnumJsonSchema;

export const birthDateCredentialJsonSchema = Type.Object({
  birthDate: Type.String()
},
{ $id: 'BirthDateCredential', additionalProperties: false }) as UnumJsonSchema;

export const phoneCredentialJsonSchema = Type.Object({
  phone: Type.String({
    format: 'phone'
  })
},
{ $id: 'PhoneCredential', additionalProperties: false }) as UnumJsonSchema;

export const fullNameCredentialJsonSchema = Type.Object({
  fullName: Type.String()
},
{ $id: 'FullNameCredential', additionalProperties: false }) as UnumJsonSchema;

export const genderCredentialJsonSchema = Type.Object({
  gender: Type.String()
},
{ $id: 'GenderCredential', additionalProperties: false }) as UnumJsonSchema;

export const governmentIdDocumentImageCredentialJsonSchema = Type.Object({
  image: Type.String({
    contentEncoding: 'base64'
  })
},
{ $id: 'GovernmentIdDocumentImageCredential', additionalProperties: false }) as UnumJsonSchema;

export const livelinessConfidenceCredentialJsonSchema = Type.Object({
  confidence: Type.String()
},
{ $id: 'LivelinessConfidenceCredential', additionalProperties: false }) as UnumJsonSchema;

export const facialMatchCredentialJsonSchema = Type.Object({
  match: Type.String()
},
{ $id: 'FacialMatchCredential', additionalProperties: false }) as UnumJsonSchema;

export const facialMatchConfidenceCredentialJsonSchema = Type.Object({
  confidence: Type.String()
},
{ $id: 'FacialMatchConfidenceCredential', additionalProperties: false }) as UnumJsonSchema;

export const governmentIdTypeCredentialJsonSchema = Type.Object({
  documentType: Type.String()
},
{ $id: 'GovernmentIdTypeCredential', additionalProperties: false }) as UnumJsonSchema;

export const governmentIdDocumentBackImageCredentialJsonSchema = Type.Object({
  image: Type.String({
    contentEncoding: 'base64'
  })
},
{ $id: 'GovernmentIdDocumentBackImageCredential', additionalProperties: false }) as UnumJsonSchema;

export const jsonSchemas: Record<string, UnumJsonSchema> = {
  EmailCredential: emailCredentialJsonSchema,
  SsnCredential: ssnCredentialJsonSchema,
  CountryResidenceCredential: countryResidenceCredentialJsonSchema,
  FacialImageCredential: facialImageCredentialJsonSchema,
  LivelinessCredential: livelinessCredentialJsonSchema,
  AddressCredential: addressCredentialJsonSchema,
  LastNameCredential: lastNameCredentialJsonSchema,
  FirstNameCredential: firstNameCredentialJsonSchema,
  BirthDateCredential: birthDateCredentialJsonSchema,
  PhoneCredential: phoneCredentialJsonSchema,
  FullNameCredential: fullNameCredentialJsonSchema,
  GenderCredential: genderCredentialJsonSchema,
  GovernmentIdDocumentImageCredential: governmentIdDocumentImageCredentialJsonSchema,
  LivelinessConfidenceCredential: livelinessConfidenceCredentialJsonSchema,
  FacialMatchCredential: facialMatchCredentialJsonSchema,
  FacialMatchConfidenceCredential: facialMatchConfidenceCredentialJsonSchema,
  GovernmentIdTypeCredential: governmentIdTypeCredentialJsonSchema,
  GovernmentIdDocumentBackImageCredential: governmentIdDocumentBackImageCredentialJsonSchema
};
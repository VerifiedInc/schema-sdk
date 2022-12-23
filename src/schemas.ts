import { Type } from '@sinclair/typebox';

export const emailCredentialSchema = Type.Object({
  email: Type.String({
    format: 'email'
  })
},
{ $id: 'EmailCredential', additionalProperties: false });

export const ssnCredentialSchema = Type.Object({
  ssn: Type.String({
    format: 'ssn'
  })
},
{ $id: 'SsnCredential', additionalProperties: false });

export const countryResidenceCredentialSchema = Type.Object({
  country: Type.String()
},
{ $id: 'CountryResidenceCredential', additionalProperties: false });

export const facialImageCredentialSchema = Type.Object({
  image: Type.String({
    contentEncoding: 'base64'
  })
},
{ $id: 'FacialImageCredential', additionalProperties: false });

export const livelinessCredentialSchema = Type.Object({
  liveness: Type.String()
},
{ $id: 'LivelinessCredential', additionalProperties: false });

export const addressCredentialSchema = Type.Object({
  address: Type.String()
},
{ $id: 'AddressCredential', additionalProperties: false });

export const lastNameCredentialSchema = Type.Object({
  lastName: Type.String()
},
{ $id: 'LastNameCredential', additionalProperties: false });

export const firstNameCredentialSchema = Type.Object({
  firstName: Type.String()
},
{ $id: 'FirstNameCredential', additionalProperties: false });

export const birthDateCredentialSchema = Type.Object({
  birthDate: Type.String()
},
{ $id: 'BirthDateCredential', additionalProperties: false });

export const phoneCredentialSchema = Type.Object({
  phone: Type.String({
    format: 'phone'
  })
},
{ $id: 'PhoneCredential', additionalProperties: false });

export const fullNameCredentialSchema = Type.Object({
  fullName: Type.String()
},
{ $id: 'FullNameCredential', additionalProperties: false });

export const genderCredential = Type.Object({
  gender: Type.String()
},
{ $id: 'GenderCredential', additionalProperties: false });

export const governmentIdDocumentImageCredentialSchema = Type.Object({
  image: Type.String({
    contentEncoding: 'base64'
  })
},
{ $id: 'GovernmentIdDocumentImageCredential', additionalProperties: false });

export const livelinessConfidenceCredentialSchema = Type.Object({
  confidence: Type.String()
},
{ $id: 'LivelinessConfidenceCredential', additionalProperties: false });

export const facialMatchCredentialSchema = Type.Object({
  match: Type.String()
},
{ $id: 'FacialMatchCredential', additionalProperties: false });

export const facialMatchConfidenceCredentialSchema = Type.Object({
  confidence: Type.String()
},
{ $id: 'FacialMatchConfidenceCredential', additionalProperties: false });

export const governmentIdTypeCredentialSchema = Type.Object({
  documentType: Type.String()
},
{ $id: 'GovernmentIdTypeCredential', additionalProperties: false });

export const governmentIdDocumentBackImageCredentialSchema = Type.Object({
  image: Type.String({
    contentEncoding: 'base64'
  })
},
{ $id: 'GovernmentIdDocumentBackImageCredential', additionalProperties: false });

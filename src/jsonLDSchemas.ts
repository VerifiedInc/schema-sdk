/**
 * UnumID Json-LD schema type.
 * TODO figure out how to type this.
 */
export type UnumJsonLDSchema = any;

export const emailCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'EmailCredential',
  email: 'schema:email',
  '@context': 'https://schema.unumid.co'
};

// special credential that is actually empty
export const identityCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'IdentityCredential',
  '@context': 'https://schema.unumid.co'
};

export const ssnCredentialJsonLDSchema: UnumJsonLDSchema = {
  ssn: 'schema:ssn',
  '@type': 'SsnCredential',
  '@context': 'https://schema.unumid.co'
};

export const countryResidenceCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'CountryResidenceCredential',
  country: 'schema:addressCountry',
  '@context': 'https://schema.dev-unumid.co'
};

export const nationalityCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'NationalityCredential',
  nationality: 'schema:nationality',
  '@context': 'https://schema.dev-unumid.co'
};

export const facialImageCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'FacialImageCredential',
  image: 'schema:faceImage',
  '@context': 'https://schema.dev-unumid.co'
};

export const livelinessCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'LivelinessCredential',
  '@context': 'https://schema.dev-unumid.co',
  liveliness: 'schema:liveliness'
};

export const addressCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'AddressCredential',
  address: 'schema:address',
  '@context': 'https://schema.unumid.co'
};

export const lastNameCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'LastNameCredential',
  '@context': 'https://schema.unumid.co',
  lastName: 'schema:lastName'
};

export const firstNameCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'FirstNameCredential',
  '@context': 'https://schema.unumid.co',
  firstName: 'schema:firstName'
};

export const birthDateCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'BirthDateCredential',
  '@context': 'https://schema.dev-unumid.co',
  birthDate: 'schema:birthDate'
};

export const dobCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'DobCredential',
  '@context': 'https://schema.dev-unumid.co',
  dob: 'schema:birthDate'
};

export const phoneCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'PhoneCredential',
  phone: 'schema:phoneNumber',
  '@context': 'https://schema.dev-unumid.co'
};

export const fullNameCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'FullNameCredential',
  '@context': 'https://schema.dev-unumid.co',
  fullName: 'schema:fullName'
};

export const genderCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GenderCredential',
  gender: 'schema:gender',
  '@context': 'https://schema.dev-unumid.co'
};

export const governmentIdDocumentImageCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GovernmentIdDocumentImageCredential',
  image: 'schema:documentImage',
  '@context': 'https://schema.dev-unumid.co'
};

export const livelinessConfidenceCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'LivelinessConfidenceCredential',
  '@context': 'https://schema.dev-unumid.co',
  confidence: 'schema:livelinessConfidence'
};

export const facialMatchCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'FacialMatchCredential',
  match: 'schema:facialMatch',
  '@context': 'https://schema.dev-unumid.co'
};

export const facialMatchConfidenceCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'FacialMatchConfidenceCredential',
  '@context': 'https://schema.dev-unumid.co',
  confidence: 'schema:facialMatchConfidence'
};

export const governmentIdTypeCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GovernmentIdTypeCredential',
  '@context': 'https://schema.dev-unumid.co',
  documentType: 'schema:documentType'
};

export const governmentIdDocumentBackImageCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GovernmentIdDocumentBackImageCredential',
  image: 'schema:documentImage',
  '@context': 'https://schema.unumid.co/context'
};

export const jsonLDSchemas: Record<string, UnumJsonLDSchema> = {
  EmailCredential: emailCredentialJsonLDSchema,
  IdentityCredential: identityCredentialJsonLDSchema,
  SsnCredential: ssnCredentialJsonLDSchema,
  CountryResidenceCredential: countryResidenceCredentialJsonLDSchema,
  NationalityCredential: nationalityCredentialJsonLDSchema,
  FacialImageCredential: facialImageCredentialJsonLDSchema,
  LivelinessCredential: livelinessCredentialJsonLDSchema,
  AddressCredential: addressCredentialJsonLDSchema,
  LastNameCredential: lastNameCredentialJsonLDSchema,
  FirstNameCredential: firstNameCredentialJsonLDSchema,
  BirthDateCredential: birthDateCredentialJsonLDSchema,
  PhoneCredential: phoneCredentialJsonLDSchema,
  FullNameCredential: fullNameCredentialJsonLDSchema,
  GenderCredential: genderCredentialJsonLDSchema,
  GovernmentIdDocumentImageCredential: governmentIdDocumentImageCredentialJsonLDSchema,
  LivelinessConfidenceCredential: livelinessConfidenceCredentialJsonLDSchema,
  FacialMatchCredential: facialMatchCredentialJsonLDSchema,
  FacialMatchConfidenceCredential: facialMatchConfidenceCredentialJsonLDSchema,
  GovernmentIdTypeCredential: governmentIdTypeCredentialJsonLDSchema,
  GovernmentIdDocumentBackImageCredential: governmentIdDocumentBackImageCredentialJsonLDSchema
};

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
  '@context': 'https://schema.unumid.co'
};

export const nationalityCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'NationalityCredential',
  nationality: 'schema:nationality',
  '@context': 'https://schema.unumid.co'
};

export const facialImageCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'FacialImageCredential',
  image: 'schema:faceImage',
  '@context': 'https://schema.unumid.co'
};

export const livelinessCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'LivelinessCredential',
  '@context': 'https://schema.unumid.co',
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
  '@context': 'https://schema.unumid.co',
  birthDate: 'schema:birthDate'
};

export const dobCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'DobCredential',
  '@context': 'https://schema.unumid.co',
  dob: 'schema:birthDate'
};

export const phoneCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'PhoneCredential',
  phone: 'schema:phoneNumber',
  '@context': 'https://schema.unumid.co'
};

export const fullNameCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'FullNameCredential',
  '@context': 'https://schema.unumid.co',
  fullName: 'schema:fullName'
};

export const genderCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GenderCredential',
  gender: 'schema:gender',
  '@context': 'https://schema.unumid.co'
};

export const sexCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'SexCredential',
  sex: 'schema:sex',
  '@context': 'https://schema.unumid.co'
};

export const governmentIdDocumentImageCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GovernmentIdDocumentImageCredential',
  image: 'schema:governmentIDDocumentImage',
  '@context': 'https://schema.unumid.co'
};

export const livelinessConfidenceCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'LivelinessConfidenceCredential',
  '@context': 'https://schema.unumid.co',
  confidence: 'schema:livelinessConfidence'
};

export const facialMatchCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'FacialMatchCredential',
  match: 'schema:facialMatch',
  '@context': 'https://schema.unumid.co'
};

export const facialMatchConfidenceCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'FacialMatchConfidenceCredential',
  '@context': 'https://schema.unumid.co',
  confidence: 'schema:facialMatchConfidence'
};

export const governmentIdTypeCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GovernmentIdTypeCredential',
  '@context': 'https://schema.unumid.co',
  documentType: 'schema:documentType'
};

export const governmentIdDocumentBackImageCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GovernmentIdDocumentBackImageCredential',
  image: 'schema:documentImage',
  '@context': 'https://schema.unumid.co/context'
};

export const governmentIdStateCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GovernmentIdStateCredential',
  '@context': 'https://schema.unumid.co',
  state: 'schema:documentIssuingState'
};

export const governmentIdIssuanceDateCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GovernmentIdIssuanceDateCredential',
  '@context': 'https://schema.unumid.co',
  issuanceDate: 'schema:documentIssuanceDate'
};

export const governmentIdExpirationDateCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GovernmentIdExpirationDateCredential',
  '@context': 'https://schema.unumid.co',
  expirationDate: 'schema:documentExpirationDate'
};

export const governmentIdNumberCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'GovernmentIdNumberCredential',
  '@context': 'https://schema.unumid.co',
  idNumber: 'schema:documentIdNumber'
};

export const employerJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'EmployerCredential',
  '@context': 'https://schema.unumid.co',
  employer: 'schema:CompanyName'
};

export const titleJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'TitleCredential',
  '@context': 'https://schema.unumid.co',
  title: 'schema:jobTitle'
};

export const annualIncomeJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'AnnualIncomeCredential',
  '@context': 'https://schema.unumid.co',
  income: 'schema:incomeWithCurrency'
};

export const incomeCurrencyJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'IncomeCurrencyCredential',
  '@context': 'https://schema.unumid.co',
  currency: 'schema:incomeCurrency'
};

export const annualIncomeRangeJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'AnnualIncomeRangeCredential',
  '@context': 'https://schema.unumid.co',
  income: 'schema:incomeRangeWithCurrency'
};

export const employmentStartDateJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'EmploymentStartDateCredential',
  '@context': 'https://schema.unumid.co',
  startDate: 'schema:Date'
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
  GovernmentIdDocumentBackImageCredential: governmentIdDocumentBackImageCredentialJsonLDSchema,
  DobCredential: dobCredentialJsonLDSchema,
  SexCredential: sexCredentialJsonLDSchema,
  GovernmentIdStateCredential: governmentIdStateCredentialJsonLDSchema,
  GovernmentIdIssuanceDateCredential: governmentIdIssuanceDateCredentialJsonLDSchema,
  GovernmentIdExpirationDateCredential: governmentIdExpirationDateCredentialJsonLDSchema,
  GovernmentIdNumberCredential: governmentIdNumberCredentialJsonLDSchema,
  EmployerCredential: employerJsonLDSchema,
  TitleCredential: titleJsonLDSchema,
  AnnualIncomeCredential: annualIncomeJsonLDSchema,
  IncomeCurrencyCredential: incomeCurrencyJsonLDSchema,
  AnnualIncomeRangeCredential: annualIncomeJsonLDSchema,
  EmploymentStartDateCredential: employmentStartDateJsonLDSchema
};

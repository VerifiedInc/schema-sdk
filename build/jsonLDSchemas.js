"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonJsonLDSchemas = exports.governmentIdDocumentBackImageCredentialJsonLDSchema = exports.governmentIdTypeCredentialJsonLDSchema = exports.facialMatchConfidenceCredentialJsonLDSchema = exports.facialMatchCredentialJsonLDSchema = exports.livelinessConfidenceCredentialJsonLDSchema = exports.governmentIdDocumentImageCredentialJsonLDSchema = exports.genderCredentialJsonLDSchema = exports.fullNameCredentialJsonLDSchema = exports.phoneCredentialJsonLDSchema = exports.birthDateCredentialJsonLDSchema = exports.firstNameCredentialJsonLDSchema = exports.lastNameCredentialJsonLDSchema = exports.addressCredentialJsonLDSchema = exports.livelinessCredentialJsonLDSchema = exports.facialImageCredentialJsonLDSchema = exports.countryResidenceCredentialJsonLDSchema = exports.ssnCredentialJsonLDSchema = exports.emailCredentialJsonLDSchema = void 0;
exports.emailCredentialJsonLDSchema = {
    '@type': 'EmailCredential',
    email: 'schema:email',
    '@context': 'https://schema.unumid.co'
};
exports.ssnCredentialJsonLDSchema = {
    ssn: 'schema:ssn',
    '@type': 'SsnCredential',
    '@context': 'https://schema.unumid.co'
};
exports.countryResidenceCredentialJsonLDSchema = {
    '@type': 'CountryResidenceCredential',
    country: 'schema:addressCountry',
    '@context': 'https://schema.dev-unumid.co'
};
exports.facialImageCredentialJsonLDSchema = {
    '@type': 'FacialImageCredential',
    image: 'schema:faceImage',
    '@context': 'https://schema.dev-unumid.co'
};
exports.livelinessCredentialJsonLDSchema = {
    '@type': 'LivelinessCredential',
    '@context': 'https://schema.dev-unumid.co',
    liveliness: 'schema:liveliness'
};
exports.addressCredentialJsonLDSchema = {
    '@type': 'AddressCredential',
    address: 'schema:address',
    '@context': 'https://schema.unumid.co'
};
exports.lastNameCredentialJsonLDSchema = {
    '@type': 'LastNameCredential',
    '@context': 'https://schema.unumid.co',
    lastName: 'schema:lastName'
};
exports.firstNameCredentialJsonLDSchema = {
    '@type': 'FirstNameCredential',
    '@context': 'https://schema.unumid.co',
    firstName: 'schema:firstName'
};
exports.birthDateCredentialJsonLDSchema = {
    '@type': 'BirthDateCredential',
    '@context': 'https://schema.dev-unumid.co',
    birthDate: 'schema:birthDate'
};
exports.phoneCredentialJsonLDSchema = {
    '@type': 'PhoneCredential',
    phone: 'schema:phoneNumber',
    '@context': 'https://schema.dev-unumid.co'
};
exports.fullNameCredentialJsonLDSchema = {
    '@type': 'FullNameCredential',
    '@context': 'https://schema.dev-unumid.co',
    fullName: 'schema:fullName'
};
exports.genderCredentialJsonLDSchema = {
    '@type': 'GenderCredential',
    gender: 'schema:gender',
    '@context': 'https://schema.dev-unumid.co'
};
exports.governmentIdDocumentImageCredentialJsonLDSchema = {
    '@type': 'GovernmentIdDocumentImageCredential',
    image: 'schema:documentImage',
    '@context': 'https://schema.dev-unumid.co'
};
exports.livelinessConfidenceCredentialJsonLDSchema = {
    '@type': 'LivelinessConfidenceCredential',
    '@context': 'https://schema.dev-unumid.co',
    confidence: 'schema:livelinessConfidence'
};
exports.facialMatchCredentialJsonLDSchema = {
    '@type': 'FacialMatchCredential',
    match: 'schema:facialMatch',
    '@context': 'https://schema.dev-unumid.co'
};
exports.facialMatchConfidenceCredentialJsonLDSchema = {
    '@type': 'FacialMatchConfidenceCredential',
    '@context': 'https://schema.dev-unumid.co',
    confidence: 'schema:facialMatchConfidence'
};
exports.governmentIdTypeCredentialJsonLDSchema = {
    '@type': 'GovernmentIdTypeCredential',
    '@context': 'https://schema.dev-unumid.co',
    documentType: 'schema:documentType'
};
exports.governmentIdDocumentBackImageCredentialJsonLDSchema = {
    '@type': 'GovernmentIdDocumentBackImageCredential',
    image: 'schema:documentImage',
    '@context': 'https://schema.unumid.co/context'
};
exports.jsonJsonLDSchemas = {
    EmailCredential: exports.emailCredentialJsonLDSchema,
    SsnCredential: exports.ssnCredentialJsonLDSchema,
    CountryResidenceCredential: exports.countryResidenceCredentialJsonLDSchema,
    FacialImageCredential: exports.facialImageCredentialJsonLDSchema,
    LivelinessCredential: exports.livelinessCredentialJsonLDSchema,
    AddressCredential: exports.addressCredentialJsonLDSchema,
    LastNameCredential: exports.lastNameCredentialJsonLDSchema,
    FirstNameCredential: exports.firstNameCredentialJsonLDSchema,
    BirthDateCredential: exports.birthDateCredentialJsonLDSchema,
    PhoneCredential: exports.phoneCredentialJsonLDSchema,
    FullNameCredential: exports.fullNameCredentialJsonLDSchema,
    GenderCredential: exports.genderCredentialJsonLDSchema,
    GovernmentIdDocumentImageCredential: exports.governmentIdDocumentImageCredentialJsonLDSchema,
    LivelinessConfidenceCredential: exports.livelinessConfidenceCredentialJsonLDSchema,
    FacialMatchCredential: exports.facialMatchCredentialJsonLDSchema,
    FacialMatchConfidenceCredential: exports.facialMatchConfidenceCredentialJsonLDSchema,
    GovernmentIdTypeCredential: exports.governmentIdTypeCredentialJsonLDSchema,
    GovernmentIdDocumentBackImageCredential: exports.governmentIdDocumentBackImageCredentialJsonLDSchema
};
//# sourceMappingURL=jsonLDSchemas.js.map
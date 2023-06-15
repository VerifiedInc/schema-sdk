"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonLDSchemas = exports.employmentStartDateJsonLDSchema = exports.annualIncomeRangeJsonLDSchema = exports.incomeCurrencyJsonLDSchema = exports.annualIncomeJsonLDSchema = exports.titleJsonLDSchema = exports.employerJsonLDSchema = exports.governmentIdNumberCredentialJsonLDSchema = exports.governmentIdExpirationDateCredentialJsonLDSchema = exports.governmentIdIssuanceDateCredentialJsonLDSchema = exports.governmentIdStateCredentialJsonLDSchema = exports.governmentIdDocumentBackImageCredentialJsonLDSchema = exports.governmentIdTypeCredentialJsonLDSchema = exports.facialMatchConfidenceCredentialJsonLDSchema = exports.facialMatchCredentialJsonLDSchema = exports.livelinessConfidenceCredentialJsonLDSchema = exports.governmentIdDocumentImageCredentialJsonLDSchema = exports.sexCredentialJsonLDSchema = exports.genderCredentialJsonLDSchema = exports.fullNameCredentialJsonLDSchema = exports.phoneCredentialJsonLDSchema = exports.birthDateCredentialJsonLDSchema = exports.firstNameCredentialJsonLDSchema = exports.lastNameCredentialJsonLDSchema = exports.addressCredentialJsonLDSchema = exports.livelinessCredentialJsonLDSchema = exports.facialImageCredentialJsonLDSchema = exports.nationalityCredentialJsonLDSchema = exports.countryResidenceCredentialJsonLDSchema = exports.ssnCredentialJsonLDSchema = exports.identityCredentialJsonLDSchema = exports.emailCredentialJsonLDSchema = void 0;
exports.emailCredentialJsonLDSchema = {
    '@type': 'EmailCredential',
    email: 'schema:email',
    '@context': 'https://schema.unumid.co'
};
// special credential that is actually empty
exports.identityCredentialJsonLDSchema = {
    '@type': 'IdentityCredential',
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
    '@context': 'https://schema.unumid.co'
};
exports.nationalityCredentialJsonLDSchema = {
    '@type': 'NationalityCredential',
    nationality: 'schema:nationality',
    '@context': 'https://schema.unumid.co'
};
exports.facialImageCredentialJsonLDSchema = {
    '@type': 'FacialImageCredential',
    image: 'schema:faceImage',
    '@context': 'https://schema.unumid.co'
};
exports.livelinessCredentialJsonLDSchema = {
    '@type': 'LivelinessCredential',
    '@context': 'https://schema.unumid.co',
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
    '@context': 'https://schema.unumid.co',
    birthDate: 'schema:birthDate'
};
exports.phoneCredentialJsonLDSchema = {
    '@type': 'PhoneCredential',
    phone: 'schema:phoneNumber',
    '@context': 'https://schema.unumid.co'
};
exports.fullNameCredentialJsonLDSchema = {
    '@type': 'FullNameCredential',
    '@context': 'https://schema.unumid.co',
    fullName: 'schema:fullName'
};
exports.genderCredentialJsonLDSchema = {
    '@type': 'GenderCredential',
    gender: 'schema:gender',
    '@context': 'https://schema.unumid.co'
};
exports.sexCredentialJsonLDSchema = {
    '@type': 'SexCredential',
    sex: 'schema:sex',
    '@context': 'https://schema.unumid.co'
};
exports.governmentIdDocumentImageCredentialJsonLDSchema = {
    '@type': 'GovernmentIdDocumentImageCredential',
    image: 'schema:governmentIDDocumentImage',
    '@context': 'https://schema.unumid.co'
};
exports.livelinessConfidenceCredentialJsonLDSchema = {
    '@type': 'LivelinessConfidenceCredential',
    '@context': 'https://schema.unumid.co',
    confidence: 'schema:livelinessConfidence'
};
exports.facialMatchCredentialJsonLDSchema = {
    '@type': 'FacialMatchCredential',
    match: 'schema:facialMatch',
    '@context': 'https://schema.unumid.co'
};
exports.facialMatchConfidenceCredentialJsonLDSchema = {
    '@type': 'FacialMatchConfidenceCredential',
    '@context': 'https://schema.unumid.co',
    confidence: 'schema:facialMatchConfidence'
};
exports.governmentIdTypeCredentialJsonLDSchema = {
    '@type': 'GovernmentIdTypeCredential',
    '@context': 'https://schema.unumid.co',
    documentType: 'schema:documentType'
};
exports.governmentIdDocumentBackImageCredentialJsonLDSchema = {
    '@type': 'GovernmentIdDocumentBackImageCredential',
    image: 'schema:documentImage',
    '@context': 'https://schema.unumid.co/context'
};
exports.governmentIdStateCredentialJsonLDSchema = {
    '@type': 'GovernmentIdStateCredential',
    '@context': 'https://schema.unumid.co',
    state: 'schema:documentIssuingState'
};
exports.governmentIdIssuanceDateCredentialJsonLDSchema = {
    '@type': 'GovernmentIdIssuanceDateCredential',
    '@context': 'https://schema.unumid.co',
    issuanceDate: 'schema:documentIssuanceDate'
};
exports.governmentIdExpirationDateCredentialJsonLDSchema = {
    '@type': 'GovernmentIdExpirationDateCredential',
    '@context': 'https://schema.unumid.co',
    expirationDate: 'schema:documentExpirationDate'
};
exports.governmentIdNumberCredentialJsonLDSchema = {
    '@type': 'GovernmentIdNumberCredential',
    '@context': 'https://schema.unumid.co',
    idNumber: 'schema:documentIdNumber'
};
exports.employerJsonLDSchema = {
    '@type': 'EmployerCredential',
    '@context': 'https://schema.unumid.co',
    employer: 'schema:CompanyName'
};
exports.titleJsonLDSchema = {
    '@type': 'TitleCredential',
    '@context': 'https://schema.unumid.co',
    title: 'schema:jobTitle'
};
exports.annualIncomeJsonLDSchema = {
    '@type': 'AnnualIncomeCredential',
    '@context': 'https://schema.unumid.co',
    income: 'schema:incomeWithCurrency'
};
exports.incomeCurrencyJsonLDSchema = {
    '@type': 'IncomeCurrencyCredential',
    '@context': 'https://schema.unumid.co',
    currency: 'schema:incomeCurrency'
};
exports.annualIncomeRangeJsonLDSchema = {
    '@type': 'AnnualIncomeRangeCredential',
    '@context': 'https://schema.unumid.co',
    income: 'schema:incomeRangeWithCurrency'
};
exports.employmentStartDateJsonLDSchema = {
    '@type': 'EmploymentStartDateCredential',
    '@context': 'https://schema.unumid.co',
    startDate: 'schema:startDate'
};
exports.jsonLDSchemas = {
    EmailCredential: exports.emailCredentialJsonLDSchema,
    IdentityCredential: exports.identityCredentialJsonLDSchema,
    SsnCredential: exports.ssnCredentialJsonLDSchema,
    CountryResidenceCredential: exports.countryResidenceCredentialJsonLDSchema,
    NationalityCredential: exports.nationalityCredentialJsonLDSchema,
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
    GovernmentIdDocumentBackImageCredential: exports.governmentIdDocumentBackImageCredentialJsonLDSchema,
    SexCredential: exports.sexCredentialJsonLDSchema,
    GovernmentIdStateCredential: exports.governmentIdStateCredentialJsonLDSchema,
    GovernmentIdIssuanceDateCredential: exports.governmentIdIssuanceDateCredentialJsonLDSchema,
    GovernmentIdExpirationDateCredential: exports.governmentIdExpirationDateCredentialJsonLDSchema,
    GovernmentIdNumberCredential: exports.governmentIdNumberCredentialJsonLDSchema,
    EmployerCredential: exports.employerJsonLDSchema,
    TitleCredential: exports.titleJsonLDSchema,
    AnnualIncomeCredential: exports.annualIncomeJsonLDSchema,
    IncomeCurrencyCredential: exports.incomeCurrencyJsonLDSchema,
    AnnualIncomeRangeCredential: exports.annualIncomeJsonLDSchema,
    EmploymentStartDateCredential: exports.employmentStartDateJsonLDSchema
};
//# sourceMappingURL=jsonLDSchemas.js.map
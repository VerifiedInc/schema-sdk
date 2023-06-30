"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const jsonLDSchemas_1 = require("./jsonLDSchemas");
const jsonSchemas_1 = require("./jsonSchemas");
exports.schemas = {
    EmailCredential: {
        json: jsonSchemas_1.emailCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.emailCredentialJsonLDSchema
    },
    IdentityCredential: {
        json: jsonSchemas_1.identityCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.identityCredentialJsonLDSchema
    },
    SsnCredential: {
        json: jsonSchemas_1.ssnCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.ssnCredentialJsonLDSchema
    },
    CountryResidenceCredential: {
        json: jsonSchemas_1.countryResidenceCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.countryResidenceCredentialJsonLDSchema
    },
    FacialImageCredential: {
        json: jsonSchemas_1.facialImageCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.facialImageCredentialJsonLDSchema
    },
    LivenessCredential: {
        json: jsonSchemas_1.livenessCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.livenessCredentialJsonLDSchema
    },
    AddressCredential: {
        json: jsonSchemas_1.addressCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.addressCredentialJsonLDSchema
    },
    LastNameCredential: {
        json: jsonSchemas_1.lastNameCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.lastNameCredentialJsonLDSchema
    },
    FirstNameCredential: {
        json: jsonSchemas_1.firstNameCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.firstNameCredentialJsonLDSchema
    },
    BirthDateCredential: {
        json: jsonSchemas_1.birthDateCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.birthDateCredentialJsonLDSchema
    },
    PhoneCredential: {
        json: jsonSchemas_1.phoneCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.phoneCredentialJsonLDSchema
    },
    FullNameCredential: {
        json: jsonSchemas_1.fullNameCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.fullNameCredentialJsonLDSchema
    },
    GenderCredential: {
        json: jsonSchemas_1.genderCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.genderCredentialJsonLDSchema
    },
    GovernmentIdDocumentImageCredential: {
        json: jsonSchemas_1.governmentIdDocumentImageCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.governmentIdDocumentImageCredentialJsonLDSchema
    },
    FacialMatchCredential: {
        json: jsonSchemas_1.facialMatchCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.facialMatchCredentialJsonLDSchema
    },
    GovernmentIdTypeCredential: {
        json: jsonSchemas_1.governmentIdTypeCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.governmentIdTypeCredentialJsonLDSchema
    },
    GovernmentIdDocumentBackImageCredential: {
        json: jsonSchemas_1.governmentIdDocumentBackImageCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.governmentIdDocumentBackImageCredentialJsonLDSchema
    },
    SexCredential: {
        json: jsonSchemas_1.sexCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.sexCredentialJsonLDSchema
    },
    NationalityCredential: {
        json: jsonSchemas_1.nationalityCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.nationalityCredentialJsonLDSchema
    },
    GovernmentIdStateCredential: {
        json: jsonSchemas_1.governmentIdStateCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.governmentIdStateCredentialJsonLDSchema
    },
    GovernmentIdNumberCredential: {
        json: jsonSchemas_1.governmentIdNumberCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.governmentIdNumberCredentialJsonLDSchema
    },
    GovernmentIdIssuanceDateCredential: {
        json: jsonSchemas_1.governmentIdIssuanceDateCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.governmentIdIssuanceDateCredentialJsonLDSchema
    },
    GovernmentIdExpirationDateCredential: {
        json: jsonSchemas_1.governmentIdExpirationDateCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.governmentIdExpirationDateCredentialJsonLDSchema
    },
    EmployerCredential: {
        json: jsonSchemas_1.employerCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.employerJsonLDSchema
    },
    TitleCredential: {
        json: jsonSchemas_1.titleCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.titleJsonLDSchema
    },
    AnnualIncomeCredential: {
        json: jsonSchemas_1.annualIncomeCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.annualIncomeJsonLDSchema
    },
    IncomeCurrencyCredential: {
        json: jsonSchemas_1.incomeCurrencyCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.incomeCurrencyJsonLDSchema
    },
    AnnualIncomeRangeCredential: {
        json: jsonSchemas_1.annualIncomeRangeCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.annualIncomeRangeJsonLDSchema
    },
    EmploymentStartDateCredential: {
        json: jsonSchemas_1.employmentStartDateCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.employmentStartDateJsonLDSchema
    }
};
//# sourceMappingURL=schemas.js.map
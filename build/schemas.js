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
    LivelinessCredential: {
        json: jsonSchemas_1.livelinessCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.livelinessCredentialJsonLDSchema
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
    DobCredential: {
        // TODO: remove this in favor of BirthDateCredential, however the old Hyperverge creds issued dobCredentials so keeping for backwards compatibility
        json: jsonSchemas_1.dobCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.dobCredentialJsonLDSchema
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
    LivelinessConfidenceCredential: {
        json: jsonSchemas_1.livelinessConfidenceCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.livelinessConfidenceCredentialJsonLDSchema
    },
    FacialMatchCredential: {
        json: jsonSchemas_1.facialMatchCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.facialMatchCredentialJsonLDSchema
    },
    FacialMatchConfidenceCredential: {
        json: jsonSchemas_1.facialMatchConfidenceCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.facialMatchConfidenceCredentialJsonLDSchema
    },
    GovernmentIdTypeCredential: {
        json: jsonSchemas_1.governmentIdTypeCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.governmentIdTypeCredentialJsonLDSchema
    },
    GovernmentIdDocumentBackImageCredential: {
        json: jsonSchemas_1.governmentIdDocumentImageCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.governmentIdDocumentImageCredentialJsonLDSchema
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
    IncomeCredential: {
        json: jsonSchemas_1.incomeCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.incomeJsonLDSchema
    },
    IncomeCurrencyCredential: {
        json: jsonSchemas_1.incomeCurrencyCredentialJsonSchema,
        jsonLD: jsonLDSchemas_1.incomeCurrencyJsonLDSchema
    }
};
//# sourceMappingURL=schemas.js.map
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
        json: jsonSchemas_1.emailCredentialJsonSchema,
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
    }
};
//# sourceMappingURL=schemas.js.map
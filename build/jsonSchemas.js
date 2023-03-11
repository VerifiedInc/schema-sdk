"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonSchemas = exports.governmentIdExpirationDateCredentialJsonSchema = exports.governmentIdIssuanceDateCredentialJsonSchema = exports.governmentIdNumberCredentialJsonSchema = exports.governmentIdStateCredentialJsonSchema = exports.governmentIdDocumentBackImageCredentialJsonSchema = exports.governmentIdTypeCredentialJsonSchema = exports.facialMatchConfidenceCredentialJsonSchema = exports.facialMatchCredentialJsonSchema = exports.livelinessConfidenceCredentialJsonSchema = exports.governmentIdDocumentImageCredentialJsonSchema = exports.genderCredentialJsonSchema = exports.fullNameCredentialJsonSchema = exports.phoneCredentialJsonSchema = exports.dobCredentialJsonSchema = exports.birthDateCredentialJsonSchema = exports.firstNameCredentialJsonSchema = exports.lastNameCredentialJsonSchema = exports.addressCredentialJsonSchema = exports.livelinessCredentialJsonSchema = exports.facialImageCredentialJsonSchema = exports.nationalityCredentialJsonSchema = exports.countryResidenceCredentialJsonSchema = exports.ssnCredentialJsonSchema = exports.identityCredentialJsonSchema = exports.emailCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.emailCredentialJsonSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String({
        format: 'email'
    })
}, { $id: 'EmailCredential', additionalProperties: false });
// special credential that is actually empty
exports.identityCredentialJsonSchema = typebox_1.Type.Object({}, { $id: 'IdentityCredential', additionalProperties: false });
exports.ssnCredentialJsonSchema = typebox_1.Type.Object({
    ssn: typebox_1.Type.String({
        format: 'ssn'
    })
}, { $id: 'SsnCredential', additionalProperties: false });
exports.countryResidenceCredentialJsonSchema = typebox_1.Type.Object({
    country: typebox_1.Type.String()
}, { $id: 'CountryResidenceCredential', additionalProperties: false });
exports.nationalityCredentialJsonSchema = typebox_1.Type.Object({
    nationality: typebox_1.Type.String()
}, { $id: 'NationalityCredential', additionalProperties: false });
exports.facialImageCredentialJsonSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        contentEncoding: 'base64'
    })
}, { $id: 'FacialImageCredential', additionalProperties: false });
exports.livelinessCredentialJsonSchema = typebox_1.Type.Object({
    liveness: typebox_1.Type.String()
}, { $id: 'LivelinessCredential', additionalProperties: false });
exports.addressCredentialJsonSchema = typebox_1.Type.Object({
    address: typebox_1.Type.String()
}, { $id: 'AddressCredential', additionalProperties: false });
exports.lastNameCredentialJsonSchema = typebox_1.Type.Object({
    lastName: typebox_1.Type.String()
}, { $id: 'LastNameCredential', additionalProperties: false });
exports.firstNameCredentialJsonSchema = typebox_1.Type.Object({
    firstName: typebox_1.Type.String()
}, { $id: 'FirstNameCredential', additionalProperties: false });
exports.birthDateCredentialJsonSchema = typebox_1.Type.Object({
    birthDate: typebox_1.Type.String()
}, { $id: 'BirthDateCredential', additionalProperties: false });
exports.dobCredentialJsonSchema = typebox_1.Type.Object({
    dob: typebox_1.Type.String()
}, { $id: 'DobCredential', additionalProperties: false });
exports.phoneCredentialJsonSchema = typebox_1.Type.Object({
    phone: typebox_1.Type.String({
        format: 'phone'
    })
}, { $id: 'PhoneCredential', additionalProperties: false });
exports.fullNameCredentialJsonSchema = typebox_1.Type.Object({
    fullName: typebox_1.Type.String()
}, { $id: 'FullNameCredential', additionalProperties: false });
exports.genderCredentialJsonSchema = typebox_1.Type.Object({
    gender: typebox_1.Type.String()
}, { $id: 'GenderCredential', additionalProperties: false });
exports.governmentIdDocumentImageCredentialJsonSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        contentEncoding: 'base64'
    })
}, { $id: 'GovernmentIdDocumentImageCredential', additionalProperties: false });
exports.livelinessConfidenceCredentialJsonSchema = typebox_1.Type.Object({
    confidence: typebox_1.Type.String()
}, { $id: 'LivelinessConfidenceCredential', additionalProperties: false });
exports.facialMatchCredentialJsonSchema = typebox_1.Type.Object({
    match: typebox_1.Type.String()
}, { $id: 'FacialMatchCredential', additionalProperties: false });
exports.facialMatchConfidenceCredentialJsonSchema = typebox_1.Type.Object({
    confidence: typebox_1.Type.String()
}, { $id: 'FacialMatchConfidenceCredential', additionalProperties: false });
exports.governmentIdTypeCredentialJsonSchema = typebox_1.Type.Object({
    documentType: typebox_1.Type.String()
}, { $id: 'GovernmentIdTypeCredential', additionalProperties: false });
exports.governmentIdDocumentBackImageCredentialJsonSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        contentEncoding: 'base64'
    })
}, {
    $id: 'GovernmentIdDocumentBackImageCredential',
    additionalProperties: false
});
exports.governmentIdStateCredentialJsonSchema = typebox_1.Type.Object({
    state: typebox_1.Type.String()
}, { $id: 'GovernmentIdStateCredential', additionalProperties: false });
exports.governmentIdNumberCredentialJsonSchema = typebox_1.Type.Object({
    idNumber: typebox_1.Type.String()
}, { $id: 'GovernmentIdNumberCredential', additionalProperties: false });
exports.governmentIdIssuanceDateCredentialJsonSchema = typebox_1.Type.Object({
    issuanceDate: typebox_1.Type.String() // setting this to string for now because that's what schema:Date uses, but not sure if that's what we want
}, { $id: 'GovernmentIdIssuanceDateCredential', additionalProperties: false });
exports.governmentIdExpirationDateCredentialJsonSchema = typebox_1.Type.Object({
    expirationDate: typebox_1.Type.String() // setting this to string for now because that's what schema:Date uses, but not sure if that's what we want
}, { $id: 'GovernmentIdExpirationDateCredential', additionalProperties: false });
exports.jsonSchemas = {
    EmailCredential: exports.emailCredentialJsonSchema,
    IdentityCredential: exports.identityCredentialJsonSchema,
    SsnCredential: exports.ssnCredentialJsonSchema,
    CountryResidenceCredential: exports.countryResidenceCredentialJsonSchema,
    NationalityCredential: exports.nationalityCredentialJsonSchema,
    FacialImageCredential: exports.facialImageCredentialJsonSchema,
    LivelinessCredential: exports.livelinessCredentialJsonSchema,
    AddressCredential: exports.addressCredentialJsonSchema,
    LastNameCredential: exports.lastNameCredentialJsonSchema,
    FirstNameCredential: exports.firstNameCredentialJsonSchema,
    BirthDateCredential: exports.birthDateCredentialJsonSchema,
    PhoneCredential: exports.phoneCredentialJsonSchema,
    FullNameCredential: exports.fullNameCredentialJsonSchema,
    GenderCredential: exports.genderCredentialJsonSchema,
    GovernmentIdDocumentImageCredential: exports.governmentIdDocumentImageCredentialJsonSchema,
    LivelinessConfidenceCredential: exports.livelinessConfidenceCredentialJsonSchema,
    FacialMatchCredential: exports.facialMatchCredentialJsonSchema,
    FacialMatchConfidenceCredential: exports.facialMatchConfidenceCredentialJsonSchema,
    GovernmentIdTypeCredential: exports.governmentIdTypeCredentialJsonSchema,
    GovernmentIdDocumentBackImageCredential: exports.governmentIdDocumentBackImageCredentialJsonSchema,
    GovernmentIdStateCredential: exports.governmentIdStateCredentialJsonSchema,
    GovernmentIdNumberCredential: exports.governmentIdNumberCredentialJsonSchema,
    GovernmentIdIssuanceDateCredential: exports.governmentIdIssuanceDateCredentialJsonSchema,
    GovernmentIdExpirationDateCredential: exports.governmentIdExpirationDateCredentialJsonSchema
};
//# sourceMappingURL=jsonSchemas.js.map
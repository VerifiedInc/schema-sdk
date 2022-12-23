"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssnFormatted = exports.governmentIdDocumentBackImageCredentialSchema = exports.governmentIdTypeCredentialSchema = exports.facialMatchConfidenceCredentialSchema = exports.facialMatchCredentialSchema = exports.livelinessConfidenceCredentialSchema = exports.governmentIdDocumentImageCredentialSchema = exports.genderCredential = exports.fullNameCredentialSchema = exports.phoneCredentialSchema = exports.birthDateCredentialSchema = exports.firstNameCredentialSchema = exports.lastNameCredentialSchema = exports.addressCredentialSchema = exports.livelinessCredentialSchema = exports.facialImageCredentialSchema = exports.countryResidenceCredentialSchema = exports.ssnCredentialSchema = exports.emailCredentialSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.emailCredentialSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String()
}, { $id: 'EmailCredential', additionalProperties: false });
exports.ssnCredentialSchema = typebox_1.Type.Object({
    ssn: typebox_1.Type.String({
        format: 'ssn'
    })
}, { $id: 'SsnCredential', additionalProperties: false });
exports.countryResidenceCredentialSchema = typebox_1.Type.Object({
    country: typebox_1.Type.String()
}, { $id: 'CountryResidenceCredential', additionalProperties: false });
exports.facialImageCredentialSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        contentEncoding: 'base64'
    })
}, { $id: 'FacialImageCredential', additionalProperties: false });
exports.livelinessCredentialSchema = typebox_1.Type.Object({
    liveness: typebox_1.Type.String()
}, { $id: 'LivelinessCredential', additionalProperties: false });
exports.addressCredentialSchema = typebox_1.Type.Object({
    address: typebox_1.Type.String()
}, { $id: 'AddressCredential', additionalProperties: false });
exports.lastNameCredentialSchema = typebox_1.Type.Object({
    lastName: typebox_1.Type.String()
}, { $id: 'LastNameCredential', additionalProperties: false });
exports.firstNameCredentialSchema = typebox_1.Type.Object({
    firstName: typebox_1.Type.String()
}, { $id: 'FirstNameCredential', additionalProperties: false });
exports.birthDateCredentialSchema = typebox_1.Type.Object({
    birthDate: typebox_1.Type.String()
}, { $id: 'BirthDateCredential', additionalProperties: false });
exports.phoneCredentialSchema = typebox_1.Type.Object({
    phone: typebox_1.Type.String()
}, { $id: 'PhoneCredential', additionalProperties: false });
exports.fullNameCredentialSchema = typebox_1.Type.Object({
    fullName: typebox_1.Type.String()
}, { $id: 'FullNameCredential', additionalProperties: false });
exports.genderCredential = typebox_1.Type.Object({
    gender: typebox_1.Type.String()
}, { $id: 'GenderCredential', additionalProperties: false });
exports.governmentIdDocumentImageCredentialSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        contentEncoding: 'base64'
    })
}, { $id: 'GovernmentIdDocumentImageCredential', additionalProperties: false });
exports.livelinessConfidenceCredentialSchema = typebox_1.Type.Object({
    confidence: typebox_1.Type.String()
}, { $id: 'LivelinessConfidenceCredential', additionalProperties: false });
exports.facialMatchCredentialSchema = typebox_1.Type.Object({
    match: typebox_1.Type.String()
}, { $id: 'FacialMatchCredential', additionalProperties: false });
exports.facialMatchConfidenceCredentialSchema = typebox_1.Type.Object({
    confidence: typebox_1.Type.String()
}, { $id: 'FacialMatchConfidenceCredential', additionalProperties: false });
exports.governmentIdTypeCredentialSchema = typebox_1.Type.Object({
    documentType: typebox_1.Type.String()
}, { $id: 'GovernmentIdTypeCredential', additionalProperties: false });
exports.governmentIdDocumentBackImageCredentialSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        contentEncoding: 'base64'
    })
}, { $id: 'GovernmentIdDocumentBackImageCredential', additionalProperties: false });
exports.ssnFormatted = {
    type: 'object',
    properties: {
        ssn: {
            type: 'ssn',
            format: 'ssnCustom'
        }
    },
    required: ['ssn']
};
//# sourceMappingURL=schemas.js.map
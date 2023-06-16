"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonSchemas = exports.employmentStartDateCredentialJsonSchema = exports.annualIncomeRangeCredentialJsonSchema = exports.incomeCurrencyCredentialJsonSchema = exports.annualIncomeCredentialJsonSchema = exports.titleCredentialJsonSchema = exports.employerCredentialJsonSchema = exports.governmentIdExpirationDateCredentialJsonSchema = exports.governmentIdIssuanceDateCredentialJsonSchema = exports.governmentIdNumberCredentialJsonSchema = exports.governmentIdStateCredentialJsonSchema = exports.governmentIdDocumentBackImageCredentialJsonSchema = exports.governmentIdTypeCredentialJsonSchema = exports.facialMatchConfidenceCredentialJsonSchema = exports.facialMatchCredentialJsonSchema = exports.livelinessConfidenceCredentialJsonSchema = exports.governmentIdDocumentImageCredentialJsonSchema = exports.genderCredentialJsonSchema = exports.fullNameCredentialJsonSchema = exports.phoneCredentialJsonSchema = exports.birthDateCredentialJsonSchema = exports.firstNameCredentialJsonSchema = exports.lastNameCredentialJsonSchema = exports.addressCredentialJsonSchema = exports.livelinessCredentialJsonSchema = exports.facialImageCredentialJsonSchema = exports.nationalityCredentialJsonSchema = exports.countryResidenceCredentialJsonSchema = exports.ssnCredentialJsonSchema = exports.sexCredentialJsonSchema = exports.identityCredentialJsonSchema = exports.emailCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.emailCredentialJsonSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String({
        format: 'email'
    })
}, { $id: 'EmailCredential', additionalProperties: false });
// special credential that is actually empty
exports.identityCredentialJsonSchema = typebox_1.Type.Object({}, { $id: 'IdentityCredential', additionalProperties: false });
exports.sexCredentialJsonSchema = typebox_1.Type.Object({
    sex: typebox_1.Type.String()
}, { $id: 'SexCredential', additionalProperties: false });
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
    address: typebox_1.Type.String({
        format: 'address'
    })
}, { $id: 'AddressCredential', additionalProperties: false });
exports.lastNameCredentialJsonSchema = typebox_1.Type.Object({
    lastName: typebox_1.Type.String()
}, { $id: 'LastNameCredential', additionalProperties: false });
exports.firstNameCredentialJsonSchema = typebox_1.Type.Object({
    firstName: typebox_1.Type.String()
}, { $id: 'FirstNameCredential', additionalProperties: false });
exports.birthDateCredentialJsonSchema = typebox_1.Type.Object({
    birthDate: typebox_1.Type.String({ format: 'digits' })
}, { $id: 'BirthDateCredential', additionalProperties: false });
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
        format: 'dataUriBase64Image'
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
    issuanceDate: typebox_1.Type.String({ format: 'digits' }) // ms since unix epoch
}, { $id: 'GovernmentIdIssuanceDateCredential', additionalProperties: false });
exports.governmentIdExpirationDateCredentialJsonSchema = typebox_1.Type.Object({
    expirationDate: typebox_1.Type.String({ format: 'unixMsExpirationDate' }) // ms since unix epoch
}, { $id: 'GovernmentIdExpirationDateCredential', additionalProperties: false });
exports.employerCredentialJsonSchema = typebox_1.Type.Object({
    employer: typebox_1.Type.String()
}, { $id: 'EmployerCredential', additionalProperties: false });
exports.titleCredentialJsonSchema = typebox_1.Type.Object({
    title: typebox_1.Type.String()
}, { $id: 'TitleCredential', additionalProperties: false });
exports.annualIncomeCredentialJsonSchema = typebox_1.Type.Object({
    income: typebox_1.Type.String({ format: 'iso4217Amount' }) // needed thanks to json encoding number as a string
}, { $id: 'AnnualIncomeCredential', additionalProperties: false });
exports.incomeCurrencyCredentialJsonSchema = typebox_1.Type.Object({
    currency: typebox_1.Type.String({ format: 'iso4217' })
}, { $id: 'IncomeCurrencyCredential', additionalProperties: false });
exports.annualIncomeRangeCredentialJsonSchema = typebox_1.Type.Object({
    income: typebox_1.Type.String({ format: 'iso4217AmountRange' })
}, { $id: 'AnnualIncomeRangeCredential', additionalProperties: false });
exports.employmentStartDateCredentialJsonSchema = typebox_1.Type.Object({
    startDate: typebox_1.Type.String()
}, { $id: 'EmploymentStartDateCredential', additionalProperties: false });
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
    SexCredential: exports.sexCredentialJsonSchema,
    GovernmentIdStateCredential: exports.governmentIdStateCredentialJsonSchema,
    GovernmentIdNumberCredential: exports.governmentIdNumberCredentialJsonSchema,
    GovernmentIdIssuanceDateCredential: exports.governmentIdIssuanceDateCredentialJsonSchema,
    GovernmentIdExpirationDateCredential: exports.governmentIdExpirationDateCredentialJsonSchema,
    EmployerCredential: exports.employerCredentialJsonSchema,
    TitleCredential: exports.titleCredentialJsonSchema,
    AnnualIncomeCredential: exports.annualIncomeCredentialJsonSchema,
    IncomeCurrencyCredential: exports.incomeCurrencyCredentialJsonSchema,
    AnnualIncomeRangeCredential: exports.annualIncomeRangeCredentialJsonSchema,
    EmploymentStartDateCredential: exports.employmentStartDateCredentialJsonSchema
};
//# sourceMappingURL=jsonSchemas.js.map
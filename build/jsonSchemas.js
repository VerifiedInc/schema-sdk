"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonSchemas = exports.employmentStartDateCredentialJsonSchema = exports.annualIncomeRangeCredentialJsonSchema = exports.incomeCurrencyCredentialJsonSchema = exports.annualIncomeCredentialJsonSchema = exports.titleCredentialJsonSchema = exports.employerCredentialJsonSchema = exports.governmentIdExpirationDateCredentialJsonSchema = exports.governmentIdIssuanceDateCredentialJsonSchema = exports.governmentIdNumberCredentialJsonSchema = exports.governmentIdStateCredentialJsonSchema = exports.governmentIdDocumentBackImageCredentialJsonSchema = exports.governmentIdTypeCredentialJsonSchema = exports.facialMatchCredentialJsonSchema = exports.governmentIdDocumentImageCredentialJsonSchema = exports.genderCredentialJsonSchema = exports.fullNameCredentialJsonSchema = exports.phoneCredentialJsonSchema = exports.birthDateCredentialJsonSchema = exports.firstNameCredentialJsonSchema = exports.lastNameCredentialJsonSchema = exports.addressCredentialJsonSchema = exports.livenessCredentialJsonSchema = exports.facialImageCredentialJsonSchema = exports.nationalityCredentialJsonSchema = exports.countryResidenceCredentialJsonSchema = exports.ssnCredentialJsonSchema = exports.sexCredentialJsonSchema = exports.identityCredentialJsonSchema = exports.emailCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.emailCredentialJsonSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String({
        format: 'email',
        description: 'Standard, valid email address format.',
        examples: [
            'test@verified.inc',
            'you+me@piedpiper.net'
        ]
    })
}, { $id: 'EmailCredential', additionalProperties: false });
// special credential that is actually empty
exports.identityCredentialJsonSchema = typebox_1.Type.Object({}, { $id: 'IdentityCredential', additionalProperties: false });
exports.sexCredentialJsonSchema = typebox_1.Type.Object({
    sex: typebox_1.Type.String({
        format: 'gender',
        description: 'A person\'s sex',
        examples: [
            'Male',
            'Female'
        ]
    })
}, { $id: 'SexCredential', additionalProperties: false });
exports.ssnCredentialJsonSchema = typebox_1.Type.Object({
    ssn: typebox_1.Type.String({
        format: 'ssn',
        description: '9 digit social security number, with no dashes, in the format of: 123456789',
        examples: [
            '123456789',
            '333224444'
        ]
    })
}, { $id: 'SsnCredential', additionalProperties: false });
exports.countryResidenceCredentialJsonSchema = typebox_1.Type.Object({
    country: typebox_1.Type.String({
        format: 'iso3361Alpha2',
        description: 'A person\'s country of residence in ISO 3166-1 alpha-2 format.',
        examples: [
            'US',
            'CA',
            'MX'
        ]
    })
}, { $id: 'CountryResidenceCredential', additionalProperties: false });
exports.nationalityCredentialJsonSchema = typebox_1.Type.Object({
    nationality: typebox_1.Type.String({
        format: 'iso3361Alpha2',
        description: 'A person\'s birth country or country of citizenship in ISO 3166-1 alpha-2 format.',
        examples: [
            'US',
            'CA',
            'MX'
        ]
    })
}, { $id: 'NationalityCredential', additionalProperties: false });
exports.facialImageCredentialJsonSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded facial image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ]
    })
}, { $id: 'FacialImageCredential', additionalProperties: false });
exports.livenessCredentialJsonSchema = typebox_1.Type.Object({
    confidence: typebox_1.Type.String({
        format: 'confidenceLevel',
        description: 'A person\'s liveliness confidence level during an IDV session',
        examples: [
            'Very High',
            'High',
            'Medium',
            'Low',
            'Very Low'
        ]
    })
}, { $id: 'LivenessCredential', additionalProperties: false });
exports.addressCredentialJsonSchema = typebox_1.Type.Object({
    address: typebox_1.Type.String({
        format: 'address',
        description: 'Address in the format of: street, city, iso3166-code postal-code',
        examples: [
            '10 Downing Street, London, GB-ENG SW1A 2AA',
            '307 3rd Ave, Apt #4, San Austin, US-GA 18025-9876'
        ]
    })
}, { $id: 'AddressCredential', additionalProperties: false });
exports.lastNameCredentialJsonSchema = typebox_1.Type.Object({
    lastName: typebox_1.Type.String({
        description: 'A person\'s last name',
        examples: [
            'Smith',
            'Garcia-Tony'
        ]
    })
}, { $id: 'LastNameCredential', additionalProperties: false });
exports.firstNameCredentialJsonSchema = typebox_1.Type.Object({
    firstName: typebox_1.Type.String({
        description: 'A person\'s first name',
        examples: [
            'John',
            'Mary Kate'
        ]
    })
}, { $id: 'FirstNameCredential', additionalProperties: false });
exports.birthDateCredentialJsonSchema = typebox_1.Type.Object({
    birthDate: typebox_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: [
            '1687488596000',
            '-45709'
        ]
    })
}, { $id: 'BirthDateCredential', additionalProperties: false });
exports.phoneCredentialJsonSchema = typebox_1.Type.Object({
    phone: typebox_1.Type.String({
        format: 'phone',
        description: 'A phone number in the E.164 format, [+][country code][number].',
        examples: [
            '+16175551212',
            '+14041238686'
        ]
    })
}, { $id: 'PhoneCredential', additionalProperties: false });
exports.fullNameCredentialJsonSchema = typebox_1.Type.Object({
    fullName: typebox_1.Type.String({
        description: 'A person\'s full name',
        examples: [
            'John Smith',
            'John Michael Smith',
            'Mary Kate Sierra Garcia-Tony'
        ]
    })
}, { $id: 'FullNameCredential', additionalProperties: false });
exports.genderCredentialJsonSchema = typebox_1.Type.Object({
    gender: typebox_1.Type.String({
        format: 'gender',
        description: 'A person\'s gender',
        examples: [
            'Male',
            'Female',
            'Other',
            'Non-Binary'
        ]
    })
}, { $id: 'GenderCredential', additionalProperties: false });
exports.governmentIdDocumentImageCredentialJsonSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ]
    })
}, { $id: 'GovernmentIdDocumentImageCredential', additionalProperties: false });
exports.facialMatchCredentialJsonSchema = typebox_1.Type.Object({
    confidence: typebox_1.Type.String({
        format: 'confidenceLevel',
        description: 'A person\'s facial match confidence score during an IDV session',
        examples: [
            'Very High',
            'High',
            'Medium',
            'Low',
            'Very Low'
        ]
    })
}, { $id: 'FacialMatchCredential', additionalProperties: false });
exports.governmentIdTypeCredentialJsonSchema = typebox_1.Type.Object({
    documentType: typebox_1.Type.String({
        format: 'documentType',
        description: 'A person\'s government identification document type',
        examples: ['Drivers License', 'Passport', 'State ID', 'Military ID', 'National ID', 'Birth Certificate', 'Voter Registration Card', 'Other']
    })
}, { $id: 'GovernmentIdTypeCredential', additionalProperties: false });
exports.governmentIdDocumentBackImageCredentialJsonSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded back of government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ]
    })
}, {
    $id: 'GovernmentIdDocumentBackImageCredential',
    additionalProperties: false
});
exports.governmentIdStateCredentialJsonSchema = typebox_1.Type.Object({
    state: typebox_1.Type.String({
        format: 'iso3166',
        description: 'The state or province of the government identification document',
        examples: [
            'US-CA',
            'US-NY',
            'US-TX',
            'GB-ENG'
        ]
    })
}, { $id: 'GovernmentIdStateCredential', additionalProperties: false });
exports.governmentIdNumberCredentialJsonSchema = typebox_1.Type.Object({
    idNumber: typebox_1.Type.String({
        description: 'Government identification document number. Note, it can be alphanumeric.',
        examples: [
            '801322-1117621',
            'F4698E1'
        ]
    })
}, { $id: 'GovernmentIdNumberCredential', additionalProperties: false });
exports.governmentIdIssuanceDateCredentialJsonSchema = typebox_1.Type.Object({
    issuanceDate: typebox_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: [
            '1687488596000',
            '-45709'
        ]
    })
}, { $id: 'GovernmentIdIssuanceDateCredential', additionalProperties: false });
exports.governmentIdExpirationDateCredentialJsonSchema = typebox_1.Type.Object({
    expirationDate: typebox_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: [
            '1687488596000',
            '-45709'
        ]
    })
}, { $id: 'GovernmentIdExpirationDateCredential', additionalProperties: false });
exports.employerCredentialJsonSchema = typebox_1.Type.Object({
    employer: typebox_1.Type.String({
        description: 'Employer name',
        examples: [
            'Acme Corp',
            'Piped Piper',
            'Hooli'
        ]
    })
}, { $id: 'EmployerCredential', additionalProperties: false });
exports.titleCredentialJsonSchema = typebox_1.Type.Object({
    title: typebox_1.Type.String({
        description: 'Job title',
        examples: [
            'Software Engineer',
            'Designer',
            'Construction Worker'
        ]
    })
}, { $id: 'TitleCredential', additionalProperties: false });
exports.annualIncomeCredentialJsonSchema = typebox_1.Type.Object({
    income: typebox_1.Type.String({
        format: 'iso4217Amount',
        description: 'Annual income with the preceding ISO4217 currency format.',
        examples: [
            'USD 101000',
            'GBP 46000'
        ]
    })
}, { $id: 'AnnualIncomeCredential', additionalProperties: false });
exports.incomeCurrencyCredentialJsonSchema = typebox_1.Type.Object({
    currency: typebox_1.Type.String({
        format: 'iso4217',
        description: 'ISO4217 currency format.',
        examples: [
            'USD',
            'GBP',
            'EUR'
        ]
    })
}, { $id: 'IncomeCurrencyCredential', additionalProperties: false });
exports.annualIncomeRangeCredentialJsonSchema = typebox_1.Type.Object({
    income: typebox_1.Type.String({
        format: 'iso4217AmountRange',
        description: 'Annual income range with the preceding ISO4217 currency code followed by min<value>_max<value>.',
        examples: [
            'USD min100000_max200000',
            'GBP min40000_max50000'
        ]
    })
}, { $id: 'AnnualIncomeRangeCredential', additionalProperties: false });
exports.employmentStartDateCredentialJsonSchema = typebox_1.Type.Object({
    startDate: typebox_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: [
            '1687488596000',
            '-45709'
        ]
    })
}, { $id: 'EmploymentStartDateCredential', additionalProperties: false });
exports.jsonSchemas = {
    EmailCredential: exports.emailCredentialJsonSchema,
    IdentityCredential: exports.identityCredentialJsonSchema,
    SsnCredential: exports.ssnCredentialJsonSchema,
    CountryResidenceCredential: exports.countryResidenceCredentialJsonSchema,
    NationalityCredential: exports.nationalityCredentialJsonSchema,
    FacialImageCredential: exports.facialImageCredentialJsonSchema,
    FacialMatchCredential: exports.facialMatchCredentialJsonSchema,
    LivenessCredential: exports.livenessCredentialJsonSchema,
    AddressCredential: exports.addressCredentialJsonSchema,
    LastNameCredential: exports.lastNameCredentialJsonSchema,
    FirstNameCredential: exports.firstNameCredentialJsonSchema,
    BirthDateCredential: exports.birthDateCredentialJsonSchema,
    PhoneCredential: exports.phoneCredentialJsonSchema,
    FullNameCredential: exports.fullNameCredentialJsonSchema,
    GenderCredential: exports.genderCredentialJsonSchema,
    GovernmentIdDocumentImageCredential: exports.governmentIdDocumentImageCredentialJsonSchema,
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
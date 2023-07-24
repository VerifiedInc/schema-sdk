"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annualIncomeRangeCredentialJsonSchema = exports.incomeCurrencyCredentialJsonSchema = exports.governmentIdExpirationDateCredentialJsonSchema = exports.governmentIdIssuanceDateCredentialJsonSchema = exports.governmentIdNumberCredentialJsonSchema = exports.governmentIdStateCredentialJsonSchema = exports.governmentIdDocumentBackImageCredentialJsonSchema = exports.governmentIdTypeCredentialJsonSchema = exports.governmentIdDocumentImageCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.governmentIdDocumentImageCredentialJsonSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ]
    })
}, { $id: 'GovernmentIdDocumentImageCredential', additionalProperties: false });
exports.governmentIdTypeCredentialJsonSchema = typebox_1.Type.Object({
    documentType: typebox_1.Type.String({
        format: 'documentType',
        description: "A person's government identification document type",
        examples: [
            'Drivers License',
            'Passport',
            'State ID',
            'Military ID',
            'National ID',
            'Birth Certificate',
            'Voter Registration Card',
            'Other'
        ]
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
        examples: ['US-CA', 'US-NY', 'US-TX', 'GB-ENG']
    })
}, { $id: 'GovernmentIdStateCredential', additionalProperties: false });
exports.governmentIdNumberCredentialJsonSchema = typebox_1.Type.Object({
    idNumber: typebox_1.Type.String({
        description: 'Government identification document number. Note, it can be alphanumeric.',
        examples: ['801322-1117621', 'F4698E1']
    })
}, { $id: 'GovernmentIdNumberCredential', additionalProperties: false });
exports.governmentIdIssuanceDateCredentialJsonSchema = typebox_1.Type.Object({
    issuanceDate: typebox_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: ['1687488596000', '-45709']
    })
}, { $id: 'GovernmentIdIssuanceDateCredential', additionalProperties: false });
exports.governmentIdExpirationDateCredentialJsonSchema = typebox_1.Type.Object({
    expirationDate: typebox_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: ['1687488596000', '-45709']
    })
}, { $id: 'GovernmentIdExpirationDateCredential', additionalProperties: false });
exports.incomeCurrencyCredentialJsonSchema = typebox_1.Type.Object({
    currency: typebox_1.Type.String({
        format: 'iso4217',
        description: 'ISO4217 currency format.',
        examples: ['USD', 'GBP', 'EUR']
    })
}, { $id: 'IncomeCurrencyCredential', additionalProperties: false });
exports.annualIncomeRangeCredentialJsonSchema = typebox_1.Type.Object({
    income: typebox_1.Type.String({
        format: 'iso4217AmountRange',
        description: 'Annual income range with the preceding ISO4217 currency code followed by min<value>_max<value>.',
        examples: ['USD min100000_max200000', 'GBP min40000_max50000']
    })
}, { $id: 'AnnualIncomeRangeCredential', additionalProperties: false });
//# sourceMappingURL=index.js.map
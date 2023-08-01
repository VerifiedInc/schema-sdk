"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annualIncomeRangeCredentialJsonSchema = exports.incomeCurrencyCredentialJsonSchema = exports.governmentIdExpirationDateCredentialJsonSchema = exports.governmentIdIssuanceDateCredentialJsonSchema = exports.governmentIdNumberCredentialJsonSchema = exports.governmentIdStateCredentialJsonSchema = exports.governmentIdTypeCredentialJsonSchema = exports.governmentIdDocumentBackImageCredentialJsonSchema = exports.governmentIdDocumentImageCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const displayFormat_1 = require("../../enums/displayFormat");
exports.governmentIdDocumentImageCredentialJsonSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ],
        title: 'Government Document Image',
        displayFormat: displayFormat_1.DisplayFormat.Image
    })
}, { $id: 'GovernmentIdDocumentImageCredential' });
exports.governmentIdDocumentBackImageCredentialJsonSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded back of government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ],
        title: 'Government Document Back Image',
        displayFormat: displayFormat_1.DisplayFormat.Image
    })
}, {
    $id: 'GovernmentIdDocumentBackImageCredential'
});
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
        ],
        title: 'Government Document Type',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'GovernmentIdTypeCredential' });
exports.governmentIdStateCredentialJsonSchema = typebox_1.Type.Object({
    state: typebox_1.Type.String({
        format: 'iso3166',
        description: 'The state or province of the government identification document',
        examples: ['US-CA', 'US-NY', 'US-TX', 'GB-ENG'],
        title: 'Government Document Region',
        displayFormat: displayFormat_1.DisplayFormat.USState
    })
}, { $id: 'GovernmentIdStateCredential' });
exports.governmentIdNumberCredentialJsonSchema = typebox_1.Type.Object({
    idNumber: typebox_1.Type.String({
        description: 'Government identification document number. Note, it can be alphanumeric.',
        examples: ['801322-1117621', 'F4698E1'],
        title: 'Government Document ID',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'GovernmentIdNumberCredential' });
exports.governmentIdIssuanceDateCredentialJsonSchema = typebox_1.Type.Object({
    issuanceDate: typebox_1.Type.String({
        format: 'unixMsEpochDayFormat',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, which is the 12th hour of the issuance day UTC, GMT+0000',
        examples: ['631195200000', '-331560000000'],
        title: 'Government Document Issuance Date',
        displayFormat: displayFormat_1.DisplayFormat.Date
    })
}, { $id: 'GovernmentIdIssuanceDateCredential' });
exports.governmentIdExpirationDateCredentialJsonSchema = typebox_1.Type.Object({
    expirationDate: typebox_1.Type.String({
        format: 'unixMsEpochDayFormat',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, , which is the 12th hour of the expiration day UTC, GMT+0000',
        examples: ['631195200000', '-331560000000'],
        title: 'Government Document Expiration Date',
        displayFormat: displayFormat_1.DisplayFormat.Date
    })
}, { $id: 'GovernmentIdExpirationDateCredential' });
exports.incomeCurrencyCredentialJsonSchema = typebox_1.Type.Object({
    currency: typebox_1.Type.String({
        format: 'iso4217',
        description: 'ISO4217 currency format.',
        examples: ['USD', 'GBP', 'EUR'],
        title: 'Income Currency',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'IncomeCurrencyCredential' });
exports.annualIncomeRangeCredentialJsonSchema = typebox_1.Type.Object({
    income: typebox_1.Type.String({
        format: 'iso4217AmountRange',
        description: 'Annual income range with the preceding ISO4217 currency code followed by min<value>_max<value>.',
        examples: ['USD min100000_max200000', 'GBP min40000_max50000'],
        title: 'Annual Income Range',
        displayFormat: displayFormat_1.DisplayFormat.CurrencyRange
    })
}, { $id: 'AnnualIncomeRangeCredential' });
//# sourceMappingURL=index.js.map
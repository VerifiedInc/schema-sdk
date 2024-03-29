"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annualIncomeCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const currencyCredential_1 = require("../atomicCredential/currencyCredential");
const amountCredential_1 = require("../atomicCredential/amountCredential");
const displayFormat_1 = require("../../enums/displayFormat");
exports.annualIncomeCredentialJsonSchema = type_1.Type.Union([
    type_1.Type.IntersectReferences([currencyCredential_1.currencyCredentialJsonSchema, amountCredential_1.amountCredentialJsonSchema]),
    // Allow backward compatibility with the old format
    type_1.Type.Object({
        income: type_1.Type.String({
            format: 'iso4217Amount',
            description: 'Annual income with the preceding ISO4217 currency format.',
            examples: ['USD 101000', 'GBP 46000'],
            title: 'Annual Income',
            displayFormat: displayFormat_1.DisplayFormat.CurrencyAmount
        })
    }, {
        additionalProperties: true
    })
], {
    $id: 'AnnualIncomeCredential',
    unevaluatedProperties: false,
    errorMessage: {
        unevaluatedProperties: "AnnualIncomeCredential doesn't match the schema"
    },
    // Allow backward compatibility with the old format
    // ?? What old format? Pretty sure it has always been iso4217Amount
    if: type_1.Type.Object({
        income: type_1.Type.String()
    }, {
        additionalProperties: false
    }),
    then: type_1.Type.Object({
        income: type_1.Type.String({
            format: 'iso4217Amount'
        })
    })
});
//# sourceMappingURL=annualIncomeCredential.js.map
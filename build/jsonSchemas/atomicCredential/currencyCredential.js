"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const values_1 = require("../../values");
const inputType_1 = require("../../enums/inputType");
exports.currencyCredentialJsonSchema = type_1.Type.Object({
    currency: type_1.Type.String({
        description: 'The iso4217 currency code',
        examples: ['USD', 'EUR', 'GBP'],
        title: 'Currency',
        format: 'iso4217',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Select,
            options: values_1.currencySelectOptions,
            default: 'USD'
        }
    })
}, {
    $id: 'CurrencyCredential'
});
//# sourceMappingURL=currencyCredential.js.map
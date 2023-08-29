"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amountCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.amountCredentialJsonSchema = type_1.Type.Object({
    amount: type_1.Type.String({
        description: 'The amount of the something, i.e. a currency.',
        examples: ['100000', '200000', '300000'],
        title: 'Amount',
        format: 'digits',
        displayFormat: displayFormat_1.DisplayFormat.Number,
        input: {
            type: inputType_1.InputType.Text,
            pattern: '^-?\\d+$' // digits only, allowing leading minus sign for negative numbers
        }
    })
}, {
    $id: 'AmountCredential'
});
//# sourceMappingURL=amountCredential.js.map
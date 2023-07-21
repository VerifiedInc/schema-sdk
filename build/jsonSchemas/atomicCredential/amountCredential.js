"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amountCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.amountCredentialJsonSchema = typebox_1.Type.Object({
    amount: typebox_1.Type.String({
        description: 'The amount of the currency.',
        examples: ['100000', '200000', '300000'],
        format: 'digits'
    })
}, {
    $id: 'AmountCredential'
});
//# sourceMappingURL=amountCredential.js.map
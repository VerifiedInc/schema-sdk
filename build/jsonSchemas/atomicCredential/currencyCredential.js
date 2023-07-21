"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.currencyCredentialJsonSchema = typebox_1.Type.Object({
    currency: typebox_1.Type.String({
        description: 'The currency of the amount.',
        examples: ['USD', 'EUR', 'GBP'],
        format: 'iso4217Format'
    })
}, {
    $id: 'CurrencyCredential'
});
//# sourceMappingURL=currencyCredential.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipCodeCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.zipCodeCredentialJsonSchema = type_1.Type.Object({
    zipCode: type_1.Type.String({
        description: 'The zip code of the address.',
        examples: ['94103', '94103-1234']
    })
}, {
    $id: 'ZipCodeCredential',
    if: {
        type: 'object',
        properties: {
            country: { const: 'US' }
        },
        required: ['country']
    },
    then: {
        properties: {
            zipCode: { format: 'usZipCode' }
        }
    },
    additionalProperties: false
});
//# sourceMappingURL=zipCodeCredential.js.map
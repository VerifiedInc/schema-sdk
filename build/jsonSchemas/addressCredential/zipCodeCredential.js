"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipCodeCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.zipCodeCredentialJsonSchema = typebox_1.Type.Object({
    zipCode: typebox_1.Type.String({
        description: 'The zip code of the address.',
        examples: ['94103', '94103-1234']
    })
}, {
    $id: 'ZipCodeCredential'
});
//# sourceMappingURL=zipCodeCredential.js.map
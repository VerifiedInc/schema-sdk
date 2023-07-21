"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.cityCredentialJsonSchema = typebox_1.Type.Object({
    city: typebox_1.Type.String({
        description: 'The city of the address.',
        examples: ['San Francisco', 'New York', 'Atlanta']
    })
}, {
    $id: 'CityCredential'
});
//# sourceMappingURL=cityCredential.js.map
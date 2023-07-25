"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.cityCredentialJsonSchema = type_1.Type.Object({
    city: type_1.Type.String({
        description: 'The city of the address.',
        examples: ['San Francisco', 'New York', 'Atlanta']
    })
}, {
    $id: 'CityCredential'
});
//# sourceMappingURL=cityCredential.js.map
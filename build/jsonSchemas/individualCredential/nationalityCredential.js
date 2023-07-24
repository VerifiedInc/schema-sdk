"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nationalityCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.nationalityCredentialJsonSchema = type_1.Type.Object({
    nationality: type_1.Type.String({
        format: 'iso3361Alpha2',
        description: "A person's birth country or country of citizenship in ISO 3166-1 alpha-2 format.",
        examples: ['US', 'CA', 'MX']
    })
}, { $id: 'NationalityCredential', additionalProperties: false });
//# sourceMappingURL=nationalityCredential.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nationalityCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.nationalityCredentialJsonSchema = typebox_1.Type.Object({
    nationality: typebox_1.Type.String({
        format: 'iso3361Alpha2',
        description: "A person's birth country or country of citizenship in ISO 3166-1 alpha-2 format.",
        examples: ['US', 'CA', 'MX']
    })
}, { $id: 'NationalityCredential', additionalProperties: false });
//# sourceMappingURL=nationalityCredential.js.map
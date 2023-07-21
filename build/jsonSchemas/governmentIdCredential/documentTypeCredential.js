"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentTypeCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.documentTypeCredentialJsonSchema = typebox_1.Type.Object({
    documentType: typebox_1.Type.String({
        format: 'documentType',
        description: "A person's government identification document type",
        examples: [
            'Drivers License',
            'Passport',
            'State ID',
            'Military ID',
            'National ID',
            'Birth Certificate',
            'Voter Registration Card',
            'Other'
        ]
    })
}, { $id: 'DocumentTypeCredential', additionalProperties: false });
//# sourceMappingURL=documentTypeCredential.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentTypeCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.documentTypeCredentialJsonSchema = type_1.Type.Object({
    documentType: type_1.Type.String({
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
        ],
        title: 'Document Type',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'DocumentTypeCredential' });
//# sourceMappingURL=documentTypeCredential.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentTypeCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const values_1 = require("../../values");
const inputType_1 = require("../../enums/inputType");
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
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Select,
            options: Array.from(values_1.documentTypes)
        }
    })
}, { $id: 'DocumentTypeCredential' });
//# sourceMappingURL=documentTypeCredential.js.map
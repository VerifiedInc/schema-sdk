"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentImageCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.documentImageCredentialJsonSchema = type_1.Type.Object({
    documentImage: type_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ],
        title: 'Document Image',
        displayFormat: displayFormat_1.DisplayFormat.Image
    })
}, { $id: 'DocumentImageCredential' });
//# sourceMappingURL=documentImageCredential.js.map
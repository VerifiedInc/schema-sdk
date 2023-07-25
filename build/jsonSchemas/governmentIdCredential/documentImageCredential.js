"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentImageCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.documentImageCredentialJsonSchema = type_1.Type.Object({
    image: type_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ]
    })
}, { $id: 'documentImageCredential' });
//# sourceMappingURL=documentImageCredential.js.map
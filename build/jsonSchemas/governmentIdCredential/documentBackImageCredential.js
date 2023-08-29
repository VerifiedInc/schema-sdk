"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentBackImageCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.documentBackImageCredentialJsonSchema = type_1.Type.Object({
    documentBackImage: type_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded back of government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ],
        title: 'Back of Document Image',
        displayFormat: displayFormat_1.DisplayFormat.Image,
        input: {
            type: 'Image'
        }
    })
}, {
    $id: 'DocumentBackImageCredential'
});
//# sourceMappingURL=documentBackImageCredential.js.map
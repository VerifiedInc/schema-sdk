"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentBackImageCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.documentBackImageCredentialJsonSchema = typebox_1.Type.Object({
    image: typebox_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded back of government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ]
    })
}, {
    $id: 'DocumentBackImageCredential',
    additionalProperties: false
});
//# sourceMappingURL=documentBackImageCredential.js.map
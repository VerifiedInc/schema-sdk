"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facialImageCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.facialImageCredentialJsonSchema = type_1.Type.Object({
    image: type_1.Type.String({
        format: 'dataUriBase64Image',
        description: 'Base64 encoded facial image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
        examples: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
        ],
        title: 'Facial Image',
        displayFormat: displayFormat_1.DisplayFormat.Image,
        input: {
            type: inputType_1.InputType.Image
        }
    })
}, { $id: 'FacialImageCredential' });
//# sourceMappingURL=facialImageCredential.js.map
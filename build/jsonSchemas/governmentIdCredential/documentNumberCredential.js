"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentNumberCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.documentNumberCredentialJsonSchema = type_1.Type.Object({
    idNumber: type_1.Type.String({
        description: 'Government identification document number. Note, it can be alphanumeric.',
        examples: ['801322-1117621', 'F4698E1'],
        title: 'Document ID',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Text
        }
    })
}, { $id: 'DocumentNumberCredential' });
//# sourceMappingURL=documentNumberCredential.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.line1CredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.line1CredentialJsonSchema = type_1.Type.Object({
    line1: type_1.Type.String({
        description: 'The first line of the address.',
        examples: ['10 Downing Street', '307 3rd Ave', '1234 Main St'],
        title: 'Address Line 1',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Text
        }
    })
}, {
    $id: 'Line1Credential'
});
//# sourceMappingURL=line1Credential.js.map
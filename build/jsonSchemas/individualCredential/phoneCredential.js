"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.phoneCredentialJsonSchema = type_1.Type.Object({
    phone: type_1.Type.String({
        format: 'phone',
        description: 'A phone number in the E.164 format, [+][country code][number].',
        examples: ['+16175551212', '+14041238686'],
        title: 'Phone',
        displayFormat: displayFormat_1.DisplayFormat.PhoneNumber
    })
}, { $id: 'PhoneCredential' });
//# sourceMappingURL=phoneCredential.js.map
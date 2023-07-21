"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.phoneCredentialJsonSchema = typebox_1.Type.Object({
    phone: typebox_1.Type.String({
        format: 'phone',
        description: 'A phone number in the E.164 format, [+][country code][number].',
        examples: ['+16175551212', '+14041238686']
    })
}, { $id: 'PhoneCredential', additionalProperties: false });
//# sourceMappingURL=phoneCredential.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.numberCredentialJsonSchema = typebox_1.Type.Object({
    idNumber: typebox_1.Type.String({
        description: 'Government identification document number. Note, it can be alphanumeric.',
        examples: ['801322-1117621', 'F4698E1']
    })
}, { $id: 'NumberCredential', additionalProperties: false });
//# sourceMappingURL=documentNumberCredential.js.map
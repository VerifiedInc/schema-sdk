"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentNumberCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.documentNumberCredentialJsonSchema = type_1.Type.Object({
    idNumber: type_1.Type.String({
        description: 'Government identification document number. Note, it can be alphanumeric.',
        examples: ['801322-1117621', 'F4698E1']
    })
}, { $id: 'DocumentNumberCredential', additionalProperties: false });
//# sourceMappingURL=documentNumberCredential.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailCredentialSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.emailCredentialSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String()
}, { $id: 'EmailCredentialType', additionalProperties: false });
//# sourceMappingURL=schemas.js.map
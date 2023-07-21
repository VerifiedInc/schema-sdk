"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
// special credential that is actually empty
exports.identityCredentialJsonSchema = typebox_1.Type.Object({}, { $id: 'IdentityCredential', additionalProperties: false });
//# sourceMappingURL=identityCredential.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityCredentialJsonSchema = void 0;
const type_1 = require("../../type");
// special credential that is actually empty
exports.identityCredentialJsonSchema = type_1.Type.Object({}, { $id: 'IdentityCredential', additionalProperties: false });
//# sourceMappingURL=identityCredential.js.map
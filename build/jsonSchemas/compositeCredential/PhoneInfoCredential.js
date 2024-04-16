"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneInfoCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const individualCredential_1 = require("../individualCredential");
const lineTypeCredential_1 = require("../atomicCredential/lineTypeCredential");
exports.phoneInfoCredentialJsonSchema = type_1.Type.Union([type_1.Type.Union([individualCredential_1.phoneCredentialJsonSchema, lineTypeCredential_1.lineTypeCredentialJsonSchema])], {
    $id: 'PhoneInfoCredential',
    unevaluatedProperties: false,
    errorMessage: {
        unevaluatedProperties: "PhoneInfoCredential doesn't match the schema"
    }
});
//# sourceMappingURL=phoneInfoCredential.js.map
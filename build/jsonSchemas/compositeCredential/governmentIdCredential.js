"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.governmentIdCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const addressCredential_1 = require("../addressCredential");
const documentBackImageCredential_1 = require("../governmentIdCredential/documentBackImageCredential");
const documentImageCredential_1 = require("../governmentIdCredential/documentImageCredential");
const documentNumberCredential_1 = require("../governmentIdCredential/documentNumberCredential");
const documentTypeCredential_1 = require("../governmentIdCredential/documentTypeCredential");
const expirationDateCredential_1 = require("../governmentIdCredential/expirationDateCredential");
const issuanceDateCredential_1 = require("../governmentIdCredential/issuanceDateCredential");
exports.governmentIdCredentialJsonSchema = type_1.Type.IntersectReferences([
    documentBackImageCredential_1.documentBackImageCredentialJsonSchema,
    documentImageCredential_1.documentImageCredentialJsonSchema,
    documentTypeCredential_1.documentTypeCredentialJsonSchema,
    documentNumberCredential_1.documentNumberCredentialJsonSchema,
    expirationDateCredential_1.expirationDateCredentialJsonSchema,
    issuanceDateCredential_1.issuanceDateCredentialJsonSchema,
    addressCredential_1.stateCredentialJsonSchema
], {
    $id: 'GovernmentIdCredential',
    unevaluatedProperties: false
});
//# sourceMappingURL=governmentIdCredential.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullNameCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const firstNameCredential_1 = require("../individualCredential/firstNameCredential");
const lastNameCredential_1 = require("../individualCredential/lastNameCredential");
const middleNameCredential_1 = require("../individualCredential/middleNameCredential");
exports.fullNameCredentialJsonSchema = type_1.Type.Union([
    type_1.Type.IntersectReferences([
        firstNameCredential_1.firstNameCredentialJsonSchema,
        lastNameCredential_1.lastNameCredentialJsonSchema,
        middleNameCredential_1.middleNameCredentialJsonSchema
    ]),
    type_1.Type.Object({
        fullName: type_1.Type.String({
            description: "A person's full name",
            examples: ['John Smith', 'John Michael Smith', 'Mary Kate Sierra Garcia-Tony']
        })
    }, {})
], {
    $id: 'FullNameCredential',
    unevaluatedProperties: false
});
//# sourceMappingURL=fullNameCredential.js.map
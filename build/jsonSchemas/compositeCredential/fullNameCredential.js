"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullNameCredentialJsonSchema = void 0;
const displayFormat_1 = require("../../enums/displayFormat");
const type_1 = require("../../type");
const firstNameCredential_1 = require("../individualCredential/firstNameCredential");
const lastNameCredential_1 = require("../individualCredential/lastNameCredential");
const middleNameCredential_1 = require("../individualCredential/middleNameCredential");
exports.fullNameCredentialJsonSchema = type_1.Type.Union([
    type_1.Type.Union([firstNameCredential_1.firstNameCredentialJsonSchema, middleNameCredential_1.middleNameCredentialJsonSchema, lastNameCredential_1.lastNameCredentialJsonSchema]),
    type_1.Type.Object({
        fullName: type_1.Type.String({
            description: "A person's full name",
            examples: ['John Smith', 'John Michael Smith', 'Mary Kate Sierra Garcia-Tony'],
            title: 'Full Name',
            displayFormat: displayFormat_1.DisplayFormat.String
        })
    })
], {
    $id: 'FullNameCredential',
    unevaluatedProperties: false,
    errorMessage: {
        unevaluatedProperties: "FullNameCredential doesn't match the schema"
    }
});
//# sourceMappingURL=fullNameCredential.js.map
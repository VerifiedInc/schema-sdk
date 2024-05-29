"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressCredentialJsonSchema = exports.addressCredentialIntersectReferences = void 0;
const type_1 = require("../../type");
const cityCredential_1 = require("../addressCredential/cityCredential");
const line1Credential_1 = require("../addressCredential/line1Credential");
const line2Credential_1 = require("../addressCredential/line2Credential");
const stateCredential_1 = require("../addressCredential/stateCredential");
const countryCredential_1 = require("../addressCredential/countryCredential");
const zipCodeCredential_1 = require("../addressCredential/zipCodeCredential");
const displayFormat_1 = require("../../enums/displayFormat");
exports.addressCredentialIntersectReferences = type_1.Type.Union([
    line1Credential_1.line1CredentialJsonSchema,
    line2Credential_1.line2CredentialJsonSchema,
    cityCredential_1.cityCredentialJsonSchema,
    countryCredential_1.countryCredentialJsonSchema,
    stateCredential_1.stateCredentialJsonSchema,
    zipCodeCredential_1.zipCodeCredentialJsonSchema
]);
exports.addressCredentialJsonSchema = type_1.Type.Union([
    exports.addressCredentialIntersectReferences,
    // Allow backwards compatibility with the old address format
    type_1.Type.Object({
        address: type_1.Type.String({
            format: 'address',
            description: 'Address in the format of: street, city, iso3166-code postal-code',
            examples: [
                '10 Downing Street, London, GB-ENG SW1A 2AA',
                '307 3rd Ave, Apt #4, San Austin, US-GA 18025-9876'
            ],
            title: 'Street Address',
            displayFormat: displayFormat_1.DisplayFormat.Address
        })
    })
], {
    $id: 'AddressCredential',
    unevaluatedProperties: false,
    errorMessage: {
        unevaluatedProperties: "AddressCredential doesn't match the schema"
    }
});
//# sourceMappingURL=addressCredential.js.map
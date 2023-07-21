"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const cityCredential_1 = require("../addressCredential/cityCredential");
const line1Credential_1 = require("../addressCredential/line1Credential");
const line2Credential_1 = require("../addressCredential/line2Credential");
const stateCredential_1 = require("../addressCredential/stateCredential");
const countryCredential_1 = require("../addressCredential/countryCredential");
const zipCodeCredential_1 = require("../addressCredential/zipCodeCredential");
exports.addressCredentialJsonSchema = typebox_1.Type.Union([
    typebox_1.Type.Composite([
        line1Credential_1.line1CredentialJsonSchema,
        line2Credential_1.line2CredentialJsonSchema,
        cityCredential_1.cityCredentialJsonSchema,
        stateCredential_1.stateCredentialJsonSchema,
        countryCredential_1.countryCredentialJsonSchema,
        zipCodeCredential_1.zipCodeCredentialJsonSchema
    ]),
    typebox_1.Type.Object({
        address: typebox_1.Type.String({
            format: 'address',
            description: 'Address in the format of: street, city, iso3166-code postal-code',
            examples: [
                '10 Downing Street, London, GB-ENG SW1A 2AA',
                '307 3rd Ave, Apt #4, San Austin, US-GA 18025-9876'
            ]
        })
    })
], {
    $id: 'AddressCredential'
});
//# sourceMappingURL=addressCredential.js.map
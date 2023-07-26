"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.stateCredentialJsonSchema = type_1.Type.Object({
    state: type_1.Type.String({
        description: 'The state of the address.',
        examples: ['CA', 'GA', 'NY'],
        format: 'iso3166RegionCode'
    })
}, {
    $id: 'StateCredential',
    if: {
        type: 'object',
        properties: {
            country: { const: 'US' }
        },
        required: ['country']
    },
    then: {
        properties: {
            state: { format: 'iso3166USRegionCode' }
        }
    }
});
//# sourceMappingURL=stateCredential.js.map
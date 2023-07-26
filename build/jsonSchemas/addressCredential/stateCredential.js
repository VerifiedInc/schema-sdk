"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.stateCredentialJsonSchema = type_1.Type.Object({
    state: type_1.Type.String({
        description: "A state's ISO 3166-2 code.",
        examples: ['CA', 'GA', 'SP'],
        format: 'iso3166RegionCode'
    })
}, {
    $id: 'StateCredential',
    if: type_1.Type.Object({
        country: type_1.Type.String({
            description: 'If the country from Address Credential is the US.',
            const: 'US'
        })
    }),
    then: type_1.Type.Object({
        state: type_1.Type.String({
            description: 'Then the state must be a valid US state.',
            format: 'iso3166USRegionCode'
        })
    })
});
//# sourceMappingURL=stateCredential.js.map
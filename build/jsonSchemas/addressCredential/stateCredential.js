"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.stateCredentialJsonSchema = typebox_1.Type.Object({
    state: typebox_1.Type.String({
        description: 'The state of the address.',
        examples: ['CA', 'GA', 'NY']
    })
}, {
    $id: 'StateCredential'
});
//# sourceMappingURL=stateCredential.js.map
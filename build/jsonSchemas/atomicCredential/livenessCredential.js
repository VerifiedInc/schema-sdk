"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livenessCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.livenessCredentialJsonSchema = type_1.Type.Object({
    confidence: type_1.Type.String({
        format: 'confidenceLevel',
        description: "A person's liveliness confidence level during an IDV session",
        examples: ['Very High', 'High', 'Medium', 'Low', 'Very Low'],
        title: 'Liveness Confidence',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'LivenessCredential' });
//# sourceMappingURL=livenessCredential.js.map
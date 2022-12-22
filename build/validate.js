"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const ajv_1 = __importDefault(require("ajv"));
const error_1 = require("./error");
const ajv = new ajv_1.default(); // options can be passed, e.g. {allErrors: true}
function validate(jsonSchema, data) {
    // adding schemas on demand instead of having to preload all of them. ref: https://ajv.js.org/guide/managing-schemas.html#pre-adding-all-schemas-vs-adding-on-demand
    const validator = ajv.getSchema(jsonSchema.$id) || ajv.compile(jsonSchema);
    const valid = validator(data);
    if (!valid) {
        console.error(validator.errors);
        throw new error_1.SchemaError(validator.errors);
    }
    return true;
}
exports.validate = validate;
//# sourceMappingURL=validate.js.map
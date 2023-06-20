"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaError = void 0;
const lib_1 = require("@feathersjs/errors/lib");
/**
 * Class to encapsulate schema errors.
 */
class SchemaError extends lib_1.BadRequest {
    constructor(errors, message = 'Schema validation error') {
        if (errors) {
            message = errors.map((error) => error.message).join(', ');
        }
        super(message);
        this.errors = errors;
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = SchemaError.name; // stack traces display correctly now
    }
}
exports.SchemaError = SchemaError;
//# sourceMappingURL=error.js.map
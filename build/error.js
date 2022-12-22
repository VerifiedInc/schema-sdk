"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaError = void 0;
/**
 * Class to encapsulate schema errors.
 */
class SchemaError extends Error {
    constructor(errors) {
        const message = errors.map((error) => error.message).join(', ');
        super(message);
        this.errors = errors;
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = SchemaError.name; // stack traces display correctly now
    }
}
exports.SchemaError = SchemaError;
//# sourceMappingURL=error.js.map
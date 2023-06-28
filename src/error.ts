import { ErrorObject } from 'ajv';

// type from ajv's ValidateFunction errors interface.
type AjvErrorObject = ErrorObject[] | null | undefined;

/**
 * Class to encapsulate schema errors.
 */
export class SchemaError extends Error {
  errors: AjvErrorObject

  constructor (errors: AjvErrorObject, message = 'Schema validation error') {
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

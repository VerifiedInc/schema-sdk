import { ErrorObject } from 'ajv';

/**
 * Class to encapsulate schema errors.
 */
export class SchemaError extends Error {
  errors?: ErrorObject[];

  constructor (errors: ErrorObject[]) {
    const message = errors.map((error) => error.message).join(', ');
    super(message);
    this.errors = errors;

    // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.name = SchemaError.name; // stack traces display correctly now
  }
}

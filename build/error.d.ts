import { ErrorObject } from 'ajv';
import { BadRequest } from '@feathersjs/errors/lib';
type AjvErrorObject = ErrorObject[] | null | undefined;
/**
 * Class to encapsulate schema errors.
 */
export declare class SchemaError extends BadRequest {
    errors: AjvErrorObject;
    constructor(errors: AjvErrorObject, message?: string);
}
export {};
//# sourceMappingURL=error.d.ts.map
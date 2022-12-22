import { ErrorObject } from 'ajv';
type AjvErrorObject = ErrorObject[] | null | undefined;
/**
 * Class to encapsulate schema errors.
 */
export declare class SchemaError extends Error {
    errors?: AjvErrorObject;
    constructor(errors: AjvErrorObject);
}
export {};
//# sourceMappingURL=error.d.ts.map
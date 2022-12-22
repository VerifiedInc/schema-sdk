import { ErrorObject } from 'ajv';
/**
 * Class to encapsulate schema errors.
 */
export declare class SchemaError extends Error {
    errors?: ErrorObject[];
    constructor(errors: ErrorObject[]);
}
//# sourceMappingURL=error.d.ts.map
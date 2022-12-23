import { TObject, TProperties } from '@sinclair/typebox';
/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
export interface UnumSchemaObject extends TObject<TProperties> {
    $id: string;
}
/**
 * Function to validate the credential schema based on type against the data.
 * @param type: string
 * @param data: any
 * @returns boolean
 */
export declare function validate(type: string, data: any): boolean;
//# sourceMappingURL=validate.d.ts.map
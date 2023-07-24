import { TObject, TProperties } from '@sinclair/typebox';
/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
interface UnumJsonSchema extends TObject<TProperties> {
    $id: string;
}
export declare const governmentIdDocumentImageCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdTypeCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdDocumentBackImageCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdStateCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdNumberCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdIssuanceDateCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdExpirationDateCredentialJsonSchema: UnumJsonSchema;
export declare const incomeCurrencyCredentialJsonSchema: UnumJsonSchema;
export declare const annualIncomeRangeCredentialJsonSchema: UnumJsonSchema;
export {};
//# sourceMappingURL=index.d.ts.map
import { TObject, TProperties } from '@sinclair/typebox';
/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
export interface UnumJsonSchema extends TObject<TProperties> {
    $id: string;
}
export declare const emailCredentialJsonSchema: UnumJsonSchema;
export declare const identityCredentialJsonSchema: UnumJsonSchema;
export declare const sexCredentialJsonSchema: UnumJsonSchema;
export declare const ssnCredentialJsonSchema: UnumJsonSchema;
export declare const countryResidenceCredentialJsonSchema: UnumJsonSchema;
export declare const nationalityCredentialJsonSchema: UnumJsonSchema;
export declare const facialImageCredentialJsonSchema: UnumJsonSchema;
export declare const livelinessCredentialJsonSchema: UnumJsonSchema;
export declare const addressCredentialJsonSchema: UnumJsonSchema;
export declare const lastNameCredentialJsonSchema: UnumJsonSchema;
export declare const firstNameCredentialJsonSchema: UnumJsonSchema;
export declare const birthDateCredentialJsonSchema: UnumJsonSchema;
export declare const dobCredentialJsonSchema: UnumJsonSchema;
export declare const phoneCredentialJsonSchema: UnumJsonSchema;
export declare const fullNameCredentialJsonSchema: UnumJsonSchema;
export declare const genderCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdDocumentImageCredentialJsonSchema: UnumJsonSchema;
export declare const livelinessConfidenceCredentialJsonSchema: UnumJsonSchema;
export declare const facialMatchCredentialJsonSchema: UnumJsonSchema;
export declare const facialMatchConfidenceCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdTypeCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdDocumentBackImageCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdStateCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdNumberCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdIssuanceDateCredentialJsonSchema: UnumJsonSchema;
export declare const governmentIdExpirationDateCredentialJsonSchema: UnumJsonSchema;
export declare const jsonSchemas: Record<string, UnumJsonSchema>;
//# sourceMappingURL=jsonSchemas.d.ts.map
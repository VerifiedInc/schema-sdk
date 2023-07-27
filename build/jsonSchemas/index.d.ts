import { TObject, TProperties } from '@sinclair/typebox';
/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
export interface UnumJsonSchema extends TObject<TProperties> {
    $id: string;
}
/**
 * Export all of the UnumID schema definitions.
 */
export declare const jsonSchemas: Record<string, UnumJsonSchema>;
export * from './addressCredential';
export * from './atomicCredential';
export * from './backwardsCredential';
export * from './compositeCredential';
export * from './employerCredential';
export * from './governmentIdCredential';
export * from './individualCredential';
//# sourceMappingURL=index.d.ts.map
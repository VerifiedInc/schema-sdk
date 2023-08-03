import { TObject, TProperties } from '@sinclair/typebox';
import { AnySchema } from 'ajv';
/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
export interface UnumJsonSchema extends TObject<TProperties> {
    $id: string;
}
/**
 * Export all of the UnumID schema definitions.
 */
export declare const jsonSchemas: Record<string, AnySchema>;
export * from './addressCredential';
export * from './atomicCredential';
export * from './backwardsCredential';
export * from './compositeCredential';
export * from './employerCredential';
export * from './governmentIdCredential';
export * from './individualCredential';
//# sourceMappingURL=index.d.ts.map
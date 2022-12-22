import { TObject } from '@sinclair/typebox';
import { UnumSchemaObject } from './validate';
/**
 * Map of schemas.
 */
export declare const jsonSchemasMap: Map<string, TObject<import("@sinclair/typebox").TProperties>>;
/**
 * Function to get the schema for a given type.
 * @param type
 * @returns
 */
export declare function getSchema(type: string): UnumSchemaObject;
//# sourceMappingURL=schemas.d.ts.map
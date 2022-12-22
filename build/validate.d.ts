import { TObject, TProperties } from '@sinclair/typebox';
export interface UnumSchemaObject extends TObject<TProperties> {
    $id: string;
}
export declare function validateSchema(jsonSchema: UnumSchemaObject, data: any): boolean;
//# sourceMappingURL=validate.d.ts.map
import { ExtendedTypeBuilder, TIntersect, TNever, SchemaOptions, IntersectOptions, TSchema } from '@sinclair/typebox';
/**
 * TypeBuilder is a subclass of ExtendedTypeBuilder that adds the IntersectReferences method which is used to create
 * Intersect types that reference other types.
 */
export declare class TypeBuilder extends ExtendedTypeBuilder {
    /** `[Standard]` Creates a Intersect type */
    IntersectReferences(allOf: [], options?: SchemaOptions): TNever;
    /** `[Standard]` Creates a Intersect type */
    IntersectReferences<T extends [TSchema]>(allOf: [...T], options?: SchemaOptions): T[0];
    IntersectReferences<T extends TSchema[]>(allOf: [...T], options?: IntersectOptions): TIntersect<T>;
}
export declare const Type: TypeBuilder;
//# sourceMappingURL=index.d.ts.map
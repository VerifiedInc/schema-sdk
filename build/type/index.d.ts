import { ExtendedTypeBuilder, TIntersect, TNever, SchemaOptions, IntersectOptions, TSchema } from '@sinclair/typebox';
/**
 * TypeBuilder is a subclass of ExtendedTypeBuilder that adds the Intersect method removing the additionalProperties property from all objects in an Intersect.
 */
export declare class TypeBuilder extends ExtendedTypeBuilder {
    /** `[Standard]` Creates a Intersect type */
    Intersect(allOf: [], options?: SchemaOptions): TNever;
    /** `[Standard]` Creates a Intersect type */
    Intersect<T extends [TSchema]>(allOf: [...T], options?: SchemaOptions): T[0];
    Intersect<T extends TSchema[]>(allOf: [...T], options?: IntersectOptions): TIntersect<T>;
}
export declare const Type: TypeBuilder;
//# sourceMappingURL=index.d.ts.map
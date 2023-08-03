import {
  Type as TypeStandard,
  ExtendedTypeBuilder,
  TypeGuard,
  TIntersect,
  TNever,
  Kind,
  SchemaOptions,
  IntersectOptions,
  TSchema,
  TypeClone
} from '@sinclair/typebox';

/**
 * TypeBuilder is a subclass of ExtendedTypeBuilder that adds the IntersectReferences method which is used to create
 * Intersect types that reference other types.
 */
export class TypeBuilder extends ExtendedTypeBuilder {
  /** `[Standard]` Creates a Intersect type */
  public IntersectReferences(allOf: [], options?: SchemaOptions): TNever;
  /** `[Standard]` Creates a Intersect type */
  public IntersectReferences<T extends [TSchema]>(allOf: [...T], options?: SchemaOptions): T[0];
  // /** `[Standard]` Creates a Intersect type */
  public IntersectReferences<T extends TSchema[]>(allOf: [...T], options?: IntersectOptions): TIntersect<T>;
  public IntersectReferences(allOf: TSchema[], options: IntersectOptions = {}) {
    if (allOf.length === 0) return TypeStandard.Never();
    if (allOf.length === 1) return TypeClone.Clone(allOf[0], options);
    const objects = allOf.every((schema) => TypeGuard.TObject(schema));
    const cloned = allOf.map((schema) => {
      if (TypeGuard.TSchema(schema)) { // TSchema instead of TObject so composite credentials "allOf" shows references ever for composite children
        return TypeStandard.Ref(schema);
      } else {
        return schema;
      }
    });
    const clonedUnevaluatedProperties = TypeGuard.TSchema(options.unevaluatedProperties)
      ? { unevaluatedProperties: TypeClone.Clone(options.unevaluatedProperties, {}) }
      : {};
    if (
      options.unevaluatedProperties === false ||
      TypeGuard.TSchema(options.unevaluatedProperties) ||
      objects
    ) {
      return this.Create({
        ...options,
        ...clonedUnevaluatedProperties,
        [Kind]: 'Intersect',
        type: 'object',
        allOf: cloned
      });
    } else {
      return this.Create({ ...options, ...clonedUnevaluatedProperties, [Kind]: 'Intersect', allOf: cloned });
    }
  }
}

export const Type = new TypeBuilder(); // re-export

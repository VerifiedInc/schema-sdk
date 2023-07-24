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
 * TypeBuilder is a subclass of ExtendedTypeBuilder that adds the Intersect method removing the additionalProperties property from all objects in an Intersect.
 */
export class TypeBuilder extends ExtendedTypeBuilder {
  /** `[Standard]` Creates a Intersect type */
  public Intersect(allOf: [], options?: SchemaOptions): TNever;
  /** `[Standard]` Creates a Intersect type */
  public Intersect<T extends [TSchema]>(allOf: [...T], options?: SchemaOptions): T[0];
  // /** `[Standard]` Creates a Intersect type */
  public Intersect<T extends TSchema[]>(allOf: [...T], options?: IntersectOptions): TIntersect<T>;
  public Intersect(allOf: TSchema[], options: IntersectOptions = {}) {
    if (allOf.length === 0) return TypeStandard.Never();
    if (allOf.length === 1) return TypeClone.Clone(allOf[0], options);
    const objects = allOf.every((schema) => TypeGuard.TObject(schema));
    // delete additionalProperties property from all objects in an Intersect
    const cloned = allOf.map((schema) => {
      if (TypeGuard.TObject(schema)) {
        const clonedSchema = TypeClone.Clone(schema, {});
        // delete clonedSchema.additionalProperties;
        // return clonedSchema;

        // return TypeStandard.Ref(schema);
        delete clonedSchema.$id;
        return clonedSchema;
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

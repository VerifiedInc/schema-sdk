"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.TypeBuilder = void 0;
const typebox_1 = require("@sinclair/typebox");
/**
 * TypeBuilder is a subclass of ExtendedTypeBuilder that adds the Intersect method removing the additionalProperties property from all objects in an Intersect.
 */
class TypeBuilder extends typebox_1.ExtendedTypeBuilder {
    Intersect(allOf, options = {}) {
        if (allOf.length === 0)
            return typebox_1.Type.Never();
        if (allOf.length === 1)
            return typebox_1.TypeClone.Clone(allOf[0], options);
        const objects = allOf.every((schema) => typebox_1.TypeGuard.TObject(schema));
        // delete additionalProperties property from all objects in an Intersect
        const cloned = allOf.map((schema) => {
            if (typebox_1.TypeGuard.TObject(schema)) {
                const clonedSchema = typebox_1.TypeClone.Clone(schema, {});
                // delete clonedSchema.additionalProperties;
                // return clonedSchema;
                // return TypeStandard.Ref(schema);
                delete clonedSchema.$id;
                return clonedSchema;
            }
            else {
                return schema;
            }
        });
        const clonedUnevaluatedProperties = typebox_1.TypeGuard.TSchema(options.unevaluatedProperties)
            ? { unevaluatedProperties: typebox_1.TypeClone.Clone(options.unevaluatedProperties, {}) }
            : {};
        if (options.unevaluatedProperties === false ||
            typebox_1.TypeGuard.TSchema(options.unevaluatedProperties) ||
            objects) {
            return this.Create({
                ...options,
                ...clonedUnevaluatedProperties,
                [typebox_1.Kind]: 'Intersect',
                type: 'object',
                allOf: cloned
            });
        }
        else {
            return this.Create({ ...options, ...clonedUnevaluatedProperties, [typebox_1.Kind]: 'Intersect', allOf: cloned });
        }
    }
}
exports.TypeBuilder = TypeBuilder;
exports.Type = new TypeBuilder(); // re-export
//# sourceMappingURL=index.js.map
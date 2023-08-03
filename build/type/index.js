"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.TypeBuilder = void 0;
const typebox_1 = require("@sinclair/typebox");
/**
 * TypeBuilder is a subclass of ExtendedTypeBuilder that adds the IntersectReferences method which is used to create
 * Intersect types that reference other types.
 */
class TypeBuilder extends typebox_1.ExtendedTypeBuilder {
    IntersectReferences(allOf, options = {}) {
        if (allOf.length === 0)
            return typebox_1.Type.Never();
        if (allOf.length === 1)
            return typebox_1.TypeClone.Clone(allOf[0], options);
        const objects = allOf.every((schema) => typebox_1.TypeGuard.TObject(schema));
        const cloned = allOf.map((schema) => {
            if (typebox_1.TypeGuard.TSchema(schema)) { // TSchema instead of TObject so composite credentials "allOf" shows references ever for composite children
                return typebox_1.Type.Ref(schema);
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
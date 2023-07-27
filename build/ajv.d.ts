import Ajv2019 from 'ajv/dist/2019';
/**
 * Passing all schemas to Ajv constructor, which internally calls addSchema, instead of adding them on demand
 * Options ref: https://ajv.js.org/options.html#ajv-options
 *
 * Note: Although addSchema does not compile schemas, explicit compilation is not required - the schema will be compiled when it is used first time.
 * ref: https://ajv.js.org/api.html#ajv-addschema-schema-object-object-key-string-ajv
 */
export declare const ajv: Ajv2019;
//# sourceMappingURL=ajv.d.ts.map
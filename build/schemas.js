"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssnCredentialSchema = exports.emailCredentialSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.emailCredentialSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String()
}, { $id: 'EmailCredential', additionalProperties: false });
exports.ssnCredentialSchema = typebox_1.Type.Object({
    ssn: typebox_1.Type.String()
}, { $id: 'SsnCredential', additionalProperties: false });
// /**
//  * Map of schemas.
//  */
// export const jsonSchemasMap = new Map<string, TObject>([
//   ['EmailCredential', emailCredentialSchema],
//   ['SsnCredential', ssnCredentialSchema]
// ]);
// /**
//  * Function to get the schema for a given type.
//  * @param type
//  * @returns
//  */
// export function getSchema (type: string): TObject {
//   const schema = jsonSchemasMap.get(type);
//   if (!schema) {
//     throw new SchemaError(undefined, `Schema not found for type: ${type}`);
//   }
//   //   return schema as UnumSchemaObject;
//   return schema;
// }
// // export type SsnCredentialSchemaType = Static<typeof ssnCredentialSchema>;
// const ssn = getSchema('SsnCredential');
// export type SsnCredentialSchemaType = Static<typeof ssn>;
//# sourceMappingURL=schemas.js.map
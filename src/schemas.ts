import { Static, TObject, Type } from '@sinclair/typebox';
import { ajv } from './ajv';
import { SchemaError } from './error';
import { UnumSchemaObject } from './validate';

export const emailCredentialSchema = Type.Object({
  email: Type.String()
},
{ $id: 'EmailCredentialType', additionalProperties: false });

export const ssnCredentialSchema = Type.Object({
  ssn: Type.String()
},
{ $id: 'SsnCredentialType', additionalProperties: false });

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

import { TObject, Type } from '@sinclair/typebox';
import { SchemaError } from './error';
import { UnumSchemaObject } from './validate';

const emailCredentialSchema = Type.Object({
  email: Type.String()
},
{ $id: 'EmailCredentialType', additionalProperties: false });

const ssnCredentialSchema = Type.Object({
  ssn: Type.String()
},
{ $id: 'SsnCredentialType', additionalProperties: false });

/**
 * Map of schemas.
 */
export const jsonSchemasMap = new Map<string, TObject>([
  ['EmailCredential', emailCredentialSchema],
  ['SsnCredential', ssnCredentialSchema]
]);

/**
 * Function to get the schema for a given type.
 * @param type
 * @returns
 */
export function getSchema (type: string): TObject {
  const schema = jsonSchemasMap.get(type);

  if (!schema) {
    throw new SchemaError(undefined, `Schema not found for type: ${type}`);
  }

  return schema;
}

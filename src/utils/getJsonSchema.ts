import { AnySchema } from 'ajv';
import { ajv } from '../ajv';

/**
 * Helper to return a json schema by type.
 * @param type
 * @returns
 */
export function getJsonSchema(type: string): AnySchema {
  const result = ajv.schemas[type];

  if (!result) {
    throw new Error(`Schema of type ${type} does not exist in the schema-sdk`);
  }

  return result;
}

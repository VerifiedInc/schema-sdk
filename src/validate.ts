import { TObject, TProperties } from '@sinclair/typebox';
import Ajv from 'ajv';
import { ajv } from './ajv';
import { SchemaError } from './error';
import { ssnCredentialSchema } from './schemas';

/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
export interface UnumSchemaObject extends TObject<TProperties> {
    $id: string; // UnumID schema definitions will always have a valid $id property
}

/**
 * Function to validate the credential schema based on type against the data.
 * @param type: string
 * @param data: any
 * @returns boolean
 */
export function validate (type: string, data: any): boolean {
  const validator = ajv.getSchema(type);

  if (!validator) {
    throw new SchemaError(undefined, `Schema not found for type: ${type}`);
  }

  const valid = validator(data);

  if (!valid) {
    console.error(validator.errors);
    throw new SchemaError(validator.errors);
  }

  return true;
}

/**
 * Function to validate the jsonSchema against the data.
 * @param jsonSchema
 * @param data
 * @returns boolean
 */
export function validateOld (jsonSchema: UnumSchemaObject, data: any): boolean {
  // adding schemas on demand instead of having to preload all of them.
  // ref: https://ajv.js.org/guide/managing-schemas.html#pre-adding-all-schemas-vs-adding-on-demand
  const validator = ajv.getSchema(jsonSchema.$id) || ajv.compile(jsonSchema);

  const valid = validator(data);

  if (!valid) {
    console.error(validator.errors);
    throw new SchemaError(validator.errors);
  }

  return true;
}

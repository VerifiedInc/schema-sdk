import { TObject, TProperties } from '@sinclair/typebox';
import Ajv, { } from 'ajv';
import { SchemaError } from './error';

/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
export interface UnumSchemaObject extends TObject<TProperties> {
    $id: string; // UnumID schema definitions will always have a valid $id property
}

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

/**
 * Function to validate the jsonSchema against the data.
 * @param jsonSchema
 * @param data
 * @returns boolean
 */
export function validate (jsonSchema: UnumSchemaObject, data: any): boolean {
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

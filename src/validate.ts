import Ajv, { JSONSchemaType } from 'ajv';
import { SchemaError } from './error';

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

export function validate (jsonSchema: {$id: string}, data: any): boolean {
  // adding schemas on demand instead of having to preload all of them. ref: https://ajv.js.org/guide/managing-schemas.html#pre-adding-all-schemas-vs-adding-on-demand
  const validator = ajv.getSchema(jsonSchema.$id) || ajv.compile(jsonSchema);
  const valid = validator(data);
  if (!valid) {
    console.error(validator.errors);
    // logger.error(validator.errors);
    // throw new Error(validator.errors?.map((error) => error.message).join(', '));
    // throw new Error(JSON.stringify(validator.errors));
    throw new SchemaError(validator.errors);
  }

  return true;
}

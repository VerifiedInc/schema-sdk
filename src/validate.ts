import { ajv } from './ajv';
import { SchemaError } from './error';
import logger from './logger';

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
    logger.error(validator.errors);
    throw new SchemaError(validator.errors);
  }

  return true;
}

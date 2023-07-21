import Ajv from 'ajv';
import logger from './logger';
import addFormats from 'ajv-formats';
import { jsonSchemas } from './jsonSchemas';
import {
  emailFormat,
  phoneFormat,
  ssnFormat,
  digitsFormat,
  optionalEmailFormat,
  optionalPhoneFormat,
  dataUriBase64ImageFormat,
  iso4217Format,
  iso4217AmountFormat,
  iso4217AmountRangeFormat,
  addressFormat,
  genderFormat,
  iso3166Alpha2CountryCodeFormat,
  iso3166CodeFormat,
  documentTypeFormat,
  confidenceLevelFormat,
  booleanFormat
} from './formats';

// get all the values of the jsonSchemas object in an array
// schemas to add to ajv instance options
const schemas = Object.values(jsonSchemas);

/**
 * Passing all schemas to Ajv constructor, which internally calls addSchema, instead of adding them on demand
 * Options ref: https://ajv.js.org/options.html#ajv-options
 *
 * Note: Although addSchema does not compile schemas, explicit compilation is not required - the schema will be compiled when it is used first time.
 * ref: https://ajv.js.org/api.html#ajv-addschema-schema-object-object-key-string-ajv
 */
export const ajv = new Ajv({
  allErrors: true,
  coerceTypes: true, // ref: https://ajv.js.org/guide/modifying-data.html#coercing-data-types
  logger,
  schemas
});

// Adding formats to ajv
addFormats(ajv);

/*******************************************************************
 * Add custom formats to ajv below                                 *
 * ref: https://ajv.js.org/guide/formats.html#user-defined-formats *
 *******************************************************************/
ajv.addFormat('email', emailFormat);
ajv.addFormat('optionalEmail', optionalEmailFormat);
ajv.addFormat('phone', phoneFormat);
ajv.addFormat('optionalPhone', optionalPhoneFormat);
ajv.addFormat('ssn', ssnFormat);
ajv.addFormat('digits', digitsFormat);
ajv.addFormat('dataUriBase64Image', dataUriBase64ImageFormat);
ajv.addFormat('iso4217', iso4217Format);
ajv.addFormat('iso4217Amount', iso4217AmountFormat);
ajv.addFormat('iso4217AmountRange', iso4217AmountRangeFormat);
ajv.addFormat('address', addressFormat);
// ajv.addFormat('addressComposite', addressCompositeFormat);
ajv.addFormat('gender', genderFormat);
ajv.addFormat('iso3361Alpha2', iso3166Alpha2CountryCodeFormat);
ajv.addFormat('iso3166', iso3166CodeFormat);
ajv.addFormat('documentType', documentTypeFormat);
ajv.addFormat('confidenceLevel', confidenceLevelFormat);
ajv.addFormat('boolean', booleanFormat);

/*******************************************************************
 * Add custom keyword to ajv below                                 *
 * ref: https://ajv.js.org/guide/formats.html#user-defined-formats *
 *******************************************************************/
ajv.addKeyword({
  keyword: 'customFormat',
  validate: (schema: any, data: any) => {
    if (schema === 'address') {
      if (data.country === 'US') {
        // Check that zip follows expected pattern. Assuming US zip codes, we can expect 5 digits or 9
        const usZipRegex = /^\d{5}(-\d{4})?$/;
        if (!usZipRegex.test(data.zipCode)) return false;
      }
      return true;
    }
    return true;
  },
  errors: false
});

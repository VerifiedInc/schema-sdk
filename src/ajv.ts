// Using Ajv 2019 for access to JSON Schema Draft 2019 and the new features like $data, $merge, unevaluatedProperties, etc.
// 100% backwards compatible with Draft 7.
import Ajv2019, { FuncKeywordDefinition } from 'ajv/dist/2019';
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
  booleanFormat,
  iso3166USRegionCodeFormat,
  iso3166RegionCodeFormat,
  usZipCodeFormat,
  unixMsEpochDayFormat
} from './formats';
import { DisplayFormat } from './enums/displayFormat';

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

export const ajv = new Ajv2019({
  allErrors: true,
  coerceTypes: true, // ref: https://ajv.js.org/guide/modifying-data.html#coercing-data-types,
  removeAdditional: true,
  logger,
  schemas
});

// Adding default formats to ajv
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
ajv.addFormat('unixMsEpochDayFormat', unixMsEpochDayFormat);
ajv.addFormat('dataUriBase64Image', dataUriBase64ImageFormat);
ajv.addFormat('iso4217', iso4217Format);
ajv.addFormat('iso4217Amount', iso4217AmountFormat);
ajv.addFormat('iso4217AmountRange', iso4217AmountRangeFormat);
ajv.addFormat('address', addressFormat);
ajv.addFormat('gender', genderFormat);
ajv.addFormat('iso3361Alpha2', iso3166Alpha2CountryCodeFormat);
ajv.addFormat('iso3166USRegionCode', iso3166USRegionCodeFormat);
ajv.addFormat('iso3166RegionCode', iso3166RegionCodeFormat);
ajv.addFormat('iso3166', iso3166CodeFormat);
ajv.addFormat('documentType', documentTypeFormat);
ajv.addFormat('confidenceLevel', confidenceLevelFormat);
ajv.addFormat('boolean', booleanFormat);
ajv.addFormat('usZipCode', usZipCodeFormat);

/************************************
 * Add custom keywords to ajv below *
 ************************************/
// Note: not really a "functional" keyword in the sense of affecting ajv validation, but useful for clients displaying the data
const displayFormatDefinition: FuncKeywordDefinition = {
  type: 'string',
  metaSchema: {
    type: 'string',
    enum: Object.values(DisplayFormat)
  },
  keyword: 'displayFormat'
};

ajv.addKeyword('displayFormat', displayFormatDefinition);

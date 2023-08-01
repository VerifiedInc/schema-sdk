import { Format } from 'ajv';
/*******************************************************************
 * Creating custom formats                                         *
 * ref: https://ajv.js.org/guide/formats.html#user-defined-formats *
 *******************************************************************/
/**
 * Format to determine if a string is a valid email
 */
export declare const emailFormat: Format;
/**
 * Format to determine if a string is a valid email or an empty string
 */
export declare const optionalEmailFormat: Format;
/**
 * Format to determine if a string is a valid SSN (9 digits with no dashes)
 */
export declare const ssnFormat: Format;
/**
 * Format to determine if a string is a valid phone number
 */
export declare const phoneFormat: Format;
/**
 * Format to determine if a string is a valid phone number or an empty string
 */
export declare const optionalPhoneFormat: Format;
/**
 * Format to determine if a string containing all digits
 * Note: used instead of number thanks to json serializing as a string.
 */
export declare const digitsFormat: Format;
/**
 * Format to determine if the input is a valid Unix MS since epoch day, must 12:00:00:000 of the UTC day.
 */
export declare const unixMsEpochDayFormat: Format;
/**
 * Format to determine if a string is a valid OTP (verification code)
 * validates that the string is six digits
 */
export declare const otpFormat: Format;
/**
 * Format to determine if a string is a data URI with base64 encoded data
 */
export declare const dataUriBase64ImageFormat: Format;
/**
 * Format to determine if a string contains an ISO 4217 currency code followed by a space then a number
 */
export declare const iso4217Format: Format;
/**
 * Format to determine if a string contains an ISO 4217 currency code followed by a space then a number
 */
export declare const iso4217AmountFormat: Format;
/**
 * Format to determine if a string contains valid range values with an ISO 4217 currency code followed by a space then a number
 */
export declare const iso4217AmountRangeFormat: Format;
/**
 * Format to validate an address string.
 * Must use iso 3166-2 codes for country and region information.
 * Valid examples:
 * 107 Ross Khaledi Rd, Laredo, US-TX 78045
 * 107 Ross Khaledi Rd, Apt #4, Laredo, US-TX 78045-1234
 */
export declare const addressFormat: Format;
/**
 * Format to determine if a string is a valid iso3166 code
 */
export declare const iso3166CodeFormat: Format;
/**
 * Format to determine if a string is a valid iso3166-1 alpha-2 country code
 */
export declare const iso3166Alpha2CountryCodeFormat: Format;
/**
 * Format to determine if a string is a valid iso3166-2 region code if the country is US
 */
export declare const iso3166USRegionCodeFormat: Format;
/**
 * Format to determine if a string is a valid iso3166-2 region code
 */
export declare const iso3166RegionCodeFormat: Format;
/**
 * Format to determine if a zip code is a valid US zip code
 */
export declare const usZipCodeFormat: Format;
/**
 * Format to determine if a string contains a valid sex
 */
export declare const sexFormat: Format;
/**
 * Format to determine if a string contains a valid gender
 */
export declare const genderFormat: Format;
/**
 * Format to determine if a string contains a valid document type
 */
export declare const documentTypeFormat: Format;
/**
 * Format to determine if a string contains valid a confidence value
 */
export declare const confidenceLevelFormat: Format;
/**
 * Format to determine if a string is a valid boolean
 */
export declare const booleanFormat: Format;
//# sourceMappingURL=formats.d.ts.map
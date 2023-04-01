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
 * Format to determine if a string is a valid SSN
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
 */
export declare const digitsFormat: Format;
/**
 * Format to determine if a string is a unix timestamp in milliseconds greater than current time
 */
export declare const unixMsExpirationDateFormat: Format;
/**
 * Format for validating a date in inputs in the ms since epoch format, same as digitsFormat.
 * However, the real purpose of this format is to signal to the conversion layers that the date should be converted to a string in the format YYYY-MM-DD
 */
export declare const calendarDateFormat: Format;
/**
 * Calendar expiration date format to ensure a unix timestamp in milliseconds is greater than current time, same as unixMsExpirationDateFormat.
 * However, the real purpose of this format is to signal to the conversion layers that the date should be converted to a string in the format YYYY-MM-DDa
 */
export declare const calendarExpirationDateFormat: Format;
//# sourceMappingURL=formats.d.ts.map
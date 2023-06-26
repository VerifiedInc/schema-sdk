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
 */
export declare const digitsFormat: Format;
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
type FormatD = Format & {
    description: string;
};
export declare const addressFormat: FormatD;
/**
 * Format to determine if a string contains valid range values with an ISO 4217 currency code followed by a space then a number
 */
export declare const genderFormat: Format;
export {};
//# sourceMappingURL=formats.d.ts.map
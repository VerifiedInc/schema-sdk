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
 * Format to determine if a string is a valid OTP (verification code)
 * validates that the string is six digits
 */
export declare const otpFormat: Format;
/**
 * Format to determine if a string is a data URI with base64 encoded data
 */
export declare const dataUriBase64ImageFormat: Format;
//# sourceMappingURL=formats.d.ts.map
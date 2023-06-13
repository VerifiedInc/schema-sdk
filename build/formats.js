"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iso4217AmountRangeFormat = exports.iso4217AmountFormat = exports.iso4217Format = exports.dataUriBase64ImageFormat = exports.otpFormat = exports.unixMsExpirationDateFormat = exports.digitsFormat = exports.optionalPhoneFormat = exports.phoneFormat = exports.ssnFormat = exports.optionalEmailFormat = exports.emailFormat = void 0;
// iso4317 codes: https://www.iban.com/currency-codes
const validISO4217Codes = new Set([
    'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SPL', 'SRD', 'STN', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW', 'ZWD'
]);
/*******************************************************************
 * Creating custom formats                                         *
 * ref: https://ajv.js.org/guide/formats.html#user-defined-formats *
 *******************************************************************/
/**
 * Format to determine if a string is a valid email
 */
exports.emailFormat = {
    type: 'string',
    validate: (email) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/; // source: https://www.w3resource.com/javascript/form/email-validation.php#
        return emailRegex.test(email);
    }
};
/**
 * Format to determine if a string is a valid email or an empty string
 */
exports.optionalEmailFormat = {
    type: 'string',
    validate: (email) => {
        // because this is a format for an optional email field, we need to allow some falsy values
        // this could probably be more specific (e.g. only allow '' and undefined?) but I'm not sure what values we want to allow
        // I know that remix forms, for example, will pass an empty string for an optional field if the user doesn't enter anything
        if (!email) {
            return true;
        }
        return exports.emailFormat.validate(email);
    }
};
/**
 * Format to determine if a string is a valid SSN
 */
exports.ssnFormat = {
    type: 'string',
    validate: (ssn) => {
        const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
        return ssnRegex.test(ssn);
    }
};
/**
 * Format to determine if a string is a valid phone number
 */
exports.phoneFormat = {
    type: 'string',
    validate: (phone) => {
        // matches a valid e.164 format telephone number
        // ref: https://ihateregex.io/expr/e164-phone/
        const phoneRegex = /^\+[1-9]\d{1,14}$/;
        return phoneRegex.test(phone);
    }
};
/**
 * Format to determine if a string is a valid phone number or an empty string
 */
exports.optionalPhoneFormat = {
    type: 'string',
    validate: (phone) => {
        // because this is a format for an optional phone field, we need to allow some falsy values
        if (!phone) {
            return true;
        }
        return exports.phoneFormat.validate(phone);
    }
};
/**
 * Format to determine if a string containing all digits
 */
exports.digitsFormat = {
    type: 'string',
    validate: (digits) => {
        // matches a string of digits
        const digitsRegex = /^-?\d+$/;
        return digitsRegex.test(digits);
    }
};
/**
 * Format to determine if a string is a unix timestamp in milliseconds greater than current time
 */
exports.unixMsExpirationDateFormat = {
    type: 'string',
    validate: (expirationDate) => {
        // Note: need to handle this as a format validator instead of using TypeBox's minimum validator because using that option value is static upon initialization
        const valid = exports.digitsFormat.validate(expirationDate);
        if (!valid) {
            return false;
        }
        return parseInt(expirationDate) > Date.now();
    }
};
/**
 * Format to determine if a string is a valid OTP (verification code)
 * validates that the string is six digits
 */
exports.otpFormat = {
    type: 'string',
    validate: (otp) => {
        // matches a string of six digits
        const otpRegex = /^\d{6}$/;
        return otpRegex.test(otp);
    }
};
/**
 * Format to determine if a string is a data URI with base64 encoded data
 */
exports.dataUriBase64ImageFormat = {
    type: 'string',
    validate: (dataUri) => {
        // matches a data URI for an image with base64 encoded data
        const uriRegex = /^data:image\/[aA-zZ]+;base64,[aA-zZ0-9/+]+[=]*$/;
        return uriRegex.test(dataUri);
    }
};
/**
 * Format to determine if a string contains an ISO 4217 currency code followed by a space then a number
 */
exports.iso4217Format = {
    type: 'string',
    validate: (input) => {
        return validISO4217Codes.has(input);
    }
};
/**
 * Format to determine if a string contains an ISO 4217 currency code followed by a space then a number
 */
exports.iso4217AmountFormat = {
    type: 'string',
    validate: (input) => {
        const parts = input.split(' ');
        const currencyCode = parts[0];
        const amount = parts[1];
        if (!validISO4217Codes.has(currencyCode))
            return false;
        // check if the amount is a valid number
        return /^\d+$/.test(amount);
    }
};
/**
 * Format to determine if a string contains valid range values with an ISO 4217 currency code followed by a space then a number
 */
exports.iso4217AmountRangeFormat = {
    type: 'string',
    validate: (input) => {
        const parts = input.split(' ');
        const currencyCode = parts[0];
        const range = parts[1];
        if (!validISO4217Codes.has(currencyCode))
            return false;
        // check if the amount is a valid range
        const rangeRegex = /^min(\d+)_max(\d+)$/;
        return rangeRegex.test(range);
    }
};
//# sourceMappingURL=formats.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataUriBase64ImageFormat = exports.otpFormat = exports.unixMsExpirationDateFormat = exports.digitsFormat = exports.optionalPhoneFormat = exports.phoneFormat = exports.ssnFormat = exports.optionalEmailFormat = exports.emailFormat = void 0;
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
        const digitsRegex = /^\d+$/;
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
//# sourceMappingURL=formats.js.map
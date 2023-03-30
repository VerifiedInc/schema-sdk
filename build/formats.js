"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unixMsExpirationDateFormat = exports.digitsFormat = exports.optionalPhoneFormat = exports.phoneFormat = exports.ssnFormat = exports.optionalEmailFormat = exports.emailFormat = void 0;
/*******************************************************************
 * Creating custom formats                                         *
 * ref: https://ajv.js.org/guide/formats.html#user-defined-formats *
 *******************************************************************/
exports.emailFormat = {
    type: 'string',
    validate: (email) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/; // source: https://www.w3resource.com/javascript/form/email-validation.php#
        return emailRegex.test(email);
    }
};
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
exports.ssnFormat = {
    type: 'string',
    validate: (ssn) => {
        const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
        return ssnRegex.test(ssn);
    }
};
exports.phoneFormat = {
    type: 'string',
    validate: (phone) => {
        // matches a valid e.164 format telephone number
        // ref: https://ihateregex.io/expr/e164-phone/
        const phoneRegex = /^\+[1-9]\d{1,14}$/;
        return phoneRegex.test(phone);
    }
};
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
exports.digitsFormat = {
    type: 'string',
    validate: (digits) => {
        // matches a string of digits
        const digitsRegex = /^\d+$/;
        return digitsRegex.test(digits);
    }
};
exports.unixMsExpirationDateFormat = {
    type: 'string',
    validate: (expirationDate) => {
        // validates the inputted number is a unix timestamp in milliseconds great than the current time
        // Note: need to handle this as a format validator instead of using TypeBox's minimum validator because using that option value is static upon initialization
        const digitsRegex = /^\d+$/;
        const isDigits = digitsRegex.test(expirationDate);
        if (!isDigits) {
            return false;
        }
        return parseInt(expirationDate) > Date.now();
    }
};
//# sourceMappingURL=formats.js.map
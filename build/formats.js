"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unixMsExpirationDateFormat = exports.phoneFormat = exports.ssnFormat = exports.emailFormat = void 0;
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
exports.unixMsExpirationDateFormat = {
    type: 'number',
    validate: (expirationDate) => {
        // validates the inputted number is a unix timestamp in milliseconds great than the current time
        // Note: need to handle this as a format validator instead of using TypeBox's minimum validator because using that option value is static upon initialization
        return expirationDate > Date.now();
    }
};
//# sourceMappingURL=formats.js.map
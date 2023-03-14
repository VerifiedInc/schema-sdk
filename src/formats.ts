import { Format } from 'ajv';

/*******************************************************************
 * Creating custom formats                                         *
 * ref: https://ajv.js.org/guide/formats.html#user-defined-formats *
 *******************************************************************/

export const emailFormat: Format = {
  type: 'string',
  validate: (email: string) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/; // source: https://www.w3resource.com/javascript/form/email-validation.php#
    return emailRegex.test(email);
  }
};

export const ssnFormat: Format = {
  type: 'string',
  validate: (ssn: string) => {
    const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
    return ssnRegex.test(ssn);
  }
};

export const phoneFormat: Format = {
  type: 'string',
  validate: (phone: string) => {
    // matches a valid e.164 format telephone number
    // ref: https://ihateregex.io/expr/e164-phone/
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  }
};

export const digitsFormat: Format = {
  type: 'string',
  validate: (digits: string) => {
    // matches a string of digits
    const digitsRegex = /^\d+$/;
    return digitsRegex.test(digits);
  }
};

export const unixMsExpirationDateFormat: Format = {
  type: 'string',
  validate: (expirationDate: string) => {
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

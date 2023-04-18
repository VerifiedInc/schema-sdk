import { Format } from 'ajv';
import { FormatValidator } from 'ajv/dist/types';

/*******************************************************************
 * Creating custom formats                                         *
 * ref: https://ajv.js.org/guide/formats.html#user-defined-formats *
 *******************************************************************/

/**
 * Format to determine if a string is a valid email
 */
export const emailFormat: Format = {
  type: 'string',
  validate: (email: string) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/; // source: https://www.w3resource.com/javascript/form/email-validation.php#
    return emailRegex.test(email);
  }
};

/**
 * Format to determine if a string is a valid email or an empty string
 */
export const optionalEmailFormat: Format = {
  type: 'string',
  validate: (email: string) => {
    // because this is a format for an optional email field, we need to allow some falsy values
    // this could probably be more specific (e.g. only allow '' and undefined?) but I'm not sure what values we want to allow
    // I know that remix forms, for example, will pass an empty string for an optional field if the user doesn't enter anything
    if (!email) {
      return true;
    }

    return (emailFormat.validate as FormatValidator<string>)(email);
  }
};

/**
 * Format to determine if a string is a valid SSN
 */
export const ssnFormat: Format = {
  type: 'string',
  validate: (ssn: string) => {
    const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
    return ssnRegex.test(ssn);
  }
};

/**
 * Format to determine if a string is a valid phone number
 */
export const phoneFormat: Format = {
  type: 'string',
  validate: (phone: string) => {
    // matches a valid e.164 format telephone number
    // ref: https://ihateregex.io/expr/e164-phone/
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  }
};

/**
 * Format to determine if a string is a valid phone number or an empty string
 */
export const optionalPhoneFormat: Format = {
  type: 'string',
  validate: (phone: string) => {
    // because this is a format for an optional phone field, we need to allow some falsy values
    if (!phone) {
      return true;
    }

    return (phoneFormat.validate as FormatValidator<string>)(phone);
  }
};

/**
 * Format to determine if a string containing all digits
 */
export const digitsFormat: Format = {
  type: 'string',
  validate: (digits: string) => {
    // matches a string of digits
    const digitsRegex = /^\d+$/;
    return digitsRegex.test(digits);
  }
};

/**
 * Format to determine if a string is a unix timestamp in milliseconds greater than current time
 */
export const unixMsExpirationDateFormat: Format = {
  type: 'string',
  validate: (expirationDate: string) => {
    // Note: need to handle this as a format validator instead of using TypeBox's minimum validator because using that option value is static upon initialization
    const valid = (digitsFormat.validate as FormatValidator<string>)(expirationDate);

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
export const otpFormat: Format = {
  type: 'string',
  validate: (otp: string) => {
    // matches a string of six digits
    const otpRegex = /^\d{6}$/;
    return otpRegex.test(otp);
  }
};

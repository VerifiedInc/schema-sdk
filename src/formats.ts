import { Format } from 'ajv';
import { FormatValidator } from 'ajv/dist/types';
import {
  ISO31661Alpha2CountryCodes,
  ISO31662USCodes,
  ISO4217Codes,
  confidenceLevels,
  documentTypes,
  genders,
  sexes
} from './values';

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
 * Format to determine if a string is a valid SSN (9 digits with no dashes)
 */
export const ssnFormat: Format = {
  type: 'string',
  validate: (ssn: string) => {
    const ssnRegex = /^\d{9}$/;
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
 * Note: used instead of number thanks to json serializing as a string.
 */
export const digitsFormat: Format = {
  type: 'string',
  validate: (digits: string) => {
    // matches a string of digits
    const digitsRegex = /^-?\d+$/;
    return digitsRegex.test(digits);
  }
};

/**
 * Format to determine if the input is a valid Unix MS since epoch day, must 12:00:00:000 of the UTC day.
 */
export const unixMsEpochDayFormat: Format = {
  type: 'string',
  validate: (digits: string) => {
    // matches the digits format
    if (!(digitsFormat.validate as FormatValidator<string>)(digits)) {
      return false;
    }

    // Convert the string to a number
    const timestamp = Number(digits);

    // Convert Unix timestamp (in milliseconds) to a Date object.
    const date = new Date(timestamp);

    // Ensure is 12:00:00:000
    return (
      date.getUTCHours() === 12 &&
      date.getUTCMinutes() === 0 &&
      date.getUTCSeconds() === 0 &&
      date.getUTCMilliseconds() === 0
    );
  }
};

/**
 * Format to determine if the string is a valid date in the format MM-DD-YYYY, customary US format.
 */
export const dateUsFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    // Check if dateStr matches the MM-DD-YYYY format
    if (!/^\d{2}-\d{2}-\d{4}$/.test(input)) {
      return false;
    }

    // Extract date parts
    const [month, day, year] = input.split('-').map(Number);

    // Basic validation
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;

    // Accurate validation taking into account leap years and each month's max day
    const date = new Date(year, month - 1, day);
    return date && date.getMonth() === month - 1;
  }
};

export const dateISO8601Format: Format = {
  type: 'string',
  validate: (input: string) => {
    // check if input matches the YYYY-MM-DDTHH:MM:SSZ format
    if (!/^(\d{4}-\d{2}-\d{2})(T(\d{2}:\d{2}:\d{2})(\.\d{3})?Z?)?$/.test(input)) {
      return false;
    }

    // extract date and time parts
    const [date, time] = input.endsWith('Z') ? input.slice(0, -1).split('T') : input.split('T');
    const [year, month, day] = date.split('-').map(Number);
    const [hour, minute, second] = time ? time.split(':').map(Number) : [0, 0, 0];

    // basic validation
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    if (hour < 0 || hour > 23) return false;
    if (minute < 0 || minute > 59) return false;
    if (second < 0 || second > 59) return false;

    // accurate validation taking into account leap years and each month's max day
    const dateObj = new Date(year, month - 1, day, hour, minute, second);
    return dateObj && dateObj.getMonth() === month - 1;
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

/**
 * Format to determine if a string is a data URI with base64 encoded data
 */
export const dataUriBase64ImageFormat: Format = {
  type: 'string',
  validate: (dataUri: string) => {
    // matches a data URI for an image with base64 encoded data
    const uriRegex = /^data:image\/[aA-zZ]+;base64,[aA-zZ0-9/+]+[=]*$/;
    return uriRegex.test(dataUri);
  }
};

/**
 * Format to determine if a string contains an ISO 4217 currency code followed by a space then a number
 */
export const iso4217Format: Format = {
  type: 'string',
  validate: (input: string) => {
    return ISO4217Codes.has(input);
  }
};

/**
 * Format to determine if a string contains an ISO 4217 currency code followed by a space then a number
 */
export const iso4217AmountFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    const parts = input.split(' ');
    const currencyCode = parts[0];
    const amount = parts[1];

    if (!ISO4217Codes.has(currencyCode)) return false;

    // check if the amount is a valid number
    return /^\d+$/.test(amount);
  }
};

/**
 * Format to determine if a string contains valid range values with an ISO 4217 currency code followed by a space then a number
 */
export const iso4217AmountRangeFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    const parts = input.split(' ');
    const currencyCode = parts[0];
    const range = parts[1];

    if (!ISO4217Codes.has(currencyCode)) return false;

    // check if the amount is a valid range
    const rangeRegex = /^min(\d+)_max(\d+)$/;
    return rangeRegex.test(range);
  }
};

/**
 * Format to validate an address string.
 * Must use iso 3166-2 codes for country and region information.
 * Valid examples:
 * 107 Ross Khaledi Rd, Laredo, US-TX 78045
 * 107 Ross Khaledi Rd, Apt #4, Laredo, US-TX 78045-1234
 */
export const addressFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    const parts = input.split(',');

    if (parts.length < 2) return false;

    // address part can include commas, so we need to join the first parts back together
    const addressLine = parts
      .slice(0, parts.length - 2)
      .join(',')
      .trim();
    const city = parts[parts.length - 2].trim();
    const iso3166CodeAndZip = parts[parts.length - 1].trim();

    // Check that address isn't empty
    if (!addressLine) return false;

    // Check that city isn't empty
    if (!city) return false;

    // Check that iso3166CodeAndZip isn't empty
    if (!iso3166CodeAndZip) return false;

    // split the iso3166 code and zip
    const iso3166Code = iso3166CodeAndZip.split(' ')[0];
    const zip = iso3166CodeAndZip
      .split(' ')
      .slice(1, iso3166CodeAndZip.length - 1)
      .join(' ')
      .trim(); // handling case where zip code has spaces in it

    // Check that iso3166Code isn't empty
    if (!iso3166Code) return false;

    // Check that zip isn't empty
    if (!zip) return false;

    // split the iso3166-2 code
    const iso3166Parts = iso3166Code.split('-');

    // Check both parts of the iso3166-2 code are present
    if (iso3166Parts.length !== 2) return false;
    const isoCountryCode = iso3166Parts[0];
    const isoRegionCode = iso3166Parts[1]; // aka state or territory code

    // Check that country is a valid ISO 3166-1 alpha-2 code
    if (!ISO31661Alpha2CountryCodes.has(isoCountryCode)) return false;

    if (isoCountryCode === 'US') {
      // preform additional validation to check for valid US region codes
      if (!ISO31662USCodes.has(isoRegionCode)) return false;

      // Check that zip follows expected pattern. Assuming US zip codes, we can expect 5 digits or 9
      const usZipRegex = /^\d{5}(-\d{4})?$/;
      if (!usZipRegex.test(zip)) return false;
    } else {
      // Check that region is a valid ISO 3166-2 code region code (just a string with up to three alphanumeric characters)
      const isoRegionRegex = /^[a-zA-Z0-9]{1,3}$/;
      if (!isoRegionRegex.test(isoRegionCode)) return false;
    }

    return true;
  }
};

/**
 * Format to determine if a string is a valid iso3166 code
 */
export const iso3166CodeFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    // split the iso3166-2 code
    const iso3166Parts = input.split('-');

    // Check both parts of the iso3166-2 code are present
    if (iso3166Parts.length !== 2) return false;
    const isoCountryCode = iso3166Parts[0];
    const isoRegionCode = iso3166Parts[1]; // aka state or territory code

    // Check that country is a valid ISO 3166-1 alpha-2 code
    if (!ISO31661Alpha2CountryCodes.has(isoCountryCode)) return false;

    if (isoCountryCode === 'US') {
      // preform additional validation to check for valid US region codes
      if (!ISO31662USCodes.has(isoRegionCode)) return false;
    } else {
      // Check that region is a valid ISO 3166-2 code region code (just a string with up to three alphanumeric characters)
      const isoRegionRegex = /^[a-zA-Z0-9]{1,3}$/;
      if (!isoRegionRegex.test(isoRegionCode)) return false;
    }

    return true;
  }
};

/**
 * Format to determine if a string is a valid iso3166-1 alpha-2 country code
 */
export const iso3166Alpha2CountryCodeFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    if (!ISO31661Alpha2CountryCodes.has(input)) return false;

    return true;
  }
};

/**
 * Format to determine if a string is a valid iso3166-2 region code if the country is US
 */
export const iso3166USRegionCodeFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    if (!ISO31662USCodes.has(input)) return false;

    return true;
  }
};

/**
 * Format to determine if a string is a valid iso3166-2 region code
 */
export const iso3166RegionCodeFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    // Check that region is a valid ISO 3166-2 code region code (just a string with up to three alphanumeric characters)
    const isoRegionRegex = /^[a-zA-Z0-9]{1,3}$/;
    if (!isoRegionRegex.test(input)) return false;

    return true;
  }
};

/**
 * Format to determine if a zip code is a valid US zip code
 */

export const usZipCodeFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    // Check that zip follows expected pattern. Assuming US zip codes, we can expect 5 digits or 9
    const usZipRegex = /^\d{5}(-\d{4})?$/;
    if (!usZipRegex.test(input)) return false;

    return true;
  }
};

/**
 * Format to determine if a string contains a valid sex
 */
export const sexFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    if (!sexes.has(input)) return false;

    return true;
  }
};

/**
 * Format to determine if a string contains a valid gender
 */
export const genderFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    if (!genders.has(input)) return false;

    return true;
  }
};

/**
 * Format to determine if a string contains a valid document type
 */
export const documentTypeFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    if (!documentTypes.has(input)) return false;

    return true;
  }
};

/**
 * Format to determine if a string contains valid a confidence value
 */
export const confidenceLevelFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    if (!confidenceLevels.has(input)) return false;

    return true;
  }
};

/**
 * Format to determine if a string is a valid boolean
 */
export const booleanFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    return input === 'true' || input === 'false';
  }
};

import { Format } from 'ajv';
import { FormatValidator } from 'ajv/dist/types';

// iso4317 codes: https://www.iban.com/currency-codes
const validISO4217Codes = new Set([
  'AED',
  'AFN',
  'ALL',
  'AMD',
  'ANG',
  'AOA',
  'ARS',
  'AUD',
  'AWG',
  'AZN',
  'BAM',
  'BBD',
  'BDT',
  'BGN',
  'BHD',
  'BIF',
  'BMD',
  'BND',
  'BOB',
  'BRL',
  'BSD',
  'BTN',
  'BWP',
  'BYN',
  'BZD',
  'CAD',
  'CDF',
  'CHF',
  'CLP',
  'CNY',
  'COP',
  'CRC',
  'CUC',
  'CUP',
  'CVE',
  'CZK',
  'DJF',
  'DKK',
  'DOP',
  'DZD',
  'EGP',
  'ERN',
  'ETB',
  'EUR',
  'FJD',
  'FKP',
  'GBP',
  'GEL',
  'GGP',
  'GHS',
  'GIP',
  'GMD',
  'GNF',
  'GTQ',
  'GYD',
  'HKD',
  'HNL',
  'HRK',
  'HTG',
  'HUF',
  'IDR',
  'ILS',
  'IMP',
  'INR',
  'IQD',
  'IRR',
  'ISK',
  'JEP',
  'JMD',
  'JOD',
  'JPY',
  'KES',
  'KGS',
  'KHR',
  'KMF',
  'KPW',
  'KRW',
  'KWD',
  'KYD',
  'KZT',
  'LAK',
  'LBP',
  'LKR',
  'LRD',
  'LSL',
  'LYD',
  'MAD',
  'MDL',
  'MGA',
  'MKD',
  'MMK',
  'MNT',
  'MOP',
  'MRU',
  'MUR',
  'MVR',
  'MWK',
  'MXN',
  'MYR',
  'MZN',
  'NAD',
  'NGN',
  'NIO',
  'NOK',
  'NPR',
  'NZD',
  'OMR',
  'PAB',
  'PEN',
  'PGK',
  'PHP',
  'PKR',
  'PLN',
  'PYG',
  'QAR',
  'RON',
  'RSD',
  'RUB',
  'RWF',
  'SAR',
  'SBD',
  'SCR',
  'SDG',
  'SEK',
  'SGD',
  'SHP',
  'SLL',
  'SOS',
  'SPL',
  'SRD',
  'STN',
  'SVC',
  'SYP',
  'SZL',
  'THB',
  'TJS',
  'TMT',
  'TND',
  'TOP',
  'TRY',
  'TTD',
  'TVD',
  'TWD',
  'TZS',
  'UAH',
  'UGX',
  'USD',
  'UYU',
  'UZS',
  'VEF',
  'VND',
  'VUV',
  'WST',
  'XAF',
  'XCD',
  'XDR',
  'XOF',
  'XPF',
  'YER',
  'ZAR',
  'ZMW',
  'ZWD'
]);

// iso3166-1 alpha-2 Country codes: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
const validISO31661Alpha2CountryCodes = new Set([
  'AD',
  'AE',
  'AF',
  'AG',
  'AI',
  'AL',
  'AM',
  'AO',
  'AQ',
  'AR',
  'AS',
  'AT',
  'AU',
  'AW',
  'AX',
  'AZ',
  'BA',
  'BB',
  'BD',
  'BE',
  'BF',
  'BG',
  'BH',
  'BI',
  'BJ',
  'BL',
  'BM',
  'BN',
  'BO',
  'BQ',
  'BR',
  'BS',
  'BT',
  'BV',
  'BW',
  'BY',
  'BZ',
  'CA',
  'CC',
  'CD',
  'CF',
  'CG',
  'CH',
  'CI',
  'CK',
  'CL',
  'CM',
  'CN',
  'CO',
  'CR',
  'CU',
  'CV',
  'CW',
  'CX',
  'CY',
  'CZ',
  'DE',
  'DJ',
  'DK',
  'DM',
  'DO',
  'DZ',
  'EC',
  'EE',
  'EG',
  'EH',
  'ER',
  'ES',
  'ET',
  'FI',
  'FJ',
  'FK',
  'FM',
  'FO',
  'FR',
  'GA',
  'GB',
  'GD',
  'GE',
  'GF',
  'GG',
  'GH',
  'GI',
  'GL',
  'GM',
  'GN',
  'GP',
  'GQ',
  'GR',
  'GS',
  'GT',
  'GU',
  'GW',
  'GY',
  'HK',
  'HM',
  'HN',
  'HR',
  'HT',
  'HU',
  'ID',
  'IE',
  'IL',
  'IM',
  'IN',
  'IO',
  'IQ',
  'IR',
  'IS',
  'IT',
  'JE',
  'JM',
  'JO',
  'JP',
  'KE',
  'KG',
  'KH',
  'KI',
  'KM',
  'KN',
  'KP',
  'KR',
  'KW',
  'KY',
  'KZ',
  'LA',
  'LB',
  'LC',
  'LI',
  'LK',
  'LR',
  'LS',
  'LT',
  'LU',
  'LV',
  'LY',
  'MA',
  'MC',
  'MD',
  'ME',
  'MF',
  'MG',
  'MH',
  'MK',
  'ML',
  'MM',
  'MN',
  'MO',
  'MP',
  'MQ',
  'MR',
  'MS',
  'MT',
  'MU',
  'MV',
  'MW',
  'MX',
  'MY',
  'MZ',
  'NA',
  'NC',
  'NE',
  'NF',
  'NG',
  'NI',
  'NL',
  'NO',
  'NP',
  'NR',
  'NU',
  'NZ',
  'OM',
  'PA',
  'PE',
  'PF',
  'PG',
  'PH',
  'PK',
  'PL',
  'PM',
  'PN',
  'PR',
  'PS',
  'PT',
  'PW',
  'PY',
  'QA',
  'RE',
  'RO',
  'RS',
  'RU',
  'RW',
  'SA',
  'SB',
  'SC',
  'SD',
  'SE',
  'SG',
  'SH',
  'SI',
  'SJ',
  'SK',
  'SL',
  'SM',
  'SN',
  'SO',
  'SR',
  'SS',
  'ST',
  'SV',
  'SX',
  'SY',
  'SZ',
  'TC',
  'TD',
  'TF',
  'TG',
  'TH',
  'TJ',
  'TK',
  'TL',
  'TM',
  'TN',
  'TO',
  'TR',
  'TT',
  'TV',
  'TW',
  'TZ',
  'UA',
  'UG',
  'UM',
  'US',
  'UY',
  'UZ',
  'VA',
  'VC',
  'VE',
  'VG',
  'VI',
  'VN',
  'VU',
  'WF',
  'WS',
  'YE',
  'YT',
  'ZA',
  'ZM',
  'ZW'
]);

// iso3166-2 US region codes (50 states and 6 territories) as defined by ANSI: https://en.wikipedia.org/wiki/ISO_3166-2:US
const validISO31662USCodes = new Set([
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
  'DC',
  'AS',
  'GU',
  'MP',
  'PR',
  'UM',
  'VI'
]);

const sexes = new Set(['Male', 'Female']);

const genders = new Set(['Male', 'Female', 'Non-Binary', 'Other']);

const documentTypes = new Set([
  'Drivers License',
  'Passport',
  'State ID',
  'Military ID',
  'National ID',
  'Birth Certificate',
  'Voter Registration Card',
  'Other'
]);

const confidenceLevels = new Set(['Very High', 'High', 'Medium', 'Low', 'Very Low']);

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
    return validISO4217Codes.has(input);
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

    if (!validISO4217Codes.has(currencyCode)) return false;

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

    if (!validISO4217Codes.has(currencyCode)) return false;

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
    if (!validISO31661Alpha2CountryCodes.has(isoCountryCode)) return false;

    if (isoCountryCode === 'US') {
      // preform additional validation to check for valid US region codes
      if (!validISO31662USCodes.has(isoRegionCode)) return false;

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
    if (!validISO31661Alpha2CountryCodes.has(isoCountryCode)) return false;

    if (isoCountryCode === 'US') {
      // preform additional validation to check for valid US region codes
      if (!validISO31662USCodes.has(isoRegionCode)) return false;
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
    if (!validISO31661Alpha2CountryCodes.has(input)) return false;

    return true;
  }
};

/**
 * Format to determine if a string is a valid iso3166-2 region code if the country is US
 */
export const iso3166USRegionCodeFormat: Format = {
  type: 'string',
  validate: (input: string) => {
    if (!validISO31662USCodes.has(input)) return false;

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

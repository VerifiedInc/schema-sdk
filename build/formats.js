"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineTypeFormat = exports.booleanFormat = exports.confidenceLevelFormat = exports.documentTypeFormat = exports.genderFormat = exports.sexFormat = exports.usZipCodeFormat = exports.iso3166RegionCodeFormat = exports.iso3166USRegionCodeFormat = exports.iso3166Alpha2CountryCodeFormat = exports.iso3166CodeFormat = exports.addressFormat = exports.iso4217AmountRangeFormat = exports.iso4217AmountFormat = exports.iso4217Format = exports.dataUriBase64ImageFormat = exports.otpFormat = exports.dateISO8601Format = exports.dateUsFormat = exports.unixMsEpochDayFormat = exports.digitsFormat = exports.optionalPhoneFormat = exports.phoneFormat = exports.ssnFormat = exports.optionalEmailFormat = exports.emailFormat = void 0;
const values_1 = require("./values");
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
 * Format to determine if a string is a valid SSN (9 digits with no dashes)
 */
exports.ssnFormat = {
    type: 'string',
    validate: (ssn) => {
        const ssnRegex = /^\d{9}$/;
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
 * Note: used instead of number thanks to json serializing as a string.
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
 * Format to determine if the input is a valid Unix MS since epoch day, must 12:00:00:000 of the UTC day.
 */
exports.unixMsEpochDayFormat = {
    type: 'string',
    validate: (digits) => {
        // matches the digits format
        if (!exports.digitsFormat.validate(digits)) {
            return false;
        }
        // Convert the string to a number
        const timestamp = Number(digits);
        // Convert Unix timestamp (in milliseconds) to a Date object.
        const date = new Date(timestamp);
        // Ensure is 12:00:00:000
        return (date.getUTCHours() === 12 &&
            date.getUTCMinutes() === 0 &&
            date.getUTCSeconds() === 0 &&
            date.getUTCMilliseconds() === 0);
    }
};
/**
 * Format to determine if the string is a valid date in the format MM-DD-YYYY, customary US format.
 */
exports.dateUsFormat = {
    type: 'string',
    validate: (input) => {
        // Check if dateStr matches the MM-DD-YYYY format
        if (!/^\d{2}-\d{2}-\d{4}$/.test(input)) {
            return false;
        }
        // Extract date parts
        const [month, day, year] = input.split('-').map(Number);
        // Basic validation
        if (month < 1 || month > 12)
            return false;
        if (day < 1 || day > 31)
            return false;
        // Accurate validation taking into account leap years and each month's max day
        const date = new Date(year, month - 1, day);
        return date && date.getMonth() === month - 1;
    }
};
exports.dateISO8601Format = {
    type: 'string',
    validate: (input) => {
        // check if input matches the YYYY-MM-DDTHH:MM:SSZ format
        if (!/^(\d{4}-\d{2}-\d{2})(T(\d{2}:\d{2}:\d{2})(\.\d{3})?Z?)?$/.test(input)) {
            return false;
        }
        // extract date and time parts
        const [date, time] = input.endsWith('Z') ? input.slice(0, -1).split('T') : input.split('T');
        const [year, month, day] = date.split('-').map(Number);
        const [hour, minute, second] = time ? time.split(':').map(Number) : [0, 0, 0];
        // basic validation
        if (month < 1 || month > 12)
            return false;
        if (day < 1 || day > 31)
            return false;
        if (hour < 0 || hour > 23)
            return false;
        if (minute < 0 || minute > 59)
            return false;
        if (second < 0 || second > 59)
            return false;
        // accurate validation taking into account leap years and each month's max day
        const dateObj = new Date(year, month - 1, day, hour, minute, second);
        return dateObj && dateObj.getMonth() === month - 1;
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
        return values_1.ISO4217Codes.has(input);
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
        if (!values_1.ISO4217Codes.has(currencyCode))
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
        if (!values_1.ISO4217Codes.has(currencyCode))
            return false;
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
exports.addressFormat = {
    type: 'string',
    validate: (input) => {
        const parts = input.split(',');
        if (parts.length < 2)
            return false;
        // address part can include commas, so we need to join the first parts back together
        const addressLine = parts
            .slice(0, parts.length - 2)
            .join(',')
            .trim();
        const city = parts[parts.length - 2].trim();
        const iso3166CodeAndZip = parts[parts.length - 1].trim();
        // Check that address isn't empty
        if (!addressLine)
            return false;
        // Check that city isn't empty
        if (!city)
            return false;
        // Check that iso3166CodeAndZip isn't empty
        if (!iso3166CodeAndZip)
            return false;
        // split the iso3166 code and zip
        const iso3166Code = iso3166CodeAndZip.split(' ')[0];
        const zip = iso3166CodeAndZip
            .split(' ')
            .slice(1, iso3166CodeAndZip.length - 1)
            .join(' ')
            .trim(); // handling case where zip code has spaces in it
        // Check that iso3166Code isn't empty
        if (!iso3166Code)
            return false;
        // Check that zip isn't empty
        if (!zip)
            return false;
        // split the iso3166-2 code
        const iso3166Parts = iso3166Code.split('-');
        // Check both parts of the iso3166-2 code are present
        if (iso3166Parts.length !== 2)
            return false;
        const isoCountryCode = iso3166Parts[0];
        const isoRegionCode = iso3166Parts[1]; // aka state or territory code
        // Check that country is a valid ISO 3166-1 alpha-2 code
        if (!values_1.ISO31661Alpha2CountryCodes.has(isoCountryCode))
            return false;
        if (isoCountryCode === 'US') {
            // preform additional validation to check for valid US region codes
            if (!values_1.ISO31662USCodes.has(isoRegionCode))
                return false;
            // Check that zip follows expected pattern. Assuming US zip codes, we can expect 5 digits or 9
            const usZipRegex = /^\d{5}(-\d{4})?$/;
            if (!usZipRegex.test(zip))
                return false;
        }
        else {
            // Check that region is a valid ISO 3166-2 code region code (just a string with up to three alphanumeric characters)
            const isoRegionRegex = /^[a-zA-Z0-9]{1,3}$/;
            if (!isoRegionRegex.test(isoRegionCode))
                return false;
        }
        return true;
    }
};
/**
 * Format to determine if a string is a valid iso3166 code
 */
exports.iso3166CodeFormat = {
    type: 'string',
    validate: (input) => {
        // split the iso3166-2 code
        const iso3166Parts = input.split('-');
        // Check both parts of the iso3166-2 code are present
        if (iso3166Parts.length !== 2)
            return false;
        const isoCountryCode = iso3166Parts[0];
        const isoRegionCode = iso3166Parts[1]; // aka state or territory code
        // Check that country is a valid ISO 3166-1 alpha-2 code
        if (!values_1.ISO31661Alpha2CountryCodes.has(isoCountryCode))
            return false;
        if (isoCountryCode === 'US') {
            // preform additional validation to check for valid US region codes
            if (!values_1.ISO31662USCodes.has(isoRegionCode))
                return false;
        }
        else {
            // Check that region is a valid ISO 3166-2 code region code (just a string with up to three alphanumeric characters)
            const isoRegionRegex = /^[a-zA-Z0-9]{1,3}$/;
            if (!isoRegionRegex.test(isoRegionCode))
                return false;
        }
        return true;
    }
};
/**
 * Format to determine if a string is a valid iso3166-1 alpha-2 country code
 */
exports.iso3166Alpha2CountryCodeFormat = {
    type: 'string',
    validate: (input) => {
        if (!values_1.ISO31661Alpha2CountryCodes.has(input))
            return false;
        return true;
    }
};
/**
 * Format to determine if a string is a valid iso3166-2 region code if the country is US
 */
exports.iso3166USRegionCodeFormat = {
    type: 'string',
    validate: (input) => {
        if (!values_1.ISO31662USCodes.has(input))
            return false;
        return true;
    }
};
/**
 * Format to determine if a string is a valid iso3166-2 region code
 */
exports.iso3166RegionCodeFormat = {
    type: 'string',
    validate: (input) => {
        // Check that region is a valid ISO 3166-2 code region code (just a string with up to three alphanumeric characters)
        const isoRegionRegex = /^[a-zA-Z0-9]{1,3}$/;
        if (!isoRegionRegex.test(input))
            return false;
        return true;
    }
};
/**
 * Format to determine if a zip code is a valid US zip code
 */
exports.usZipCodeFormat = {
    type: 'string',
    validate: (input) => {
        // Check that zip follows expected pattern. Assuming US zip codes, we can expect 5 digits or 9
        const usZipRegex = /^\d{5}(-\d{4})?$/;
        if (!usZipRegex.test(input))
            return false;
        return true;
    }
};
/**
 * Format to determine if a string contains a valid sex
 */
exports.sexFormat = {
    type: 'string',
    validate: (input) => {
        if (!values_1.sexes.has(input))
            return false;
        return true;
    }
};
/**
 * Format to determine if a string contains a valid gender
 */
exports.genderFormat = {
    type: 'string',
    validate: (input) => {
        if (!values_1.genders.has(input))
            return false;
        return true;
    }
};
/**
 * Format to determine if a string contains a valid document type
 */
exports.documentTypeFormat = {
    type: 'string',
    validate: (input) => {
        if (!values_1.documentTypes.has(input))
            return false;
        return true;
    }
};
/**
 * Format to determine if a string contains valid a confidence value
 */
exports.confidenceLevelFormat = {
    type: 'string',
    validate: (input) => {
        if (!values_1.confidenceLevels.has(input))
            return false;
        return true;
    }
};
/**
 * Format to determine if a string is a valid boolean
 */
exports.booleanFormat = {
    type: 'string',
    validate: (input) => {
        return input === 'true' || input === 'false';
    }
};
/**
 * Format to determine if a string contains valid a lineType value
 */
exports.lineTypeFormat = {
    type: 'string',
    validate: (input) => {
        if (!values_1.lineTypes.has(input))
            return false;
        return true;
    }
};
//# sourceMappingURL=formats.js.map
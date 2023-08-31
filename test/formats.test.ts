import { FormatDefinition } from 'ajv';
import { FormatValidator } from 'ajv/dist/types';
import {
  addressFormat,
  booleanFormat,
  confidenceLevelFormat,
  dataUriBase64ImageFormat,
  dateISO8601Format,
  dateUsFormat,
  digitsFormat,
  documentTypeFormat,
  emailFormat,
  genderFormat,
  iso3166Alpha2CountryCodeFormat,
  iso3166CodeFormat,
  iso3166RegionCodeFormat,
  iso3166USRegionCodeFormat,
  iso4217AmountFormat,
  iso4217AmountRangeFormat,
  iso4217Format,
  optionalEmailFormat,
  optionalPhoneFormat,
  otpFormat,
  phoneFormat,
  sexFormat,
  ssnFormat,
  unixMsEpochDayFormat,
  usZipCodeFormat
} from '../src/formats';

describe('formats', () => {
  test('emailFormat', () => {
    const format = emailFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid email address
    expect(validate('test@unumid.co')).toBe(true);

    // invalid email address
    expect(validate('test')).toBe(false);

    // missing email address
    expect(validate(undefined as unknown as string)).toBe(false);
    expect(validate('')).toBe(false);
  });

  test('optionalEmailFormat', () => {
    const format = optionalEmailFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid email address
    expect(validate('test@unumid.co')).toBe(true);

    // invalid email address
    expect(validate('test')).toBe(false);

    // missing email address
    expect(validate(undefined as unknown as string)).toBe(true);
    expect(validate('')).toBe(true);
  });

  test('phoneFormat', () => {
    const format = phoneFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid phone number
    expect(validate('+15555555555')).toBe(true);

    // invalid phone number
    expect(validate('test')).toBe(false);

    // missing phone number
    expect(validate(undefined as unknown as string)).toBe(false);
    expect(validate('')).toBe(false);
  });

  test('optionalPhoneFormat', () => {
    const format = optionalPhoneFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid phone number
    expect(validate('+15555555555')).toBe(true);

    // invalid phone number
    expect(validate('test')).toBe(false);

    // missing phone number
    expect(validate(undefined as unknown as string)).toBe(true);
    expect(validate('')).toBe(true);
  });

  test('ssnFormat', () => {
    const format = ssnFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid ssn
    expect(validate('111223333')).toBe(true);

    // invalid ssn
    expect(validate('test')).toBe(false);
    expect(validate('111-22-3333')).toBe(false);

    // missing ssn
    expect(validate(undefined as unknown as string)).toBe(false);
    expect(validate('')).toBe(false);
  });

  test('digitsFormat', () => {
    const format = digitsFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid digits
    expect(validate('1680319455')).toBe(true);
    expect(validate('-1819455')).toBe(true); // pre 1970 date
    expect(validate('0')).toBe(true);

    // invalid digits
    expect(validate('test')).toBe(false);
  });

  test('unixMsEpochDayFormat', () => {
    const format = unixMsEpochDayFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid unixMsEpochDayFormat
    expect(validate('1672574400000')).toBe(true);
    expect(validate('631195200000')).toBe(true);
    expect(validate('-331560000000')).toBe(true); // pre 1970 date

    // invalid unixMsEpochDayFormat
    expect(validate('test')).toBe(false);
    expect(validate('631195200005')).toBe(false); // not 0 ms
    expect(validate('1680319455')).toBe(false); // not 12 hour
    expect(validate('-1819455')).toBe(false); // not 12th hour
    expect(validate('0')).toBe(false); // not 12 hour
  });

  test('dateUsFormat', () => {
    const format = dateUsFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid unixMsEpochDayFormat
    expect(validate('08-28-2023')).toBe(true);
    expect(validate('01-01-2534')).toBe(true);
    expect(validate('12-31-1992')).toBe(true);

    // invalid unixMsEpochDayFormat
    expect(validate('test')).toBe(false);
    expect(validate('631195200005')).toBe(false);
    expect(validate('1992-12-32')).toBe(false); // 32nd day of month
    expect(validate('12-32-1992')).toBe(false); // 32nd day of month
    expect(validate('11-31-1992')).toBe(false); // 31st day of November
    expect(validate('00-10-1992')).toBe(false); // month 0
    expect(validate('0')).toBe(false);
  });

  test('dateISO8601Format', () => {
    const format = dateISO8601Format as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid dateISO8601Format
    expect(validate('2023-08-31')).toBe(true);
    expect(validate('2023-08-31T12:34:56')).toBe(true);
    expect(validate('2023-08-31T12:34:56.123')).toBe(true);
    expect(validate('2023-08-31T12:34:56.123Z')).toBe(true);

    // invalid dateISO8601Format
    expect(validate('test')).toBe(false);
    expect(validate('123456')).toBe(false);
    expect(validate('2023-08-32T12:34:56.123Z')).toBe(false); // 32nd day of month
    expect(validate('2023-00-32T12:34:56.123Z')).toBe(false); // 0th month
    expect(validate('2023-08-31T24:34:56.123Z')).toBe(false); // 24th hour
    expect(validate('2023-08-31T12:60:56.123Z')).toBe(false); // 60th minute
    expect(validate('2023-08-31T12:34:60.123Z')).toBe(false); // 60th second
  });

  test('otpFormat', () => {
    const format = otpFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid otp
    expect(validate('123456')).toBe(true);

    // invalid otp
    expect(validate('12345')).toBe(false);
    expect(validate('1234567')).toBe(false);
    expect(validate('123456a')).toBe(false);
    expect(validate('a23456')).toBe(false);
    expect(validate('a23456a')).toBe(false);
    expect(validate('')).toBe(false);
  });

  test('dataUriBase64ImageFormat', () => {
    const format = dataUriBase64ImageFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid dataUriBase64Image
    expect(validate('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA')).toBe(true);
    expect(validate('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA==')).toBe(true); // with = padding
    expect(validate('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD')).toBe(true); // different image format

    // invalid dataUriBase64Image
    expect(validate('iVBORw0KGgoAAAANSUhEUgAAAAU')).toBe(false); // encoded string without dataUri
    expect(validate('data:text/plain;charset=UTF-8;page=21,the%20data:1234,5678')).toBe(false); // non encoded uri with wrong data type
  });

  test('iso4217Format', () => {
    const format = iso4217Format as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('USD')).toBe(true);
    expect(validate('GBP')).toBe(true);
    expect(validate('EUR')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('USD 42000')).toBe(false);
  });

  test('iso4217AmountFormat', () => {
    const format = iso4217AmountFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('USD 1000')).toBe(true);
    expect(validate('GBP 42390')).toBe(true);
    expect(validate('EUR 1999000')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('YOO 42000')).toBe(false);
    expect(validate('USD42000')).toBe(false);
    expect(validate('USD 42,000')).toBe(false);
    expect(validate('GBP')).toBe(false);
  });

  test('iso4217AmountRangeFormat', () => {
    const format = iso4217AmountRangeFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('USD min0_max25000')).toBe(true);
    expect(validate('EUR min25001_max50000')).toBe(true);
    expect(validate('GBP min1200001_max999999')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('YOO 42000')).toBe(false);
    expect(validate('USD42000')).toBe(false);
    expect(validate('USD 42,000')).toBe(false);
    expect(validate('GBP')).toBe(false);
    expect(validate('EUR 1999000')).toBe(false);
  });

  test('AddressFormat', () => {
    const format = addressFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('107 Ross Khaledi Rd, Laredo, US-TX 78045')).toBe(true);
    expect(validate('107 Ross Khaledi Rd, Suite 500, Laredo, US-TX 78045')).toBe(true);
    expect(validate('307 3rd Ave, Apt #4, San Austin, US-GA 18025-9876')).toBe(true);
    expect(validate('307 3rd Ave, Apt #4, c/o Henry, San Austin, US-GA 18025-9876')).toBe(true);
    expect(validate('10 Downing Street, London, GB-ENG SW1A 2AA')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('123 Main st.')).toBe(false);
    expect(validate('123 Main St, Atlanta, GA')).toBe(false);
    expect(validate('107 Ross Khaledi Rd, Laredo, TX 78045 US')).toBe(false);
    expect(validate('307 3rd Ave, Apt #4, San Austin, US-GA 185-9876')).toBe(false);
    expect(validate('307 3rd Ave, Apt #4,, US-GA 185-9876')).toBe(false);
  });

  test('iso3166USRegionCodeFormat', () => {
    const format = iso3166USRegionCodeFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('TX')).toBe(true);
    expect(validate('GA')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('US')).toBe(false);
    expect(validate('SP')).toBe(false);
  });

  test('iso3166CodeFormat', () => {
    const format = iso3166CodeFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('US-TX')).toBe(true);
    expect(validate('US-GA')).toBe(true);
    expect(validate('GB-ENG')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('United States, Georgia')).toBe(false);
    expect(validate('Georgia, US')).toBe(false);
    expect(validate('GA')).toBe(false);
  });

  test('iso3166Alpha2CountryCodeFormat', () => {
    const format = iso3166Alpha2CountryCodeFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('US')).toBe(true);
    expect(validate('GB')).toBe(true);
    expect(validate('MX')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('ENG')).toBe(false);
    expect(validate('AUS')).toBe(false);
  });

  test('SexFormat', () => {
    const format = sexFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('Male')).toBe(true);
    expect(validate('Female')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('male')).toBe(false);
    expect(validate('M')).toBe(false);
    expect(validate('F')).toBe(false);
  });

  test('GenderFormat', () => {
    const format = genderFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('Male')).toBe(true);
    expect(validate('Female')).toBe(true);
    expect(validate('Non-Binary')).toBe(true);
    expect(validate('Other')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('male')).toBe(false);
    expect(validate('M')).toBe(false);
    expect(validate('F')).toBe(false);
  });

  test('iso3166RegionCodeFormat', () => {
    const format = iso3166RegionCodeFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('TX')).toBe(true);
    expect(validate('GA')).toBe(true);
    expect(validate('ENG')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('USAZ')).toBe(false);
    expect(validate('')).toBe(false);
  });

  test('usZipCodeFormat', () => {
    const format = usZipCodeFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('78045')).toBe(true);
    expect(validate('18025-9876')).toBe(true);

    // invalid
    expect(validate('test')).toBe(false);
    expect(validate('7845')).toBe(false);
    expect(validate('83508-566')).toBe(false);
  });

  test('DocumentTypeFormat', () => {
    const format = documentTypeFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('Passport')).toBe(true);
    expect(validate('Drivers License')).toBe(true);

    // invalid
    expect(validate('Id')).toBe(false);
    expect(validate('License')).toBe(false);
    expect(validate('document')).toBe(false);
  });

  test('ConfidenceLevelFormat', () => {
    const format = confidenceLevelFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('Very High')).toBe(true);
    expect(validate('High')).toBe(true);
    expect(validate('Medium')).toBe(true);
    expect(validate('Low')).toBe(true);
    expect(validate('Very Low')).toBe(true);

    // invalid
    expect(validate('low')).toBe(false);
    expect(validate('high')).toBe(false);
    expect(validate('veryhigh')).toBe(false);
  });

  test('BooleanFormat', () => {
    const format = booleanFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid
    expect(validate('true')).toBe(true);
    expect(validate('false')).toBe(true);

    // invalid
    expect(validate('True')).toBe(false);
    expect(validate('FAlse')).toBe(false);
    expect(validate('unknown')).toBe(false);
  });
});

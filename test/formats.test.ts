import { FormatDefinition } from 'ajv';
import { FormatValidator } from 'ajv/dist/types';
import {
  addressFormat,
  dataUriBase64ImageFormat,
  digitsFormat,
  emailFormat,
  iso4217AmountFormat,
  iso4217AmountRangeFormat,
  iso4217Format,
  optionalEmailFormat,
  optionalPhoneFormat,
  otpFormat,
  phoneFormat,
  ssnFormat,
  unixMsExpirationDateFormat
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
});

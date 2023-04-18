import { FormatDefinition } from 'ajv';
import { FormatValidator } from 'ajv/dist/types';
import {
  digitsFormat,
  emailFormat,
  optionalEmailFormat,
  optionalPhoneFormat,
  otpFormat,
  phoneFormat,
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

  test('digitsFormat', () => {
    const format = digitsFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    // valid digits
    expect(validate('1680319455')).toBe(true);

    // invalid digits
    expect(validate('test')).toBe(false);
  });

  test('unixMsExpirationDateFormat', () => {
    const format = unixMsExpirationDateFormat as FormatDefinition<string>;
    const validate = format.validate as FormatValidator<string>;

    const nowish = Date.now() - 10;
    const futureTime = nowish + 10000000;

    // valid unixMsExpirationDate
    expect(validate(futureTime.toString())).toBe(true);

    // invalid unixMsExpirationDate
    expect(validate('test')).toBe(false);
    expect(validate(nowish.toString())).toBe(false);
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
});

import { FormatDefinition } from 'ajv';
import { FormatValidator } from 'ajv/dist/types';
import { emailFormat, optionalEmailFormat, optionalPhoneFormat, phoneFormat } from '../src/formats';

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

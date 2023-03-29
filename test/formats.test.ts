import { FormatDefinition } from 'ajv';
import { FormatValidator } from 'ajv/dist/types';
import { emailFormat, optionalEmailFormat, optionalPhoneFormat, phoneFormat } from '../src/formats';

test('emailFormat returns true for valid email', () => {
  const format = emailFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate('test@unumid.co')).toBe(true);
});

test('emailFormat returns false for invalid email', () => {
  const format = emailFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate('test')).toBe(false);
});

test('emailFormat returns false for undefined email', () => {
  const format = emailFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate(undefined as unknown as string)).toBe(false);
});

test('optionalEmailFormat returns true for valid email', () => {
  const format = optionalEmailFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate('test@unumid.co')).toBe(true);
});

test('optionalEmailFormat returns false for invalid email', () => {
  const format = optionalEmailFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate('test')).toBe(false);
});

test('optionalEmailFormat returns true for missing email', () => {
  const format = optionalEmailFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate(undefined as unknown as string)).toBe(true);
  expect(validate('')).toBe(true);
});

test('phoneFormat returns true for valid phone', () => {
  const format = phoneFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate('+15555555555')).toBe(true);
});

test('phoneFormat returns false for invalid phone', () => {
  const format = phoneFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate('asdf')).toBe(false);
});

test('phoneFormat returns false for undefined phone', () => {
  const format = phoneFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate(undefined as unknown as string)).toBe(false);
});

test('optionalPhoneFormat returns true for valid phone', () => {
  const format = optionalPhoneFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate('+15555555555')).toBe(true);
});

test('optionalPhoneFormat returns false for invalid phone', () => {
  const format = optionalPhoneFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate('asdf')).toBe(false);
});

test('optionalPhoneFormat returns true for missing phone', () => {
  const format = optionalPhoneFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate(undefined as unknown as string)).toBe(true);
  expect(validate('')).toBe(true);
});

import { FormatDefinition } from 'ajv';
import { FormatValidator } from 'ajv/dist/types';
import { emailFormat, optionalEmailFormat } from '../src/formats';

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

test('optionalEmailFormat returns true for undefined email', () => {
  const format = optionalEmailFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate(undefined as unknown as string)).toBe(true);
});

test('optionalEmailFormat returns false for other falsy values', () => {
  const format = optionalEmailFormat as FormatDefinition<string>;
  const validate = format.validate as FormatValidator<string>;
  expect(validate(null as unknown as string)).toBe(false);
  expect(validate('')).toBe(false);
  expect(validate(0 as unknown as string)).toBe(false);
  expect(validate(false as unknown as string)).toBe(false);
});

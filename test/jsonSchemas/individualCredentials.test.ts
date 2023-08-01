import { validate } from '../../src';

// BirthDateCredential
describe('BirthDateCredential Schema', () => {
  test('valid', () => {
    const valid = validate('BirthDateCredential', {
      birthDate: '-331560000000'
    });

    expect(valid).toEqual(true);
  });

  test('invalid - wrong key', async () => {
    expect.assertions(1);
    try {
      validate('BirthDateCredential', {
        birthDay: '-331560000000'
      });
      fail();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });

  test('invalid - wrong format', async () => {
    expect.assertions(1);
    try {
      validate('BirthDateCredential', {
        birthDay: -331560000000
      });
      fail();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });

  test('invalid - wrong value', async () => {
    expect.assertions(1);
    try {
      validate('BirthDateCredential', {
        birthDay: '-331534805'
      });
      fail();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});

import { validate } from '../src/validate';

describe('Validate Schemas', () => {
  describe('EmailCredential Schema', () => {
    const evalInvalid = [
      'test@gmail.com mail@test.org',
      'hello@',
      '@test',
      'email@gmail',
      'theproblem@test@gmail.com',
      'mail with@space.com',
      'mail@testing.com$',
      'mail@testing.c+m',
      'mail@test$ng.com'
    ];
    const evalValid = [
      'geon@ihateregex.io',
      'mail@testing.com',
      'mail+1@testing.com',
      'mail_lastmail@testing.com',
      'mail@testing.com',
      'mail@testing.uk.com'
    ];
    describe('Valid Emails', () => {
      evalValid.forEach((email) => {
        it(`valid email: ${email}`, async () => {
          const valid = validate('EmailCredential', {
            email
          });
          expect(valid).toEqual(true);
        });
      });
    });

    describe('Invalid Emails', () => {
      evalInvalid.forEach((email) => {
        it(`invalid email: ${email}`, async () => {
          try {
            const valid = validate('EmailCredential', {
              email
            });
            fail();
          } catch (error) {
            expect(error);
          }
        });
      });
    });
  });

  describe('IdentityCredential Schema', () => {
    it('valid', async () => {
      const valid = validate('IdentityCredential', {});
      expect(valid).toEqual(true);
    });

    it('invalid', async () => {
      try {
        const valid = validate('IdentityCredential', {
          email: 'test@abc.computer$'
        });
        fail();
      } catch (error) {
        expect(error);
      }
    });
  });

  describe('SexCredential Schema', () => {
    it('valid', async () => {
      const valid = validate('SexCredential', {
        sex: 'male'
      });
      expect(valid).toEqual(true);
    });

    it('invalid', async () => {
      try {
        const valid = validate('SexCredential', {
          gender: 'female'
        });
        fail();
      } catch (error) {
        expect(error);
      }
    });
  });

  describe('NationalityCredential Schema', () => {
    test('valid', () => {
      const valid = validate('NationalityCredential', {
        nationality: 'United States'
      });

      expect(valid).toEqual(true);
    });

    test('invalid', async () => {
      expect.assertions(1);
      try {
        validate('NationalityCredential', {
          email: 'therealboris@draper.vc'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('GovernmentIdStateCredential Schema', () => {
    test('valid', () => {
      const valid = validate('GovernmentIdStateCredential', {
        state: 'California'
      });

      expect(valid).toEqual(true);
    });

    test('invalid', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdStateCredential', {
          email: 'therealboris@draper.vc'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('GovernmentIdNumberCredential Schema', () => {
    test('valid', () => {
      const valid = validate('GovernmentIdNumberCredential', {
        idNumber: '123456789'
      });

      expect(valid).toEqual(true);
    });

    test('invalid', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdNumberCredential', {
          email: 'therealboris@draper.vc'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('GovernmentIdIssuanceDateCredential Schema', () => {
    test('valid', () => {
      const valid = validate('GovernmentIdIssuanceDateCredential', {
        issuanceDate: new Date().getTime().toString()
      });

      expect(valid).toEqual(true);
    });

    test('invalid', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdIssuanceDateCredential', {
          email: 'therealboris@draper.vc'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('GovernmentIdExpirationDateCredential Schema', () => {
    test('valid', () => {
      const valid = validate('GovernmentIdExpirationDateCredential', {
        expirationDate: (new Date().getTime() + 100000).toString()
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdExpirationDateCredential', {
          email: 'therealboris@draper.vc'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not digits)', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdExpirationDateCredential', {
          expirationDate: 'asdf'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not in future)', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdExpirationDateCredential', {
          expirationDate: '1'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('EmployerCredential Schema', () => {
    test('valid', () => {
      const valid = validate('EmployerCredential', {
        employer: 'Unum ID'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('EmployerCredential', {
          email: 'Unum ID'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not string)', async () => {
      expect.assertions(1);
      try {
        validate('EmployerCredential', {
          employer: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('TitleCredential Schema', () => {
    test('valid', () => {
      const valid = validate('TitleCredential', {
        title: 'Unum ID'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('TitleCredential', {
          email: 'Unum ID'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not string)', async () => {
      expect.assertions(1);
      try {
        validate('TitleCredential', {
          title: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('IncomeCredential Schema', () => {
    test('valid', () => {
      const valid = validate('IncomeCredential', {
        income: 90000
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('IncomeCredential', {
          email: 90000
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not integer)', async () => {
      expect.assertions(1);
      try {
        validate('IncomeCredential', {
          income: 'asdf'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('IncomeCurrencyCredential Schema', () => {
    test('valid', () => {
      const valid = validate('IncomeCurrencyCredential', {
        currency: 'USD'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('IncomeCurrencyCredential', {
          email: 'USD'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not string)', async () => {
      expect.assertions(1);
      try {
        validate('IncomeCurrencyCredential', {
          currency: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });
});

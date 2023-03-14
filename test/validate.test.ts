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
        issuanceDate: new Date().getTime()
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
        expirationDate: new Date().getTime() + 100000
      });

      expect(valid).toEqual(true);
    });

    test('invalid', async () => {
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
  });
});

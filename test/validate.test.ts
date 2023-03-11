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
});

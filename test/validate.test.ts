import { validate } from '../src/validate';

describe('Validate Schemas', () => {
  describe('EmailCredential Schema', () => {
    it('valid email', async () => {
      const valid = validate('EmailCredential', {
        email: 'test@abc.co'
      });
      expect(valid).toEqual(true);
    });

    it('invalid email', async () => {
      try {
        const valid = validate('EmailCredential', {
          email: 'test@abc.computer$'
        });
        fail();
      } catch (error) {
        expect(error);
      }
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
});

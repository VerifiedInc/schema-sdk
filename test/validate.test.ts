import { validate } from '../src/validate';

describe('Validate Schemas', () => {
  it('emailCredentialSchema valid', async () => {
    const valid = validate('EmailCredential', {
      email: 'test@abc.co'
    });
    expect(valid).toEqual(true);
  });

  it('emailCredentialSchema invalid', async () => {
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

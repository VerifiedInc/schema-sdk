import { validate } from '../src/validate';

describe('Validate Schemas', () => {
  it('emailCredentialSchema', async () => {
    const valid = validate('EmailCredential', {
      email: 'test@abc.co'
    });
    expect(valid).toEqual(true);
  });
});

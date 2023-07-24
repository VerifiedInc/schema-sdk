import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const expirationDateCredentialJsonSchema = Type.Object(
  {
    expirationDate: Type.String({
      format: 'digits',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
      examples: ['1687488596000', '-45709']
    })
  },
  { $id: 'ExpirationDateCredential', additionalProperties: false }
) as UnumJsonSchema;

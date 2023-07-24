import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const birthDateCredentialJsonSchema = Type.Object(
  {
    birthDate: Type.String({
      format: 'digits',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
      examples: ['1687488596000', '-45709']
    })
  },
  { $id: 'BirthDateCredential', additionalProperties: false }
) as UnumJsonSchema;

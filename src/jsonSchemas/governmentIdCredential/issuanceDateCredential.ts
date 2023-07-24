import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const issuanceDateCredentialJsonSchema = Type.Object(
  {
    issuanceDate: Type.String({
      format: 'digits',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
      examples: ['1687488596000', '-45709']
    })
  },
  { $id: 'IssuanceDateCredential', additionalProperties: false }
) as UnumJsonSchema;

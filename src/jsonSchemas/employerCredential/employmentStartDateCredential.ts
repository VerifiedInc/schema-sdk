import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const employmentStartDateCredentialJsonSchema = Type.Object(
  {
    startDate: Type.String({
      format: 'digits',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
      examples: ['1687488596000', '-45709']
    })
  },
  { $id: 'EmploymentStartDateCredential', additionalProperties: false }
) as UnumJsonSchema;

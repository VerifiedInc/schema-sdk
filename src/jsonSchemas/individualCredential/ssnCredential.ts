import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const ssnCredentialJsonSchema = Type.Object(
  {
    ssn: Type.String({
      format: 'ssn',
      description: '9 digit social security number, with no dashes, in the format of: 123456789',
      examples: ['123456789', '333224444'],
      title: 'Social Security Number'
    })
  },
  { $id: 'SsnCredential' }
) as UnumJsonSchema;

import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const employmentStartDateCredentialJsonSchema = Type.Object(
  {
    startDate: Type.String({
      format: 'digits',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
      examples: ['1687488596000', '-45709'],
      title: 'Employment Start Date',
      displayFormat: DisplayFormat.Date
    })
  },
  { $id: 'EmploymentStartDateCredential' }
) as UnumJsonSchema;

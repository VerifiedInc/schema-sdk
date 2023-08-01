import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const birthDateCredentialJsonSchema = Type.Object(
  {
    birthDate: Type.String({
      format: 'unixMsEpochDayFormat',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, which equates to 12:00:00:000 UTC of the date',
      examples: ['631195200000', '-331560000000'],
      title: 'Birthday',
      displayFormat: DisplayFormat.Date
    })
  },
  { $id: 'BirthDateCredential' }
) as UnumJsonSchema;

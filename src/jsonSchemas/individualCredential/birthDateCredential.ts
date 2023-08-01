import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const birthDateCredentialJsonSchema = Type.Object(
  {
    birthDate: Type.String({
      format: 'unixMsEpochDayFormat',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch which is the 12th our of the birth day UTC, GMT+0000',
      examples: ['631224000', '-331534800'],
      title: 'Birthday',
      displayFormat: DisplayFormat.Date
    })
  },
  { $id: 'BirthDateCredential' }
) as UnumJsonSchema;

import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const issuanceDateCredentialJsonSchema = Type.Object(
  {
    issuanceDate: Type.String({
      format: 'unixMsEpochDayFormat',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, which is the 12th hour of the issuance day UTC, GMT+0000',
      examples: ['631195200000', '-331560000000'],
      title: 'Issuance Date',
      displayFormat: DisplayFormat.Date
    })
  },
  { $id: 'IssuanceDateCredential' }
) as UnumJsonSchema;

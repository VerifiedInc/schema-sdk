import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const employmentStartDateCredentialJsonSchema = Type.Object(
  {
    startDate: Type.String({
      format: 'unixMsEpochDayFormat',
      description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, which equates to 12:00:00:000 UTC of the date',
      examples: ['631195200000', '-331560000000'],
      title: 'Employment Start Date',
      displayFormat: DisplayFormat.Date
    })
  },
  { $id: 'EmploymentStartDateCredential' }
);

export type EmploymentStartDateCredentialJsonSchema = Static<typeof employmentStartDateCredentialJsonSchema>;

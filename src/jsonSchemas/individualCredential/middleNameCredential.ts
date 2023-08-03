import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const middleNameCredentialJsonSchema = Type.Object(
  {
    middleName: Type.Optional(
      Type.String({
        description: "A person's middle name",
        examples: ['Henry', 'Fitzgerald'],
        title: 'Middle Name',
        displayFormat: DisplayFormat.String
      })
    )
  },
  { $id: 'MiddleNameCredential' }
);

export type MiddleNameCredentialJsonSchema = Static<typeof middleNameCredentialJsonSchema>;

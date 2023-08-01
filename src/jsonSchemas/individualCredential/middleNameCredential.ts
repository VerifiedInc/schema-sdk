import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

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
) as UnumJsonSchema;

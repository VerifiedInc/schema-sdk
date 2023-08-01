import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const middleNameCredentialJsonSchema = Type.Object(
  {
    middleName: Type.Optional(
      Type.String({
        description: "A person's middle name",
        examples: ['Henry', 'Fitzgerald'],
        title: 'Middle Name'
      })
    )
  },
  { $id: 'MiddleNameCredential' }
) as UnumJsonSchema;

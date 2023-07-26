import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const middleNameCredentialJsonSchema = Type.Object(
  {
    middleName: Type.Optional(
      Type.String({
        description: "A person's middle name",
        examples: ['Henry', 'Fitzgerald']
      })
    )
  },
  { $id: 'MiddleNameCredential' }
) as UnumJsonSchema;

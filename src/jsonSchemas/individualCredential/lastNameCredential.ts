import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const lastNameCredentialJsonSchema: UnumJsonSchema = Type.Object(
  {
    lastName: Type.String({
      description: "A person's last name",
      examples: ['Smith', 'Garcia-Tony']
    })
  },
  { additionalProperties: false, $id: 'LastNameCredential' }
) as UnumJsonSchema;

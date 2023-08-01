import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const lastNameCredentialJsonSchema: UnumJsonSchema = Type.Object(
  {
    lastName: Type.String({
      description: "A person's last name",
      examples: ['Smith', 'Garcia-Tony'],
      title: 'Last Name',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'LastNameCredential' }
) as UnumJsonSchema;

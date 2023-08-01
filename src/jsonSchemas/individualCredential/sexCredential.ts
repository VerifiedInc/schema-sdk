import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const sexCredentialJsonSchema = Type.Object(
  {
    sex: Type.String({
      format: 'gender',
      description: "A person's sex",
      examples: ['Male', 'Female'],
      title: 'Sex',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'SexCredential' }
) as UnumJsonSchema;

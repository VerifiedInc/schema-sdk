import { UnumJsonSchema } from '..';
import { Type } from '../../type';
import { firstNameCredentialJsonSchema } from '../individualCredential/firstNameCredential';
import { lastNameCredentialJsonSchema } from '../individualCredential/lastNameCredential';
import { middleNameCredentialJsonSchema } from '../individualCredential/middleNameCredential';

export const fullNameCredentialJsonSchema = Type.Union(
  [
    Type.Intersect([
      firstNameCredentialJsonSchema,
      lastNameCredentialJsonSchema,
      middleNameCredentialJsonSchema
    ]),
    Type.Object(
      {
        fullName: Type.String({
          description: "A person's full name",
          examples: ['John Smith', 'John Michael Smith', 'Mary Kate Sierra Garcia-Tony']
        })
      },
      { additionalProperties: false }
    )
  ],
  {
    $id: 'FullNameCredential',
    unevaluatedProperties: false
  }
) as unknown as UnumJsonSchema;

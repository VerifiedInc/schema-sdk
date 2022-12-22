import { TObject, Type } from '@sinclair/typebox';

export const emailCredentialSchema: TObject = Type.Object({
  email: Type.String()
},
{ $id: 'EmailCredentialType', additionalProperties: false });

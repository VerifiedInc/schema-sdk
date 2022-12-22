import { TObject, Type } from '@sinclair/typebox';

const emailCredentialSchema = Type.Object({
  email: Type.String()
},
{ $id: 'EmailCredentialType', additionalProperties: false });

const ssnCredentialSchema = Type.Object({
  ssn: Type.String()
},
{ $id: 'SsnCredentialType', additionalProperties: false });

export const jsonSchemas = new Map<string, TObject>([
  ['EmailCredential', emailCredentialSchema],
  ['SsnCredential', ssnCredentialSchema]
]);

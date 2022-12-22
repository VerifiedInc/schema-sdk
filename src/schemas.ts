import { TObject, Type } from '@sinclair/typebox';

export const emailCredentialSchema = Type.Object({
  email: Type.String()
},
{ $id: 'EmailCredentialType', additionalProperties: false });

export const ssnCredentialSchema = Type.Object({
  ssn: Type.String()
},
{ $id: 'SsnCredentialType', additionalProperties: false });

export const jsonSchemas = new Map<string, TObject>([
  ['EmailCredential', emailCredentialSchema],
  ['SsnCredential', ssnCredentialSchema]
]);

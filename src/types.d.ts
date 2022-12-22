export const emailCredentialSchema = Type.Object({
  email: Type.String()
},
{ $id: 'EmailCredentialType', additionalProperties: false });

export type EmailCredentialSchemaType = Static<typeof emailCredentialSchema>;

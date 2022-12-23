import { TObject, Type, Static } from '@sinclair/typebox';
import { jsonSchemasMap, ssnCredentialSchema } from './schemas';

// export type EmailCredentialSchemaType = Static<typeof jsonSchemasMap['EmailCredential']>;
// export type SsnCredentialSchemaType = Static<typeof jsonSchemasMap['SsnCredential']>;
export type SsnCredentialSchemaType = Static<typeof ssnCredentialSchema>;
export type EmailCredentialSchemaType = Static<typeof emailCredentialSchema>;

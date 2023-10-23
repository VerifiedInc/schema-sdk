import { Static } from '@sinclair/typebox';

import { Type } from '../../type';
import { stateCredentialJsonSchema } from '../addressCredential';
import { documentBackImageCredentialJsonSchema } from '../governmentIdCredential/documentBackImageCredential';
import { documentImageCredentialJsonSchema } from '../governmentIdCredential/documentImageCredential';
import { documentNumberCredentialJsonSchema } from '../governmentIdCredential/documentNumberCredential';
import { documentTypeCredentialJsonSchema } from '../governmentIdCredential/documentTypeCredential';
import { expirationDateCredentialJsonSchema } from '../governmentIdCredential/expirationDateCredential';
import { issuanceDateCredentialJsonSchema } from '../governmentIdCredential/issuanceDateCredential';

export const governmentIdCredentialJsonSchema = Type.Union(
  [
    documentBackImageCredentialJsonSchema,
    documentImageCredentialJsonSchema,
    documentTypeCredentialJsonSchema,
    documentNumberCredentialJsonSchema,
    expirationDateCredentialJsonSchema,
    issuanceDateCredentialJsonSchema,
    stateCredentialJsonSchema
  ],
  {
    $id: 'GovernmentIdCredential',
    unevaluatedProperties: false
  }
);

export type GovernmentIdCredentialJsonSchema = Static<typeof governmentIdCredentialJsonSchema>;

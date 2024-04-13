import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const lineTypeCredentialJsonSchema = Type.Object(
  {
    type: Type.String({
      format: 'lineTypeFormat',
      description: 'Line type associated with a phone number.',
      examples: ['Mobile', 'Landline', 'FixedVoIP', 'NonFixVoIP'],
      title: 'Phone Line Type',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'LineTypeCredential' }
);

export type LineTypeCredentialJsonSchema = Static<typeof lineTypeCredentialJsonSchema>;

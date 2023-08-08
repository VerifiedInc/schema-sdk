import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const stateCredentialJsonSchema = Type.Object(
  {
    state: Type.String({
      description: "A state's ISO 3166-2 code.",
      examples: ['CA', 'GA', 'SP'],
      format: 'iso3166RegionCode',
      title: 'State or Region',
      displayFormat: DisplayFormat.State
    })
  },
  {
    $id: 'StateCredential',
    if: Type.Object({
      country: Type.String({
        description: 'If the country from Address Credential is the US.',
        const: 'US'
      })
    }),
    then: Type.Object({
      state: Type.String({
        description: 'Then the state must be a valid US state.',
        format: 'iso3166USRegionCode',
        title: 'State'
      })
    })
  }
);

export type StateCredentialJsonSchema = Static<typeof stateCredentialJsonSchema>;

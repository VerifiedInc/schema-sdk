import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { ISO31662USCodes } from '../../values';

import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const stateCredentialJsonSchema = Type.Object(
  {
    state: Type.String({
      description: "A state's ISO 3166-2 code.",
      examples: ['CA', 'GA', 'SP'],
      format: 'iso3166RegionCode',
      title: 'State or Region',
      displayFormat: DisplayFormat.State,
      input: {
        type: InputType.Text
      }
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
        title: 'State',
        input: {
          type: InputType.Select,
          options: Array.from(ISO31662USCodes)
        }
      })
    })
  }
);

export type StateCredentialJsonSchema = Static<typeof stateCredentialJsonSchema>;

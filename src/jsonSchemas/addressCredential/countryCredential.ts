import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';
import { countrySelectOptions } from '../../values';

export const countryCredentialJsonSchema = Type.Object(
  {
    country: Type.String({
      format: 'iso3361Alpha2',
      examples: ['US', 'CA', 'MX'],
      description: "A country's ISO 3166-1 alpha-2 code.",
      title: 'Country',
      default: 'US',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Select,
        options: Array.from(countrySelectOptions)
      }
    })
  },
  { $id: 'CountryCredential' }
);

export type CountryCredentialJsonSchema = Static<typeof countryCredentialJsonSchema>;

import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { countrySelectOptions } from '../../values';
import { InputType } from '../../enums/inputType';

export const countryResidenceCredentialJsonSchema = Type.Object(
  {
    country: Type.String({
      format: 'iso3361Alpha2',
      description: "A person's country of residence in ISO 3166-1 alpha-2 format.",
      examples: ['US', 'CA', 'MX'],
      title: 'Country',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Select,
        options: Array.from(countrySelectOptions)
      }
    })
  },
  { $id: 'CountryResidenceCredential' }
);

export type CountryResidenceCredentialJsonSchema = Static<typeof countryResidenceCredentialJsonSchema>;

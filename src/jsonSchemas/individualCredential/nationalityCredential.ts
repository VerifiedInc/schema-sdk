import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { countrySelectOptions } from '../../values';
import { InputType } from '../../enums/inputType';

export const nationalityCredentialJsonSchema = Type.Object(
  {
    nationality: Type.String({
      format: 'iso3361Alpha2',
      description: "A person's birth country or country of citizenship in ISO 3166-1 alpha-2 format.",
      examples: ['US', 'CA', 'MX'],
      title: 'Nationality',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Select,
        options: Array.from(countrySelectOptions)
      }
    })
  },
  { $id: 'NationalityCredential' }
);

export type NationalityCredentialJsonSchema = Static<typeof nationalityCredentialJsonSchema>;

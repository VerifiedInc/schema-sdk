import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const stateCredentialJsonSchema = Type.Object(
  {
    state: Type.String({
      description: 'The state of the address.',
      examples: ['CA', 'GA', 'NY'],
      format: 'iso3166RegionCode'
    })
  },
  {
    $id: 'StateCredential',
    if: {
      type: 'object',
      properties: {
        country: { const: 'US' }
      },
      required: ['country']
    },
    then: {
      properties: {
        state: { format: 'iso3166USRegionCode' }
      }
    }
  }
) as UnumJsonSchema;

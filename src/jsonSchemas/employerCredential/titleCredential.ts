import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const titleCredentialJsonSchema = Type.Object(
  {
    title: Type.String({
      description: 'Job title',
      examples: ['Software Engineer', 'Designer', 'Construction Worker'],
      title: 'Job Title',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'TitleCredential' }
);

export type TitleCredentialJsonSchema = Static<typeof titleCredentialJsonSchema>;

import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

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
) as UnumJsonSchema;

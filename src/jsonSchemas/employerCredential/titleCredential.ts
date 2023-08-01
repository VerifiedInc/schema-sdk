import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const titleCredentialJsonSchema = Type.Object(
  {
    title: Type.String({
      description: 'Job title',
      examples: ['Software Engineer', 'Designer', 'Construction Worker'],
      title: 'Job Title'
    })
  },
  { $id: 'TitleCredential' }
) as UnumJsonSchema;

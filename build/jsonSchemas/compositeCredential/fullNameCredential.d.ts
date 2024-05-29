import { Static } from '@sinclair/typebox';
export declare const fullNameCredentialJsonSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    firstName: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TObject<{
    middleName: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TObject<{
    lastName: import("@sinclair/typebox").TString;
}>]>, import("@sinclair/typebox").TObject<{
    fullName: import("@sinclair/typebox").TString;
}>]>;
export type FullNameCredentialJsonSchema = Static<typeof fullNameCredentialJsonSchema>;
//# sourceMappingURL=fullNameCredential.d.ts.map
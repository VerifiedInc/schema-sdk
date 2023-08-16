import { Static } from '@sinclair/typebox';
export declare const employerCredentialJsonSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    employer: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TObject<{
    startDate: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TObject<{
    title: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TObject<{
    incomeRange: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    currency: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TObject<{
    amount: import("@sinclair/typebox").TString;
}>]>, import("@sinclair/typebox").TObject<{
    income: import("@sinclair/typebox").TString;
}>]>]>, import("@sinclair/typebox").TObject<{
    employer: import("@sinclair/typebox").TString;
}>]>;
export type EmployerCredentialJsonSchemaType = Static<typeof employerCredentialJsonSchema>;
//# sourceMappingURL=employerCredential.d.ts.map
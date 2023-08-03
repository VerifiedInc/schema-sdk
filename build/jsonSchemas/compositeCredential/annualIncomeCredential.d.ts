import { Static } from '@sinclair/typebox';
export declare const annualIncomeCredentialJsonSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    currency: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TObject<{
    amount: import("@sinclair/typebox").TString;
}>]>, import("@sinclair/typebox").TObject<{
    income: import("@sinclair/typebox").TString;
}>]>;
export type AnnualIncomeCredentialJsonSchemaType = Static<typeof annualIncomeCredentialJsonSchema>;
//# sourceMappingURL=annualIncomeCredential.d.ts.map
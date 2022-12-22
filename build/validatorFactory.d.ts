import { TObject } from '@sinclair/typebox';
interface ValidatorFactoryReturn<T> {
    schema: TObject;
    verify: (data: T) => T;
}
export declare const validatorFactory: <T>(schema: TObject) => ValidatorFactoryReturn<T>;
export {};
//# sourceMappingURL=validatorFactory.d.ts.map
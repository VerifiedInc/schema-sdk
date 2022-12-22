# Schema SDK
SDK for Unum ID credential scheme handling, e.g. definitions and validation.

## AJV
[Ajv](https://ajv.js.org/guide/why-ajv.html) is used for schema validation. We are opting to use the on-demand schema compilation [strategy](https://ajv.js.org/guide/managing-schemas.html#pre-adding-all-schemas-vs-adding-on-demand) given we would like to support a large number of credential schemas.

## TypeBox
[TypeBox](https://github.com/sinclairzx81/typebox) is used to author schemas. It is really just syntactic sugar to author JSON Schemas. Opting to not use TypeBox TypeCompiler because it is a little less flexible than ajv, [ref](https://github.com/sinclairzx81/typebox#typecompiler).
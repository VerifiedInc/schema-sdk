# Schema SDK
SDK for Unum ID credential scheme handling, e.g. definitions and validation.

## AJV
[Ajv](https://ajv.js.org/guide/why-ajv.html) is used for schema validation. Currently defining all schemas at initialization however they still end up being compiled in an on demand fashion. If necessary, we can opt to using the pure on-demand schema compilation [strategy](https://ajv.js.org/guide/managing-schemas.html#pre-adding-all-schemas-vs-adding-on-demand) given we would like to support a large number of credential schemas.

### Custom Formats
Custom ajv [formats](https://ajv.js.org/guide/formats.html#user-defined-formats) are being defined an leveraged to add additional assurances in regard to the credential schema data format in addition to its type. 

## TypeBox
[TypeBox](https://github.com/sinclairzx81/typebox) is used to author schemas. This means the attribute type and potentially its format. It is really just syntactic sugar to author JSON Schemas. Opting to not use TypeBox [TypeCompiler](https://github.com/sinclairzx81/typebox#typecompiler) because it is a little less flexible than ajv.
# Schema SDK
SDK for Verified.Inc credential scheme handling, e.g. definitions and validation.

## JSON Schemas
JSON schemas are important for programmatically handling credential data. They assist in extracting information as well as data validation.

For composite credentials, we are opting to use [$ref](https://json-schema.org/understanding-json-schema/structuring.html#ref) to reference the atomic credential schemas. This is to avoid having to define the same schema multiple times. This is also why we are opting to use [JSON Schema Draft 2019-09](https://ajv.js.org/guide/schema-language.html#draft-2019-09-and-draft-2020-12) over Draft 7.

The main advantage of this JSON Schema version over draft-07 is the ability to use  [unevaluatedproperties](https://ajv.js.org/json-schema.html#unevaluatedproperties) in the [definition of schemas that do not allow additional properties across multiple schemas](https://json-schema.org/understanding-json-schema/reference/object.html#extending)

### TypeBox
[TypeBox](https://github.com/sinclairzx81/typebox) is used to author JSON schemas. This means the attribute type and potentially its format. It is really just syntactic sugar to author JSON Schemas. Opting to not use TypeBox [TypeCompiler](https://github.com/sinclairzx81/typebox#typecompiler) because it is a little less flexible than [AJV](###AJV) for validation.

> We are using a custom [TypeBuilder](https://github.com/sinclairzx81/typebox/issues/373#issuecomment-1502287920) `./src/type`, we do this by extending Extended TypeBuilder (Type Builder's default) to add method creation reference to the atomic credential.

### Metadata
While JSON schemas more purpose is programmatic validation, we are also using some of it's metadata properties to help describe the schemas in human readable formats. The metadata attributes being primarily leveraged are: `description`, `examples`, and `title`. We also have introduced our own metadata attribute and [AJV](#AJV) keyword, `displayFormat` to serve as a more visually descriptive counter part to JSON schemas' data validation `format` property.

### Folder Structure

This is a brief description about the folder structure and what each one means

```markdown
jsonSchemas/ 
├─atomicCredential/  <- Here we put all the credentials that, if created, do not add much information, eg: matchCredential.ts
│ ├─matchCredential.ts <- matchCredential without other credential don't mean anything
│ ├─index.ts <- Export all atomic credentials
├─employerCredential/ <- All credentials relate to employer
│ ├─index.ts <- Export all employer credentials
├─compositeCredential/ <- This is where we define the composite credentials, such as eg: fullNameCredential.ts
│ ├─fullNameCredential.ts <- fullNameCredential which is firstNameCredential + lastNameCredential (optional middleNameCredential)
│ ├─index.ts <- Export all composite credentials
│ ├─addressCredential.ts 
├─addressCredential/ <- Credentials relate to address, for example: stateCredential, cityCredential
│ ├─line1Credential.ts
│ ├─index.ts <- Export all address credentials
├─individualCredential/ <- Credentials relate an individual or a person, for example: firstNameCredential, birthDateCredential
│ ├─firstNameCredential.ts
│ ├─index.ts
├─governmentIdCredential/ <- Credentials relate to government id, for example: ssnCredential, documentTypeCredential
│ ├─documentTypeCredential.ts
│ ├─index.ts
├─backwardsCredential/ <- Old credentials that we use, but will be deprecated
│ ├─index.ts
├─index.ts <- Import all credentials and export them to type definition
```

## Schema Validation
Schema validation is important to ensure credential data is schema compliant.

### AJV
[Ajv](https://ajv.js.org/guide/why-ajv.html) is used for schema validation. Currently defining all schemas at initialization however they still end up being compiled in an on demand fashion. If necessary, we can opt to using the pure on-demand schema compilation [strategy](https://ajv.js.org/guide/managing-schemas.html#pre-adding-all-schemas-vs-adding-on-demand) given we would like to support a large number of credential schemas.

We are using AJV 2019, to support JSON Schema Draft 2019-09.

#### Custom Formats
Custom ajv [formats](https://ajv.js.org/guide/formats.html#user-defined-formats) are being defined an leveraged to add additional assurances in regard to the credential schema data format in addition to its type.
Note: custom formats (and some built-in ones as well) do not work well for validating optional fields, even using TypeBox's `Type.Optional`. It is often helpful to add an optional variant (e.g. `optionalEmailFormat`) along with your custom format, which allows false values.

## Development
### Adding New Schemas
There are a number of spots that need to be updated in order to properly add a new schema definition.


1. **Create and export a new file to the new JsonSchema in `src/jsonSchema` folder**, naming the file `{credentialName}Credential.ts`, and add the file to credential related folder, e.g. `src/jsonSchema/addressCredential/stateCredential.ts`.
   1. if is not related to any existing folder, create a new folder for it. 
   2. Use `import { Type }` from `./src/type` instead of `import { Type } from '@sinclair/typebox'` to create the schema, this will allow us to create a reference to the atomic credential.
2. **Add the credential schema to the `src/jsonSchema/index.ts` exports**
3. **Add the newly created JsonSchema to the jsonSchemas map in `src/jsonSchema/index.ts`** this is easily forgotten as it as the bottom of the file.
4. **Create a new type definition in types.d.ts using the newly created jsonSchema definition**, e.g. IdentityCredentialSchemaType
5. **Add the newly created type definition to src/index.ts exports** under the "Types" inline comment
6.  **Create a new Jest describe block for validation tests in validate.test.ts** which covers the newly created JsonSchema, e.g. `describe('IdentityCredential Schema', () => {...`
7.  ~~**DON'T FORGET TO BUILD! `npm run compile`**~~ This step is actually now being handling automatically via the husky pre-commit setup.

### Adding New Formats
1. **Create the format validator in formats.ts**
2. **Add the format to ajv in ajv.ts**
3. **Export the format in index.ts**
4. **Author unit test in formats.test.ts**

### e2e Testing
Likely you will need to be testing local `schema-sdk` changes in a dependent project like [schema-resolver](https://github.com/UnumID/schema-resolver). The simplest and recommended way of doing so if via `npm link` as outlined [here](https://www.geeksforgeeks.org/how-to-install-a-local-module-using-npm/). Just be sure to run `npm run compile` before running `npm link` in this directory or `npm link @unumid/schema-sdk` in the dependent directory.

### Git Hooks
This project uses [Husky](https://github.com/typicode/husky) to manage its git hooks.

#### Commit Messages
 Husky is configured to enforce [commitlint](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)'s [Conventual Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) commit message format. `config-conventional` follows Angular commit convention [guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). We are using a slightly modified commitlint [configuration](.commitlintrc.json) [rules](https://commitlint.js.org/#/reference-rules) set to allow for commit messages that end with a `.`.

A message must start with one of the following "types":

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests
* **chore**: A small update

It is highly encouraged to include a "scope", .e.g. "schema". 
```
feat(schema): new addressSchema added
```

The inspiration for this setup was from [this](https://mokkapps.de/blog/how-to-automatically-generate-a-helpful-changelog-from-your-git-commit-messages/) blog post in regard creating and maintaining an automated changelog.

## Release
Releases are automated via Github Actions CI job. In order to trigger a release one should push a git tag with a preceding `v` with semver notation, ie `v1.1.1`, to the `main` branch. This will trigger the CI job to bump the package version, update changelog.md, make a release commit, and make a Github Release. The contents of the Github Release are autogenerated based on pull requests with commits associated with the release, so please use PRs to makes changes to `main`. The message of the git tag will be the commit message for the release so please make it meaningful and ensure it follows the commit message [subject](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#subject) guidelines (no need to include [type](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type), i.e. "feat: "). For example:

```sh
git tag v1.1.1 -m "Updated the SDK with a new CI job" && push origin v1.1.1
```
Note: Certain special characters in the tag message such as parentheses will cause errors in the Github Actions job. Make sure that your tag message does not contain special characters!
### Changelog
The [Standard Version](https://github.com/conventional-changelog/standard-version) node module is used to automatically populate [changelog.md](/CHANGELOG.md). It should only ever be trigger the but the Publish Github Actions [job](.github/workflows/publish.yaml). Please do **not** use manually.

The Publish job uses the `npm version`-like [option](https://github.com/conventional-changelog/standard-version#release-as-a-target-type-imperatively-npm-version-like) to side step its auto version increment logic. Also, `.versionrc.json` follow [2.2.0](https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.2.0/README.md) syntax has [options](https://github.com/conventional-changelog/standard-version#skipping-lifecycle-steps) set to disable the tagging and commit functionality which is being handled independently by Github Actions.

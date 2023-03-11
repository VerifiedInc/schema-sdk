# Schema SDK
SDK for Unum ID credential scheme handling, e.g. definitions and validation.

## Development
### Adding New Schemas
There are a number of spots that need to be updated in order to properly add a new schema definition.

1. **Create and export the new JsonLDSchema in jsonLDSchemas.ts**, e.g. identityCredentialJsonLDSchema
    a. **Update the `unum.id.json` JsonLD context file** if necessary with credential property schemas
2. **Add the newly created JsonLDSchema to the jsonLDSchemas map in jsonLDSchemas.ts** this is easily forgotten as it as the bottom of the file.
3. **Create and export the new JsonSchema in jsonSchema.ts**, e.g. identityCredentialJsonLDSchema
4. **Add the newly created JsonSchema to the jsonSchemas map in jsonSchemas.ts** this is easily forgotten as it as the bottom of the file.
5. **Create a new type definition in types.d.ts using the newly created jsonSchema definition**, e.g. IdentityCredentialSchemaType
6. **Add the newly create type definition to index.ts exports** under the "credential types" inline comment
7. **Create a new Jest describe block for validation tests in validate.test.ts** which covers the newly created JsonSchema, e.g. `describe('IdentityCredential Schema', () => {...`

### e2e Testing
Likely you will need to be testing local `schema-sdk` changes in a dependent project like [schema-resolver](https://github.com/UnumID/schema-resolver). The simplest and recommended way of doing so if via `npm link` as outlined [here](https://www.geeksforgeeks.org/how-to-install-a-local-module-using-npm/). Just be sure to run `npm run compile` before running `npm link` in this directory or `npm link @unumid/schema-sdk` in the dependent directory.

## AJV
[Ajv](https://ajv.js.org/guide/why-ajv.html) is used for schema validation. Currently defining all schemas at initialization however they still end up being compiled in an on demand fashion. If necessary, we can opt to using the pure on-demand schema compilation [strategy](https://ajv.js.org/guide/managing-schemas.html#pre-adding-all-schemas-vs-adding-on-demand) given we would like to support a large number of credential schemas.

### Custom Formats
Custom ajv [formats](https://ajv.js.org/guide/formats.html#user-defined-formats) are being defined an leveraged to add additional assurances in regard to the credential schema data format in addition to its type. 

## TypeBox
[TypeBox](https://github.com/sinclairzx81/typebox) is used to author schemas. This means the attribute type and potentially its format. It is really just syntactic sugar to author JSON Schemas. Opting to not use TypeBox [TypeCompiler](https://github.com/sinclairzx81/typebox#typecompiler) because it is a little less flexible than ajv.

## Git Hooks
This project uses [Husky](https://github.com/typicode/husky) to manage its git hooks.

### Commit Message
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

### Changelog
The [Standard Version](https://github.com/conventional-changelog/standard-version) node module is used to automatically populate [changelog.md](/CHANGELOG.md). It should only ever be trigger the but the Publish Github Actions [job](.github/workflows/publish.yaml). Please do **not** use manually.

The Publish job uses the `npm version`-like [option](https://github.com/conventional-changelog/standard-version#release-as-a-target-type-imperatively-npm-version-like) to side step its auto version increment logic. Also, `.versionrc.json` follow [2.2.0](https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.2.0/README.md) syntax has [options](https://github.com/conventional-changelog/standard-version#skipping-lifecycle-steps) set to disable the tagging and commit functionality which is being handled independently by Github Actions.
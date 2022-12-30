# Schema SDK
SDK for Unum ID credential scheme handling, e.g. definitions and validation.

## AJV
[Ajv](https://ajv.js.org/guide/why-ajv.html) is used for schema validation. Currently defining all schemas at initialization however they still end up being compiled in an on demand fashion. If necessary, we can opt to using the pure on-demand schema compilation [strategy](https://ajv.js.org/guide/managing-schemas.html#pre-adding-all-schemas-vs-adding-on-demand) given we would like to support a large number of credential schemas.

### Custom Formats
Custom ajv [formats](https://ajv.js.org/guide/formats.html#user-defined-formats) are being defined an leveraged to add additional assurances in regard to the credential schema data format in addition to its type. 

## TypeBox
[TypeBox](https://github.com/sinclairzx81/typebox) is used to author schemas. This means the attribute type and potentially its format. It is really just syntactic sugar to author JSON Schemas. Opting to not use TypeBox [TypeCompiler](https://github.com/sinclairzx81/typebox#typecompiler) because it is a little less flexible than ajv.

## Git Hooks
This project uses [Husky]() to manage its git hooks. It is configured to enforce [commitlint](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)'s [Conventual Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) commit message format. In order for the commit to succeed it must follow the message format [guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). 

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

It is highly encouraged to include a "scope", .e.g. "schema". 
```
feat(schema): new addressSchema added
```

The inspiration for this setup was from [this](https://mokkapps.de/blog/how-to-automatically-generate-a-helpful-changelog-from-your-git-commit-messages/) blog post in regard creating and maintaining an automated changelog.
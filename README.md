# Optolith Database Schema

This repository contains all information and logic of the Optolith flat-file database, which itself is closed source due to licensing.

The repository consists of three parts: The user documentation, the JSON Schema documents and the TypeScript definitions, checks and other logic.

The entity reference in the documentation and the JSON Schema documents are generated using a [self-written converter](https://github.com/elyukai/optolith-tsjsonschemamd) that walks the TypeScript AST and outputs them. This way, modification is only required and allowed in the TypeScript files, the other files must be generated.

## Contribute

If you want to contribute, it is most likely you want to help with inserting new data into the database. In this case, the [User Documentation](docs/Home.md) is the place to start. Conversations usually happen on the [Optolith Discord Server](https://discord.gg/wfdgB9g). We can also manage required permissions there, since you can't publicly access the database, as already mentioned.

If you want to contribute to the database schema itself, please open an issue or discussion (whatever fits best) with what you want to achieve so we can discuss it. Please look at the [CONTRIBUTING](./CONTRIBUTING.md) document for actual contributing to the schema repository.

## Usage

If you want to use the database (or parts of it) in your own project (most likely to support Optolith export formats in your own application), you can use the TypeScript sources as a simple database reader, at least if you have a project targeting JavaScript interpreters as well. This way, you already have proper typings. You can extract the database from the installation folder of Optolith and then configure the database reader to your needs.

## Semantic Versioning

The following situations are considered breaking changes:

- Underlying data must be changed in order to comply with the new schema. Examples:
  - Existing optional properties are made required
  - New required properties are added
  - Properties or enumeration cases are removed
- Code that uses the data must be adjusted in order to use the new version. Examples:
  - Existing required properties are made optional
  - Enumeration cases are added
  - Properties or enumeration cases are removed

This implies that breaking changes can occur quite frequently, even if the changes are very small.

A minor version bump can represent new optional properties, while patch version might represent adjustments in comments or display names for the editor.

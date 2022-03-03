# Using the database in your own project

If you're using the Optolith database for your own project, this page is for you. Here you'll find some best practices for working with the database.

Also, if you've worked with the database previously, feel free to share your insights here as well!

Lastly, please don't forget to credit The Optolith Project, since a lot of work and ❤ went into this database. Thank you! 🥰

## Integrate into non-JavaScript environments

For non-JavaScript targets, it may be helpful to automatically generate JSON decoders, so that you can always sync your code with database schema additions and changes. This can be done by writing a custom AST renderer for [`optolith-tsjsonschemamd`](https://github.com/elyukai/optolith-tsjsonschemamd), a tool that generates both the JSON Schema definition and Markdown reference documentation for the Optolith database schema from its TypeScript type definitions. It can be extended by specifying a custom renderer that reads a custom TypeScript AST (that is way easier to traverse than the native TypeScript AST) and outputs any file. You can read more about it in the linked repository and checkout the JSON Schema and Markdown renderers within as references.

If you can't support the exact same structure – or it would be way easier to decode if the structure would be different – you can try to extend the current schema while replacing the parts you want to change and then provide converters for the source files. You can then use your newly created types to generate code with your custom renderer.

## Breaking Changes

Optolith follows [semantic versioning](https://semver.org/). This includes character exports and the database; they all share the same version. Since the database schema also targets data contributors, it is stricter than required and thus may fail on changes that are not considered breaking.

### Changes that **are** considered breaking changes

- Additional cases in both discriminated unions and simple unions
- Additional enumeration cases

### Changes that are **not** considered breaking changes

- Additional properties on records (disallowed to prevent typos)
- Changing numeric and string constraints (`minimum`, `minLength`, …; disallowed to prevent typos and missing values)
- File name changes (file names are only for orientation purposes; only the mirrored numeric identifier can be relied on, although it's still safer to rely on file contents only)
- Changing magical tradition placeholder identifiers and replacing them with fully integrated tradition special abilities (a proper special ability may be added at any time once it is available; placeholders are for display purposes only)

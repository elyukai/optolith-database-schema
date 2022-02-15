# Types

The documentation uses specific data types to explain how the entered data should look like. This structure is enforced by the used JSON schema (that verifies your input in the editor) as well as by Optolith. Below you'll find a list of standard types that are used across all entry types. There will also be other types specific to some entries, which are defined in files other than this one. You can always click on the special type to check out its definition. The standard types are not linked to, since you can find all of them here.

## Records and fields

The base structure used in entry types for Optolith is the *record*, which is an object with a fixed set of *fields*, each storing another value of a specific type. This can be another record or a different type. A record is always given a name and if a record is used as a type somewhere else, its name is used.

```yaml
property1: "A string."
pro
```

## Standard Types

Name | Description | Examples
:-- | :-- | :--
`String` | A text. | `"Courage"`, `"Seduction"`
`Markdown` | A text that can be enhanced using Markdown syntax. | See [String definition vs. Markdown definition](#Markdown)
`Bool` | A boolean value. | `true`, `false`
`Int` | An integer. | `1`, `-2`
`Float` | A floating-point number. | `1.0`, `1.25`
`Date` | RFC 2822 or ISO 8601 date string. | `2021-07-10`
`[…]` | Brackets mean that the type specified within (e.g. `[String]`) is in a list. | See [Lists](#Lists)
`…?` | A question mark at the end of a property type means that this property can be left out, if a set value is not applicable to a specific entry. | See [Options](#Options)
`"…" \| "…" of …` | Records with different cases. | See [Variants](#Variants)
`(…,…)` | Parenthesis with at least one comma represent a tuple, which is represented as a list of a specific length, e.g. `(String, Int)` or `(Int, Int, Int)`. | See [Lists](#Lists)

## <a name="Markdown"></a>String definition vs. Markdown definition

A YAML string should be defined with double quotes.

```yaml
property_with_a_string: "A string."
```

A Markdown string should be defined using the YAML block syntax to make text editing with paragraphs more natural.

```yaml
property_with_a_markdown_string: |
  First paragraph in Markdown.

  Second paragraph with a **bold** text.
```

Notice the bar after the property name and the indented text. A paragraph is made using a blank line.

## <a name="Lists"></a>Lists

A list is made using hyphens and should be indented.

```yaml
property_with_an_int_list:
  - 1
  - 2
  - 3
```

## <a name="Options"></a>Options

An optional property can be left out.

Given the following record definition:

Name | Type
:-- | :--
`id` | `integer`
`name` | `string?`

This record is valid:

```yaml
id: 1
name: "Fancy record"
```

But this record is valid, too:

```yaml
id: 1
```

## <a name="Variants"></a>Variants

There can be records that have different shape between use cases (*cases*) of that record. Such records are called *variants*, also known as *tagged unions* or *discriminated unions*. They have one specific field, the *tag* or *discriminator*, which indicates the *case* and thus, which other fields and corresponding types the record features. In this database, this field is called `tag` and this name is solely used for this purpose. So anytime you see a field called `tag`, you know there is a variant.

Variants don't *need* to have a different shape for each case. Variants for entry identifiers often consist of just a `tag` and a `value`, where the `value` is the identifier of the entry in the category specified by the `tag`.

```yaml
skill_id:
  tag: Skill
  value: 1 # -> Flying

attribute_id:
  tag: Attribute
  value: 8 # -> Strength
```

There can be *constant* and *non-constant* variant cases. Constant cases just consist of a *tag*, which makes it the only possible value for that case, which makes it *constant*. Non-constant cases feature additional record fields.

A constant case's type definition is marked with double quotes, for example `"CoreRules" | "ExpansionRules" | "Sourcebook" | "RegionalSourcebook"` is used as the type of the respective publication.

```yaml
type:
  tag: CoreRules
```

A non-constant case's type definition has the form `"tag" of Record`, where `"tag"` is the used tag name and `Record` is a reference to the additional fields of that variant case, defined as a normal record.

```yaml
type:
  tag: Attribute
  value: 2
```

Note that in the YAML files, a variant tag is **not** wrapped in double quotes, as opposed to a normal string.

In very rare cases you may see a plain type instead of tag, e.g. `Int | …`. In those cases it can be an integer *or* something else. This is typically bad for parsing, so it is usually not used. In certain edge cases, where a proper variant would be too much to handle for manual input, as well as for backwards compatibility reasons, you may encounter such type of variant.

# [TITLE MISSING]

## Definitions

### <a name="ResponsiveText"></a> `ResponsiveText`

A text from the source that can be also displayed in small areas using a
compressed version.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` | The full text from the source. | <a href="#ResponsiveText/full">See details</a>
`compressed` | A compressed text for use in small areas (e.g. on character sheet). | <a href="#ResponsiveText/compressed">See details</a>

#### <a name="ResponsiveText/full"></a> `full`

The full text from the source.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ResponsiveText/compressed"></a> `compressed`

A compressed text for use in small areas (e.g. on character sheet).

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ResponsiveTextReplace"></a> `ResponsiveTextReplace`

A text from the source that can be also displayed in small areas using a
compressed version. It is used as a replacement for a generated text while
the generated text is still provided and should be used.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` | The full replacement string. It must contain `$1`, which is going to be replaced with the generated string, so additional information can be provided without duplicating concrete numeric values. | <a href="#ResponsiveTextReplace/full">See details</a>
`compressed` | A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated string, so additional information can be provided without duplicating concrete numeric values. | <a href="#ResponsiveTextReplace/compressed">See details</a>

#### <a name="ResponsiveTextReplace/full"></a> `full`

The full replacement string. It must contain `$1`, which is going to be
replaced with the generated string, so additional information can be
provided without duplicating concrete numeric values.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\$1`

#### <a name="ResponsiveTextReplace/compressed"></a> `compressed`

A compressed replacement string for use in small areas (e.g. on character
sheet). It must contain `$1`, which is going to be replaced with the
generated string, so additional information can be provided without
duplicating concrete numeric values.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\$1`

---

### <a name="ResponsiveTextOptional"></a> `ResponsiveTextOptional`

A text from the source that can be also displayed in small areas using a
compressed version, if available.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` | The full text from the source. | <a href="#ResponsiveTextOptional/full">See details</a>
`compressed?` | A compressed text for use in small areas (e.g. on character sheet). If this is not present, it should not appear in those areas. | <a href="#ResponsiveTextOptional/compressed">See details</a>

#### <a name="ResponsiveTextOptional/full"></a> `full`

The full text from the source.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ResponsiveTextOptional/compressed"></a> `compressed?`

A compressed text for use in small areas (e.g. on character sheet). If this
is not present, it should not appear in those areas.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

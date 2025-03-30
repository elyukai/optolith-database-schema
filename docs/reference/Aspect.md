# Aspect

## Definitions

### <a name="Aspect"></a> Aspect (`Aspect`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The aspect's identifier. An unique, increasing integer. | <a href="#Aspect/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Aspect/translations">See details</a>

#### <a name="Aspect/id"></a> `id`

The aspect's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Aspect/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AspectTranslation">AspectTranslation</a>&gt;

---

### <a name="AspectTranslation"></a> `AspectTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The aspect name. | <a href="#AspectTranslation/name">See details</a>
`master_of_aspect_suffix?` | The aspect's name appended to the simple name (not `name_in_library`) of the special ability *Master of (Aspect)*. | <a href="#AspectTranslation/master_of_aspect_suffix">See details</a>

#### <a name="AspectTranslation/name"></a> `name`

The aspect name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="AspectTranslation/master_of_aspect_suffix"></a> `master_of_aspect_suffix?`

The aspect's name appended to the simple name (not `name_in_library`) of the special ability *Master of (Aspect)*.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

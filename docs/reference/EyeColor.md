# Eye Color

## Definitions

### <a name="EyeColor"></a> Eye Color (`EyeColor`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The eye color's identifier. An unique, increasing integer. | <a href="#EyeColor/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#EyeColor/translations">See details</a>

#### <a name="EyeColor/id"></a> `id`

The eye color's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="EyeColor/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#EyeColorTranslation">EyeColorTranslation</a>&gt;

---

### <a name="EyeColorTranslation"></a> `EyeColorTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The eye color. | <a href="#EyeColorTranslation/name">See details</a>

#### <a name="EyeColorTranslation/name"></a> `name`

The eye color.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

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

- **Type:** Dictionary
- **Property Values:** <a href="#EyeColor/translations[key]">EyeColor/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="EyeColor/translations[key]"></a> `EyeColor/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The eye color. | <a href="#EyeColor/translations[key]/name">See details</a>

#### <a name="EyeColor/translations[key]/name"></a> `name`

The eye color.

- **Type:** String
- **Minimum Length:** `1`

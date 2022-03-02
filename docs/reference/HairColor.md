# Hair Color

## Definitions

### <a name="HairColor"></a> Hair Color (`HairColor`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The hair color's identifier. An unique, increasing integer. | <a href="#HairColor/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#HairColor/translations">See details</a>

#### <a name="HairColor/id"></a> `id`

The hair color's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="HairColor/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#HairColor/translations[key]">HairColor/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="HairColor/translations[key]"></a> `HairColor/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The hair color. | <a href="#HairColor/translations[key]/name">See details</a>

#### <a name="HairColor/translations[key]/name"></a> `name`

The hair color.

- **Type:** String
- **Minimum Length:** `1`

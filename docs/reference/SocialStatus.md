# Social Status

## Definitions

### <a name="SocialStatus"></a> Social Status (`SocialStatus`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The social status' identifier. An unique, increasing integer. | <a href="#SocialStatus/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SocialStatus/translations">See details</a>

#### <a name="SocialStatus/id"></a> `id`

The social status' identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SocialStatus/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SocialStatus/translations[key]">SocialStatus/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SocialStatus/translations[key]"></a> `SocialStatus/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The social status name. | <a href="#SocialStatus/translations[key]/name">See details</a>

#### <a name="SocialStatus/translations[key]/name"></a> `name`

The social status name.

- **Type:** String
- **Minimum Length:** `1`

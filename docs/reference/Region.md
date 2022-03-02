# Region

## Definitions

### <a name="Region"></a> Region (`Region`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The region's identifier. An unique, increasing integer. | <a href="#Region/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Region/translations">See details</a>

#### <a name="Region/id"></a> `id`

The region's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Region/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Region/translations[key]">Region/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Region/translations[key]"></a> `Region/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The region name. | <a href="#Region/translations[key]/name">See details</a>

#### <a name="Region/translations[key]/name"></a> `name`

The region name.

- **Type:** String
- **Minimum Length:** `1`

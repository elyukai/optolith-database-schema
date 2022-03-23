# Magical Tradition Placeholder

## Definitions

### <a name="MagicalTraditionPlaceholder"></a> Magical Tradition Placeholder (`MagicalTraditionPlaceholder`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical tradition placeholder's identifier. An unique, increasing integer. | <a href="#MagicalTraditionPlaceholder/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalTraditionPlaceholder/translations">See details</a>

#### <a name="MagicalTraditionPlaceholder/id"></a> `id`

The magical tradition placeholder's identifier. An unique, increasing
integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MagicalTraditionPlaceholder/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MagicalTraditionPlaceholder/translations[key]">MagicalTraditionPlaceholder/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MagicalTraditionPlaceholder/translations[key]"></a> `MagicalTraditionPlaceholder/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the magical tradition. | <a href="#MagicalTraditionPlaceholder/translations[key]/name">See details</a>

#### <a name="MagicalTraditionPlaceholder/translations[key]/name"></a> `name`

The name of the magical tradition.

- **Type:** String
- **Minimum Length:** `1`

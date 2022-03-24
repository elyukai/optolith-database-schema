# Armor Type

## Definitions

### <a name="ArmorType"></a> Armor Type (`ArmorType`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The armor type's identifier. An unique, increasing integer. | <a href="#ArmorType/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArmorType/translations">See details</a>

#### <a name="ArmorType/id"></a> `id`

The armor type's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArmorType/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArmorType/translations[key]">ArmorType/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArmorType/translations[key]"></a> `ArmorType/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the armor type. | <a href="#ArmorType/translations[key]/name">See details</a>

#### <a name="ArmorType/translations[key]/name"></a> `name`

The name of the armor type.

- **Type:** String
- **Minimum Length:** `1`

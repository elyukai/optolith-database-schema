# Animal Type

## Definitions

### <a name="AnimalType"></a> Animal Type (`AnimalType`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal type's identifier. An unique, increasing integer. | <a href="#AnimalType/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalType/translations">See details</a>

#### <a name="AnimalType/id"></a> `id`

The animal type's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalType/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimalType/translations[key]">AnimalType/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimalType/translations[key]"></a> `AnimalType/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The animal type name. | <a href="#AnimalType/translations[key]/name">See details</a>

#### <a name="AnimalType/translations[key]/name"></a> `name`

The animal type name.

- **Type:** String
- **Minimum Length:** `1`

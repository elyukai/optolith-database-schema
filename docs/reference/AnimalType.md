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

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AnimalTypeTranslation">AnimalTypeTranslation</a>&gt;

---

### <a name="AnimalTypeTranslation"></a> `AnimalTypeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The animal type name. | <a href="#AnimalTypeTranslation/name">See details</a>

#### <a name="AnimalTypeTranslation/name"></a> `name`

The animal type name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

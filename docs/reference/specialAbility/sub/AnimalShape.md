# Animal Shape

## Definitions

### <a name="AnimalShape"></a> Animal Shape (`AnimalShape`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal shape's identifier. An unique, increasing integer. | <a href="#AnimalShape/id">See details</a>
`path_id` | The identifier of the animal shape's path. | <a href="#AnimalShape/path_id">See details</a>
`size_id` | The identifier of the animal shape's size. | <a href="#AnimalShape/size_id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalShape/translations">See details</a>

#### <a name="AnimalShape/id"></a> `id`

The animal shape's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalShape/path_id"></a> `path_id`

The identifier of the animal shape's path.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalShape/size_id"></a> `size_id`

The identifier of the animal shape's size.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalShape/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimalShape/translations[key]">AnimalShape/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimalShape/translations[key]"></a> `AnimalShape/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The animal shape name. | <a href="#AnimalShape/translations[key]/name">See details</a>

#### <a name="AnimalShape/translations[key]/name"></a> `name`

The animal shape name.

- **Type:** String
- **Minimum Length:** `1`

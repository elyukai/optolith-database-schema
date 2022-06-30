# Animal Shape

## Definitions

### <a name="AnimalShape"></a> Animal Shape (`AnimalShape`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal shape's identifier. An unique, increasing integer. | <a href="#AnimalShape/id">See details</a>
`path` | The animal shape's path. | <a href="#AnimalShape/path">See details</a>
`size` | The animal shape's size. | <a href="#AnimalShape/size">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalShape/translations">See details</a>

#### <a name="AnimalShape/id"></a> `id`

The animal shape's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalShape/path"></a> `path`

The animal shape's path.

- **Type:** <a href="#AnimalShape/path">Object</a>

#### <a name="AnimalShape/size"></a> `size`

The animal shape's size.

- **Type:** <a href="#AnimalShape/size">Object</a>

#### <a name="AnimalShape/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimalShape/translations[key]">AnimalShape/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimalShape/path"></a> `AnimalShape/path`

The animal shape's path.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the animal shape's path. | <a href="#AnimalShape/path/id">See details</a>

#### <a name="AnimalShape/path/id"></a> `id`

The identifier of the animal shape's path.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalShape/size"></a> `AnimalShape/size`

The animal shape's size.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the animal shape's size. | <a href="#AnimalShape/size/id">See details</a>

#### <a name="AnimalShape/size/id"></a> `id`

The identifier of the animal shape's size.

- **Type:** Integer
- **Minimum:** `1`

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

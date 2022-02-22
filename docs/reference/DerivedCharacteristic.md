# Derived Characteristic

## Definitions

### <a name="DerivedCharacteristic"></a> Derived Characteristic (`DerivedCharacteristic`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#DerivedCharacteristic/id">See details</a>
`prerequisites?` |  | <a href="#DerivedCharacteristic/prerequisites">See details</a>
`src` |  | <a href="#DerivedCharacteristic/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DerivedCharacteristic/translations">See details</a>

#### <a name="DerivedCharacteristic/id"></a> `id`

An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="DerivedCharacteristic/prerequisites"></a> `prerequisites?`

- **Type:** <a href="#GroupCollection/DerivedCharacteristic">GroupCollection/DerivedCharacteristic</a>

#### <a name="DerivedCharacteristic/src"></a> `src`

- **Type:** <a href="./_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="DerivedCharacteristic/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DerivedCharacteristic/translations[key]">DerivedCharacteristic/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DerivedCharacteristic/translations[key]"></a> `DerivedCharacteristic/translations[key]`

- **Type:** <a href="#Translation">Translation</a>

---

### <a name="Translation"></a> `Translation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The characteristic's name. | <a href="#Translation/name">See details</a>
`abbreviation` | The characteristic's abbreviation. | <a href="#Translation/abbreviation">See details</a>
`calculation?` | Possible calculation strings for the final value. | <a href="#Translation/calculation">See details</a>

#### <a name="Translation/name"></a> `name`

The characteristic's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/abbreviation"></a> `abbreviation`

The characteristic's abbreviation.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/calculation"></a> `calculation?`

Possible calculation strings for the final value.

- **Type:** <a href="#Calculation">Calculation</a>

---

### <a name="Calculation"></a> `Calculation`

Possible calculation strings for the final value.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The default calculation string. | <a href="#Calculation/default">See details</a>
`half_primary?` | The calculation string if only half of the primary attribute is used. | <a href="#Calculation/half_primary">See details</a>
`no_primary?` | The calculation string if no primary attribute is used. | <a href="#Calculation/no_primary">See details</a>

#### <a name="Calculation/default"></a> `default`

The default calculation string.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Calculation/half_primary"></a> `half_primary?`

The calculation string if only half of the primary attribute is used.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Calculation/no_primary"></a> `no_primary?`

The calculation string if no primary attribute is used.

- **Type:** String
- **Minimum Length:** `1`

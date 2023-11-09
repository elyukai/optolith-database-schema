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

- **Type:** <a href="./_Prerequisite.md#DerivedCharacteristicPrerequisites">DerivedCharacteristicPrerequisites</a>

#### <a name="DerivedCharacteristic/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="DerivedCharacteristic/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#DerivedCharacteristicTranslation">DerivedCharacteristicTranslation</a>&gt;

---

### <a name="DerivedCharacteristicTranslation"></a> `DerivedCharacteristicTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The characteristic's name. | <a href="#DerivedCharacteristicTranslation/name">See details</a>
`abbreviation` | The characteristic's abbreviation. | <a href="#DerivedCharacteristicTranslation/abbreviation">See details</a>
`calculation?` | Possible calculation strings for the final value. | <a href="#DerivedCharacteristicTranslation/calculation">See details</a>

#### <a name="DerivedCharacteristicTranslation/name"></a> `name`

The characteristic's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="DerivedCharacteristicTranslation/abbreviation"></a> `abbreviation`

The characteristic's abbreviation.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="DerivedCharacteristicTranslation/calculation"></a> `calculation?`

Possible calculation strings for the final value.

- **Type:** <a href="#CalculationTranslation">CalculationTranslation</a>

---

### <a name="CalculationTranslation"></a> `CalculationTranslation`

Possible calculation strings for the final value.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The default calculation string. | <a href="#CalculationTranslation/default">See details</a>
`half_primary?` | The calculation string if only half of the primary attribute is used. | <a href="#CalculationTranslation/half_primary">See details</a>
`no_primary?` | The calculation string if no primary attribute is used. | <a href="#CalculationTranslation/no_primary">See details</a>

#### <a name="CalculationTranslation/default"></a> `default`

The default calculation string.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="CalculationTranslation/half_primary"></a> `half_primary?`

The calculation string if only half of the primary attribute is used.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="CalculationTranslation/no_primary"></a> `no_primary?`

The calculation string if no primary attribute is used.

- **Type:** String
- **Minimum Length:** `1`

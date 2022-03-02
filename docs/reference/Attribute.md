# Attribute

## Definitions

### <a name="Attribute"></a> Attribute (`Attribute`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The attribute's identifier. An unique, increasing integer. | <a href="#Attribute/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Attribute/translations">See details</a>

#### <a name="Attribute/id"></a> `id`

The attribute's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Attribute/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Attribute/translations[key]">Attribute/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Attribute/translations[key]"></a> `Attribute/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The attribute's name. | <a href="#Attribute/translations[key]/name">See details</a>
`abbreviation` | The abbreviation of the attribute's name. | <a href="#Attribute/translations[key]/abbreviation">See details</a>
`description` | The description of the attribute. | <a href="#Attribute/translations[key]/description">See details</a>

#### <a name="Attribute/translations[key]/name"></a> `name`

The attribute's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Attribute/translations[key]/abbreviation"></a> `abbreviation`

The abbreviation of the attribute's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Attribute/translations[key]/description"></a> `description`

The description of the attribute.

- **Type:** String
- **Minimum Length:** `1`

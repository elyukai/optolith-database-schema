# Attribute

## Definitions

### <a name="Attribute"></a> Attribute

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#Attribute/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Attribute/translations">See details</a>

#### <a name="Attribute/id"></a> `id`

An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Attribute/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

##### Values matching `^[a-z]{2}-[A-Z]{2}$`

- **Type:** <a href="#Translation">Translation</a>

---

### <a name="Translation"></a> Translation

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the attribute. | <a href="#Translation/name">See details</a>
`abbreviation` | The abbreviation of the attribute's name. | <a href="#Translation/abbreviation">See details</a>
`description` | The description of the attribute. | <a href="#Translation/description">See details</a>

#### <a name="Translation/name"></a> `name`

The name of the attribute.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/abbreviation"></a> `abbreviation`

The abbreviation of the attribute's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/description"></a> `description`

The description of the attribute.

- **Type:** String
- **Minimum Length:** `1`

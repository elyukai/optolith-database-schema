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

- **Type:** <a href="#AttributeTranslation">AttributeTranslation</a>

---

### <a name="AttributeTranslation"></a> `AttributeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The attribute's name. | <a href="#AttributeTranslation/name">See details</a>
`abbreviation` | The abbreviation of the attribute's name. | <a href="#AttributeTranslation/abbreviation">See details</a>
`description` | The description of the attribute. | <a href="#AttributeTranslation/description">See details</a>

#### <a name="AttributeTranslation/name"></a> `name`

The attribute's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="AttributeTranslation/abbreviation"></a> `abbreviation`

The abbreviation of the attribute's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="AttributeTranslation/description"></a> `description`

The description of the attribute.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

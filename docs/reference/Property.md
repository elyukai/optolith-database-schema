# Property

## Definitions

### <a name="Property"></a> Property (`Property`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The property's identifier. An unique, increasing integer. | <a href="#Property/id">See details</a>
`check?` | The property check's attributes. Only the properties from the Core Rules have defined property checks. | <a href="#Property/check">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Property/translations">See details</a>

#### <a name="Property/id"></a> `id`

The property's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Property/check"></a> `check?`

The property check's attributes. Only the properties from the Core Rules have defined property checks.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="Property/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Property/translations[key]">Property/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Property/translations[key]"></a> `Property/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The property's name. | <a href="#Property/translations[key]/name">See details</a>

#### <a name="Property/translations[key]/name"></a> `name`

The property's name.

- **Type:** String
- **Minimum Length:** `1`

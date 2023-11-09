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

The property check's attributes. Only the properties from the Core Rules
have defined property checks.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="Property/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#PropertyTranslation">PropertyTranslation</a>&gt;

---

### <a name="PropertyTranslation"></a> `PropertyTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The property's name. | <a href="#PropertyTranslation/name">See details</a>

#### <a name="PropertyTranslation/name"></a> `name`

The property's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

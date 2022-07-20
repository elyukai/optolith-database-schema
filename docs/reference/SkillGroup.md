# Skill Group

## Definitions

### <a name="SkillGroup"></a> Skill Group (`SkillGroup`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill group's identifier. An unique, increasing integer. | <a href="#SkillGroup/id">See details</a>
`check` | The skill group check's attributes. | <a href="#SkillGroup/check">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillGroup/translations">See details</a>

#### <a name="SkillGroup/id"></a> `id`

The skill group's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillGroup/check"></a> `check`

The skill group check's attributes.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="SkillGroup/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SkillGroup/translations[key]">SkillGroup/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SkillGroup/translations[key]"></a> `SkillGroup/translations[key]`

- **Type:** <a href="#SkillGroupTranslation">SkillGroupTranslation</a>

---

### <a name="SkillGroupTranslation"></a> `SkillGroupTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The skill group's name. | <a href="#SkillGroupTranslation/name">See details</a>
`long_name` | The skill group's long name. | <a href="#SkillGroupTranslation/long_name">See details</a>

#### <a name="SkillGroupTranslation/name"></a> `name`

The skill group's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="SkillGroupTranslation/long_name"></a> `long_name`

The skill group's long name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

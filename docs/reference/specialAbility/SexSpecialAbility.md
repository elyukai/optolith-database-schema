# Sex Special Ability

## Definitions

### <a name="SexSpecialAbility"></a> Sex Special Ability (`SexSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SexSpecialAbility/id">See details</a>
`levels?` |  | <a href="#SexSpecialAbility/levels">See details</a>
`skill_applications?` |  | <a href="#SexSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#SexSpecialAbility/skill_uses">See details</a>
`ap_value` |  | <a href="#SexSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#SexSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SexSpecialAbility/translations">See details</a>

#### <a name="SexSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="SexSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="SexSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="SexSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="SexSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="SexSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="SexSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SexSpecialAbility/translations[key]">SexSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SexSpecialAbility/translations[key]"></a> `SexSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#SexSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#SexSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#SexSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#SexSpecialAbility/translations[key]/errata">See details</a>

#### <a name="SexSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="SexSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="SexSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="SexSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

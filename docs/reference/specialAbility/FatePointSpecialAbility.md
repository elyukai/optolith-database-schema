# Fate Point Special Ability

## Definitions

### <a name="FatePointSpecialAbility"></a> Fate Point Special Ability (`FatePointSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#FatePointSpecialAbility/id">See details</a>
`levels?` |  | <a href="#FatePointSpecialAbility/levels">See details</a>
`skill_applications?` |  | <a href="#FatePointSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#FatePointSpecialAbility/skill_uses">See details</a>
`ap_value` |  | <a href="#FatePointSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#FatePointSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FatePointSpecialAbility/translations">See details</a>

#### <a name="FatePointSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="FatePointSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="FatePointSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="FatePointSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="FatePointSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="FatePointSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FatePointSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FatePointSpecialAbility/translations[key]">FatePointSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FatePointSpecialAbility/translations[key]"></a> `FatePointSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#FatePointSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#FatePointSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#FatePointSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#FatePointSpecialAbility/translations[key]/errata">See details</a>

#### <a name="FatePointSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="FatePointSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="FatePointSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="FatePointSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

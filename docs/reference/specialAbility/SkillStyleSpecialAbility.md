# Skill Style Special Ability

## Definitions

### <a name="SkillStyleSpecialAbility"></a> Skill Style Special Ability (`SkillStyleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#SkillStyleSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#SkillStyleSpecialAbility/select_options">See details</a>
`maximum?` |  | <a href="#SkillStyleSpecialAbility/maximum">See details</a>
`advanced` |  | <a href="#SkillStyleSpecialAbility/advanced">See details</a>
`prerequisites?` |  | <a href="#SkillStyleSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#SkillStyleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#SkillStyleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillStyleSpecialAbility/translations">See details</a>

#### <a name="SkillStyleSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="SkillStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="SkillStyleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="SkillStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="SkillStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** <a href="../_Activatable.md#AdvancedSpecialAbilities">AdvancedSpecialAbilities</a>

#### <a name="SkillStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="SkillStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="SkillStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="SkillStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SkillStyleSpecialAbility/translations[key]">SkillStyleSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SkillStyleSpecialAbility/translations[key]"></a> `SkillStyleSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#SkillStyleSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#SkillStyleSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#SkillStyleSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#SkillStyleSpecialAbility/translations[key]/errata">See details</a>

#### <a name="SkillStyleSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="SkillStyleSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="SkillStyleSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="SkillStyleSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

# Advanced Skill Special Ability

## Definitions

### <a name="AdvancedSkillSpecialAbility"></a> Advanced Skill Special Ability (`AdvancedSkillSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#AdvancedSkillSpecialAbility/id">See details</a>
`levels?` |  | <a href="#AdvancedSkillSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#AdvancedSkillSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#AdvancedSkillSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#AdvancedSkillSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#AdvancedSkillSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#AdvancedSkillSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#AdvancedSkillSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#AdvancedSkillSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvancedSkillSpecialAbility/translations">See details</a>

#### <a name="AdvancedSkillSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="AdvancedSkillSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="AdvancedSkillSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="AdvancedSkillSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="AdvancedSkillSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="AdvancedSkillSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="AdvancedSkillSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="AdvancedSkillSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="AdvancedSkillSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AdvancedSkillSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvancedSkillSpecialAbility/translations[key]">AdvancedSkillSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvancedSkillSpecialAbility/translations[key]"></a> `AdvancedSkillSpecialAbility/translations[key]`

- **Type:** <a href="#AdvancedSkillSpecialAbilityTranslation">AdvancedSkillSpecialAbilityTranslation</a>

---

### <a name="AdvancedSkillSpecialAbilityTranslation"></a> `AdvancedSkillSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#AdvancedSkillSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#AdvancedSkillSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#AdvancedSkillSpecialAbilityTranslation/rules">See details</a>
`errata?` |  | <a href="#AdvancedSkillSpecialAbilityTranslation/errata">See details</a>

#### <a name="AdvancedSkillSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="AdvancedSkillSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="AdvancedSkillSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="AdvancedSkillSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

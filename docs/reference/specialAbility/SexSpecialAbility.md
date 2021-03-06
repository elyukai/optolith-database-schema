# Sex Special Ability

## Definitions

### <a name="SexSpecialAbility"></a> Sex Special Ability (`SexSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SexSpecialAbility/id">See details</a>
`levels?` |  | <a href="#SexSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#SexSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#SexSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#SexSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#SexSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#SexSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#SexSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#SexSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SexSpecialAbility/translations">See details</a>

#### <a name="SexSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="SexSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="SexSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="SexSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="SexSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="SexSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="SexSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="SexSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

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

- **Type:** <a href="#SexSpecialAbilityTranslation">SexSpecialAbilityTranslation</a>

---

### <a name="SexSpecialAbilityTranslation"></a> `SexSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#SexSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#SexSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#SexSpecialAbilityTranslation/rules">See details</a>
`errata?` |  | <a href="#SexSpecialAbilityTranslation/errata">See details</a>

#### <a name="SexSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="SexSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="SexSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="SexSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

# Fate Point Special Ability

## Definitions

### <a name="FatePointSpecialAbility"></a> Fate Point Special Ability (`FatePointSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#FatePointSpecialAbility/id">See details</a>
`levels?` |  | <a href="#FatePointSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#FatePointSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#FatePointSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#FatePointSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#FatePointSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#FatePointSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#FatePointSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#FatePointSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FatePointSpecialAbility/translations">See details</a>

#### <a name="FatePointSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="FatePointSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="FatePointSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="FatePointSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="FatePointSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="FatePointSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="FatePointSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="FatePointSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

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

- **Type:** <a href="#FatePointSpecialAbilityTranslation">FatePointSpecialAbilityTranslation</a>

---

### <a name="FatePointSpecialAbilityTranslation"></a> `FatePointSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#FatePointSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#FatePointSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#FatePointSpecialAbilityTranslation/rules">See details</a>
`ap_value?` | The AP value. It is only used if the text cannot be generated from the given information. | <a href="#FatePointSpecialAbilityTranslation/ap_value">See details</a>
`errata?` |  | <a href="#FatePointSpecialAbilityTranslation/errata">See details</a>

#### <a name="FatePointSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="FatePointSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="FatePointSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="FatePointSpecialAbilityTranslation/ap_value"></a> `ap_value?`

The AP value. It is only used if the text cannot be generated from the
given information.

- **Type:** <a href="../_Activatable.md#AdventurePointsValueReplacement">AdventurePointsValueReplacement</a>

#### <a name="FatePointSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

# Magical Special Ability

## Definitions

### <a name="MagicalSpecialAbility"></a> Magical Special Ability (`MagicalSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicalSpecialAbility/id">See details</a>
`levels?` |  | <a href="#MagicalSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#MagicalSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#MagicalSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#MagicalSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#MagicalSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#MagicalSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#MagicalSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#MagicalSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalSpecialAbility/translations">See details</a>

#### <a name="MagicalSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="MagicalSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="MagicalSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="MagicalSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="MagicalSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="MagicalSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="MagicalSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="MagicalSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="MagicalSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicalSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MagicalSpecialAbility/translations[key]">MagicalSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MagicalSpecialAbility/translations[key]"></a> `MagicalSpecialAbility/translations[key]`

- **Type:** <a href="#MagicalSpecialAbilityTranslation">MagicalSpecialAbilityTranslation</a>

---

### <a name="MagicalSpecialAbilityTranslation"></a> `MagicalSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#MagicalSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#MagicalSpecialAbilityTranslation/name_in_library">See details</a>
`input?` | A string that is used as a label for an input field. | <a href="#MagicalSpecialAbilityTranslation/input">See details</a>
`rules` |  | <a href="#MagicalSpecialAbilityTranslation/rules">See details</a>
`ap_value?` | The AP value. It is only used if the text cannot be generated from the given information. | <a href="#MagicalSpecialAbilityTranslation/ap_value">See details</a>
`errata?` |  | <a href="#MagicalSpecialAbilityTranslation/errata">See details</a>

#### <a name="MagicalSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="MagicalSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="MagicalSpecialAbilityTranslation/input"></a> `input?`

A string that is used as a label for an input field.

- **Type:** <a href="../_Activatable.md#Input">Input</a>

#### <a name="MagicalSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="MagicalSpecialAbilityTranslation/ap_value"></a> `ap_value?`

The AP value. It is only used if the text cannot be generated from the
given information.

- **Type:** <a href="../_Activatable.md#AdventurePointsValueReplacement">AdventurePointsValueReplacement</a>

#### <a name="MagicalSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

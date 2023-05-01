# General Special Ability

## Definitions

### <a name="GeneralSpecialAbility"></a> General Special Ability (`GeneralSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#GeneralSpecialAbility/id">See details</a>
`levels?` |  | <a href="#GeneralSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#GeneralSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#GeneralSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#GeneralSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#GeneralSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#GeneralSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#GeneralSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#GeneralSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeneralSpecialAbility/translations">See details</a>

#### <a name="GeneralSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="GeneralSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="GeneralSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="GeneralSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="GeneralSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="GeneralSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="GeneralSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="GeneralSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="GeneralSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="GeneralSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeneralSpecialAbility/translations[key]">GeneralSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeneralSpecialAbility/translations[key]"></a> `GeneralSpecialAbility/translations[key]`

- **Type:** <a href="#GeneralSpecialAbilityTranslation">GeneralSpecialAbilityTranslation</a>

---

### <a name="GeneralSpecialAbilityTranslation"></a> `GeneralSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#GeneralSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#GeneralSpecialAbilityTranslation/name_in_library">See details</a>
`input?` | A string that is used as a label for an input field. | <a href="#GeneralSpecialAbilityTranslation/input">See details</a>
`rules` |  | <a href="#GeneralSpecialAbilityTranslation/rules">See details</a>
`ap_value_append?` | A string that gets appended to the default AP Value text with a preceding space. This always happens if present, even if the generated AP Value text is replaced. | <a href="#GeneralSpecialAbilityTranslation/ap_value_append">See details</a>
`errata?` |  | <a href="#GeneralSpecialAbilityTranslation/errata">See details</a>

#### <a name="GeneralSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="GeneralSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="GeneralSpecialAbilityTranslation/input"></a> `input?`

A string that is used as a label for an input field.

- **Type:** <a href="../_Activatable.md#Input">Input</a>

#### <a name="GeneralSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="GeneralSpecialAbilityTranslation/ap_value_append"></a> `ap_value_append?`

A string that gets appended to the default AP Value text with a preceding
space. This always happens if present, even if the generated AP Value text
is replaced.

- **Type:** <a href="../_Activatable.md#AdventurePointsValueAppend">AdventurePointsValueAppend</a>

#### <a name="GeneralSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

# Ceremonial Item Special Ability

## Definitions

### <a name="CeremonialItemSpecialAbility"></a> Ceremonial Item Special Ability (`CeremonialItemSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CeremonialItemSpecialAbility/id">See details</a>
`levels?` |  | <a href="#CeremonialItemSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#CeremonialItemSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#CeremonialItemSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#CeremonialItemSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#CeremonialItemSpecialAbility/maximum">See details</a>
`aspect?` |  | <a href="#CeremonialItemSpecialAbility/aspect">See details</a>
`prerequisites?` |  | <a href="#CeremonialItemSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#CeremonialItemSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#CeremonialItemSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CeremonialItemSpecialAbility/translations">See details</a>

#### <a name="CeremonialItemSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="CeremonialItemSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="CeremonialItemSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="CeremonialItemSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="CeremonialItemSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="CeremonialItemSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="CeremonialItemSpecialAbility/aspect"></a> `aspect?`

- **Type:** <a href="../_Activatable.md#Aspect">Aspect</a>

#### <a name="CeremonialItemSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="CeremonialItemSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CeremonialItemSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CeremonialItemSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CeremonialItemSpecialAbility/translations[key]">CeremonialItemSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CeremonialItemSpecialAbility/translations[key]"></a> `CeremonialItemSpecialAbility/translations[key]`

- **Type:** <a href="#CeremonialItemSpecialAbilityTranslation">CeremonialItemSpecialAbilityTranslation</a>

---

### <a name="CeremonialItemSpecialAbilityTranslation"></a> `CeremonialItemSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#CeremonialItemSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#CeremonialItemSpecialAbilityTranslation/name_in_library">See details</a>
`effect` |  | <a href="#CeremonialItemSpecialAbilityTranslation/effect">See details</a>
`errata?` |  | <a href="#CeremonialItemSpecialAbilityTranslation/errata">See details</a>

#### <a name="CeremonialItemSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="CeremonialItemSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="CeremonialItemSpecialAbilityTranslation/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="CeremonialItemSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

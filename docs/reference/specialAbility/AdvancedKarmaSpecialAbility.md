# Advanced Karma Special Ability

## Definitions

### <a name="AdvancedKarmaSpecialAbility"></a> Advanced Karma Special Ability (`AdvancedKarmaSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#AdvancedKarmaSpecialAbility/id">See details</a>
`levels?` |  | <a href="#AdvancedKarmaSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#AdvancedKarmaSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#AdvancedKarmaSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#AdvancedKarmaSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#AdvancedKarmaSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#AdvancedKarmaSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#AdvancedKarmaSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#AdvancedKarmaSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvancedKarmaSpecialAbility/translations">See details</a>

#### <a name="AdvancedKarmaSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="AdvancedKarmaSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="AdvancedKarmaSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="AdvancedKarmaSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="AdvancedKarmaSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="AdvancedKarmaSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="AdvancedKarmaSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="AdvancedKarmaSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="AdvancedKarmaSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AdvancedKarmaSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvancedKarmaSpecialAbility/translations[key]">AdvancedKarmaSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvancedKarmaSpecialAbility/translations[key]"></a> `AdvancedKarmaSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#AdvancedKarmaSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#AdvancedKarmaSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#AdvancedKarmaSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#AdvancedKarmaSpecialAbility/translations[key]/errata">See details</a>

#### <a name="AdvancedKarmaSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="AdvancedKarmaSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="AdvancedKarmaSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="AdvancedKarmaSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
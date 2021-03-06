# Magic Style Special Ability

## Definitions

### <a name="MagicStyleSpecialAbility"></a> Magic Style Special Ability (`MagicStyleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#MagicStyleSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#MagicStyleSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#MagicStyleSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#MagicStyleSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#MagicStyleSpecialAbility/maximum">See details</a>
`advanced` |  | <a href="#MagicStyleSpecialAbility/advanced">See details</a>
`prerequisites?` |  | <a href="#MagicStyleSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#MagicStyleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#MagicStyleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicStyleSpecialAbility/translations">See details</a>

#### <a name="MagicStyleSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="MagicStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="MagicStyleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="MagicStyleSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="MagicStyleSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="MagicStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="MagicStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** <a href="../_Activatable.md#AdvancedSpecialAbilities">AdvancedSpecialAbilities</a>

#### <a name="MagicStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="MagicStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="MagicStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MagicStyleSpecialAbility/translations[key]">MagicStyleSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MagicStyleSpecialAbility/translations[key]"></a> `MagicStyleSpecialAbility/translations[key]`

- **Type:** <a href="#MagicStyleSpecialAbilityTranslation">MagicStyleSpecialAbilityTranslation</a>

---

### <a name="MagicStyleSpecialAbilityTranslation"></a> `MagicStyleSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#MagicStyleSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#MagicStyleSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#MagicStyleSpecialAbilityTranslation/rules">See details</a>
`errata?` |  | <a href="#MagicStyleSpecialAbilityTranslation/errata">See details</a>

#### <a name="MagicStyleSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="MagicStyleSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="MagicStyleSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="MagicStyleSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

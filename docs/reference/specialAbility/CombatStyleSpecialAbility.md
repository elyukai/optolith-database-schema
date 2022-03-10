# Combat Style Special Ability

## Definitions

### <a name="CombatStyleSpecialAbility"></a> Combat Style Special Ability (`CombatStyleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#CombatStyleSpecialAbility/levels">See details</a>
`usage_type` |  | <a href="#CombatStyleSpecialAbility/usage_type">See details</a>
`type` | Is this an armed or unarmed combat style? | <a href="#CombatStyleSpecialAbility/type">See details</a>
`skill_applications?` |  | <a href="#CombatStyleSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#CombatStyleSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#CombatStyleSpecialAbility/maximum">See details</a>
`advanced` |  | <a href="#CombatStyleSpecialAbility/advanced">See details</a>
`prerequisites?` |  | <a href="#CombatStyleSpecialAbility/prerequisites">See details</a>
`combat_techniques` |  | <a href="#CombatStyleSpecialAbility/combat_techniques">See details</a>
`ap_value` |  | <a href="#CombatStyleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#CombatStyleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CombatStyleSpecialAbility/translations">See details</a>

#### <a name="CombatStyleSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="CombatStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="CombatStyleSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="../_Activatable.md#CombatSpecialAbilityType">CombatSpecialAbilityType</a>

#### <a name="CombatStyleSpecialAbility/type"></a> `type`

Is this an armed or unarmed combat style?

- **Type:** Union
- **Cases:** <a href="#CombatStyleSpecialAbility/type'Armed">CombatStyleSpecialAbility/type'Armed</a> | <a href="#CombatStyleSpecialAbility/type'Unarmed">CombatStyleSpecialAbility/type'Unarmed</a>

#### <a name="CombatStyleSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="CombatStyleSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="CombatStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="CombatStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** <a href="../_Activatable.md#AdvancedSpecialAbilities">AdvancedSpecialAbilities</a>

#### <a name="CombatStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="CombatStyleSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="../_Activatable.md#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="CombatStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CombatStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CombatStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CombatStyleSpecialAbility/translations[key]">CombatStyleSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CombatStyleSpecialAbility/type'Armed"></a> `CombatStyleSpecialAbility/type'Armed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/type'Armed/tag">See details</a>

#### <a name="CombatStyleSpecialAbility/type'Armed/tag"></a> `tag`

- **Constant:** `"Armed"`

---

### <a name="CombatStyleSpecialAbility/type'Unarmed"></a> `CombatStyleSpecialAbility/type'Unarmed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/type'Unarmed/tag">See details</a>

#### <a name="CombatStyleSpecialAbility/type'Unarmed/tag"></a> `tag`

- **Constant:** `"Unarmed"`

---

### <a name="CombatStyleSpecialAbility/translations[key]"></a> `CombatStyleSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#CombatStyleSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#CombatStyleSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#CombatStyleSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#CombatStyleSpecialAbility/translations[key]/errata">See details</a>

#### <a name="CombatStyleSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="CombatStyleSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="CombatStyleSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="CombatStyleSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

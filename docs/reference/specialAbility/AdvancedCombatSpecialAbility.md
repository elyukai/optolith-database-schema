# Advanced Combat Special Ability

## Definitions

### <a name="AdvancedCombatSpecialAbility"></a> Advanced Combat Special Ability (`AdvancedCombatSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#AdvancedCombatSpecialAbility/id">See details</a>
`levels?` |  | <a href="#AdvancedCombatSpecialAbility/levels">See details</a>
`usage_type` |  | <a href="#AdvancedCombatSpecialAbility/usage_type">See details</a>
`skill_applications?` |  | <a href="#AdvancedCombatSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#AdvancedCombatSpecialAbility/skill_uses">See details</a>
`combat_techniques` |  | <a href="#AdvancedCombatSpecialAbility/combat_techniques">See details</a>
`ap_value` |  | <a href="#AdvancedCombatSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#AdvancedCombatSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvancedCombatSpecialAbility/translations">See details</a>

#### <a name="AdvancedCombatSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="AdvancedCombatSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="AdvancedCombatSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="#CombatSpecialAbilityType">CombatSpecialAbilityType</a>

#### <a name="AdvancedCombatSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="AdvancedCombatSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="AdvancedCombatSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="AdvancedCombatSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="AdvancedCombatSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AdvancedCombatSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvancedCombatSpecialAbility/translations[key]">AdvancedCombatSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvancedCombatSpecialAbility/translations[key]"></a> `AdvancedCombatSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#AdvancedCombatSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#AdvancedCombatSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#AdvancedCombatSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#AdvancedCombatSpecialAbility/translations[key]/errata">See details</a>

#### <a name="AdvancedCombatSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="AdvancedCombatSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="AdvancedCombatSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="AdvancedCombatSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

# Skill Style Special Ability

## Definitions

### <a name="SkillStyleSpecialAbility"></a> Skill Style Special Ability (`SkillStyleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#SkillStyleSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#SkillStyleSpecialAbility/select_options">See details</a>
`maximum?` |  | <a href="#SkillStyleSpecialAbility/maximum">See details</a>
`advanced` |  | <a href="#SkillStyleSpecialAbility/advanced">See details</a>
`prerequisites?` |  | <a href="#SkillStyleSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#SkillStyleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#SkillStyleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillStyleSpecialAbility/translations">See details</a>

#### <a name="SkillStyleSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="SkillStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="SkillStyleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="SkillStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="SkillStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** <a href="#AdvancedSpecialAbilities">AdvancedSpecialAbilities</a>&lt;<a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>&gt;

#### <a name="SkillStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="SkillStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="SkillStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="SkillStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SkillStyleSpecialAbilityTranslation">SkillStyleSpecialAbilityTranslation</a>&gt;

---

### <a name="SkillStyleSpecialAbilityTranslation"></a> `SkillStyleSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#SkillStyleSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#SkillStyleSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#SkillStyleSpecialAbilityTranslation/rules">See details</a>
`errata?` |  | <a href="#SkillStyleSpecialAbilityTranslation/errata">See details</a>

#### <a name="SkillStyleSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="SkillStyleSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="SkillStyleSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="SkillStyleSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

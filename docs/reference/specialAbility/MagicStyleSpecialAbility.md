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

- **Type:** <a href="#Id">Id</a>

#### <a name="MagicStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="MagicStyleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="MagicStyleSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="MagicStyleSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="MagicStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="MagicStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** <a href="#AdvancedSpecialAbilities">AdvancedSpecialAbilities</a>&lt;<a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>&gt;

#### <a name="MagicStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="MagicStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="MagicStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#MagicStyleSpecialAbilityTranslation">MagicStyleSpecialAbilityTranslation</a>&gt;

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

- **Type:** <a href="#Name">Name</a>

#### <a name="MagicStyleSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="MagicStyleSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="MagicStyleSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

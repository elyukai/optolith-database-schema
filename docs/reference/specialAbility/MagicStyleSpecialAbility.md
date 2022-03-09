# Magic Style Special Ability

## Definitions

### <a name="MagicStyleSpecialAbility"></a> Magic Style Special Ability (`MagicStyleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#MagicStyleSpecialAbility/levels">See details</a>
`skill_applications?` |  | <a href="#MagicStyleSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#MagicStyleSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#MagicStyleSpecialAbility/maximum">See details</a>
`advanced` |  | <a href="#MagicStyleSpecialAbility/advanced">See details</a>
`ap_value` |  | <a href="#MagicStyleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#MagicStyleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicStyleSpecialAbility/translations">See details</a>

#### <a name="MagicStyleSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="MagicStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="MagicStyleSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="MagicStyleSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="MagicStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="MagicStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** <a href="../_Activatable.md#AdvancedSpecialAbilities">AdvancedSpecialAbilities</a>

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

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#MagicStyleSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#MagicStyleSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#MagicStyleSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#MagicStyleSpecialAbility/translations[key]/errata">See details</a>

#### <a name="MagicStyleSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="MagicStyleSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="MagicStyleSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="MagicStyleSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

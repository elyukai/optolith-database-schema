# Liturgical Style Special Ability

## Definitions

### <a name="LiturgicalStyleSpecialAbility"></a> Liturgical Style Special Ability (`LiturgicalStyleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#LiturgicalStyleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#LiturgicalStyleSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#LiturgicalStyleSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#LiturgicalStyleSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#LiturgicalStyleSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#LiturgicalStyleSpecialAbility/maximum">See details</a>
`advanced` |  | <a href="#LiturgicalStyleSpecialAbility/advanced">See details</a>
`prerequisites?` |  | <a href="#LiturgicalStyleSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#LiturgicalStyleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#LiturgicalStyleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LiturgicalStyleSpecialAbility/translations">See details</a>

#### <a name="LiturgicalStyleSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="LiturgicalStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="LiturgicalStyleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="LiturgicalStyleSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="LiturgicalStyleSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="LiturgicalStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="LiturgicalStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** <a href="../_Activatable.md#AdvancedSpecialAbilities">AdvancedSpecialAbilities</a>

#### <a name="LiturgicalStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="LiturgicalStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="LiturgicalStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="LiturgicalStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LiturgicalStyleSpecialAbility/translations[key]">LiturgicalStyleSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LiturgicalStyleSpecialAbility/translations[key]"></a> `LiturgicalStyleSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#LiturgicalStyleSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#LiturgicalStyleSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#LiturgicalStyleSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#LiturgicalStyleSpecialAbility/translations[key]/errata">See details</a>

#### <a name="LiturgicalStyleSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="LiturgicalStyleSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="LiturgicalStyleSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="LiturgicalStyleSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

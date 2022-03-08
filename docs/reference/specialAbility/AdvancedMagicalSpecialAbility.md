# Advanced Magical Special Ability

## Definitions

### <a name="AdvancedMagicalSpecialAbility"></a> Advanced Magical Special Ability (`AdvancedMagicalSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#AdvancedMagicalSpecialAbility/id">See details</a>
`levels?` |  | <a href="#AdvancedMagicalSpecialAbility/levels">See details</a>
`skill_applications?` |  | <a href="#AdvancedMagicalSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#AdvancedMagicalSpecialAbility/skill_uses">See details</a>
`ap_value` |  | <a href="#AdvancedMagicalSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#AdvancedMagicalSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvancedMagicalSpecialAbility/translations">See details</a>

#### <a name="AdvancedMagicalSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="AdvancedMagicalSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="AdvancedMagicalSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="AdvancedMagicalSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="AdvancedMagicalSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="AdvancedMagicalSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AdvancedMagicalSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvancedMagicalSpecialAbility/translations[key]">AdvancedMagicalSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvancedMagicalSpecialAbility/translations[key]"></a> `AdvancedMagicalSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#AdvancedMagicalSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#AdvancedMagicalSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#AdvancedMagicalSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#AdvancedMagicalSpecialAbility/translations[key]/errata">See details</a>

#### <a name="AdvancedMagicalSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="AdvancedMagicalSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="AdvancedMagicalSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="AdvancedMagicalSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

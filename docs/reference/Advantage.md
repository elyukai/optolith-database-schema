# Advantage

## Definitions

### <a name="Advantage"></a> Advantage (`Advantage`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#Advantage/id">See details</a>
`levels?` |  | <a href="#Advantage/levels">See details</a>
`select_options?` |  | <a href="#Advantage/select_options">See details</a>
`skill_applications?` |  | <a href="#Advantage/skill_applications">See details</a>
`skill_uses?` |  | <a href="#Advantage/skill_uses">See details</a>
`maximum?` |  | <a href="#Advantage/maximum">See details</a>
`prerequisites?` |  | <a href="#Advantage/prerequisites">See details</a>
`ap_value` |  | <a href="#Advantage/ap_value">See details</a>
`has_no_maximum_spent_influence?` | Does this advantage not count towards the maximum of AP to be spent on advantages? | <a href="#Advantage/has_no_maximum_spent_influence">See details</a>
`is_exclusive_to_arcane_spellworks?` | Does this advantage exclusively applies to arcane spellworks but not to magical actions and applications? | <a href="#Advantage/is_exclusive_to_arcane_spellworks">See details</a>
`src` |  | <a href="#Advantage/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Advantage/translations">See details</a>

#### <a name="Advantage/id"></a> `id`

- **Type:** <a href="./_Activatable.md#Id">Id</a>

#### <a name="Advantage/levels"></a> `levels?`

- **Type:** <a href="./_Activatable.md#Levels">Levels</a>

#### <a name="Advantage/select_options"></a> `select_options?`

- **Type:** <a href="./_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="Advantage/skill_applications"></a> `skill_applications?`

- **Type:** <a href="./_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="Advantage/skill_uses"></a> `skill_uses?`

- **Type:** <a href="./_Activatable.md#SkillUses">SkillUses</a>

#### <a name="Advantage/maximum"></a> `maximum?`

- **Type:** <a href="./_Activatable.md#Maximum">Maximum</a>

#### <a name="Advantage/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#AdvantageDisadvantagePrerequisites">AdvantageDisadvantagePrerequisites</a>

#### <a name="Advantage/ap_value"></a> `ap_value`

- **Type:** <a href="./_Activatable.md#AdventurePointsValueAdvantagesDisadvantages">AdventurePointsValueAdvantagesDisadvantages</a>

#### <a name="Advantage/has_no_maximum_spent_influence"></a> `has_no_maximum_spent_influence?`

Does this advantage not count towards the maximum of AP to be spent
on advantages?

- **Constant:** `true`

#### <a name="Advantage/is_exclusive_to_arcane_spellworks"></a> `is_exclusive_to_arcane_spellworks?`

Does this advantage exclusively applies to arcane spellworks but not
to magical actions and applications?

- **Constant:** `true`

#### <a name="Advantage/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Advantage/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Advantage/translations[key]">Advantage/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Advantage/translations[key]"></a> `Advantage/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#Advantage/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#Advantage/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#Advantage/translations[key]/rules">See details</a>
`range?` | The range. | <a href="#Advantage/translations[key]/range">See details</a>
`errata?` |  | <a href="#Advantage/translations[key]/errata">See details</a>

#### <a name="Advantage/translations[key]/name"></a> `name`

- **Type:** <a href="./_Activatable.md#Name">Name</a>

#### <a name="Advantage/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="./_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="Advantage/translations[key]/rules"></a> `rules`

- **Type:** <a href="./_Activatable.md#Rules">Rules</a>

#### <a name="Advantage/translations[key]/range"></a> `range?`

The range.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Advantage/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

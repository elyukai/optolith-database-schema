# Ceremony

## Definitions

### <a name="Ceremony"></a> Ceremony (`Ceremony`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The ceremony's identifier. An unique, increasing integer. | <a href="#Ceremony/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#Ceremony/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#Ceremony/check_penalty">See details</a>
`parameters` | Measurable parameters of a ceremony. | <a href="#Ceremony/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#Ceremony/target">See details</a>
`traditions` | The tradition(s) the ceremony is available for. Note that general aspects do not have an associated tradition and thus need to be defined in a special way. | <a href="#Ceremony/traditions">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#Ceremony/improvement_cost">See details</a>
`prerequisites?` |  | <a href="#Ceremony/prerequisites">See details</a>
`src` |  | <a href="#Ceremony/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Ceremony/translations">See details</a>
`enhancements?` |  | <a href="#Ceremony/enhancements">See details</a>

#### <a name="Ceremony/id"></a> `id`

The ceremony's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Ceremony/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="Ceremony/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="./_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="Ceremony/parameters"></a> `parameters`

Measurable parameters of a ceremony.

- **Type:** <a href="./_ActivatableSkill.md#SlowPerformanceParameters">SlowPerformanceParameters</a>

#### <a name="Ceremony/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="./_ActivatableSkillTargetCategory.md#TargetCategory">TargetCategory</a>

#### <a name="Ceremony/traditions"></a> `traditions`

The tradition(s) the ceremony is available for. Note that general aspects
do not have an associated tradition and thus need to be defined in a
special way.

- **Type:** List
- **Items:** <a href="#Ceremony/traditions[]">Ceremony/traditions[]</a>
- **Minimum Items:** `1`

#### <a name="Ceremony/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="Ceremony/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#LiturgyPrerequisites">LiturgyPrerequisites</a>

#### <a name="Ceremony/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Ceremony/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Ceremony/translations[key]">Ceremony/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

#### <a name="Ceremony/enhancements"></a> `enhancements?`

- **Type:** <a href="./_Enhancements.md#Enhancements">Enhancements</a>

---

### <a name="Ceremony/traditions[]"></a> `Ceremony/traditions[]`

- **Type:** <a href="./_Blessed.md#SkillTradition">SkillTradition</a>

---

### <a name="Ceremony/translations[key]"></a> `Ceremony/translations[key]`

- **Type:** <a href="#CeremonyTranslation">CeremonyTranslation</a>

---

### <a name="CeremonyTranslation"></a> `CeremonyTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the ceremony. | <a href="#CeremonyTranslation/name">See details</a>
`name_compressed?` | A compressed name of the ceremony for use in small areas (e.g. on character sheet). Should only be defined if the `name` does not fit on character sheet. | <a href="#CeremonyTranslation/name_compressed">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#CeremonyTranslation/effect">See details</a>
`casting_time` |  | <a href="#CeremonyTranslation/casting_time">See details</a>
`cost` |  | <a href="#CeremonyTranslation/cost">See details</a>
`range` |  | <a href="#CeremonyTranslation/range">See details</a>
`duration` |  | <a href="#CeremonyTranslation/duration">See details</a>
`target` |  | <a href="#CeremonyTranslation/target">See details</a>
`errata?` |  | <a href="#CeremonyTranslation/errata">See details</a>

#### <a name="CeremonyTranslation/name"></a> `name`

The name of the ceremony.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CeremonyTranslation/name_compressed"></a> `name_compressed?`

A compressed name of the ceremony for use in small areas (e.g. on
character sheet). Should only be defined if the `name` does not fit on
character sheet.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CeremonyTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="./_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="CeremonyTranslation/casting_time"></a> `casting_time`

- **Type:** <a href="#CeremonyTranslation/casting_time">Object</a>

#### <a name="CeremonyTranslation/cost"></a> `cost`

- **Type:** <a href="#CeremonyTranslation/cost">Object</a>

#### <a name="CeremonyTranslation/range"></a> `range`

- **Type:** <a href="#CeremonyTranslation/range">Object</a>

#### <a name="CeremonyTranslation/duration"></a> `duration`

- **Type:** <a href="#CeremonyTranslation/duration">Object</a>

#### <a name="CeremonyTranslation/target"></a> `target`

- **Type:** String

#### <a name="CeremonyTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="CeremonyTranslation/casting_time"></a> `CeremonyTranslation/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#CeremonyTranslation/casting_time/full">See details</a>
`abbr` |  | <a href="#CeremonyTranslation/casting_time/abbr">See details</a>

#### <a name="CeremonyTranslation/casting_time/full"></a> `full`

- **Type:** String

#### <a name="CeremonyTranslation/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="CeremonyTranslation/cost"></a> `CeremonyTranslation/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#CeremonyTranslation/cost/full">See details</a>
`abbr` |  | <a href="#CeremonyTranslation/cost/abbr">See details</a>

#### <a name="CeremonyTranslation/cost/full"></a> `full`

- **Type:** String

#### <a name="CeremonyTranslation/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="CeremonyTranslation/range"></a> `CeremonyTranslation/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#CeremonyTranslation/range/full">See details</a>
`abbr` |  | <a href="#CeremonyTranslation/range/abbr">See details</a>

#### <a name="CeremonyTranslation/range/full"></a> `full`

- **Type:** String

#### <a name="CeremonyTranslation/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="CeremonyTranslation/duration"></a> `CeremonyTranslation/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#CeremonyTranslation/duration/full">See details</a>
`abbr` |  | <a href="#CeremonyTranslation/duration/abbr">See details</a>

#### <a name="CeremonyTranslation/duration/full"></a> `full`

- **Type:** String

#### <a name="CeremonyTranslation/duration/abbr"></a> `abbr`

- **Type:** String

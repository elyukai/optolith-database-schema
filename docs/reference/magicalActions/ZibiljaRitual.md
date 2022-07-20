# Zibilja Ritual

## Definitions

### <a name="ZibiljaRitual"></a> Zibilja Ritual (`ZibiljaRitual`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The zibilja ritual's identifier. An unique, increasing integer. | <a href="#ZibiljaRitual/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#ZibiljaRitual/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#ZibiljaRitual/check_penalty">See details</a>
`parameters` | Measurable parameters of a zibilja ritual. | <a href="#ZibiljaRitual/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#ZibiljaRitual/target">See details</a>
`property` | The associated property. | <a href="#ZibiljaRitual/property">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#ZibiljaRitual/improvement_cost">See details</a>
`src` |  | <a href="#ZibiljaRitual/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ZibiljaRitual/translations">See details</a>

#### <a name="ZibiljaRitual/id"></a> `id`

The zibilja ritual's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ZibiljaRitual/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="ZibiljaRitual/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="../_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="ZibiljaRitual/parameters"></a> `parameters`

Measurable parameters of a zibilja ritual.

- **Type:** <a href="#ZibiljaRitualPerformanceParameters">ZibiljaRitualPerformanceParameters</a>

#### <a name="ZibiljaRitual/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="../_ActivatableSkillTargetCategory.md#TargetCategory">TargetCategory</a>

#### <a name="ZibiljaRitual/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="ZibiljaRitual/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="ZibiljaRitual/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ZibiljaRitual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ZibiljaRitual/translations[key]">ZibiljaRitual/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ZibiljaRitual/translations[key]"></a> `ZibiljaRitual/translations[key]`

- **Type:** <a href="#ZibiljaRitualTranslation">ZibiljaRitualTranslation</a>

---

### <a name="ZibiljaRitualTranslation"></a> `ZibiljaRitualTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the zibilja ritual. | <a href="#ZibiljaRitualTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#ZibiljaRitualTranslation/effect">See details</a>
`casting_time` |  | <a href="#ZibiljaRitualTranslation/casting_time">See details</a>
`cost` |  | <a href="#ZibiljaRitualTranslation/cost">See details</a>
`range` |  | <a href="#ZibiljaRitualTranslation/range">See details</a>
`duration` |  | <a href="#ZibiljaRitualTranslation/duration">See details</a>
`target` |  | <a href="#ZibiljaRitualTranslation/target">See details</a>
`errata?` |  | <a href="#ZibiljaRitualTranslation/errata">See details</a>

#### <a name="ZibiljaRitualTranslation/name"></a> `name`

The name of the zibilja ritual.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ZibiljaRitualTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="ZibiljaRitualTranslation/casting_time"></a> `casting_time`

- **Type:** <a href="#ZibiljaRitualTranslation/casting_time">Object</a>

#### <a name="ZibiljaRitualTranslation/cost"></a> `cost`

- **Type:** <a href="#ZibiljaRitualTranslation/cost">Object</a>

#### <a name="ZibiljaRitualTranslation/range"></a> `range`

- **Type:** <a href="#ZibiljaRitualTranslation/range">Object</a>

#### <a name="ZibiljaRitualTranslation/duration"></a> `duration`

- **Type:** <a href="#ZibiljaRitualTranslation/duration">Object</a>

#### <a name="ZibiljaRitualTranslation/target"></a> `target`

- **Type:** String

#### <a name="ZibiljaRitualTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="ZibiljaRitualTranslation/casting_time"></a> `ZibiljaRitualTranslation/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#ZibiljaRitualTranslation/casting_time/full">See details</a>
`abbr` |  | <a href="#ZibiljaRitualTranslation/casting_time/abbr">See details</a>

#### <a name="ZibiljaRitualTranslation/casting_time/full"></a> `full`

- **Type:** String

#### <a name="ZibiljaRitualTranslation/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="ZibiljaRitualTranslation/cost"></a> `ZibiljaRitualTranslation/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#ZibiljaRitualTranslation/cost/full">See details</a>
`abbr` |  | <a href="#ZibiljaRitualTranslation/cost/abbr">See details</a>

#### <a name="ZibiljaRitualTranslation/cost/full"></a> `full`

- **Type:** String

#### <a name="ZibiljaRitualTranslation/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="ZibiljaRitualTranslation/range"></a> `ZibiljaRitualTranslation/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#ZibiljaRitualTranslation/range/full">See details</a>
`abbr` |  | <a href="#ZibiljaRitualTranslation/range/abbr">See details</a>

#### <a name="ZibiljaRitualTranslation/range/full"></a> `full`

- **Type:** String

#### <a name="ZibiljaRitualTranslation/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="ZibiljaRitualTranslation/duration"></a> `ZibiljaRitualTranslation/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#ZibiljaRitualTranslation/duration/full">See details</a>
`abbr` |  | <a href="#ZibiljaRitualTranslation/duration/abbr">See details</a>

#### <a name="ZibiljaRitualTranslation/duration/full"></a> `full`

- **Type:** String

#### <a name="ZibiljaRitualTranslation/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="ZibiljaRitualPerformanceParameters"></a> `ZibiljaRitualPerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` |  | <a href="#ZibiljaRitualPerformanceParameters/casting_time">See details</a>
`cost` |  | <a href="#ZibiljaRitualPerformanceParameters/cost">See details</a>
`range` |  | <a href="#ZibiljaRitualPerformanceParameters/range">See details</a>
`duration` |  | <a href="#ZibiljaRitualPerformanceParameters/duration">See details</a>

#### <a name="ZibiljaRitualPerformanceParameters/casting_time"></a> `casting_time`

- **Type:** Union
- **Cases:** <a href="#ZibiljaRitualPerformanceParameters/casting_time'Modifiable">ZibiljaRitualPerformanceParameters/casting_time'Modifiable</a> | <a href="#ZibiljaRitualPerformanceParameters/casting_time'NonModifiable">ZibiljaRitualPerformanceParameters/casting_time'NonModifiable</a>

#### <a name="ZibiljaRitualPerformanceParameters/cost"></a> `cost`

- **Type:** <a href="./_ActivatableSkillCost.md#OneTimeCost">OneTimeCost</a>

#### <a name="ZibiljaRitualPerformanceParameters/range"></a> `range`

- **Type:** <a href="./_ActivatableSkillRange.md#Range">Range</a>

#### <a name="ZibiljaRitualPerformanceParameters/duration"></a> `duration`

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationForOneTime">DurationForOneTime</a>

---

### <a name="ZibiljaRitualPerformanceParameters/casting_time'Modifiable"></a> `ZibiljaRitualPerformanceParameters/casting_time'Modifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ZibiljaRitualPerformanceParameters/casting_time'Modifiable/tag">See details</a>
`modifiable` |  | <a href="#ZibiljaRitualPerformanceParameters/casting_time'Modifiable/modifiable">See details</a>

#### <a name="ZibiljaRitualPerformanceParameters/casting_time'Modifiable/tag"></a> `tag`

- **Constant:** `"Modifiable"`

#### <a name="ZibiljaRitualPerformanceParameters/casting_time'Modifiable/modifiable"></a> `modifiable`

- **Type:** <a href="../_ActivatableSkillCastingTime.md#ModifiableCastingTime">ModifiableCastingTime</a>

---

### <a name="ZibiljaRitualPerformanceParameters/casting_time'NonModifiable"></a> `ZibiljaRitualPerformanceParameters/casting_time'NonModifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ZibiljaRitualPerformanceParameters/casting_time'NonModifiable/tag">See details</a>
`non_modifiable` |  | <a href="#ZibiljaRitualPerformanceParameters/casting_time'NonModifiable/non_modifiable">See details</a>

#### <a name="ZibiljaRitualPerformanceParameters/casting_time'NonModifiable/tag"></a> `tag`

- **Constant:** `"NonModifiable"`

#### <a name="ZibiljaRitualPerformanceParameters/casting_time'NonModifiable/non_modifiable"></a> `non_modifiable`

- **Type:** <a href="../_ActivatableSkillCastingTime.md#SlowSkillNonModifiableCastingTime">SlowSkillNonModifiableCastingTime</a>

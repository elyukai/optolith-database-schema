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
`property_id` | The property's identifier. | <a href="#ZibiljaRitual/property_id">See details</a>
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

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="ZibiljaRitual/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="../_ActivatableSkill.md#TargetCategory/T">TargetCategory/T</a>

#### <a name="ZibiljaRitual/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

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

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the zibilja ritual. | <a href="#ZibiljaRitual/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#ZibiljaRitual/translations[key]/effect">See details</a>
`casting_time` |  | <a href="#ZibiljaRitual/translations[key]/casting_time">See details</a>
`cost` |  | <a href="#ZibiljaRitual/translations[key]/cost">See details</a>
`range` |  | <a href="#ZibiljaRitual/translations[key]/range">See details</a>
`duration` |  | <a href="#ZibiljaRitual/translations[key]/duration">See details</a>
`target` |  | <a href="#ZibiljaRitual/translations[key]/target">See details</a>
`errata?` |  | <a href="#ZibiljaRitual/translations[key]/errata">See details</a>

#### <a name="ZibiljaRitual/translations[key]/name"></a> `name`

The name of the zibilja ritual.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ZibiljaRitual/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="ZibiljaRitual/translations[key]/casting_time"></a> `casting_time`

- **Type:** <a href="#ZibiljaRitual/translations[key]/casting_time">Object</a>

#### <a name="ZibiljaRitual/translations[key]/cost"></a> `cost`

- **Type:** <a href="#ZibiljaRitual/translations[key]/cost">Object</a>

#### <a name="ZibiljaRitual/translations[key]/range"></a> `range`

- **Type:** <a href="#ZibiljaRitual/translations[key]/range">Object</a>

#### <a name="ZibiljaRitual/translations[key]/duration"></a> `duration`

- **Type:** <a href="#ZibiljaRitual/translations[key]/duration">Object</a>

#### <a name="ZibiljaRitual/translations[key]/target"></a> `target`

- **Type:** String

#### <a name="ZibiljaRitual/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="ZibiljaRitual/translations[key]/casting_time"></a> `ZibiljaRitual/translations[key]/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#ZibiljaRitual/translations[key]/casting_time/full">See details</a>
`abbr` |  | <a href="#ZibiljaRitual/translations[key]/casting_time/abbr">See details</a>

#### <a name="ZibiljaRitual/translations[key]/casting_time/full"></a> `full`

- **Type:** String

#### <a name="ZibiljaRitual/translations[key]/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="ZibiljaRitual/translations[key]/cost"></a> `ZibiljaRitual/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#ZibiljaRitual/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#ZibiljaRitual/translations[key]/cost/abbr">See details</a>

#### <a name="ZibiljaRitual/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="ZibiljaRitual/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="ZibiljaRitual/translations[key]/range"></a> `ZibiljaRitual/translations[key]/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#ZibiljaRitual/translations[key]/range/full">See details</a>
`abbr` |  | <a href="#ZibiljaRitual/translations[key]/range/abbr">See details</a>

#### <a name="ZibiljaRitual/translations[key]/range/full"></a> `full`

- **Type:** String

#### <a name="ZibiljaRitual/translations[key]/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="ZibiljaRitual/translations[key]/duration"></a> `ZibiljaRitual/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#ZibiljaRitual/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#ZibiljaRitual/translations[key]/duration/abbr">See details</a>

#### <a name="ZibiljaRitual/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="ZibiljaRitual/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` |  | <a href="#PerformanceParameters/casting_time">See details</a>
`cost` |  | <a href="#PerformanceParameters/cost">See details</a>
`range` |  | <a href="#PerformanceParameters/range">See details</a>
`duration` |  | <a href="#PerformanceParameters/duration">See details</a>

#### <a name="PerformanceParameters/casting_time"></a> `casting_time`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/casting_time'ModifiableCastingTime">PerformanceParameters/casting_time'ModifiableCastingTime</a> | <a href="#PerformanceParameters/casting_time'SlowSkillCastingTime">PerformanceParameters/casting_time'SlowSkillCastingTime</a>

#### <a name="PerformanceParameters/cost"></a> `cost`

- **Type:** <a href="../_ActivatableSkill.md#Cost/OneTime/T">Cost/OneTime/T</a>

#### <a name="PerformanceParameters/range"></a> `range`

- **Type:** <a href="../_ActivatableSkill.md#Range/T">Range/T</a>

#### <a name="PerformanceParameters/duration"></a> `duration`

- **Type:** <a href="../_ActivatableSkill.md#Duration/OneTime/T">Duration/OneTime/T</a>

---

### <a name="PerformanceParameters/casting_time'ModifiableCastingTime"></a> `PerformanceParameters/casting_time'ModifiableCastingTime`

- **Type:** <a href="../_ActivatableSkill.md#CastingTime/ModifiableCastingTime">CastingTime/ModifiableCastingTime</a>

---

### <a name="PerformanceParameters/casting_time'SlowSkillCastingTime"></a> `PerformanceParameters/casting_time'SlowSkillCastingTime`

- **Type:** <a href="../_ActivatableSkill.md#CastingTime/SlowSkillCastingTime">CastingTime/SlowSkillCastingTime</a>

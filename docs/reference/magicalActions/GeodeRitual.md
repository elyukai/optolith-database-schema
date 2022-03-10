# Geode Ritual

## Definitions

### <a name="GeodeRitual"></a> Geode Ritual (`GeodeRitual`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The geode ritual's identifier. An unique, increasing integer. | <a href="#GeodeRitual/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#GeodeRitual/check">See details</a>
`parameters` | Measurable parameters of a geode ritual. | <a href="#GeodeRitual/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#GeodeRitual/target">See details</a>
`property_id` | The property's identifier. | <a href="#GeodeRitual/property_id">See details</a>
`prerequisites?` |  | <a href="#GeodeRitual/prerequisites">See details</a>
`src` |  | <a href="#GeodeRitual/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeodeRitual/translations">See details</a>

#### <a name="GeodeRitual/id"></a> `id`

The geode ritual's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="GeodeRitual/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="GeodeRitual/parameters"></a> `parameters`

Measurable parameters of a geode ritual.

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="GeodeRitual/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="../_ActivatableSkill.md#TargetCategory/T">TargetCategory/T</a>

#### <a name="GeodeRitual/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="GeodeRitual/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeodeRitualPrerequisites">GeodeRitualPrerequisites</a>

#### <a name="GeodeRitual/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="GeodeRitual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeodeRitual/translations[key]">GeodeRitual/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeodeRitual/translations[key]"></a> `GeodeRitual/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the geode ritual. | <a href="#GeodeRitual/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#GeodeRitual/translations[key]/effect">See details</a>
`casting_time` |  | <a href="#GeodeRitual/translations[key]/casting_time">See details</a>
`cost` |  | <a href="#GeodeRitual/translations[key]/cost">See details</a>
`range` |  | <a href="#GeodeRitual/translations[key]/range">See details</a>
`duration` |  | <a href="#GeodeRitual/translations[key]/duration">See details</a>
`target` |  | <a href="#GeodeRitual/translations[key]/target">See details</a>
`errata?` |  | <a href="#GeodeRitual/translations[key]/errata">See details</a>

#### <a name="GeodeRitual/translations[key]/name"></a> `name`

The name of the geode ritual.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="GeodeRitual/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="GeodeRitual/translations[key]/casting_time"></a> `casting_time`

- **Type:** <a href="#GeodeRitual/translations[key]/casting_time">Object</a>

#### <a name="GeodeRitual/translations[key]/cost"></a> `cost`

- **Type:** <a href="#GeodeRitual/translations[key]/cost">Object</a>

#### <a name="GeodeRitual/translations[key]/range"></a> `range`

- **Type:** <a href="#GeodeRitual/translations[key]/range">Object</a>

#### <a name="GeodeRitual/translations[key]/duration"></a> `duration`

- **Type:** <a href="#GeodeRitual/translations[key]/duration">Object</a>

#### <a name="GeodeRitual/translations[key]/target"></a> `target`

- **Type:** String

#### <a name="GeodeRitual/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="GeodeRitual/translations[key]/casting_time"></a> `GeodeRitual/translations[key]/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#GeodeRitual/translations[key]/casting_time/full">See details</a>
`abbr` |  | <a href="#GeodeRitual/translations[key]/casting_time/abbr">See details</a>

#### <a name="GeodeRitual/translations[key]/casting_time/full"></a> `full`

- **Type:** String

#### <a name="GeodeRitual/translations[key]/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="GeodeRitual/translations[key]/cost"></a> `GeodeRitual/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#GeodeRitual/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#GeodeRitual/translations[key]/cost/abbr">See details</a>

#### <a name="GeodeRitual/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="GeodeRitual/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="GeodeRitual/translations[key]/range"></a> `GeodeRitual/translations[key]/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#GeodeRitual/translations[key]/range/full">See details</a>
`abbr` |  | <a href="#GeodeRitual/translations[key]/range/abbr">See details</a>

#### <a name="GeodeRitual/translations[key]/range/full"></a> `full`

- **Type:** String

#### <a name="GeodeRitual/translations[key]/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="GeodeRitual/translations[key]/duration"></a> `GeodeRitual/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#GeodeRitual/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#GeodeRitual/translations[key]/duration/abbr">See details</a>

#### <a name="GeodeRitual/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="GeodeRitual/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a geode ritual.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` | The casting time. | <a href="#PerformanceParameters/casting_time">See details</a>
`cost` | The AE cost. | <a href="#PerformanceParameters/cost">See details</a>
`range` | The range. | <a href="#PerformanceParameters/range">See details</a>
`duration` | The duration. | <a href="#PerformanceParameters/duration">See details</a>

#### <a name="PerformanceParameters/casting_time"></a> `casting_time`

The casting time.

- **Type:** <a href="#PerformanceParameters/casting_time">Object</a>

#### <a name="PerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/cost'Fixed">PerformanceParameters/cost'Fixed</a> | <a href="#PerformanceParameters/cost'Map">PerformanceParameters/cost'Map</a>

#### <a name="PerformanceParameters/range"></a> `range`

The range.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/range'Self">PerformanceParameters/range'Self</a> | <a href="#PerformanceParameters/range'Fixed">PerformanceParameters/range'Fixed</a>

#### <a name="PerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration'Immediate">PerformanceParameters/duration'Immediate</a> | <a href="#PerformanceParameters/duration'Fixed">PerformanceParameters/duration'Fixed</a> | <a href="#PerformanceParameters/duration'CheckResultBasedTagged">PerformanceParameters/duration'CheckResultBasedTagged</a>

---

### <a name="PerformanceParameters/casting_time"></a> `PerformanceParameters/casting_time`

The casting time.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) casting time. | <a href="#PerformanceParameters/casting_time/value">See details</a>
`unit` | The casting time unit. | <a href="#PerformanceParameters/casting_time/unit">See details</a>

#### <a name="PerformanceParameters/casting_time/value"></a> `value`

The (unitless) casting time.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters/casting_time/unit"></a> `unit`

The casting time unit.

- **Type:** <a href="../SkillModificationLevel.md#SlowSkillCastingTimeUnit">SlowSkillCastingTimeUnit</a>

---

### <a name="PerformanceParameters/cost'Fixed"></a> `PerformanceParameters/cost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/cost'Fixed/tag">See details</a>
`value` | The AE cost value. | <a href="#PerformanceParameters/cost'Fixed/value">See details</a>

#### <a name="PerformanceParameters/cost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/cost'Fixed/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PerformanceParameters/cost'Map"></a> `PerformanceParameters/cost'Map`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/cost'Map/tag">See details</a>
`map` |  | <a href="#PerformanceParameters/cost'Map/map">See details</a>

#### <a name="PerformanceParameters/cost'Map/tag"></a> `tag`

- **Constant:** `"Map"`

#### <a name="PerformanceParameters/cost'Map/map"></a> `map`

- **Type:** <a href="../_ActivatableSkill.md#Cost/OneTime/Map">Cost/OneTime/Map</a>

---

### <a name="PerformanceParameters/range'Self"></a> `PerformanceParameters/range'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/range'Self/tag">See details</a>

#### <a name="PerformanceParameters/range'Self/tag"></a> `tag`

- **Constant:** `"Self"`

---

### <a name="PerformanceParameters/range'Fixed"></a> `PerformanceParameters/range'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/range'Fixed/tag">See details</a>
`value` | The range in steps/m. | <a href="#PerformanceParameters/range'Fixed/value">See details</a>

#### <a name="PerformanceParameters/range'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/range'Fixed/value"></a> `value`

The range in steps/m.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PerformanceParameters/duration'Immediate"></a> `PerformanceParameters/duration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Immediate/tag">See details</a>

#### <a name="PerformanceParameters/duration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

---

### <a name="PerformanceParameters/duration'Fixed"></a> `PerformanceParameters/duration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Fixed/tag">See details</a>
`value` | The (unitless) duration. | <a href="#PerformanceParameters/duration'Fixed/value">See details</a>
`unit` | The duration unit. | <a href="#PerformanceParameters/duration'Fixed/unit">See details</a>

#### <a name="PerformanceParameters/duration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/duration'Fixed/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="PerformanceParameters/duration'Fixed/unit"></a> `unit`

The duration unit.

- **Type:** <a href="../_ActivatableSkill.md#Duration/Unit">Duration/Unit</a>

---

### <a name="PerformanceParameters/duration'CheckResultBasedTagged"></a> `PerformanceParameters/duration'CheckResultBasedTagged`

- **Type:** <a href="../_ActivatableSkill.md#Duration/CheckResultBasedTagged">Duration/CheckResultBasedTagged</a>

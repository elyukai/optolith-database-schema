# Domination Ritual

## Definitions

### <a name="DominationRitual"></a> Domination Ritual (`DominationRitual`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The domination ritual's identifier. An unique, increasing integer. | <a href="#DominationRitual/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#DominationRitual/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#DominationRitual/check_penalty">See details</a>
`parameters` | Measurable parameters of a curse. | <a href="#DominationRitual/parameters">See details</a>
`property_id` | The property's identifier. | <a href="#DominationRitual/property_id">See details</a>
`src` |  | <a href="#DominationRitual/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DominationRitual/translations">See details</a>

#### <a name="DominationRitual/id"></a> `id`

The domination ritual's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="DominationRitual/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="DominationRitual/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="../_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="DominationRitual/parameters"></a> `parameters`

Measurable parameters of a curse.

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="DominationRitual/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="DominationRitual/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="DominationRitual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DominationRitual/translations[key]">DominationRitual/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DominationRitual/translations[key]"></a> `DominationRitual/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the domination ritual. | <a href="#DominationRitual/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#DominationRitual/translations[key]/effect">See details</a>
`cost` |  | <a href="#DominationRitual/translations[key]/cost">See details</a>
`duration` |  | <a href="#DominationRitual/translations[key]/duration">See details</a>
`errata?` |  | <a href="#DominationRitual/translations[key]/errata">See details</a>

#### <a name="DominationRitual/translations[key]/name"></a> `name`

The name of the domination ritual.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="DominationRitual/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.

- **Type:** <a href="../_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="DominationRitual/translations[key]/cost"></a> `cost`

- **Type:** <a href="#DominationRitual/translations[key]/cost">Object</a>

#### <a name="DominationRitual/translations[key]/duration"></a> `duration`

- **Type:** <a href="#DominationRitual/translations[key]/duration">Object</a>

#### <a name="DominationRitual/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="DominationRitual/translations[key]/cost"></a> `DominationRitual/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#DominationRitual/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#DominationRitual/translations[key]/cost/abbr">See details</a>

#### <a name="DominationRitual/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="DominationRitual/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="DominationRitual/translations[key]/duration"></a> `DominationRitual/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#DominationRitual/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#DominationRitual/translations[key]/duration/abbr">See details</a>

#### <a name="DominationRitual/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="DominationRitual/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a curse.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` |  | <a href="#PerformanceParameters/cost">See details</a>
`duration` |  | <a href="#PerformanceParameters/duration">See details</a>

#### <a name="PerformanceParameters/cost"></a> `cost`

- **Type:** <a href="#PerformanceParameters/cost">Object</a>

#### <a name="PerformanceParameters/duration"></a> `duration`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration'Numeric">PerformanceParameters/duration'Numeric</a> | <a href="#PerformanceParameters/duration'Indefinite">PerformanceParameters/duration'Indefinite</a>

---

### <a name="PerformanceParameters/cost"></a> `PerformanceParameters/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`temporary` | The (temporary) AE cost value. | <a href="#PerformanceParameters/cost/temporary">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/cost/translations">See details</a>

#### <a name="PerformanceParameters/cost/temporary"></a> `temporary`

The (temporary) AE cost value.

- **Type:** <a href="#PerformanceParameters/cost/temporary">Object</a>

#### <a name="PerformanceParameters/cost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/cost/translations[key]">PerformanceParameters/cost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/cost/temporary"></a> `PerformanceParameters/cost/temporary`

The (temporary) AE cost value.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`modification_id` | The skill modification increment identifier/level. | <a href="#PerformanceParameters/cost/temporary/modification_id">See details</a>

#### <a name="PerformanceParameters/cost/temporary/modification_id"></a> `modification_id`

The skill modification increment identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

---

### <a name="PerformanceParameters/cost/translations[key]"></a> `PerformanceParameters/cost/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`additional?` | AE cost in addition to the normal AE cost. | <a href="#PerformanceParameters/cost/translations[key]/additional">See details</a>

#### <a name="PerformanceParameters/cost/translations[key]/additional"></a> `additional?`

AE cost in addition to the normal AE cost.

- **Type:** <a href="#PerformanceParameters/cost/translations[key]/additional">Object</a>

---

### <a name="PerformanceParameters/cost/translations[key]/additional"></a> `PerformanceParameters/cost/translations[key]/additional`

AE cost in addition to the normal AE cost.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full description of where the cost come from. | <a href="#PerformanceParameters/cost/translations[key]/additional/default">See details</a>
`compressed` | A compressed description of where the cost come from for use in small areas (e.g. on character sheet). | <a href="#PerformanceParameters/cost/translations[key]/additional/compressed">See details</a>

#### <a name="PerformanceParameters/cost/translations[key]/additional/default"></a> `default`

The full description of where the cost come from.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters/cost/translations[key]/additional/compressed"></a> `compressed`

A compressed description of where the cost come from for use in small areas (e.g. on character sheet).

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters/duration'Numeric"></a> `PerformanceParameters/duration'Numeric`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Numeric/tag">See details</a>
`check_result?` | If defined, the check result affects the duration in the defined way. | <a href="#PerformanceParameters/duration'Numeric/check_result">See details</a>
`value` | The duration value. If `check_result` is defined and this is `1`, it is used as the unit for the value derived from the check result in rendered text output. | <a href="#PerformanceParameters/duration'Numeric/value">See details</a>

#### <a name="PerformanceParameters/duration'Numeric/tag"></a> `tag`

- **Constant:** `"Numeric"`

#### <a name="PerformanceParameters/duration'Numeric/check_result"></a> `check_result?`

If defined, the check result affects the duration in the defined way.

- **Type:** <a href="../_ActivatableSkill.md#Duration/CheckResult">Duration/CheckResult</a>

#### <a name="PerformanceParameters/duration'Numeric/value"></a> `value`

The duration value. If `check_result` is defined and this is `1`, it is used as the unit for the value derived from the check result in rendered text output.

- **Type:** <a href="../_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

---

### <a name="PerformanceParameters/duration'Indefinite"></a> `PerformanceParameters/duration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Indefinite/tag">See details</a>
`maximum?` | Specified if the duration has a maximum time span. | <a href="#PerformanceParameters/duration'Indefinite/maximum">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/duration'Indefinite/translations">See details</a>

#### <a name="PerformanceParameters/duration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="PerformanceParameters/duration'Indefinite/maximum"></a> `maximum?`

Specified if the duration has a maximum time span.

- **Type:** <a href="#PerformanceParameters/duration'Indefinite/maximum">Object</a>

#### <a name="PerformanceParameters/duration'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/duration'Indefinite/translations[key]">PerformanceParameters/duration'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/duration'Indefinite/maximum"></a> `PerformanceParameters/duration'Indefinite/maximum`

Specified if the duration has a maximum time span.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The duration value. If `check_result` is defined and this is `1`, it is used as the unit for the value derived from the check result in rendered text output. | <a href="#PerformanceParameters/duration'Indefinite/maximum/value">See details</a>
`check_result?` | If defined, the check result affects the duration in the defined way. | <a href="#PerformanceParameters/duration'Indefinite/maximum/check_result">See details</a>

#### <a name="PerformanceParameters/duration'Indefinite/maximum/value"></a> `value`

The duration value. If `check_result` is defined and this is `1`, it is used as the unit for the value derived from the check result in rendered text output.

- **Type:** <a href="../_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

#### <a name="PerformanceParameters/duration'Indefinite/maximum/check_result"></a> `check_result?`

If defined, the check result affects the duration in the defined way.

- **Type:** <a href="../_ActivatableSkill.md#Duration/CheckResult">Duration/CheckResult</a>

---

### <a name="PerformanceParameters/duration'Indefinite/translations[key]"></a> `PerformanceParameters/duration'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#PerformanceParameters/duration'Indefinite/translations[key]/description">See details</a>

#### <a name="PerformanceParameters/duration'Indefinite/translations[key]/description"></a> `description`

A description of the duration.

- **Type:** <a href="#PerformanceParameters/duration'Indefinite/translations[key]/description">Object</a>

---

### <a name="PerformanceParameters/duration'Indefinite/translations[key]/description"></a> `PerformanceParameters/duration'Indefinite/translations[key]/description`

A description of the duration.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full description of the duration. | <a href="#PerformanceParameters/duration'Indefinite/translations[key]/description/default">See details</a>
`compressed` | A compressed description of the duration for use in small areas (e.g. on character sheet). | <a href="#PerformanceParameters/duration'Indefinite/translations[key]/description/compressed">See details</a>

#### <a name="PerformanceParameters/duration'Indefinite/translations[key]/description/default"></a> `default`

The full description of the duration.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters/duration'Indefinite/translations[key]/description/compressed"></a> `compressed`

A compressed description of the duration for use in small areas (e.g. on character sheet).

- **Type:** String
- **Minimum Length:** `1`

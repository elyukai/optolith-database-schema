# Curse

## Definitions

### <a name="Curse"></a> Curse (`Curse`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The curse's identifier. An unique, increasing integer. | <a href="#Curse/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#Curse/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#Curse/check_penalty">See details</a>
`parameters` | Measurable parameters of a curse. | <a href="#Curse/parameters">See details</a>
`property_id` | The property's identifier. | <a href="#Curse/property_id">See details</a>
`src` |  | <a href="#Curse/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Curse/translations">See details</a>

#### <a name="Curse/id"></a> `id`

The curse's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Curse/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="Curse/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="../_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="Curse/parameters"></a> `parameters`

Measurable parameters of a curse.

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="Curse/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Curse/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Curse/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Curse/translations[key]">Curse/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Curse/translations[key]"></a> `Curse/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the curse. | <a href="#Curse/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#Curse/translations[key]/effect">See details</a>
`cost` |  | <a href="#Curse/translations[key]/cost">See details</a>
`duration` |  | <a href="#Curse/translations[key]/duration">See details</a>
`errata?` |  | <a href="#Curse/translations[key]/errata">See details</a>

#### <a name="Curse/translations[key]/name"></a> `name`

The name of the curse.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Curse/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="Curse/translations[key]/cost"></a> `cost`

- **Type:** <a href="#Curse/translations[key]/cost">Object</a>

#### <a name="Curse/translations[key]/duration"></a> `duration`

- **Type:** <a href="#Curse/translations[key]/duration">Object</a>

#### <a name="Curse/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="Curse/translations[key]/cost"></a> `Curse/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Curse/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#Curse/translations[key]/cost/abbr">See details</a>

#### <a name="Curse/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="Curse/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Curse/translations[key]/duration"></a> `Curse/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Curse/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#Curse/translations[key]/duration/abbr">See details</a>

#### <a name="Curse/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="Curse/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a curse.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The AE cost. | <a href="#PerformanceParameters/cost">See details</a>
`duration` | The duration. | <a href="#PerformanceParameters/duration">See details</a>

#### <a name="PerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/cost'Fixed">PerformanceParameters/cost'Fixed</a> | <a href="#PerformanceParameters/cost'Indefinite">PerformanceParameters/cost'Indefinite</a>

#### <a name="PerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration'Immediate">PerformanceParameters/duration'Immediate</a> | <a href="#PerformanceParameters/duration'Fixed">PerformanceParameters/duration'Fixed</a> | <a href="#PerformanceParameters/duration'TaggedCheckResultBasedDuration">PerformanceParameters/duration'TaggedCheckResultBasedDuration</a> | <a href="#PerformanceParameters/duration'Indefinite">PerformanceParameters/duration'Indefinite</a>

---

### <a name="PerformanceParameters/cost'Fixed"></a> `PerformanceParameters/cost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/cost'Fixed/tag">See details</a>
`value` | The (temporary) AE cost value. | <a href="#PerformanceParameters/cost'Fixed/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/cost'Fixed/translations">See details</a>

#### <a name="PerformanceParameters/cost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/cost'Fixed/value"></a> `value`

The (temporary) AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters/cost'Fixed/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/cost'Fixed/translations[key]">PerformanceParameters/cost'Fixed/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/cost'Fixed/translations[key]"></a> `PerformanceParameters/cost'Fixed/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`per?` | The cost have to be per a specific countable entity, e.g. `8 KP per person`. | <a href="#PerformanceParameters/cost'Fixed/translations[key]/per">See details</a>
`note?` | A note, appended to the generated string in parenthesis. | <a href="#PerformanceParameters/cost'Fixed/translations[key]/note">See details</a>

#### <a name="PerformanceParameters/cost'Fixed/translations[key]/per"></a> `per?`

The cost have to be per a specific countable entity, e.g. `8 KP
per person`.

- **Type:** <a href="#PerformanceParameters/cost'Fixed/translations[key]/per">Object</a>

#### <a name="PerformanceParameters/cost'Fixed/translations[key]/note"></a> `note?`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="#PerformanceParameters/cost'Fixed/translations[key]/note">Object</a>

---

### <a name="PerformanceParameters/cost'Fixed/translations[key]/per"></a> `PerformanceParameters/cost'Fixed/translations[key]/per`

The cost have to be per a specific countable entity, e.g. `8 KP
per person`.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full countable entity name. | <a href="#PerformanceParameters/cost'Fixed/translations[key]/per/default">See details</a>
`compressed` | The compressed countable entity name. | <a href="#PerformanceParameters/cost'Fixed/translations[key]/per/compressed">See details</a>

#### <a name="PerformanceParameters/cost'Fixed/translations[key]/per/default"></a> `default`

The full countable entity name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters/cost'Fixed/translations[key]/per/compressed"></a> `compressed`

The compressed countable entity name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters/cost'Fixed/translations[key]/note"></a> `PerformanceParameters/cost'Fixed/translations[key]/note`

A note, appended to the generated string in parenthesis.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full note. | <a href="#PerformanceParameters/cost'Fixed/translations[key]/note/default">See details</a>
`compressed?` | A compressed note, if applicable. If not specified it should not be displayed in small location. | <a href="#PerformanceParameters/cost'Fixed/translations[key]/note/compressed">See details</a>

#### <a name="PerformanceParameters/cost'Fixed/translations[key]/note/default"></a> `default`

The full note.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters/cost'Fixed/translations[key]/note/compressed"></a> `compressed?`

A compressed note, if applicable. If not specified it should not
be displayed in small location.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters/cost'Indefinite"></a> `PerformanceParameters/cost'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/cost'Indefinite/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/cost'Indefinite/translations">See details</a>

#### <a name="PerformanceParameters/cost'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="PerformanceParameters/cost'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/cost'Indefinite/translations[key]">PerformanceParameters/cost'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/cost'Indefinite/translations[key]"></a> `PerformanceParameters/cost'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of where the cost come from. | <a href="#PerformanceParameters/cost'Indefinite/translations[key]/description">See details</a>

#### <a name="PerformanceParameters/cost'Indefinite/translations[key]/description"></a> `description`

A description of where the cost come from.

- **Type:** <a href="#PerformanceParameters/cost'Indefinite/translations[key]/description">Object</a>

---

### <a name="PerformanceParameters/cost'Indefinite/translations[key]/description"></a> `PerformanceParameters/cost'Indefinite/translations[key]/description`

A description of where the cost come from.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full description of where the cost come from. | <a href="#PerformanceParameters/cost'Indefinite/translations[key]/description/default">See details</a>
`compressed` | A compressed description of where the cost come from for use in small areas (e.g. on character sheet). | <a href="#PerformanceParameters/cost'Indefinite/translations[key]/description/compressed">See details</a>

#### <a name="PerformanceParameters/cost'Indefinite/translations[key]/description/default"></a> `default`

The full description of where the cost come from.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters/cost'Indefinite/translations[key]/description/compressed"></a> `compressed`

A compressed description of where the cost come from for use in
small areas (e.g. on character sheet).

- **Type:** String
- **Minimum Length:** `1`

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
`value` | The (unitless) duration value. | <a href="#PerformanceParameters/duration'Fixed/value">See details</a>
`unit` | The unit of the `value`. | <a href="#PerformanceParameters/duration'Fixed/unit">See details</a>

#### <a name="PerformanceParameters/duration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/duration'Fixed/value"></a> `value`

The (unitless) duration value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters/duration'Fixed/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>

---

### <a name="PerformanceParameters/duration'TaggedCheckResultBasedDuration"></a> `PerformanceParameters/duration'TaggedCheckResultBasedDuration`

- **Type:** <a href="../_ActivatableSkillDuration.md#TaggedCheckResultBasedDuration">TaggedCheckResultBasedDuration</a>

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

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration'Indefinite/maximum'Fixed">PerformanceParameters/duration'Indefinite/maximum'Fixed</a> | <a href="#PerformanceParameters/duration'Indefinite/maximum'TaggedCheckResultBasedDuration">PerformanceParameters/duration'Indefinite/maximum'TaggedCheckResultBasedDuration</a>

#### <a name="PerformanceParameters/duration'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/duration'Indefinite/translations[key]">PerformanceParameters/duration'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/duration'Indefinite/maximum'Fixed"></a> `PerformanceParameters/duration'Indefinite/maximum'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Indefinite/maximum'Fixed/tag">See details</a>
`value` | The (unitless) maximum duration value. | <a href="#PerformanceParameters/duration'Indefinite/maximum'Fixed/value">See details</a>
`unit` | The unit of the `value`. | <a href="#PerformanceParameters/duration'Indefinite/maximum'Fixed/unit">See details</a>

#### <a name="PerformanceParameters/duration'Indefinite/maximum'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/duration'Indefinite/maximum'Fixed/value"></a> `value`

The (unitless) maximum duration value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters/duration'Indefinite/maximum'Fixed/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>

---

### <a name="PerformanceParameters/duration'Indefinite/maximum'TaggedCheckResultBasedDuration"></a> `PerformanceParameters/duration'Indefinite/maximum'TaggedCheckResultBasedDuration`

- **Type:** <a href="../_ActivatableSkillDuration.md#TaggedCheckResultBasedDuration">TaggedCheckResultBasedDuration</a>

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

A compressed description of the duration for use in small areas
(e.g. on character sheet).

- **Type:** String
- **Minimum Length:** `1`

# Magical Rune

## Definitions

### <a name="MagicalRune"></a> Magical Rune (`MagicalRune`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical rune's identifier. An unique, increasing integer. | <a href="#MagicalRune/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#MagicalRune/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#MagicalRune/check_penalty">See details</a>
`parameters` | Measurable parameters of a magical rune. | <a href="#MagicalRune/parameters">See details</a>
`property_id` | The property's identifier. | <a href="#MagicalRune/property_id">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#MagicalRune/improvement_cost">See details</a>
`src` |  | <a href="#MagicalRune/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalRune/translations">See details</a>

#### <a name="MagicalRune/id"></a> `id`

The magical rune's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MagicalRune/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="MagicalRune/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** Union
- **Cases:** <a href="#MagicalRune/check_penalty'CloseCombatTechnique">MagicalRune/check_penalty'CloseCombatTechnique</a>

#### <a name="MagicalRune/parameters"></a> `parameters`

Measurable parameters of a magical rune.

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="MagicalRune/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MagicalRune/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="MagicalRune/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicalRune/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MagicalRune/translations[key]">MagicalRune/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MagicalRune/check_penalty'CloseCombatTechnique"></a> `MagicalRune/check_penalty'CloseCombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRune/check_penalty'CloseCombatTechnique/tag">See details</a>
`map` | A map from close combat techniques to their modifiers. | <a href="#MagicalRune/check_penalty'CloseCombatTechnique/map">See details</a>
`other` |  | <a href="#MagicalRune/check_penalty'CloseCombatTechnique/other">See details</a>

#### <a name="MagicalRune/check_penalty'CloseCombatTechnique/tag"></a> `tag`

- **Constant:** `"CloseCombatTechnique"`

#### <a name="MagicalRune/check_penalty'CloseCombatTechnique/map"></a> `map`

A map from close combat techniques to their modifiers.

- **Type:** List
- **Items:** <a href="#MagicalRune/check_penalty'CloseCombatTechnique/map[]">MagicalRune/check_penalty'CloseCombatTechnique/map[]</a>
- **Minimum Items:** `1`

#### <a name="MagicalRune/check_penalty'CloseCombatTechnique/other"></a> `other`

- **Type:** <a href="#MagicalRune/check_penalty'CloseCombatTechnique/other">Object</a>

---

### <a name="MagicalRune/check_penalty'CloseCombatTechnique/map[]"></a> `MagicalRune/check_penalty'CloseCombatTechnique/map[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`combat_technique_id` | The close combat technique's identifier. | <a href="#MagicalRune/check_penalty'CloseCombatTechnique/map[]/combat_technique_id">See details</a>
`modifier` | The check modifier for the specified close combat technique. | <a href="#MagicalRune/check_penalty'CloseCombatTechnique/map[]/modifier">See details</a>

#### <a name="MagicalRune/check_penalty'CloseCombatTechnique/map[]/combat_technique_id"></a> `combat_technique_id`

The close combat technique's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MagicalRune/check_penalty'CloseCombatTechnique/map[]/modifier"></a> `modifier`

The check modifier for the specified close combat technique.

- **Type:** Integer

---

### <a name="MagicalRune/check_penalty'CloseCombatTechnique/other"></a> `MagicalRune/check_penalty'CloseCombatTechnique/other`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`modifier` | The check modifier for close combat techniques not specified in `map`. | <a href="#MagicalRune/check_penalty'CloseCombatTechnique/other/modifier">See details</a>

#### <a name="MagicalRune/check_penalty'CloseCombatTechnique/other/modifier"></a> `modifier`

The check modifier for close combat techniques not specified in `map`.

- **Type:** Integer

---

### <a name="MagicalRune/translations[key]"></a> `MagicalRune/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the magical rune. | <a href="#MagicalRune/translations[key]/name">See details</a>
`native_name` | The native name of the magical rune. | <a href="#MagicalRune/translations[key]/native_name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#MagicalRune/translations[key]/effect">See details</a>
`cost` |  | <a href="#MagicalRune/translations[key]/cost">See details</a>
`crafting_time` |  | <a href="#MagicalRune/translations[key]/crafting_time">See details</a>
`duration` |  | <a href="#MagicalRune/translations[key]/duration">See details</a>
`errata?` |  | <a href="#MagicalRune/translations[key]/errata">See details</a>

#### <a name="MagicalRune/translations[key]/name"></a> `name`

The name of the magical rune.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="MagicalRune/translations[key]/native_name"></a> `native_name`

The native name of the magical rune.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="MagicalRune/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.

- **Type:** <a href="../_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="MagicalRune/translations[key]/cost"></a> `cost`

- **Type:** <a href="#MagicalRune/translations[key]/cost">Object</a>

#### <a name="MagicalRune/translations[key]/crafting_time"></a> `crafting_time`

- **Type:** <a href="#MagicalRune/translations[key]/crafting_time">Object</a>

#### <a name="MagicalRune/translations[key]/duration"></a> `duration`

- **Type:** <a href="#MagicalRune/translations[key]/duration">Object</a>

#### <a name="MagicalRune/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="MagicalRune/translations[key]/cost"></a> `MagicalRune/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalRune/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#MagicalRune/translations[key]/cost/abbr">See details</a>

#### <a name="MagicalRune/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="MagicalRune/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalRune/translations[key]/crafting_time"></a> `MagicalRune/translations[key]/crafting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`slow` |  | <a href="#MagicalRune/translations[key]/crafting_time/slow">See details</a>
`fast` |  | <a href="#MagicalRune/translations[key]/crafting_time/fast">See details</a>

#### <a name="MagicalRune/translations[key]/crafting_time/slow"></a> `slow`

- **Type:** <a href="#MagicalRune/translations[key]/crafting_time/slow">Object</a>

#### <a name="MagicalRune/translations[key]/crafting_time/fast"></a> `fast`

- **Type:** <a href="#MagicalRune/translations[key]/crafting_time/fast">Object</a>

---

### <a name="MagicalRune/translations[key]/crafting_time/slow"></a> `MagicalRune/translations[key]/crafting_time/slow`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalRune/translations[key]/crafting_time/slow/full">See details</a>
`abbr` |  | <a href="#MagicalRune/translations[key]/crafting_time/slow/abbr">See details</a>

#### <a name="MagicalRune/translations[key]/crafting_time/slow/full"></a> `full`

- **Type:** String

#### <a name="MagicalRune/translations[key]/crafting_time/slow/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalRune/translations[key]/crafting_time/fast"></a> `MagicalRune/translations[key]/crafting_time/fast`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalRune/translations[key]/crafting_time/fast/full">See details</a>
`abbr` |  | <a href="#MagicalRune/translations[key]/crafting_time/fast/abbr">See details</a>

#### <a name="MagicalRune/translations[key]/crafting_time/fast/full"></a> `full`

- **Type:** String

#### <a name="MagicalRune/translations[key]/crafting_time/fast/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalRune/translations[key]/duration"></a> `MagicalRune/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`slow` |  | <a href="#MagicalRune/translations[key]/duration/slow">See details</a>
`fast` |  | <a href="#MagicalRune/translations[key]/duration/fast">See details</a>

#### <a name="MagicalRune/translations[key]/duration/slow"></a> `slow`

- **Type:** <a href="#MagicalRune/translations[key]/duration/slow">Object</a>

#### <a name="MagicalRune/translations[key]/duration/fast"></a> `fast`

- **Type:** <a href="#MagicalRune/translations[key]/duration/fast">Object</a>

---

### <a name="MagicalRune/translations[key]/duration/slow"></a> `MagicalRune/translations[key]/duration/slow`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalRune/translations[key]/duration/slow/full">See details</a>
`abbr` |  | <a href="#MagicalRune/translations[key]/duration/slow/abbr">See details</a>

#### <a name="MagicalRune/translations[key]/duration/slow/full"></a> `full`

- **Type:** String

#### <a name="MagicalRune/translations[key]/duration/slow/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalRune/translations[key]/duration/fast"></a> `MagicalRune/translations[key]/duration/fast`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalRune/translations[key]/duration/fast/full">See details</a>
`abbr` |  | <a href="#MagicalRune/translations[key]/duration/fast/abbr">See details</a>

#### <a name="MagicalRune/translations[key]/duration/fast/full"></a> `full`

- **Type:** String

#### <a name="MagicalRune/translations[key]/duration/fast/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a magical rune.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The AE cost. | <a href="#PerformanceParameters/cost">See details</a>
`crafting_time` | The crafting time. | <a href="#PerformanceParameters/crafting_time">See details</a>
`duration` | The duration. | <a href="#PerformanceParameters/duration">See details</a>

#### <a name="PerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** <a href="#PerformanceParameters/cost">Object</a>

#### <a name="PerformanceParameters/crafting_time"></a> `crafting_time`

The crafting time.

- **Type:** <a href="#PerformanceParameters/crafting_time">Object</a>

#### <a name="PerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** <a href="#PerformanceParameters/duration">Object</a>

---

### <a name="PerformanceParameters/cost"></a> `PerformanceParameters/cost`

The AE cost.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` |  | <a href="#PerformanceParameters/cost/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/cost/translations">See details</a>

#### <a name="PerformanceParameters/cost/value"></a> `value`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/cost/value'Flat">PerformanceParameters/cost/value'Flat</a> | <a href="#PerformanceParameters/cost/value'Disjunction">PerformanceParameters/cost/value'Disjunction</a>

#### <a name="PerformanceParameters/cost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/cost/translations[key]">PerformanceParameters/cost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/cost/value'Flat"></a> `PerformanceParameters/cost/value'Flat`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/cost/value'Flat/tag">See details</a>
`value` | The AE cost value. | <a href="#PerformanceParameters/cost/value'Flat/value">See details</a>

#### <a name="PerformanceParameters/cost/value'Flat/tag"></a> `tag`

- **Constant:** `"Flat"`

#### <a name="PerformanceParameters/cost/value'Flat/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PerformanceParameters/cost/value'Disjunction"></a> `PerformanceParameters/cost/value'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/cost/value'Disjunction/tag">See details</a>
`list` | A set of possible AE cost values. | <a href="#PerformanceParameters/cost/value'Disjunction/list">See details</a>

#### <a name="PerformanceParameters/cost/value'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="PerformanceParameters/cost/value'Disjunction/list"></a> `list`

A set of possible AE cost values.

- **Type:** List
- **Items:** <a href="#PerformanceParameters/cost/value'Disjunction/list[]">PerformanceParameters/cost/value'Disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="PerformanceParameters/cost/value'Disjunction/list[]"></a> `PerformanceParameters/cost/value'Disjunction/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#PerformanceParameters/cost/value'Disjunction/list[]/value">See details</a>

#### <a name="PerformanceParameters/cost/value'Disjunction/list[]/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PerformanceParameters/cost/translations[key]"></a> `PerformanceParameters/cost/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`note?` | A note, appended to the generated string in parenthesis. | <a href="#PerformanceParameters/cost/translations[key]/note">See details</a>

#### <a name="PerformanceParameters/cost/translations[key]/note"></a> `note?`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="#PerformanceParameters/cost/translations[key]/note">Object</a>

---

### <a name="PerformanceParameters/cost/translations[key]/note"></a> `PerformanceParameters/cost/translations[key]/note`

A note, appended to the generated string in parenthesis.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full note. | <a href="#PerformanceParameters/cost/translations[key]/note/default">See details</a>
`compressed?` | A compressed note, if applicable. | <a href="#PerformanceParameters/cost/translations[key]/note/compressed">See details</a>

#### <a name="PerformanceParameters/cost/translations[key]/note/default"></a> `default`

The full note.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters/cost/translations[key]/note/compressed"></a> `compressed?`

A compressed note, if applicable.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters/crafting_time"></a> `PerformanceParameters/crafting_time`

The crafting time.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) crafting time. | <a href="#PerformanceParameters/crafting_time/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/crafting_time/translations">See details</a>

#### <a name="PerformanceParameters/crafting_time/value"></a> `value`

The (unitless) crafting time.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/crafting_time/value'0">PerformanceParameters/crafting_time/value'0</a> | <a href="#PerformanceParameters/crafting_time/value'1">PerformanceParameters/crafting_time/value'1</a> | <a href="#PerformanceParameters/crafting_time/value'2">PerformanceParameters/crafting_time/value'2</a>

#### <a name="PerformanceParameters/crafting_time/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/crafting_time/translations[key]">PerformanceParameters/crafting_time/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/crafting_time/value'0"></a> `PerformanceParameters/crafting_time/value'0`

- **Constant:** `1`

---

### <a name="PerformanceParameters/crafting_time/value'1"></a> `PerformanceParameters/crafting_time/value'1`

- **Constant:** `2`

---

### <a name="PerformanceParameters/crafting_time/value'2"></a> `PerformanceParameters/crafting_time/value'2`

- **Constant:** `4`

---

### <a name="PerformanceParameters/crafting_time/translations[key]"></a> `PerformanceParameters/crafting_time/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`per?` | The cost have to be per a specific countable entity, e.g. `8 AE per person`. | <a href="#PerformanceParameters/crafting_time/translations[key]/per">See details</a>

#### <a name="PerformanceParameters/crafting_time/translations[key]/per"></a> `per?`

The cost have to be per a specific countable entity, e.g. `8 AE per person`.

- **Type:** <a href="#PerformanceParameters/crafting_time/translations[key]/per">Object</a>

---

### <a name="PerformanceParameters/crafting_time/translations[key]/per"></a> `PerformanceParameters/crafting_time/translations[key]/per`

The cost have to be per a specific countable entity, e.g. `8 AE per person`.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full countable entity name. | <a href="#PerformanceParameters/crafting_time/translations[key]/per/default">See details</a>
`compressed` | The compressed countable entity name. | <a href="#PerformanceParameters/crafting_time/translations[key]/per/compressed">See details</a>

#### <a name="PerformanceParameters/crafting_time/translations[key]/per/default"></a> `default`

The full countable entity name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters/crafting_time/translations[key]/per/compressed"></a> `compressed`

The compressed countable entity name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters/duration"></a> `PerformanceParameters/duration`

The duration.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`slow` |  | <a href="#PerformanceParameters/duration/slow">See details</a>
`fast` |  | <a href="#PerformanceParameters/duration/fast">See details</a>

#### <a name="PerformanceParameters/duration/slow"></a> `slow`

- **Type:** <a href="#PerformanceParameters/duration/slow">Object</a>

#### <a name="PerformanceParameters/duration/fast"></a> `fast`

- **Type:** <a href="#PerformanceParameters/duration/fast">Object</a>

---

### <a name="PerformanceParameters/duration/slow"></a> `PerformanceParameters/duration/slow`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration/slow/tag">See details</a>
`modifier?` | A value that modifies the resulting quality levels. | <a href="#PerformanceParameters/duration/slow/modifier">See details</a>
`unit` | The duration unit. | <a href="#PerformanceParameters/duration/slow/unit">See details</a>

#### <a name="PerformanceParameters/duration/slow/tag"></a> `tag`

- **Constant:** `"QualityLevels"`

#### <a name="PerformanceParameters/duration/slow/modifier"></a> `modifier?`

A value that modifies the resulting quality levels.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration/slow/modifier'Multiply">PerformanceParameters/duration/slow/modifier'Multiply</a> | <a href="#PerformanceParameters/duration/slow/modifier'Divide">PerformanceParameters/duration/slow/modifier'Divide</a>

#### <a name="PerformanceParameters/duration/slow/unit"></a> `unit`

The duration unit.

- **Type:** <a href="../_ActivatableSkill.md#Duration/Unit">Duration/Unit</a>

---

### <a name="PerformanceParameters/duration/slow/modifier'Multiply"></a> `PerformanceParameters/duration/slow/modifier'Multiply`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration/slow/modifier'Multiply/tag">See details</a>
`value` | A value that multiplies the resulting quality levels. | <a href="#PerformanceParameters/duration/slow/modifier'Multiply/value">See details</a>

#### <a name="PerformanceParameters/duration/slow/modifier'Multiply/tag"></a> `tag`

- **Constant:** `"Multiply"`

#### <a name="PerformanceParameters/duration/slow/modifier'Multiply/value"></a> `value`

A value that multiplies the resulting quality levels.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="PerformanceParameters/duration/slow/modifier'Divide"></a> `PerformanceParameters/duration/slow/modifier'Divide`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration/slow/modifier'Divide/tag">See details</a>
`value` | A value that divides the resulting quality levels. | <a href="#PerformanceParameters/duration/slow/modifier'Divide/value">See details</a>

#### <a name="PerformanceParameters/duration/slow/modifier'Divide/tag"></a> `tag`

- **Constant:** `"Divide"`

#### <a name="PerformanceParameters/duration/slow/modifier'Divide/value"></a> `value`

A value that divides the resulting quality levels.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="PerformanceParameters/duration/fast"></a> `PerformanceParameters/duration/fast`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration/fast/tag">See details</a>
`modifier?` | A value that modifies the resulting quality levels. | <a href="#PerformanceParameters/duration/fast/modifier">See details</a>
`unit` | The duration unit. | <a href="#PerformanceParameters/duration/fast/unit">See details</a>

#### <a name="PerformanceParameters/duration/fast/tag"></a> `tag`

- **Constant:** `"QualityLevels"`

#### <a name="PerformanceParameters/duration/fast/modifier"></a> `modifier?`

A value that modifies the resulting quality levels.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration/fast/modifier'Multiply">PerformanceParameters/duration/fast/modifier'Multiply</a> | <a href="#PerformanceParameters/duration/fast/modifier'Divide">PerformanceParameters/duration/fast/modifier'Divide</a>

#### <a name="PerformanceParameters/duration/fast/unit"></a> `unit`

The duration unit.

- **Type:** <a href="../_ActivatableSkill.md#Duration/Unit">Duration/Unit</a>

---

### <a name="PerformanceParameters/duration/fast/modifier'Multiply"></a> `PerformanceParameters/duration/fast/modifier'Multiply`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration/fast/modifier'Multiply/tag">See details</a>
`value` | A value that multiplies the resulting quality levels. | <a href="#PerformanceParameters/duration/fast/modifier'Multiply/value">See details</a>

#### <a name="PerformanceParameters/duration/fast/modifier'Multiply/tag"></a> `tag`

- **Constant:** `"Multiply"`

#### <a name="PerformanceParameters/duration/fast/modifier'Multiply/value"></a> `value`

A value that multiplies the resulting quality levels.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="PerformanceParameters/duration/fast/modifier'Divide"></a> `PerformanceParameters/duration/fast/modifier'Divide`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration/fast/modifier'Divide/tag">See details</a>
`value` | A value that divides the resulting quality levels. | <a href="#PerformanceParameters/duration/fast/modifier'Divide/value">See details</a>

#### <a name="PerformanceParameters/duration/fast/modifier'Divide/tag"></a> `tag`

- **Constant:** `"Divide"`

#### <a name="PerformanceParameters/duration/fast/modifier'Divide/value"></a> `value`

A value that divides the resulting quality levels.

- **Type:** Integer
- **Minimum:** `2`

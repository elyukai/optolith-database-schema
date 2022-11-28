# Magical Rune

## Definitions

### <a name="MagicalRune"></a> Magical Rune (`MagicalRune`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical rune's identifier. An unique, increasing integer. | <a href="#MagicalRune/id">See details</a>
`option?` |  | <a href="#MagicalRune/option">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#MagicalRune/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#MagicalRune/check_penalty">See details</a>
`parameters` | Measurable parameters of a magical rune. | <a href="#MagicalRune/parameters">See details</a>
`property` | The associated property. | <a href="#MagicalRune/property">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#MagicalRune/improvement_cost">See details</a>
`src` |  | <a href="#MagicalRune/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalRune/translations">See details</a>

#### <a name="MagicalRune/id"></a> `id`

The magical rune's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MagicalRune/option"></a> `option?`

- **Type:** <a href="#MagicalRuneOption">MagicalRuneOption</a>

#### <a name="MagicalRune/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="MagicalRune/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="#MagicalRuneCheckPenalty">MagicalRuneCheckPenalty</a>

#### <a name="MagicalRune/parameters"></a> `parameters`

Measurable parameters of a magical rune.

- **Type:** <a href="#MagicalRunePerformanceParameters">MagicalRunePerformanceParameters</a>

#### <a name="MagicalRune/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

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

### <a name="MagicalRune/translations[key]"></a> `MagicalRune/translations[key]`

- **Type:** <a href="#MagicalRuneTranslation">MagicalRuneTranslation</a>

---

### <a name="MagicalRuneTranslation"></a> `MagicalRuneTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the magical rune. | <a href="#MagicalRuneTranslation/name">See details</a>
`native_name` | The native name of the magical rune. | <a href="#MagicalRuneTranslation/native_name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#MagicalRuneTranslation/effect">See details</a>
`cost` |  | <a href="#MagicalRuneTranslation/cost">See details</a>
`crafting_time` |  | <a href="#MagicalRuneTranslation/crafting_time">See details</a>
`duration` |  | <a href="#MagicalRuneTranslation/duration">See details</a>
`errata?` |  | <a href="#MagicalRuneTranslation/errata">See details</a>

#### <a name="MagicalRuneTranslation/name"></a> `name`

The name of the magical rune.

If the rune has an option, the option’s name will/should not be included in
the name as well as its surrounding parenthesis. It will/should be combined
on demand.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MagicalRuneTranslation/native_name"></a> `native_name`

The native name of the magical rune.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MagicalRuneTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="MagicalRuneTranslation/cost"></a> `cost`

- **Type:** <a href="#MagicalRuneTranslation/cost">Object</a>

#### <a name="MagicalRuneTranslation/crafting_time"></a> `crafting_time`

- **Type:** <a href="#MagicalRuneTranslation/crafting_time">Object</a>

#### <a name="MagicalRuneTranslation/duration"></a> `duration`

- **Type:** <a href="#MagicalRuneTranslation/duration">Object</a>

#### <a name="MagicalRuneTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="MagicalRuneTranslation/cost"></a> `MagicalRuneTranslation/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalRuneTranslation/cost/full">See details</a>
`abbr` |  | <a href="#MagicalRuneTranslation/cost/abbr">See details</a>

#### <a name="MagicalRuneTranslation/cost/full"></a> `full`

- **Type:** String

#### <a name="MagicalRuneTranslation/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalRuneTranslation/crafting_time"></a> `MagicalRuneTranslation/crafting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`slow` |  | <a href="#MagicalRuneTranslation/crafting_time/slow">See details</a>
`fast` |  | <a href="#MagicalRuneTranslation/crafting_time/fast">See details</a>

#### <a name="MagicalRuneTranslation/crafting_time/slow"></a> `slow`

- **Type:** <a href="#MagicalRuneTranslation/crafting_time/slow">Object</a>

#### <a name="MagicalRuneTranslation/crafting_time/fast"></a> `fast`

- **Type:** <a href="#MagicalRuneTranslation/crafting_time/fast">Object</a>

---

### <a name="MagicalRuneTranslation/crafting_time/slow"></a> `MagicalRuneTranslation/crafting_time/slow`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalRuneTranslation/crafting_time/slow/full">See details</a>
`abbr` |  | <a href="#MagicalRuneTranslation/crafting_time/slow/abbr">See details</a>

#### <a name="MagicalRuneTranslation/crafting_time/slow/full"></a> `full`

- **Type:** String

#### <a name="MagicalRuneTranslation/crafting_time/slow/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalRuneTranslation/crafting_time/fast"></a> `MagicalRuneTranslation/crafting_time/fast`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalRuneTranslation/crafting_time/fast/full">See details</a>
`abbr` |  | <a href="#MagicalRuneTranslation/crafting_time/fast/abbr">See details</a>

#### <a name="MagicalRuneTranslation/crafting_time/fast/full"></a> `full`

- **Type:** String

#### <a name="MagicalRuneTranslation/crafting_time/fast/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalRuneTranslation/duration"></a> `MagicalRuneTranslation/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`slow` |  | <a href="#MagicalRuneTranslation/duration/slow">See details</a>
`fast` |  | <a href="#MagicalRuneTranslation/duration/fast">See details</a>

#### <a name="MagicalRuneTranslation/duration/slow"></a> `slow`

- **Type:** <a href="#MagicalRuneTranslation/duration/slow">Object</a>

#### <a name="MagicalRuneTranslation/duration/fast"></a> `fast`

- **Type:** <a href="#MagicalRuneTranslation/duration/fast">Object</a>

---

### <a name="MagicalRuneTranslation/duration/slow"></a> `MagicalRuneTranslation/duration/slow`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalRuneTranslation/duration/slow/full">See details</a>
`abbr` |  | <a href="#MagicalRuneTranslation/duration/slow/abbr">See details</a>

#### <a name="MagicalRuneTranslation/duration/slow/full"></a> `full`

- **Type:** String

#### <a name="MagicalRuneTranslation/duration/slow/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalRuneTranslation/duration/fast"></a> `MagicalRuneTranslation/duration/fast`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalRuneTranslation/duration/fast/full">See details</a>
`abbr` |  | <a href="#MagicalRuneTranslation/duration/fast/abbr">See details</a>

#### <a name="MagicalRuneTranslation/duration/fast/full"></a> `full`

- **Type:** String

#### <a name="MagicalRuneTranslation/duration/fast/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalRuneCheckPenalty"></a> `MagicalRuneCheckPenalty`

- **Type:** Union
- **Cases:** <a href="#MagicalRuneCheckPenalty'CloseCombatTechnique">MagicalRuneCheckPenalty'CloseCombatTechnique</a>

---

### <a name="MagicalRuneCheckPenalty'CloseCombatTechnique"></a> `MagicalRuneCheckPenalty'CloseCombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRuneCheckPenalty'CloseCombatTechnique/tag">See details</a>
`close_combat_technique` |  | <a href="#MagicalRuneCheckPenalty'CloseCombatTechnique/close_combat_technique">See details</a>

#### <a name="MagicalRuneCheckPenalty'CloseCombatTechnique/tag"></a> `tag`

- **Constant:** `"CloseCombatTechnique"`

#### <a name="MagicalRuneCheckPenalty'CloseCombatTechnique/close_combat_technique"></a> `close_combat_technique`

- **Type:** <a href="#MagicalRuneCloseCombatTechniqueCheckPenalty">MagicalRuneCloseCombatTechniqueCheckPenalty</a>

---

### <a name="MagicalRuneCloseCombatTechniqueCheckPenalty"></a> `MagicalRuneCloseCombatTechniqueCheckPenalty`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`map` | A map from close combat techniques to their modifiers. | <a href="#MagicalRuneCloseCombatTechniqueCheckPenalty/map">See details</a>
`rest` |  | <a href="#MagicalRuneCloseCombatTechniqueCheckPenalty/rest">See details</a>

#### <a name="MagicalRuneCloseCombatTechniqueCheckPenalty/map"></a> `map`

A map from close combat techniques to their modifiers.

- **Type:** List
- **Items:** <a href="#MagicalRuneCloseCombatTechniqueCheckPenalty/map[]">MagicalRuneCloseCombatTechniqueCheckPenalty/map[]</a>
- **Minimum Items:** `1`

#### <a name="MagicalRuneCloseCombatTechniqueCheckPenalty/rest"></a> `rest`

- **Type:** <a href="#MagicalRuneCloseCombatTechniqueCheckPenaltyRest">MagicalRuneCloseCombatTechniqueCheckPenaltyRest</a>

---

### <a name="MagicalRuneCloseCombatTechniqueCheckPenalty/map[]"></a> `MagicalRuneCloseCombatTechniqueCheckPenalty/map[]`

- **Type:** <a href="#MagicalRuneCloseCombatTechniqueCheckPenaltyMapping">MagicalRuneCloseCombatTechniqueCheckPenaltyMapping</a>

---

### <a name="MagicalRuneCloseCombatTechniqueCheckPenaltyMapping"></a> `MagicalRuneCloseCombatTechniqueCheckPenaltyMapping`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`combat_technique_id` | The close combat technique's identifier. | <a href="#MagicalRuneCloseCombatTechniqueCheckPenaltyMapping/combat_technique_id">See details</a>
`modifier` | The check modifier for the specified close combat technique. | <a href="#MagicalRuneCloseCombatTechniqueCheckPenaltyMapping/modifier">See details</a>

#### <a name="MagicalRuneCloseCombatTechniqueCheckPenaltyMapping/combat_technique_id"></a> `combat_technique_id`

The close combat technique's identifier.

- **Type:** <a href="../_Identifier.md#CloseCombatTechniqueIdentifier">CloseCombatTechniqueIdentifier</a>

#### <a name="MagicalRuneCloseCombatTechniqueCheckPenaltyMapping/modifier"></a> `modifier`

The check modifier for the specified close combat technique.

- **Type:** Integer

---

### <a name="MagicalRuneCloseCombatTechniqueCheckPenaltyRest"></a> `MagicalRuneCloseCombatTechniqueCheckPenaltyRest`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`modifier` | The check modifier for close combat techniques not specified in `map`. | <a href="#MagicalRuneCloseCombatTechniqueCheckPenaltyRest/modifier">See details</a>

#### <a name="MagicalRuneCloseCombatTechniqueCheckPenaltyRest/modifier"></a> `modifier`

The check modifier for close combat techniques not specified in `map`.

- **Type:** Integer

---

### <a name="MagicalRunePerformanceParameters"></a> `MagicalRunePerformanceParameters`

Measurable parameters of a magical rune.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The AE cost. | <a href="#MagicalRunePerformanceParameters/cost">See details</a>
`crafting_time` | The crafting time. | <a href="#MagicalRunePerformanceParameters/crafting_time">See details</a>
`duration` | The duration. | <a href="#MagicalRunePerformanceParameters/duration">See details</a>

#### <a name="MagicalRunePerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** <a href="#MagicalRuneCost">MagicalRuneCost</a>

#### <a name="MagicalRunePerformanceParameters/crafting_time"></a> `crafting_time`

The crafting time.

- **Type:** <a href="#MagicalRuneCraftingTime">MagicalRuneCraftingTime</a>

#### <a name="MagicalRunePerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** <a href="#MagicalRuneDuration">MagicalRuneDuration</a>

---

### <a name="MagicalRuneCost"></a> `MagicalRuneCost`

- **Type:** Union
- **Cases:** <a href="#MagicalRuneCost'Single">MagicalRuneCost'Single</a> | <a href="#MagicalRuneCost'Disjunction">MagicalRuneCost'Disjunction</a>

---

### <a name="MagicalRuneCost'Single"></a> `MagicalRuneCost'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRuneCost'Single/tag">See details</a>
`single` |  | <a href="#MagicalRuneCost'Single/single">See details</a>

#### <a name="MagicalRuneCost'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="MagicalRuneCost'Single/single"></a> `single`

- **Type:** <a href="#SingleMagicalRuneCost">SingleMagicalRuneCost</a>

---

### <a name="MagicalRuneCost'Disjunction"></a> `MagicalRuneCost'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRuneCost'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#MagicalRuneCost'Disjunction/disjunction">See details</a>

#### <a name="MagicalRuneCost'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="MagicalRuneCost'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#MagicalRuneCostDisjunction">MagicalRuneCostDisjunction</a>

---

### <a name="SingleMagicalRuneCost"></a> `SingleMagicalRuneCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#SingleMagicalRuneCost/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SingleMagicalRuneCost/translations">See details</a>

#### <a name="SingleMagicalRuneCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SingleMagicalRuneCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SingleMagicalRuneCost/translations[key]">SingleMagicalRuneCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SingleMagicalRuneCost/translations[key]"></a> `SingleMagicalRuneCost/translations[key]`

- **Type:** <a href="#SingleMagicalRuneCostTranslation">SingleMagicalRuneCostTranslation</a>

---

### <a name="SingleMagicalRuneCostTranslation"></a> `SingleMagicalRuneCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`note` | A note, appended to the generated string in parenthesis. | <a href="#SingleMagicalRuneCostTranslation/note">See details</a>

#### <a name="SingleMagicalRuneCostTranslation/note"></a> `note`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

---

### <a name="MagicalRuneCostDisjunction"></a> `MagicalRuneCostDisjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | A set of possible AE cost values. | <a href="#MagicalRuneCostDisjunction/list">See details</a>

#### <a name="MagicalRuneCostDisjunction/list"></a> `list`

A set of possible AE cost values.

- **Type:** List
- **Items:** <a href="#MagicalRuneCostDisjunction/list[]">MagicalRuneCostDisjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="MagicalRuneCostDisjunction/list[]"></a> `MagicalRuneCostDisjunction/list[]`

- **Type:** <a href="#SingleMagicalRuneCost">SingleMagicalRuneCost</a>

---

### <a name="MagicalRuneCraftingTime"></a> `MagicalRuneCraftingTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) crafting time. | <a href="#MagicalRuneCraftingTime/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalRuneCraftingTime/translations">See details</a>

#### <a name="MagicalRuneCraftingTime/value"></a> `value`

The (unitless) crafting time.

- **Type:** Union
- **Cases:** <a href="#MagicalRuneCraftingTime/value'0">MagicalRuneCraftingTime/value'0</a> | <a href="#MagicalRuneCraftingTime/value'1">MagicalRuneCraftingTime/value'1</a> | <a href="#MagicalRuneCraftingTime/value'2">MagicalRuneCraftingTime/value'2</a>

#### <a name="MagicalRuneCraftingTime/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MagicalRuneCraftingTime/translations[key]">MagicalRuneCraftingTime/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MagicalRuneCraftingTime/value'0"></a> `MagicalRuneCraftingTime/value'0`

- **Constant:** `1`

---

### <a name="MagicalRuneCraftingTime/value'1"></a> `MagicalRuneCraftingTime/value'1`

- **Constant:** `2`

---

### <a name="MagicalRuneCraftingTime/value'2"></a> `MagicalRuneCraftingTime/value'2`

- **Constant:** `4`

---

### <a name="MagicalRuneCraftingTime/translations[key]"></a> `MagicalRuneCraftingTime/translations[key]`

- **Type:** <a href="#MagicalRuneCraftingTimeTranslation">MagicalRuneCraftingTimeTranslation</a>

---

### <a name="MagicalRuneCraftingTimeTranslation"></a> `MagicalRuneCraftingTimeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`per` | The crafting time has to be per a specific countable entity, e.g. `8 action per person`. | <a href="#MagicalRuneCraftingTimeTranslation/per">See details</a>

#### <a name="MagicalRuneCraftingTimeTranslation/per"></a> `per`

The crafting time has to be per a specific countable entity, e.g. `8
action per person`.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="MagicalRuneDuration"></a> `MagicalRuneDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`slow` | The duration on slow rune application. | <a href="#MagicalRuneDuration/slow">See details</a>
`fast` | The duration on fast rune application. | <a href="#MagicalRuneDuration/fast">See details</a>

#### <a name="MagicalRuneDuration/slow"></a> `slow`

The duration on slow rune application.

- **Type:** <a href="../_ActivatableSkillDuration.md#CheckResultBasedDuration">CheckResultBasedDuration</a>

#### <a name="MagicalRuneDuration/fast"></a> `fast`

The duration on fast rune application.

- **Type:** <a href="../_ActivatableSkillDuration.md#CheckResultBasedDuration">CheckResultBasedDuration</a>

---

### <a name="MagicalRuneOption"></a> `MagicalRuneOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalRuneOption/translations">See details</a>

#### <a name="MagicalRuneOption/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MagicalRuneOption/translations[key]">MagicalRuneOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MagicalRuneOption/translations[key]"></a> `MagicalRuneOption/translations[key]`

- **Type:** <a href="#MagicalRuneOptionTranslation">MagicalRuneOptionTranslation</a>

---

### <a name="MagicalRuneOptionTranslation"></a> `MagicalRuneOptionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the option. | <a href="#MagicalRuneOptionTranslation/name">See details</a>

#### <a name="MagicalRuneOptionTranslation/name"></a> `name`

The name of the option.

The surrounding parenthesis will/should not be included, they will/should
be generated.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

# Magical Rune

## Definitions

### <a name="MagicalRune"></a> Magical Rune (`MagicalRune`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical rune's identifier. An unique, increasing integer. | <a href="#MagicalRune/id">See details</a>
`options?` | The options the magical rune has, if any. | <a href="#MagicalRune/options">See details</a>
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

#### <a name="MagicalRune/options"></a> `options?`

The options the magical rune has, if any.

If there are multiple options, the magical rune may be activated for each option, that is, multiple times.

- **Type:** List
- **Items:** <a href="#MagicalRune/options[]">MagicalRune/options[]</a>

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

- **Type:** <a href="#MagicalRuneImprovementCost">MagicalRuneImprovementCost</a>

#### <a name="MagicalRune/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicalRune/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#MagicalRuneTranslation">MagicalRuneTranslation</a>&gt;

---

### <a name="MagicalRune/options[]"></a> `MagicalRune/options[]`

- **Type:** <a href="#MagicalRuneOption">MagicalRuneOption</a>

---

### <a name="MagicalRuneTranslation"></a> `MagicalRuneTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the magical rune. | <a href="#MagicalRuneTranslation/name">See details</a>
`name_in_library?` | The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes. | <a href="#MagicalRuneTranslation/name_in_library">See details</a>
`native_name?` | The native name of the magical rune. | <a href="#MagicalRuneTranslation/native_name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#MagicalRuneTranslation/effect">See details</a>
`cost` |  | <a href="#MagicalRuneTranslation/cost">See details</a>
`crafting_time` |  | <a href="#MagicalRuneTranslation/crafting_time">See details</a>
`duration` |  | <a href="#MagicalRuneTranslation/duration">See details</a>
`errata?` |  | <a href="#MagicalRuneTranslation/errata">See details</a>

#### <a name="MagicalRuneTranslation/name"></a> `name`

The name of the magical rune.

If the rune has an option, the option’s name will/should not be included in the name as well as its surrounding parenthesis. It will/should be combined on demand.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MagicalRuneTranslation/name_in_library"></a> `name_in_library?`

The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MagicalRuneTranslation/native_name"></a> `native_name?`

The native name of the magical rune.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MagicalRuneTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#ActivatableSkillEffect">ActivatableSkillEffect</a>

#### <a name="MagicalRuneTranslation/cost"></a> `cost`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="MagicalRuneTranslation/crafting_time"></a> `crafting_time`

- **Type:** <a href="#OldParameterBySpeed">OldParameterBySpeed</a>

#### <a name="MagicalRuneTranslation/duration"></a> `duration`

- **Type:** <a href="#OldParameterBySpeed">OldParameterBySpeed</a>

#### <a name="MagicalRuneTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="OldParameterBySpeed"></a> `OldParameterBySpeed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`slow` |  | <a href="#OldParameterBySpeed/slow">See details</a>
`fast` |  | <a href="#OldParameterBySpeed/fast">See details</a>

#### <a name="OldParameterBySpeed/slow"></a> `slow`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="OldParameterBySpeed/fast"></a> `fast`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

---

### <a name="MagicalRuneCheckPenalty"></a> `MagicalRuneCheckPenalty`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRuneCheckPenalty/tag">See details</a>
`combat_technique` |  | <a href="#MagicalRuneCheckPenalty/combat_technique">See details</a>

#### <a name="MagicalRuneCheckPenalty/tag"></a> `tag`

- **Constant:** `"CombatTechnique"`

#### <a name="MagicalRuneCheckPenalty/combat_technique"></a> `combat_technique`

- **Type:** <a href="#MagicalRuneCombatTechniqueCheckPenalty">MagicalRuneCombatTechniqueCheckPenalty</a>

---

### <a name="MagicalRuneCombatTechniqueCheckPenalty"></a> `MagicalRuneCombatTechniqueCheckPenalty`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`map` | A map from combat techniques to their modifiers. | <a href="#MagicalRuneCombatTechniqueCheckPenalty/map">See details</a>
`rest` |  | <a href="#MagicalRuneCombatTechniqueCheckPenalty/rest">See details</a>

#### <a name="MagicalRuneCombatTechniqueCheckPenalty/map"></a> `map`

A map from combat techniques to their modifiers.

- **Type:** List
- **Items:** <a href="#MagicalRuneCombatTechniqueCheckPenalty/map[]">MagicalRuneCombatTechniqueCheckPenalty/map[]</a>
- **Minimum Items:** `1`

#### <a name="MagicalRuneCombatTechniqueCheckPenalty/rest"></a> `rest`

- **Type:** <a href="#MagicalRuneCombatTechniqueCheckPenaltyRest">MagicalRuneCombatTechniqueCheckPenaltyRest</a>

---

### <a name="MagicalRuneCombatTechniqueCheckPenalty/map[]"></a> `MagicalRuneCombatTechniqueCheckPenalty/map[]`

- **Type:** <a href="#MagicalRuneCombatTechniqueCheckPenaltyMapping">MagicalRuneCombatTechniqueCheckPenaltyMapping</a>

---

### <a name="MagicalRuneCombatTechniqueCheckPenaltyMapping"></a> `MagicalRuneCombatTechniqueCheckPenaltyMapping`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The combat technique's identifier. | <a href="#MagicalRuneCombatTechniqueCheckPenaltyMapping/id">See details</a>
`modifier` | The check modifier for the specified combat technique. | <a href="#MagicalRuneCombatTechniqueCheckPenaltyMapping/modifier">See details</a>

#### <a name="MagicalRuneCombatTechniqueCheckPenaltyMapping/id"></a> `id`

The combat technique's identifier.

- **Type:** <a href="../_IdentifierGroup.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

#### <a name="MagicalRuneCombatTechniqueCheckPenaltyMapping/modifier"></a> `modifier`

The check modifier for the specified combat technique.

- **Type:** Integer

---

### <a name="MagicalRuneCombatTechniqueCheckPenaltyRest"></a> `MagicalRuneCombatTechniqueCheckPenaltyRest`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`modifier` | The check modifier for combat techniques not specified in `map`. | <a href="#MagicalRuneCombatTechniqueCheckPenaltyRest/modifier">See details</a>

#### <a name="MagicalRuneCombatTechniqueCheckPenaltyRest/modifier"></a> `modifier`

The check modifier for combat techniques not specified in `map`.

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
- **Cases:** <a href="#MagicalRuneCost'Single">MagicalRuneCost'Single</a> | <a href="#MagicalRuneCost'Disjunction">MagicalRuneCost'Disjunction</a> | <a href="#MagicalRuneCost'DerivedFromOption">MagicalRuneCost'DerivedFromOption</a>

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

### <a name="MagicalRuneCost'DerivedFromOption"></a> `MagicalRuneCost'DerivedFromOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRuneCost'DerivedFromOption/tag">See details</a>
`derived_from_option` |  | <a href="#MagicalRuneCost'DerivedFromOption/derived_from_option">See details</a>

#### <a name="MagicalRuneCost'DerivedFromOption/tag"></a> `tag`

- **Constant:** `"DerivedFromOption"`

#### <a name="MagicalRuneCost'DerivedFromOption/derived_from_option"></a> `derived_from_option`

- **Type:** <a href="#MagicalRuneCost'DerivedFromOption/derived_from_option">Object</a>

---

### <a name="MagicalRuneCost'DerivedFromOption/derived_from_option"></a> `MagicalRuneCost'DerivedFromOption/derived_from_option`

- **Type:** Empty Object

---

### <a name="MagicalRuneOptionCost"></a> `MagicalRuneOptionCost`

- **Type:** Union
- **Cases:** <a href="#MagicalRuneOptionCost'Single">MagicalRuneOptionCost'Single</a> | <a href="#MagicalRuneOptionCost'Disjunction">MagicalRuneOptionCost'Disjunction</a>

---

### <a name="MagicalRuneOptionCost'Single"></a> `MagicalRuneOptionCost'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRuneOptionCost'Single/tag">See details</a>
`single` |  | <a href="#MagicalRuneOptionCost'Single/single">See details</a>

#### <a name="MagicalRuneOptionCost'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="MagicalRuneOptionCost'Single/single"></a> `single`

- **Type:** <a href="#SingleMagicalRuneCost">SingleMagicalRuneCost</a>

---

### <a name="MagicalRuneOptionCost'Disjunction"></a> `MagicalRuneOptionCost'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRuneOptionCost'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#MagicalRuneOptionCost'Disjunction/disjunction">See details</a>

#### <a name="MagicalRuneOptionCost'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="MagicalRuneOptionCost'Disjunction/disjunction"></a> `disjunction`

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

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SingleMagicalRuneCostTranslation">SingleMagicalRuneCostTranslation</a>&gt;

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

- **Type:** Integer

#### <a name="MagicalRuneCraftingTime/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#MagicalRuneCraftingTimeTranslation">MagicalRuneCraftingTimeTranslation</a>&gt;

---

### <a name="MagicalRuneCraftingTimeTranslation"></a> `MagicalRuneCraftingTimeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`per` | The crafting time has to be per a specific countable entity, e.g. `8 action per person`. | <a href="#MagicalRuneCraftingTimeTranslation/per">See details</a>

#### <a name="MagicalRuneCraftingTimeTranslation/per"></a> `per`

The crafting time has to be per a specific countable entity, e.g. `8 action per person`.

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

### <a name="MagicalRuneImprovementCost"></a> `MagicalRuneImprovementCost`

- **Type:** Union
- **Cases:** <a href="#MagicalRuneImprovementCost'Constant">MagicalRuneImprovementCost'Constant</a> | <a href="#MagicalRuneImprovementCost'DerivedFromOption">MagicalRuneImprovementCost'DerivedFromOption</a>

---

### <a name="MagicalRuneImprovementCost'Constant"></a> `MagicalRuneImprovementCost'Constant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRuneImprovementCost'Constant/tag">See details</a>
`constant` |  | <a href="#MagicalRuneImprovementCost'Constant/constant">See details</a>

#### <a name="MagicalRuneImprovementCost'Constant/tag"></a> `tag`

- **Constant:** `"Constant"`

#### <a name="MagicalRuneImprovementCost'Constant/constant"></a> `constant`

- **Type:** <a href="#ConstantMagicalRuneImprovementCost">ConstantMagicalRuneImprovementCost</a>

---

### <a name="MagicalRuneImprovementCost'DerivedFromOption"></a> `MagicalRuneImprovementCost'DerivedFromOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRuneImprovementCost'DerivedFromOption/tag">See details</a>
`derived_from_option` |  | <a href="#MagicalRuneImprovementCost'DerivedFromOption/derived_from_option">See details</a>

#### <a name="MagicalRuneImprovementCost'DerivedFromOption/tag"></a> `tag`

- **Constant:** `"DerivedFromOption"`

#### <a name="MagicalRuneImprovementCost'DerivedFromOption/derived_from_option"></a> `derived_from_option`

- **Type:** <a href="#MagicalRuneImprovementCost'DerivedFromOption/derived_from_option">Object</a>

---

### <a name="MagicalRuneImprovementCost'DerivedFromOption/derived_from_option"></a> `MagicalRuneImprovementCost'DerivedFromOption/derived_from_option`

- **Type:** Empty Object

---

### <a name="ConstantMagicalRuneImprovementCost"></a> `ConstantMagicalRuneImprovementCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` |  | <a href="#ConstantMagicalRuneImprovementCost/value">See details</a>

#### <a name="ConstantMagicalRuneImprovementCost/value"></a> `value`

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

---

### <a name="MagicalRuneOption"></a> `MagicalRuneOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical rune option’s identifier. An unique, increasing integer. | <a href="#MagicalRuneOption/id">See details</a>
`cost` | The option-specific AE cost. | <a href="#MagicalRuneOption/cost">See details</a>
`improvement_cost` | The option-specific improvement cost. | <a href="#MagicalRuneOption/improvement_cost">See details</a>
`suboption` |  | <a href="#MagicalRuneOption/suboption">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalRuneOption/translations">See details</a>

#### <a name="MagicalRuneOption/id"></a> `id`

The magical rune option’s identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MagicalRuneOption/cost"></a> `cost`

The option-specific AE cost.

- **Type:** <a href="#MagicalRuneOptionCost">MagicalRuneOptionCost</a>

#### <a name="MagicalRuneOption/improvement_cost"></a> `improvement_cost`

The option-specific improvement cost.

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="MagicalRuneOption/suboption"></a> `suboption`

- **Type:** <a href="#MagicalRuneSuboption">MagicalRuneSuboption</a>

#### <a name="MagicalRuneOption/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#MagicalRuneOptionTranslation">MagicalRuneOptionTranslation</a>&gt;

---

### <a name="MagicalRuneSuboption"></a> `MagicalRuneSuboption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalRuneSuboption/tag">See details</a>
`custom` |  | <a href="#MagicalRuneSuboption/custom">See details</a>

#### <a name="MagicalRuneSuboption/tag"></a> `tag`

- **Constant:** `"Custom"`

#### <a name="MagicalRuneSuboption/custom"></a> `custom`

- **Type:** <a href="#CustomMagicalRuneSuboption">CustomMagicalRuneSuboption</a>

---

### <a name="CustomMagicalRuneSuboption"></a> `CustomMagicalRuneSuboption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CustomMagicalRuneSuboption/translations">See details</a>

#### <a name="CustomMagicalRuneSuboption/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#CustomMagicalRuneSuboptionTranslation">CustomMagicalRuneSuboptionTranslation</a>&gt;

---

### <a name="CustomMagicalRuneSuboptionTranslation"></a> `CustomMagicalRuneSuboptionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`examples?` | One or more examples for the suboption. | <a href="#CustomMagicalRuneSuboptionTranslation/examples">See details</a>

#### <a name="CustomMagicalRuneSuboptionTranslation/examples"></a> `examples?`

One or more examples for the suboption.

- **Type:** List
- **Items:** <a href="#CustomMagicalRuneSuboptionTranslation/examples[]">CustomMagicalRuneSuboptionTranslation/examples[]</a>

---

### <a name="CustomMagicalRuneSuboptionTranslation/examples[]"></a> `CustomMagicalRuneSuboptionTranslation/examples[]`

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="MagicalRuneOptionTranslation"></a> `MagicalRuneOptionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the option. | <a href="#MagicalRuneOptionTranslation/name">See details</a>
`native_name` | The native name of the magical rune option. | <a href="#MagicalRuneOptionTranslation/native_name">See details</a>

#### <a name="MagicalRuneOptionTranslation/name"></a> `name`

The name of the option.

The surrounding parenthesis will/should not be included, they will/should be generated.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MagicalRuneOptionTranslation/native_name"></a> `native_name`

The native name of the magical rune option.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

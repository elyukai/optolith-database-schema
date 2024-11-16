# Familiar's Trick

## Definitions

### <a name="FamiliarsTrick"></a> Familiar's Trick (`FamiliarsTrick`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The familiar's trick's identifier. An unique, increasing integer. | <a href="#FamiliarsTrick/id">See details</a>
`animal_types` | The animal types this trick is available to. Either it is available to all or only a list of specific animal types. | <a href="#FamiliarsTrick/animal_types">See details</a>
`parameters` | Measurable parameters of a familiar's trick. | <a href="#FamiliarsTrick/parameters">See details</a>
`property` | The property of the trick. | <a href="#FamiliarsTrick/property">See details</a>
`ap_value?` | The AP value the familiar has to pay for. It may also be that a specific is known by all familiar by default. In the latter case the field is not set. | <a href="#FamiliarsTrick/ap_value">See details</a>
`src` |  | <a href="#FamiliarsTrick/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FamiliarsTrick/translations">See details</a>

#### <a name="FamiliarsTrick/id"></a> `id`

The familiar's trick's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrick/animal_types"></a> `animal_types`

The animal types this trick is available to. Either it is available to all or only a list of specific animal types.

If no animal types are given, the animal disease applies to all animal types.

- **Type:** List
- **Items:** <a href="#FamiliarsTrick/animal_types[]">FamiliarsTrick/animal_types[]</a>

#### <a name="FamiliarsTrick/parameters"></a> `parameters`

Measurable parameters of a familiar's trick.

- **Type:** <a href="#FamiliarsTrickPerformanceParameters">FamiliarsTrickPerformanceParameters</a>

#### <a name="FamiliarsTrick/property"></a> `property`

The property of the trick.

- **Type:** <a href="#FamiliarsTrickProperty">FamiliarsTrickProperty</a>

#### <a name="FamiliarsTrick/ap_value"></a> `ap_value?`

The AP value the familiar has to pay for. It may also be that a specific is known by all familiar by default. In the latter case the field is not set.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrick/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FamiliarsTrick/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#FamiliarsTrickTranslation">FamiliarsTrickTranslation</a>&gt;

---

### <a name="FamiliarsTrick/animal_types[]"></a> `FamiliarsTrick/animal_types[]`

- **Type:** <a href="./_SimpleReferences.md#AnimalTypeReference">AnimalTypeReference</a>

---

### <a name="FamiliarsTrickProperty"></a> `FamiliarsTrickProperty`

- **Type:** Union
- **Cases:** <a href="#FamiliarsTrickProperty'Fixed">FamiliarsTrickProperty'Fixed</a> | <a href="#FamiliarsTrickProperty'Indefinite">FamiliarsTrickProperty'Indefinite</a>

---

### <a name="FamiliarsTrickProperty'Fixed"></a> `FamiliarsTrickProperty'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickProperty'Fixed/tag">See details</a>
`fixed` |  | <a href="#FamiliarsTrickProperty'Fixed/fixed">See details</a>

#### <a name="FamiliarsTrickProperty'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="FamiliarsTrickProperty'Fixed/fixed"></a> `fixed`

- **Type:** <a href="./_SimpleReferences.md#PropertyReference">PropertyReference</a>

---

### <a name="FamiliarsTrickProperty'Indefinite"></a> `FamiliarsTrickProperty'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickProperty'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#FamiliarsTrickProperty'Indefinite/indefinite">See details</a>

#### <a name="FamiliarsTrickProperty'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="FamiliarsTrickProperty'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteFamiliarsTrickProperty">IndefiniteFamiliarsTrickProperty</a>

---

### <a name="IndefiniteFamiliarsTrickProperty"></a> `IndefiniteFamiliarsTrickProperty`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteFamiliarsTrickProperty/translations">See details</a>

#### <a name="IndefiniteFamiliarsTrickProperty/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#IndefiniteFamiliarsTrickPropertyTranslation">IndefiniteFamiliarsTrickPropertyTranslation</a>&gt;

---

### <a name="IndefiniteFamiliarsTrickPropertyTranslation"></a> `IndefiniteFamiliarsTrickPropertyTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the property. | <a href="#IndefiniteFamiliarsTrickPropertyTranslation/description">See details</a>

#### <a name="IndefiniteFamiliarsTrickPropertyTranslation/description"></a> `description`

A description of the property.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="FamiliarsTrickTranslation"></a> `FamiliarsTrickTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the familiar's trick. | <a href="#FamiliarsTrickTranslation/name">See details</a>
`effect` | The effect description. | <a href="#FamiliarsTrickTranslation/effect">See details</a>
`cost` |  | <a href="#FamiliarsTrickTranslation/cost">See details</a>
`duration` |  | <a href="#FamiliarsTrickTranslation/duration">See details</a>
`errata?` |  | <a href="#FamiliarsTrickTranslation/errata">See details</a>

#### <a name="FamiliarsTrickTranslation/name"></a> `name`

The name of the familiar's trick.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="FamiliarsTrickTranslation/effect"></a> `effect`

The effect description.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="FamiliarsTrickTranslation/cost"></a> `cost`

- **Type:** <a href="./_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="FamiliarsTrickTranslation/duration"></a> `duration`

- **Type:** <a href="./_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="FamiliarsTrickTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="FamiliarsTrickPerformanceParameters"></a> `FamiliarsTrickPerformanceParameters`

Measurable parameters of a familiar's trick.

- **Type:** Union
- **Cases:** <a href="#FamiliarsTrickPerformanceParameters'OneTime">FamiliarsTrickPerformanceParameters'OneTime</a> | <a href="#FamiliarsTrickPerformanceParameters'OneTimeInterval">FamiliarsTrickPerformanceParameters'OneTimeInterval</a> | <a href="#FamiliarsTrickPerformanceParameters'Sustained">FamiliarsTrickPerformanceParameters'Sustained</a>

---

### <a name="FamiliarsTrickPerformanceParameters'OneTime"></a> `FamiliarsTrickPerformanceParameters'OneTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickPerformanceParameters'OneTime/tag">See details</a>
`one_time` |  | <a href="#FamiliarsTrickPerformanceParameters'OneTime/one_time">See details</a>

#### <a name="FamiliarsTrickPerformanceParameters'OneTime/tag"></a> `tag`

- **Constant:** `"OneTime"`

#### <a name="FamiliarsTrickPerformanceParameters'OneTime/one_time"></a> `one_time`

- **Type:** <a href="#FamiliarsTrickOneTimePerformanceParameters">FamiliarsTrickOneTimePerformanceParameters</a>

---

### <a name="FamiliarsTrickPerformanceParameters'OneTimeInterval"></a> `FamiliarsTrickPerformanceParameters'OneTimeInterval`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickPerformanceParameters'OneTimeInterval/tag">See details</a>
`one_time_interval` |  | <a href="#FamiliarsTrickPerformanceParameters'OneTimeInterval/one_time_interval">See details</a>

#### <a name="FamiliarsTrickPerformanceParameters'OneTimeInterval/tag"></a> `tag`

- **Constant:** `"OneTimeInterval"`

#### <a name="FamiliarsTrickPerformanceParameters'OneTimeInterval/one_time_interval"></a> `one_time_interval`

- **Type:** <a href="#FamiliarsTrickOneTimeIntervalPerformanceParameters">FamiliarsTrickOneTimeIntervalPerformanceParameters</a>

---

### <a name="FamiliarsTrickPerformanceParameters'Sustained"></a> `FamiliarsTrickPerformanceParameters'Sustained`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickPerformanceParameters'Sustained/tag">See details</a>
`sustained` |  | <a href="#FamiliarsTrickPerformanceParameters'Sustained/sustained">See details</a>

#### <a name="FamiliarsTrickPerformanceParameters'Sustained/tag"></a> `tag`

- **Constant:** `"Sustained"`

#### <a name="FamiliarsTrickPerformanceParameters'Sustained/sustained"></a> `sustained`

- **Type:** <a href="#FamiliarsTrickSustainedPerformanceParameters">FamiliarsTrickSustainedPerformanceParameters</a>

---

### <a name="FamiliarsTrickOneTimePerformanceParameters"></a> `FamiliarsTrickOneTimePerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` |  | <a href="#FamiliarsTrickOneTimePerformanceParameters/cost">See details</a>
`duration` |  | <a href="#FamiliarsTrickOneTimePerformanceParameters/duration">See details</a>

#### <a name="FamiliarsTrickOneTimePerformanceParameters/cost"></a> `cost`

- **Type:** <a href="#FamiliarsTrickOneTimeCost">FamiliarsTrickOneTimeCost</a>

#### <a name="FamiliarsTrickOneTimePerformanceParameters/duration"></a> `duration`

- **Type:** <a href="#FamiliarsTrickOneTimeDuration">FamiliarsTrickOneTimeDuration</a>

---

### <a name="FamiliarsTrickOneTimeCost"></a> `FamiliarsTrickOneTimeCost`

- **Type:** Union
- **Cases:** <a href="#FamiliarsTrickOneTimeCost'Fixed">FamiliarsTrickOneTimeCost'Fixed</a> | <a href="#FamiliarsTrickOneTimeCost'All">FamiliarsTrickOneTimeCost'All</a> | <a href="#FamiliarsTrickOneTimeCost'Indefinite">FamiliarsTrickOneTimeCost'Indefinite</a>

---

### <a name="FamiliarsTrickOneTimeCost'Fixed"></a> `FamiliarsTrickOneTimeCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickOneTimeCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#FamiliarsTrickOneTimeCost'Fixed/fixed">See details</a>

#### <a name="FamiliarsTrickOneTimeCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="FamiliarsTrickOneTimeCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FamiliarsTrickFixedOneTimeCost">FamiliarsTrickFixedOneTimeCost</a>

---

### <a name="FamiliarsTrickOneTimeCost'All"></a> `FamiliarsTrickOneTimeCost'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickOneTimeCost'All/tag">See details</a>
`all` |  | <a href="#FamiliarsTrickOneTimeCost'All/all">See details</a>

#### <a name="FamiliarsTrickOneTimeCost'All/tag"></a> `tag`

- **Constant:** `"All"`

#### <a name="FamiliarsTrickOneTimeCost'All/all"></a> `all`

- **Type:** <a href="#FamiliarsTrickAllOneTimeCost">FamiliarsTrickAllOneTimeCost</a>

---

### <a name="FamiliarsTrickOneTimeCost'Indefinite"></a> `FamiliarsTrickOneTimeCost'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickOneTimeCost'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#FamiliarsTrickOneTimeCost'Indefinite/indefinite">See details</a>

#### <a name="FamiliarsTrickOneTimeCost'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="FamiliarsTrickOneTimeCost'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#FamiliarsTrickIndefiniteOneTimeCost">FamiliarsTrickIndefiniteOneTimeCost</a>

---

### <a name="FamiliarsTrickFixedOneTimeCost"></a> `FamiliarsTrickFixedOneTimeCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ae_value` | The AE cost value. | <a href="#FamiliarsTrickFixedOneTimeCost/ae_value">See details</a>
`lp_value?` | The LP cost value. | <a href="#FamiliarsTrickFixedOneTimeCost/lp_value">See details</a>
`interval?` | The interval in which you have to pay the AE cost again. | <a href="#FamiliarsTrickFixedOneTimeCost/interval">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FamiliarsTrickFixedOneTimeCost/translations">See details</a>

#### <a name="FamiliarsTrickFixedOneTimeCost/ae_value"></a> `ae_value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrickFixedOneTimeCost/lp_value"></a> `lp_value?`

The LP cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrickFixedOneTimeCost/interval"></a> `interval?`

The interval in which you have to pay the AE cost again.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

#### <a name="FamiliarsTrickFixedOneTimeCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#FamiliarsTrickFixedOneTimeCostTranslation">FamiliarsTrickFixedOneTimeCostTranslation</a>&gt;

---

### <a name="FamiliarsTrickFixedOneTimeCostTranslation"></a> `FamiliarsTrickFixedOneTimeCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`per?` | The cost have to be per a specific countable entity, e.g. `8 KP per person`. | <a href="#FamiliarsTrickFixedOneTimeCostTranslation/per">See details</a>

#### <a name="FamiliarsTrickFixedOneTimeCostTranslation/per"></a> `per?`

The cost have to be per a specific countable entity, e.g. `8 KP per person`.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

---

### <a name="FamiliarsTrickAllOneTimeCost"></a> `FamiliarsTrickAllOneTimeCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`minimum?` | The minimum AE the familiar has to have. | <a href="#FamiliarsTrickAllOneTimeCost/minimum">See details</a>

#### <a name="FamiliarsTrickAllOneTimeCost/minimum"></a> `minimum?`

The minimum AE the familiar has to have.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="FamiliarsTrickIndefiniteOneTimeCost"></a> `FamiliarsTrickIndefiniteOneTimeCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FamiliarsTrickIndefiniteOneTimeCost/translations">See details</a>

#### <a name="FamiliarsTrickIndefiniteOneTimeCost/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#FamiliarsTrickIndefiniteOneTimeCostTranslation">FamiliarsTrickIndefiniteOneTimeCostTranslation</a>&gt;

---

### <a name="FamiliarsTrickIndefiniteOneTimeCostTranslation"></a> `FamiliarsTrickIndefiniteOneTimeCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the AE cost. | <a href="#FamiliarsTrickIndefiniteOneTimeCostTranslation/description">See details</a>

#### <a name="FamiliarsTrickIndefiniteOneTimeCostTranslation/description"></a> `description`

A description of the AE cost.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="FamiliarsTrickOneTimeDuration"></a> `FamiliarsTrickOneTimeDuration`

- **Type:** Union
- **Cases:** <a href="#FamiliarsTrickOneTimeDuration'Immediate">FamiliarsTrickOneTimeDuration'Immediate</a> | <a href="#FamiliarsTrickOneTimeDuration'Fixed">FamiliarsTrickOneTimeDuration'Fixed</a> | <a href="#FamiliarsTrickOneTimeDuration'Indefinite">FamiliarsTrickOneTimeDuration'Indefinite</a>

---

### <a name="FamiliarsTrickOneTimeDuration'Immediate"></a> `FamiliarsTrickOneTimeDuration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickOneTimeDuration'Immediate/tag">See details</a>
`immediate` |  | <a href="#FamiliarsTrickOneTimeDuration'Immediate/immediate">See details</a>

#### <a name="FamiliarsTrickOneTimeDuration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

#### <a name="FamiliarsTrickOneTimeDuration'Immediate/immediate"></a> `immediate`

- **Type:** <a href="#FamiliarsTrickOneTimeDuration'Immediate/immediate">Object</a>

---

### <a name="FamiliarsTrickOneTimeDuration'Immediate/immediate"></a> `FamiliarsTrickOneTimeDuration'Immediate/immediate`

- **Type:** Empty Object

---

### <a name="FamiliarsTrickOneTimeDuration'Fixed"></a> `FamiliarsTrickOneTimeDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickOneTimeDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#FamiliarsTrickOneTimeDuration'Fixed/fixed">See details</a>

#### <a name="FamiliarsTrickOneTimeDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="FamiliarsTrickOneTimeDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FamiliarsTrickFixedOneTimeDuration">FamiliarsTrickFixedOneTimeDuration</a>

---

### <a name="FamiliarsTrickOneTimeDuration'Indefinite"></a> `FamiliarsTrickOneTimeDuration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrickOneTimeDuration'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#FamiliarsTrickOneTimeDuration'Indefinite/indefinite">See details</a>

#### <a name="FamiliarsTrickOneTimeDuration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="FamiliarsTrickOneTimeDuration'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#FamiliarsTrickIndefiniteOneTimeDuration">FamiliarsTrickIndefiniteOneTimeDuration</a>

---

### <a name="FamiliarsTrickFixedOneTimeDuration"></a> `FamiliarsTrickFixedOneTimeDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_maximum?` | If the duration is the maximum duration, so it may end earlier. | <a href="#FamiliarsTrickFixedOneTimeDuration/is_maximum">See details</a>
`value` | The (unitless) duration. | <a href="#FamiliarsTrickFixedOneTimeDuration/value">See details</a>
`unit` | The duration unit. | <a href="#FamiliarsTrickFixedOneTimeDuration/unit">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FamiliarsTrickFixedOneTimeDuration/translations">See details</a>

#### <a name="FamiliarsTrickFixedOneTimeDuration/is_maximum"></a> `is_maximum?`

If the duration is the maximum duration, so it may end earlier.

- **Type:** Boolean

#### <a name="FamiliarsTrickFixedOneTimeDuration/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrickFixedOneTimeDuration/unit"></a> `unit`

The duration unit.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>

#### <a name="FamiliarsTrickFixedOneTimeDuration/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#FamiliarsTrickFixedOneTimeDurationTranslation">FamiliarsTrickFixedOneTimeDurationTranslation</a>&gt;

---

### <a name="FamiliarsTrickFixedOneTimeDurationTranslation"></a> `FamiliarsTrickFixedOneTimeDurationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement?` | A replacement string. | <a href="#FamiliarsTrickFixedOneTimeDurationTranslation/replacement">See details</a>

#### <a name="FamiliarsTrickFixedOneTimeDurationTranslation/replacement"></a> `replacement?`

A replacement string.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextReplace">ResponsiveTextReplace</a>

---

### <a name="FamiliarsTrickIndefiniteOneTimeDuration"></a> `FamiliarsTrickIndefiniteOneTimeDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FamiliarsTrickIndefiniteOneTimeDuration/translations">See details</a>

#### <a name="FamiliarsTrickIndefiniteOneTimeDuration/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#FamiliarsTrickIndefiniteOneTimeDurationTranslation">FamiliarsTrickIndefiniteOneTimeDurationTranslation</a>&gt;

---

### <a name="FamiliarsTrickIndefiniteOneTimeDurationTranslation"></a> `FamiliarsTrickIndefiniteOneTimeDurationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#FamiliarsTrickIndefiniteOneTimeDurationTranslation/description">See details</a>

#### <a name="FamiliarsTrickIndefiniteOneTimeDurationTranslation/description"></a> `description`

A description of the duration.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="FamiliarsTrickOneTimeIntervalPerformanceParameters"></a> `FamiliarsTrickOneTimeIntervalPerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` |  | <a href="#FamiliarsTrickOneTimeIntervalPerformanceParameters/cost">See details</a>

#### <a name="FamiliarsTrickOneTimeIntervalPerformanceParameters/cost"></a> `cost`

- **Type:** <a href="#FamiliarsTrickOneTimeIntervalCost">FamiliarsTrickOneTimeIntervalCost</a>

---

### <a name="FamiliarsTrickOneTimeIntervalCost"></a> `FamiliarsTrickOneTimeIntervalCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ae_value` | The AE cost value. | <a href="#FamiliarsTrickOneTimeIntervalCost/ae_value">See details</a>
`lp_value?` | The LP cost value. | <a href="#FamiliarsTrickOneTimeIntervalCost/lp_value">See details</a>
`interval` | The duration granted/added by paying the given AE cost. | <a href="#FamiliarsTrickOneTimeIntervalCost/interval">See details</a>

#### <a name="FamiliarsTrickOneTimeIntervalCost/ae_value"></a> `ae_value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrickOneTimeIntervalCost/lp_value"></a> `lp_value?`

The LP cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrickOneTimeIntervalCost/interval"></a> `interval`

The duration granted/added by paying the given AE cost.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

---

### <a name="FamiliarsTrickSustainedPerformanceParameters"></a> `FamiliarsTrickSustainedPerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` |  | <a href="#FamiliarsTrickSustainedPerformanceParameters/cost">See details</a>

#### <a name="FamiliarsTrickSustainedPerformanceParameters/cost"></a> `cost`

- **Type:** <a href="#FamiliarsTrickSustainedCost">FamiliarsTrickSustainedCost</a>

---

### <a name="FamiliarsTrickSustainedCost"></a> `FamiliarsTrickSustainedCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ae_value` | The AE cost value. | <a href="#FamiliarsTrickSustainedCost/ae_value">See details</a>
`lp_value?` | The LP cost value. | <a href="#FamiliarsTrickSustainedCost/lp_value">See details</a>
`interval?` | The interval in which you have to pay the AE cost again, if any. | <a href="#FamiliarsTrickSustainedCost/interval">See details</a>

#### <a name="FamiliarsTrickSustainedCost/ae_value"></a> `ae_value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrickSustainedCost/lp_value"></a> `lp_value?`

The LP cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrickSustainedCost/interval"></a> `interval?`

The interval in which you have to pay the AE cost again, if any.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

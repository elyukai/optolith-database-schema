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

The animal types this trick is available to. Either it is available to all
or only a list of specific animal types.

If no animal types are given, the animal disease applies to all animal
types.

- **Type:** List
- **Items:** <a href="#FamiliarsTrick/animal_types[]">FamiliarsTrick/animal_types[]</a>

#### <a name="FamiliarsTrick/parameters"></a> `parameters`

Measurable parameters of a familiar's trick.

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="FamiliarsTrick/property"></a> `property`

The property of the trick.

- **Type:** <a href="#Property">Property</a>

#### <a name="FamiliarsTrick/ap_value"></a> `ap_value?`

The AP value the familiar has to pay for. It may also be that a specific is
known by all familiar by default. In the latter case the field is not set.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrick/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FamiliarsTrick/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FamiliarsTrick/translations[key]">FamiliarsTrick/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FamiliarsTrick/animal_types[]"></a> `FamiliarsTrick/animal_types[]`

- **Type:** <a href="./_SimpleReferences.md#AnimalTypeReference">AnimalTypeReference</a>

---

### <a name="FamiliarsTrick/translations[key]"></a> `FamiliarsTrick/translations[key]`

- **Type:** <a href="#FamiliarsTrickTranslation">FamiliarsTrickTranslation</a>

---

### <a name="Property"></a> `Property`

- **Type:** Union
- **Cases:** <a href="#Property'Fixed">Property'Fixed</a> | <a href="#Property'Indefinite">Property'Indefinite</a>

---

### <a name="Property'Fixed"></a> `Property'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Property'Fixed/tag">See details</a>
`fixed` |  | <a href="#Property'Fixed/fixed">See details</a>

#### <a name="Property'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="Property'Fixed/fixed"></a> `fixed`

- **Type:** <a href="./_SimpleReferences.md#PropertyReference">PropertyReference</a>

---

### <a name="Property'Indefinite"></a> `Property'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Property'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#Property'Indefinite/indefinite">See details</a>

#### <a name="Property'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="Property'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteProperty">IndefiniteProperty</a>

---

### <a name="IndefiniteProperty"></a> `IndefiniteProperty`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteProperty/translations">See details</a>

#### <a name="IndefiniteProperty/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#IndefiniteProperty/translations[key]">IndefiniteProperty/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="IndefiniteProperty/translations[key]"></a> `IndefiniteProperty/translations[key]`

- **Type:** <a href="#IndefinitePropertyTranslation">IndefinitePropertyTranslation</a>

---

### <a name="IndefinitePropertyTranslation"></a> `IndefinitePropertyTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the property. | <a href="#IndefinitePropertyTranslation/description">See details</a>

#### <a name="IndefinitePropertyTranslation/description"></a> `description`

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

- **Type:** <a href="#FamiliarsTrickTranslation/cost">Object</a>

#### <a name="FamiliarsTrickTranslation/duration"></a> `duration`

- **Type:** <a href="#FamiliarsTrickTranslation/duration">Object</a>

#### <a name="FamiliarsTrickTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="FamiliarsTrickTranslation/cost"></a> `FamiliarsTrickTranslation/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#FamiliarsTrickTranslation/cost/full">See details</a>
`abbr` |  | <a href="#FamiliarsTrickTranslation/cost/abbr">See details</a>

#### <a name="FamiliarsTrickTranslation/cost/full"></a> `full`

- **Type:** String

#### <a name="FamiliarsTrickTranslation/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="FamiliarsTrickTranslation/duration"></a> `FamiliarsTrickTranslation/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#FamiliarsTrickTranslation/duration/full">See details</a>
`abbr` |  | <a href="#FamiliarsTrickTranslation/duration/abbr">See details</a>

#### <a name="FamiliarsTrickTranslation/duration/full"></a> `full`

- **Type:** String

#### <a name="FamiliarsTrickTranslation/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a familiar's trick.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters'OneTime">PerformanceParameters'OneTime</a> | <a href="#PerformanceParameters'OneTimeInterval">PerformanceParameters'OneTimeInterval</a> | <a href="#PerformanceParameters'Sustained">PerformanceParameters'Sustained</a>

---

### <a name="PerformanceParameters'OneTime"></a> `PerformanceParameters'OneTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/tag">See details</a>
`one_time` |  | <a href="#PerformanceParameters'OneTime/one_time">See details</a>

#### <a name="PerformanceParameters'OneTime/tag"></a> `tag`

- **Constant:** `"OneTime"`

#### <a name="PerformanceParameters'OneTime/one_time"></a> `one_time`

- **Type:** <a href="#OneTimePerformanceParameters">OneTimePerformanceParameters</a>

---

### <a name="PerformanceParameters'OneTimeInterval"></a> `PerformanceParameters'OneTimeInterval`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTimeInterval/tag">See details</a>
`one_time_interval` |  | <a href="#PerformanceParameters'OneTimeInterval/one_time_interval">See details</a>

#### <a name="PerformanceParameters'OneTimeInterval/tag"></a> `tag`

- **Constant:** `"OneTimeInterval"`

#### <a name="PerformanceParameters'OneTimeInterval/one_time_interval"></a> `one_time_interval`

- **Type:** <a href="#OneTimeIntervalPerformanceParameters">OneTimeIntervalPerformanceParameters</a>

---

### <a name="PerformanceParameters'Sustained"></a> `PerformanceParameters'Sustained`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'Sustained/tag">See details</a>
`sustained` |  | <a href="#PerformanceParameters'Sustained/sustained">See details</a>

#### <a name="PerformanceParameters'Sustained/tag"></a> `tag`

- **Constant:** `"Sustained"`

#### <a name="PerformanceParameters'Sustained/sustained"></a> `sustained`

- **Type:** <a href="#SustainedPerformanceParameters">SustainedPerformanceParameters</a>

---

### <a name="OneTimePerformanceParameters"></a> `OneTimePerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` |  | <a href="#OneTimePerformanceParameters/cost">See details</a>
`duration` |  | <a href="#OneTimePerformanceParameters/duration">See details</a>

#### <a name="OneTimePerformanceParameters/cost"></a> `cost`

- **Type:** <a href="#OneTimeCost">OneTimeCost</a>

#### <a name="OneTimePerformanceParameters/duration"></a> `duration`

- **Type:** <a href="#OneTimeDuration">OneTimeDuration</a>

---

### <a name="OneTimeCost"></a> `OneTimeCost`

- **Type:** Union
- **Cases:** <a href="#OneTimeCost'Fixed">OneTimeCost'Fixed</a> | <a href="#OneTimeCost'All">OneTimeCost'All</a> | <a href="#OneTimeCost'Indefinite">OneTimeCost'Indefinite</a>

---

### <a name="OneTimeCost'Fixed"></a> `OneTimeCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#OneTimeCost'Fixed/fixed">See details</a>

#### <a name="OneTimeCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="OneTimeCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedOneTimeCost">FixedOneTimeCost</a>

---

### <a name="OneTimeCost'All"></a> `OneTimeCost'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeCost'All/tag">See details</a>
`all` |  | <a href="#OneTimeCost'All/all">See details</a>

#### <a name="OneTimeCost'All/tag"></a> `tag`

- **Constant:** `"All"`

#### <a name="OneTimeCost'All/all"></a> `all`

- **Type:** <a href="#AllOneTimeCost">AllOneTimeCost</a>

---

### <a name="OneTimeCost'Indefinite"></a> `OneTimeCost'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeCost'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#OneTimeCost'Indefinite/indefinite">See details</a>

#### <a name="OneTimeCost'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="OneTimeCost'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteOneTimeCost">IndefiniteOneTimeCost</a>

---

### <a name="FixedOneTimeCost"></a> `FixedOneTimeCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#FixedOneTimeCost/value">See details</a>
`interval?` | The interval in which you have to pay the AE cost again. | <a href="#FixedOneTimeCost/interval">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FixedOneTimeCost/translations">See details</a>

#### <a name="FixedOneTimeCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedOneTimeCost/interval"></a> `interval?`

The interval in which you have to pay the AE cost again.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

#### <a name="FixedOneTimeCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FixedOneTimeCost/translations[key]">FixedOneTimeCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FixedOneTimeCost/translations[key]"></a> `FixedOneTimeCost/translations[key]`

- **Type:** <a href="#FixedOneTimeCostTranslation">FixedOneTimeCostTranslation</a>

---

### <a name="FixedOneTimeCostTranslation"></a> `FixedOneTimeCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`per?` | The cost have to be per a specific countable entity, e.g. `8 KP per person`. | <a href="#FixedOneTimeCostTranslation/per">See details</a>

#### <a name="FixedOneTimeCostTranslation/per"></a> `per?`

The cost have to be per a specific countable entity, e.g. `8 KP
per person`.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

---

### <a name="AllOneTimeCost"></a> `AllOneTimeCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`minimum?` | The minimum AE the familiar has to have. | <a href="#AllOneTimeCost/minimum">See details</a>

#### <a name="AllOneTimeCost/minimum"></a> `minimum?`

The minimum AE the familiar has to have.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="IndefiniteOneTimeCost"></a> `IndefiniteOneTimeCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteOneTimeCost/translations">See details</a>

#### <a name="IndefiniteOneTimeCost/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#IndefiniteOneTimeCost/translations[key]">IndefiniteOneTimeCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="IndefiniteOneTimeCost/translations[key]"></a> `IndefiniteOneTimeCost/translations[key]`

- **Type:** <a href="#IndefiniteOneTimeCostTranslation">IndefiniteOneTimeCostTranslation</a>

---

### <a name="IndefiniteOneTimeCostTranslation"></a> `IndefiniteOneTimeCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the AE cost. | <a href="#IndefiniteOneTimeCostTranslation/description">See details</a>

#### <a name="IndefiniteOneTimeCostTranslation/description"></a> `description`

A description of the AE cost.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="OneTimeDuration"></a> `OneTimeDuration`

- **Type:** Union
- **Cases:** <a href="#OneTimeDuration'Immediate">OneTimeDuration'Immediate</a> | <a href="#OneTimeDuration'Fixed">OneTimeDuration'Fixed</a> | <a href="#OneTimeDuration'Indefinite">OneTimeDuration'Indefinite</a>

---

### <a name="OneTimeDuration'Immediate"></a> `OneTimeDuration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeDuration'Immediate/tag">See details</a>
`immediate` |  | <a href="#OneTimeDuration'Immediate/immediate">See details</a>

#### <a name="OneTimeDuration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

#### <a name="OneTimeDuration'Immediate/immediate"></a> `immediate`

- **Type:** <a href="#OneTimeDuration'Immediate/immediate">Object</a>

---

### <a name="OneTimeDuration'Immediate/immediate"></a> `OneTimeDuration'Immediate/immediate`

- **Type:** Empty Object

---

### <a name="OneTimeDuration'Fixed"></a> `OneTimeDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#OneTimeDuration'Fixed/fixed">See details</a>

#### <a name="OneTimeDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="OneTimeDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedOneTimeDuration">FixedOneTimeDuration</a>

---

### <a name="OneTimeDuration'Indefinite"></a> `OneTimeDuration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeDuration'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#OneTimeDuration'Indefinite/indefinite">See details</a>

#### <a name="OneTimeDuration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="OneTimeDuration'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteOneTimeDuration">IndefiniteOneTimeDuration</a>

---

### <a name="FixedOneTimeDuration"></a> `FixedOneTimeDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_maximum?` | If the duration is the maximum duration, so it may end earlier. | <a href="#FixedOneTimeDuration/is_maximum">See details</a>
`value` | The (unitless) duration. | <a href="#FixedOneTimeDuration/value">See details</a>
`unit` | The duration unit. | <a href="#FixedOneTimeDuration/unit">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FixedOneTimeDuration/translations">See details</a>

#### <a name="FixedOneTimeDuration/is_maximum"></a> `is_maximum?`

If the duration is the maximum duration, so it may end earlier.

- **Type:** Boolean

#### <a name="FixedOneTimeDuration/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedOneTimeDuration/unit"></a> `unit`

The duration unit.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>

#### <a name="FixedOneTimeDuration/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FixedOneTimeDuration/translations[key]">FixedOneTimeDuration/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FixedOneTimeDuration/translations[key]"></a> `FixedOneTimeDuration/translations[key]`

- **Type:** <a href="#FixedOneTimeDurationTranslation">FixedOneTimeDurationTranslation</a>

---

### <a name="FixedOneTimeDurationTranslation"></a> `FixedOneTimeDurationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement?` | A replacement string. | <a href="#FixedOneTimeDurationTranslation/replacement">See details</a>

#### <a name="FixedOneTimeDurationTranslation/replacement"></a> `replacement?`

A replacement string.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextReplace">ResponsiveTextReplace</a>

---

### <a name="IndefiniteOneTimeDuration"></a> `IndefiniteOneTimeDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteOneTimeDuration/translations">See details</a>

#### <a name="IndefiniteOneTimeDuration/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#IndefiniteOneTimeDuration/translations[key]">IndefiniteOneTimeDuration/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="IndefiniteOneTimeDuration/translations[key]"></a> `IndefiniteOneTimeDuration/translations[key]`

- **Type:** <a href="#IndefiniteOneTimeDurationTranslation">IndefiniteOneTimeDurationTranslation</a>

---

### <a name="IndefiniteOneTimeDurationTranslation"></a> `IndefiniteOneTimeDurationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#IndefiniteOneTimeDurationTranslation/description">See details</a>

#### <a name="IndefiniteOneTimeDurationTranslation/description"></a> `description`

A description of the duration.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="OneTimeIntervalPerformanceParameters"></a> `OneTimeIntervalPerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` |  | <a href="#OneTimeIntervalPerformanceParameters/cost">See details</a>

#### <a name="OneTimeIntervalPerformanceParameters/cost"></a> `cost`

- **Type:** <a href="#OneTimeIntervalCost">OneTimeIntervalCost</a>

---

### <a name="OneTimeIntervalCost"></a> `OneTimeIntervalCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#OneTimeIntervalCost/value">See details</a>
`interval` | The duration granted/added by paying the given AE cost. | <a href="#OneTimeIntervalCost/interval">See details</a>

#### <a name="OneTimeIntervalCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="OneTimeIntervalCost/interval"></a> `interval`

The duration granted/added by paying the given AE cost.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

---

### <a name="SustainedPerformanceParameters"></a> `SustainedPerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` |  | <a href="#SustainedPerformanceParameters/cost">See details</a>

#### <a name="SustainedPerformanceParameters/cost"></a> `cost`

- **Type:** <a href="#SustainedCost">SustainedCost</a>

---

### <a name="SustainedCost"></a> `SustainedCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#SustainedCost/value">See details</a>
`interval` | The interval in which you have to pay the AE cost again. | <a href="#SustainedCost/interval">See details</a>

#### <a name="SustainedCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SustainedCost/interval"></a> `interval`

The interval in which you have to pay the AE cost again.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

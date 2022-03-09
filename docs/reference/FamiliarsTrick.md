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
`ap_value` | The AP value the familiar has to pay for. It may also be that a specific is known by all familiar by default. | <a href="#FamiliarsTrick/ap_value">See details</a>
`src` |  | <a href="#FamiliarsTrick/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FamiliarsTrick/translations">See details</a>

#### <a name="FamiliarsTrick/id"></a> `id`

The familiar's trick's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FamiliarsTrick/animal_types"></a> `animal_types`

The animal types this trick is available to. Either it is available to all
or only a list of specific animal types.

- **Type:** Union
- **Cases:** <a href="#FamiliarsTrick/animal_types'All">FamiliarsTrick/animal_types'All</a> | <a href="#FamiliarsTrick/animal_types'Specific">FamiliarsTrick/animal_types'Specific</a>

#### <a name="FamiliarsTrick/parameters"></a> `parameters`

Measurable parameters of a familiar's trick.

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="FamiliarsTrick/property"></a> `property`

The property of the trick.

- **Type:** Union
- **Cases:** <a href="#FamiliarsTrick/property'Fixed">FamiliarsTrick/property'Fixed</a> | <a href="#FamiliarsTrick/property'Indefinite">FamiliarsTrick/property'Indefinite</a>

#### <a name="FamiliarsTrick/ap_value"></a> `ap_value`

The AP value the familiar has to pay for. It may also be that a specific is
known by all familiar by default.

- **Type:** Union
- **Cases:** <a href="#FamiliarsTrick/ap_value'Fixed">FamiliarsTrick/ap_value'Fixed</a> | <a href="#FamiliarsTrick/ap_value'Default">FamiliarsTrick/ap_value'Default</a>

#### <a name="FamiliarsTrick/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FamiliarsTrick/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FamiliarsTrick/translations[key]">FamiliarsTrick/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FamiliarsTrick/animal_types'All"></a> `FamiliarsTrick/animal_types'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrick/animal_types'All/tag">See details</a>

#### <a name="FamiliarsTrick/animal_types'All/tag"></a> `tag`

- **Constant:** `"All"`

---

### <a name="FamiliarsTrick/animal_types'Specific"></a> `FamiliarsTrick/animal_types'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrick/animal_types'Specific/tag">See details</a>
`list` | The list of specific animal types. | <a href="#FamiliarsTrick/animal_types'Specific/list">See details</a>

#### <a name="FamiliarsTrick/animal_types'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="FamiliarsTrick/animal_types'Specific/list"></a> `list`

The list of specific animal types.

- **Type:** List
- **Items:** <a href="#FamiliarsTrick/animal_types'Specific/list[]">FamiliarsTrick/animal_types'Specific/list[]</a>
- **Minimum Items:** `1`

---

### <a name="FamiliarsTrick/animal_types'Specific/list[]"></a> `FamiliarsTrick/animal_types'Specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal type's identifier. | <a href="#FamiliarsTrick/animal_types'Specific/list[]/id">See details</a>

#### <a name="FamiliarsTrick/animal_types'Specific/list[]/id"></a> `id`

The animal type's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="FamiliarsTrick/property'Fixed"></a> `FamiliarsTrick/property'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrick/property'Fixed/tag">See details</a>
`id` | The property's identifier. | <a href="#FamiliarsTrick/property'Fixed/id">See details</a>

#### <a name="FamiliarsTrick/property'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="FamiliarsTrick/property'Fixed/id"></a> `id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="FamiliarsTrick/property'Indefinite"></a> `FamiliarsTrick/property'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrick/property'Indefinite/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FamiliarsTrick/property'Indefinite/translations">See details</a>

#### <a name="FamiliarsTrick/property'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="FamiliarsTrick/property'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FamiliarsTrick/property'Indefinite/translations[key]">FamiliarsTrick/property'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FamiliarsTrick/property'Indefinite/translations[key]"></a> `FamiliarsTrick/property'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the property. | <a href="#FamiliarsTrick/property'Indefinite/translations[key]/description">See details</a>

#### <a name="FamiliarsTrick/property'Indefinite/translations[key]/description"></a> `description`

A description of the property.

- **Type:** <a href="#FamiliarsTrick/property'Indefinite/translations[key]/description">Object</a>

---

### <a name="FamiliarsTrick/property'Indefinite/translations[key]/description"></a> `FamiliarsTrick/property'Indefinite/translations[key]/description`

A description of the property.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full description of the property. | <a href="#FamiliarsTrick/property'Indefinite/translations[key]/description/default">See details</a>
`compressed` | A compressed description of the property for use in small areas (e.g. on character sheet). | <a href="#FamiliarsTrick/property'Indefinite/translations[key]/description/compressed">See details</a>

#### <a name="FamiliarsTrick/property'Indefinite/translations[key]/description/default"></a> `default`

The full description of the property.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="FamiliarsTrick/property'Indefinite/translations[key]/description/compressed"></a> `compressed`

A compressed description of the property for use in small areas
(e.g. on character sheet).

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="FamiliarsTrick/ap_value'Fixed"></a> `FamiliarsTrick/ap_value'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrick/ap_value'Fixed/tag">See details</a>
`value` | The adventure points value. | <a href="#FamiliarsTrick/ap_value'Fixed/value">See details</a>

#### <a name="FamiliarsTrick/ap_value'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="FamiliarsTrick/ap_value'Fixed/value"></a> `value`

The adventure points value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="FamiliarsTrick/ap_value'Default"></a> `FamiliarsTrick/ap_value'Default`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FamiliarsTrick/ap_value'Default/tag">See details</a>

#### <a name="FamiliarsTrick/ap_value'Default/tag"></a> `tag`

- **Constant:** `"Default"`

---

### <a name="FamiliarsTrick/translations[key]"></a> `FamiliarsTrick/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the familiar's trick. | <a href="#FamiliarsTrick/translations[key]/name">See details</a>
`effect` | The effect description. | <a href="#FamiliarsTrick/translations[key]/effect">See details</a>
`cost` |  | <a href="#FamiliarsTrick/translations[key]/cost">See details</a>
`duration` |  | <a href="#FamiliarsTrick/translations[key]/duration">See details</a>
`errata?` |  | <a href="#FamiliarsTrick/translations[key]/errata">See details</a>

#### <a name="FamiliarsTrick/translations[key]/name"></a> `name`

The name of the familiar's trick.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="FamiliarsTrick/translations[key]/effect"></a> `effect`

The effect description.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="FamiliarsTrick/translations[key]/cost"></a> `cost`

- **Type:** <a href="#FamiliarsTrick/translations[key]/cost">Object</a>

#### <a name="FamiliarsTrick/translations[key]/duration"></a> `duration`

- **Type:** <a href="#FamiliarsTrick/translations[key]/duration">Object</a>

#### <a name="FamiliarsTrick/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="FamiliarsTrick/translations[key]/cost"></a> `FamiliarsTrick/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#FamiliarsTrick/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#FamiliarsTrick/translations[key]/cost/abbr">See details</a>

#### <a name="FamiliarsTrick/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="FamiliarsTrick/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="FamiliarsTrick/translations[key]/duration"></a> `FamiliarsTrick/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#FamiliarsTrick/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#FamiliarsTrick/translations[key]/duration/abbr">See details</a>

#### <a name="FamiliarsTrick/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="FamiliarsTrick/translations[key]/duration/abbr"></a> `abbr`

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
`cost` |  | <a href="#PerformanceParameters'OneTime/cost">See details</a>
`duration` |  | <a href="#PerformanceParameters'OneTime/duration">See details</a>

#### <a name="PerformanceParameters'OneTime/tag"></a> `tag`

- **Constant:** `"OneTime"`

#### <a name="PerformanceParameters'OneTime/cost"></a> `cost`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters'OneTime/cost'Fixed">PerformanceParameters'OneTime/cost'Fixed</a> | <a href="#PerformanceParameters'OneTime/cost'All">PerformanceParameters'OneTime/cost'All</a> | <a href="#PerformanceParameters'OneTime/cost'Indefinite">PerformanceParameters'OneTime/cost'Indefinite</a>

#### <a name="PerformanceParameters'OneTime/duration"></a> `duration`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters'OneTime/duration'Immediate">PerformanceParameters'OneTime/duration'Immediate</a> | <a href="#PerformanceParameters'OneTime/duration'Fixed">PerformanceParameters'OneTime/duration'Fixed</a> | <a href="#PerformanceParameters'OneTime/duration'Indefinite">PerformanceParameters'OneTime/duration'Indefinite</a>

---

### <a name="PerformanceParameters'OneTime/cost'Fixed"></a> `PerformanceParameters'OneTime/cost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/cost'Fixed/tag">See details</a>
`value` | The AE cost value. | <a href="#PerformanceParameters'OneTime/cost'Fixed/value">See details</a>
`interval?` | The interval in which you have to pay the AE cost again. | <a href="#PerformanceParameters'OneTime/cost'Fixed/interval">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters'OneTime/cost'Fixed/translations">See details</a>

#### <a name="PerformanceParameters'OneTime/cost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters'OneTime/cost'Fixed/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters'OneTime/cost'Fixed/interval"></a> `interval?`

The interval in which you have to pay the AE cost again.

- **Type:** <a href="./_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

#### <a name="PerformanceParameters'OneTime/cost'Fixed/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters'OneTime/cost'Fixed/translations[key]">PerformanceParameters'OneTime/cost'Fixed/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters'OneTime/cost'Fixed/translations[key]"></a> `PerformanceParameters'OneTime/cost'Fixed/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`per?` |  | <a href="#PerformanceParameters'OneTime/cost'Fixed/translations[key]/per">See details</a>

#### <a name="PerformanceParameters'OneTime/cost'Fixed/translations[key]/per"></a> `per?`

- **Type:** <a href="#PerformanceParameters'OneTime/cost'Fixed/translations[key]/per">Object</a>

---

### <a name="PerformanceParameters'OneTime/cost'Fixed/translations[key]/per"></a> `PerformanceParameters'OneTime/cost'Fixed/translations[key]/per`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full countable entity name. | <a href="#PerformanceParameters'OneTime/cost'Fixed/translations[key]/per/default">See details</a>
`compressed` | The compressed countable entity name. | <a href="#PerformanceParameters'OneTime/cost'Fixed/translations[key]/per/compressed">See details</a>

#### <a name="PerformanceParameters'OneTime/cost'Fixed/translations[key]/per/default"></a> `default`

The full countable entity name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters'OneTime/cost'Fixed/translations[key]/per/compressed"></a> `compressed`

The compressed countable entity name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters'OneTime/cost'All"></a> `PerformanceParameters'OneTime/cost'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/cost'All/tag">See details</a>
`minimum?` | The minimum AE the familiar has to have. | <a href="#PerformanceParameters'OneTime/cost'All/minimum">See details</a>

#### <a name="PerformanceParameters'OneTime/cost'All/tag"></a> `tag`

- **Constant:** `"All"`

#### <a name="PerformanceParameters'OneTime/cost'All/minimum"></a> `minimum?`

The minimum AE the familiar has to have.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PerformanceParameters'OneTime/cost'Indefinite"></a> `PerformanceParameters'OneTime/cost'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/cost'Indefinite/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters'OneTime/cost'Indefinite/translations">See details</a>

#### <a name="PerformanceParameters'OneTime/cost'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="PerformanceParameters'OneTime/cost'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters'OneTime/cost'Indefinite/translations[key]">PerformanceParameters'OneTime/cost'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters'OneTime/cost'Indefinite/translations[key]"></a> `PerformanceParameters'OneTime/cost'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the AE cost. | <a href="#PerformanceParameters'OneTime/cost'Indefinite/translations[key]/description">See details</a>

#### <a name="PerformanceParameters'OneTime/cost'Indefinite/translations[key]/description"></a> `description`

A description of the AE cost.

- **Type:** <a href="#PerformanceParameters'OneTime/cost'Indefinite/translations[key]/description">Object</a>

---

### <a name="PerformanceParameters'OneTime/cost'Indefinite/translations[key]/description"></a> `PerformanceParameters'OneTime/cost'Indefinite/translations[key]/description`

A description of the AE cost.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full description of the AE cost. | <a href="#PerformanceParameters'OneTime/cost'Indefinite/translations[key]/description/default">See details</a>
`compressed` | A compressed description of the AE cost for use in small areas (e.g. on character sheet). | <a href="#PerformanceParameters'OneTime/cost'Indefinite/translations[key]/description/compressed">See details</a>

#### <a name="PerformanceParameters'OneTime/cost'Indefinite/translations[key]/description/default"></a> `default`

The full description of the AE cost.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters'OneTime/cost'Indefinite/translations[key]/description/compressed"></a> `compressed`

A compressed description of the AE cost for use in small areas
(e.g. on character sheet).

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters'OneTime/duration'Immediate"></a> `PerformanceParameters'OneTime/duration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/duration'Immediate/tag">See details</a>

#### <a name="PerformanceParameters'OneTime/duration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

---

### <a name="PerformanceParameters'OneTime/duration'Fixed"></a> `PerformanceParameters'OneTime/duration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/duration'Fixed/tag">See details</a>
`is_maximum?` | If the duration is the maximum duration, so it may end earlier. | <a href="#PerformanceParameters'OneTime/duration'Fixed/is_maximum">See details</a>
`value` | The (unitless) duration. | <a href="#PerformanceParameters'OneTime/duration'Fixed/value">See details</a>
`unit` | The duration unit. | <a href="#PerformanceParameters'OneTime/duration'Fixed/unit">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters'OneTime/duration'Fixed/translations">See details</a>

#### <a name="PerformanceParameters'OneTime/duration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters'OneTime/duration'Fixed/is_maximum"></a> `is_maximum?`

If the duration is the maximum duration, so it may end earlier.

- **Type:** Boolean

#### <a name="PerformanceParameters'OneTime/duration'Fixed/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters'OneTime/duration'Fixed/unit"></a> `unit`

The duration unit.

- **Type:** <a href="./_ActivatableSkill.md#Duration/Unit">Duration/Unit</a>

#### <a name="PerformanceParameters'OneTime/duration'Fixed/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters'OneTime/duration'Fixed/translations[key]">PerformanceParameters'OneTime/duration'Fixed/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters'OneTime/duration'Fixed/translations[key]"></a> `PerformanceParameters'OneTime/duration'Fixed/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`replacement?` | A replacement string. | <a href="#PerformanceParameters'OneTime/duration'Fixed/translations[key]/replacement">See details</a>

#### <a name="PerformanceParameters'OneTime/duration'Fixed/translations[key]/replacement"></a> `replacement?`

A replacement string.

- **Type:** <a href="#PerformanceParameters'OneTime/duration'Fixed/translations[key]/replacement">Object</a>

---

### <a name="PerformanceParameters'OneTime/duration'Fixed/translations[key]/replacement"></a> `PerformanceParameters'OneTime/duration'Fixed/translations[key]/replacement`

A replacement string.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full replacement string. It can contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values. | <a href="#PerformanceParameters'OneTime/duration'Fixed/translations[key]/replacement/default">See details</a>
`compressed` | A compressed replacement string for use in small areas (e.g. on character sheet). It can contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values. | <a href="#PerformanceParameters'OneTime/duration'Fixed/translations[key]/replacement/compressed">See details</a>

#### <a name="PerformanceParameters'OneTime/duration'Fixed/translations[key]/replacement/default"></a> `default`

The full replacement string. It can contain `$1`, which is
going to be replaced with the generated duration string, so
additional information can be provided without duplicating
concrete numeric values.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters'OneTime/duration'Fixed/translations[key]/replacement/compressed"></a> `compressed`

A compressed replacement string for use in small areas (e.g. on
character sheet). It can contain `$1`, which is going to be
replaced with the generated duration string, so additional
information can be provided without duplicating concrete
numeric values.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters'OneTime/duration'Indefinite"></a> `PerformanceParameters'OneTime/duration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/duration'Indefinite/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters'OneTime/duration'Indefinite/translations">See details</a>

#### <a name="PerformanceParameters'OneTime/duration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="PerformanceParameters'OneTime/duration'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters'OneTime/duration'Indefinite/translations[key]">PerformanceParameters'OneTime/duration'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters'OneTime/duration'Indefinite/translations[key]"></a> `PerformanceParameters'OneTime/duration'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#PerformanceParameters'OneTime/duration'Indefinite/translations[key]/description">See details</a>

#### <a name="PerformanceParameters'OneTime/duration'Indefinite/translations[key]/description"></a> `description`

A description of the duration.

- **Type:** <a href="#PerformanceParameters'OneTime/duration'Indefinite/translations[key]/description">Object</a>

---

### <a name="PerformanceParameters'OneTime/duration'Indefinite/translations[key]/description"></a> `PerformanceParameters'OneTime/duration'Indefinite/translations[key]/description`

A description of the duration.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full description of the duration. | <a href="#PerformanceParameters'OneTime/duration'Indefinite/translations[key]/description/default">See details</a>
`compressed` | A compressed description of the duration for use in small areas (e.g. on character sheet). | <a href="#PerformanceParameters'OneTime/duration'Indefinite/translations[key]/description/compressed">See details</a>

#### <a name="PerformanceParameters'OneTime/duration'Indefinite/translations[key]/description/default"></a> `default`

The full description of the duration.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters'OneTime/duration'Indefinite/translations[key]/description/compressed"></a> `compressed`

A compressed description of the duration for use in small areas
(e.g. on character sheet).

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters'OneTimeInterval"></a> `PerformanceParameters'OneTimeInterval`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTimeInterval/tag">See details</a>
`cost` |  | <a href="#PerformanceParameters'OneTimeInterval/cost">See details</a>

#### <a name="PerformanceParameters'OneTimeInterval/tag"></a> `tag`

- **Constant:** `"OneTimeInterval"`

#### <a name="PerformanceParameters'OneTimeInterval/cost"></a> `cost`

- **Type:** <a href="#PerformanceParameters'OneTimeInterval/cost">Object</a>

---

### <a name="PerformanceParameters'OneTimeInterval/cost"></a> `PerformanceParameters'OneTimeInterval/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#PerformanceParameters'OneTimeInterval/cost/value">See details</a>
`interval` | The duration granted/added by paying the given AE cost. | <a href="#PerformanceParameters'OneTimeInterval/cost/interval">See details</a>

#### <a name="PerformanceParameters'OneTimeInterval/cost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters'OneTimeInterval/cost/interval"></a> `interval`

The duration granted/added by paying the given AE cost.

- **Type:** <a href="./_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

---

### <a name="PerformanceParameters'Sustained"></a> `PerformanceParameters'Sustained`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'Sustained/tag">See details</a>
`cost` |  | <a href="#PerformanceParameters'Sustained/cost">See details</a>

#### <a name="PerformanceParameters'Sustained/tag"></a> `tag`

- **Constant:** `"Sustained"`

#### <a name="PerformanceParameters'Sustained/cost"></a> `cost`

- **Type:** <a href="#PerformanceParameters'Sustained/cost">Object</a>

---

### <a name="PerformanceParameters'Sustained/cost"></a> `PerformanceParameters'Sustained/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#PerformanceParameters'Sustained/cost/value">See details</a>
`interval` | The interval in which you have to pay the AE cost again. | <a href="#PerformanceParameters'Sustained/cost/interval">See details</a>

#### <a name="PerformanceParameters'Sustained/cost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters'Sustained/cost/interval"></a> `interval`

The interval in which you have to pay the AE cost again.

- **Type:** <a href="./_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

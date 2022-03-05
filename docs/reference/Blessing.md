# Blessing

## Definitions

### <a name="Blessing"></a> Blessing (`Blessing`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The blessing's identifier. An unique, increasing integer. | <a href="#Blessing/id">See details</a>
`parameters` | Measurable parameters of a blessing. | <a href="#Blessing/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#Blessing/target">See details</a>
`src` |  | <a href="#Blessing/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Blessing/translations">See details</a>

#### <a name="Blessing/id"></a> `id`

The blessing's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Blessing/parameters"></a> `parameters`

Measurable parameters of a blessing.

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="Blessing/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="./_ActivatableSkill.md#TargetCategory/T">TargetCategory/T</a>

#### <a name="Blessing/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Blessing/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Blessing/translations[key]">Blessing/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Blessing/translations[key]"></a> `Blessing/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the blessing. | <a href="#Blessing/translations[key]/name">See details</a>
`effect` | The effect description. | <a href="#Blessing/translations[key]/effect">See details</a>
`range` |  | <a href="#Blessing/translations[key]/range">See details</a>
`duration` |  | <a href="#Blessing/translations[key]/duration">See details</a>
`target` |  | <a href="#Blessing/translations[key]/target">See details</a>
`errata?` |  | <a href="#Blessing/translations[key]/errata">See details</a>

#### <a name="Blessing/translations[key]/name"></a> `name`

The name of the blessing.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Blessing/translations[key]/effect"></a> `effect`

The effect description.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Blessing/translations[key]/range"></a> `range`

- **Type:** String

#### <a name="Blessing/translations[key]/duration"></a> `duration`

- **Type:** String

#### <a name="Blessing/translations[key]/target"></a> `target`

- **Type:** String

#### <a name="Blessing/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a blessing.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`range` |  | <a href="#PerformanceParameters/range">See details</a>
`duration` |  | <a href="#PerformanceParameters/duration">See details</a>

#### <a name="PerformanceParameters/range"></a> `range`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/range'Self">PerformanceParameters/range'Self</a> | <a href="#PerformanceParameters/range'Touch">PerformanceParameters/range'Touch</a> | <a href="#PerformanceParameters/range'Fixed">PerformanceParameters/range'Fixed</a>

#### <a name="PerformanceParameters/duration"></a> `duration`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration'Immediate">PerformanceParameters/duration'Immediate</a> | <a href="#PerformanceParameters/duration'Fixed">PerformanceParameters/duration'Fixed</a> | <a href="#PerformanceParameters/duration'Indefinite">PerformanceParameters/duration'Indefinite</a>

---

### <a name="PerformanceParameters/range'Self"></a> `PerformanceParameters/range'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/range'Self/tag">See details</a>

#### <a name="PerformanceParameters/range'Self/tag"></a> `tag`

- **Constant:** `"Self"`

---

### <a name="PerformanceParameters/range'Touch"></a> `PerformanceParameters/range'Touch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/range'Touch/tag">See details</a>

#### <a name="PerformanceParameters/range'Touch/tag"></a> `tag`

- **Constant:** `"Touch"`

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
- **Minimum:** `1`

#### <a name="PerformanceParameters/duration'Fixed/unit"></a> `unit`

The duration unit.

- **Type:** <a href="./_ActivatableSkill.md#Duration/Unit">Duration/Unit</a>

---

### <a name="PerformanceParameters/duration'Indefinite"></a> `PerformanceParameters/duration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Indefinite/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/duration'Indefinite/translations">See details</a>

#### <a name="PerformanceParameters/duration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="PerformanceParameters/duration'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/duration'Indefinite/translations[key]">PerformanceParameters/duration'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

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

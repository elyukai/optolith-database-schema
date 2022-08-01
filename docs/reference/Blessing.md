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

- **Type:** <a href="#BlessingPerformanceParameters">BlessingPerformanceParameters</a>

#### <a name="Blessing/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="./_ActivatableSkillTargetCategory.md#TargetCategory">TargetCategory</a>

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

- **Type:** <a href="#BlessingTranslation">BlessingTranslation</a>

---

### <a name="BlessingTranslation"></a> `BlessingTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the blessing. | <a href="#BlessingTranslation/name">See details</a>
`effect` | The effect description. | <a href="#BlessingTranslation/effect">See details</a>
`range` |  | <a href="#BlessingTranslation/range">See details</a>
`duration` |  | <a href="#BlessingTranslation/duration">See details</a>
`target` |  | <a href="#BlessingTranslation/target">See details</a>
`errata?` |  | <a href="#BlessingTranslation/errata">See details</a>

#### <a name="BlessingTranslation/name"></a> `name`

The name of the blessing.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="BlessingTranslation/effect"></a> `effect`

The effect description.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="BlessingTranslation/range"></a> `range`

- **Type:** String

#### <a name="BlessingTranslation/duration"></a> `duration`

- **Type:** String

#### <a name="BlessingTranslation/target"></a> `target`

- **Type:** String

#### <a name="BlessingTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="BlessingPerformanceParameters"></a> `BlessingPerformanceParameters`

Measurable parameters of a blessing.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`range` |  | <a href="#BlessingPerformanceParameters/range">See details</a>
`duration` |  | <a href="#BlessingPerformanceParameters/duration">See details</a>

#### <a name="BlessingPerformanceParameters/range"></a> `range`

- **Type:** <a href="#BlessingRange">BlessingRange</a>

#### <a name="BlessingPerformanceParameters/duration"></a> `duration`

- **Type:** <a href="#BlessingDuration">BlessingDuration</a>

---

### <a name="BlessingRange"></a> `BlessingRange`

- **Type:** Union
- **Cases:** <a href="#BlessingRange'Self">BlessingRange'Self</a> | <a href="#BlessingRange'Touch">BlessingRange'Touch</a> | <a href="#BlessingRange'Fixed">BlessingRange'Fixed</a>

---

### <a name="BlessingRange'Self"></a> `BlessingRange'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessingRange'Self/tag">See details</a>
`self` |  | <a href="#BlessingRange'Self/self">See details</a>

#### <a name="BlessingRange'Self/tag"></a> `tag`

- **Constant:** `"Self"`

#### <a name="BlessingRange'Self/self"></a> `self`

- **Type:** <a href="#BlessingRange'Self/self">Object</a>

---

### <a name="BlessingRange'Self/self"></a> `BlessingRange'Self/self`

- **Type:** Empty Object

---

### <a name="BlessingRange'Touch"></a> `BlessingRange'Touch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessingRange'Touch/tag">See details</a>
`touch` |  | <a href="#BlessingRange'Touch/touch">See details</a>

#### <a name="BlessingRange'Touch/tag"></a> `tag`

- **Constant:** `"Touch"`

#### <a name="BlessingRange'Touch/touch"></a> `touch`

- **Type:** <a href="#BlessingRange'Touch/touch">Object</a>

---

### <a name="BlessingRange'Touch/touch"></a> `BlessingRange'Touch/touch`

- **Type:** Empty Object

---

### <a name="BlessingRange'Fixed"></a> `BlessingRange'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessingRange'Fixed/tag">See details</a>
`fixed` |  | <a href="#BlessingRange'Fixed/fixed">See details</a>

#### <a name="BlessingRange'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="BlessingRange'Fixed/fixed"></a> `fixed`

- **Type:** <a href="./_ActivatableSkillRange.md#FixedRange">FixedRange</a>

---

### <a name="BlessingDuration"></a> `BlessingDuration`

- **Type:** Union
- **Cases:** <a href="#BlessingDuration'Immediate">BlessingDuration'Immediate</a> | <a href="#BlessingDuration'Fixed">BlessingDuration'Fixed</a> | <a href="#BlessingDuration'Indefinite">BlessingDuration'Indefinite</a>

---

### <a name="BlessingDuration'Immediate"></a> `BlessingDuration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessingDuration'Immediate/tag">See details</a>
`immediate` |  | <a href="#BlessingDuration'Immediate/immediate">See details</a>

#### <a name="BlessingDuration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

#### <a name="BlessingDuration'Immediate/immediate"></a> `immediate`

- **Type:** <a href="#BlessingDuration'Immediate/immediate">Object</a>

---

### <a name="BlessingDuration'Immediate/immediate"></a> `BlessingDuration'Immediate/immediate`

- **Type:** Empty Object

---

### <a name="BlessingDuration'Fixed"></a> `BlessingDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessingDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#BlessingDuration'Fixed/fixed">See details</a>

#### <a name="BlessingDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="BlessingDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedBlessingDuration">FixedBlessingDuration</a>

---

### <a name="BlessingDuration'Indefinite"></a> `BlessingDuration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessingDuration'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#BlessingDuration'Indefinite/indefinite">See details</a>

#### <a name="BlessingDuration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="BlessingDuration'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteBlessingDuration">IndefiniteBlessingDuration</a>

---

### <a name="FixedBlessingDuration"></a> `FixedBlessingDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) duration. | <a href="#FixedBlessingDuration/value">See details</a>
`unit` | The duration unit. | <a href="#FixedBlessingDuration/unit">See details</a>

#### <a name="FixedBlessingDuration/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedBlessingDuration/unit"></a> `unit`

The duration unit.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>

---

### <a name="IndefiniteBlessingDuration"></a> `IndefiniteBlessingDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteBlessingDuration/translations">See details</a>

#### <a name="IndefiniteBlessingDuration/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#IndefiniteBlessingDuration/translations[key]">IndefiniteBlessingDuration/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="IndefiniteBlessingDuration/translations[key]"></a> `IndefiniteBlessingDuration/translations[key]`

- **Type:** <a href="#IndefiniteDurationTranslation">IndefiniteDurationTranslation</a>

---

### <a name="IndefiniteDurationTranslation"></a> `IndefiniteDurationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#IndefiniteDurationTranslation/description">See details</a>

#### <a name="IndefiniteDurationTranslation/description"></a> `description`

A description of the duration.

- **Type:** String
- **Minimum Length:** `1`

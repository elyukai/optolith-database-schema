# Cantrip

## Definitions

### <a name="Cantrip"></a> Cantrip (`Cantrip`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The cantrip's identifier. An unique, increasing integer. | <a href="#Cantrip/id">See details</a>
`parameters` | Measurable parameters of a cantrip. | <a href="#Cantrip/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#Cantrip/target">See details</a>
`property` | The associated property. | <a href="#Cantrip/property">See details</a>
`note?` | A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in. | <a href="#Cantrip/note">See details</a>
`src` |  | <a href="#Cantrip/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Cantrip/translations">See details</a>
`enhancements?` |  | <a href="#Cantrip/enhancements">See details</a>

#### <a name="Cantrip/id"></a> `id`

The cantrip's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Cantrip/parameters"></a> `parameters`

Measurable parameters of a cantrip.

- **Type:** <a href="#CantripPerformanceParameters">CantripPerformanceParameters</a>

#### <a name="Cantrip/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="./_ActivatableSkillTargetCategory.md#TargetCategory">TargetCategory</a>

#### <a name="Cantrip/property"></a> `property`

The associated property.

- **Type:** <a href="./_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="Cantrip/note"></a> `note?`

A note specifying the dissemination of the cantrip in different traditions.
Sometimes a cantrip is exclusively available to one or more specific
traditions, but usually one the academies and traditions are listed the
cantrip is most commonly teached in.

- **Type:** <a href="#CantripNote">CantripNote</a>

#### <a name="Cantrip/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Cantrip/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Cantrip/translations[key]">Cantrip/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

#### <a name="Cantrip/enhancements"></a> `enhancements?`

- **Type:** <a href="./_Enhancements.md#Enhancements">Enhancements</a>

---

### <a name="Cantrip/translations[key]"></a> `Cantrip/translations[key]`

- **Type:** <a href="#CantripTranslation">CantripTranslation</a>

---

### <a name="CantripNote"></a> `CantripNote`

- **Type:** Union
- **Cases:** <a href="#CantripNote'Exclusive">CantripNote'Exclusive</a> | <a href="#CantripNote'Common">CantripNote'Common</a>

---

### <a name="CantripNote'Exclusive"></a> `CantripNote'Exclusive`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CantripNote'Exclusive/tag">See details</a>
`exclusive` |  | <a href="#CantripNote'Exclusive/exclusive">See details</a>

#### <a name="CantripNote'Exclusive/tag"></a> `tag`

- **Constant:** `"Exclusive"`

#### <a name="CantripNote'Exclusive/exclusive"></a> `exclusive`

- **Type:** <a href="#ExclusiveCantripNote">ExclusiveCantripNote</a>

---

### <a name="CantripNote'Common"></a> `CantripNote'Common`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CantripNote'Common/tag">See details</a>
`common` |  | <a href="#CantripNote'Common/common">See details</a>

#### <a name="CantripNote'Common/tag"></a> `tag`

- **Constant:** `"Common"`

#### <a name="CantripNote'Common/common"></a> `common`

- **Type:** <a href="#CommonCantripNotes">CommonCantripNotes</a>

---

### <a name="ExclusiveCantripNote"></a> `ExclusiveCantripNote`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`traditions` | The traditions the cantrip is exclusively available to. | <a href="#ExclusiveCantripNote/traditions">See details</a>

#### <a name="ExclusiveCantripNote/traditions"></a> `traditions`

The traditions the cantrip is exclusively available to.

- **Type:** List
- **Items:** <a href="#ExclusiveCantripNote/traditions[]">ExclusiveCantripNote/traditions[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="ExclusiveCantripNote/traditions[]"></a> `ExclusiveCantripNote/traditions[]`

- **Type:** <a href="./_SimpleReferences.md#MagicalTraditionReference">MagicalTraditionReference</a>

---

### <a name="CommonCantripNotes"></a> `CommonCantripNotes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | The academies and traditions the cantrip is commonly teached in. | <a href="#CommonCantripNotes/list">See details</a>

#### <a name="CommonCantripNotes/list"></a> `list`

The academies and traditions the cantrip is commonly teached in.

- **Type:** List
- **Items:** <a href="#CommonCantripNotes/list[]">CommonCantripNotes/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="CommonCantripNotes/list[]"></a> `CommonCantripNotes/list[]`

- **Type:** <a href="#CommonCantripNote">CommonCantripNote</a>

---

### <a name="CommonCantripNote"></a> `CommonCantripNote`

- **Type:** Union
- **Cases:** <a href="#CommonCantripNote'Academy">CommonCantripNote'Academy</a> | <a href="#CommonCantripNote'Tradition">CommonCantripNote'Tradition</a>

---

### <a name="CommonCantripNote'Academy"></a> `CommonCantripNote'Academy`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonCantripNote'Academy/tag">See details</a>
`academy` |  | <a href="#CommonCantripNote'Academy/academy">See details</a>

#### <a name="CommonCantripNote'Academy/tag"></a> `tag`

- **Constant:** `"Academy"`

#### <a name="CommonCantripNote'Academy/academy"></a> `academy`

- **Type:** <a href="./_SimpleReferences.md#CurriculumReference">CurriculumReference</a>

---

### <a name="CommonCantripNote'Tradition"></a> `CommonCantripNote'Tradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonCantripNote'Tradition/tag">See details</a>
`tradition` |  | <a href="#CommonCantripNote'Tradition/tradition">See details</a>

#### <a name="CommonCantripNote'Tradition/tag"></a> `tag`

- **Constant:** `"Tradition"`

#### <a name="CommonCantripNote'Tradition/tradition"></a> `tradition`

- **Type:** <a href="#CommonCantripTraditionNote">CommonCantripTraditionNote</a>

---

### <a name="CommonCantripTraditionNote"></a> `CommonCantripTraditionNote`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical tradition's identifier. | <a href="#CommonCantripTraditionNote/id">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CommonCantripTraditionNote/translations">See details</a>

#### <a name="CommonCantripTraditionNote/id"></a> `id`

The magical tradition's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CommonCantripTraditionNote/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CommonCantripTraditionNote/translations[key]">CommonCantripTraditionNote/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CommonCantripTraditionNote/translations[key]"></a> `CommonCantripTraditionNote/translations[key]`

- **Type:** <a href="#CommonCantripTraditionNoteTranslation">CommonCantripTraditionNoteTranslation</a>

---

### <a name="CommonCantripTraditionNoteTranslation"></a> `CommonCantripTraditionNoteTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`note` | A note, appended to the generated string in parenthesis. | <a href="#CommonCantripTraditionNoteTranslation/note">See details</a>

#### <a name="CommonCantripTraditionNoteTranslation/note"></a> `note`

A note, appended to the generated string in parenthesis.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="CantripTranslation"></a> `CantripTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the spell. | <a href="#CantripTranslation/name">See details</a>
`effect` | The effect description. | <a href="#CantripTranslation/effect">See details</a>
`range` |  | <a href="#CantripTranslation/range">See details</a>
`duration` |  | <a href="#CantripTranslation/duration">See details</a>
`target` |  | <a href="#CantripTranslation/target">See details</a>
`errata?` |  | <a href="#CantripTranslation/errata">See details</a>

#### <a name="CantripTranslation/name"></a> `name`

The name of the spell.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="CantripTranslation/effect"></a> `effect`

The effect description.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="CantripTranslation/range"></a> `range`

- **Type:** String

#### <a name="CantripTranslation/duration"></a> `duration`

- **Type:** String

#### <a name="CantripTranslation/target"></a> `target`

- **Type:** String

#### <a name="CantripTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="CantripPerformanceParameters"></a> `CantripPerformanceParameters`

Measurable parameters of a blessing.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`range` |  | <a href="#CantripPerformanceParameters/range">See details</a>
`duration` |  | <a href="#CantripPerformanceParameters/duration">See details</a>

#### <a name="CantripPerformanceParameters/range"></a> `range`

- **Type:** <a href="#CantripRange">CantripRange</a>

#### <a name="CantripPerformanceParameters/duration"></a> `duration`

- **Type:** <a href="#CantripDuration">CantripDuration</a>

---

### <a name="CantripRange"></a> `CantripRange`

- **Type:** Union
- **Cases:** <a href="#CantripRange'Self">CantripRange'Self</a> | <a href="#CantripRange'Touch">CantripRange'Touch</a> | <a href="#CantripRange'Fixed">CantripRange'Fixed</a>

---

### <a name="CantripRange'Self"></a> `CantripRange'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CantripRange'Self/tag">See details</a>

#### <a name="CantripRange'Self/tag"></a> `tag`

- **Constant:** `"Self"`

---

### <a name="CantripRange'Touch"></a> `CantripRange'Touch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CantripRange'Touch/tag">See details</a>

#### <a name="CantripRange'Touch/tag"></a> `tag`

- **Constant:** `"Touch"`

---

### <a name="CantripRange'Fixed"></a> `CantripRange'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CantripRange'Fixed/tag">See details</a>
`fixed` |  | <a href="#CantripRange'Fixed/fixed">See details</a>

#### <a name="CantripRange'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="CantripRange'Fixed/fixed"></a> `fixed`

- **Type:** <a href="./_ActivatableSkillRange.md#FixedRange">FixedRange</a>

---

### <a name="CantripDuration"></a> `CantripDuration`

- **Type:** Union
- **Cases:** <a href="#CantripDuration'Immediate">CantripDuration'Immediate</a> | <a href="#CantripDuration'Fixed">CantripDuration'Fixed</a> | <a href="#CantripDuration'DuringLovemaking">CantripDuration'DuringLovemaking</a> | <a href="#CantripDuration'Indefinite">CantripDuration'Indefinite</a>

---

### <a name="CantripDuration'Immediate"></a> `CantripDuration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CantripDuration'Immediate/tag">See details</a>

#### <a name="CantripDuration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

---

### <a name="CantripDuration'Fixed"></a> `CantripDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CantripDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#CantripDuration'Fixed/fixed">See details</a>

#### <a name="CantripDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="CantripDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedCantripDuration">FixedCantripDuration</a>

---

### <a name="CantripDuration'DuringLovemaking"></a> `CantripDuration'DuringLovemaking`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CantripDuration'DuringLovemaking/tag">See details</a>
`during_lovemaking` |  | <a href="#CantripDuration'DuringLovemaking/during_lovemaking">See details</a>

#### <a name="CantripDuration'DuringLovemaking/tag"></a> `tag`

- **Constant:** `"DuringLovemaking"`

#### <a name="CantripDuration'DuringLovemaking/during_lovemaking"></a> `during_lovemaking`

- **Type:** <a href="./_ActivatableSkillCastingTime.md#CastingTimeDuringLovemaking">CastingTimeDuringLovemaking</a>

---

### <a name="CantripDuration'Indefinite"></a> `CantripDuration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CantripDuration'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#CantripDuration'Indefinite/indefinite">See details</a>

#### <a name="CantripDuration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="CantripDuration'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteCantripDuration">IndefiniteCantripDuration</a>

---

### <a name="FixedCantripDuration"></a> `FixedCantripDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_maximum?` | If `true`, the duration is a maximum duration. | <a href="#FixedCantripDuration/is_maximum">See details</a>
`value` | The (unitless) duration. | <a href="#FixedCantripDuration/value">See details</a>
`unit` | The duration unit. | <a href="#FixedCantripDuration/unit">See details</a>

#### <a name="FixedCantripDuration/is_maximum"></a> `is_maximum?`

If `true`, the duration is a maximum duration.

- **Constant:** `true`

#### <a name="FixedCantripDuration/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedCantripDuration/unit"></a> `unit`

The duration unit.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>

---

### <a name="IndefiniteCantripDuration"></a> `IndefiniteCantripDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteCantripDuration/translations">See details</a>

#### <a name="IndefiniteCantripDuration/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#IndefiniteCantripDuration/translations[key]">IndefiniteCantripDuration/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="IndefiniteCantripDuration/translations[key]"></a> `IndefiniteCantripDuration/translations[key]`

- **Type:** <a href="#IndefiniteDurationTranslation">IndefiniteDurationTranslation</a>

---

### <a name="IndefiniteDurationTranslation"></a> `IndefiniteDurationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#IndefiniteDurationTranslation/description">See details</a>

#### <a name="IndefiniteDurationTranslation/description"></a> `description`

A description of the duration.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

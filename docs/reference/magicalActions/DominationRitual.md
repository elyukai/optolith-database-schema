# Domination Ritual

## Definitions

### <a name="DominationRitual"></a> Domination Ritual (`DominationRitual`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The domination ritual's identifier. An unique, increasing integer. | <a href="#DominationRitual/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#DominationRitual/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#DominationRitual/check_penalty">See details</a>
`parameters` | Measurable parameters of a curse. | <a href="#DominationRitual/parameters">See details</a>
`property` | The associated property. | <a href="#DominationRitual/property">See details</a>
`src` |  | <a href="#DominationRitual/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DominationRitual/translations">See details</a>

#### <a name="DominationRitual/id"></a> `id`

The domination ritual's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="DominationRitual/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="DominationRitual/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="../_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="DominationRitual/parameters"></a> `parameters`

Measurable parameters of a curse.

- **Type:** <a href="#DominationRitualPerformanceParameters">DominationRitualPerformanceParameters</a>

#### <a name="DominationRitual/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="DominationRitual/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="DominationRitual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#DominationRitualTranslation">DominationRitualTranslation</a>&gt;

---

### <a name="DominationRitualTranslation"></a> `DominationRitualTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the domination ritual. | <a href="#DominationRitualTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#DominationRitualTranslation/effect">See details</a>
`cost` |  | <a href="#DominationRitualTranslation/cost">See details</a>
`duration` |  | <a href="#DominationRitualTranslation/duration">See details</a>
`errata?` |  | <a href="#DominationRitualTranslation/errata">See details</a>

#### <a name="DominationRitualTranslation/name"></a> `name`

The name of the domination ritual.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="DominationRitualTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#ActivatableSkillEffect">ActivatableSkillEffect</a>

#### <a name="DominationRitualTranslation/cost"></a> `cost`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="DominationRitualTranslation/duration"></a> `duration`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="DominationRitualTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="DominationRitualPerformanceParameters"></a> `DominationRitualPerformanceParameters`

Measurable parameters of a curse.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The AE cost. | <a href="#DominationRitualPerformanceParameters/cost">See details</a>
`duration` | The duration. | <a href="#DominationRitualPerformanceParameters/duration">See details</a>

#### <a name="DominationRitualPerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** <a href="#DominationRitualCost">DominationRitualCost</a>

#### <a name="DominationRitualPerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** <a href="#DominationRitualDuration">DominationRitualDuration</a>

---

### <a name="DominationRitualCost"></a> `DominationRitualCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`initial_modification_level` | The initial skill modification identifier/level. | <a href="#DominationRitualCost/initial_modification_level">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DominationRitualCost/translations">See details</a>

#### <a name="DominationRitualCost/initial_modification_level"></a> `initial_modification_level`

The initial skill modification identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="DominationRitualCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#DominationRitualCostTranslation">DominationRitualCostTranslation</a>&gt;

---

### <a name="DominationRitualCostTranslation"></a> `DominationRitualCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`additional` | AE cost in addition to the normal AE cost. | <a href="#DominationRitualCostTranslation/additional">See details</a>

#### <a name="DominationRitualCostTranslation/additional"></a> `additional`

AE cost in addition to the normal AE cost.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="DominationRitualDuration"></a> `DominationRitualDuration`

- **Type:** Union
- **Cases:** <a href="#DominationRitualDuration'Fixed">DominationRitualDuration'Fixed</a> | <a href="#DominationRitualDuration'CheckResultBased">DominationRitualDuration'CheckResultBased</a> | <a href="#DominationRitualDuration'Indefinite">DominationRitualDuration'Indefinite</a>

---

### <a name="DominationRitualDuration'Fixed"></a> `DominationRitualDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DominationRitualDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#DominationRitualDuration'Fixed/fixed">See details</a>

#### <a name="DominationRitualDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="DominationRitualDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedDominationRitualDuration">FixedDominationRitualDuration</a>

---

### <a name="DominationRitualDuration'CheckResultBased"></a> `DominationRitualDuration'CheckResultBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DominationRitualDuration'CheckResultBased/tag">See details</a>
`check_result_based` |  | <a href="#DominationRitualDuration'CheckResultBased/check_result_based">See details</a>

#### <a name="DominationRitualDuration'CheckResultBased/tag"></a> `tag`

- **Constant:** `"CheckResultBased"`

#### <a name="DominationRitualDuration'CheckResultBased/check_result_based"></a> `check_result_based`

- **Type:** <a href="../_ActivatableSkillDuration.md#CheckResultBasedDuration">CheckResultBasedDuration</a>

---

### <a name="DominationRitualDuration'Indefinite"></a> `DominationRitualDuration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DominationRitualDuration'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#DominationRitualDuration'Indefinite/indefinite">See details</a>

#### <a name="DominationRitualDuration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="DominationRitualDuration'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteDominationRitualDuration">IndefiniteDominationRitualDuration</a>

---

### <a name="FixedDominationRitualDuration"></a> `FixedDominationRitualDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) duration value. | <a href="#FixedDominationRitualDuration/value">See details</a>
`unit` | The unit of the `value`. | <a href="#FixedDominationRitualDuration/unit">See details</a>

#### <a name="FixedDominationRitualDuration/value"></a> `value`

The (unitless) duration value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedDominationRitualDuration/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>

---

### <a name="IndefiniteDominationRitualDuration"></a> `IndefiniteDominationRitualDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`maximum?` | Specified if the duration has a maximum time span. | <a href="#IndefiniteDominationRitualDuration/maximum">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteDominationRitualDuration/translations">See details</a>

#### <a name="IndefiniteDominationRitualDuration/maximum"></a> `maximum?`

Specified if the duration has a maximum time span.

- **Type:** <a href="#MaximumIndefiniteDominationRitualDuration">MaximumIndefiniteDominationRitualDuration</a>

#### <a name="IndefiniteDominationRitualDuration/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="../_ActivatableSkillDuration.md#IndefiniteDurationTranslation">IndefiniteDurationTranslation</a>&gt;

---

### <a name="MaximumIndefiniteDominationRitualDuration"></a> `MaximumIndefiniteDominationRitualDuration`

- **Type:** Union
- **Cases:** <a href="#MaximumIndefiniteDominationRitualDuration'Fixed">MaximumIndefiniteDominationRitualDuration'Fixed</a> | <a href="#MaximumIndefiniteDominationRitualDuration'CheckResultBased">MaximumIndefiniteDominationRitualDuration'CheckResultBased</a>

---

### <a name="MaximumIndefiniteDominationRitualDuration'Fixed"></a> `MaximumIndefiniteDominationRitualDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MaximumIndefiniteDominationRitualDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#MaximumIndefiniteDominationRitualDuration'Fixed/fixed">See details</a>

#### <a name="MaximumIndefiniteDominationRitualDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="MaximumIndefiniteDominationRitualDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedDominationRitualDuration">FixedDominationRitualDuration</a>

---

### <a name="MaximumIndefiniteDominationRitualDuration'CheckResultBased"></a> `MaximumIndefiniteDominationRitualDuration'CheckResultBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MaximumIndefiniteDominationRitualDuration'CheckResultBased/tag">See details</a>
`check_result_based` |  | <a href="#MaximumIndefiniteDominationRitualDuration'CheckResultBased/check_result_based">See details</a>

#### <a name="MaximumIndefiniteDominationRitualDuration'CheckResultBased/tag"></a> `tag`

- **Constant:** `"CheckResultBased"`

#### <a name="MaximumIndefiniteDominationRitualDuration'CheckResultBased/check_result_based"></a> `check_result_based`

- **Type:** <a href="../_ActivatableSkillDuration.md#CheckResultBasedDuration">CheckResultBasedDuration</a>

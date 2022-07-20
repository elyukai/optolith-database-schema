# [TITLE MISSING]

## Definitions

### <a name="OneTimeCost"></a> `OneTimeCost`

- **Type:** Union
- **Cases:** <a href="#OneTimeCost'Single">OneTimeCost'Single</a> | <a href="#OneTimeCost'Conjunction">OneTimeCost'Conjunction</a> | <a href="#OneTimeCost'Disjunction">OneTimeCost'Disjunction</a> | <a href="#OneTimeCost'Map">OneTimeCost'Map</a>

---

### <a name="OneTimeCost'Single"></a> `OneTimeCost'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeCost'Single/tag">See details</a>
`single` |  | <a href="#OneTimeCost'Single/single">See details</a>

#### <a name="OneTimeCost'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="OneTimeCost'Single/single"></a> `single`

- **Type:** <a href="#SingleOneTimeCost">SingleOneTimeCost</a>

---

### <a name="OneTimeCost'Conjunction"></a> `OneTimeCost'Conjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeCost'Conjunction/tag">See details</a>
`conjunction` |  | <a href="#OneTimeCost'Conjunction/conjunction">See details</a>

#### <a name="OneTimeCost'Conjunction/tag"></a> `tag`

- **Constant:** `"Conjunction"`

#### <a name="OneTimeCost'Conjunction/conjunction"></a> `conjunction`

- **Type:** <a href="#MultipleOneTimeCosts">MultipleOneTimeCosts</a>

---

### <a name="OneTimeCost'Disjunction"></a> `OneTimeCost'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeCost'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#OneTimeCost'Disjunction/disjunction">See details</a>

#### <a name="OneTimeCost'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="OneTimeCost'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#MultipleOneTimeCosts">MultipleOneTimeCosts</a>

---

### <a name="OneTimeCost'Map"></a> `OneTimeCost'Map`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeCost'Map/tag">See details</a>
`map` |  | <a href="#OneTimeCost'Map/map">See details</a>

#### <a name="OneTimeCost'Map/tag"></a> `tag`

- **Constant:** `"Map"`

#### <a name="OneTimeCost'Map/map"></a> `map`

- **Type:** <a href="#CostMap">CostMap</a>

---

### <a name="SingleOneTimeCost"></a> `SingleOneTimeCost`

- **Type:** Union
- **Cases:** <a href="#SingleOneTimeCost'Modifiable">SingleOneTimeCost'Modifiable</a> | <a href="#SingleOneTimeCost'NonModifiable">SingleOneTimeCost'NonModifiable</a> | <a href="#SingleOneTimeCost'Indefinite">SingleOneTimeCost'Indefinite</a>

---

### <a name="SingleOneTimeCost'Modifiable"></a> `SingleOneTimeCost'Modifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SingleOneTimeCost'Modifiable/tag">See details</a>
`modifiable` |  | <a href="#SingleOneTimeCost'Modifiable/modifiable">See details</a>

#### <a name="SingleOneTimeCost'Modifiable/tag"></a> `tag`

- **Constant:** `"Modifiable"`

#### <a name="SingleOneTimeCost'Modifiable/modifiable"></a> `modifiable`

- **Type:** <a href="#ModifiableOneTimeCost">ModifiableOneTimeCost</a>

---

### <a name="SingleOneTimeCost'NonModifiable"></a> `SingleOneTimeCost'NonModifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SingleOneTimeCost'NonModifiable/tag">See details</a>
`non_modifiable` |  | <a href="#SingleOneTimeCost'NonModifiable/non_modifiable">See details</a>

#### <a name="SingleOneTimeCost'NonModifiable/tag"></a> `tag`

- **Constant:** `"NonModifiable"`

#### <a name="SingleOneTimeCost'NonModifiable/non_modifiable"></a> `non_modifiable`

- **Type:** <a href="#NonModifiableOneTimeCost">NonModifiableOneTimeCost</a>

---

### <a name="SingleOneTimeCost'Indefinite"></a> `SingleOneTimeCost'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SingleOneTimeCost'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#SingleOneTimeCost'Indefinite/indefinite">See details</a>

#### <a name="SingleOneTimeCost'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="SingleOneTimeCost'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteOneTimeCost">IndefiniteOneTimeCost</a>

---

### <a name="MultipleOneTimeCosts"></a> `MultipleOneTimeCosts`

- **Type:** List
- **Items:** <a href="#MultipleOneTimeCosts[]">MultipleOneTimeCosts[]</a>
- **Minimum Items:** `2`

---

### <a name="MultipleOneTimeCosts[]"></a> `MultipleOneTimeCosts[]`

- **Type:** <a href="#SingleOneTimeCost">SingleOneTimeCost</a>

---

### <a name="ModifiableOneTimeCost"></a> `ModifiableOneTimeCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`initial_modification_level` | The initial skill modification identifier/level. | <a href="#ModifiableOneTimeCost/initial_modification_level">See details</a>
`permanent_value?` | The part of the cost value that has to be spent permanently. | <a href="#ModifiableOneTimeCost/permanent_value">See details</a>

#### <a name="ModifiableOneTimeCost/initial_modification_level"></a> `initial_modification_level`

The initial skill modification identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="ModifiableOneTimeCost/permanent_value"></a> `permanent_value?`

The part of the cost value that has to be spent permanently.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="NonModifiableOneTimeCost"></a> `NonModifiableOneTimeCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_minimum?` | If `true`, the non-modifiable value is a minimum value. | <a href="#NonModifiableOneTimeCost/is_minimum">See details</a>
`value` | The AE cost value. | <a href="#NonModifiableOneTimeCost/value">See details</a>
`permanent_value?` | The part of the cost value that has to be spent permanently. | <a href="#NonModifiableOneTimeCost/permanent_value">See details</a>
`per?` | The cost have to be per a specific countable entity, e.g. `8 KP per person`. | <a href="#NonModifiableOneTimeCost/per">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#NonModifiableOneTimeCost/translations">See details</a>

#### <a name="NonModifiableOneTimeCost/is_minimum"></a> `is_minimum?`

If `true`, the non-modifiable value is a minimum value.

- **Type:** Boolean

#### <a name="NonModifiableOneTimeCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="NonModifiableOneTimeCost/permanent_value"></a> `permanent_value?`

The part of the cost value that has to be spent permanently.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="NonModifiableOneTimeCost/per"></a> `per?`

The cost have to be per a specific countable entity, e.g. `8 KP per
person`.

- **Type:** <a href="#NonModifiableOneTimeCostPerCountable">NonModifiableOneTimeCostPerCountable</a>

#### <a name="NonModifiableOneTimeCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#NonModifiableOneTimeCost/translations[key]">NonModifiableOneTimeCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="NonModifiableOneTimeCost/translations[key]"></a> `NonModifiableOneTimeCost/translations[key]`

- **Type:** <a href="#NonModifiableOneTimeCostTranslation">NonModifiableOneTimeCostTranslation</a>

---

### <a name="NonModifiableOneTimeCostPerCountable"></a> `NonModifiableOneTimeCostPerCountable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`minimum_total?` | If defined, the minimum total AE that have to be spent casting the skill. | <a href="#NonModifiableOneTimeCostPerCountable/minimum_total">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#NonModifiableOneTimeCostPerCountable/translations">See details</a>

#### <a name="NonModifiableOneTimeCostPerCountable/minimum_total"></a> `minimum_total?`

If defined, the minimum total AE that have to be spent casting the
skill.

- **Type:** Number

#### <a name="NonModifiableOneTimeCostPerCountable/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#NonModifiableOneTimeCostPerCountable/translations[key]">NonModifiableOneTimeCostPerCountable/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="NonModifiableOneTimeCostPerCountable/translations[key]"></a> `NonModifiableOneTimeCostPerCountable/translations[key]`

- **Type:** <a href="#NonModifiableOneTimeCostPerCountableTranslation">NonModifiableOneTimeCostPerCountableTranslation</a>

---

### <a name="NonModifiableOneTimeCostPerCountableTranslation"></a> `NonModifiableOneTimeCostPerCountableTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`countable` | The countable entity name. | <a href="#NonModifiableOneTimeCostPerCountableTranslation/countable">See details</a>

#### <a name="NonModifiableOneTimeCostPerCountableTranslation/countable"></a> `countable`

The countable entity name.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="NonModifiableOneTimeCostTranslation"></a> `NonModifiableOneTimeCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`note` | A note, appended to the generated string in parenthesis. | <a href="#NonModifiableOneTimeCostTranslation/note">See details</a>

#### <a name="NonModifiableOneTimeCostTranslation/note"></a> `note`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

---

### <a name="IndefiniteOneTimeCost"></a> `IndefiniteOneTimeCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteOneTimeCost/translations">See details</a>

#### <a name="IndefiniteOneTimeCost/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

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
`description` | A description of where the cost come from. | <a href="#IndefiniteOneTimeCostTranslation/description">See details</a>

#### <a name="IndefiniteOneTimeCostTranslation/description"></a> `description`

A description of where the cost come from.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="CostMap"></a> `CostMap`

A content that is `2/4/8/16 AE for an item the size of a
cup/chest/door/castle gate` may be respresented as the following map:

```yaml
options:
  - value: 2
    label: "cup"
  - value: 4
    label: "chest"
  - value: 8
    label: "door"
  - value: 16
    label: "castle gate"
for_append: "an item the size of a"
```

This will generate the exact same string as seen above – given it is set
for a spellwork and thus `AE` is used.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible costs and associated labels. | <a href="#CostMap/options">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CostMap/translations">See details</a>

#### <a name="CostMap/options"></a> `options`

The possible costs and associated labels.

- **Type:** List
- **Items:** <a href="#CostMap/options[]">CostMap/options[]</a>
- **Minimum Items:** `2`

#### <a name="CostMap/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CostMap/translations[key]">CostMap/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CostMap/options[]"></a> `CostMap/options[]`

- **Type:** <a href="#CostMapOption">CostMapOption</a>

---

### <a name="CostMap/translations[key]"></a> `CostMap/translations[key]`

- **Type:** <a href="#CostMapTranslation">CostMapTranslation</a>

---

### <a name="CostMapOption"></a> `CostMapOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The full cost value for this option. | <a href="#CostMapOption/value">See details</a>
`permanent_value?` | The part of the `value` that has to be paid permanently. | <a href="#CostMapOption/permanent_value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CostMapOption/translations">See details</a>

#### <a name="CostMapOption/value"></a> `value`

The full cost value for this option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CostMapOption/permanent_value"></a> `permanent_value?`

The part of the `value` that has to be paid permanently.

- **Type:** Integer
- **Minimum:** `0`

#### <a name="CostMapOption/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CostMapOption/translations[key]">CostMapOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CostMapOption/translations[key]"></a> `CostMapOption/translations[key]`

- **Type:** <a href="#CostMapOptionTranslation">CostMapOptionTranslation</a>

---

### <a name="CostMapOptionTranslation"></a> `CostMapOptionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`label` | The description of the option for cost string generation. | <a href="#CostMapOptionTranslation/label">See details</a>
`label_standalone?` | The description of the option if used standalone. Only used if different from `label`. | <a href="#CostMapOptionTranslation/label_standalone">See details</a>

#### <a name="CostMapOptionTranslation/label"></a> `label`

The description of the option for cost string generation.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CostMapOptionTranslation/label_standalone"></a> `label_standalone?`

The description of the option if used standalone. Only used if
different from `label`.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="CostMapTranslation"></a> `CostMapTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list_prepend?` | Place a string between the `for` and the grouped map option labels. | <a href="#CostMapTranslation/list_prepend">See details</a>
`list_append?` | Place a string after the grouped map option labels. | <a href="#CostMapTranslation/list_append">See details</a>
`replacement?` | If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players. | <a href="#CostMapTranslation/replacement">See details</a>

#### <a name="CostMapTranslation/list_prepend"></a> `list_prepend?`

Place a string between the `for` and the grouped map option labels.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CostMapTranslation/list_append"></a> `list_append?`

Place a string after the grouped map option labels.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CostMapTranslation/replacement"></a> `replacement?`

If the string from the book cannot be generated using the default
generation technique, use this string. All options still need to be
inserted propertly, since it may be used by in-game tools to provide a
selection to players.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="SustainedCost"></a> `SustainedCost`

- **Type:** Union
- **Cases:** <a href="#SustainedCost'Modifiable">SustainedCost'Modifiable</a> | <a href="#SustainedCost'NonModifiable">SustainedCost'NonModifiable</a>

---

### <a name="SustainedCost'Modifiable"></a> `SustainedCost'Modifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SustainedCost'Modifiable/tag">See details</a>
`modifiable` |  | <a href="#SustainedCost'Modifiable/modifiable">See details</a>

#### <a name="SustainedCost'Modifiable/tag"></a> `tag`

- **Constant:** `"Modifiable"`

#### <a name="SustainedCost'Modifiable/modifiable"></a> `modifiable`

- **Type:** <a href="#ModifiableSustainedCost">ModifiableSustainedCost</a>

---

### <a name="SustainedCost'NonModifiable"></a> `SustainedCost'NonModifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SustainedCost'NonModifiable/tag">See details</a>
`non_modifiable` |  | <a href="#SustainedCost'NonModifiable/non_modifiable">See details</a>

#### <a name="SustainedCost'NonModifiable/tag"></a> `tag`

- **Constant:** `"NonModifiable"`

#### <a name="SustainedCost'NonModifiable/non_modifiable"></a> `non_modifiable`

- **Type:** <a href="#NonModifiableSustainedCost">NonModifiableSustainedCost</a>

---

### <a name="ModifiableSustainedCost"></a> `ModifiableSustainedCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`initial_modification_level` | The initial skill modification identifier/level. | <a href="#ModifiableSustainedCost/initial_modification_level">See details</a>
`interval` | The sustain interval. | <a href="#ModifiableSustainedCost/interval">See details</a>

#### <a name="ModifiableSustainedCost/initial_modification_level"></a> `initial_modification_level`

The initial skill modification identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="ModifiableSustainedCost/interval"></a> `interval`

The sustain interval.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

---

### <a name="NonModifiableSustainedCost"></a> `NonModifiableSustainedCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_minimum?` | If `true`, the non-modifiable value is a minimum value. | <a href="#NonModifiableSustainedCost/is_minimum">See details</a>
`value` | The AE cost value. | <a href="#NonModifiableSustainedCost/value">See details</a>
`interval` | The sustain interval. | <a href="#NonModifiableSustainedCost/interval">See details</a>

#### <a name="NonModifiableSustainedCost/is_minimum"></a> `is_minimum?`

If `true`, the non-modifiable value is a minimum value.

- **Type:** Boolean

#### <a name="NonModifiableSustainedCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="NonModifiableSustainedCost/interval"></a> `interval`

The sustain interval.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

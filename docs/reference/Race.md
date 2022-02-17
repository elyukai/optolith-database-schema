# Race

A playable race with stats and skills.

## Definitions

### <a name="Race"></a> Race

A playable race with stats and skills.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#Race/id">See details</a>
`ap_value` | How many Adventure Points does the race cost during character creation? | <a href="#Race/ap_value">See details</a>
`base_values` | The race’s base values. | <a href="#Race/base_values">See details</a>
`attribute_adjustments` | Describes how to raise or lower maximum attribute values during character creation. | <a href="#Race/attribute_adjustments">See details</a>
`automatic_advantages?` | A list of automatically applied advantages. This does only work for advantages with no further configuration such as level or special selection. | <a href="#Race/automatic_advantages">See details</a>
`strongly_recommended_advantages?` | A list of strongly recommended advantages. | <a href="#Race/strongly_recommended_advantages">See details</a>
`strongly_recommended_disadvantages?` | A list of strongly recommended disadvantages. | <a href="#Race/strongly_recommended_disadvantages">See details</a>
`common_advantages?` | A list of common advantages. If common advantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants. | <a href="#Race/common_advantages">See details</a>
`common_disadvantages?` | A list of common disadvantages. If common disadvantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants. | <a href="#Race/common_disadvantages">See details</a>
`uncommon_advantages?` | A list of uncommon advantages. If uncommon advantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants. | <a href="#Race/uncommon_advantages">See details</a>
`uncommon_disadvantages?` | A list of uncommon disadvantages. If uncommon disadvantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants. | <a href="#Race/uncommon_disadvantages">See details</a>
`weight` | Configuration for random weight generation. | <a href="#Race/weight">See details</a>
`starting_age` | Defines the starting ages for the race. It depends on the selected experience level. | <a href="#Race/starting_age">See details</a>
`variant_dependent` | The race may have variants and associated configuration for each variant. If the race is plain (has no variants), the values that would otherwise be defined in the variant configuration need to be set for the whole race. This excludes common and uncommon advantages and disadvantages, since they may be defined for the whole race even if variants exist. | <a href="#Race/variant_dependent">See details</a>
`src` |  | <a href="#Race/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Race/translations">See details</a>

#### <a name="Race/id"></a> `id`

An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Race/ap_value"></a> `ap_value`

How many Adventure Points does the race cost during character creation?

- **Type:** Integer
- **Minimum:** `0`

#### <a name="Race/base_values"></a> `base_values`

The race’s base values.

- **Type:** <a href="#BaseValues">BaseValues</a>

#### <a name="Race/attribute_adjustments"></a> `attribute_adjustments`

Describes how to raise or lower maximum attribute values during character creation.

- **Type:** <a href="#AttributeAdjustments/Config">Config</a>

#### <a name="Race/automatic_advantages"></a> `automatic_advantages?`

A list of automatically applied advantages. This does only work for advantages with no further configuration such as level or special selection.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#AutomaticAdvantage">AutomaticAdvantage</a>

#### <a name="Race/strongly_recommended_advantages"></a> `strongly_recommended_advantages?`

A list of strongly recommended advantages.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="Race/strongly_recommended_disadvantages"></a> `strongly_recommended_disadvantages?`

A list of strongly recommended disadvantages.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="Race/common_advantages"></a> `common_advantages?`

A list of common advantages. If common advantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="Race/common_disadvantages"></a> `common_disadvantages?`

A list of common disadvantages. If common disadvantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="Race/uncommon_advantages"></a> `uncommon_advantages?`

A list of uncommon advantages. If uncommon advantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="Race/uncommon_disadvantages"></a> `uncommon_disadvantages?`

A list of uncommon disadvantages. If uncommon disadvantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="Race/weight"></a> `weight`

Configuration for random weight generation.

- **Type:** <a href="#Weight/Config">Config</a>

#### <a name="Race/starting_age"></a> `starting_age`

Defines the starting ages for the race. It depends on the selected experience level.

- **Type:** List
- **Minimum Items:** `7`
- **Maximum Items:** `7`

##### Items

- **Type:** <a href="#StartingAgeConfigForExperienceLevel">StartingAgeConfigForExperienceLevel</a>

#### <a name="Race/variant_dependent"></a> `variant_dependent`

The race may have variants and associated configuration for each variant. If the race is plain (has no variants), the values that would otherwise be defined in the variant configuration need to be set for the whole race. This excludes common and uncommon advantages and disadvantages, since they may be defined for the whole race even if variants exist.

- **Type:** <a href="#VariantDependent">VariantDependent</a>

#### <a name="Race/src"></a> `src`

- **Type:** <a href="./_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Race/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

##### Values matching `^[a-z]{2}-[A-Z]{2}$`

- **Type:** <a href="#RaceTranslation">RaceTranslation</a>

---

### <a name="BaseValues"></a> BaseValues

The race’s base values.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`life_points` | The race’s life point base value. | <a href="#BaseValues/life_points">See details</a>
`spirit` | The race’s Spirit base value. | <a href="#BaseValues/spirit">See details</a>
`toughness` | The race’s Toughness base value. | <a href="#BaseValues/toughness">See details</a>
`movement` | The race’s tactical movement rate. | <a href="#BaseValues/movement">See details</a>

#### <a name="BaseValues/life_points"></a> `life_points`

The race’s life point base value.

- **Type:** Integer

#### <a name="BaseValues/spirit"></a> `spirit`

The race’s Spirit base value.

- **Type:** Integer

#### <a name="BaseValues/toughness"></a> `toughness`

The race’s Toughness base value.

- **Type:** Integer

#### <a name="BaseValues/movement"></a> `movement`

The race’s tactical movement rate.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AttributeAdjustments"></a> AttributeAdjustments

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`fix?` | An array of attribute maximum modifiers. The value will be added to the current maximum of the ID-specified attribute (negative values will lower the maximum). | <a href="#AttributeAdjustments/Config/fix">See details</a>
`selection` | Used if the player has to choose between different modifiers. | <a href="#AttributeAdjustments/Config/selection">See details</a>

#### <a name="AttributeAdjustments/Config/fix"></a> `fix?`

An array of attribute maximum modifiers. The value will be added to the current maximum of the ID-specified attribute (negative values will lower the maximum).

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#AttributeAdjustments/Fix">Fix</a>

#### <a name="AttributeAdjustments/Config/selection"></a> `selection`

Used if the player has to choose between different modifiers.

- **Type:** <a href="#AttributeAdjustments/Selection">Selection</a>

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The attribute's identifier. | <a href="#AttributeAdjustments/Fix/id">See details</a>
`value` | The value by which the attribute's maximum is modified (negative values will lower the maximum). | <a href="#AttributeAdjustments/Fix/value">See details</a>

#### <a name="AttributeAdjustments/Fix/id"></a> `id`

The attribute's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `8`

#### <a name="AttributeAdjustments/Fix/value"></a> `value`

The value by which the attribute's maximum is modified (negative values will lower the maximum).

- **Type:** Integer

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The value by which the selected attribute's maximum is modified (negative values will lower the maximum). | <a href="#AttributeAdjustments/Selection/value">See details</a>
`list` | A list of attributes the player has to choose from. | <a href="#AttributeAdjustments/Selection/list">See details</a>

#### <a name="AttributeAdjustments/Selection/value"></a> `value`

The value by which the selected attribute's maximum is modified (negative values will lower the maximum).

- **Type:** Integer

#### <a name="AttributeAdjustments/Selection/list"></a> `list`

A list of attributes the player has to choose from.

- **Type:** List
- **Minimum Items:** `2`

##### Items

- **Type:** <a href="#AttributeAdjustments/SelectionItem">SelectionItem</a>

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The attribute's identifier. | <a href="#AttributeAdjustments/SelectionItem/id">See details</a>

#### <a name="AttributeAdjustments/SelectionItem/id"></a> `id`

The attribute's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `8`

---

### <a name="AutomaticAdvantage"></a> AutomaticAdvantage

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's identifier. | <a href="#AutomaticAdvantage/id">See details</a>

#### <a name="AutomaticAdvantage/id"></a> `id`

The advantage's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Weight"></a> Weight

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`base` | The base value used for random weight. The height subtrahend; in case of `Height - 110 + 2D6` it is `110`. | <a href="#Weight/Config/base">See details</a>
`random` | The dice used for random weight. | <a href="#Weight/Config/random">See details</a>

#### <a name="Weight/Config/base"></a> `base`

The base value used for random weight. The height subtrahend; in case of `Height - 110 + 2D6` it is `110`.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Weight/Config/random"></a> `random`

The dice used for random weight.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#Weight/Die">Die</a>

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | Number of dice of the same type. Example: 2 in 2D6. | <a href="#Weight/Die/number">See details</a>
`sides` | Number of sides on every die. Example: 6 in 2D6. | <a href="#Weight/Die/sides">See details</a>
`offset_strategy` | The strategy how to offset the randomly generated values against the base value. Either they are all added or subtracted or even results are added and odd results are subtracted. | <a href="#Weight/Die/offset_strategy">See details</a>

#### <a name="Weight/Die/number"></a> `number`

Number of dice of the same type. Example: 2 in 2D6.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Weight/Die/sides"></a> `sides`

Number of sides on every die. Example: 6 in 2D6.

- **Type:** <a href="#DieType">DieType</a>

#### <a name="Weight/Die/offset_strategy"></a> `offset_strategy`

The strategy how to offset the randomly generated values against the base value. Either they are all added or subtracted or even results are added and odd results are subtracted.

- **Type:** <a href="#Weight/OffsetStrategy">OffsetStrategy</a>

- **Type:** Union

#### Case: Add

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Weight/OffsetStrategy`0/tag">See details</a>

##### <a name="Weight/OffsetStrategy`0/tag"></a> `tag`

- **Constant:** `"Add"`

#### Case: Subtract

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Weight/OffsetStrategy`1/tag">See details</a>

##### <a name="Weight/OffsetStrategy`1/tag"></a> `tag`

- **Constant:** `"Subtract"`

#### Case: AddEvenSubtractOdd

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Weight/OffsetStrategy`2/tag">See details</a>

##### <a name="Weight/OffsetStrategy`2/tag"></a> `tag`

- **Constant:** `"AddEvenSubtractOdd"`

---

### <a name="StartingAgeConfigForExperienceLevel"></a> StartingAgeConfigForExperienceLevel

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`experience_level_id` | The selected experience level's identifier. | <a href="#StartingAgeConfigForExperienceLevel/experience_level_id">See details</a>
`base` | The base value for the selected experience level. | <a href="#StartingAgeConfigForExperienceLevel/base">See details</a>
`random` | The random value for the selected experience level. It is going to be added to the base value. | <a href="#StartingAgeConfigForExperienceLevel/random">See details</a>

#### <a name="StartingAgeConfigForExperienceLevel/experience_level_id"></a> `experience_level_id`

The selected experience level's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `7`

#### <a name="StartingAgeConfigForExperienceLevel/base"></a> `base`

The base value for the selected experience level.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="StartingAgeConfigForExperienceLevel/random"></a> `random`

The random value for the selected experience level. It is going to be added to the base value.

- **Type:** <a href="#Die">Die</a>

---

### <a name="VariantDependent"></a> VariantDependent

The race may have variants and associated configuration for each variant. If the race is plain (has no variants), the values that would otherwise be defined in the variant configuration need to be set for the whole race. This excludes common and uncommon advantages and disadvantages, since they may be defined for the whole race even if variants exist.

- **Type:** Union

#### Case: HasVariants

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantDependent`0/tag">See details</a>
`variants` | A list of available race variants. | <a href="#VariantDependent`0/variants">See details</a>

##### <a name="VariantDependent`0/tag"></a> `tag`

- **Constant:** `"HasVariants"`

##### <a name="VariantDependent`0/variants"></a> `variants`

A list of available race variants.

- **Type:** List
- **Minimum Items:** `1`

###### Items

- **Type:** <a href="#RaceVariant">RaceVariant</a>

#### Case: Plain

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantDependent`1/tag">See details</a>
`common_cultures` | The list of common cultures. | <a href="#VariantDependent`1/common_cultures">See details</a>
`hair_color` | An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color. | <a href="#VariantDependent`1/hair_color">See details</a>
`eye_color` | An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color. | <a href="#VariantDependent`1/eye_color">See details</a>
`height` | Configuration for random height generation. | <a href="#VariantDependent`1/height">See details</a>

##### <a name="VariantDependent`1/tag"></a> `tag`

- **Constant:** `"Plain"`

##### <a name="VariantDependent`1/common_cultures"></a> `common_cultures`

The list of common cultures.

- **Type:** List
- **Minimum Items:** `1`

###### Items

- **Type:** <a href="#CommonCulture">CommonCulture</a>

##### <a name="VariantDependent`1/hair_color"></a> `hair_color`

An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.

- **Type:** List
- **Minimum Items:** `20`
- **Maximum Items:** `20`

###### Items

- **Type:** <a href="#HairColor">HairColor</a>

##### <a name="VariantDependent`1/eye_color"></a> `eye_color`

An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.

- **Type:** List
- **Minimum Items:** `20`
- **Maximum Items:** `20`

###### Items

- **Type:** <a href="#EyeColor">EyeColor</a>

##### <a name="VariantDependent`1/height"></a> `height`

Configuration for random height generation.

- **Type:** <a href="#Height">Height</a>

---

### <a name="RaceVariant"></a> Race Variant

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#RaceVariant/id">See details</a>
`common_cultures` | The list of common cultures. | <a href="#RaceVariant/common_cultures">See details</a>
`common_advantages?` | A list of common advantages. If common advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined. | <a href="#RaceVariant/common_advantages">See details</a>
`common_disadvantages?` | A list of common disadvantages. If common disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined. | <a href="#RaceVariant/common_disadvantages">See details</a>
`uncommon_advantages?` | A list of uncommon advantages. If uncommon advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined. | <a href="#RaceVariant/uncommon_advantages">See details</a>
`uncommon_disadvantages?` | A list of uncommon disadvantages. If uncommon disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined. | <a href="#RaceVariant/uncommon_disadvantages">See details</a>
`hair_color` | An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color. | <a href="#RaceVariant/hair_color">See details</a>
`eye_color` | An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color. | <a href="#RaceVariant/eye_color">See details</a>
`height` | Configuration for random height generation. | <a href="#RaceVariant/height">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#RaceVariant/translations">See details</a>

#### <a name="RaceVariant/id"></a> `id`

An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RaceVariant/common_cultures"></a> `common_cultures`

The list of common cultures.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#CommonCulture">CommonCulture</a>

#### <a name="RaceVariant/common_advantages"></a> `common_advantages?`

A list of common advantages. If common advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="RaceVariant/common_disadvantages"></a> `common_disadvantages?`

A list of common disadvantages. If common disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="RaceVariant/uncommon_advantages"></a> `uncommon_advantages?`

A list of uncommon advantages. If uncommon advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="RaceVariant/uncommon_disadvantages"></a> `uncommon_disadvantages?`

A list of uncommon disadvantages. If uncommon disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="RaceVariant/hair_color"></a> `hair_color`

An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.

- **Type:** List
- **Minimum Items:** `20`
- **Maximum Items:** `20`

##### Items

- **Type:** <a href="#HairColor">HairColor</a>

#### <a name="RaceVariant/eye_color"></a> `eye_color`

An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.

- **Type:** List
- **Minimum Items:** `20`
- **Maximum Items:** `20`

##### Items

- **Type:** <a href="#EyeColor">EyeColor</a>

#### <a name="RaceVariant/height"></a> `height`

Configuration for random height generation.

- **Type:** <a href="#Height">Height</a>

#### <a name="RaceVariant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

##### Values matching `^[a-z]{2}-[A-Z]{2}$`

- **Type:** <a href="#RaceVariantTranslation">RaceVariantTranslation</a>

---

### <a name="CommonCulture"></a> CommonCulture

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The culture's identifier. | <a href="#CommonCulture/id">See details</a>

#### <a name="CommonCulture/id"></a> `id`

The culture's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="HairColor"></a> HairColor

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The hair color's identifier. | <a href="#HairColor/id">See details</a>

#### <a name="HairColor/id"></a> `id`

The hair color's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="EyeColor"></a> EyeColor

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The hair color's identifier. | <a href="#EyeColor/id">See details</a>

#### <a name="EyeColor/id"></a> `id`

The hair color's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Height"></a> Height

Configuration for random height generation.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`base` | The base value used for random height. | <a href="#Height/base">See details</a>
`random` | The dice used for random height. | <a href="#Height/random">See details</a>

#### <a name="Height/base"></a> `base`

The base value used for random height.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Height/random"></a> `random`

The dice used for random height.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#Die">Die</a>

---

### <a name="RaceVariantTranslation"></a> RaceVariantTranslation

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The race variant's name. | <a href="#RaceVariantTranslation/name">See details</a>
`common_advantages?` | The respective common advantages text from the source book. If common advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined. | <a href="#RaceVariantTranslation/common_advantages">See details</a>
`common_disadvantages?` | The respective common disadvantages text from the source book. If common disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined. | <a href="#RaceVariantTranslation/common_disadvantages">See details</a>
`uncommon_advantages?` | The respective uncommon advantages text from the source book. If uncommon advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined. | <a href="#RaceVariantTranslation/uncommon_advantages">See details</a>
`uncommon_disadvantages?` | The respective uncommon disadvantages text from the source book. If uncommon disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined. | <a href="#RaceVariantTranslation/uncommon_disadvantages">See details</a>

#### <a name="RaceVariantTranslation/name"></a> `name`

The race variant's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceVariantTranslation/common_advantages"></a> `common_advantages?`

The respective common advantages text from the source book. If common advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceVariantTranslation/common_disadvantages"></a> `common_disadvantages?`

The respective common disadvantages text from the source book. If common disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceVariantTranslation/uncommon_advantages"></a> `uncommon_advantages?`

The respective uncommon advantages text from the source book. If uncommon advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceVariantTranslation/uncommon_disadvantages"></a> `uncommon_disadvantages?`

The respective uncommon disadvantages text from the source book. If uncommon disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="RaceTranslation"></a> RaceTranslation

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The race's name. | <a href="#RaceTranslation/name">See details</a>
`attribute_adjustments` | The respective attribute adjustments text from the source book. | <a href="#RaceTranslation/attribute_adjustments">See details</a>
`automatic_advantages?` | The respective automatic advantages text from the source book. | <a href="#RaceTranslation/automatic_advantages">See details</a>
`strongly_recommended_advantages?` | The respective strongly recommended advantages text from the source book. | <a href="#RaceTranslation/strongly_recommended_advantages">See details</a>
`strongly_recommended_disadvantages?` | The respective strongly recommended disadvantages text from the source book. | <a href="#RaceTranslation/strongly_recommended_disadvantages">See details</a>
`common_advantages?` | The respective common advantages text from the source book. If common advantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants. | <a href="#RaceTranslation/common_advantages">See details</a>
`common_disadvantages?` | The respective common disadvantages text from the source book. If common disadvantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants. | <a href="#RaceTranslation/common_disadvantages">See details</a>
`uncommon_advantages?` | The respective uncommon advantages text from the source book. If uncommon advantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants. | <a href="#RaceTranslation/uncommon_advantages">See details</a>
`uncommon_disadvantages?` | The respective uncommon disadvantages text from the source book. If uncommon disadvantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants. | <a href="#RaceTranslation/uncommon_disadvantages">See details</a>
`errata?` |  | <a href="#RaceTranslation/errata">See details</a>

#### <a name="RaceTranslation/name"></a> `name`

The race's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceTranslation/attribute_adjustments"></a> `attribute_adjustments`

The respective attribute adjustments text from the source book.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceTranslation/automatic_advantages"></a> `automatic_advantages?`

The respective automatic advantages text from the source book.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceTranslation/strongly_recommended_advantages"></a> `strongly_recommended_advantages?`

The respective strongly recommended advantages text from the source book.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceTranslation/strongly_recommended_disadvantages"></a> `strongly_recommended_disadvantages?`

The respective strongly recommended disadvantages text from the source book.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceTranslation/common_advantages"></a> `common_advantages?`

The respective common advantages text from the source book. If common advantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceTranslation/common_disadvantages"></a> `common_disadvantages?`

The respective common disadvantages text from the source book. If common disadvantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceTranslation/uncommon_advantages"></a> `uncommon_advantages?`

The respective uncommon advantages text from the source book. If uncommon advantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceTranslation/uncommon_disadvantages"></a> `uncommon_disadvantages?`

The respective uncommon disadvantages text from the source book. If uncommon disadvantages are defined by race variants, leave this field empty. It is overridden by the same field in race variants.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RaceTranslation/errata"></a> `errata?`

- **Type:** <a href="./_Erratum.md#Errata">Errata</a>

---

### <a name="Die"></a> Die

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | Number of dice of the same type. Example: 2 in 2D6. | <a href="#Die/number">See details</a>
`sides` | Number of sides on every die. Example: 6 in 2D6. | <a href="#Die/sides">See details</a>

#### <a name="Die/number"></a> `number`

Number of dice of the same type. Example: 2 in 2D6.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Die/sides"></a> `sides`

Number of sides on every die. Example: 6 in 2D6.

- **Type:** <a href="#DieType">DieType</a>

---

### <a name="DieType"></a> DieType

Number of sides on every dice. Example: 6 in 2D6.

- **Possible values:** `3`, `6`, `20`

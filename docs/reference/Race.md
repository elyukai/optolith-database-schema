# Race

A playable race with stats and skills.

## Definitions

### <a name="Race"></a> Race (`Race`)

A playable race with stats and skills.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The race's identifier. An unique, increasing integer. | <a href="#Race/id">See details</a>
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

The race's identifier. An unique, increasing integer.

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

Describes how to raise or lower maximum attribute values during character
creation.

- **Type:** <a href="#AttributeAdjustments">AttributeAdjustments</a>

#### <a name="Race/automatic_advantages"></a> `automatic_advantages?`

A list of automatically applied advantages. This does only work for
advantages with no further configuration such as level or special
selection.

- **Type:** List
- **Items:** <a href="#Race/automatic_advantages[]">Race/automatic_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="Race/strongly_recommended_advantages"></a> `strongly_recommended_advantages?`

A list of strongly recommended advantages.

- **Type:** List
- **Items:** <a href="#Race/strongly_recommended_advantages[]">Race/strongly_recommended_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="Race/strongly_recommended_disadvantages"></a> `strongly_recommended_disadvantages?`

A list of strongly recommended disadvantages.

- **Type:** List
- **Items:** <a href="#Race/strongly_recommended_disadvantages[]">Race/strongly_recommended_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="Race/common_advantages"></a> `common_advantages?`

A list of common advantages. If common advantages are defined by race
variants, leave this field empty. It is overridden by the same field in
race variants.

- **Type:** List
- **Items:** <a href="#Race/common_advantages[]">Race/common_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="Race/common_disadvantages"></a> `common_disadvantages?`

A list of common disadvantages. If common disadvantages are defined by race
variants, leave this field empty. It is overridden by the same field in
race variants.

- **Type:** List
- **Items:** <a href="#Race/common_disadvantages[]">Race/common_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="Race/uncommon_advantages"></a> `uncommon_advantages?`

A list of uncommon advantages. If uncommon advantages are defined by race
variants, leave this field empty. It is overridden by the same field in
race variants.

- **Type:** List
- **Items:** <a href="#Race/uncommon_advantages[]">Race/uncommon_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="Race/uncommon_disadvantages"></a> `uncommon_disadvantages?`

A list of uncommon disadvantages. If uncommon disadvantages are defined by
race variants, leave this field empty. It is overridden by the same field
in race variants.

- **Type:** List
- **Items:** <a href="#Race/uncommon_disadvantages[]">Race/uncommon_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="Race/weight"></a> `weight`

Configuration for random weight generation.

- **Type:** <a href="#Weight">Weight</a>

#### <a name="Race/starting_age"></a> `starting_age`

Defines the starting ages for the race. It depends on the selected
experience level.

- **Type:** List
- **Items:** <a href="#Race/starting_age[]">Race/starting_age[]</a>
- **Minimum Items:** `7`
- **Maximum Items:** `7`

#### <a name="Race/variant_dependent"></a> `variant_dependent`

The race may have variants and associated configuration for each variant.
If the race is plain (has no variants), the values that would otherwise be
defined in the variant configuration need to be set for the whole race.
This excludes common and uncommon advantages and disadvantages, since they
may be defined for the whole race even if variants exist.

- **Type:** <a href="#RaceVariantDependent">RaceVariantDependent</a>

#### <a name="Race/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Race/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Race/translations[key]">Race/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Race/automatic_advantages[]"></a> `Race/automatic_advantages[]`

- **Type:** <a href="./_SimpleReferences.md#AdvantageReference">AdvantageReference</a>

---

### <a name="Race/strongly_recommended_advantages[]"></a> Commonness-rated Advantage/Disadvantage (`Race/strongly_recommended_advantages[]`)

Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's or disadvantage's identifier. | <a href="#Race/strongly_recommended_advantages[]/id">See details</a>

#### <a name="Race/strongly_recommended_advantages[]/id"></a> `id`

The advantage's or disadvantage's identifier.

- **Type:** <a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>

---

### <a name="Race/strongly_recommended_disadvantages[]"></a> Commonness-rated Advantage/Disadvantage (`Race/strongly_recommended_disadvantages[]`)

Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's or disadvantage's identifier. | <a href="#Race/strongly_recommended_disadvantages[]/id">See details</a>

#### <a name="Race/strongly_recommended_disadvantages[]/id"></a> `id`

The advantage's or disadvantage's identifier.

- **Type:** <a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>

---

### <a name="Race/common_advantages[]"></a> Commonness-rated Advantage/Disadvantage (`Race/common_advantages[]`)

Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's or disadvantage's identifier. | <a href="#Race/common_advantages[]/id">See details</a>

#### <a name="Race/common_advantages[]/id"></a> `id`

The advantage's or disadvantage's identifier.

- **Type:** <a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>

---

### <a name="Race/common_disadvantages[]"></a> Commonness-rated Advantage/Disadvantage (`Race/common_disadvantages[]`)

Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's or disadvantage's identifier. | <a href="#Race/common_disadvantages[]/id">See details</a>

#### <a name="Race/common_disadvantages[]/id"></a> `id`

The advantage's or disadvantage's identifier.

- **Type:** <a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>

---

### <a name="Race/uncommon_advantages[]"></a> Commonness-rated Advantage/Disadvantage (`Race/uncommon_advantages[]`)

Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's or disadvantage's identifier. | <a href="#Race/uncommon_advantages[]/id">See details</a>

#### <a name="Race/uncommon_advantages[]/id"></a> `id`

The advantage's or disadvantage's identifier.

- **Type:** <a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>

---

### <a name="Race/uncommon_disadvantages[]"></a> Commonness-rated Advantage/Disadvantage (`Race/uncommon_disadvantages[]`)

Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's or disadvantage's identifier. | <a href="#Race/uncommon_disadvantages[]/id">See details</a>

#### <a name="Race/uncommon_disadvantages[]/id"></a> `id`

The advantage's or disadvantage's identifier.

- **Type:** <a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>

---

### <a name="Race/starting_age[]"></a> `Race/starting_age[]`

- **Type:** <a href="#StartingAgeConfigForExperienceLevel">StartingAgeConfigForExperienceLevel</a>

---

### <a name="Race/translations[key]"></a> `Race/translations[key]`

- **Type:** <a href="#RaceTranslation">RaceTranslation</a>

---

### <a name="BaseValues"></a> `BaseValues`

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

### <a name="AttributeAdjustments"></a> `AttributeAdjustments`

Describes how to raise or lower maximum attribute values during character
creation.

- **Type:** List
- **Items:** <a href="#AttributeAdjustments[]">AttributeAdjustments[]</a>

---

### <a name="AttributeAdjustments[]"></a> `AttributeAdjustments[]`

- **Type:** <a href="#AttributeAdjustment">AttributeAdjustment</a>

---

### <a name="AttributeAdjustment"></a> `AttributeAdjustment`

An array of attribute maximum modifiers. The value will be added to the
current maximum of the selected attribute that has been chosen from the
listed attributes (negative values will lower the maximum).

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The value by which the selected attribute's maximum is modified (negative values will lower the maximum). | <a href="#AttributeAdjustment/value">See details</a>
`list` | A list of attributes the player has to choose from. If only one attribute is listed, no attribute has to be chosen. | <a href="#AttributeAdjustment/list">See details</a>

#### <a name="AttributeAdjustment/value"></a> `value`

The value by which the selected attribute's maximum is modified
(negative values will lower the maximum).

- **Type:** Integer

#### <a name="AttributeAdjustment/list"></a> `list`

A list of attributes the player has to choose from. If only one attribute
is listed, no attribute has to be chosen.

- **Type:** List
- **Items:** <a href="#AttributeAdjustment/list[]">AttributeAdjustment/list[]</a>
- **Minimum Items:** `1`

---

### <a name="AttributeAdjustment/list[]"></a> `AttributeAdjustment/list[]`

- **Type:** <a href="./_SimpleReferences.md#AttributeReference">AttributeReference</a>

---

### <a name="Weight"></a> `Weight`

Configuration for random weight generation.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`base` | The base value used for random weight. The height subtrahend; in case of `Height - 110 + 2D6` it is `110`. | <a href="#Weight/base">See details</a>
`random` | The dice used for random weight. | <a href="#Weight/random">See details</a>

#### <a name="Weight/base"></a> `base`

The base value used for random weight. The height subtrahend; in case of
`Height - 110 + 2D6` it is `110`.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Weight/random"></a> `random`

The dice used for random weight.

- **Type:** List
- **Items:** <a href="#Weight/random[]">Weight/random[]</a>
- **Minimum Items:** `1`

---

### <a name="Weight/random[]"></a> `Weight/random[]`

- **Type:** <a href="#WeightDice">WeightDice</a>

---

### <a name="WeightDice"></a> `WeightDice`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | Number of dice of the same type. Example: 2 in 2D6. | <a href="#WeightDice/number">See details</a>
`sides` | Number of sides on every die. Example: 6 in 2D6. | <a href="#WeightDice/sides">See details</a>
`offset_strategy` | The strategy how to offset the randomly generated values against the base value. Either they are all added or subtracted or even results are added and odd results are subtracted. | <a href="#WeightDice/offset_strategy">See details</a>

#### <a name="WeightDice/number"></a> `number`

Number of dice of the same type. Example: 2 in 2D6.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="WeightDice/sides"></a> `sides`

Number of sides on every die. Example: 6 in 2D6.

- **Type:** <a href="./_Dice.md#DieType">DieType</a>

#### <a name="WeightDice/offset_strategy"></a> `offset_strategy`

The strategy how to offset the randomly generated values against the
base value. Either they are all added or subtracted or even results are
added and odd results are subtracted.

- **Type:** <a href="#WeightDiceOffsetStrategy">WeightDiceOffsetStrategy</a>

---

### <a name="WeightDiceOffsetStrategy"></a> `WeightDiceOffsetStrategy`

The strategy how to offset the randomly generated values against the
base value. Either they are all added or subtracted or even results are
added and odd results are subtracted.

- **Type:** Union
- **Cases:** <a href="#WeightDiceOffsetStrategy'0">WeightDiceOffsetStrategy'0</a> | <a href="#WeightDiceOffsetStrategy'1">WeightDiceOffsetStrategy'1</a> | <a href="#WeightDiceOffsetStrategy'2">WeightDiceOffsetStrategy'2</a>

---

### <a name="WeightDiceOffsetStrategy'0"></a> `WeightDiceOffsetStrategy'0`

- **Constant:** `"Add"`

---

### <a name="WeightDiceOffsetStrategy'1"></a> `WeightDiceOffsetStrategy'1`

- **Constant:** `"Subtract"`

---

### <a name="WeightDiceOffsetStrategy'2"></a> `WeightDiceOffsetStrategy'2`

- **Constant:** `"AddEvenSubtractOdd"`

---

### <a name="StartingAgeConfigForExperienceLevel"></a> `StartingAgeConfigForExperienceLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`experience_level_id` | The selected experience level's identifier. | <a href="#StartingAgeConfigForExperienceLevel/experience_level_id">See details</a>
`base` | The base value for the selected experience level. | <a href="#StartingAgeConfigForExperienceLevel/base">See details</a>
`random` | The random value for the selected experience level. It is going to be added to the base value. | <a href="#StartingAgeConfigForExperienceLevel/random">See details</a>

#### <a name="StartingAgeConfigForExperienceLevel/experience_level_id"></a> `experience_level_id`

The selected experience level's identifier.

- **Type:** <a href="./_Identifier.md#ExperienceLevelIdentifier">ExperienceLevelIdentifier</a>

#### <a name="StartingAgeConfigForExperienceLevel/base"></a> `base`

The base value for the selected experience level.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="StartingAgeConfigForExperienceLevel/random"></a> `random`

The random value for the selected experience level. It is going to be
added to the base value.

- **Type:** <a href="./_Dice.md#Dice">Dice</a>

---

### <a name="RaceVariantDependent"></a> `RaceVariantDependent`

The race may have variants and associated configuration for each variant.
If the race is plain (has no variants), the values that would otherwise be
defined in the variant configuration need to be set for the whole race.
This excludes common and uncommon advantages and disadvantages, since they
may be defined for the whole race even if variants exist.

- **Type:** Union
- **Cases:** <a href="#RaceVariantDependent'HasVariants">RaceVariantDependent'HasVariants</a> | <a href="#RaceVariantDependent'Plain">RaceVariantDependent'Plain</a>

---

### <a name="RaceVariantDependent'HasVariants"></a> `RaceVariantDependent'HasVariants`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RaceVariantDependent'HasVariants/tag">See details</a>
`has_variants` |  | <a href="#RaceVariantDependent'HasVariants/has_variants">See details</a>

#### <a name="RaceVariantDependent'HasVariants/tag"></a> `tag`

- **Constant:** `"HasVariants"`

#### <a name="RaceVariantDependent'HasVariants/has_variants"></a> `has_variants`

- **Type:** <a href="#RaceVariants">RaceVariants</a>

---

### <a name="RaceVariantDependent'Plain"></a> `RaceVariantDependent'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RaceVariantDependent'Plain/tag">See details</a>
`plain` |  | <a href="#RaceVariantDependent'Plain/plain">See details</a>

#### <a name="RaceVariantDependent'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="RaceVariantDependent'Plain/plain"></a> `plain`

- **Type:** <a href="#ValuesForRaceWithoutVariants">ValuesForRaceWithoutVariants</a>

---

### <a name="RaceVariants"></a> `RaceVariants`

A list of available race variants.

- **Type:** List
- **Items:** <a href="#RaceVariants[]">RaceVariants[]</a>
- **Minimum Items:** `1`

---

### <a name="RaceVariants[]"></a> `RaceVariants[]`

- **Type:** <a href="#RaceVariant">RaceVariant</a>

---

### <a name="ValuesForRaceWithoutVariants"></a> `ValuesForRaceWithoutVariants`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`common_cultures` | The list of common cultures. | <a href="#ValuesForRaceWithoutVariants/common_cultures">See details</a>
`hair_color` | An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color. | <a href="#ValuesForRaceWithoutVariants/hair_color">See details</a>
`eye_color` | An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color. | <a href="#ValuesForRaceWithoutVariants/eye_color">See details</a>
`height` | Configuration for random height generation. | <a href="#ValuesForRaceWithoutVariants/height">See details</a>

#### <a name="ValuesForRaceWithoutVariants/common_cultures"></a> `common_cultures`

The list of common cultures.

- **Type:** List
- **Items:** <a href="#ValuesForRaceWithoutVariants/common_cultures[]">ValuesForRaceWithoutVariants/common_cultures[]</a>
- **Minimum Items:** `1`

#### <a name="ValuesForRaceWithoutVariants/hair_color"></a> `hair_color`

An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.

- **Type:** List
- **Items:** <a href="#ValuesForRaceWithoutVariants/hair_color[]">ValuesForRaceWithoutVariants/hair_color[]</a>
- **Minimum Items:** `20`
- **Maximum Items:** `20`

#### <a name="ValuesForRaceWithoutVariants/eye_color"></a> `eye_color`

An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.

- **Type:** List
- **Items:** <a href="#ValuesForRaceWithoutVariants/eye_color[]">ValuesForRaceWithoutVariants/eye_color[]</a>
- **Minimum Items:** `20`
- **Maximum Items:** `20`

#### <a name="ValuesForRaceWithoutVariants/height"></a> `height`

Configuration for random height generation.

- **Type:** <a href="#Height">Height</a>

---

### <a name="ValuesForRaceWithoutVariants/common_cultures[]"></a> `ValuesForRaceWithoutVariants/common_cultures[]`

- **Type:** <a href="./_SimpleReferences.md#CultureReference">CultureReference</a>

---

### <a name="ValuesForRaceWithoutVariants/hair_color[]"></a> `ValuesForRaceWithoutVariants/hair_color[]`

- **Type:** <a href="./_SimpleReferences.md#HairColorReference">HairColorReference</a>

---

### <a name="ValuesForRaceWithoutVariants/eye_color[]"></a> `ValuesForRaceWithoutVariants/eye_color[]`

- **Type:** <a href="./_SimpleReferences.md#EyeColorReference">EyeColorReference</a>

---

### <a name="RaceVariant"></a> Race Variant (`RaceVariant`)

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
- **Items:** <a href="#RaceVariant/common_cultures[]">RaceVariant/common_cultures[]</a>
- **Minimum Items:** `1`

#### <a name="RaceVariant/common_advantages"></a> `common_advantages?`

A list of common advantages. If common advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** List
- **Items:** <a href="#RaceVariant/common_advantages[]">RaceVariant/common_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="RaceVariant/common_disadvantages"></a> `common_disadvantages?`

A list of common disadvantages. If common disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** List
- **Items:** <a href="#RaceVariant/common_disadvantages[]">RaceVariant/common_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="RaceVariant/uncommon_advantages"></a> `uncommon_advantages?`

A list of uncommon advantages. If uncommon advantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** List
- **Items:** <a href="#RaceVariant/uncommon_advantages[]">RaceVariant/uncommon_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="RaceVariant/uncommon_disadvantages"></a> `uncommon_disadvantages?`

A list of uncommon disadvantages. If uncommon disadvantages are defined by the base race, leave this field empty. This field overrides the same field of the base race, if both are defined.

- **Type:** List
- **Items:** <a href="#RaceVariant/uncommon_disadvantages[]">RaceVariant/uncommon_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="RaceVariant/hair_color"></a> `hair_color`

An array containing 20 (numeric) hair color identifiers. The array also represents the 20-sided die for a random hair color.

- **Type:** List
- **Items:** <a href="#RaceVariant/hair_color[]">RaceVariant/hair_color[]</a>
- **Minimum Items:** `20`
- **Maximum Items:** `20`

#### <a name="RaceVariant/eye_color"></a> `eye_color`

An array containing 20 (numeric) eye color identifiers. The array also represents the 20-sided die for a random eye color.

- **Type:** List
- **Items:** <a href="#RaceVariant/eye_color[]">RaceVariant/eye_color[]</a>
- **Minimum Items:** `20`
- **Maximum Items:** `20`

#### <a name="RaceVariant/height"></a> `height`

Configuration for random height generation.

- **Type:** <a href="#Height">Height</a>

#### <a name="RaceVariant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#RaceVariant/translations[key]">RaceVariant/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="RaceVariant/common_cultures[]"></a> `RaceVariant/common_cultures[]`

- **Type:** <a href="./_SimpleReferences.md#CultureReference">CultureReference</a>

---

### <a name="RaceVariant/common_advantages[]"></a> Commonness-rated Advantage/Disadvantage (`RaceVariant/common_advantages[]`)

Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's or disadvantage's identifier. | <a href="#RaceVariant/common_advantages[]/id">See details</a>

#### <a name="RaceVariant/common_advantages[]/id"></a> `id`

The advantage's or disadvantage's identifier.

- **Type:** <a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>

---

### <a name="RaceVariant/common_disadvantages[]"></a> Commonness-rated Advantage/Disadvantage (`RaceVariant/common_disadvantages[]`)

Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's or disadvantage's identifier. | <a href="#RaceVariant/common_disadvantages[]/id">See details</a>

#### <a name="RaceVariant/common_disadvantages[]/id"></a> `id`

The advantage's or disadvantage's identifier.

- **Type:** <a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>

---

### <a name="RaceVariant/uncommon_advantages[]"></a> Commonness-rated Advantage/Disadvantage (`RaceVariant/uncommon_advantages[]`)

Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's or disadvantage's identifier. | <a href="#RaceVariant/uncommon_advantages[]/id">See details</a>

#### <a name="RaceVariant/uncommon_advantages[]/id"></a> `id`

The advantage's or disadvantage's identifier.

- **Type:** <a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>

---

### <a name="RaceVariant/uncommon_disadvantages[]"></a> Commonness-rated Advantage/Disadvantage (`RaceVariant/uncommon_disadvantages[]`)

Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's or disadvantage's identifier. | <a href="#RaceVariant/uncommon_disadvantages[]/id">See details</a>

#### <a name="RaceVariant/uncommon_disadvantages[]/id"></a> `id`

The advantage's or disadvantage's identifier.

- **Type:** <a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>

---

### <a name="RaceVariant/hair_color[]"></a> `RaceVariant/hair_color[]`

- **Type:** <a href="./_SimpleReferences.md#HairColorReference">HairColorReference</a>

---

### <a name="RaceVariant/eye_color[]"></a> `RaceVariant/eye_color[]`

- **Type:** <a href="./_SimpleReferences.md#EyeColorReference">EyeColorReference</a>

---

### <a name="RaceVariant/translations[key]"></a> `RaceVariant/translations[key]`

- **Type:** <a href="#RaceVariantTranslation">RaceVariantTranslation</a>

---

### <a name="Height"></a> `Height`

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
- **Items:** <a href="#Height/random[]">Height/random[]</a>
- **Minimum Items:** `1`

---

### <a name="Height/random[]"></a> `Height/random[]`

- **Type:** <a href="./_Dice.md#Dice">Dice</a>

---

### <a name="RaceVariantTranslation"></a> `RaceVariantTranslation`

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

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceVariantTranslation/common_advantages"></a> `common_advantages?`

The respective common advantages text from the source book. If common
advantages are defined by the base race, leave this field empty. This field
overrides the same field of the base race, if both are defined.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceVariantTranslation/common_disadvantages"></a> `common_disadvantages?`

The respective common disadvantages text from the source book. If common
disadvantages are defined by the base race, leave this field empty. This
field overrides the same field of the base race, if both are defined.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceVariantTranslation/uncommon_advantages"></a> `uncommon_advantages?`

The respective uncommon advantages text from the source book. If uncommon
advantages are defined by the base race, leave this field empty. This field
overrides the same field of the base race, if both are defined.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceVariantTranslation/uncommon_disadvantages"></a> `uncommon_disadvantages?`

The respective uncommon disadvantages text from the source book. If
uncommon disadvantages are defined by the base race, leave this field
empty. This field overrides the same field of the base race, if both are
defined.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="RaceTranslation"></a> `RaceTranslation`

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

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceTranslation/attribute_adjustments"></a> `attribute_adjustments`

The respective attribute adjustments text from the source book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceTranslation/automatic_advantages"></a> `automatic_advantages?`

The respective automatic advantages text from the source book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceTranslation/strongly_recommended_advantages"></a> `strongly_recommended_advantages?`

The respective strongly recommended advantages text from the source book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceTranslation/strongly_recommended_disadvantages"></a> `strongly_recommended_disadvantages?`

The respective strongly recommended disadvantages text from the source
book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceTranslation/common_advantages"></a> `common_advantages?`

The respective common advantages text from the source book. If common
advantages are defined by race variants, leave this field empty. It is
overridden by the same field in race variants.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceTranslation/common_disadvantages"></a> `common_disadvantages?`

The respective common disadvantages text from the source book. If common
disadvantages are defined by race variants, leave this field empty. It is
overridden by the same field in race variants.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceTranslation/uncommon_advantages"></a> `uncommon_advantages?`

The respective uncommon advantages text from the source book. If uncommon
advantages are defined by race variants, leave this field empty. It is
overridden by the same field in race variants.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceTranslation/uncommon_disadvantages"></a> `uncommon_disadvantages?`

The respective uncommon disadvantages text from the source book. If
uncommon disadvantages are defined by race variants, leave this field
empty. It is overridden by the same field in race variants.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

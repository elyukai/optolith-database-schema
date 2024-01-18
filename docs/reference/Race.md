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
`weight` | Configuration for random weight generation. | <a href="#Race/weight">See details</a>
`starting_age` | Defines the starting ages for the race. It depends on the selected experience level. | <a href="#Race/starting_age">See details</a>
`variants` | A list of available race variants where one has to be selected. If no variants are to be selected, a single variant with no name has to be provided which will be used as the missing values for the base race. | <a href="#Race/variants">See details</a>
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

#### <a name="Race/variants"></a> `variants`

A list of available race variants where one has to be selected. If no
variants are to be selected, a single variant with no name has to be provided
which will be used as the missing values for the base race.

- **Type:** <a href="#RaceVariants">RaceVariants</a>

#### <a name="Race/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Race/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#RaceTranslation">RaceTranslation</a>&gt;

---

### <a name="Race/automatic_advantages[]"></a> `Race/automatic_advantages[]`

- **Type:** <a href="./_SimpleReferences.md#AdvantageReference">AdvantageReference</a>

---

### <a name="Race/strongly_recommended_advantages[]"></a> `Race/strongly_recommended_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>&gt;

---

### <a name="Race/strongly_recommended_disadvantages[]"></a> `Race/strongly_recommended_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>&gt;

---

### <a name="Race/starting_age[]"></a> `Race/starting_age[]`

- **Type:** <a href="#StartingAgeConfigForExperienceLevel">StartingAgeConfigForExperienceLevel</a>

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

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`fixed?` | The values by which the maximum of the respective attribute is modified. | <a href="#AttributeAdjustments/fixed">See details</a>
`selectable?` | An array of attribute maximum modifiers, where the attribute they apply to is selected from a list of options. | <a href="#AttributeAdjustments/selectable">See details</a>

#### <a name="AttributeAdjustments/fixed"></a> `fixed?`

The values by which the maximum of the respective attribute is modified.

- **Type:** List
- **Items:** <a href="#AttributeAdjustments/fixed[]">AttributeAdjustments/fixed[]</a>
- **Minimum Items:** `1`

#### <a name="AttributeAdjustments/selectable"></a> `selectable?`

An array of attribute maximum modifiers, where the attribute they apply to
is selected from a list of options.

The array only permits a single entry because no race specified more than
one selectable attribute adjustment so far. But the schema allows for
multiple entries to be future-proof.

- **Type:** List
- **Items:** <a href="#AttributeAdjustments/selectable[]">AttributeAdjustments/selectable[]</a>
- **Minimum Items:** `1`
- **Maximum Items:** `1`

---

### <a name="AttributeAdjustments/fixed[]"></a> `AttributeAdjustments/fixed[]`

- **Type:** <a href="#FixedAttributeAdjustment">FixedAttributeAdjustment</a>

---

### <a name="AttributeAdjustments/selectable[]"></a> `AttributeAdjustments/selectable[]`

- **Type:** <a href="#SelectableAttributeAdjustment">SelectableAttributeAdjustment</a>

---

### <a name="FixedAttributeAdjustment"></a> `FixedAttributeAdjustment`

A value by which the maximum of the respective attribute is modified.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The attribute the modifier applies to. | <a href="#FixedAttributeAdjustment/id">See details</a>
`value` | The value by which the specified attribute's maximum is modified (negative values will lower the maximum). | <a href="#FixedAttributeAdjustment/value">See details</a>

#### <a name="FixedAttributeAdjustment/id"></a> `id`

The attribute the modifier applies to.

- **Type:** <a href="./_Identifier.md#AttributeIdentifier">AttributeIdentifier</a>

#### <a name="FixedAttributeAdjustment/value"></a> `value`

The value by which the specified attribute's maximum is modified
(negative values will lower the maximum).

- **Type:** Integer

---

### <a name="SelectableAttributeAdjustment"></a> `SelectableAttributeAdjustment`

A value that will be added to the current maximum of the selected attribute
that has been chosen from the listed attributes (negative values will lower
the maximum).

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | A list of attributes the player has to choose from. | <a href="#SelectableAttributeAdjustment/list">See details</a>
`value` | The value by which the selected attribute's maximum is modified (negative values will lower the maximum). | <a href="#SelectableAttributeAdjustment/value">See details</a>

#### <a name="SelectableAttributeAdjustment/list"></a> `list`

A list of attributes the player has to choose from.

- **Type:** List
- **Items:** <a href="#SelectableAttributeAdjustment/list[]">SelectableAttributeAdjustment/list[]</a>
- **Minimum Items:** `2`

#### <a name="SelectableAttributeAdjustment/value"></a> `value`

The value by which the selected attribute's maximum is modified
(negative values will lower the maximum).

- **Type:** Integer

---

### <a name="SelectableAttributeAdjustment/list[]"></a> `SelectableAttributeAdjustment/list[]`

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
`id` | The selected experience level's identifier. | <a href="#StartingAgeConfigForExperienceLevel/id">See details</a>
`base` | The base value for the selected experience level. | <a href="#StartingAgeConfigForExperienceLevel/base">See details</a>
`random` | The random value for the selected experience level. It is going to be added to the base value. | <a href="#StartingAgeConfigForExperienceLevel/random">See details</a>

#### <a name="StartingAgeConfigForExperienceLevel/id"></a> `id`

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

### <a name="RaceVariants"></a> `RaceVariants`

A list of available race variants where one has to be selected. If no
variants are to be selected, a single variant with no name has to be provided
which will be used as the missing values for the base race.

- **Type:** List
- **Items:** <a href="#RaceVariants[]">RaceVariants[]</a>
- **Minimum Items:** `1`

---

### <a name="RaceVariants[]"></a> `RaceVariants[]`

- **Type:** <a href="#RaceVariant">RaceVariant</a>

---

### <a name="RaceVariant"></a> Race Variant (`RaceVariant`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#RaceVariant/id">See details</a>
`common_cultures` | The list of common cultures. | <a href="#RaceVariant/common_cultures">See details</a>
`common_advantages?` | A list of common advantages. | <a href="#RaceVariant/common_advantages">See details</a>
`common_disadvantages?` | A list of common disadvantages. | <a href="#RaceVariant/common_disadvantages">See details</a>
`uncommon_advantages?` | A list of uncommon advantages. | <a href="#RaceVariant/uncommon_advantages">See details</a>
`uncommon_disadvantages?` | A list of uncommon disadvantages. | <a href="#RaceVariant/uncommon_disadvantages">See details</a>
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

A list of common advantages.

- **Type:** List
- **Items:** <a href="#RaceVariant/common_advantages[]">RaceVariant/common_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="RaceVariant/common_disadvantages"></a> `common_disadvantages?`

A list of common disadvantages.

- **Type:** List
- **Items:** <a href="#RaceVariant/common_disadvantages[]">RaceVariant/common_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="RaceVariant/uncommon_advantages"></a> `uncommon_advantages?`

A list of uncommon advantages.

- **Type:** List
- **Items:** <a href="#RaceVariant/uncommon_advantages[]">RaceVariant/uncommon_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="RaceVariant/uncommon_disadvantages"></a> `uncommon_disadvantages?`

A list of uncommon disadvantages.

- **Type:** List
- **Items:** <a href="#RaceVariant/uncommon_disadvantages[]">RaceVariant/uncommon_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="RaceVariant/hair_color"></a> `hair_color`

An array containing 20 (numeric) hair color identifiers. The array also
represents the 20-sided die for a random hair color.

- **Type:** List
- **Items:** <a href="#RaceVariant/hair_color[]">RaceVariant/hair_color[]</a>
- **Minimum Items:** `20`
- **Maximum Items:** `20`

#### <a name="RaceVariant/eye_color"></a> `eye_color`

An array containing 20 (numeric) eye color identifiers. The array also
represents the 20-sided die for a random eye color.

- **Type:** List
- **Items:** <a href="#RaceVariant/eye_color[]">RaceVariant/eye_color[]</a>
- **Minimum Items:** `20`
- **Maximum Items:** `20`

#### <a name="RaceVariant/height"></a> `height`

Configuration for random height generation.

- **Type:** <a href="#Height">Height</a>

#### <a name="RaceVariant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#RaceVariantTranslation">RaceVariantTranslation</a>&gt;

---

### <a name="RaceVariant/common_cultures[]"></a> `RaceVariant/common_cultures[]`

- **Type:** <a href="./_SimpleReferences.md#CultureReference">CultureReference</a>

---

### <a name="RaceVariant/common_advantages[]"></a> `RaceVariant/common_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>&gt;

---

### <a name="RaceVariant/common_disadvantages[]"></a> `RaceVariant/common_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>&gt;

---

### <a name="RaceVariant/uncommon_advantages[]"></a> `RaceVariant/uncommon_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>&gt;

---

### <a name="RaceVariant/uncommon_disadvantages[]"></a> `RaceVariant/uncommon_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>&gt;

---

### <a name="RaceVariant/hair_color[]"></a> `RaceVariant/hair_color[]`

- **Type:** <a href="./_SimpleReferences.md#HairColorReference">HairColorReference</a>

---

### <a name="RaceVariant/eye_color[]"></a> `RaceVariant/eye_color[]`

- **Type:** <a href="./_SimpleReferences.md#EyeColorReference">EyeColorReference</a>

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
`name?` | The race variant's name. If left empty, it defaults to the base race name. This can be used if the race has no (visible) variants so that a single variant has to be provided. | <a href="#RaceVariantTranslation/name">See details</a>
`common_advantages?` | The respective common advantages text from the source book. | <a href="#RaceVariantTranslation/common_advantages">See details</a>
`common_disadvantages?` | The respective common disadvantages text from the source book. | <a href="#RaceVariantTranslation/common_disadvantages">See details</a>
`uncommon_advantages?` | The respective uncommon advantages text from the source book. | <a href="#RaceVariantTranslation/uncommon_advantages">See details</a>
`uncommon_disadvantages?` | The respective uncommon disadvantages text from the source book. | <a href="#RaceVariantTranslation/uncommon_disadvantages">See details</a>

#### <a name="RaceVariantTranslation/name"></a> `name?`

The race variant's name. If left empty, it defaults to the base race name.
This can be used if the race has no (visible) variants so that a single
variant has to be provided.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceVariantTranslation/common_advantages"></a> `common_advantages?`

The respective common advantages text from the source book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceVariantTranslation/common_disadvantages"></a> `common_disadvantages?`

The respective common disadvantages text from the source book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceVariantTranslation/uncommon_advantages"></a> `uncommon_advantages?`

The respective uncommon advantages text from the source book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="RaceVariantTranslation/uncommon_disadvantages"></a> `uncommon_disadvantages?`

The respective uncommon disadvantages text from the source book.

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

#### <a name="RaceTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

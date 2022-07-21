# [TITLE MISSING]

## Definitions

### <a name="AnimalCare"></a> `AnimalCare`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`type` | Values depending on whether the animal care is feed. | <a href="#AnimalCare/type">See details</a>
`src` |  | <a href="#AnimalCare/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalCare/translations">See details</a>

#### <a name="AnimalCare/type"></a> `type`

Values depending on whether the animal care is feed.

- **Type:** <a href="#AnimalCareType">AnimalCareType</a>

#### <a name="AnimalCare/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AnimalCare/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimalCare/translations[key]">AnimalCare/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimalCare/translations[key]"></a> `AnimalCare/translations[key]`

- **Type:** <a href="./_Item.md#DefaultItemTranslation">DefaultItemTranslation</a>

---

### <a name="AnimalCareType"></a> `AnimalCareType`

Values depending on whether the animal care is feed.

- **Type:** Union
- **Cases:** <a href="#AnimalCareType'General">AnimalCareType'General</a> | <a href="#AnimalCareType'Feed">AnimalCareType'Feed</a>

---

### <a name="AnimalCareType'General"></a> `AnimalCareType'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalCareType'General/tag">See details</a>
`general` |  | <a href="#AnimalCareType'General/general">See details</a>

#### <a name="AnimalCareType'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="AnimalCareType'General/general"></a> `general`

- **Type:** <a href="#GeneralAnimalCare">GeneralAnimalCare</a>

---

### <a name="AnimalCareType'Feed"></a> `AnimalCareType'Feed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalCareType'Feed/tag">See details</a>
`feed` |  | <a href="#AnimalCareType'Feed/feed">See details</a>

#### <a name="AnimalCareType'Feed/tag"></a> `tag`

- **Constant:** `"Feed"`

#### <a name="AnimalCareType'Feed/feed"></a> `feed`

- **Type:** <a href="#AnimalFeed">AnimalFeed</a>

---

### <a name="GeneralAnimalCare"></a> `GeneralAnimalCare`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#GeneralAnimalCare/cost">See details</a>
`weight` | The weight in kg. | <a href="#GeneralAnimalCare/weight">See details</a>

#### <a name="GeneralAnimalCare/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="GeneralAnimalCare/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

---

### <a name="AnimalFeed"></a> `AnimalFeed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#AnimalFeed/cost">See details</a>

#### <a name="AnimalFeed/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="#AnimalFeedCost">AnimalFeedCost</a>

---

### <a name="AnimalFeedCost"></a> `AnimalFeedCost`

- **Type:** Union
- **Cases:** <a href="#AnimalFeedCost'PerWeek">AnimalFeedCost'PerWeek</a>

---

### <a name="AnimalFeedCost'PerWeek"></a> `AnimalFeedCost'PerWeek`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalFeedCost'PerWeek/tag">See details</a>
`per_week` |  | <a href="#AnimalFeedCost'PerWeek/per_week">See details</a>

#### <a name="AnimalFeedCost'PerWeek/tag"></a> `tag`

- **Constant:** `"PerWeek"`

#### <a name="AnimalFeedCost'PerWeek/per_week"></a> `per_week`

- **Type:** <a href="./_Item.md#FixedCost">FixedCost</a>

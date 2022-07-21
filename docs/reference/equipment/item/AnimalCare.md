# [TITLE MISSING]

## Definitions

### <a name="AnimalCare"></a> `AnimalCare`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#AnimalCare/cost">See details</a>
`src` |  | <a href="#AnimalCare/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalCare/translations">See details</a>

#### <a name="AnimalCare/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="#AnimalCareCost">AnimalCareCost</a>

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

### <a name="AnimalCareCost"></a> `AnimalCareCost`

- **Type:** Union
- **Cases:** <a href="#AnimalCareCost'Cost">AnimalCareCost'Cost</a> | <a href="#AnimalCareCost'PerWeek">AnimalCareCost'PerWeek</a>

---

### <a name="AnimalCareCost'Cost"></a> `AnimalCareCost'Cost`

- **Type:** <a href="./_Item.md#Cost">Cost</a>

---

### <a name="AnimalCareCost'PerWeek"></a> `AnimalCareCost'PerWeek`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalCareCost'PerWeek/tag">See details</a>
`per_week` |  | <a href="#AnimalCareCost'PerWeek/per_week">See details</a>

#### <a name="AnimalCareCost'PerWeek/tag"></a> `tag`

- **Constant:** `"PerWeek"`

#### <a name="AnimalCareCost'PerWeek/per_week"></a> `per_week`

- **Type:** <a href="./_Item.md#FixedCost">FixedCost</a>

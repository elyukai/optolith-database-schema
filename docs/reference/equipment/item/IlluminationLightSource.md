# [TITLE MISSING]

## Definitions

### <a name="IlluminationLightSource"></a> `IlluminationLightSource`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#IlluminationLightSource/cost">See details</a>
`weight` | The weight in kg. | <a href="#IlluminationLightSource/weight">See details</a>
`complexity?` | The complexity of crafting the item. | <a href="#IlluminationLightSource/complexity">See details</a>
`structure_points` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#IlluminationLightSource/structure_points">See details</a>
`burning_time` | The burning time is the time how long the light source can be lit. After that time you have to use a new light source. | <a href="#IlluminationLightSource/burning_time">See details</a>
`combat_use?` | The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item. | <a href="#IlluminationLightSource/combat_use">See details</a>
`src` |  | <a href="#IlluminationLightSource/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IlluminationLightSource/translations">See details</a>

#### <a name="IlluminationLightSource/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="IlluminationLightSource/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

#### <a name="IlluminationLightSource/complexity"></a> `complexity?`

The complexity of crafting the item.

- **Type:** <a href="./_Item.md#Complexity">Complexity</a>

#### <a name="IlluminationLightSource/structure_points"></a> `structure_points`

The structure points of the item. Use an array if the item consists of
multiple components that have individual structure points.

- **Type:** <a href="./_Item.md#StructurePoints">StructurePoints</a>

#### <a name="IlluminationLightSource/burning_time"></a> `burning_time`

The burning time is the time how long the light source can be lit. After
that time you have to use a new light source.

- **Type:** <a href="#BurningTime">BurningTime</a>

#### <a name="IlluminationLightSource/combat_use"></a> `combat_use?`

The item can also be used either as an improvised weapon or as an armor,
although this is not the primary use case of the item.

- **Type:** <a href="./_Item.md#CombatUse">CombatUse</a>

#### <a name="IlluminationLightSource/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="IlluminationLightSource/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#IlluminationLightSource/translations[key]">IlluminationLightSource/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="IlluminationLightSource/translations[key]"></a> `IlluminationLightSource/translations[key]`

- **Type:** <a href="./_Item.md#DefaultItemTranslation">DefaultItemTranslation</a>

---

### <a name="BurningTime"></a> `BurningTime`

- **Type:** Union
- **Cases:** <a href="#BurningTime'Unlimited">BurningTime'Unlimited</a> | <a href="#BurningTime'Limited">BurningTime'Limited</a>

---

### <a name="BurningTime'Unlimited"></a> `BurningTime'Unlimited`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BurningTime'Unlimited/tag">See details</a>
`unlimited` |  | <a href="#BurningTime'Unlimited/unlimited">See details</a>

#### <a name="BurningTime'Unlimited/tag"></a> `tag`

- **Constant:** `"Unlimited"`

#### <a name="BurningTime'Unlimited/unlimited"></a> `unlimited`

- **Type:** <a href="#BurningTime'Unlimited/unlimited">Object</a>

---

### <a name="BurningTime'Unlimited/unlimited"></a> `BurningTime'Unlimited/unlimited`

- **Type:** Empty Object

---

### <a name="BurningTime'Limited"></a> `BurningTime'Limited`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BurningTime'Limited/tag">See details</a>
`limited` |  | <a href="#BurningTime'Limited/limited">See details</a>

#### <a name="BurningTime'Limited/tag"></a> `tag`

- **Constant:** `"Limited"`

#### <a name="BurningTime'Limited/limited"></a> `limited`

- **Type:** <a href="#LimitedBurningTime">LimitedBurningTime</a>

---

### <a name="LimitedBurningTime"></a> `LimitedBurningTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) time value. | <a href="#LimitedBurningTime/value">See details</a>
`unit` | The time unit. | <a href="#LimitedBurningTime/unit">See details</a>

#### <a name="LimitedBurningTime/value"></a> `value`

The (unitless) time value.

- **Type:** Number
- **Exclusive Minimum:** `0`

#### <a name="LimitedBurningTime/unit"></a> `unit`

The time unit.

- **Type:** <a href="#LimitedBurningTimeUnit">LimitedBurningTimeUnit</a>

---

### <a name="LimitedBurningTimeUnit"></a> `LimitedBurningTimeUnit`

- **Possible values:** `"Hours"`

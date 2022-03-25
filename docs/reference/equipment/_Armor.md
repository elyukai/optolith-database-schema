# [TITLE MISSING]

## Definitions

### <a name="Protection"></a> `Protection`

The PRO value.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="Encumbrance"></a> `Encumbrance`

The ENC value.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="HasAdditionalPenalties"></a> `HasAdditionalPenalties`

Does the armor have additional penalties (MOV -1, INI -1)?

- **Type:** Boolean

---

### <a name="ArmorType"></a> Armor Type (`ArmorType`)

The armor type.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The armor type's identifier. | <a href="#ArmorType/id">See details</a>

#### <a name="ArmorType/id"></a> `id`

The armor type's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `10`

---

### <a name="HitZone"></a> Hit Zone (`HitZone`)

Specify if armor is only available for a specific hit zone.

- **Type:** Union
- **Cases:** <a href="#HitZone'Head">HitZone'Head</a> | <a href="#HitZone'Torso">HitZone'Torso</a> | <a href="#HitZone'Arms">HitZone'Arms</a> | <a href="#HitZone'Legs">HitZone'Legs</a>

---

### <a name="HitZone'Head"></a> `HitZone'Head`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#HitZone'Head/tag">See details</a>
`combination_possibilities?` | In some cases, multiple armors for the same hit zone can be combined. They're listed at the item that can be combined with others. | <a href="#HitZone'Head/combination_possibilities">See details</a>

#### <a name="HitZone'Head/tag"></a> `tag`

- **Constant:** `"Head"`

#### <a name="HitZone'Head/combination_possibilities"></a> `combination_possibilities?`

In some cases, multiple armors for the same hit zone can be combined.
They're listed at the item that can be combined with others.

- **Type:** <a href="#HitZone'Head/combination_possibilities">Object</a>

---

### <a name="HitZone'Head/combination_possibilities"></a> `HitZone'Head/combination_possibilities`

In some cases, multiple armors for the same hit zone can be combined.
They're listed at the item that can be combined with others.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`armors` | A list of armors that can be combined with this armor. | <a href="#HitZone'Head/combination_possibilities/armors">See details</a>
`protection?` | The PRO value that is added to the PRO value of the other armor instead of adding the normale PRO value. | <a href="#HitZone'Head/combination_possibilities/protection">See details</a>

#### <a name="HitZone'Head/combination_possibilities/armors"></a> `armors`

A list of armors that can be combined with this armor.

- **Type:** List
- **Items:** <a href="#HitZone'Head/combination_possibilities/armors[]">HitZone'Head/combination_possibilities/armors[]</a>
- **Minimum Items:** `1`

#### <a name="HitZone'Head/combination_possibilities/protection"></a> `protection?`

The PRO value that is added to the PRO value of the other armor instead
of adding the normale PRO value.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="HitZone'Head/combination_possibilities/armors[]"></a> `HitZone'Head/combination_possibilities/armors[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The armor's identifier. | <a href="#HitZone'Head/combination_possibilities/armors[]/id">See details</a>

#### <a name="HitZone'Head/combination_possibilities/armors[]/id"></a> `id`

The armor's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="HitZone'Torso"></a> `HitZone'Torso`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#HitZone'Torso/tag">See details</a>

#### <a name="HitZone'Torso/tag"></a> `tag`

- **Constant:** `"Torso"`

---

### <a name="HitZone'Arms"></a> `HitZone'Arms`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#HitZone'Arms/tag">See details</a>

#### <a name="HitZone'Arms/tag"></a> `tag`

- **Constant:** `"Arms"`

---

### <a name="HitZone'Legs"></a> `HitZone'Legs`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#HitZone'Legs/tag">See details</a>

#### <a name="HitZone'Legs/tag"></a> `tag`

- **Constant:** `"Legs"`

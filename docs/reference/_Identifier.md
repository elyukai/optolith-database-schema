# [TITLE MISSING]

## Definitions

### <a name="Identifier/Tagged/Attribute"></a> `Identifier/Tagged/Attribute`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Tagged/Attribute/tag">See details</a>
`value` | The attribute's numeric identifier. | <a href="#Identifier/Tagged/Attribute/value">See details</a>

#### <a name="Identifier/Tagged/Attribute/tag"></a> `tag`

- **Constant:** `"Attribute"`

#### <a name="Identifier/Tagged/Attribute/value"></a> `value`

The attribute's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `8`

---

### <a name="Identifier/Tagged/Skill"></a> `Identifier/Tagged/Skill`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Tagged/Skill/tag">See details</a>
`value` | The skill's numeric identifier. | <a href="#Identifier/Tagged/Skill/value">See details</a>

#### <a name="Identifier/Tagged/Skill/tag"></a> `tag`

- **Constant:** `"Skill"`

#### <a name="Identifier/Tagged/Skill/value"></a> `value`

The skill's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Identifier/Tagged/CloseCombatTechnique"></a> `Identifier/Tagged/CloseCombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Tagged/CloseCombatTechnique/tag">See details</a>
`value` | The close combat technique's numeric identifier. | <a href="#Identifier/Tagged/CloseCombatTechnique/value">See details</a>

#### <a name="Identifier/Tagged/CloseCombatTechnique/tag"></a> `tag`

- **Constant:** `"CloseCombatTechnique"`

#### <a name="Identifier/Tagged/CloseCombatTechnique/value"></a> `value`

The close combat technique's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Identifier/Tagged/RangedCombatTechnique"></a> `Identifier/Tagged/RangedCombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Tagged/RangedCombatTechnique/tag">See details</a>
`value` | The ranged combat technique's numeric identifier. | <a href="#Identifier/Tagged/RangedCombatTechnique/value">See details</a>

#### <a name="Identifier/Tagged/RangedCombatTechnique/tag"></a> `tag`

- **Constant:** `"RangedCombatTechnique"`

#### <a name="Identifier/Tagged/RangedCombatTechnique/value"></a> `value`

The ranged combat technique's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Identifier/Tagged/Spell"></a> `Identifier/Tagged/Spell`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Tagged/Spell/tag">See details</a>
`value` | The spell's numeric identifier. | <a href="#Identifier/Tagged/Spell/value">See details</a>

#### <a name="Identifier/Tagged/Spell/tag"></a> `tag`

- **Constant:** `"Spell"`

#### <a name="Identifier/Tagged/Spell/value"></a> `value`

The spell's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Identifier/Tagged/Ritual"></a> `Identifier/Tagged/Ritual`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Tagged/Ritual/tag">See details</a>
`value` | The ritual's numeric identifier. | <a href="#Identifier/Tagged/Ritual/value">See details</a>

#### <a name="Identifier/Tagged/Ritual/tag"></a> `tag`

- **Constant:** `"Ritual"`

#### <a name="Identifier/Tagged/Ritual/value"></a> `value`

The ritual's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Identifier/Tagged/LiturgicalChant"></a> `Identifier/Tagged/LiturgicalChant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Tagged/LiturgicalChant/tag">See details</a>
`value` | The liturgical chant's numeric identifier. | <a href="#Identifier/Tagged/LiturgicalChant/value">See details</a>

#### <a name="Identifier/Tagged/LiturgicalChant/tag"></a> `tag`

- **Constant:** `"LiturgicalChant"`

#### <a name="Identifier/Tagged/LiturgicalChant/value"></a> `value`

The liturgical chant's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Identifier/Tagged/Ceremony"></a> `Identifier/Tagged/Ceremony`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Tagged/Ceremony/tag">See details</a>
`value` | The ceremony's numeric identifier. | <a href="#Identifier/Tagged/Ceremony/value">See details</a>

#### <a name="Identifier/Tagged/Ceremony/tag"></a> `tag`

- **Constant:** `"Ceremony"`

#### <a name="Identifier/Tagged/Ceremony/value"></a> `value`

The ceremony's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Identifier/Group/Rated"></a> `Identifier/Group/Rated`

- **Type:** Union
- **Cases:** <a href="#Identifier/Group/Rated'Attribute">Identifier/Group/Rated'Attribute</a> | <a href="#Identifier/Group/Rated'Skill">Identifier/Group/Rated'Skill</a> | <a href="#Identifier/Group/Rated'CloseCombatTechnique">Identifier/Group/Rated'CloseCombatTechnique</a> | <a href="#Identifier/Group/Rated'RangedCombatTechnique">Identifier/Group/Rated'RangedCombatTechnique</a> | <a href="#Identifier/Group/Rated'Spell">Identifier/Group/Rated'Spell</a> | <a href="#Identifier/Group/Rated'Ritual">Identifier/Group/Rated'Ritual</a> | <a href="#Identifier/Group/Rated'LiturgicalChant">Identifier/Group/Rated'LiturgicalChant</a> | <a href="#Identifier/Group/Rated'Ceremony">Identifier/Group/Rated'Ceremony</a>

---

### <a name="Identifier/Group/Rated'Attribute"></a> `Identifier/Group/Rated'Attribute`

- **Type:** <a href="#Identifier/Tagged/Attribute">Identifier/Tagged/Attribute</a>

---

### <a name="Identifier/Group/Rated'Skill"></a> `Identifier/Group/Rated'Skill`

- **Type:** <a href="#Identifier/Tagged/Skill">Identifier/Tagged/Skill</a>

---

### <a name="Identifier/Group/Rated'CloseCombatTechnique"></a> `Identifier/Group/Rated'CloseCombatTechnique`

- **Type:** <a href="#Identifier/Tagged/CloseCombatTechnique">Identifier/Tagged/CloseCombatTechnique</a>

---

### <a name="Identifier/Group/Rated'RangedCombatTechnique"></a> `Identifier/Group/Rated'RangedCombatTechnique`

- **Type:** <a href="#Identifier/Tagged/RangedCombatTechnique">Identifier/Tagged/RangedCombatTechnique</a>

---

### <a name="Identifier/Group/Rated'Spell"></a> `Identifier/Group/Rated'Spell`

- **Type:** <a href="#Identifier/Tagged/Spell">Identifier/Tagged/Spell</a>

---

### <a name="Identifier/Group/Rated'Ritual"></a> `Identifier/Group/Rated'Ritual`

- **Type:** <a href="#Identifier/Tagged/Ritual">Identifier/Tagged/Ritual</a>

---

### <a name="Identifier/Group/Rated'LiturgicalChant"></a> `Identifier/Group/Rated'LiturgicalChant`

- **Type:** <a href="#Identifier/Tagged/LiturgicalChant">Identifier/Tagged/LiturgicalChant</a>

---

### <a name="Identifier/Group/Rated'Ceremony"></a> `Identifier/Group/Rated'Ceremony`

- **Type:** <a href="#Identifier/Tagged/Ceremony">Identifier/Tagged/Ceremony</a>

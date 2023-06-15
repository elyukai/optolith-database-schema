# [TITLE MISSING]

## Definitions

### <a name="Dice"></a> Dice (`Dice`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | Number of dice of the same type. Example: 2 in 2D6. | <a href="#Dice/number">See details</a>
`sides` | Number of sides on every die. Example: 6 in 2D6. | <a href="#Dice/sides">See details</a>

#### <a name="Dice/number"></a> `number`

Number of dice of the same type. Example: 2 in 2D6.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Dice/sides"></a> `sides`

Number of sides on every die. Example: 6 in 2D6.

- **Type:** <a href="#DieType">DieType</a>

---

### <a name="DieType"></a> `DieType`

Number of sides on every dice. Example: 6 in 2D6.

- **Type:** Union
- **Cases:** <a href="#DieType'0">DieType'0</a> | <a href="#DieType'1">DieType'1</a> | <a href="#DieType'2">DieType'2</a>

---

### <a name="DieType'0"></a> `DieType'0`

- **Constant:** `3`

---

### <a name="DieType'1"></a> `DieType'1`

- **Constant:** `6`

---

### <a name="DieType'2"></a> `DieType'2`

- **Constant:** `20`

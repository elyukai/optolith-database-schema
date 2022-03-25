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

- **Possible values:** `3`, `6`, `20`

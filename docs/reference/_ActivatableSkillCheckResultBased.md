# [TITLE MISSING]

## Definitions

### <a name="CheckResultValue"></a> `CheckResultValue`

Defines the derived (unitless) value.

- **Type:** Union
- **Cases:** <a href="#CheckResultValue'QualityLevels">CheckResultValue'QualityLevels</a> | <a href="#CheckResultValue'SkillPoints">CheckResultValue'SkillPoints</a>

---

### <a name="CheckResultValue'QualityLevels"></a> `CheckResultValue'QualityLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CheckResultValue'QualityLevels/tag">See details</a>

#### <a name="CheckResultValue'QualityLevels/tag"></a> `tag`

- **Constant:** `"QualityLevels"`

---

### <a name="CheckResultValue'SkillPoints"></a> `CheckResultValue'SkillPoints`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CheckResultValue'SkillPoints/tag">See details</a>

#### <a name="CheckResultValue'SkillPoints/tag"></a> `tag`

- **Constant:** `"SkillPoints"`

---

### <a name="CheckResultArithmetic"></a> `CheckResultArithmetic`

Defines how the the `value` is set off against the check result.

- **Type:** Union
- **Cases:** <a href="#CheckResultArithmetic'Multiply">CheckResultArithmetic'Multiply</a> | <a href="#CheckResultArithmetic'Divide">CheckResultArithmetic'Divide</a>

---

### <a name="CheckResultArithmetic'Multiply"></a> `CheckResultArithmetic'Multiply`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CheckResultArithmetic'Multiply/tag">See details</a>

#### <a name="CheckResultArithmetic'Multiply/tag"></a> `tag`

- **Constant:** `"Multiply"`

---

### <a name="CheckResultArithmetic'Divide"></a> `CheckResultArithmetic'Divide`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CheckResultArithmetic'Divide/tag">See details</a>

#### <a name="CheckResultArithmetic'Divide/tag"></a> `tag`

- **Constant:** `"Divide"`

---

### <a name="CheckResultBasedModifier"></a> `CheckResultBasedModifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`arithmetic` | The arithmetic how to apply the `value` to the `base`. | <a href="#CheckResultBasedModifier/arithmetic">See details</a>
`value` | The value that is applied to the `base` using the defined `arithmetic`. | <a href="#CheckResultBasedModifier/value">See details</a>

#### <a name="CheckResultBasedModifier/arithmetic"></a> `arithmetic`

The arithmetic how to apply the `value` to the `base`.

- **Type:** <a href="#CheckResultArithmetic">CheckResultArithmetic</a>

#### <a name="CheckResultBasedModifier/value"></a> `value`

The value that is applied to the `base` using the defined `arithmetic`.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="CheckResultBased"></a> `CheckResultBased`

Defines a parameter being based on a check result.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`base` | The base value that is derived from the check result. | <a href="#CheckResultBased/base">See details</a>
`modifier?` | If defined, it modifies the base value. | <a href="#CheckResultBased/modifier">See details</a>

#### <a name="CheckResultBased/base"></a> `base`

The base value that is derived from the check result.

- **Type:** <a href="#CheckResultValue">CheckResultValue</a>

#### <a name="CheckResultBased/modifier"></a> `modifier?`

If defined, it modifies the base value.

- **Type:** <a href="#CheckResultBasedModifier">CheckResultBasedModifier</a>

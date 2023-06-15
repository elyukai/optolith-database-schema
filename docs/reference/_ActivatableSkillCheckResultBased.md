# [TITLE MISSING]

## Definitions

### <a name="CheckResultValue"></a> `CheckResultValue`

Defines the derived (unitless) value.

- **Type:** Union
- **Cases:** <a href="#CheckResultValue'0">CheckResultValue'0</a> | <a href="#CheckResultValue'1">CheckResultValue'1</a>

---

### <a name="CheckResultValue'0"></a> `CheckResultValue'0`

- **Constant:** `"QualityLevels"`

---

### <a name="CheckResultValue'1"></a> `CheckResultValue'1`

- **Constant:** `"SkillPoints"`

---

### <a name="CheckResultArithmetic"></a> `CheckResultArithmetic`

Defines how the the `value` is set off against the check result.

- **Type:** Union
- **Cases:** <a href="#CheckResultArithmetic'0">CheckResultArithmetic'0</a> | <a href="#CheckResultArithmetic'1">CheckResultArithmetic'1</a>

---

### <a name="CheckResultArithmetic'0"></a> `CheckResultArithmetic'0`

- **Constant:** `"Multiply"`

---

### <a name="CheckResultArithmetic'1"></a> `CheckResultArithmetic'1`

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

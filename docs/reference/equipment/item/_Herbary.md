# [TITLE MISSING]

Herbary-related types.

## Definitions

### <a name="EffectType"></a> `EffectType`

Effect type categories of a plant or recipe.

- **Type:** Union
- **Cases:** <a href="#EffectType'0">EffectType'0</a> | <a href="#EffectType'1">EffectType'1</a> | <a href="#EffectType'2">EffectType'2</a> | <a href="#EffectType'3">EffectType'3</a> | <a href="#EffectType'4">EffectType'4</a> | <a href="#EffectType'5">EffectType'5</a> | <a href="#EffectType'6">EffectType'6</a>

---

### <a name="EffectType'0"></a> `EffectType'0`

- **Constant:** `"Healing"`

---

### <a name="EffectType'1"></a> `EffectType'1`

- **Constant:** `"Poison"`

---

### <a name="EffectType'2"></a> `EffectType'2`

- **Constant:** `"PhysicalEffect"`

---

### <a name="EffectType'3"></a> `EffectType'3`

- **Constant:** `"PsychicEffect"`

---

### <a name="EffectType'4"></a> `EffectType'4`

- **Constant:** `"Beneficial"`

---

### <a name="EffectType'5"></a> `EffectType'5`

- **Constant:** `"Defensive"`

---

### <a name="EffectType'6"></a> `EffectType'6`

- **Constant:** `"Supernatural"`

---

### <a name="LaboratoryLevel"></a> `LaboratoryLevel`

- **Type:** Union
- **Cases:** <a href="#LaboratoryLevel'0">LaboratoryLevel'0</a> | <a href="#LaboratoryLevel'1">LaboratoryLevel'1</a> | <a href="#LaboratoryLevel'2">LaboratoryLevel'2</a>

---

### <a name="LaboratoryLevel'0"></a> `LaboratoryLevel'0`

- **Constant:** `"ArchaicLaboratory"`

---

### <a name="LaboratoryLevel'1"></a> `LaboratoryLevel'1`

- **Constant:** `"WitchKitchen"`

---

### <a name="LaboratoryLevel'2"></a> `LaboratoryLevel'2`

- **Constant:** `"AlchemistsLaboratory"`

---

### <a name="RecipeTradeSecret"></a> `RecipeTradeSecret`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ap_value` | The AP value of the trade secret. | <a href="#RecipeTradeSecret/ap_value">See details</a>
`prerequisites?` | The prerequisites of the trade secret, if any. | <a href="#RecipeTradeSecret/prerequisites">See details</a>

#### <a name="RecipeTradeSecret/ap_value"></a> `ap_value`

The AP value of the trade secret.

- **Type:** Number

#### <a name="RecipeTradeSecret/prerequisites"></a> `prerequisites?`

The prerequisites of the trade secret, if any.

- **Type:** <a href="../../_Prerequisite.md#PlainGeneralPrerequisites">PlainGeneralPrerequisites</a>

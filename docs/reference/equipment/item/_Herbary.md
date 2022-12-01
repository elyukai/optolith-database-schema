# [TITLE MISSING]

Herbary-related types.

## Definitions

### <a name="EffectType"></a> `EffectType`

Effect type categories of a plant or recipe.

- **Possible values:** `"Healing"`, `"Poison"`, `"PhysicalEffect"`, `"PsychicEffect"`, `"Beneficial"`, `"Defensive"`, `"Supernatural"`

---

### <a name="LaboratoryLevel"></a> `LaboratoryLevel`

- **Possible values:** `"ArchaicLaboratory"`, `"WitchKitchen"`, `"AlchemistsLaboratory"`

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

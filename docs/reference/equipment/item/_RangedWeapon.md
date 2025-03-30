# [TITLE MISSING]

Auxiliary types for ranged weapons.

## Definitions

### <a name="RangedDamage"></a> `RangedDamage`

The damage of a ranged weapon. It consists of a random part using dice and an optional flat part ny default. Some ranged weapons may work different so that damage is either not applicable at all or it is outlined as *Special* and further defined in a description.

- **Type:** Union
- **Cases:** <a href="#RangedDamage'Default">RangedDamage'Default</a> | <a href="#RangedDamage'NotApplicable">RangedDamage'NotApplicable</a> | <a href="#RangedDamage'Special">RangedDamage'Special</a>

---

### <a name="RangedDamage'Default"></a> `RangedDamage'Default`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangedDamage'Default/tag">See details</a>
`default` |  | <a href="#RangedDamage'Default/default">See details</a>

#### <a name="RangedDamage'Default/tag"></a> `tag`

- **Constant:** `"Default"`

#### <a name="RangedDamage'Default/default"></a> `default`

- **Type:** <a href="#DefaultRangedDamage">DefaultRangedDamage</a>

---

### <a name="RangedDamage'NotApplicable"></a> `RangedDamage'NotApplicable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangedDamage'NotApplicable/tag">See details</a>
`not_applicable` |  | <a href="#RangedDamage'NotApplicable/not_applicable">See details</a>

#### <a name="RangedDamage'NotApplicable/tag"></a> `tag`

- **Constant:** `"NotApplicable"`

#### <a name="RangedDamage'NotApplicable/not_applicable"></a> `not_applicable`

- **Type:** <a href="#RangedDamage'NotApplicable/not_applicable">Object</a>

---

### <a name="RangedDamage'NotApplicable/not_applicable"></a> `RangedDamage'NotApplicable/not_applicable`

- **Type:** Empty Object

---

### <a name="RangedDamage'Special"></a> `RangedDamage'Special`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangedDamage'Special/tag">See details</a>
`special` |  | <a href="#RangedDamage'Special/special">See details</a>

#### <a name="RangedDamage'Special/tag"></a> `tag`

- **Constant:** `"Special"`

#### <a name="RangedDamage'Special/special"></a> `special`

- **Type:** <a href="#RangedDamage'Special/special">Object</a>

---

### <a name="RangedDamage'Special/special"></a> `RangedDamage'Special/special`

- **Type:** Empty Object

---

### <a name="DefaultRangedDamage"></a> `DefaultRangedDamage`

The damage of a weapon consists of a random part using dice and an optional flat part.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`dice` | How many dice of which type are rolled to get the damage. | <a href="#DefaultRangedDamage/dice">See details</a>
`flat?` | Flat damage, if any. It gets added to the result of the dice rolls. | <a href="#DefaultRangedDamage/flat">See details</a>

#### <a name="DefaultRangedDamage/dice"></a> `dice`

How many dice of which type are rolled to get the damage.

- **Type:** <a href="../../_Dice.md#Dice">Dice</a>

#### <a name="DefaultRangedDamage/flat"></a> `flat?`

Flat damage, if any. It gets added to the result of the dice rolls.

- **Type:** Integer
- **Default:** `0`

---

### <a name="RangedWeapon"></a> Ranged Weapon (`RangedWeapon`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`combat_technique` | The combat techniques and dependent values. | <a href="#RangedWeapon/combat_technique">See details</a>
`damage` | The damage of a weapon consists of a random part using dice and an optional flat part. | <a href="#RangedWeapon/damage">See details</a>
`reload_time` | One or multiple reload times. | <a href="#RangedWeapon/reload_time">See details</a>
`range` | The range brackets for the weapon: close, medium, far. Distances in m. | <a href="#RangedWeapon/range">See details</a>
`ammunition?` | The needed ammunition. | <a href="#RangedWeapon/ammunition">See details</a>
`length` | The length of the weapon in cm/halffingers. | <a href="#RangedWeapon/length">See details</a>
`is_improvised_weapon` | Is the weapon an improvised weapon? | <a href="#RangedWeapon/is_improvised_weapon">See details</a>

#### <a name="RangedWeapon/combat_technique"></a> `combat_technique`

The combat techniques and dependent values.

- **Type:** <a href="../../_SimpleReferences.md#RangedCombatTechniqueReference">RangedCombatTechniqueReference</a>

#### <a name="RangedWeapon/damage"></a> `damage`

The damage of a weapon consists of a random part using dice and an optional flat part.

- **Type:** <a href="#RangedDamage">RangedDamage</a>

#### <a name="RangedWeapon/reload_time"></a> `reload_time`

One or multiple reload times.

- **Type:** List
- **Items:** <a href="#RangedWeapon/reload_time[]">RangedWeapon/reload_time[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="RangedWeapon/range"></a> `range`

The range brackets for the weapon: close, medium, far. Distances in m.

- **Type:** <a href="#RangeBrackets">RangeBrackets</a>

#### <a name="RangedWeapon/ammunition"></a> `ammunition?`

The needed ammunition.

- **Type:** <a href="#AmmunitionReference">AmmunitionReference</a>

#### <a name="RangedWeapon/length"></a> `length`

The length of the weapon in cm/halffingers.

- **Type:** <a href="./_Weapon.md#Length">Length</a>

#### <a name="RangedWeapon/is_improvised_weapon"></a> `is_improvised_weapon`

Is the weapon an improvised weapon?

- **Type:** Boolean

---

### <a name="RangedWeapon/reload_time[]"></a> `RangedWeapon/reload_time[]`

- **Type:** <a href="#ReloadTime">ReloadTime</a>

---

### <a name="AmmunitionReference"></a> `AmmunitionReference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The item's identifier. | <a href="#AmmunitionReference/id">See details</a>

#### <a name="AmmunitionReference/id"></a> `id`

The item's identifier.

- **Type:** <a href="../../_Identifier.md#AmmunitionIdentifier">AmmunitionIdentifier</a>

---

### <a name="RangeBrackets"></a> `RangeBrackets`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`close` | The close range bracket for the weapon. Distance in m. | <a href="#RangeBrackets/close">See details</a>
`medium` | The medium range bracket for the weapon. Distance in m. | <a href="#RangeBrackets/medium">See details</a>
`far` | The far range bracket for the weapon. Distance in m. | <a href="#RangeBrackets/far">See details</a>

#### <a name="RangeBrackets/close"></a> `close`

The close range bracket for the weapon. Distance in m.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RangeBrackets/medium"></a> `medium`

The medium range bracket for the weapon. Distance in m.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RangeBrackets/far"></a> `far`

The far range bracket for the weapon. Distance in m.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ReloadTime"></a> `ReloadTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | A reload time value in actions. | <a href="#ReloadTime/value">See details</a>

#### <a name="ReloadTime/value"></a> `value`

A reload time value in actions.

- **Type:** Integer
- **Minimum:** `1`

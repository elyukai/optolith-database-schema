# [TITLE MISSING]

Auxiliary types for melee weapons.

## Definitions

### <a name="AttackModifier"></a> `AttackModifier`

The AT modifier.

- **Type:** Integer

---

### <a name="ParryModifier"></a> `ParryModifier`

The PA modifier.

- **Type:** Integer

---

### <a name="Reach"></a> `Reach`

The reach of the weapon.

- **Type:** <a href="../../_Identifier.md#ReachIdentifier">ReachIdentifier</a>

---

### <a name="MeleeDamage"></a> `MeleeDamage`

The damage of a weapon consists of a random part using dice and an optional
flat part.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`dice` | How many dice of which type are rolled to get the damage. | <a href="#MeleeDamage/dice">See details</a>
`flat?` | Flat damage, if any. It gets added to the result of the dice rolls. | <a href="#MeleeDamage/flat">See details</a>

#### <a name="MeleeDamage/dice"></a> `dice`

How many dice of which type are rolled to get the damage.

- **Type:** <a href="../../_Dice.md#Dice">Dice</a>

#### <a name="MeleeDamage/flat"></a> `flat?`

Flat damage, if any. It gets added to the result of the dice rolls.

- **Type:** Integer
- **Default:** `0`

---

### <a name="ShieldSize"></a> `ShieldSize`

The shield size and potential size-depending values.

- **Type:** Union
- **Cases:** <a href="#ShieldSize'Small">ShieldSize'Small</a> | <a href="#ShieldSize'Medium">ShieldSize'Medium</a> | <a href="#ShieldSize'Large">ShieldSize'Large</a>

---

### <a name="ShieldSize'Small"></a> `ShieldSize'Small`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ShieldSize'Small/tag">See details</a>
`small` |  | <a href="#ShieldSize'Small/small">See details</a>

#### <a name="ShieldSize'Small/tag"></a> `tag`

- **Constant:** `"Small"`

#### <a name="ShieldSize'Small/small"></a> `small`

- **Type:** <a href="#ShieldSize'Small/small">Object</a>

---

### <a name="ShieldSize'Small/small"></a> `ShieldSize'Small/small`

- **Type:** Empty Object

---

### <a name="ShieldSize'Medium"></a> `ShieldSize'Medium`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ShieldSize'Medium/tag">See details</a>
`medium` |  | <a href="#ShieldSize'Medium/medium">See details</a>

#### <a name="ShieldSize'Medium/tag"></a> `tag`

- **Constant:** `"Medium"`

#### <a name="ShieldSize'Medium/medium"></a> `medium`

- **Type:** <a href="#ShieldSize'Medium/medium">Object</a>

---

### <a name="ShieldSize'Medium/medium"></a> `ShieldSize'Medium/medium`

- **Type:** Empty Object

---

### <a name="ShieldSize'Large"></a> `ShieldSize'Large`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ShieldSize'Large/tag">See details</a>
`large?` |  | <a href="#ShieldSize'Large/large">See details</a>

#### <a name="ShieldSize'Large/tag"></a> `tag`

- **Constant:** `"Large"`

#### <a name="ShieldSize'Large/large"></a> `large?`

- **Type:** <a href="#LargeShieldSize">LargeShieldSize</a>

---

### <a name="LargeShieldSize"></a> `LargeShieldSize`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`attack_penalty` | The attack penalty from the shield. | <a href="#LargeShieldSize/attack_penalty">See details</a>

#### <a name="LargeShieldSize/attack_penalty"></a> `attack_penalty`

The attack penalty from the shield.

- **Type:** Integer
- **Default:** `1`

---

### <a name="MeleeWeapon"></a> Melee Weapon (`MeleeWeapon`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`combat_technique` | The combat techniques and dependent values. | <a href="#MeleeWeapon/combat_technique">See details</a>
`damage` | The damage of a weapon consists of a random part using dice and an optional flat part. | <a href="#MeleeWeapon/damage">See details</a>
`damage_threshold?` | The primary attribute damage and threshold value. | <a href="#MeleeWeapon/damage_threshold">See details</a>
`at` | The AT modifier. | <a href="#MeleeWeapon/at">See details</a>
`pa?` | The PA modifier. | <a href="#MeleeWeapon/pa">See details</a>
`reach?` | The reach of the weapon. | <a href="#MeleeWeapon/reach">See details</a>
`length?` | The length of the weapon in cm/halffingers. | <a href="#MeleeWeapon/length">See details</a>
`size?` | The shield size and potential size-depending values. | <a href="#MeleeWeapon/size">See details</a>
`is_parrying_weapon` | Is the weapon a parrying weapon? | <a href="#MeleeWeapon/is_parrying_weapon">See details</a>
`is_two_handed_weapon` | Is the weapon a two-handed weapon? | <a href="#MeleeWeapon/is_two_handed_weapon">See details</a>
`is_improvised_weapon` | Is the weapon an improvised weapon? | <a href="#MeleeWeapon/is_improvised_weapon">See details</a>

#### <a name="MeleeWeapon/combat_technique"></a> `combat_technique`

The combat techniques and dependent values.

- **Type:** <a href="../../_SimpleReferences.md#CloseCombatTechniqueReference">CloseCombatTechniqueReference</a>

#### <a name="MeleeWeapon/damage"></a> `damage`

The damage of a weapon consists of a random part using dice and an optional
flat part.

- **Type:** <a href="#MeleeDamage">MeleeDamage</a>

#### <a name="MeleeWeapon/damage_threshold"></a> `damage_threshold?`

The primary attribute damage and threshold value.

- **Type:** <a href="./_Weapon.md#PrimaryAttributeDamageThreshold">PrimaryAttributeDamageThreshold</a>

#### <a name="MeleeWeapon/at"></a> `at`

The AT modifier.

- **Type:** <a href="#AttackModifier">AttackModifier</a>

#### <a name="MeleeWeapon/pa"></a> `pa?`

The PA modifier.

- **Type:** <a href="#ParryModifier">ParryModifier</a>

#### <a name="MeleeWeapon/reach"></a> `reach?`

The reach of the weapon.

- **Type:** <a href="#Reach">Reach</a>

#### <a name="MeleeWeapon/length"></a> `length?`

The length of the weapon in cm/halffingers.

- **Type:** <a href="./_Weapon.md#Length">Length</a>

#### <a name="MeleeWeapon/size"></a> `size?`

The shield size and potential size-depending values.

- **Type:** <a href="#ShieldSize">ShieldSize</a>

#### <a name="MeleeWeapon/is_parrying_weapon"></a> `is_parrying_weapon`

Is the weapon a parrying weapon?

- **Type:** Boolean

#### <a name="MeleeWeapon/is_two_handed_weapon"></a> `is_two_handed_weapon`

Is the weapon a two-handed weapon?

- **Type:** Boolean

#### <a name="MeleeWeapon/is_improvised_weapon"></a> `is_improvised_weapon`

Is the weapon an improvised weapon?

- **Type:** Boolean

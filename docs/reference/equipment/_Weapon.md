# [TITLE MISSING]

## Definitions

### <a name="StructurePoints"></a> Structure Points (`StructurePoints`)

The structure points of the item. Use an array if the item consists of
multiple components that have individual structure points.

- **Type:** List
- **Items:** <a href="#StructurePoints[]">StructurePoints[]</a>
- **Minimum Items:** `1`

---

### <a name="StructurePoints[]"></a> `StructurePoints[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`points` | The structure points. | <a href="#StructurePoints[]/points">See details</a>

#### <a name="StructurePoints[]/points"></a> `points`

The structure points.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SanctifiedBy"></a> `SanctifiedBy`

If the weapon is sanctified by a god and thus restricted to it's Blessed
Ones.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The tradition's identifier. | <a href="#SanctifiedBy/id">See details</a>

#### <a name="SanctifiedBy/id"></a> `id`

The tradition's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="RestrictedToCultures"></a> `RestrictedToCultures`

Define if during character creation this weapon can only be bought by
characters of a specific race or culture.

- **Type:** Union
- **Cases:** <a href="#RestrictedToCultures'CulturesOfRace">RestrictedToCultures'CulturesOfRace</a> | <a href="#RestrictedToCultures'Culture">RestrictedToCultures'Culture</a> | <a href="#RestrictedToCultures'Cultures">RestrictedToCultures'Cultures</a>

---

### <a name="RestrictedToCultures'CulturesOfRace"></a> `RestrictedToCultures'CulturesOfRace`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedToCultures'CulturesOfRace/tag">See details</a>
`id` | The race's identifier. | <a href="#RestrictedToCultures'CulturesOfRace/id">See details</a>

#### <a name="RestrictedToCultures'CulturesOfRace/tag"></a> `tag`

- **Constant:** `"CulturesOfRace"`

#### <a name="RestrictedToCultures'CulturesOfRace/id"></a> `id`

The race's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="RestrictedToCultures'Culture"></a> `RestrictedToCultures'Culture`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedToCultures'Culture/tag">See details</a>
`id` | The culture's identifier. | <a href="#RestrictedToCultures'Culture/id">See details</a>

#### <a name="RestrictedToCultures'Culture/tag"></a> `tag`

- **Constant:** `"Culture"`

#### <a name="RestrictedToCultures'Culture/id"></a> `id`

The culture's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="RestrictedToCultures'Cultures"></a> `RestrictedToCultures'Cultures`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedToCultures'Cultures/tag">See details</a>
`list` | The cultures' identifiers. | <a href="#RestrictedToCultures'Cultures/list">See details</a>

#### <a name="RestrictedToCultures'Cultures/tag"></a> `tag`

- **Constant:** `"Cultures"`

#### <a name="RestrictedToCultures'Cultures/list"></a> `list`

The cultures' identifiers.

- **Type:** <a href="#RestrictedToCultures'Cultures/list">Object</a>

---

### <a name="RestrictedToCultures'Cultures/list"></a> `RestrictedToCultures'Cultures/list`

The cultures' identifiers.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The culture's identifier. | <a href="#RestrictedToCultures'Cultures/list/id">See details</a>

#### <a name="RestrictedToCultures'Cultures/list/id"></a> `id`

The culture's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PrimaryAttributeDamageThreshold"></a> `PrimaryAttributeDamageThreshold`

The primary attribute damage and threshold value. You can either use an
integer, an object or a pair. Use an integer if you just have to define a
single threshold value for the default primary attribute of the combat
technique. Use an object if you need to define the value only or if you need
to define the value as well as a single different primary attribute than
which the combat technique uses. Use the pair if you need to set the primary
attributes to AGI and STR (the combat technique has AGI but this item has
AGI/STR) and/or if you need to set different thresholds for AGI and STR (e.g.
AGI 14/STR 15). If the same values are in the pair, they will be merged (AGI
14/STR 14 will be AGI/STR 14).

- **Type:** Union
- **Cases:** <a href="#PrimaryAttributeDamageThreshold'Single">PrimaryAttributeDamageThreshold'Single</a> | <a href="#PrimaryAttributeDamageThreshold'Differing">PrimaryAttributeDamageThreshold'Differing</a>

---

### <a name="PrimaryAttributeDamageThreshold'Single"></a> `PrimaryAttributeDamageThreshold'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrimaryAttributeDamageThreshold'Single/tag">See details</a>
`attribute?` | The primary attribute(s) if different from the default primary attribute(s) of the combat technique. | <a href="#PrimaryAttributeDamageThreshold'Single/attribute">See details</a>
`threshold` | The attribute value representing the damage threshold. | <a href="#PrimaryAttributeDamageThreshold'Single/threshold">See details</a>

#### <a name="PrimaryAttributeDamageThreshold'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="PrimaryAttributeDamageThreshold'Single/attribute"></a> `attribute?`

The primary attribute(s) if different from the default primary
attribute(s) of the combat technique.

- **Type:** List
- **Items:** <a href="#PrimaryAttributeDamageThreshold'Single/attribute[]">PrimaryAttributeDamageThreshold'Single/attribute[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="PrimaryAttributeDamageThreshold'Single/threshold"></a> `threshold`

The attribute value representing the damage threshold.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PrimaryAttributeDamageThreshold'Single/attribute[]"></a> `PrimaryAttributeDamageThreshold'Single/attribute[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The attribute's identifier. | <a href="#PrimaryAttributeDamageThreshold'Single/attribute[]/id">See details</a>

#### <a name="PrimaryAttributeDamageThreshold'Single/attribute[]/id"></a> `id`

The attribute's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PrimaryAttributeDamageThreshold'Differing"></a> `PrimaryAttributeDamageThreshold'Differing`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrimaryAttributeDamageThreshold'Differing/tag">See details</a>
`list` | A list of primary attributes, each featuring a different threshold. | <a href="#PrimaryAttributeDamageThreshold'Differing/list">See details</a>

#### <a name="PrimaryAttributeDamageThreshold'Differing/tag"></a> `tag`

- **Constant:** `"Differing"`

#### <a name="PrimaryAttributeDamageThreshold'Differing/list"></a> `list`

A list of primary attributes, each featuring a different threshold.

- **Type:** List
- **Items:** <a href="#PrimaryAttributeDamageThreshold'Differing/list[]">PrimaryAttributeDamageThreshold'Differing/list[]</a>
- **Minimum Items:** `2`
- **Unique Items:** Yes

---

### <a name="PrimaryAttributeDamageThreshold'Differing/list[]"></a> `PrimaryAttributeDamageThreshold'Differing/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`attribute` | The primary attribute. | <a href="#PrimaryAttributeDamageThreshold'Differing/list[]/attribute">See details</a>
`threshold` | The attribute value representing the damage threshold. | <a href="#PrimaryAttributeDamageThreshold'Differing/list[]/threshold">See details</a>

#### <a name="PrimaryAttributeDamageThreshold'Differing/list[]/attribute"></a> `attribute`

The primary attribute.

- **Type:** <a href="#PrimaryAttributeDamageThreshold'Differing/list[]/attribute">Object</a>

#### <a name="PrimaryAttributeDamageThreshold'Differing/list[]/threshold"></a> `threshold`

The attribute value representing the damage threshold.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PrimaryAttributeDamageThreshold'Differing/list[]/attribute"></a> `PrimaryAttributeDamageThreshold'Differing/list[]/attribute`

The primary attribute.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The attribute's identifier. | <a href="#PrimaryAttributeDamageThreshold'Differing/list[]/attribute/id">See details</a>

#### <a name="PrimaryAttributeDamageThreshold'Differing/list[]/attribute/id"></a> `id`

The attribute's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="DamageMelee"></a> `DamageMelee`

The damage of a weapon consists of a random part using dice and an optional
flat part.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`dice` | How many dice of which type are rolled to get the damage. | <a href="#DamageMelee/dice">See details</a>
`flat?` | Flat damage, if any. It gets added to the result of the dice rolls. | <a href="#DamageMelee/flat">See details</a>

#### <a name="DamageMelee/dice"></a> `dice`

How many dice of which type are rolled to get the damage.

- **Type:** <a href="#Dice">Dice</a>

#### <a name="DamageMelee/flat"></a> `flat?`

Flat damage, if any. It gets added to the result of the dice rolls.

- **Type:** Integer

---

### <a name="DamageRanged"></a> `DamageRanged`

The damage of a ranged weapon. It consists of a random part using dice and an
optional flat part ny default. Some ranged weapons may work different so that
damage is either not applicable at all or it is outlined as *Special* and
further defined in a description.

- **Type:** Union
- **Cases:** <a href="#DamageRanged'Default">DamageRanged'Default</a> | <a href="#DamageRanged'NotApplicable">DamageRanged'NotApplicable</a> | <a href="#DamageRanged'Special">DamageRanged'Special</a>

---

### <a name="DamageRanged'Default"></a> `DamageRanged'Default`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DamageRanged'Default/tag">See details</a>
`dice` | How many dice of which type are rolled to get the damage. | <a href="#DamageRanged'Default/dice">See details</a>
`flat?` | Flat damage, if any. It gets added to the result of the dice rolls. | <a href="#DamageRanged'Default/flat">See details</a>

#### <a name="DamageRanged'Default/tag"></a> `tag`

- **Constant:** `"Default"`

#### <a name="DamageRanged'Default/dice"></a> `dice`

How many dice of which type are rolled to get the damage.

- **Type:** <a href="#Dice">Dice</a>

#### <a name="DamageRanged'Default/flat"></a> `flat?`

Flat damage, if any. It gets added to the result of the dice rolls.

- **Type:** Integer

---

### <a name="DamageRanged'NotApplicable"></a> `DamageRanged'NotApplicable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DamageRanged'NotApplicable/tag">See details</a>

#### <a name="DamageRanged'NotApplicable/tag"></a> `tag`

- **Constant:** `"NotApplicable"`

---

### <a name="DamageRanged'Special"></a> `DamageRanged'Special`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DamageRanged'Special/tag">See details</a>

#### <a name="DamageRanged'Special/tag"></a> `tag`

- **Constant:** `"Special"`

---

### <a name="Attack"></a> `Attack`

The AT modifier.

- **Type:** Integer

---

### <a name="Parry"></a> `Parry`

The PA modifier.

- **Type:** Integer

---

### <a name="Reach"></a> `Reach`

The reach of the weapon.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `4`

---

### <a name="Length"></a> `Length`

The length of the weapon in cm/halffingers.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ShieldSize"></a> `ShieldSize`

- **Type:** Union
- **Cases:** <a href="#ShieldSize'Large">ShieldSize'Large</a> | <a href="#ShieldSize'Medium">ShieldSize'Medium</a> | <a href="#ShieldSize'Small">ShieldSize'Small</a>

---

### <a name="ShieldSize'Large"></a> `ShieldSize'Large`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ShieldSize'Large/tag">See details</a>
`attack_penalty?` | The attack penalty from the shield. | <a href="#ShieldSize'Large/attack_penalty">See details</a>

#### <a name="ShieldSize'Large/tag"></a> `tag`

- **Constant:** `"Large"`

#### <a name="ShieldSize'Large/attack_penalty"></a> `attack_penalty?`

The attack penalty from the shield.

- **Type:** Integer

---

### <a name="ShieldSize'Medium"></a> `ShieldSize'Medium`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ShieldSize'Medium/tag">See details</a>

#### <a name="ShieldSize'Medium/tag"></a> `tag`

- **Constant:** `"Medium"`

---

### <a name="ShieldSize'Small"></a> `ShieldSize'Small`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ShieldSize'Small/tag">See details</a>

#### <a name="ShieldSize'Small/tag"></a> `tag`

- **Constant:** `"Small"`

---

### <a name="MeleeWeapon"></a> Melee Weapon (`MeleeWeapon`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MeleeWeapon/tag">See details</a>
`combat_technique` | The combat techniques and dependent values. | <a href="#MeleeWeapon/combat_technique">See details</a>
`damage` |  | <a href="#MeleeWeapon/damage">See details</a>
`is_parrying_weapon` | Is the weapon a parrying weapon? | <a href="#MeleeWeapon/is_parrying_weapon">See details</a>
`is_two_handed_weapon` | Is the weapon a two-handed weapon? | <a href="#MeleeWeapon/is_two_handed_weapon">See details</a>

#### <a name="MeleeWeapon/tag"></a> `tag`

- **Constant:** `"Melee"`

#### <a name="MeleeWeapon/combat_technique"></a> `combat_technique`

The combat techniques and dependent values.

- **Type:** Union
- **Cases:** <a href="#MeleeWeapon/combat_technique'ChainWeapons">MeleeWeapon/combat_technique'ChainWeapons</a> | <a href="#MeleeWeapon/combat_technique'Whips">MeleeWeapon/combat_technique'Whips</a> | <a href="#MeleeWeapon/combat_technique'Lances">MeleeWeapon/combat_technique'Lances</a> | <a href="#MeleeWeapon/combat_technique'Shields">MeleeWeapon/combat_technique'Shields</a> | <a href="#MeleeWeapon/combat_technique'Fans">MeleeWeapon/combat_technique'Fans</a> | <a href="#MeleeWeapon/combat_technique'Default">MeleeWeapon/combat_technique'Default</a>

#### <a name="MeleeWeapon/damage"></a> `damage`

- **Type:** <a href="#DamageMelee">DamageMelee</a>

#### <a name="MeleeWeapon/is_parrying_weapon"></a> `is_parrying_weapon`

Is the weapon a parrying weapon?

- **Type:** Boolean

#### <a name="MeleeWeapon/is_two_handed_weapon"></a> `is_two_handed_weapon`

Is the weapon a two-handed weapon?

- **Type:** Boolean

---

### <a name="MeleeWeapon/combat_technique'ChainWeapons"></a> `MeleeWeapon/combat_technique'ChainWeapons`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MeleeWeapon/combat_technique'ChainWeapons/tag">See details</a>
`damage_threshold` |  | <a href="#MeleeWeapon/combat_technique'ChainWeapons/damage_threshold">See details</a>
`at` |  | <a href="#MeleeWeapon/combat_technique'ChainWeapons/at">See details</a>
`reach` |  | <a href="#MeleeWeapon/combat_technique'ChainWeapons/reach">See details</a>
`length` |  | <a href="#MeleeWeapon/combat_technique'ChainWeapons/length">See details</a>

#### <a name="MeleeWeapon/combat_technique'ChainWeapons/tag"></a> `tag`

- **Constant:** `"ChainWeapons"`

#### <a name="MeleeWeapon/combat_technique'ChainWeapons/damage_threshold"></a> `damage_threshold`

- **Type:** <a href="#PrimaryAttributeDamageThreshold">PrimaryAttributeDamageThreshold</a>

#### <a name="MeleeWeapon/combat_technique'ChainWeapons/at"></a> `at`

- **Type:** <a href="#Attack">Attack</a>

#### <a name="MeleeWeapon/combat_technique'ChainWeapons/reach"></a> `reach`

- **Type:** <a href="#Reach">Reach</a>

#### <a name="MeleeWeapon/combat_technique'ChainWeapons/length"></a> `length`

- **Type:** <a href="#Length">Length</a>

---

### <a name="MeleeWeapon/combat_technique'Whips"></a> `MeleeWeapon/combat_technique'Whips`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MeleeWeapon/combat_technique'Whips/tag">See details</a>
`damage_threshold` |  | <a href="#MeleeWeapon/combat_technique'Whips/damage_threshold">See details</a>
`at` |  | <a href="#MeleeWeapon/combat_technique'Whips/at">See details</a>
`reach` |  | <a href="#MeleeWeapon/combat_technique'Whips/reach">See details</a>
`length` |  | <a href="#MeleeWeapon/combat_technique'Whips/length">See details</a>

#### <a name="MeleeWeapon/combat_technique'Whips/tag"></a> `tag`

- **Constant:** `"Whips"`

#### <a name="MeleeWeapon/combat_technique'Whips/damage_threshold"></a> `damage_threshold`

- **Type:** <a href="#PrimaryAttributeDamageThreshold">PrimaryAttributeDamageThreshold</a>

#### <a name="MeleeWeapon/combat_technique'Whips/at"></a> `at`

- **Type:** <a href="#Attack">Attack</a>

#### <a name="MeleeWeapon/combat_technique'Whips/reach"></a> `reach`

- **Type:** <a href="#Reach">Reach</a>

#### <a name="MeleeWeapon/combat_technique'Whips/length"></a> `length`

- **Type:** <a href="#Length">Length</a>

---

### <a name="MeleeWeapon/combat_technique'Lances"></a> `MeleeWeapon/combat_technique'Lances`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MeleeWeapon/combat_technique'Lances/tag">See details</a>
`at` |  | <a href="#MeleeWeapon/combat_technique'Lances/at">See details</a>
`length` |  | <a href="#MeleeWeapon/combat_technique'Lances/length">See details</a>

#### <a name="MeleeWeapon/combat_technique'Lances/tag"></a> `tag`

- **Constant:** `"Lances"`

#### <a name="MeleeWeapon/combat_technique'Lances/at"></a> `at`

- **Type:** <a href="#Attack">Attack</a>

#### <a name="MeleeWeapon/combat_technique'Lances/length"></a> `length`

- **Type:** <a href="#Length">Length</a>

---

### <a name="MeleeWeapon/combat_technique'Shields"></a> `MeleeWeapon/combat_technique'Shields`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MeleeWeapon/combat_technique'Shields/tag">See details</a>
`size` |  | <a href="#MeleeWeapon/combat_technique'Shields/size">See details</a>
`damage_threshold` |  | <a href="#MeleeWeapon/combat_technique'Shields/damage_threshold">See details</a>
`at` |  | <a href="#MeleeWeapon/combat_technique'Shields/at">See details</a>
`pa` |  | <a href="#MeleeWeapon/combat_technique'Shields/pa">See details</a>
`reach` |  | <a href="#MeleeWeapon/combat_technique'Shields/reach">See details</a>

#### <a name="MeleeWeapon/combat_technique'Shields/tag"></a> `tag`

- **Constant:** `"Shields"`

#### <a name="MeleeWeapon/combat_technique'Shields/size"></a> `size`

- **Type:** <a href="#ShieldSize">ShieldSize</a>

#### <a name="MeleeWeapon/combat_technique'Shields/damage_threshold"></a> `damage_threshold`

- **Type:** <a href="#PrimaryAttributeDamageThreshold">PrimaryAttributeDamageThreshold</a>

#### <a name="MeleeWeapon/combat_technique'Shields/at"></a> `at`

- **Type:** <a href="#Attack">Attack</a>

#### <a name="MeleeWeapon/combat_technique'Shields/pa"></a> `pa`

- **Type:** <a href="#Parry">Parry</a>

#### <a name="MeleeWeapon/combat_technique'Shields/reach"></a> `reach`

- **Type:** <a href="#Reach">Reach</a>

---

### <a name="MeleeWeapon/combat_technique'Fans"></a> `MeleeWeapon/combat_technique'Fans`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MeleeWeapon/combat_technique'Fans/tag">See details</a>
`size` |  | <a href="#MeleeWeapon/combat_technique'Fans/size">See details</a>
`damage_threshold` |  | <a href="#MeleeWeapon/combat_technique'Fans/damage_threshold">See details</a>
`at` |  | <a href="#MeleeWeapon/combat_technique'Fans/at">See details</a>
`pa` |  | <a href="#MeleeWeapon/combat_technique'Fans/pa">See details</a>
`reach` |  | <a href="#MeleeWeapon/combat_technique'Fans/reach">See details</a>
`length` |  | <a href="#MeleeWeapon/combat_technique'Fans/length">See details</a>

#### <a name="MeleeWeapon/combat_technique'Fans/tag"></a> `tag`

- **Constant:** `"Fans"`

#### <a name="MeleeWeapon/combat_technique'Fans/size"></a> `size`

- **Type:** <a href="#ShieldSize">ShieldSize</a>

#### <a name="MeleeWeapon/combat_technique'Fans/damage_threshold"></a> `damage_threshold`

- **Type:** <a href="#PrimaryAttributeDamageThreshold">PrimaryAttributeDamageThreshold</a>

#### <a name="MeleeWeapon/combat_technique'Fans/at"></a> `at`

- **Type:** <a href="#Attack">Attack</a>

#### <a name="MeleeWeapon/combat_technique'Fans/pa"></a> `pa`

- **Type:** <a href="#Parry">Parry</a>

#### <a name="MeleeWeapon/combat_technique'Fans/reach"></a> `reach`

- **Type:** <a href="#Reach">Reach</a>

#### <a name="MeleeWeapon/combat_technique'Fans/length"></a> `length`

- **Type:** <a href="#Length">Length</a>

---

### <a name="MeleeWeapon/combat_technique'Default"></a> `MeleeWeapon/combat_technique'Default`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MeleeWeapon/combat_technique'Default/tag">See details</a>
`id` | The close combat technique's identifier. | <a href="#MeleeWeapon/combat_technique'Default/id">See details</a>
`damage_threshold` |  | <a href="#MeleeWeapon/combat_technique'Default/damage_threshold">See details</a>
`at` |  | <a href="#MeleeWeapon/combat_technique'Default/at">See details</a>
`pa` |  | <a href="#MeleeWeapon/combat_technique'Default/pa">See details</a>
`reach` |  | <a href="#MeleeWeapon/combat_technique'Default/reach">See details</a>
`length` |  | <a href="#MeleeWeapon/combat_technique'Default/length">See details</a>

#### <a name="MeleeWeapon/combat_technique'Default/tag"></a> `tag`

- **Constant:** `"Default"`

#### <a name="MeleeWeapon/combat_technique'Default/id"></a> `id`

The close combat technique's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MeleeWeapon/combat_technique'Default/damage_threshold"></a> `damage_threshold`

- **Type:** <a href="#PrimaryAttributeDamageThreshold">PrimaryAttributeDamageThreshold</a>

#### <a name="MeleeWeapon/combat_technique'Default/at"></a> `at`

- **Type:** <a href="#Attack">Attack</a>

#### <a name="MeleeWeapon/combat_technique'Default/pa"></a> `pa`

- **Type:** <a href="#Parry">Parry</a>

#### <a name="MeleeWeapon/combat_technique'Default/reach"></a> `reach`

- **Type:** <a href="#Reach">Reach</a>

#### <a name="MeleeWeapon/combat_technique'Default/length"></a> `length`

- **Type:** <a href="#Length">Length</a>

---

### <a name="RangedWeapon"></a> Ranged Weapon (`RangedWeapon`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangedWeapon/tag">See details</a>
`combat_technique` | The combat techniques and dependent values. | <a href="#RangedWeapon/combat_technique">See details</a>
`damage` |  | <a href="#RangedWeapon/damage">See details</a>
`range` | The range brackets for the weapon: close, medium, far. Distances in m. | <a href="#RangedWeapon/range">See details</a>
`reload_time` | One or multiple reload times. | <a href="#RangedWeapon/reload_time">See details</a>
`length` |  | <a href="#RangedWeapon/length">See details</a>

#### <a name="RangedWeapon/tag"></a> `tag`

- **Constant:** `"Ranged"`

#### <a name="RangedWeapon/combat_technique"></a> `combat_technique`

The combat techniques and dependent values.

- **Type:** Union
- **Cases:** <a href="#RangedWeapon/combat_technique'ThrownWeapons">RangedWeapon/combat_technique'ThrownWeapons</a> | <a href="#RangedWeapon/combat_technique'Default">RangedWeapon/combat_technique'Default</a>

#### <a name="RangedWeapon/damage"></a> `damage`

- **Type:** <a href="#DamageRanged">DamageRanged</a>

#### <a name="RangedWeapon/range"></a> `range`

The range brackets for the weapon: close, medium, far. Distances in m.

- **Type:** <a href="#RangedWeapon/range">Object</a>

#### <a name="RangedWeapon/reload_time"></a> `reload_time`

One or multiple reload times.

- **Type:** List
- **Items:** <a href="#RangedWeapon/reload_time[]">RangedWeapon/reload_time[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="RangedWeapon/length"></a> `length`

- **Type:** <a href="#Length">Length</a>

---

### <a name="RangedWeapon/combat_technique'ThrownWeapons"></a> `RangedWeapon/combat_technique'ThrownWeapons`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangedWeapon/combat_technique'ThrownWeapons/tag">See details</a>

#### <a name="RangedWeapon/combat_technique'ThrownWeapons/tag"></a> `tag`

- **Constant:** `"ThrownWeapons"`

---

### <a name="RangedWeapon/combat_technique'Default"></a> `RangedWeapon/combat_technique'Default`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangedWeapon/combat_technique'Default/tag">See details</a>
`ammunition` | The needed ammunition. | <a href="#RangedWeapon/combat_technique'Default/ammunition">See details</a>

#### <a name="RangedWeapon/combat_technique'Default/tag"></a> `tag`

- **Constant:** `"Default"`

#### <a name="RangedWeapon/combat_technique'Default/ammunition"></a> `ammunition`

The needed ammunition.

- **Type:** <a href="#RangedWeapon/combat_technique'Default/ammunition">Object</a>

---

### <a name="RangedWeapon/combat_technique'Default/ammunition"></a> `RangedWeapon/combat_technique'Default/ammunition`

The needed ammunition.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The item's identifier. | <a href="#RangedWeapon/combat_technique'Default/ammunition/id">See details</a>

#### <a name="RangedWeapon/combat_technique'Default/ammunition/id"></a> `id`

The item's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="RangedWeapon/range"></a> `RangedWeapon/range`

The range brackets for the weapon: close, medium, far. Distances in m.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`close` | The close range bracket for the weapon. Distance in m. | <a href="#RangedWeapon/range/close">See details</a>
`medium` | The medium range bracket for the weapon. Distance in m. | <a href="#RangedWeapon/range/medium">See details</a>
`far` | The far range bracket for the weapon. Distance in m. | <a href="#RangedWeapon/range/far">See details</a>

#### <a name="RangedWeapon/range/close"></a> `close`

The close range bracket for the weapon. Distance in m.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RangedWeapon/range/medium"></a> `medium`

The medium range bracket for the weapon. Distance in m.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RangedWeapon/range/far"></a> `far`

The far range bracket for the weapon. Distance in m.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="RangedWeapon/reload_time[]"></a> `RangedWeapon/reload_time[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | A reload time value in actions. | <a href="#RangedWeapon/reload_time[]/value">See details</a>

#### <a name="RangedWeapon/reload_time[]/value"></a> `value`

A reload time value in actions.

- **Type:** Integer
- **Minimum:** `1`

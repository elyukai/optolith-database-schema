# Item

## Definitions

### <a name="Item"></a> Item (`Item`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The item's identifier. An unique, increasing integer. | <a href="#Item/id">See details</a>
`cost` | The cost in silverthalers. | <a href="#Item/cost">See details</a>
`weight?` | The weight in kg. | <a href="#Item/weight">See details</a>
`complexity` | The complexity of crafting the item. | <a href="#Item/complexity">See details</a>
`type` |  | <a href="#Item/type">See details</a>
`src` |  | <a href="#Item/src">See details</a>

#### <a name="Item/id"></a> `id`

The item's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Item/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="#Cost">Cost</a>

#### <a name="Item/weight"></a> `weight?`

The weight in kg.

- **Type:** <a href="#Weight">Weight</a>

#### <a name="Item/complexity"></a> `complexity`

The complexity of crafting the item.

- **Type:** <a href="#Complexity">Complexity</a>

#### <a name="Item/type"></a> `type`

- **Type:** Union
- **Cases:** <a href="#Item/type'Weapon">Item/type'Weapon</a> | <a href="#Item/type'Armor">Item/type'Armor</a> | <a href="#Item/type'Default">Item/type'Default</a>

#### <a name="Item/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

---

### <a name="Item/type'Weapon"></a> `Item/type'Weapon`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Item/type'Weapon/tag">See details</a>
`uses` |  | <a href="#Item/type'Weapon/uses">See details</a>
`sanctified_by?` |  | <a href="#Item/type'Weapon/sanctified_by">See details</a>
`restricted_to_cultures?` |  | <a href="#Item/type'Weapon/restricted_to_cultures">See details</a>
`secondary?` |  | <a href="#Item/type'Weapon/secondary">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Item/type'Weapon/translations">See details</a>

#### <a name="Item/type'Weapon/tag"></a> `tag`

- **Constant:** `"Weapon"`

#### <a name="Item/type'Weapon/uses"></a> `uses`

- **Type:** List
- **Items:** <a href="#Item/type'Weapon/uses[]">Item/type'Weapon/uses[]</a>
- **Minimum Items:** `1`

#### <a name="Item/type'Weapon/sanctified_by"></a> `sanctified_by?`

- **Type:** <a href="./_Weapon.md#SanctifiedBy">SanctifiedBy</a>

#### <a name="Item/type'Weapon/restricted_to_cultures"></a> `restricted_to_cultures?`

- **Type:** <a href="./_Weapon.md#RestrictedToCultures">RestrictedToCultures</a>

#### <a name="Item/type'Weapon/secondary"></a> `secondary?`

- **Type:** <a href="#Item/type'Weapon/secondary">Object</a>

#### <a name="Item/type'Weapon/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Item/type'Weapon/translations[key]">Item/type'Weapon/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Item/type'Weapon/uses[]"></a> `Item/type'Weapon/uses[]`

- **Type:** Union
- **Cases:** <a href="#Item/type'Weapon/uses[]'MeleeWeapon">Item/type'Weapon/uses[]'MeleeWeapon</a> | <a href="#Item/type'Weapon/uses[]'RangedWeapon">Item/type'Weapon/uses[]'RangedWeapon</a>

---

### <a name="Item/type'Weapon/uses[]'MeleeWeapon"></a> `Item/type'Weapon/uses[]'MeleeWeapon`

- **Type:** <a href="./_Weapon.md#MeleeWeapon">MeleeWeapon</a>

---

### <a name="Item/type'Weapon/uses[]'RangedWeapon"></a> `Item/type'Weapon/uses[]'RangedWeapon`

- **Type:** <a href="./_Weapon.md#RangedWeapon">RangedWeapon</a>

---

### <a name="Item/type'Weapon/secondary"></a> `Item/type'Weapon/secondary`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`type` |  | <a href="#Item/type'Weapon/secondary/type">See details</a>
`structure_points` |  | <a href="#Item/type'Weapon/secondary/structure_points">See details</a>

#### <a name="Item/type'Weapon/secondary/type"></a> `type`

- **Type:** <a href="#Type">Type</a>

#### <a name="Item/type'Weapon/secondary/structure_points"></a> `structure_points`

- **Type:** <a href="./_Weapon.md#StructurePoints">StructurePoints</a>

---

### <a name="Item/type'Weapon/translations[key]"></a> `Item/type'Weapon/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#Item/type'Weapon/translations[key]/name">See details</a>
`secondary_name?` |  | <a href="#Item/type'Weapon/translations[key]/secondary_name">See details</a>
`note?` |  | <a href="#Item/type'Weapon/translations[key]/note">See details</a>
`rules?` |  | <a href="#Item/type'Weapon/translations[key]/rules">See details</a>
`advantage?` |  | <a href="#Item/type'Weapon/translations[key]/advantage">See details</a>
`disadvantage?` |  | <a href="#Item/type'Weapon/translations[key]/disadvantage">See details</a>
`errata?` |  | <a href="#Item/type'Weapon/translations[key]/errata">See details</a>

#### <a name="Item/type'Weapon/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="Item/type'Weapon/translations[key]/secondary_name"></a> `secondary_name?`

- **Type:** <a href="#SecondaryName">SecondaryName</a>

#### <a name="Item/type'Weapon/translations[key]/note"></a> `note?`

- **Type:** <a href="#Note">Note</a>

#### <a name="Item/type'Weapon/translations[key]/rules"></a> `rules?`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="Item/type'Weapon/translations[key]/advantage"></a> `advantage?`

- **Type:** <a href="#Advantage">Advantage</a>

#### <a name="Item/type'Weapon/translations[key]/disadvantage"></a> `disadvantage?`

- **Type:** <a href="#Disadvantage">Disadvantage</a>

#### <a name="Item/type'Weapon/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="Item/type'Armor"></a> `Item/type'Armor`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Item/type'Armor/tag">See details</a>
`protection` |  | <a href="#Item/type'Armor/protection">See details</a>
`encumbrance` |  | <a href="#Item/type'Armor/encumbrance">See details</a>
`has_additional_penalties` |  | <a href="#Item/type'Armor/has_additional_penalties">See details</a>
`armor_type` |  | <a href="#Item/type'Armor/armor_type">See details</a>
`hit_zone?` |  | <a href="#Item/type'Armor/hit_zone">See details</a>
`secondary?` |  | <a href="#Item/type'Armor/secondary">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Item/type'Armor/translations">See details</a>

#### <a name="Item/type'Armor/tag"></a> `tag`

- **Constant:** `"Armor"`

#### <a name="Item/type'Armor/protection"></a> `protection`

- **Type:** <a href="./_Armor.md#Protection">Protection</a>

#### <a name="Item/type'Armor/encumbrance"></a> `encumbrance`

- **Type:** <a href="./_Armor.md#Encumbrance">Encumbrance</a>

#### <a name="Item/type'Armor/has_additional_penalties"></a> `has_additional_penalties`

- **Type:** <a href="./_Armor.md#HasAdditionalPenalties">HasAdditionalPenalties</a>

#### <a name="Item/type'Armor/armor_type"></a> `armor_type`

- **Type:** <a href="./_Armor.md#ArmorType">ArmorType</a>

#### <a name="Item/type'Armor/hit_zone"></a> `hit_zone?`

- **Type:** <a href="./_Armor.md#HitZone">HitZone</a>

#### <a name="Item/type'Armor/secondary"></a> `secondary?`

- **Type:** <a href="#Item/type'Armor/secondary">Object</a>

#### <a name="Item/type'Armor/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Item/type'Armor/translations[key]">Item/type'Armor/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Item/type'Armor/secondary"></a> `Item/type'Armor/secondary`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`type` |  | <a href="#Item/type'Armor/secondary/type">See details</a>
`structure_points` |  | <a href="#Item/type'Armor/secondary/structure_points">See details</a>

#### <a name="Item/type'Armor/secondary/type"></a> `type`

- **Type:** <a href="#Type">Type</a>

#### <a name="Item/type'Armor/secondary/structure_points"></a> `structure_points`

- **Type:** <a href="./_Weapon.md#StructurePoints">StructurePoints</a>

---

### <a name="Item/type'Armor/translations[key]"></a> `Item/type'Armor/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#Item/type'Armor/translations[key]/name">See details</a>
`secondary_name?` |  | <a href="#Item/type'Armor/translations[key]/secondary_name">See details</a>
`note?` |  | <a href="#Item/type'Armor/translations[key]/note">See details</a>
`rules?` |  | <a href="#Item/type'Armor/translations[key]/rules">See details</a>
`advantage?` |  | <a href="#Item/type'Armor/translations[key]/advantage">See details</a>
`disadvantage?` |  | <a href="#Item/type'Armor/translations[key]/disadvantage">See details</a>
`errata?` |  | <a href="#Item/type'Armor/translations[key]/errata">See details</a>

#### <a name="Item/type'Armor/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="Item/type'Armor/translations[key]/secondary_name"></a> `secondary_name?`

- **Type:** <a href="#SecondaryName">SecondaryName</a>

#### <a name="Item/type'Armor/translations[key]/note"></a> `note?`

- **Type:** <a href="#Note">Note</a>

#### <a name="Item/type'Armor/translations[key]/rules"></a> `rules?`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="Item/type'Armor/translations[key]/advantage"></a> `advantage?`

- **Type:** <a href="#Advantage">Advantage</a>

#### <a name="Item/type'Armor/translations[key]/disadvantage"></a> `disadvantage?`

- **Type:** <a href="#Disadvantage">Disadvantage</a>

#### <a name="Item/type'Armor/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="Item/type'Default"></a> `Item/type'Default`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Item/type'Default/tag">See details</a>
`type` |  | <a href="#Item/type'Default/type">See details</a>
`combat_uses` |  | <a href="#Item/type'Default/combat_uses">See details</a>
`structure_points` |  | <a href="#Item/type'Default/structure_points">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Item/type'Default/translations">See details</a>

#### <a name="Item/type'Default/tag"></a> `tag`

- **Constant:** `"Default"`

#### <a name="Item/type'Default/type"></a> `type`

- **Type:** <a href="#Type">Type</a>

#### <a name="Item/type'Default/combat_uses"></a> `combat_uses`

- **Type:** Union
- **Cases:** <a href="#Item/type'Default/combat_uses'ImprovisedWeapon">Item/type'Default/combat_uses'ImprovisedWeapon</a> | <a href="#Item/type'Default/combat_uses'Armor">Item/type'Default/combat_uses'Armor</a>

#### <a name="Item/type'Default/structure_points"></a> `structure_points`

- **Type:** <a href="./_Weapon.md#StructurePoints">StructurePoints</a>

#### <a name="Item/type'Default/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Item/type'Default/translations[key]">Item/type'Default/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Item/type'Default/combat_uses'ImprovisedWeapon"></a> `Item/type'Default/combat_uses'ImprovisedWeapon`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/tag">See details</a>
`uses` |  | <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/uses">See details</a>
`sanctified_by?` |  | <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/sanctified_by">See details</a>
`restricted_to_cultures?` |  | <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/restricted_to_cultures">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/translations">See details</a>

#### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/tag"></a> `tag`

- **Constant:** `"ImprovisedWeapon"`

#### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/uses"></a> `uses`

- **Type:** List
- **Items:** <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/uses[]">Item/type'Default/combat_uses'ImprovisedWeapon/uses[]</a>
- **Minimum Items:** `1`

#### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/sanctified_by"></a> `sanctified_by?`

- **Type:** <a href="./_Weapon.md#SanctifiedBy">SanctifiedBy</a>

#### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/restricted_to_cultures"></a> `restricted_to_cultures?`

- **Type:** <a href="./_Weapon.md#RestrictedToCultures">RestrictedToCultures</a>

#### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/translations[key]">Item/type'Default/combat_uses'ImprovisedWeapon/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/uses[]"></a> `Item/type'Default/combat_uses'ImprovisedWeapon/uses[]`

- **Type:** Union
- **Cases:** <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/uses[]'MeleeWeapon">Item/type'Default/combat_uses'ImprovisedWeapon/uses[]'MeleeWeapon</a> | <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/uses[]'RangedWeapon">Item/type'Default/combat_uses'ImprovisedWeapon/uses[]'RangedWeapon</a>

---

### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/uses[]'MeleeWeapon"></a> `Item/type'Default/combat_uses'ImprovisedWeapon/uses[]'MeleeWeapon`

- **Type:** <a href="./_Weapon.md#MeleeWeapon">MeleeWeapon</a>

---

### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/uses[]'RangedWeapon"></a> `Item/type'Default/combat_uses'ImprovisedWeapon/uses[]'RangedWeapon`

- **Type:** <a href="./_Weapon.md#RangedWeapon">RangedWeapon</a>

---

### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/translations[key]"></a> `Item/type'Default/combat_uses'ImprovisedWeapon/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`advantage` |  | <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/translations[key]/advantage">See details</a>
`disadvantage` |  | <a href="#Item/type'Default/combat_uses'ImprovisedWeapon/translations[key]/disadvantage">See details</a>

#### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/translations[key]/advantage"></a> `advantage`

- **Type:** <a href="#Advantage">Advantage</a>

#### <a name="Item/type'Default/combat_uses'ImprovisedWeapon/translations[key]/disadvantage"></a> `disadvantage`

- **Type:** <a href="#Disadvantage">Disadvantage</a>

---

### <a name="Item/type'Default/combat_uses'Armor"></a> `Item/type'Default/combat_uses'Armor`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Item/type'Default/combat_uses'Armor/tag">See details</a>
`protection` |  | <a href="#Item/type'Default/combat_uses'Armor/protection">See details</a>
`encumbrance` |  | <a href="#Item/type'Default/combat_uses'Armor/encumbrance">See details</a>
`has_additional_penalties` |  | <a href="#Item/type'Default/combat_uses'Armor/has_additional_penalties">See details</a>
`armor_type` |  | <a href="#Item/type'Default/combat_uses'Armor/armor_type">See details</a>
`hit_zone?` |  | <a href="#Item/type'Default/combat_uses'Armor/hit_zone">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Item/type'Default/combat_uses'Armor/translations">See details</a>

#### <a name="Item/type'Default/combat_uses'Armor/tag"></a> `tag`

- **Constant:** `"Armor"`

#### <a name="Item/type'Default/combat_uses'Armor/protection"></a> `protection`

- **Type:** <a href="./_Armor.md#Protection">Protection</a>

#### <a name="Item/type'Default/combat_uses'Armor/encumbrance"></a> `encumbrance`

- **Type:** <a href="./_Armor.md#Encumbrance">Encumbrance</a>

#### <a name="Item/type'Default/combat_uses'Armor/has_additional_penalties"></a> `has_additional_penalties`

- **Type:** <a href="./_Armor.md#HasAdditionalPenalties">HasAdditionalPenalties</a>

#### <a name="Item/type'Default/combat_uses'Armor/armor_type"></a> `armor_type`

- **Type:** <a href="./_Armor.md#ArmorType">ArmorType</a>

#### <a name="Item/type'Default/combat_uses'Armor/hit_zone"></a> `hit_zone?`

- **Type:** <a href="./_Armor.md#HitZone">HitZone</a>

#### <a name="Item/type'Default/combat_uses'Armor/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Item/type'Default/combat_uses'Armor/translations[key]">Item/type'Default/combat_uses'Armor/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Item/type'Default/combat_uses'Armor/translations[key]"></a> `Item/type'Default/combat_uses'Armor/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`advantage` |  | <a href="#Item/type'Default/combat_uses'Armor/translations[key]/advantage">See details</a>
`disadvantage` |  | <a href="#Item/type'Default/combat_uses'Armor/translations[key]/disadvantage">See details</a>

#### <a name="Item/type'Default/combat_uses'Armor/translations[key]/advantage"></a> `advantage`

- **Type:** <a href="#Advantage">Advantage</a>

#### <a name="Item/type'Default/combat_uses'Armor/translations[key]/disadvantage"></a> `disadvantage`

- **Type:** <a href="#Disadvantage">Disadvantage</a>

---

### <a name="Item/type'Default/translations[key]"></a> `Item/type'Default/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#Item/type'Default/translations[key]/name">See details</a>
`secondary_name?` |  | <a href="#Item/type'Default/translations[key]/secondary_name">See details</a>
`note?` |  | <a href="#Item/type'Default/translations[key]/note">See details</a>
`rules?` |  | <a href="#Item/type'Default/translations[key]/rules">See details</a>
`errata?` |  | <a href="#Item/type'Default/translations[key]/errata">See details</a>

#### <a name="Item/type'Default/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="Item/type'Default/translations[key]/secondary_name"></a> `secondary_name?`

- **Type:** <a href="#SecondaryName">SecondaryName</a>

#### <a name="Item/type'Default/translations[key]/note"></a> `note?`

- **Type:** <a href="#Note">Note</a>

#### <a name="Item/type'Default/translations[key]/rules"></a> `rules?`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="Item/type'Default/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="Name"></a> `Name`

The name of the item.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="SecondaryName"></a> `SecondaryName`

An auxiliary name or label of the item, if available.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Cost"></a> `Cost`

The cost in silverthalers.

- **Type:** Union
- **Cases:** <a href="#Cost'Free">Cost'Free</a> | <a href="#Cost'Various">Cost'Various</a> | <a href="#Cost'Fixed">Cost'Fixed</a> | <a href="#Cost'Range">Cost'Range</a>

---

### <a name="Cost'Free"></a> `Cost'Free`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost'Free/tag">See details</a>

#### <a name="Cost'Free/tag"></a> `tag`

- **Constant:** `"Free"`

---

### <a name="Cost'Various"></a> `Cost'Various`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost'Various/tag">See details</a>

#### <a name="Cost'Various/tag"></a> `tag`

- **Constant:** `"Various"`

---

### <a name="Cost'Fixed"></a> `Cost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost'Fixed/tag">See details</a>
`value` | The cost in silverthalers. | <a href="#Cost'Fixed/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Cost'Fixed/translations">See details</a>

#### <a name="Cost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="Cost'Fixed/value"></a> `value`

The cost in silverthalers.

- **Type:** Number
- **Exclusive Minimum:** `0`

#### <a name="Cost'Fixed/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Cost'Fixed/translations[key]">Cost'Fixed/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Cost'Fixed/translations[key]"></a> `Cost'Fixed/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`wrap_in_text` | The cost get wrapped by this text using a placeholder in the text. | <a href="#Cost'Fixed/translations[key]/wrap_in_text">See details</a>

#### <a name="Cost'Fixed/translations[key]/wrap_in_text"></a> `wrap_in_text`

The cost get wrapped by this text using a placeholder in the text.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\\{0\\}`

---

### <a name="Cost'Range"></a> `Cost'Range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost'Range/tag">See details</a>
`from` | The lower bound of the cost in silverthalers. | <a href="#Cost'Range/from">See details</a>
`to` | The upper bound of the cost in silverthalers. | <a href="#Cost'Range/to">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Cost'Range/translations">See details</a>

#### <a name="Cost'Range/tag"></a> `tag`

- **Constant:** `"Range"`

#### <a name="Cost'Range/from"></a> `from`

The lower bound of the cost in silverthalers.

- **Type:** Number
- **Exclusive Minimum:** `0`

#### <a name="Cost'Range/to"></a> `to`

The upper bound of the cost in silverthalers.

- **Type:** Number
- **Exclusive Minimum:** `0`

#### <a name="Cost'Range/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Cost'Range/translations[key]">Cost'Range/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Cost'Range/translations[key]"></a> `Cost'Range/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`wrap_in_text` | The cost range gets wrapped by this text using a placeholder in the text. | <a href="#Cost'Range/translations[key]/wrap_in_text">See details</a>

#### <a name="Cost'Range/translations[key]/wrap_in_text"></a> `wrap_in_text`

The cost range gets wrapped by this text using a placeholder in the
text.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\\{0\\}`

---

### <a name="Weight"></a> `Weight`

The weight in kg.

- **Type:** Number
- **Exclusive Minimum:** `0`

---

### <a name="Complexity"></a> `Complexity`

The complexity of crafting the item.

- **Type:** Union
- **Cases:** <a href="#Complexity'Primitive">Complexity'Primitive</a> | <a href="#Complexity'Simple">Complexity'Simple</a> | <a href="#Complexity'Complex">Complexity'Complex</a>

---

### <a name="Complexity'Primitive"></a> `Complexity'Primitive`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Complexity'Primitive/tag">See details</a>

#### <a name="Complexity'Primitive/tag"></a> `tag`

- **Constant:** `"Primitive"`

---

### <a name="Complexity'Simple"></a> `Complexity'Simple`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Complexity'Simple/tag">See details</a>

#### <a name="Complexity'Simple/tag"></a> `tag`

- **Constant:** `"Simple"`

---

### <a name="Complexity'Complex"></a> `Complexity'Complex`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Complexity'Complex/tag">See details</a>
`ap_value` | The AP value for the trade secret. | <a href="#Complexity'Complex/ap_value">See details</a>

#### <a name="Complexity'Complex/tag"></a> `tag`

- **Constant:** `"Complex"`

#### <a name="Complexity'Complex/ap_value"></a> `ap_value`

The AP value for the trade secret.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Type"></a> `Type`

- **Possible values:** `"Ammunition"`, `"WeaponAccessories"`, `"Clothes"`, `"TravelGearAndTools"`, `"Illumination"`, `"BandagesAndRemedies"`, `"Containers"`, `"RopesAndChains"`, `"ThievesTools"`, `"ToolsOfTheTrade"`, `"OrienteeringAids"`, `"Jewelry"`, `"GemsAndPreciousStones"`, `"Stationary"`, `"Books"`, `"MagicalArtifacts"`, `"Alchemicae"`, `"Poisons"`, `"HealingHerbs"`, `"MusicalInstruments"`, `"LuxuryGoods"`, `"Animals"`, `"AnimalCare"`, `"Vehicles"`, `"AusruestungDerGeweihtenschaft"`, `"CeremonialItems"`, `"Liebesspielzeug"`

---

### <a name="Note"></a> `Note`

Note text.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Rules"></a> `Rules`

Special rules text.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Advantage"></a> `Advantage`

The weapon/armor advantage text.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Disadvantage"></a> `Disadvantage`

The weapon/armor disadvantage text.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

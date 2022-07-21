# [TITLE MISSING]

## Definitions

### <a name="Weapon"></a> `Weapon`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#Weapon/cost">See details</a>
`weight` | The weight in kg. | <a href="#Weapon/weight">See details</a>
`complexity` | The complexity of crafting the item. | <a href="#Weapon/complexity">See details</a>
`structure_points?` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#Weapon/structure_points">See details</a>
`uses` | A list of stat blocks for each combat technique this weapon can be used with. | <a href="#Weapon/uses">See details</a>
`sanctified_by?` | If the weapon is sanctified by a god and thus restricted to it's Blessed Ones. | <a href="#Weapon/sanctified_by">See details</a>
`restricted_to_cultures?` | Define if during character creation this weapon can only be bought by characters of a specific race or culture. | <a href="#Weapon/restricted_to_cultures">See details</a>
`src` |  | <a href="#Weapon/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Weapon/translations">See details</a>

#### <a name="Weapon/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="Weapon/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

#### <a name="Weapon/complexity"></a> `complexity`

The complexity of crafting the item.

- **Type:** <a href="./_Item.md#Complexity">Complexity</a>

#### <a name="Weapon/structure_points"></a> `structure_points?`

The structure points of the item. Use an array if the item consists of
multiple components that have individual structure points.

- **Type:** <a href="./_Item.md#StructurePoints">StructurePoints</a>

#### <a name="Weapon/uses"></a> `uses`

A list of stat blocks for each combat technique this weapon can be used
with.

- **Type:** List
- **Items:** <a href="#Weapon/uses[]">Weapon/uses[]</a>
- **Minimum Items:** `1`

#### <a name="Weapon/sanctified_by"></a> `sanctified_by?`

If the weapon is sanctified by a god and thus restricted to it's Blessed
Ones.

- **Type:** <a href="#SanctifiedBy">SanctifiedBy</a>

#### <a name="Weapon/restricted_to_cultures"></a> `restricted_to_cultures?`

Define if during character creation this weapon can only be bought by
characters of a specific race or culture.

- **Type:** <a href="#RestrictedToCultures">RestrictedToCultures</a>

#### <a name="Weapon/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Weapon/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Weapon/translations[key]">Weapon/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Weapon/uses[]"></a> `Weapon/uses[]`

- **Type:** <a href="#WeaponUse">WeaponUse</a>

---

### <a name="Weapon/translations[key]"></a> `Weapon/translations[key]`

- **Type:** <a href="#WeaponTranslation">WeaponTranslation</a>

---

### <a name="WeaponTranslation"></a> `WeaponTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the item. | <a href="#WeaponTranslation/name">See details</a>
`secondary_name?` | An auxiliary name or label of the item, if available. | <a href="#WeaponTranslation/secondary_name">See details</a>
`note?` | Note text. | <a href="#WeaponTranslation/note">See details</a>
`rules?` | Special rules text. | <a href="#WeaponTranslation/rules">See details</a>
`advantage?` | The weapon advantage text. | <a href="#WeaponTranslation/advantage">See details</a>
`disadvantage?` | The weapon disadvantage text. | <a href="#WeaponTranslation/disadvantage">See details</a>
`errata?` |  | <a href="#WeaponTranslation/errata">See details</a>

#### <a name="WeaponTranslation/name"></a> `name`

The name of the item.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="WeaponTranslation/secondary_name"></a> `secondary_name?`

An auxiliary name or label of the item, if available.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="WeaponTranslation/note"></a> `note?`

Note text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="WeaponTranslation/rules"></a> `rules?`

Special rules text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="WeaponTranslation/advantage"></a> `advantage?`

The weapon advantage text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="WeaponTranslation/disadvantage"></a> `disadvantage?`

The weapon disadvantage text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="WeaponTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="ImprovisedWeapon"></a> `ImprovisedWeapon`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`uses` | A list of stat blocks for each combat technique this weapon can be used with. | <a href="#ImprovisedWeapon/uses">See details</a>
`sanctified_by?` | If the weapon is sanctified by a god and thus restricted to it's Blessed Ones. | <a href="#ImprovisedWeapon/sanctified_by">See details</a>
`restricted_to_cultures?` | Define if during character creation this weapon can only be bought by characters of a specific race or culture. | <a href="#ImprovisedWeapon/restricted_to_cultures">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ImprovisedWeapon/translations">See details</a>

#### <a name="ImprovisedWeapon/uses"></a> `uses`

A list of stat blocks for each combat technique this weapon can be used
with.

- **Type:** List
- **Items:** <a href="#ImprovisedWeapon/uses[]">ImprovisedWeapon/uses[]</a>
- **Minimum Items:** `1`

#### <a name="ImprovisedWeapon/sanctified_by"></a> `sanctified_by?`

If the weapon is sanctified by a god and thus restricted to it's Blessed
Ones.

- **Type:** <a href="#SanctifiedBy">SanctifiedBy</a>

#### <a name="ImprovisedWeapon/restricted_to_cultures"></a> `restricted_to_cultures?`

Define if during character creation this weapon can only be bought by
characters of a specific race or culture.

- **Type:** <a href="#RestrictedToCultures">RestrictedToCultures</a>

#### <a name="ImprovisedWeapon/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ImprovisedWeapon/translations[key]">ImprovisedWeapon/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ImprovisedWeapon/uses[]"></a> `ImprovisedWeapon/uses[]`

- **Type:** <a href="#WeaponUse">WeaponUse</a>

---

### <a name="ImprovisedWeapon/translations[key]"></a> `ImprovisedWeapon/translations[key]`

- **Type:** <a href="#ImprovisedWeaponTranslation">ImprovisedWeaponTranslation</a>

---

### <a name="ImprovisedWeaponTranslation"></a> `ImprovisedWeaponTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`advantage?` | The weapon advantage text. | <a href="#ImprovisedWeaponTranslation/advantage">See details</a>
`disadvantage?` | The weapon disadvantage text. | <a href="#ImprovisedWeaponTranslation/disadvantage">See details</a>

#### <a name="ImprovisedWeaponTranslation/advantage"></a> `advantage?`

The weapon advantage text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ImprovisedWeaponTranslation/disadvantage"></a> `disadvantage?`

The weapon disadvantage text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="WeaponUse"></a> `WeaponUse`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An increasing integer for use identification. | <a href="#WeaponUse/id">See details</a>
`values` |  | <a href="#WeaponUse/values">See details</a>

#### <a name="WeaponUse/id"></a> `id`

An increasing integer for use identification.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="WeaponUse/values"></a> `values`

- **Type:** <a href="#WeaponUseValues">WeaponUseValues</a>

---

### <a name="WeaponUseValues"></a> `WeaponUseValues`

- **Type:** Union
- **Cases:** <a href="#WeaponUseValues'Melee">WeaponUseValues'Melee</a> | <a href="#WeaponUseValues'Ranged">WeaponUseValues'Ranged</a>

---

### <a name="WeaponUseValues'Melee"></a> `WeaponUseValues'Melee`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#WeaponUseValues'Melee/tag">See details</a>
`melee` |  | <a href="#WeaponUseValues'Melee/melee">See details</a>

#### <a name="WeaponUseValues'Melee/tag"></a> `tag`

- **Constant:** `"Melee"`

#### <a name="WeaponUseValues'Melee/melee"></a> `melee`

- **Type:** <a href="./_MeleeWeapon.md#MeleeWeapon">MeleeWeapon</a>

---

### <a name="WeaponUseValues'Ranged"></a> `WeaponUseValues'Ranged`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#WeaponUseValues'Ranged/tag">See details</a>
`ranged` |  | <a href="#WeaponUseValues'Ranged/ranged">See details</a>

#### <a name="WeaponUseValues'Ranged/tag"></a> `tag`

- **Constant:** `"Ranged"`

#### <a name="WeaponUseValues'Ranged/ranged"></a> `ranged`

- **Type:** <a href="./_RangedWeapon.md#RangedWeapon">RangedWeapon</a>

---

### <a name="SanctifiedBy"></a> `SanctifiedBy`

If the weapon is sanctified by a god and thus restricted to it's Blessed
Ones.

- **Type:** <a href="../../_SimpleReferences.md#BlessedTraditionReference">BlessedTraditionReference</a>

---

### <a name="RestrictedToCultures"></a> `RestrictedToCultures`

Define if during character creation this weapon can only be bought by
characters of a specific race or culture.

- **Type:** Union
- **Cases:** <a href="#RestrictedToCultures'CulturesOfRace">RestrictedToCultures'CulturesOfRace</a> | <a href="#RestrictedToCultures'Cultures">RestrictedToCultures'Cultures</a>

---

### <a name="RestrictedToCultures'CulturesOfRace"></a> `RestrictedToCultures'CulturesOfRace`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedToCultures'CulturesOfRace/tag">See details</a>
`cultures_of_race` |  | <a href="#RestrictedToCultures'CulturesOfRace/cultures_of_race">See details</a>

#### <a name="RestrictedToCultures'CulturesOfRace/tag"></a> `tag`

- **Constant:** `"CulturesOfRace"`

#### <a name="RestrictedToCultures'CulturesOfRace/cultures_of_race"></a> `cultures_of_race`

- **Type:** <a href="../../_SimpleReferences.md#RaceReference">RaceReference</a>

---

### <a name="RestrictedToCultures'Cultures"></a> `RestrictedToCultures'Cultures`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedToCultures'Cultures/tag">See details</a>
`cultures` |  | <a href="#RestrictedToCultures'Cultures/cultures">See details</a>

#### <a name="RestrictedToCultures'Cultures/tag"></a> `tag`

- **Constant:** `"Cultures"`

#### <a name="RestrictedToCultures'Cultures/cultures"></a> `cultures`

- **Type:** <a href="#RestrictedToSpecificCultures">RestrictedToSpecificCultures</a>

---

### <a name="RestrictedToSpecificCultures"></a> `RestrictedToSpecificCultures`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#RestrictedToSpecificCultures/list">See details</a>

#### <a name="RestrictedToSpecificCultures/list"></a> `list`

- **Type:** List
- **Items:** <a href="#RestrictedToSpecificCultures/list[]">RestrictedToSpecificCultures/list[]</a>

---

### <a name="RestrictedToSpecificCultures/list[]"></a> `RestrictedToSpecificCultures/list[]`

- **Type:** <a href="../../_SimpleReferences.md#CultureReference">CultureReference</a>

# [TITLE MISSING]

## Definitions

### <a name="DefaultItem"></a> `DefaultItem`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#DefaultItem/cost">See details</a>
`weight` | The weight in kg. | <a href="#DefaultItem/weight">See details</a>
`complexity?` | The complexity of crafting the item. | <a href="#DefaultItem/complexity">See details</a>
`structure_points` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#DefaultItem/structure_points">See details</a>
`combat_use?` | The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item. | <a href="#DefaultItem/combat_use">See details</a>
`src` |  | <a href="#DefaultItem/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DefaultItem/translations">See details</a>

#### <a name="DefaultItem/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="#Cost">Cost</a>

#### <a name="DefaultItem/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="#Weight">Weight</a>

#### <a name="DefaultItem/complexity"></a> `complexity?`

The complexity of crafting the item.

- **Type:** <a href="#Complexity">Complexity</a>

#### <a name="DefaultItem/structure_points"></a> `structure_points`

The structure points of the item. Use an array if the item consists of
multiple components that have individual structure points.

- **Type:** <a href="#StructurePoints">StructurePoints</a>

#### <a name="DefaultItem/combat_use"></a> `combat_use?`

The item can also be used either as an improvised weapon or as an armor,
although this is not the primary use case of the item.

- **Type:** <a href="#CombatUse">CombatUse</a>

#### <a name="DefaultItem/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="DefaultItem/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DefaultItem/translations[key]">DefaultItem/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DefaultItem/translations[key]"></a> `DefaultItem/translations[key]`

- **Type:** <a href="#DefaultItemTranslation">DefaultItemTranslation</a>

---

### <a name="CombatUse"></a> `CombatUse`

The item can also be used either as an improvised weapon or as an armor,
although this is not the primary use case of the item.

- **Type:** Union
- **Cases:** <a href="#CombatUse'Weapon">CombatUse'Weapon</a> | <a href="#CombatUse'Armor">CombatUse'Armor</a>

---

### <a name="CombatUse'Weapon"></a> `CombatUse'Weapon`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatUse'Weapon/tag">See details</a>
`weapon` |  | <a href="#CombatUse'Weapon/weapon">See details</a>

#### <a name="CombatUse'Weapon/tag"></a> `tag`

- **Constant:** `"Weapon"`

#### <a name="CombatUse'Weapon/weapon"></a> `weapon`

- **Type:** <a href="./Weapon.md#SecondaryWeapon">SecondaryWeapon</a>

---

### <a name="CombatUse'Armor"></a> `CombatUse'Armor`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatUse'Armor/tag">See details</a>
`armor` |  | <a href="#CombatUse'Armor/armor">See details</a>

#### <a name="CombatUse'Armor/tag"></a> `tag`

- **Constant:** `"Armor"`

#### <a name="CombatUse'Armor/armor"></a> `armor`

- **Type:** <a href="./Armor.md#SecondaryArmor">SecondaryArmor</a>

---

### <a name="DefaultItemTranslation"></a> `DefaultItemTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the item. | <a href="#DefaultItemTranslation/name">See details</a>
`secondary_name?` | An auxiliary name or label of the item, if available. | <a href="#DefaultItemTranslation/secondary_name">See details</a>
`note?` | Note text. | <a href="#DefaultItemTranslation/note">See details</a>
`rules?` | Special rules text. | <a href="#DefaultItemTranslation/rules">See details</a>
`errata?` |  | <a href="#DefaultItemTranslation/errata">See details</a>

#### <a name="DefaultItemTranslation/name"></a> `name`

The name of the item.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="DefaultItemTranslation/secondary_name"></a> `secondary_name?`

An auxiliary name or label of the item, if available.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="DefaultItemTranslation/note"></a> `note?`

Note text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="DefaultItemTranslation/rules"></a> `rules?`

Special rules text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="DefaultItemTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="StructurePoints"></a> Structure Points (`StructurePoints`)

The structure points of the item. Use an array if the item consists of
multiple components that have individual structure points.

- **Type:** List
- **Items:** <a href="#StructurePoints[]">StructurePoints[]</a>
- **Minimum Items:** `1`

---

### <a name="StructurePoints[]"></a> `StructurePoints[]`

- **Type:** <a href="#StructurePointsComponent">StructurePointsComponent</a>

---

### <a name="StructurePointsComponent"></a> `StructurePointsComponent`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`points` | The structure points. | <a href="#StructurePointsComponent/points">See details</a>

#### <a name="StructurePointsComponent/points"></a> `points`

The structure points.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Cost"></a> `Cost`

The cost in silverthalers.

- **Type:** Union
- **Cases:** <a href="#Cost'Free">Cost'Free</a> | <a href="#Cost'Various">Cost'Various</a> | <a href="#Cost'">Cost'</a> | <a href="#Cost'">Cost'</a> | <a href="#Cost'Fixed">Cost'Fixed</a> | <a href="#Cost'Range">Cost'Range</a>

---

### <a name="Cost'Free"></a> `Cost'Free`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost'Free/tag">See details</a>
`free` |  | <a href="#Cost'Free/free">See details</a>

#### <a name="Cost'Free/tag"></a> `tag`

- **Constant:** `"Free"`

#### <a name="Cost'Free/free"></a> `free`

- **Type:** <a href="#Cost'Free/free">Object</a>

---

### <a name="Cost'Free/free"></a> `Cost'Free/free`

- **Type:** Empty Object

---

### <a name="Cost'Various"></a> `Cost'Various`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost'Various/tag">See details</a>
`various` |  | <a href="#Cost'Various/various">See details</a>

#### <a name="Cost'Various/tag"></a> `tag`

- **Constant:** `"Various"`

#### <a name="Cost'Various/various"></a> `various`

- **Type:** <a href="#Cost'Various/various">Object</a>

---

### <a name="Cost'Various/various"></a> `Cost'Various/various`

- **Type:** Empty Object

---

### <a name="Cost'"></a> `Cost'`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost'/tag">See details</a>
`` |  | <a href="#Cost'/">See details</a>

#### <a name="Cost'/tag"></a> `tag`

- **Constant:** `""`

#### <a name="Cost'/"></a> ``

- **Type:** <a href="#Cost'/">Object</a>

---

### <a name="Cost'/"></a> `Cost'/`

- **Type:** Empty Object

---

### <a name="Cost'"></a> `Cost'`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost'/tag">See details</a>
`` |  | <a href="#Cost'/">See details</a>

#### <a name="Cost'/tag"></a> `tag`

- **Constant:** `""`

#### <a name="Cost'/"></a> ``

- **Type:** <a href="#Cost'/">Object</a>

---

### <a name="Cost'/"></a> `Cost'/`

- **Type:** Empty Object

---

### <a name="Cost'Fixed"></a> `Cost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost'Fixed/tag">See details</a>
`fixed` |  | <a href="#Cost'Fixed/fixed">See details</a>

#### <a name="Cost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="Cost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedCost">FixedCost</a>

---

### <a name="Cost'Range"></a> `Cost'Range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost'Range/tag">See details</a>
`range` |  | <a href="#Cost'Range/range">See details</a>

#### <a name="Cost'Range/tag"></a> `tag`

- **Constant:** `"Range"`

#### <a name="Cost'Range/range"></a> `range`

- **Type:** <a href="#CostRange">CostRange</a>

---

### <a name="FixedCost"></a> `FixedCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The cost in silverthalers. | <a href="#FixedCost/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FixedCost/translations">See details</a>

#### <a name="FixedCost/value"></a> `value`

The cost in silverthalers.

- **Type:** Number
- **Exclusive Minimum:** `0`

#### <a name="FixedCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FixedCost/translations[key]">FixedCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FixedCost/translations[key]"></a> `FixedCost/translations[key]`

- **Type:** <a href="#CostTranslation">CostTranslation</a>

---

### <a name="CostRange"></a> `CostRange`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from` | The lower bound of the cost in silverthalers. | <a href="#CostRange/from">See details</a>
`to` | The upper bound of the cost in silverthalers. | <a href="#CostRange/to">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CostRange/translations">See details</a>

#### <a name="CostRange/from"></a> `from`

The lower bound of the cost in silverthalers.

- **Type:** Number
- **Exclusive Minimum:** `0`

#### <a name="CostRange/to"></a> `to`

The upper bound of the cost in silverthalers.

- **Type:** Number
- **Exclusive Minimum:** `0`

#### <a name="CostRange/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CostRange/translations[key]">CostRange/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CostRange/translations[key]"></a> `CostRange/translations[key]`

- **Type:** <a href="#CostTranslation">CostTranslation</a>

---

### <a name="CostTranslation"></a> `CostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`wrap_in_text` | The cost get wrapped by this text using a placeholder in the text. | <a href="#CostTranslation/wrap_in_text">See details</a>

#### <a name="CostTranslation/wrap_in_text"></a> `wrap_in_text`

The cost get wrapped by this text using a placeholder in the text.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\{0\}`

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
`primitive` |  | <a href="#Complexity'Primitive/primitive">See details</a>

#### <a name="Complexity'Primitive/tag"></a> `tag`

- **Constant:** `"Primitive"`

#### <a name="Complexity'Primitive/primitive"></a> `primitive`

- **Type:** <a href="#Complexity'Primitive/primitive">Object</a>

---

### <a name="Complexity'Primitive/primitive"></a> `Complexity'Primitive/primitive`

- **Type:** Empty Object

---

### <a name="Complexity'Simple"></a> `Complexity'Simple`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Complexity'Simple/tag">See details</a>
`simple` |  | <a href="#Complexity'Simple/simple">See details</a>

#### <a name="Complexity'Simple/tag"></a> `tag`

- **Constant:** `"Simple"`

#### <a name="Complexity'Simple/simple"></a> `simple`

- **Type:** <a href="#Complexity'Simple/simple">Object</a>

---

### <a name="Complexity'Simple/simple"></a> `Complexity'Simple/simple`

- **Type:** Empty Object

---

### <a name="Complexity'Complex"></a> `Complexity'Complex`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Complexity'Complex/tag">See details</a>
`complex` |  | <a href="#Complexity'Complex/complex">See details</a>

#### <a name="Complexity'Complex/tag"></a> `tag`

- **Constant:** `"Complex"`

#### <a name="Complexity'Complex/complex"></a> `complex`

- **Type:** <a href="#ComplexComplexity">ComplexComplexity</a>

---

### <a name="ComplexComplexity"></a> `ComplexComplexity`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ap_value` | The AP value for the trade secret. | <a href="#ComplexComplexity/ap_value">See details</a>

#### <a name="ComplexComplexity/ap_value"></a> `ap_value`

The AP value for the trade secret.

- **Type:** Integer
- **Minimum:** `1`

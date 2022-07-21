# [TITLE MISSING]

## Definitions

### <a name="EquipmentOfBlessedOnes"></a> `EquipmentOfBlessedOnes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#EquipmentOfBlessedOnes/cost">See details</a>
`weight` | The weight in kg. | <a href="#EquipmentOfBlessedOnes/weight">See details</a>
`complexity?` | The complexity of crafting the item. | <a href="#EquipmentOfBlessedOnes/complexity">See details</a>
`structure_points` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#EquipmentOfBlessedOnes/structure_points">See details</a>
`combat_use?` | The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item. | <a href="#EquipmentOfBlessedOnes/combat_use">See details</a>
`associated_tradition` | The deity associated with the equipment item. | <a href="#EquipmentOfBlessedOnes/associated_tradition">See details</a>
`src` |  | <a href="#EquipmentOfBlessedOnes/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#EquipmentOfBlessedOnes/translations">See details</a>

#### <a name="EquipmentOfBlessedOnes/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="EquipmentOfBlessedOnes/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

#### <a name="EquipmentOfBlessedOnes/complexity"></a> `complexity?`

The complexity of crafting the item.

- **Type:** <a href="./_Item.md#Complexity">Complexity</a>

#### <a name="EquipmentOfBlessedOnes/structure_points"></a> `structure_points`

The structure points of the item. Use an array if the item consists of
multiple components that have individual structure points.

- **Type:** <a href="./_Item.md#StructurePoints">StructurePoints</a>

#### <a name="EquipmentOfBlessedOnes/combat_use"></a> `combat_use?`

The item can also be used either as an improvised weapon or as an armor,
although this is not the primary use case of the item.

- **Type:** <a href="./_Item.md#CombatUse">CombatUse</a>

#### <a name="EquipmentOfBlessedOnes/associated_tradition"></a> `associated_tradition`

The deity associated with the equipment item.

- **Type:** <a href="../../_SimpleReferences.md#BlessedTraditionReference">BlessedTraditionReference</a>

#### <a name="EquipmentOfBlessedOnes/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="EquipmentOfBlessedOnes/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#EquipmentOfBlessedOnes/translations[key]">EquipmentOfBlessedOnes/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="EquipmentOfBlessedOnes/translations[key]"></a> `EquipmentOfBlessedOnes/translations[key]`

- **Type:** <a href="./_Item.md#DefaultItemTranslation">DefaultItemTranslation</a>
